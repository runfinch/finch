// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"
	"io"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

func newSettingsVMCommand(
	logger flog.Logger,
	lca config.LimaConfigApplier,
	fs afero.Fs,
	stdout io.Writer,
) *cobra.Command {
	settingsVMCommand := &cobra.Command{
		Use:   "settings",
		Short: "Configure the virtual machine instance",
		RunE:  newSettingsVMAction(logger, lca, fs, stdout).runAdapter,
	}

	settingsVMCommand.Flags().Int(
		"cpus",
		config.DefaultCPUs,
		"the amount of vCPU to dedicate to the virtual machine (restart the vm when applying this change.)",
	)
	settingsVMCommand.Flags().String(
		"memory",
		config.DefaultMemory,
		"the amount of memory to dedicate to the virtual machine (restart the vm when applying this change.)",
	)
	settingsVMCommand.Flags().String(
		"bootdisk",
		config.DefaultBootDisk,
		"the amount of boot disk space (sparse) to give to the virtual machine (restart the vm when applying this change.)",
	)
	settingsVMCommand.Flags().String(
		"datadisk",
		config.DefaultDataDisk,
		"the amount of data disk space (sparse) to give to the virtual machine (restart the vm when applying this change.)",
	)

	return settingsVMCommand
}

type settingsVMAction struct {
	logger            flog.Logger
	limaConfigApplier config.LimaConfigApplier
	fs                afero.Fs
	stdout            io.Writer
}

func newSettingsVMAction(
	logger flog.Logger,
	lca config.LimaConfigApplier,
	fs afero.Fs,
	stdout io.Writer,
) *settingsVMAction {
	return &settingsVMAction{
		logger:            logger,
		limaConfigApplier: lca,
		fs:                fs,
		stdout:            stdout,
	}
}

func (sva *settingsVMAction) runAdapter(cmd *cobra.Command, _ []string) error {
	cpus, err := cmd.Flags().GetInt("cpus")
	if err != nil {
		return err
	}

	memory, err := cmd.Flags().GetString("memory")
	if err != nil {
		return err
	}

	bootDisk, err := cmd.Flags().GetString("bootdisk")
	if err != nil {
		return err
	}

	dataDisk, err := cmd.Flags().GetString("datadisk")
	if err != nil {
		return err
	}

	cpusChanged := cmd.Flags().Changed("cpus")
	memoryChanged := cmd.Flags().Changed("memory")
	bootDiskChanged := cmd.Flags().Changed("bootdisk")
	dataDiskChanged := cmd.Flags().Changed("datadisk")

	// check if any flags were provided by the user
	if !cpusChanged && !memoryChanged && !bootDiskChanged && !dataDiskChanged {
		return cmd.Help()
	}

	opts := config.VMConfigOpts{}
	if cpusChanged {
		opts.CPUs = &cpus
	}
	if memoryChanged {
		opts.Memory = &memory
	}

	if bootDiskChanged {
		opts.BootDisk = &bootDisk
	}
	if dataDiskChanged {
		opts.DataDisk = &dataDisk
	}

	return sva.run(opts)
}

func (sva *settingsVMAction) run(opts config.VMConfigOpts) error {
	isConfigUpdated, err := config.ModifyFinchConfig(
		sva.fs,
		sva.logger,
		sva.limaConfigApplier.GetFinchConfigPath(),
		opts,
	)
	if err != nil {
		return err
	}

	if !isConfigUpdated {
		sva.logger.Warnln("Provided flags match existing settings, no changes made.")
	} else {
		_, err = fmt.Fprintln(sva.stdout, "Configurations have been successfully updated.")
	}

	return err
}
