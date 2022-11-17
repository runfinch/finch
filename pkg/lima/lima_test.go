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
