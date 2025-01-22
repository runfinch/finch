// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"bufio"
	"fmt"
	"maps"
	"path/filepath"
	"runtime"
	"strings"

	orderedmap "github.com/wk8/go-ordered-map"
	"golang.org/x/exp/slices"
	"k8s.io/apimachinery/pkg/util/sets"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
)

const nerdctlCmdName = "nerdctl"

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	err := nc.assertVMIsRunning(nc.ncc, nc.logger)
	if err != nil {
		return err
	}
	var (
		nerdctlArgs, envs, fileEnvs, cmdArgs, runArgs []string
		skip, hasCmdHandler, hasArgHandler, lastOpt   bool
		cmdHandler                                    commandHandler
		aMap                                          map[string]argHandler
		firstOptPos                                   int
		inspectType                                   string
	)

	// accumulate distributed map entities
	aggAliasMap := make(map[string]string)
	maps.Copy(aggAliasMap, aliasMap)
	maps.Copy(aggAliasMap, osAliasMap)

	aggCmdHandlerMap := make(map[string]commandHandler)
	maps.Copy(aggCmdHandlerMap, commandHandlerMap)
	maps.Copy(aggCmdHandlerMap, osCommandHandlerMap)

	aggArgHandlerMap := make(map[string]map[string]argHandler)
	for k := range argHandlerMap {
		aggArgHandlerMap[k] = make(map[string]argHandler)
		maps.Copy(aggArgHandlerMap[k], argHandlerMap[k])
	}
	for k := range osArgHandlerMap {
		if _, ok := aggArgHandlerMap[k]; !ok {
			aggArgHandlerMap[k] = make(map[string]argHandler)
		}
		maps.Copy(aggArgHandlerMap[k], osArgHandlerMap[k])
	}

	alias, hasAlias := aggAliasMap[cmdName]
	if hasAlias {
		cmdName = alias
		cmdHandler, hasCmdHandler = aggCmdHandlerMap[alias]
		aMap, hasArgHandler = aggArgHandlerMap[alias]
	} else {
		// Check if the command has a handler
		cmdHandler, hasCmdHandler = aggCmdHandlerMap[cmdName]
		aMap, hasArgHandler = aggArgHandlerMap[cmdName]

		if !hasCmdHandler && !hasArgHandler && len(args) > 0 {
			// for commands like image build, container run
			key := fmt.Sprintf("%s %s", cmdName, args[0])
			cmdHandler, hasCmdHandler = aggCmdHandlerMap[key]
			aMap, hasArgHandler = aggArgHandlerMap[key]
		}
	}

	// First check if the command has command handler
	if hasCmdHandler {
		err := cmdHandler(nc.systemDeps, nc.fc, &cmdName, &args, &inspectType)
		if err != nil {
			return err
		}
	}

	switch cmdName {
	case "container run", "exec", "compose":
		// check if an option flag is present; immediately following the command
		switch {
		case args[0] == "run" && strings.HasPrefix(args[1], "-"):
			firstOptPos = 1
		case strings.HasPrefix(args[0], "-"):
			firstOptPos = 0
		default:
			firstOptPos = -1
		}
		// lastOpt is used to track when no more flags need to be processed
		lastOpt = false

		shortFlagBoolSet := cmdFlagSetMap[cmdName]["shortBoolFlags"]
		longFlagBoolSet := cmdFlagSetMap[cmdName]["longBoolFlags"]

		shortFlagArgSet := cmdFlagSetMap[cmdName]["shortArgFlags"]

		for i, arg := range args {
			// Check if individual argument (and possibly following value) requires manipulation-in-place handling
			if hasArgHandler {
				// Check if argument for the command needs handling, sometimes it can be --file=<filename>
				b, _, _ := strings.Cut(arg, "=")
				h, ok := aMap[b]
				if ok {
					err = h(nc.systemDeps, nc.fc, args, i)
					if err != nil {
						return err
					}
					// This is required when the positional argument at i is mutated by argHandler, eg -v=C:\Users:/tmp:ro
					arg = args[i]
				}
			}

			// parsing arguments from the command line
			// may pre-fetch and consume the next argument;
			// the loop variable will skip any pre-consumed args
			if skip {
				skip = false
				continue
			}

			// after last Option position is found, pass through each arg as an internal command argument (short-circuit)
			if lastOpt {
				cmdArgs = append(cmdArgs, arg)
				continue
			}
			switch {
			case arg == "--debug":
				nc.logger.SetLevel(flog.Debug)
			case arg == "--help":
				nerdctlArgs = append(nerdctlArgs, arg)
			case arg == "--add-host":
				// exact match to --add-host. resolve ip if param passed
				if len(args) > i+1 {
					args[i+1], err = resolveIP(args[i+1], nc.logger, nc.ecc)
					if err != nil {
						return err
					}
				}
				nerdctlArgs = append(nerdctlArgs, arg)
			case strings.HasPrefix(arg, "--add-host"):
				// arg begins with --add-host
				resolvedIP, err := resolveIP(arg[11:], nc.logger, nc.ecc)
				if err != nil {
					return err
				}
				arg = fmt.Sprintf("%s%s", arg[0:11], resolvedIP)
				nerdctlArgs = append(nerdctlArgs, arg)
			case strings.HasPrefix(arg, "--env-file"):
				// exact match to --env-file
				// or arg begins with --env-file
				if len(args) > i+1 {
					shouldSkip, addEnvs, err := handleEnvFile(nc.fs, nc.systemDeps, arg, args[i+1])
					if err != nil {
						return err
					}
					skip = shouldSkip
					fileEnvs = append(fileEnvs, addEnvs...)
				} else {
					// if --env-file is at the end of the args, its refers to entrypoint command
					// which need not be handled
					nerdctlArgs = append(nerdctlArgs, arg)
				}
			case argIsEnv(arg):
				// exact match to either -e or --env
				// or arg begins with -e or --env
				//     -e="<value>", -e"<value>"
				//     --env="<key>=<value>", --env"<key>=<value>"
				if len(args) > i+1 {
					shouldSkip, addEnv := handleEnv(nc.systemDeps, arg, args[i+1])
					skip = shouldSkip
					if addEnv != "" {
						envs = append(envs, addEnv)
					}
				} else {
					// if -e or --env is at the end of the args, its refers to entrypoint command
					// which need not be handled
					nerdctlArgs = append(nerdctlArgs, arg)
				}
			case shortFlagBoolSet.Has(arg) || longFlagBoolSet.Has(arg):
				// exact match to a short no argument flag: -?
				// or exact match to: --<long_flag>
				nerdctlArgs = append(nerdctlArgs, arg)
			case longFlagBoolSet.Has(strings.Split(arg, "=")[0]):
				// begins with --<long_flag>
				//    e.g. --sig-proxy=false
				nerdctlArgs = append(nerdctlArgs, arg)
			case shortFlagBoolSet.Has(arg[:2]):
				// or begins with a defined short no argument flag, but is adjacent to something
				//   -????   one or more short bool flags; no following values
				//   -????="<value>" one or more short bool flags ending with a short arg flag equated to value
				//   -????"<value>" one or more short bool flags ending with a short arg flag concatenated to value
				addArg := nc.handleMultipleShortFlags(shortFlagBoolSet, shortFlagArgSet, args, i)
				nerdctlArgs = append(nerdctlArgs, addArg)
			case shortFlagArgSet.Has(arg) || shortFlagArgSet.Has(arg[:2]):
				// exact match to a short arg flag: -?
				//     next arg must be the <value>
				// or begins with a short arg flag:
				//     short arg flag concatenated to value: -?"<value>"
				//     short arg flag equated to value: -?="<value>" or -?=<value>
				if len(args) > i+1 {
					shouldSkip, addKey, addVal := nc.handleFlagArg(arg, args[i+1])
					skip = shouldSkip
					if addKey != "" {
						nerdctlArgs = append(nerdctlArgs, addKey)
						nerdctlArgs = append(nerdctlArgs, addVal)
					}
				} else {
					// no value found for short arg flag
					// pass the arg as a nerdctl command argument
					nerdctlArgs = append(nerdctlArgs, arg)
				}
			case strings.HasPrefix(arg, "--"):
				// exact match to a long arg flag: -<long_flag>
				//     next arg must be the <value>
				// or begins with a long arg flag:
				//     long arg flag concatenated to value: --<long_flag>"<value>"
				//     long arg flag equated to value: --<long_flag>="<value>" or --<long_flag>=<value>
				if len(args) > i+1 {
					shouldSkip, addKey, addVal := nc.handleFlagArg(arg, args[i+1])
					skip = shouldSkip
					if addKey != "" {
						nerdctlArgs = append(nerdctlArgs, addKey)
						nerdctlArgs = append(nerdctlArgs, addVal)
					}
				} else {
					// if --<long flag> is at the end of the args, its refers to entrypoint command
					// which need not be handled
					nerdctlArgs = append(nerdctlArgs, arg)
				}
			default:
				// arg other than a flag ("-?","--<long_flag>") or a skipped <flag_value>
				switch {
				case (i < firstOptPos):
					// arg is a value prior to the first found flag
					// pass the arg as a nerdctl command argument
					nerdctlArgs = append(nerdctlArgs, arg)
				case (i >= firstOptPos) && !lastOpt:
					// The first arg after procecssing the flags establishes the last Option Pos
					lastOpt = true
					cmdArgs = append(cmdArgs, arg)
				default:
					// Unexpected case
					// pass the arg as a nerdctl arg by default
					nc.logger.Debugln("Unexpected Arg Value: ", arg)
					nerdctlArgs = append(nerdctlArgs, arg)
				}
			}
		}

		// to handle environment variables properly, we add all entries found via
		// env-file includes to the map first and then all command line environment
		// flags, making sure that command line overrides environment file options,
		// and that later command line flags override earlier ones
		envVars := orderedmap.New()

		for _, e := range fileEnvs {
			evar, eval, _ := strings.Cut(e, "=")
			envVars.Set(evar, eval)
		}
		for _, e := range envs {
			evar, eval, _ := strings.Cut(e, "=")
			envVars.Set(evar, eval)
		}

		var envArgs []string
		for pair := envVars.Oldest(); pair != nil; pair = pair.Next() {
			envArgs = append(envArgs, "-e", fmt.Sprintf("%s=%s", pair.Key, pair.Value))
		}

		nerdctlArgs = append(nerdctlArgs, envArgs...)
		nerdctlArgs = append(nerdctlArgs, cmdArgs...)
	default:

		for i, arg := range args {
			// Check if individual argument (and possibly following value) requires manipulation-in-place handling
			if hasArgHandler {
				// Check if argument for the command needs handling, sometimes it can be --file=<filename>
				b, _, _ := strings.Cut(arg, "=")
				h, ok := aMap[b]
				if ok {
					err = h(nc.systemDeps, nc.fc, args, i)
					if err != nil {
						return err
					}
					// This is required when the positional argument at i is mutated by argHandler, eg -v=C:\Users:/tmp:ro
					arg = args[i]
				}
			}

			switch {
			case arg == "--debug":
				nc.logger.SetLevel(flog.Debug)
			case arg == "--help":
				nerdctlArgs = append(nerdctlArgs, arg)
			default:
				nerdctlArgs = append(nerdctlArgs, arg)
			}
		}
	}

	passedEnvs := []string{
		"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
		"AWS_SESSION_TOKEN", "COMPOSE_FILE", "SOURCE_DATE_EPOCH",
		"AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR", "AWS_ECR_IGNORE_CREDS_STORAGE",
	}

	var passedEnvArgs []string
	for _, e := range passedEnvs {
		v, b := nc.systemDeps.LookupEnv(e)
		if !b {
			continue
		}
		if runtime.GOOS == "windows" && e == "COMPOSE_FILE" {
			wslPath, err := convertToWSLPath(nc.systemDeps, v)
			if err != nil {
				return err
			}
			v = wslPath
		}
		passedEnvArgs = append(passedEnvArgs, fmt.Sprintf("%s=%s", e, v))
	}

	var additionalEnv []string
	switch cmdName {
	case "image":
		if slices.Contains(args, "build") || slices.Contains(args, "pull") || slices.Contains(args, "push") {
			ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
		}
	case "container":
		if slices.Contains(args, "run") {
			ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
		}
	case "build", "pull", "push", "container run":
		ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
	}

	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs := append(nc.GetCmdArgs(), append(additionalEnv, passedEnvArgs...)...)

	limaArgs = append(limaArgs, append([]string{nerdctlCmdName}, strings.Fields(cmdName)...)...)

	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	runArgs = append(runArgs, limaArgs...)
	runArgs = append(runArgs, nerdctlArgs...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, runArgs...)
	}

	if inspectType == "container" && nc.fc.DockerCompat && !slices.Contains(runArgs, "--format") {
		runArgs = append(runArgs, "--format", "{{json .}}")
		cmd := nc.ncc.Create(runArgs...)
		return inspectContainerOutputHandler(cmd)
	}

	if err := handleDockerCompatComposeVersion(cmdName, *nc, cmdArgs); err == nil {
		return nil
	}

	return nc.ncc.Create(runArgs...).Run()
}

func (nc *nerdctlCommand) assertVMIsRunning(creator command.NerdctlCmdCreator, logger flog.Logger) error {
	// Extra call to check VM before running nerdctl commands. These are the reasons of not doing message replacing
	// 1. for the non-help commands, replacing stdout may cause "stdin is not a terminal" error for the commands that need input.
	// E.g. finch login.
	// 2. an extra call could give us more control about the error messages. Message replacing may fail if upstream
	// changes the format of source string, which leads to extra CI validation work.
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("instance %q does not exist, run `finch %s init` to create a new instance",
			limaInstanceName, virtualMachineRootCmd)
	case lima.Stopped:
		return fmt.Errorf("instance %q is stopped, run `finch %s start` to start the instance",
			limaInstanceName, virtualMachineRootCmd)
	default:
		return nil
	}
}

func argIsEnv(arg string) bool {
	return strings.HasPrefix(arg, "-e") || (strings.HasPrefix(arg, "--env") && !strings.HasPrefix(arg, "--env-file"))
}

func (nc *nerdctlCommand) handleMultipleShortFlags(
	shortFlagBoolSet sets.Set[string],
	shortFlagArgSet sets.Set[string],
	args []string,
	index int,
) string {
	arg := args[index]
	nextArg := args[index+1]

	argFlagFinal := false
	argFlagMid := false
	lastPos := len(arg) - 1

	// Scan the compound shortFlag arg for details
	for i, c := range strings.Split(arg, "") {
		switch {
		case c == "-":
			continue
		case i != lastPos && shortFlagArgSet.Has("-"+c):
			argFlagMid = true
		case i == lastPos && shortFlagArgSet.Has("-"+c):
			argFlagFinal = true
		default:
			if !shortFlagBoolSet.Has("-" + c) {
				nc.logger.Debugf("The group of short flags contains an unexpected value: %s, %s", arg, c)
			}
		}
	}

	switch {
	case argFlagMid:
		// if a flag in the middle requires arguments,
		//    but there are more short flags immediately following
		//    then include a finch debug comment
		//    and pass the concatenated arg to nerdctl
		nc.logger.Debugln("Mid Position Short Flag requires an Arg: ", arg)
	case argFlagFinal:
		// pre-pend the shortFlagArg member to the next Arg
		separatedShortFlag := "-" + arg[lastPos:]
		args[index+1] = separatedShortFlag + nextArg
		// remove the shortFlagArg member from the current Arg
		args[index] = arg[:lastPos]
		arg = args[index]
	default:
		// if every following character is a shortFlagBool
		//    then pass into nerdctlArgs
	}

	return arg
}

func (nc *nerdctlCommand) handleFlagArg(arg string, nextArg string) (bool, string, string) {
	// handling Flag arguments other than environment variables
	//    note: a Bool Flag should not be passed into this helper function; only Flags that are followed by one argument
	var (
		flagKey, flagVal string
		skip             bool
	)
	switch {
	case strings.HasPrefix(arg, "--") && strings.Contains(arg, "="):
		// long flag concatenated to value by '=': --<long_flag>="<value>"
		skip = false
		flagKey, flagVal, _ = strings.Cut(arg, "=")
	case strings.HasPrefix(arg, "--") && !strings.HasPrefix(nextArg, "-"):
		// long flag followed by a value: --<long_flag> "<value>"
		skip = true
		flagKey = arg
		flagVal = nextArg
	// undefined case: long flag adjacent to value: --<long_flag>"<value>" or --<long_flag><value>
	case strings.HasPrefix(arg, "-") && strings.Contains(arg, "="):
		// short flag concatenated to value by '=': -?="<value>" or -?=<value>
		skip = false
		flagKey, flagVal, _ = strings.Cut(arg, "=")
	case strings.HasPrefix(arg, "-") && len(arg) > 2:
		// short flag adjacent to value: -?"<value>" or -?<value>
		skip = false
		flagKey = arg[:2]
		flagVal = arg[2:]
	case strings.HasPrefix(arg, "-") && len(arg) == 2 && !strings.HasPrefix(nextArg, "-"):
		// short flag followed by a value: -? "<value>" or -? <value>
		skip = true
		flagKey = arg
		flagVal = nextArg
	default:
		return false, "", ""
	}

	return skip, flagKey, flagVal
}

func handleEnv(systemDeps NerdctlCommandSystemDeps, arg, arg2 string) (bool, string) {
	var (
		envVar string
		skip   bool
	)
	switch arg {
	case "-e", "--env":
		skip = true
		envVar = arg2
	default:
		// flag and value are in the same string
		if strings.HasPrefix(arg, "-e") {
			envVar = arg[2:]
		} else {
			// only other case is "--env="; skip that prefix
			eqPos := strings.Index(arg, "=")
			envVar = arg[eqPos+1:]
		}
	}

	if strings.Contains(envVar, "=") {
		return skip, envVar
	}
	// if no value was provided we need to check the OS environment
	// for a value and only set if it exists in the current env
	if val, ok := systemDeps.LookupEnv(envVar); ok {
		return skip, fmt.Sprintf("%s=%s", envVar, val)
	}
	// no value found; do not set the variable in the env
	return skip, ""
}

func handleEnvFile(fs afero.Fs, systemDeps NerdctlCommandSystemDeps, arg, arg2 string) (bool, []string, error) {
	var (
		filename string
		skip     bool
	)

	switch arg {
	case "--env-file":
		skip = true
		filename = arg2
	default:
		filename = arg[11:]
	}

	file, err := fs.Open(filepath.Clean(filename))
	if err != nil {
		return false, []string{}, err
	}
	defer file.Close() //nolint:errcheck // We did not write to the file, and the file will be closed when the CLI process exits anyway.

	scanner := bufio.NewScanner(file)

	var envs []string
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if len(line) == 0 {
			continue
		}
		switch {
		case strings.HasPrefix(line, "#"):
			// ignore comments
			continue
		case !strings.Contains(line, "="):
			// only has the variable name; need to lookup value
			if val, ok := systemDeps.LookupEnv(line); ok {
				envs = append(envs, fmt.Sprintf("%s=%s", line, val))
			}
		default:
			// contains a name and value
			envs = append(envs, line)
		}
	}
	if err := scanner.Err(); err != nil {
		return skip, []string{}, err
	}
	return skip, envs, nil
}
