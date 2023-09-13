// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main denotes the entry point of finch CLI.
package main

import (
	"fmt"
	"io"
	"os"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/lima/wrapper"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/support"
	"github.com/runfinch/finch/pkg/system"
	"github.com/runfinch/finch/pkg/version"
)

const finchRootCmd = "finch"

func main() {
	logger := flog.NewLogrus()
	stdLib := system.NewStdLib()
	fs := afero.NewOsFs()
	mem := fmemory.NewMemory()
	stdOut := os.Stdout
	if err := xmain(logger, stdLib, fs, stdLib, mem, stdOut); err != nil {
		logger.Fatal(err)
	}
}

func xmain(logger flog.Logger,
	ffd path.FinchFinderDeps,
	fs afero.Fs,
	loadCfgDeps config.LoadSystemDeps,
	mem fmemory.Memory,
	stdOut io.Writer,
) error {
	fp, err := path.FindFinch(ffd)
	if err != nil {
		return fmt.Errorf("failed to find the installation path of Finch: %w", err)
	}

	home, err := ffd.GetUserHome()
	if err != nil {
		return fmt.Errorf("failed to get user home directory: %w", err)
	}
	finchRootPath, err := fp.FinchRootDir(*system.NewStdLib())
	if err != nil {
		return fmt.Errorf("failed to get finch root path: %w", err)
	}
	fc, err := config.Load(fs, fp.ConfigFilePath(finchRootPath), logger, loadCfgDeps, mem)
	if err != nil {
		return fmt.Errorf("failed to load config: %w", err)
	}

	return newApp(logger, fp, fs, fc, stdOut, home, finchRootPath).Execute()
}

var newApp = func(logger flog.Logger, fp path.Finch, fs afero.Fs, fc *config.Finch, stdOut io.Writer, home, finchRootPath string) *cobra.Command {
	usage := fmt.Sprintf("%v <command>", finchRootCmd)
	rootCmd := &cobra.Command{
		Use:           usage,
		Short:         "Finch: open-source container development tool",
		SilenceUsage:  true,
		SilenceErrors: true,
		Version:       version.Version,
	}
	// TODO: Decide when to forward --debug to the dependencies
	// (e.g. nerdctl for container commands and limactl for VM commands).
	rootCmd.PersistentFlags().Bool("debug", false, "running under debug mode")
	rootCmd.PersistentPreRunE = func(cmd *cobra.Command, args []string) error {
		// running commands under debug mode will print out debug logs
		debugMode, _ := cmd.Flags().GetBool("debug")
		if debugMode {
			logger.SetLevel(flog.Debug)
		}
		return nil
	}

	ecc := command.NewExecCmdCreator()
	lcc := command.NewLimaCmdCreator(ecc,
		logger,
		fp.LimaHomePath(),
		fp.LimactlPath(),
		fp.QEMUBinDir(),
		system.NewStdLib(),
	)

	supportBundleBuilder := support.NewBundleBuilder(
		logger,
		fs,
		support.NewBundleConfig(fp, system.NewStdLib().Env("HOME")),
		fp,
		ecc,
		wrapper.NewLimaWrapper(),
	)

	// append nerdctl commands
	allCommands := initializeNerdctlCommands(lcc, logger, fs)
	// append finch specific commands
	allCommands = append(allCommands,
		newVersionCommand(lcc, logger, stdOut),
		virtualMachineCommands(logger, fp, lcc, ecc, fs, fc, home, finchRootPath),
		newSupportBundleCommand(logger, supportBundleBuilder, lcc),
	)

	rootCmd.AddCommand(allCommands...)

	return rootCmd
}

func initializeNerdctlCommands(lcc command.LimaCmdCreator, logger flog.Logger, fs afero.Fs) []*cobra.Command {
	nerdctlCommandCreator := newNerdctlCommandCreator(lcc, system.NewStdLib(), logger, fs)
	var allNerdctlCommands []*cobra.Command
	for cmdName, cmdDescription := range nerdctlCmds {
		allNerdctlCommands = append(allNerdctlCommands, nerdctlCommandCreator.create(cmdName, cmdDescription))
	}
	return allNerdctlCommands
}
