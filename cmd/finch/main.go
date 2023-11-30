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
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/dependency/credhelper"
	"github.com/runfinch/finch/pkg/dependency/vmnet"
	"github.com/runfinch/finch/pkg/disk"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/fssh"
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

	fc, err := config.Load(fs, fp.ConfigFilePath(ffd.Env("HOME")), logger, loadCfgDeps, mem)
	if err != nil {
		return fmt.Errorf("failed to load config: %w", err)
	}

	return newApp(logger, fp, fs, fc, stdOut).Execute()
}

var newApp = func(logger flog.Logger, fp path.Finch, fs afero.Fs, fc *config.Finch, stdOut io.Writer) *cobra.Command {
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
	lima := wrapper.NewLimaWrapper()
	supportBundleBuilder := support.NewBundleBuilder(
		logger,
		fs,
		support.NewBundleConfig(fp, system.NewStdLib().Env("HOME")),
		fp,
		ecc,
		lcc,
		lima,
	)

	// append nerdctl commands
	allCommands := initializeNerdctlCommands(lcc, ecc, logger, fs, fc)
	// append finch specific commands
	allCommands = append(allCommands,
		newVersionCommand(lcc, logger, stdOut),
		virtualMachineCommands(logger, fp, lcc, ecc, fs, fc, lima),
		newSupportBundleCommand(logger, supportBundleBuilder, lcc),
		newGenDocsCommand(rootCmd, logger, fs, system.NewStdLib()),
	)

	rootCmd.AddCommand(allCommands...)

	return rootCmd
}

func virtualMachineCommands(
	logger flog.Logger,
	fp path.Finch,
	lcc command.LimaCmdCreator,
	ecc *command.ExecCmdCreator,
	fs afero.Fs,
	fc *config.Finch,
	lima wrapper.LimaWrapper,
) *cobra.Command {
	optionalDepGroups := []*dependency.Group{
		vmnet.NewDependencyGroup(ecc, lcc, fs, fp, logger),
		credhelper.NewDependencyGroup(ecc, fs, fp, logger, fc, system.NewStdLib().Env("USER"),
			system.NewStdLib().Arch()),
	}
	return newVirtualMachineCommand(
		lcc,
		logger,
		optionalDepGroups,
		config.NewLimaApplier(fc, ecc, fs, fp.LimaOverrideConfigPath(), system.NewStdLib()),
		config.NewNerdctlApplier(fssh.NewDialer(), fs, fp.LimaSSHPrivateKeyPath(), lima),
		fp,
		fs,
		disk.NewUserDataDiskManager(lcc, ecc, &afero.OsFs{}, fp, system.NewStdLib().Env("HOME"), fc),
	)
}

func initializeNerdctlCommands(
	lcc command.LimaCmdCreator,
	ecc *command.ExecCmdCreator,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) []*cobra.Command {
	nerdctlCommandCreator := newNerdctlCommandCreator(lcc, ecc, system.NewStdLib(), logger, fs, fc)
	var allNerdctlCommands []*cobra.Command
	for cmdName, cmdDescription := range nerdctlCmds {
		allNerdctlCommands = append(allNerdctlCommands, nerdctlCommandCreator.create(cmdName, cmdDescription))
	}
	return allNerdctlCommands
}
