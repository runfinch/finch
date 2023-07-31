// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	dockerops "github.com/docker/docker/opts"
	"github.com/lima-vm/lima/pkg/networks"
	"golang.org/x/exp/slices"

	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/system"

	"k8s.io/apimachinery/pkg/util/sets"
)

const nerdctlCmdName = "nerdctl"

// NerdctlCommandSystemDeps contains the system dependencies for newNerdctlCommand.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../../pkg/mocks/nerdctl_cmd_system_deps.go -package=mocks -mock_names NerdctlCommandSystemDeps=NerdctlCommandSystemDeps -source=nerdctl.go NerdctlCommandSystemDeps
type NerdctlCommandSystemDeps interface {
	system.EnvChecker
}

type nerdctlCommandCreator struct {
	lcc        command.LimaCmdCreator
	ecc        command.Creator
	systemDeps NerdctlCommandSystemDeps
	logger     flog.Logger
	fs         afero.Fs
	fc         *config.Finch
}

func newNerdctlCommandCreator(
	lcc command.LimaCmdCreator,
	ecc command.Creator,
	systemDeps NerdctlCommandSystemDeps,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) *nerdctlCommandCreator {
	return &nerdctlCommandCreator{lcc: lcc, ecc: ecc, systemDeps: systemDeps, logger: logger, fs: fs, fc: fc}
}

func (ncc *nerdctlCommandCreator) create(cmdName string, cmdDesc string) *cobra.Command {
	command := &cobra.Command{
		Use:   cmdName,
		Short: cmdDesc,
		// If we don't specify it, and the user issues `finch run -d alpine`,
		// the args passed to nerdctlCommand.run will be empty because
		// cobra will try to parse `-d alpine` as if alpine is the value of the `-d` flag.
		DisableFlagParsing: true,
		RunE:               newNerdctlCommand(ncc.lcc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter,
	}

	return command
}

type nerdctlCommand struct {
	lcc        command.LimaCmdCreator
	ecc        command.Creator
	systemDeps NerdctlCommandSystemDeps
	logger     flog.Logger
	fs         afero.Fs
	fc         *config.Finch
}

func newNerdctlCommand(
	lcc command.LimaCmdCreator,
	ecc command.Creator,
	systemDeps NerdctlCommandSystemDeps,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) *nerdctlCommand {
	return &nerdctlCommand{lcc: lcc, ecc: ecc, systemDeps: systemDeps, logger: logger, fs: fs, fc: fc}
}

func (nc *nerdctlCommand) runAdapter(cmd *cobra.Command, args []string) error {
	return nc.run(cmd.Name(), args)
}

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	err := nc.assertVMIsRunning(nc.lcc, nc.logger)
	if err != nil {
		return err
	}
	var (
		nerdctlArgs, envs, fileEnvs []string
		skip                        bool
		volumes                     []string
	)

	dockerCompat := isDockerCompatEnvSet(nc.systemDeps)
	firstVolumeIndex := -1

	for i, arg := range args {
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
			nc.logger.SetLevel(flog.Debug)
		case argIsEnv(arg):
			shouldSkip, addEnv := handleEnv(nc.systemDeps, arg, args[i+1])
			skip = shouldSkip
			if addEnv != "" {
				envs = append(envs, addEnv)
			}
		case strings.HasPrefix(arg, "--env-file"):
			shouldSkip, addEnvs, err := handleEnvFile(nc.fs, nc.systemDeps, arg, args[i+1])
			if err != nil {
				return err
			}
			skip = shouldSkip
			fileEnvs = append(fileEnvs, addEnvs...)
		case strings.HasPrefix(arg, "--add-host"):
			switch arg {
			case "--add-host":
				args[i+1] = resolveIP(args[i+1], nc.logger)
			default:
				resolvedIP := resolveIP(arg[11:], nc.logger)
				arg = fmt.Sprintf("%s%s", arg[0:11], resolvedIP)
			}
			nerdctlArgs = append(nerdctlArgs, arg)
		case strings.HasPrefix(arg, "-v") || strings.HasPrefix(arg, "--volume"):
			// TODO: remove the case branch when the Nerdctl fix is released to Finch.
			// Nerdctl tracking issue: https://github.com/containerd/nerdctl/issues/2254.
			if dockerCompat {
				if firstVolumeIndex == -1 {
					firstVolumeIndex = i
				}
				volume, shouldSkip := getVolume(arg, args[i+1])
				volumes = append(volumes, volume)
				skip = shouldSkip
			} else {
				nerdctlArgs = append(nerdctlArgs, arg)
			}
		default:
			nerdctlArgs = append(nerdctlArgs, arg)
		}
	}

	if dockerCompat {
		// Need to insert to the middle to prevent messing up the subcommands at the beginning and the image ref at the end.
		// The first volume index is a good middle position.
		volumes = sortVolumes(volumes)
		for i, vol := range volumes {
			position := firstVolumeIndex + i*2
			nerdctlArgs = append(nerdctlArgs[:position], append([]string{"-v", vol}, nerdctlArgs[position:]...)...)
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
		"AWS_SESSION_TOKEN",
	}

	var passedEnvArgs []string
	for _, e := range passedEnvs {
		v, b := nc.systemDeps.LookupEnv(e)
		if b {
			passedEnvArgs = append(passedEnvArgs, fmt.Sprintf("%s=%s", e, v))
		}
	}

	var additionalEnv []string
	switch cmdName {
	case "build", "pull", "push":
		ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
	}

	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs := append([]string{"shell", limaInstanceName, "sudo", "-E"}, append(additionalEnv, passedEnvArgs...)...)

	limaArgs = append(limaArgs, []string{nerdctlCmdName, cmdName}...)

	var finalArgs []string
	for key, val := range envVars {
		finalArgs = append(finalArgs, "-e", fmt.Sprintf("%s=%s", key, val))
	}
	finalArgs = append(finalArgs, nerdctlArgs...)
	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs = append(limaArgs, finalArgs...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.lcc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, limaArgs...)
	}

	return nc.lcc.Create(limaArgs...).Run()
}

func (nc *nerdctlCommand) assertVMIsRunning(creator command.LimaCmdCreator, logger flog.Logger) error {
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

// shouldReplaceForHelp returns true if we should replace "nerdctl" with "finch" for the output of the given command.
func (nc *nerdctlCommand) shouldReplaceForHelp(cmdName string, args []string) bool {
	// The implicit help commands mean that if users input "finch" without any args, it will return the help of it.
	// Not all the commands are implicit help commands
	implicitHelpCmdSet := sets.NewString("system", "builder", "compose", "container", "image", "network", "volume")

	if len(args) == 0 {
		if implicitHelpCmdSet.Has(cmdName) {
			return true
		}
	}

	for _, arg := range args {
		if arg == "--help" || arg == "-h" {
			return true
		}
	}

	return false
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

// getVolume extracts the volume string from a command line argument.
// It handles both "--volume=" and "-v=" prefixes.
// The function returns the extracted volume string and a boolean value indicating whether the volume was found in the next argument.
// If the volume string was found in the provided 'arg' string (with "--volume=" or "-v=" prefix), it returns the volume and 'false'.
// If the volume string wasn't in the 'arg', it assumes it's in the 'nextArg' string and returns 'nextArg' and 'true'.
func getVolume(arg, nextArg string) (string, bool) {
	for _, prefix := range []string{"--volume=", "-v="} {
		if strings.HasPrefix(arg, prefix) {
			return arg[len(prefix):], false
		}
	}
	return nextArg, true
}

func resolveIP(host string, logger flog.Logger) string {
	parts := strings.SplitN(host, ":", 2)
	// If the IP Address is a string called "host-gateway", replace this value with the IP address that can be used to
	// access host from the containers.
	// TODO: make the host gateway ip configurable.
	if parts[1] == dockerops.HostGatewayName {
		resolvedIP := networks.SlirpGateway
		logger.Debugf(`Resolving special IP "host-gateway" to %q for host %q`, resolvedIP, parts[0])
		return fmt.Sprintf("%s:%s", parts[0], resolvedIP)
	}
	return host
}

func sortVolumes(volumes []string) []string {
	type volume struct {
		original    string
		destination string
	}

	volumeSlices := make([]volume, 0)
	for _, vol := range volumes {
		splitVol := strings.Split(vol, ":")
		if len(splitVol) >= 2 {
			volumeSlices = append(volumeSlices, volume{
				original:    vol,
				destination: splitVol[1],
			})
		} else {
			// Still need to put the volume string back if it is in other format.
			volumeSlices = append(volumeSlices, volume{
				original:    vol,
				destination: "",
			})
		}
	}
	sort.Slice(volumeSlices, func(i, j int) bool {
		// Consistent with the less function in Docker.
		// https://github.com/moby/moby/blob/0db417451313474133c5ed62bbf95e2d3c92444d/daemon/volumes.go#L45
		c1 := strings.Count(filepath.Clean(volumeSlices[i].destination), string(os.PathSeparator))
		c2 := strings.Count(filepath.Clean(volumeSlices[j].destination), string(os.PathSeparator))
		return c1 < c2
	})
	sortedVolumes := make([]string, 0)
	for _, vol := range volumeSlices {
		sortedVolumes = append(sortedVolumes, vol.original)
	}
	return sortedVolumes
}

// isDockerCompatEnvSet checks if the FINCH_DOCKER_COMPAT environment variable is set, so that callers can
// modify behavior to match docker instead of nerdctl.
// Intended to be used for temporary workarounds until changes are merged upstream.
func isDockerCompatEnvSet(systemDeps NerdctlCommandSystemDeps) bool {
	_, s := systemDeps.LookupEnv("FINCH_DOCKER_COMPAT")
	return s
}

// ensureRemoteCredentials is called before any actions that may require remote resources, in order
// to ensure that fresh credentials are available inside the VM.
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
		}

		var exportCredsOut credentials.Value
		err = json.Unmarshal(out, &exportCredsOut)
		if err != nil {
			logger.Debugln("`aws configure export-credentials` output is unexpected, is command available?")
		}

		*outEnv = append(*outEnv, fmt.Sprintf("AWS_ACCESS_KEY_ID=%s", exportCredsOut.AccessKeyID))
		*outEnv = append(*outEnv, fmt.Sprintf("AWS_SECRET_ACCESS_KEY=%s", exportCredsOut.SecretAccessKey))
		*outEnv = append(*outEnv, fmt.Sprintf("AWS_SESSION_TOKEN=%s", exportCredsOut.SessionToken))
	}
}

var nerdctlCmds = map[string]string{
	"build":     "Build an image from Dockerfile",
	"builder":   "Manage builds",
	"commit":    "Create a new image from a container's changes",
	"compose":   "Compose",
	"container": "Manage containers",
	"create":    "Create a new container",
	"cp":        "Copy files/folders between a running container and the local filesystem",
	"events":    "Get real time events from the server",
	"exec":      "Run a command in a running container",
	"history":   "Show the history of an image",
	"image":     "Manage images",
	"images":    "List images",
	"info":      "Display system-wide information",
	"inspect":   "Return low-level information on Docker objects",
	"kill":      "Kill one or more running containers",
	"load":      "Load an image from a tar archive or STDIN",
	"login":     "Log in to a container registry",
	"logout":    "Log out from a container registry",
	"logs":      "Fetch the logs of a container",
	"network":   "Manage networks",
	"pause":     "Pause all processes within one or more containers",
	"port":      "List port mappings or a specific mapping for the container",
	"ps":        "List containers",
	"pull":      "Pull an image from a registry",
	"push":      "Push an image or a repository to a registry",
	"restart":   "Restart one or more containers",
	"rm":        "Remove one or more containers",
	"rmi":       "Remove one or more images",
	"run":       "Run a command in a new container",
	"save":      "Save one or more images to a tar archive (streamed to STDOUT by default)",
	"start":     "Start one or more stopped containers",
	"stats":     "Display a live stream of container(s) resource usage statistics",
	"stop":      "Stop one or more running containers",
	"system":    "Manage containerd",
	"tag":       "Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE",
	"top":       "Display the running processes of a container",
	"unpause":   "Unpause all processes within one or more containers",
	"update":    "Update configuration of one or more containers",
	"volume":    "Manage volumes",
	"wait":      "Block until one or more containers stop, then print their exit codes",
}
