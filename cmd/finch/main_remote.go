// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"io"

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
	finchRootPath, err := fp.FinchRootDir(ffd)
	if err != nil {
		return fmt.Errorf("failed to get finch root path: %w", err)
	}
	ecc := command.NewExecCmdCreator()
	fc, err := config.Load(
		fs,
		fp.ConfigFilePath(finchRootPath),
		logger,
		loadCfgDeps,
		mem,
		ecc,
	)
	if err != nil {
		return fmt.Errorf("failed to load config: %w", err)
	}

	return newApp(
		logger,
		fp,
		fs,
		fc,
		stdOut,
		home,
		finchRootPath,
		ecc,
	).Execute()
}

var newApp = func(
	logger flog.Logger,
	fp path.Finch,
	fs afero.Fs,
	fc *config.Finch,
	stdOut io.Writer,
	home,
	finchRootPath string,
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
	rootCmd.PersistentFlags().String("namespace", "", `containerd namespace, such as "moby" for Docker, "k8s.io" for Kubernetes`)
	rootCmd.PersistentFlags().String("cgroup-manager", "", `Cgroup manager to use ("cgroupfs"|"systemd")`)
	rootCmd.PersistentFlags().String("snapshotter", "", "containerd snapshotter")
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
		fp.LimaHomePath(),
		fp.LimactlPath(),
		fp.QEMUBinDir(),
		system.NewStdLib(),
	)
	lima := wrapper.NewLimaWrapper()
	supportBundleBuilder := support.NewBundleBuilder(
		logger,
		fs,
		support.NewBundleConfig(fp, finchRootPath),
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
		virtualMachineCommands(logger, fp, ncc, ecc, fs, fc, home, finchRootPath),
		newSupportBundleCommand(logger, supportBundleBuilder, ncc),
		newGenDocsCommand(rootCmd, logger, fs, system.NewStdLib()),
	)

	rootCmd.AddCommand(allCommands...)

	return rootCmd
}
