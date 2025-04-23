// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"os"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/disk"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

func newDiskVMCommand(creator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	diskCmd := &cobra.Command{
		Use:   "disk",
		Short: "Manage virtual machine disk operations",
	}

	diskCmd.AddCommand(
		newVMDiskResizeCommand(creator, logger),
		newVMDiskInfoCommand(creator, logger),
	)

	return diskCmd
}

func newVirtualMachineCommand(
	limaCmdCreator command.NerdctlCmdCreator,
	logger flog.Logger,
	optionalDepGroups []*dependency.Group,
	lca config.LimaConfigApplier,
	nca config.NerdctlConfigApplier,
	fp path.Finch,
	fs afero.Fs,
	diskManager disk.UserDataDiskManager,
) *cobra.Command {
	virtualMachineCommand := &cobra.Command{
		Use:   virtualMachineRootCmd,
		Short: "Manage the virtual machine lifecycle",
	}

	virtualMachineCommand.AddCommand(
		newStartVMCommand(limaCmdCreator, logger, optionalDepGroups, lca, nca, fs, fp.LimaSSHPrivateKeyPath(), diskManager),
		newStopVMCommand(limaCmdCreator, diskManager, logger),
		newRemoveVMCommand(limaCmdCreator, diskManager, logger),
		newStatusVMCommand(limaCmdCreator, logger, os.Stdout),
		newInitVMCommand(limaCmdCreator, logger, optionalDepGroups, lca, nca, fp.BaseYamlFilePath(), fs,
			fp.LimaSSHPrivateKeyPath(), diskManager),
		newSettingsVMCommand(logger, lca, fs, os.Stdout),
		newDiskVMCommand(limaCmdCreator, logger),
	)

	return virtualMachineCommand
}
