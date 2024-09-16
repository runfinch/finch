// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main denotes the entry point of finch CLI.
package main

import (
	"fmt"
	"io"
	"os"

	"github.com/containerd/nerdctl/v2/pkg/errutil"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
)

const finchRootCmd = "finch"

func main() {
	logger := flog.NewLogrus()
	stdLib := system.NewStdLib()
	fs := afero.NewOsFs()
	mem := fmemory.NewMemory()
	stdOut := os.Stdout
	if err := xmain(logger, stdLib, fs, stdLib, mem, stdOut); err != nil {
		errutil.HandleExitCoder(err)
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

func initializeNerdctlCommands(
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	logger flog.Logger,
	fs afero.Fs,
	fc *config.Finch,
) []*cobra.Command {
	nerdctlCommandCreator := newNerdctlCommandCreator(ncc, ecc, system.NewStdLib(), logger, fs, fc)
	var allNerdctlCommands []*cobra.Command
	for cmdName, cmdDescription := range nerdctlCmds {
		allNerdctlCommands = append(allNerdctlCommands, nerdctlCommandCreator.create(cmdName, cmdDescription))
	}
	return allNerdctlCommands
}
