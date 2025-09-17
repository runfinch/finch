// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestDiskUsageAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Command, *gomock.Controller)
		wantErr error
	}{
		{
			name: "should return disk usage when VM is running",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, cmd *mocks.Command, ctrl *gomock.Controller) {
				// Mock VM status check
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return([]byte("Running"), nil)

				// Mock disk usage command
				creator.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "df", "-h", "/mnt/lima-finch").Return(cmd)
				cmd.EXPECT().CombinedOutput().Return([]byte(`Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        20G  5.0G   14G  27% /mnt/lima-finch`), nil)
			},
			wantErr: nil,
		},
		{
			name: "should return error when VM is not running",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, _ *mocks.Command, ctrl *gomock.Controller) {
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return([]byte("Stopped"), nil)
			},
			wantErr: errors.New("virtual machine is not running (status: Stopped)"),
		},
		{
			name: "should return error when status check fails",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, _ *mocks.Command, ctrl *gomock.Controller) {
				// Mock VM status check failure
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return(nil, errors.New("lima command failed"))
			},
			wantErr: errors.New("failed to check VM status: lima command failed"),
		},
		{
			name: "should return error when disk usage command fails",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, cmd *mocks.Command, ctrl *gomock.Controller) {
				// Mock VM status check
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return([]byte("Running"), nil)

				// Mock disk usage command failure
				creator.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "df", "-h", "/mnt/lima-finch").Return(cmd)
				cmd.EXPECT().CombinedOutput().Return([]byte("command failed"), errors.New("shell command failed"))
			},
			wantErr: errors.New("failed to get disk usage information: shell command failed\ncommand failed"),
		},
		{
			name: "should return error when disk usage output is empty",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, cmd *mocks.Command, ctrl *gomock.Controller) {
				// Mock VM status check
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return([]byte("Running"), nil)

				// Mock empty disk usage output
				creator.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "df", "-h", "/mnt/lima-finch").Return(cmd)
				cmd.EXPECT().CombinedOutput().Return([]byte(""), nil)
			},
			wantErr: errors.New("no disk usage information available"),
		},
		{
			name: "should return error when disk usage output format is unexpected",
			mockSvc: func(creator *mocks.NerdctlCmdCreator, cmd *mocks.Command, ctrl *gomock.Controller) {
				// Mock VM status check
				statusCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(statusCmd)
				statusCmd.EXPECT().CombinedOutput().Return([]byte("Running"), nil)

				// Mock malformed disk usage output
				creator.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "df", "-h", "/mnt/lima-finch").Return(cmd)
				cmd.EXPECT().CombinedOutput().Return([]byte("invalid output"), nil)
			},
			wantErr: errors.New("unexpected disk usage output format"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			creator := mocks.NewNerdctlCmdCreator(ctrl)
			cmd := mocks.NewCommand(ctrl)
			logger := mocks.NewLogger(ctrl)

			tc.mockSvc(creator, cmd, ctrl)

			action := newDiskUsageAction(creator, logger)
			err := action.run()

			if tc.wantErr != nil {
				assert.EqualError(t, err, tc.wantErr.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}

func TestNewVMDiskUsageCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	creator := mocks.NewNerdctlCmdCreator(ctrl)
	logger := mocks.NewLogger(ctrl)

	cmd := newVMDiskUsageCommand(creator, logger)

	assert.Equal(t, "usage", cmd.Use)
	assert.Equal(t, "Display disk usage information from within the virtual machine", cmd.Short)
	assert.NotEmpty(t, cmd.Long)
	assert.NotNil(t, cmd.RunE)
}
