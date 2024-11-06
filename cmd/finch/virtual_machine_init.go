// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"runtime"

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
	ncc command.NerdctlCmdCreator,
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
		RunE:     newInitVMAction(ncc, logger, optionalDepGroups, lca, baseYamlFilePath, diskManager).runAdapter,
		PostRunE: newPostVMStartInitAction(logger, ncc, fs, privateKeyPath, nca).runAdapter,
	}

	return initVMCommand
}

type initVMAction struct {
	baseYamlFilePath  string
	creator           command.NerdctlCmdCreator
	logger            flog.Logger
	optionalDepGroups []*dependency.Group
	limaConfigApplier config.LimaConfigApplier
	diskManager       disk.UserDataDiskManager
}

func newInitVMAction(
	creator command.NerdctlCmdCreator,
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

func (iva *initVMAction) runAdapter(_ *cobra.Command, _ []string) error {
	return iva.run()
}

func (iva *initVMAction) run() error {
	err := iva.assertVMIsNonexistent()
	if err != nil {
		return err
	}

	err = iva.limaConfigApplier.ConfigureDefaultLimaYaml()
	if err != nil {
		return err
	}

	err = iva.limaConfigApplier.ConfigureOverrideLimaYaml()
	if err != nil {
		return err
	}

	err = dependency.InstallOptionalDeps(iva.optionalDepGroups, iva.logger)
	if err != nil {
		iva.logger.Errorf("Dependency error: %v", err)
	}

	// ignore error, this is to ensure that the disk is only mounted once
	_ = iva.diskManager.DetachUserDataDisk()

	err = iva.diskManager.EnsureUserDataDisk()
	if err != nil {
		return err
	}

	instanceName := fmt.Sprintf("--name=%v", limaInstanceName)
	limaCmd := iva.creator.CreateWithoutStdio("start", instanceName, iva.baseYamlFilePath, "--tty=false")

	iva.logger.Info("Initializing and starting Finch virtual machine...")
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		iva.logger.SetFormatter(flog.TextWithoutTruncation)
		iva.logger.Errorf("Finch virtual machine failed to start, debug logs:\n%s", logs)
		iva.logger.SetFormatter(flog.Text)
		// ignore error, this is to ensure that the disk mount doesn't linger after the VM fails to start
		_ = iva.diskManager.DetachUserDataDisk()
		return err
	}

	if runtime.GOOS == "windows" {
		iva.logger.Warnln("Finch on Windows uses WSL, which mounts the C Drive in read-write mode by default. " +
			"To run finch with more restricted access, follow " +
			"https://runfinch.com/docs/managing-finch/windows/wsl-configuration/")
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
