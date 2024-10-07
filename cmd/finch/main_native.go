// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"errors"
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

func xmain(logger flog.Logger,
	_ path.FinchFinderDeps,
	fs afero.Fs,
	loadCfgDeps config.LoadSystemDeps,
	mem fmemory.Memory,
	stdOut io.Writer,
) error {
	fp := path.NewFinchPath()
	ecc := command.NewExecCmdCreator()
	fc, err := config.Load(
		fs,
		fp.ConfigFilePath(),
		logger,
		loadCfgDeps,
		mem,
		ecc,
	)
	if err != nil {
		if errors.Is(err, os.ErrPermission) {
			logger.Warnf("Failed to load config, using default values. You may need to be root or use sudo. (%s)", err)
		} else {
			return fmt.Errorf("failed to load config: %w", err)
		}
	}

	return newApp(
		logger,
		fp,
		fs,
		fc,
		stdOut,
		ecc,
	).Execute()
}

var newApp = func(
	logger flog.Logger,
	fp path.Finch,
	fs afero.Fs,
	fc *config.Finch,
	stdOut io.Writer,
	ecc command.Creator,
) *cobra.Command {
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
	rootCmd.PersistentPreRunE = func(cmd *cobra.Command, _ []string) error {
		// running commands under debug mode will print out debug logs
		debugMode, _ := cmd.Flags().GetBool("debug")
		if debugMode {
			logger.SetLevel(flog.Debug)
		}
		return nil
	}

	ncc := command.NewNerdctlCmdCreator(ecc,
		logger,
		fp.NerdctlConfigFilePath(),
		fp.BuildkitSocketPath(),
		fp.FinchDependencyBinDir(),
		system.NewStdLib(),
	)
	lima := wrapper.NewLimaWrapper()
	supportBundleBuilder := support.NewBundleBuilder(
		logger,
		fs,
		support.NewBundleConfig(fp, fp.FinchDir()),
		fp,
		ecc,
		ncc,
		lima,
		system.NewStdLib(),
	)

	// append nerdctl commands
	allCommands := initializeNerdctlCommands(ncc, ecc, logger, fs, fc)
	// append finch specific commands
	allCommands = append(allCommands,
		newVersionCommand(ncc, logger, stdOut),
		newSupportBundleCommand(logger, supportBundleBuilder, ncc),
		newGenDocsCommand(rootCmd, logger, fs, system.NewStdLib()),
	)

	rootCmd.AddCommand(allCommands...)

	return rootCmd
}
