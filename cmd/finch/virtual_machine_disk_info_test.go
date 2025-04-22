// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNewVMDiskInfoCommand(t *testing.T) {
	t.Parallel()

	cmd := newVMDiskInfoCommand(nil, nil)
	assert.Equal(t, "info", cmd.Name())
}

func TestDiskInfoAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		command *cobra.Command
		args    []string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name: "should get disk info successfully",
			command: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, _ *mocks.Logger, ctrl *gomock.Controller) {
				getDiskInfoC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("disk", "ls", limaInstanceName).Return(getDiskInfoC)
				getDiskInfoC.EXPECT().CombinedOutput().Return([]byte(
					"NAME    SIZE    FORMAT    DIR\nfinch   50GiB   raw      /path/to/disk\n"), nil)
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)

			tc.mockSvc(ncc, logger, ctrl)

			assert.NoError(t, newDiskInfoAction(ncc, logger).runAdapter(tc.command, tc.args))
		})
	}
}

func TestDiskInfoAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name:    "successful disk info",
			wantErr: nil,
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, _ *mocks.Logger, ctrl *gomock.Controller) {
				getDiskInfoC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("disk", "ls", limaInstanceName).Return(getDiskInfoC)
				getDiskInfoC.EXPECT().CombinedOutput().Return([]byte(
					"NAME    SIZE    FORMAT    DIR\nfinch   50GiB   raw      /path/to/disk\n"), nil)
			},
		},
		{
			name:    "nonexistent disk",
			wantErr: errors.New("failed to get disk information: command failed\ndisk \"finch\" does not exists"),
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, _ *mocks.Logger, ctrl *gomock.Controller) {
				getDiskInfoC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("disk", "ls", limaInstanceName).Return(getDiskInfoC)
				getDiskInfoC.EXPECT().CombinedOutput().Return([]byte("disk \"finch\" does not exists"), errors.New("command failed"))
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)

			tc.mockSvc(ncc, logger, ctrl)

			err := newDiskInfoAction(ncc, logger).run()
			if tc.wantErr != nil {
				assert.Error(t, err)
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}
