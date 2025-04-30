// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/sirupsen/logrus"
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
	system.EnvGetter
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

func (ncc *nerdctlCommandCreator) handleLoadOpt(args []string) []string {
	for i, arg := range args {
		if arg == "--load" {
			args[i] = "--output=type=docker"
		}
	}
	return args
}

func (ncc *nerdctlCommandCreator) createDockerCompatRunCmd() *cobra.Command {
	runCmd := &cobra.Command{
		Use:                "run",
		Short:              "Run a command in a new container",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			cleanConsistencyOpt := func(arg string) string {
				re := regexp.MustCompile(`consistency=[^,]*`)
				arg = re.ReplaceAllString(arg, "")
				arg = strings.ReplaceAll(arg, ",,", ",")
				return strings.Trim(arg, ", ")
			}

			for idx, arg := range args {
				if arg == "--mount" && (idx < len(args)-1) {
					args[idx+1] = cleanConsistencyOpt(args[idx+1])
					continue
				}

				if strings.Contains(arg, "--mount") && strings.Contains(arg, "=") {
					args[idx] = cleanConsistencyOpt(arg)
					continue
				}
			}

			return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter(cmd, args)
		},
	}
	return runCmd
}

func (ncc *nerdctlCommandCreator) createDockerCompatBuildCmd() *cobra.Command {
	buildCmd := &cobra.Command{
		Use:                "build",
		Aliases:            []string{"buildx"},
		Short:              "Build an image from Dockerfile",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			if cmd.CalledAs() == "buildx" {
				logrus.Warn("buildx is not supported. using standard buildkit instead...")
			}
			return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter(cmd, args)
		},
	}

	buildSubCmd := &cobra.Command{
		Use:                "build",
		Aliases:            []string{"b"},
		Short:              "Alias for main build command",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			logrus.Warn("buildx is not supported. using standard buildkit instead...")
			args = ncc.handleLoadOpt(args)
			return buildCmd.RunE(cmd, args)
		},
	}

	buildUnsupportedSubCmd := &cobra.Command{
		Use:                "unsupported",
		Aliases:            []string{"bake", "create", "debug", "du", "imagetools", "inspect", "ls", "prune", "rm", "stop", "use", "version"},
		Short:              "Alias for main build command",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, _ []string) error {
			return fmt.Errorf("unsupported buildx command: %s", cmd.CalledAs())
		},
	}

	buildCmd.AddCommand(buildSubCmd)
	buildCmd.AddCommand(buildUnsupportedSubCmd)

	return buildCmd
}

func (ncc *nerdctlCommandCreator) createDockerCompatImageCmd() *cobra.Command {
	imageCmd := &cobra.Command{
		Use:                "image",
		Short:              "Manage images",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			ncc.handleLoadOpt(args)
			return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter(cmd, args)
		},
	}
	return imageCmd
}

func (ncc *nerdctlCommandCreator) createDockerCompatComposeCmd() *cobra.Command {
	composeCmd := &cobra.Command{
		Use:                "compose",
		Short:              "Compose",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runAdapter(cmd, args)
		},
	}

	composeVersionSubCmd := &cobra.Command{
		Use:                "version",
		Short:              "Version",
		DisableFlagParsing: true,
		RunE:               newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps, ncc.logger, ncc.fs, ncc.fc).runDockerCompatComposeVersionAdapter,
	}

	composeCmd.AddCommand(composeVersionSubCmd)

	return composeCmd
}

func (ncc *nerdctlCommandCreator) createDockerCompatInspectCmd() *cobra.Command {
	inspectCmd := &cobra.Command{
		Use:                "inspect",
		Short:              "Return low-level information on Docker objects",
		DisableFlagParsing: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			modeDockerCompat := "--mode=dockercompat"
			var inspectType string
			inspectType = ""
			var processedArgs []string
			var sizeArg string
			for idx := 0; idx < len(args); idx++ {
				if (args[idx] == "--type") && (idx < len(args)-1) {
					inspectType = args[idx+1]
					idx++
					continue
				}

				if strings.Contains(args[idx], "--type") && strings.Contains(args[idx], "=") {
					inspectType = strings.Split(args[idx], "=")[1]
					continue
				}

				if args[idx] == "-s" || args[idx] == "--size" {
					sizeArg = "--size"
					continue
				}
				processedArgs = append(processedArgs, args[idx])
			}

			switch inspectType {
			case "image":
				return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps,
					ncc.logger, ncc.fs, ncc.fc).runDockerCompatImageInspectAdapter(append([]string{"inspect", modeDockerCompat},
					processedArgs...))
			case "volume":
				if sizeArg != "" {
					processedArgs = append([]string{sizeArg}, processedArgs...)
				} else {
					processedArgs = append([]string{}, processedArgs...)
				}
				return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps,
					ncc.logger, ncc.fs, ncc.fc).runDockerCompatVolumeInspectAdapter(append([]string{"inspect"}, processedArgs...))
			default:
				return newNerdctlCommand(ncc.ncc, ncc.ecc, ncc.systemDeps,
					ncc.logger, ncc.fs, ncc.fc).runDockerCompatInspectAdapter(cmd, append([]string{modeDockerCompat}, processedArgs...))
			}
		},
	}
	return inspectCmd
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

func (nc *nerdctlCommand) runDockerCompatInspectAdapter(cmd *cobra.Command, args []string) error {
	return nc.runDockerCompatInspect(cmd.Name(), args)
}

func (nc *nerdctlCommand) runDockerCompatVolumeInspectAdapter(args []string) error {
	return nc.runDockerCompatInspect("volume", args)
}

func (nc *nerdctlCommand) runDockerCompatImageInspectAdapter(args []string) error {
	return nc.runDockerCompatInspect("image", args)
}

func (nc *nerdctlCommand) runDockerCompatComposeVersionAdapter(_ *cobra.Command, _ []string) error {
	return handleDockerCompatComposeVersion(*nc)
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

	// this needs to handle cases of -h except for `container run`,`run`,`create`. For these options -h represent hostname
	// TODO: Refactor this function.
	for _, arg := range args {
		if arg == "--help" || (arg == "-h" && (cmdName != "container run" && cmdName != "run" && cmdName != "create")) {
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
