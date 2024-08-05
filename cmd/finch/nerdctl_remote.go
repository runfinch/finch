// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"bufio"
	"fmt"
	"path/filepath"
	"runtime"
	"strings"

	"golang.org/x/exp/slices"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
)

const nerdctlCmdName = "nerdctl"

type (
	argHandler     func(systemDeps NerdctlCommandSystemDeps, args []string, index int) error
	commandHandler func(systemDeps NerdctlCommandSystemDeps, args []string) error
)

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

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	err := nc.assertVMIsRunning(nc.ncc, nc.logger)
	if err != nil {
		return err
	}
	var (
		nerdctlArgs, envs, fileEnvs       []string
		skip, hasCmdHander, hasArgHandler bool
		cmdHandler                        commandHandler
		aMap                              map[string]argHandler
		envArgPos                         int
		isDebug                           int
	)

	alias, hasAlias := aliasMap[cmdName]
	if hasAlias {
		cmdName = alias
		cmdHandler, hasCmdHander = commandHandlerMap[alias]
		aMap, hasArgHandler = argHandlerMap[alias]
	} else {
		// Check if the command has a handler
		cmdHandler, hasCmdHander = commandHandlerMap[cmdName]
		aMap, hasArgHandler = argHandlerMap[cmdName]

		if !hasCmdHander && !hasArgHandler && len(args) > 0 {
			// for commands like image build, container run
			key := fmt.Sprintf("%s %s", cmdName, args[0])
			cmdHandler, hasCmdHander = commandHandlerMap[key]
			aMap, hasArgHandler = argHandlerMap[key]
		}
	}

	// First check if the command has command handler
	if hasCmdHander {
		err := cmdHandler(nc.systemDeps, args)
		if err != nil {
			return err
		}
	}

	// envArgPos is used to preserve the position of first environment parameter
	envArgPos = -1
	// if a debug flag is passed before env arg pos we reduce the env arg pos by 1 to account for skipping debug flag
	isDebug = 0
	for i, arg := range args {
		// Check if command requires arg handling
		if hasArgHandler {
			// Check if argument for the command needs handling, sometimes it can be --file=<filename>
			b, _, _ := strings.Cut(arg, "=")
			h, ok := aMap[b]
			if ok {
				err = h(nc.systemDeps, args, i)
				if err != nil {
					return err
				}
				// This is required when the positional argument at i is mutated by argHandler, eg -v=C:\Users:/tmp:ro
				arg = args[i]
			}
		}
		// parsing environment values from the command line may pre-fetch and
		// consume the next argument; this loop variable will skip these pre-consumed
		// entries from the command line
		if skip {
			skip = false
			continue
		}
		switch {
		case arg == "--debug":
			// explicitly setting log level to avoid `--debug` flag being interpreted as nerdctl command
			if envArgPos == -1 {
				isDebug = 1
			}
			nc.logger.SetLevel(flog.Debug)
		case argIsEnv(arg):
			if envArgPos == -1 {
				envArgPos = i - isDebug
			}
			shouldSkip, addEnv := handleEnv(nc.systemDeps, arg, args[i+1])
			skip = shouldSkip
			if addEnv != "" {
				envs = append(envs, addEnv)
			}
		case strings.HasPrefix(arg, "--env-file"):
			if envArgPos == -1 {
				envArgPos = i - isDebug
			}

			shouldSkip, addEnvs, err := handleEnvFile(nc.fs, nc.systemDeps, arg, args[i+1])
			if err != nil {
				return err
			}
			skip = shouldSkip
			fileEnvs = append(fileEnvs, addEnvs...)
		case strings.HasPrefix(arg, "--add-host"):
			switch arg {
			case "--add-host":
				args[i+1], err = resolveIP(args[i+1], nc.logger, nc.ecc)
				if err != nil {
					return err
				}
			default:
				resolvedIP, err := resolveIP(arg[11:], nc.logger, nc.ecc)
				if err != nil {
					return err
				}
				arg = fmt.Sprintf("%s%s", arg[0:11], resolvedIP)
			}
			nerdctlArgs = append(nerdctlArgs, arg)
			if err != nil {
				return err
			}
		default:
			nerdctlArgs = append(nerdctlArgs, arg)
		}
	}

	// to handle environment variables properly, we add all entries found via
	// env-file includes to the map first and then all command line environment
	// flags, making sure that command line overrides environment file options,
	// and that later command line flags override earlier ones
	envVars := make(map[string]string)

	for _, e := range fileEnvs {
		evar, eval, _ := strings.Cut(e, "=")
		envVars[evar] = eval
	}
	for _, e := range envs {
		evar, eval, _ := strings.Cut(e, "=")
		envVars[evar] = eval
	}

	passedEnvs := []string{
		"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
		"AWS_SESSION_TOKEN", "COMPOSE_FILE",
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
	case "build", "pull", "push", "run":
		ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
	}

	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs := append(nc.GetCmdArgs(), append(additionalEnv, passedEnvArgs...)...)
	limaArgs = append(limaArgs, append([]string{nerdctlCmdName}, strings.Fields(cmdName)...)...)
	var envArgs []string
	for key, val := range envVars {
		envArgs = append(envArgs, "-e", fmt.Sprintf("%s=%s", key, val))
	}
	if envArgPos > -1 {
		nerdctlArgs = append(nerdctlArgs[:envArgPos], append(envArgs, nerdctlArgs[envArgPos:]...)...)
	}

	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs = append(limaArgs, nerdctlArgs...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, limaArgs...)
	}

	return nc.ncc.Create(limaArgs...).Run()
}

func argIsEnv(arg string) bool {
	if strings.HasPrefix(arg, "-e") || (strings.HasPrefix(arg, "--env") && !strings.HasPrefix(arg, "--env-file")) {
		return true
	}
	return false
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
			envVar = arg[6:]
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
