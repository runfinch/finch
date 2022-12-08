// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"

	"k8s.io/apimachinery/pkg/util/sets"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/lima"
)

const nerdctlCmdName = "nerdctl"

type nerdctlCommandCreator struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newNerdctlCommandCreator(creator command.LimaCmdCreator, logger flog.Logger) *nerdctlCommandCreator {
	return &nerdctlCommandCreator{creator: creator, logger: logger}
}

func (ncc *nerdctlCommandCreator) create(cmdName string, cmdDesc string) *cobra.Command {
	command := &cobra.Command{
		Use:   cmdName,
		Short: cmdDesc,
		// If we don't specify it, and the user issues `finch run -d alpine`,
		// the args passed to nerdctlCommand.run will be empty because
		// cobra will try to parse `-d alpine` as if alpine is the value of the `-d` flag.
		DisableFlagParsing: true,
		RunE:               newNerdctlCommand(ncc.creator, ncc.logger).runAdapter,
	}

	return command
}

type nerdctlCommand struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newNerdctlCommand(creator command.LimaCmdCreator, logger flog.Logger) *nerdctlCommand {
	return &nerdctlCommand{creator: creator, logger: logger}
}

func (nc *nerdctlCommand) runAdapter(cmd *cobra.Command, args []string) error {
	return nc.run(cmd.Name(), args)
}

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	err := nc.assertVMIsRunning(nc.creator, nc.logger)
	if err != nil {
		return err
	}

	var nerdctlArgs []string
	for _, arg := range args {
		if arg == "--debug" {
			// explicitly setting log level to avoid `--debug` flag being interpreted as nerdctl command
			nc.logger.SetLevel(flog.Debug)
			continue
		}
		nerdctlArgs = append(nerdctlArgs, arg)
	}

	limaArgs := append([]string{"shell", limaInstanceName, nerdctlCmdName, cmdName}, nerdctlArgs...)

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.creator.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, limaArgs...)
	}

	return nc.creator.Create(limaArgs...).Run()
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
