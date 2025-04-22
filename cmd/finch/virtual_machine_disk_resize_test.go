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

func TestNewDiskResizeCommand(t *testing.T) {
	t.Parallel()

	cmd := newVMDiskResizeCommand(nil, nil)
	assert.Equal(t, "resize", cmd.Name())
}

func TestVMDiskResizeAction_runAdapter(t *testing.T) {
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

			cmd := newVMDiskResizeCommand(ncc, logger)
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

func TestVMDiskResizeAction_run(t *testing.T) {
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
				resizeCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", "60GiB").Return(resizeCmd)
				resizeCmd.EXPECT().CombinedOutput().Return(nil, nil)
				logger.EXPECT().Infof("Resizing disk to %s...", "60GiB")
				logger.EXPECT().Info("Disk resized successfully.")
			},
		},
		{
			name:    "should fail with generic error",
			size:    "60GiB",
			wantErr: fmt.Errorf("failed to resize disk: %w\n%s", errors.New("command failed"), "some error occurred"),
			mockSvc: func(logger *mocks.Logger, creator *mocks.NerdctlCmdCreator, ctrl *gomock.Controller) {
				resizeCmd := mocks.NewCommand(ctrl)
				creator.EXPECT().CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", "60GiB").Return(resizeCmd)
				resizeCmd.EXPECT().CombinedOutput().Return([]byte("some error occurred"), errors.New("command failed"))
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
			err := newVMDiskResizeAction(ncc, logger).run(tc.size)

			if tc.wantErr != nil {
				assert.Error(t, err)
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}
