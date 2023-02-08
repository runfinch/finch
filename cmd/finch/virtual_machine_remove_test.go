// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestNewRemoveVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newRemoveVMCommand(nil, nil, nil)
	assert.Equal(t, cmd.Name(), "remove")
}

func TestRemoveVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller, *mocks.MockUserDataDiskManager)
		args    []string
	}{
		{
			name: "should remove the instance",
			args: []string{},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info(gomock.Any()).AnyTimes()
			},
		},
		{
			name: "should forcibly remove the instance",
			args: []string{
				"--force",
			},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", "--force", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info(gomock.Any()).AnyTimes()
			},
		},
		{
			name: "should remove the instance and user data",
			args: []string{
				"--user-data",
			},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Removing existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
				logger.EXPECT().Info("Deleting user data...")
				dm.EXPECT().DeleteUserDataDisk(false).Return(nil)
				logger.EXPECT().Info("Successfully deleted user data.")
			},
		},
		{
			name: "should forcibly remove the instance and user data",
			args: []string{
				"--force",
				"--user-data",
			},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", "--force", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Forcibly removing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
				logger.EXPECT().Info("Forcibly deleting user data...")
				dm.EXPECT().DeleteUserDataDisk(true).Return(nil)
				logger.EXPECT().Info("Successfully deleted user data.")
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			dm := mocks.NewMockUserDataDiskManager(ctrl)
			tc.mockSvc(logger, lcc, ctrl, dm)

			cmd := newRemoveVMCommand(lcc, logger, dm)
			cmd.SetArgs(tc.args)
			assert.NoError(t, cmd.Execute())
		})
	}
}

func TestRemoveVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name       string
		wantErr    error
		mockSvc    func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller, *mocks.MockUserDataDiskManager)
		force      bool
		deleteDisk bool
	}{
		{
			name:    "should remove the instance",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Removing existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name: "running VM",
			wantErr: fmt.Errorf("the instance %q is running, run `finch %s stop` to stop the instance first",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name:    "nonexistent VM",
			wantErr: fmt.Errorf("the instance %q does not exist", limaInstanceName),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name:    "unknown VM status",
			wantErr: errors.New("unrecognized system status"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name:    "should print error if virtual machine failed to remove",
			wantErr: errors.New("failed to remove instance"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				logs := []byte("stdout + stderr")
				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput().Return(logs, errors.New("failed to remove instance"))
				creator.EXPECT().CreateWithoutStdio("remove", limaInstanceName).Return(command)
				logger.EXPECT().Info("Removing existing Finch virtual machine...")
				logger.EXPECT().Errorf("Finch virtual machine failed to remove, debug logs: %s", logs)
			},
			force:      false,
			deleteDisk: false,
		},
		{
			name:    "should forcibly remove the instance",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", "--force", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Forcibly removing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
			},
			force:      true,
			deleteDisk: false,
		},
		{
			name:    "should remove the instance and user data",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Removing existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
				logger.EXPECT().Info("Deleting user data...")
				dm.EXPECT().DeleteUserDataDisk(false).Return(nil)
				logger.EXPECT().Info("Successfully deleted user data.")
			},
			force:      false,
			deleteDisk: true,
		},
		{
			name:    "should forcibly remove the instance and user data",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller, dm *mocks.MockUserDataDiskManager) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("remove", "--force", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Forcibly removing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine removed successfully")
				logger.EXPECT().Info("Forcibly deleting user data...")
				dm.EXPECT().DeleteUserDataDisk(true).Return(nil)
				logger.EXPECT().Info("Successfully deleted user data.")
			},
			force:      true,
			deleteDisk: true,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			dm := mocks.NewMockUserDataDiskManager(ctrl)

			tc.mockSvc(logger, lcc, ctrl, dm)
			err := newRemoveVMAction(lcc, logger, dm).run(tc.force, tc.deleteDisk)
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
