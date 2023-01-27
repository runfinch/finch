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

func TestNewStopVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newStopVMCommand(nil, nil)
	assert.Equal(t, cmd.Name(), "stop")
}

func TestStopVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller)
		args    []string
	}{
		{
			name: "should stop the instance",
			args: []string{},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("stop", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info(gomock.Any()).AnyTimes()
			},
		},
		{
			name: "should force stop the instance",
			args: []string{
				"--force",
			},
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("stop", "--force", limaInstanceName).Return(command)
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

			cmd := newStopVMCommand(lcc, logger)
			cmd.SetArgs(tc.args)
			assert.NoError(t, cmd.Execute())
		})
	}
}

func TestStopVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(*mocks.Logger, *mocks.LimaCmdCreator, *gomock.Controller)
		force   bool
	}{
		{
			name:    "should stop the instance",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("stop", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Stopping existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine stopped successfully")
			},
			force: false,
		},
		{
			name:    "stopped VM",
			wantErr: fmt.Errorf("the instance %q is already stopped", limaInstanceName),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
			force: false,
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
			force: false,
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
			force: false,
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
			force: false,
		},
		{
			name:    "should print error if virtual machine failed to stop",
			wantErr: errors.New("error"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				logs := []byte("stdout + stderr")
				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput().Return(logs, errors.New("error"))
				creator.EXPECT().CreateWithoutStdio("stop", limaInstanceName).Return(command)
				logger.EXPECT().Info("Stopping existing Finch virtual machine...")
				logger.EXPECT().Errorf("Finch virtual machine failed to stop, debug logs: %s", logs)
			},
			force: false,
		},
		{
			name:    "should force stop virtual machine",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.LimaCmdCreator, ctrl *gomock.Controller) {
				command := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("stop", "--force", limaInstanceName).Return(command)
				command.EXPECT().CombinedOutput()
				logger.EXPECT().Info("Forcibly stopping Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine stopped successfully")
			},
			force: true,
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
			err := newStopVMAction(lcc, logger).run(tc.force)
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
