// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/runfinch/finch/pkg/disk"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

func newInitVMCommand(
	lcc command.LimaCmdCreator,
	logger flog.Logger,
	optionalDepGroups []*dependency.Group,
	lca config.LimaConfigApplier,
	nca config.NerdctlConfigApplier,
	baseYamlFilePath string,
	fs afero.Fs,
	privateKeyPath string,
	diskManager disk.UserDataDiskManager,
) *cobra.Command {
	initVMCommand := &cobra.Command{
		Use:      "init",
		Short:    "Initialize the virtual machine",
		RunE:     newInitVMAction(lcc, logger, optionalDepGroups, lca, baseYamlFilePath, diskManager).runAdapter,
		PostRunE: newPostVMStartInitAction(logger, lcc, fs, privateKeyPath, nca).runAdapter,
	}

	return initVMCommand
}

type initVMAction struct {
	baseYamlFilePath  string
	creator           command.LimaCmdCreator
	logger            flog.Logger
	optionalDepGroups []*dependency.Group
	limaConfigApplier config.LimaConfigApplier
	diskManager       disk.UserDataDiskManager
}

func newInitVMAction(
	creator command.LimaCmdCreator,
	logger flog.Logger,
	optionalDepGroups []*dependency.Group,
	lca config.LimaConfigApplier,
	baseYamlFilePath string,
	diskManager disk.UserDataDiskManager,
) *initVMAction {
	return &initVMAction{
		creator:           creator,
		logger:            logger,
		optionalDepGroups: optionalDepGroups,
		limaConfigApplier: lca,
		baseYamlFilePath:  baseYamlFilePath,
		diskManager:       diskManager,
	}
}

func (iva *initVMAction) runAdapter(cmd *cobra.Command, args []string) error {
	return iva.run()
}

func (iva *initVMAction) run() error {
	err := iva.assertVMIsNonexistent()
	if err != nil {
		return err
	}

	err = dependency.InstallOptionalDeps(iva.optionalDepGroups, iva.logger)
	if err != nil {
		iva.logger.Errorf("Dependency error: %v", err)
	}

	err = iva.limaConfigApplier.Apply()
	if err != nil {
		return err
	}

	err = iva.diskManager.EnsureUserDataDisk()
	if err != nil {
		return err
	}

	instanceName := fmt.Sprintf("--name=%v", limaInstanceName)
	limaCmd := iva.creator.CreateWithoutStdio("start", instanceName, iva.baseYamlFilePath, "--tty=false")
	iva.logger.Info("Initializing and starting Finch virtual machine...")
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		iva.logger.Errorf("Finch virtual machine failed to start, debug logs:\n%s", logs)
		return err
	}
	iva.logger.Info("Finch virtual machine started successfully")
	return nil
}

func (iva *initVMAction) assertVMIsNonexistent() error {
	status, err := lima.GetVMStatus(iva.creator, iva.logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Stopped:
		return fmt.Errorf(
			"the instance %q already exists but is stopped, run `finch %s start` to start the existing instance",
			limaInstanceName, virtualMachineRootCmd)
	case lima.Running:
		return fmt.Errorf("the instance %q is already running", limaInstanceName)
	default:
		return nil
	}
}
