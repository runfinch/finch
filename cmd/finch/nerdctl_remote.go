// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"path/filepath"
	"regexp"
	"runtime"
	"strings"

	"github.com/aws/aws-sdk-go-v2/aws"
	orderedmap "github.com/wk8/go-ordered-map"
	"golang.org/x/exp/slices"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
)

const nerdctlCmdName = "nerdctl"

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	if err := nc.assertVMIsRunning(nc.ncc, nc.logger); err != nil {
		return err
	}

	envSet := nc.initializeEnvSet()
	args, err := nc.processArgs(args, envSet)
	if err != nil {
		return err
	}

	envArgs, err := nc.getEnvArgs(envSet)
	if err != nil {
		return err
	}
	remoteCredentialEnv := nc.getRemoteCredentialEnv()
	runArgs := append(nc.GetCmdArgs(), append(remoteCredentialEnv, envArgs...)...)
	runArgs = append(runArgs, append([]string{nerdctlCmdName}, strings.Fields(cmdName)...)...)
	runArgs = append(runArgs, args...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, runArgs...)
	}
	return nc.ncc.Create(runArgs...).Run()
}

func (nc *nerdctlCommand) runDockerCompatInspect(cmdName string, args []string) error {
	if err := nc.assertVMIsRunning(nc.ncc, nc.logger); err != nil {
		return err
	}

	envSet := nc.initializeEnvSet()
	args, err := nc.processArgs(args, envSet)
	if err != nil {
		return err
	}

	envArgs, err := nc.getEnvArgs(envSet)
	if err != nil {
		return err
	}

	remoteCredentialEnv := nc.getRemoteCredentialEnv()
	runArgs := append(nc.GetCmdArgs(), append(remoteCredentialEnv, envArgs...)...)
	runArgs = append(runArgs, append([]string{nerdctlCmdName}, strings.Fields(cmdName)...)...)
	runArgs = append(runArgs, args...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, runArgs...)
	}

	if !slices.Contains(runArgs, "--format") {
		runArgs = append(runArgs, "--format", "{{json .}}")
	}

	cmd := nc.ncc.Create(runArgs...)
	return inspectContainerOutputHandler(cmd)
}

func (nc *nerdctlCommand) initializeEnvSet() *orderedmap.OrderedMap {
	passedEnvs := []string{
		"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
		"AWS_SESSION_TOKEN", "COMPOSE_FILE", "SOURCE_DATE_EPOCH",
		"AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR", "AWS_ECR_IGNORE_CREDS_STORAGE",
	}
	envSet := orderedmap.New()
	for _, env := range passedEnvs {
		envSet.Set(env, true)
	}
	return envSet
}

func (nc *nerdctlCommand) processArgs(args []string, envSet *orderedmap.OrderedMap) ([]string, error) {
	var processedArgs []string
	for i := 0; i < len(args); i++ {
		arg := args[i]
		if runtime.GOOS == "windows" {
			args[i] = nc.handleWindowsPaths(args[i])
		}
		switch {
		case arg == "--debug":
			nc.logger.SetLevel(flog.Debug)
			continue
		case strings.HasPrefix(arg, "--add-host"):
			if arg == "--add-host" && i+1 < len(args) {
				resolvedIP, err := resolveIP(args[i+1], nc.logger, nc.ecc)
				if err != nil {
					return nil, err
				}
				args[i+1] = resolvedIP
			} else {
				resolvedIP, err := resolveIP(arg[11:], nc.logger, nc.ecc)
				if err != nil {
					return nil, err
				}
				args[i] = fmt.Sprintf("--add-host=%s", resolvedIP)
			}
		case strings.HasPrefix(arg, "--env-file"):
			err := nc.handleEnvFileArg(arg, args, i, envSet)
			if err != nil {
				return nil, err
			}
		case strings.HasPrefix(arg, "--env"), strings.HasPrefix(arg, "-e"):
			nc.handleEnvArg(arg, args, i, envSet)
		}
		processedArgs = append(processedArgs, args[i])
	}

	return processedArgs, nil
}

func (nc *nerdctlCommand) getEnvArgs(envSet *orderedmap.OrderedMap) ([]string, error) {
	var passedEnvArgs []string
	for pair := envSet.Oldest(); pair != nil; pair = pair.Next() {
		value, exists := nc.systemDeps.LookupEnv(pair.Key.(string))
		if !exists {
			continue
		}
		if runtime.GOOS == "windows" {
			if key, ok := pair.Key.(string); ok && key == "COMPOSE_FILE" {
				wslPath, err := convertToWSLPath(nc.systemDeps, value)
				if err != nil {
					return nil, err
				}
				value = wslPath
			}
		}
		if key, ok := pair.Key.(string); ok {
			passedEnvArgs = append(passedEnvArgs, fmt.Sprintf("%s=%s", key, value))
		}
	}
	return passedEnvArgs, nil
}

func (nc *nerdctlCommand) getRemoteCredentialEnv() []string {
	var additionalEnv []string
	ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
	return additionalEnv
}

// ensureRemoteCredentials is called before any actions that may require remote resources, in order
// to ensure that fresh credentials are available inside the VM.
// For more details on how `aws configure export-credentials` works, checks the docs.
//
// [the docs]: https://awscli.amazonaws.com/v2/documentation/api/latest/reference/configure/export-credentials.html
func ensureRemoteCredentials(
	fc *config.Finch,
	ecc command.Creator,
	outEnv *[]string,
	logger flog.Logger,
) {
	if slices.Contains(fc.CredsHelpers, "ecr-login") {
		out, err := ecc.Create(
			"aws",
			"configure",
			"export-credentials",
			"--format",
			"process",
		).CombinedOutput()
		if err != nil {
			logger.Debugln("failed to run `aws configure` command")
			return
		}

		var exportCredsOut aws.Credentials
		err = json.Unmarshal(out, &exportCredsOut)
		if err != nil {
			logger.Debugln("`aws configure export-credentials` output is unexpected, is command available? " +
				"This may result in a broken ecr-credential helper experience.")
			return
		}

		*outEnv = append(*outEnv, fmt.Sprintf("AWS_ACCESS_KEY_ID=%s", exportCredsOut.AccessKeyID))
		*outEnv = append(*outEnv, fmt.Sprintf("AWS_SECRET_ACCESS_KEY=%s", exportCredsOut.SecretAccessKey))
		*outEnv = append(*outEnv, fmt.Sprintf("AWS_SESSION_TOKEN=%s", exportCredsOut.SessionToken))
	}
}

func (nc *nerdctlCommand) handleEnvArg(arg string, args []string, i int, envSet *orderedmap.OrderedMap) {
	// This is an un-necessary operation that happens due to parsing of any -e/--env/--env-file for exec commands of run and exec
	// as part of lookup or processing of env file.
	var envVar string
	switch {
	case strings.HasPrefix(arg, "--env="):
		envVar = arg[6:]
	case arg == "--env" && i+1 < len(args):
		envVar = args[i+1]
	case strings.HasPrefix(arg, "-e="):
		envVar = arg[3:]
	case arg == "-e" && i+1 < len(args):
		envVar = args[i+1]
	}

	if strings.Contains(envVar, "=") {
		return
	}
	_, exists := envSet.Get(envVar)
	if envVar != "" && !exists {
		envSet.Set(envVar, true)
	}
}

func (nc *nerdctlCommand) handleEnvFileArg(arg string, args []string, i int, envSet *orderedmap.OrderedMap) error {
	var envFile string
	if strings.HasPrefix(arg, "--env-file=") {
		envFile = arg[11:]
	} else if arg == "--env-file" && i+1 < len(args) {
		envFile = args[i+1]
	}

	if envFile != "" {
		unassignedVars, err := nc.processEnvFile(envFile, envSet)
		if err != nil {
			return err
		}
		for _, envVar := range unassignedVars {
			envSet.Set(envVar, true)
		}
	}
	return nil
}

func (nc *nerdctlCommand) handleWindowsPaths(arg string) string {
	re := regexp.MustCompile(`(?:^|[,:=])([a-zA-Z]:[\\/][^ ,:]*)`)
	return re.ReplaceAllStringFunc(arg, func(match string) string {
		separator := ""
		if match[0] == ',' || match[0] == ':' || match[0] == '=' {
			separator = string(match[0])
			match = match[1:]
		}
		wslPath, _ := convertToWSLPath(nc.systemDeps, match)
		return separator + wslPath
	})
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

func (nc *nerdctlCommand) processEnvFile(envFile string, existingVars *orderedmap.OrderedMap) ([]string, error) {
	file, err := nc.fs.Open(filepath.Clean(envFile))
	if err != nil {
		return nil, err
	}
	defer file.Close() //nolint:errcheck // We did not write to the file, and the file will be closed when the CLI process exits anyway.

	scanner := bufio.NewScanner(file)

	var unassignedVars []string
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if len(line) == 0 {
			continue
		}
		_, exists := existingVars.Get(line)
		switch {
		case strings.HasPrefix(line, "#"):
			// ignore comments
			continue
		case !strings.Contains(line, "=") && !exists:
			unassignedVars = append(unassignedVars, line)
		}
	}
	if err := scanner.Err(); err != nil {
		return nil, err
	}
	return unassignedVars, nil
}
