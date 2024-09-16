// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main denotes the entry point of finch CLI.
package main

import (
	"os"

	"github.com/containerd/nerdctl/v2/pkg/errutil"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
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
