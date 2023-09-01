// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package main

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/dependency/credhelper"
	"github.com/runfinch/finch/pkg/disk"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fssh"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

func virtualMachineCommands(
	logger flog.Logger,
	fp path.Finch,
	lcc command.LimaCmdCreator,
	ecc *command.ExecCmdCreator,
	fs afero.Fs,
	fc *config.Finch,
) *cobra.Command {

	optionalDepGroups := []*dependency.Group{
		credhelper.NewDependencyGroup(ecc, fs, fp, logger, fc, system.NewStdLib().Env("USER"),
			system.NewStdLib().Arch()),
	}
	return newVirtualMachineCommand(
		lcc,
		logger,
		optionalDepGroups,
		config.NewLimaApplier(fc, ecc, fs, fp.LimaOverrideConfigPath(), system.NewStdLib()),
		config.NewNerdctlApplier(fssh.NewDialer(), fs, fp.LimaSSHPrivateKeyPath(), system.NewStdLib().Env("USER")),
		fp,
		fs,
		disk.NewUserDataDiskManager(lcc, ecc, &afero.OsFs{}, fp, system.NewStdLib().Env("HOME"), fc),
	)
}
