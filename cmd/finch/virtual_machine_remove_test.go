// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
)

func TestNewRemoveVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newRemoveVMCommand(nil, nil)
	assert.Equal(t, cmd.Name(), "remove")
}

func TestRemoveVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller)
		cmd     *cobra.Command
		args    []string
	}{
		{
			name: "should remove the instance",
			cmd: &cobra.Command{
				Use: "remove",
			},
			args: []string{},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
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
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)

			tc.mockSvc(logger, lcc, ctrl)
			assert.NoError(t, newRemoveVMAction(lcc, logger).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestRemoveVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller)
	}{
		{
			name:    "should remove the instance",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
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
		},
		{
			name: "running VM",
			wantErr: fmt.Errorf("the instance %q is running, run `finch %s stop` to stop the instance first",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "nonexistent VM",
			wantErr: fmt.Errorf("the instance %q does not exist", limaInstanceName),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:    "unknown VM status",
			wantErr: errors.New("unrecognized system status"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
		},
		{
			name:    "should print error if virtual machine failed to remove",
			wantErr: errors.New("failed to remove instance"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
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
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)

			tc.mockSvc(logger, lcc, ctrl)
			err := newRemoveVMAction(lcc, logger).run()
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
