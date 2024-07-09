// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"bytes"
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNewStatusVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newStatusVMCommand(nil, nil, nil)
	assert.Equal(t, cmd.Name(), "status")
}

func TestStatusVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		command *cobra.Command
		args    []string
		mockSvc func(
			*mocks.LimaCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			*gomock.Controller,
		)
	}{
		{
			name: "should get nonexistent vm status",
			command: &cobra.Command{
				Use: "status",
			},
			args: []string{},
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			stdout := bytes.Buffer{}
			ncc := mocks.NewLimaCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)

			tc.mockSvc(ncc, logger, lca, ctrl)

			assert.NoError(t, newStatusVMAction(ncc, logger, &stdout).runAdapter(tc.command, tc.args))
		})
	}
}

func TestStatusVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name             string
		wantErr          error
		wantStatusOutput string
		mockSvc          func(
			*mocks.LimaCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			*gomock.Controller,
		)
	}{
		{
			name:             "running VM",
			wantErr:          nil,
			wantStatusOutput: "Running\n",
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:             "stopped VM",
			wantErr:          nil,
			wantStatusOutput: "Stopped\n",
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:             "nonExistent VM",
			wantErr:          nil,
			wantStatusOutput: "Nonexistent\n",
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:             "unknown VM status",
			wantErr:          errors.New("unrecognized system status"),
			wantStatusOutput: "",
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:             "status command returns an error",
			wantErr:          errors.New("get status error"),
			wantStatusOutput: "",
			mockSvc: func(
				ncc *mocks.LimaCmdCreator,
				_ *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
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
			stdout := bytes.Buffer{}
			ncc := mocks.NewLimaCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)

			tc.mockSvc(ncc, logger, lca, ctrl)

			err := newStatusVMAction(ncc, logger, &stdout).run()
			assert.Equal(t, err, tc.wantErr)
			assert.Equal(t, tc.wantStatusOutput, stdout.String())
		})
	}
}
