// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/mocks"
)

var testStdoutRs = []command.Replacement{
	{Source: "nerdctl", Target: "finch"},
}

func TestNerdctlCommandCreator_create(t *testing.T) {
	t.Parallel()

	cmd := newNerdctlCommandCreator(nil, nil, nil, nil).create("build", "build description")
	assert.Equal(t, cmd.Name(), "build")
	assert.Equal(t, cmd.DisableFlagParsing, true)
}

func TestNerdctlCommand_shouldReplaceForHelp(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmdName string
		args    []string
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name:    "with --help flag",
			cmdName: "pull",
			args:    []string{"test:tag", "--help"},
		},
		{
			name:    "with -h",
			cmdName: "pull",
			args:    []string{"test:tag", "-h"},
		},
		{
			name:    "system returns help",
			cmdName: "system",
		},
		{
			name:    "builder returns help",
			cmdName: "builder",
		},
		{
			name:    "container returns help",
			cmdName: "container",
		},
		{
			name:    "image returns help",
			cmdName: "image",
		},
		{
			name:    "network returns help",
			cmdName: "network",
		},
		{
			name:    "volume returns help",
			cmdName: "volume",
		},
		{
			name:    "compose returns help",
			cmdName: "compose",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			assert.True(t, newNerdctlCommand(lcc, ncsd, logger, nil).shouldReplaceForHelp(tc.cmdName, tc.args))
		})
	}
}

func TestNerdctlCommand_withVMErrors(t *testing.T) {
	testCases := []struct {
		name    string
		cmdName string
		args    []string
		wantErr error
		mockSvc func(*testing.T, *mocks.LimaCmdCreator, *mocks.NerdctlCommandSystemDeps, *mocks.Logger, *gomock.Controller, afero.Fs)
	}{
		{
			name:    "stopped VM",
			cmdName: "build",
			args:    []string{"-t", "demo", "."},
			wantErr: fmt.Errorf("instance %q is stopped, run `finch %s start` to start the instance",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:    "nonexistent VM",
			cmdName: "build",
			args:    []string{"-t", "demo", "."},
			wantErr: fmt.Errorf(
				"instance %q does not exist, run `finch %s init` to create a new instance",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:    "unknown VM status",
			cmdName: "build",
			args:    []string{"-t", "demo", "."},
			wantErr: errors.New("unrecognized system status"),
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			cmdName: "build",
			args:    []string{"-t", "demo", "."},
			wantErr: errors.New("get status error"),
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
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
			lcc := mocks.NewLimaCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, lcc, ncsd, logger, ctrl, fs)
			assert.Equal(t, tc.wantErr, newNerdctlCommand(lcc, ncsd, logger, fs).run(tc.cmdName, tc.args))
		})
	}
}
