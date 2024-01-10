// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package lima_test

import (
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/mocks"
)

func TestGetVMStatus(t *testing.T) {
	t.Parallel()

	instanceName := "finch"
	mockArgs := []string{"ls", "-f", "{{.Status}}", instanceName}
	testCases := []struct {
		name    string
		want    lima.VMStatus
		wantErr error
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *mocks.Command)
	}{
		{
			name:    "running VM",
			want:    lima.Running,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Running "), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "stopped VM",
			want:    lima.Stopped,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Stopped "), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:    "nonexistent VM",
			want:    lima.Nonexistent,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(" "), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:    "unknown VM status",
			want:    lima.Unknown,
			wantErr: errors.New("unrecognized system status"),
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Broken "), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			want:    lima.Unknown,
			wantErr: errors.New("get status error"),
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Broken "), errors.New("get status error"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			creator := mocks.NewLimaCmdCreator(ctrl)
			statusCmd := mocks.NewCommand(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(creator, logger, statusCmd)
			got, err := lima.GetVMStatus(creator, logger, instanceName)
			assert.Equal(t, tc.wantErr, err)
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestGetVMType(t *testing.T) {
	t.Parallel()

	instanceName := "finch"
	mockArgs := []string{"ls", "-f", "{{.VMType}}", instanceName}
	testCases := []struct {
		name    string
		want    lima.VMType
		wantErr error
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *mocks.Command)
	}{
		{
			name:    "qemu VM",
			want:    lima.QEMU,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("qemu"), nil)
				logger.EXPECT().Debugf("VMType of virtual machine: %s", "qemu")
			},
		},
		{
			name:    "vz VM",
			want:    lima.VZ,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("vz"), nil)
				logger.EXPECT().Debugf("VMType of virtual machine: %s", "vz")
			},
		},
		{
			name:    "wsl VM",
			want:    lima.WSL,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("wsl2"), nil)
				logger.EXPECT().Debugf("VMType of virtual machine: %s", "wsl2")
			},
		},
		{
			name:    "nonexistent VM",
			want:    lima.NonexistentVMType,
			wantErr: nil,
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(" "), nil)
				logger.EXPECT().Debugf("VMType of virtual machine: %s", "")
			},
		},
		{
			name:    "unknown VM type",
			want:    lima.UnknownVMType,
			wantErr: errors.New("unrecognized VMType"),
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Broken "), nil)
				logger.EXPECT().Debugf("VMType of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "type command returns an error",
			want:    lima.UnknownVMType,
			wantErr: errors.New("get VMType error"),
			mockSvc: func(creator *mocks.LimaCmdCreator, logger *mocks.Logger, cmd *mocks.Command) {
				creator.EXPECT().CreateWithoutStdio(mockArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte("Broken "), errors.New("get VMType error"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			creator := mocks.NewLimaCmdCreator(ctrl)
			statusCmd := mocks.NewCommand(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(creator, logger, statusCmd)
			got, err := lima.GetVMType(creator, logger, instanceName)
			assert.Equal(t, tc.wantErr, err)
			assert.Equal(t, tc.want, got)
		})
	}
}
