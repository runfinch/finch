// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"encoding/json"
	"fmt"

	"golang.org/x/exp/slices"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/system"

	"k8s.io/apimachinery/pkg/util/sets"
)

// NerdctlCommandSystemDeps contains the system dependencies for newNerdctlCommand.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../../pkg/mocks/nerdctl_cmd_system_deps.go -package=mocks -mock_names NerdctlCommandSystemDeps=NerdctlCommandSystemDeps -source=nerdctl.go NerdctlCommandSystemDeps
type NerdctlCommandSystemDeps interface {
	system.EnvChecker
	system.WorkingDirectory
	system.FilePathJoiner
	system.AbsFilePath
	system.FilePathToSlash
}

type nerdctlCommandCreator struct {
	ncc        command.NerdctlCmdCreator
	ecc        command.Creator
	systemDeps NerdctlCommandSystemDeps
	logger     flog.Logger
	fs         afero.Fs
	fc         *config.Finch
}

func newNerdctlCommandCreator(
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	systemDeps NerdctlCommandSystemDeps,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) *nerdctlCommandCreator {
	return &nerdctlCommandCreator{ncc: ncc, ecc: ecc, systemDeps: systemDeps, logger: logger, fs: fs, fc: fc}
}

func (ncc *nerdctlCommandCreator) create(cmdName string, cmdDesc string) *cobra.Command {
	command := &cobra.Command{
		Use:   cmdName,
		Short: cmdDesc,
		// If we don't specify it, and the user issues `finch run -d alpine`,
		// the args passed to nerdctlCommand.run will be empty because
		// cobra will try to parse `-d alpine` as if alpine is the value of the `-d` flag.
		DisableFlagParsing: true,
		RunE:               newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter,
	}

	return command
}

type nerdctlCommand struct {
	ncc        command.NerdctlCmdCreator
	ecc        command.Creator
	systemDeps NerdctlCommandSystemDeps
	logger     flog.Logger
	fs         afero.Fs
	fc         *config.Finch
}

func newNerdctlCommand(
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	systemDeps NerdctlCommandSystemDeps,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) *nerdctlCommand {
	return &nerdctlCommand{ncc: ncc, ecc: ecc, systemDeps: systemDeps, logger: logger, fs: fs, fc: fc}
}

func (nc *nerdctlCommand) runAdapter(cmd *cobra.Command, args []string) error {
	return nc.run(cmd.Name(), args)
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

var cmdFlagSetMap = map[string]map[string]sets.Set[string]{
	"container run": {
		"shortBoolFlags": sets.New[string]("-d", "-i", "-t"),
		"longBoolFlags": sets.New[string](
			"--detach", "--init", "--interactive", "--oom-kill-disable",
			"--privileged", "--read-only", "--rm", "--rootfs", "--tty"),
		"shortArgFlags": sets.New[string]("-e", "-h", "-m", "-u", "-w", "-p", "-l", "-v"),
	},
	"exec": {
		"shortBoolFlags": sets.New[string]("-d", "-i", "-t"),
		"longBoolFlags": sets.New[string](
			"--detach", "--init", "--interactive", "--oom-kill-disable",
			"--privileged", "--read-only", "--rm", "--rootfs", "--tty"),
		"shortArgFlags": sets.New[string]("-e", "-h", "-m", "-u", "-w", "-p", "-l", "-v"),
	},
	"compose": {
		"shortBoolFlags": sets.New[string]("-d", "-i", "-t"),
		"longBoolFlags": sets.New[string](
			"--detach", "--init", "--interactive", "--oom-kill-disable",
			"--privileged", "--read-only", "--rm", "--rootfs", "--tty"),
		"shortArgFlags": sets.New[string]("-e", "-h", "-m", "-u", "-w", "-p", "-l", "-v"),
	},
}
