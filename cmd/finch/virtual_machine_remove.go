// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/runfinch/finch/pkg/disk"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/lima"

	"github.com/runfinch/finch/pkg/flog"
)

func newRemoveVMCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger, dm disk.UserDataDiskManager) *cobra.Command {
	removeVMCommand := &cobra.Command{
		Use:   "remove",
		Short: "Remove the virtual machine instance",
		RunE:  newRemoveVMAction(limaCmdCreator, logger, dm).runAdapter,
	}

	removeVMCommand.Flags().BoolP("force", "f", false, "forcibly remove finch VM")
	removeVMCommand.Flags().Bool("user-data", false, "remove persistent containerd and nerdctl data")

	return removeVMCommand
}

type removeVMAction struct {
	creator     command.LimaCmdCreator
	logger      flog.Logger
	diskManager disk.UserDataDiskManager
}

func newRemoveVMAction(creator command.LimaCmdCreator, logger flog.Logger, dm disk.UserDataDiskManager) *removeVMAction {
	return &removeVMAction{creator: creator, logger: logger, diskManager: dm}
}

func (rva *removeVMAction) runAdapter(cmd *cobra.Command, args []string) error {
	force, err := cmd.Flags().GetBool("force")
	if err != nil {
		return err
	}
	deleteDisk, err := cmd.Flags().GetBool("user-data")
	if err != nil {
		return err
	}
	return rva.run(force, deleteDisk)
}

func (rva *removeVMAction) run(force bool, deleteDisk bool) error {
	if force {
		err := rva.removeVM(force)
		if err != nil {
			return err
		}

		if deleteDisk {
			rva.logger.Info("Forcibly deleting user data...")
			err := rva.diskManager.DeleteUserDataDisk(force)
			if err != nil {
				return err
			}
			rva.logger.Info("Successfully deleted user data.")
		}

		return nil
	}

	err := rva.assertVMIsStopped(rva.creator, rva.logger)
	if err != nil {
		return err
	}

	err = rva.removeVM(false)
	if err != nil {
		return err
	}

	if deleteDisk {
		rva.logger.Info("Deleting user data...")
		err := rva.diskManager.DeleteUserDataDisk(false)
		if err != nil {
			return err
		}
		rva.logger.Info("Successfully deleted user data.")
	}

	return nil
}

func (rva *removeVMAction) assertVMIsStopped(creator command.LimaCmdCreator, logger flog.Logger) error {
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("the instance %q does not exist", limaInstanceName)
	case lima.Running:
		return fmt.Errorf("the instance %q is running, run `finch %s stop` to stop the instance first",
			limaInstanceName, virtualMachineRootCmd)
	default:
		return nil
	}
}

func (rva *removeVMAction) removeVM(force bool) error {
	limaCmd := rva.createVMRemoveCommand(force)
	if force {
		rva.logger.Info("Forcibly removing Finch virtual machine...")
	} else {
		rva.logger.Info("Removing existing Finch virtual machine...")
	}
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		rva.logger.Errorf("Finch virtual machine failed to remove, debug logs: %s", logs)
		return err
	}
	rva.logger.Info("Finch virtual machine removed successfully")
	return nil
}

func (rva *removeVMAction) createVMRemoveCommand(force bool) command.Command {
	if force {
		return rva.creator.CreateWithoutStdio("remove", "--force", limaInstanceName)
	}
	return rva.creator.CreateWithoutStdio("remove", limaInstanceName)
}
