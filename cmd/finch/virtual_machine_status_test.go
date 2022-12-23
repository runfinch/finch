// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/stretchr/testify/assert"
)

func TestNewStatusVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newStatusVMCommand(nil, nil)
	assert.Equal(t, cmd.Name(), "status")
}

func TestStatusVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		groups  func(*gomock.Controller) []*dependency.Group
		mockSvc func(
			*mocks.LimaCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			*gomock.Controller,
		)
	}{
		{
			name:    "running VM",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "stopped VM",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:    "nonExistent VM",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Nonexistent"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Nonexistent")
			},
		},
		{
			name:    "undefined VM",
			wantErr: errors.New("unrecognized system status"),
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Undefined"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Undefined")
			},
		},
		{
			name:    "unknown VM status",
			wantErr: errors.New("unrecognized system status"),
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
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
			lca := mocks.NewLimaConfigApplier(ctrl)

			tc.mockSvc(lcc, logger, lca, ctrl)

			err := newStatusVMAction(lcc, logger).run()
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
