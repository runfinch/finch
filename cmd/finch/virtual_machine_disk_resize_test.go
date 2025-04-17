// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNewDiskResizeVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newDiskResizeVMCommand(nil, nil)
	assert.Equal(t, "disk-resize", cmd.Name())
}

func TestDiskResizeVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller)
		args    []string
		wantErr error
	}{
		{
			name: "should resize disk successfully",
			args: []string{"--size", "60GiB"},
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				resizeCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", "60GiB").Return(resizeCmd)
				resizeCmd.EXPECT().CombinedOutput().Return(nil, nil)
				logger.EXPECT().Infof("Resizing disk to %s...", "60GiB")
				logger.EXPECT().Info("Disk resized successfully.")
			},
		},
		{
			name:    "should fail when size flag is missing",
			args:    []string{},
			wantErr: errors.New(`required flag(s) "size" not set`),
			mockSvc: func(_ *mocks.Logger, _ *mocks.NerdctlCmdCreator, _ *gomock.Controller) {
				// No expectations needed as it should fail before any command execution
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			tc.mockSvc(logger, ncc, ctrl)

			cmd := newDiskResizeVMCommand(ncc, logger)
			cmd.SetArgs(tc.args)
			err := cmd.Execute()

			if tc.wantErr != nil {
				assert.Error(t, err)
				assert.Contains(t, err.Error(), tc.wantErr.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}

func TestDiskResizeVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		size    string
		wantErr error
		mockSvc func(*mocks.Logger, *mocks.NerdctlCmdCreator, *gomock.Controller)
	}{
		{
			name:    "should resize disk successfully",
			size:    "60GiB",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				resizeCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", "60GiB").Return(resizeCmd)
				resizeCmd.EXPECT().CombinedOutput().Return(nil, nil)
				logger.EXPECT().Infof("Resizing disk to %s...", "60GiB")
				logger.EXPECT().Info("Disk resized successfully.")
			},
		},
		{
			name: "should fail when VM is running",
			size: "60GiB",
			wantErr: fmt.Errorf("virtual machine %q must be in stopped state to resize disk",
				limaInstanceName),
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "should fail when VM does not exist",
			size:    "60GiB",
			wantErr: fmt.Errorf("virtual machine %q does not exist", limaInstanceName),
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:    "should fail when resize command fails",
			size:    "60GiB",
			wantErr: fmt.Errorf("failed to resize disk: command failed\nresize error"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				resizeCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", "60GiB").Return(resizeCmd)
				resizeCmd.EXPECT().CombinedOutput().Return([]byte("resize error"), errors.New("command failed"))
				logger.EXPECT().Infof("Resizing disk to %s...", "60GiB")
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)

			tc.mockSvc(logger, ncc, ctrl)
			err := newDiskResizeVMAction(ncc, logger).run(tc.size)

			if tc.wantErr != nil {
				assert.Error(t, err)
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}
