// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
)

func TestNerdctlCommand_withVMErrors(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmdName string
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(*testing.T, *mocks.NerdctlCmdCreator, *mocks.CommandCreator, *mocks.NerdctlCommandSystemDeps, *mocks.Logger,
			*gomock.Controller, afero.Fs)
	}{
		{
			name:    "stopped VM",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: fmt.Errorf("instance %q is stopped, run `finch %s start` to start the instance",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				_ *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:    "nonexistent VM",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: fmt.Errorf(
				"instance %q does not exist, run `finch %s init` to create a new instance",
				limaInstanceName, virtualMachineRootCmd),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				_ *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
		},
		{
			name:    "unknown VM status",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: errors.New("unrecognized system status"),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				_ *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: errors.New("get status error"),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				_ *mocks.NerdctlCommandSystemDeps,
				_ *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
		},
	}
	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ncc, ecc, ncsd, logger, ctrl, fs)
			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmdName, tc.args))
		})
	}
}

func TestHandleFlagArg(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		inputArgs    []string
		expectedArgs []string
	}{
		{
			inputArgs:    []string{"--flag", "value"},
			expectedArgs: []string{"--flag", "value"},
		},
		{
			inputArgs:    []string{"--flag=value", ""},
			expectedArgs: []string{"--flag", "value"},
		},
		{
			inputArgs:    []string{"--flag=\"value\"", ""},
			expectedArgs: []string{"--flag", "\"value\""},
		},
		{
			inputArgs:    []string{"--flag", "10"},
			expectedArgs: []string{"--flag", "10"},
		},
		{
			inputArgs:    []string{"--flag", "-10"},
			expectedArgs: []string{"--flag", "-10"},
		},
		{
			inputArgs:    []string{"--flag", "10s"},
			expectedArgs: []string{"--flag", "10s"},
		},
		{
			inputArgs:    []string{"--flag", "-10s"},
			expectedArgs: []string{"--flag", "-10s"},
		},
		{
			inputArgs:    []string{"--flag=10", ""},
			expectedArgs: []string{"--flag", "10"},
		},
		{
			inputArgs:    []string{"--flag=10s", ""},
			expectedArgs: []string{"--flag", "10s"},
		},
		{
			inputArgs:    []string{"--flag=-10", ""},
			expectedArgs: []string{"--flag", "-10"},
		},
		{
			inputArgs:    []string{"--flag=-10s", ""},
			expectedArgs: []string{"--flag", "-10s"},
		},
		{
			inputArgs:    []string{"--flag=\"10\"", ""},
			expectedArgs: []string{"--flag", "\"10\""},
		},
		{
			inputArgs:    []string{"--flag=\"-10\"", ""},
			expectedArgs: []string{"--flag", "\"-10\""},
		},
		{
			inputArgs:    []string{"--flag=\"10s\"", ""},
			expectedArgs: []string{"--flag", "\"10s\""},
		},
		{
			inputArgs:    []string{"--flag=\"-10s\"", ""},
			expectedArgs: []string{"--flag", "\"-10s\""},
		},
		{
			inputArgs:    []string{"-f", "value"},
			expectedArgs: []string{"-f", "value"},
		},
		{
			inputArgs:    []string{"-f=value", ""},
			expectedArgs: []string{"-f", "value"},
		},
		{
			inputArgs:    []string{"-f=\"value\"", ""},
			expectedArgs: []string{"-f", "\"value\""},
		},
		{
			inputArgs:    []string{"-f", "10s"},
			expectedArgs: []string{"-f", "10s"},
		},
		{
			inputArgs:    []string{"-f", "-10s"},
			expectedArgs: []string{"-f", "-10s"},
		},
		{
			inputArgs:    []string{"-f=10", ""},
			expectedArgs: []string{"-f", "10"},
		},
		{
			inputArgs:    []string{"-f=10s", ""},
			expectedArgs: []string{"-f", "10s"},
		},
		{
			inputArgs:    []string{"-f=-10", ""},
			expectedArgs: []string{"-f", "-10"},
		},
		{
			inputArgs:    []string{"-f=-10s", ""},
			expectedArgs: []string{"-f", "-10s"},
		},
		{
			inputArgs:    []string{"-f=\"10\"", ""},
			expectedArgs: []string{"-f", "\"10\""},
		},
		{
			inputArgs:    []string{"-f=\"10s\"", ""},
			expectedArgs: []string{"-f", "\"10s\""},
		},
		{
			inputArgs:    []string{"-f=\"-10\"", ""},
			expectedArgs: []string{"-f", "\"-10\""},
		},
		{
			inputArgs:    []string{"-f=\"-10s\"", ""},
			expectedArgs: []string{"-f", "\"-10s\""},
		},
		{
			inputArgs:    []string{"-f10", ""},
			expectedArgs: []string{"-f", "10"},
		},
	}
	for _, tc := range testCases {
		ctrl := gomock.NewController(t)
		ecc := mocks.NewCommandCreator(ctrl)
		ncc := mocks.NewNerdctlCmdCreator(ctrl)
		ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
		logger := mocks.NewLogger(ctrl)
		fs := afero.NewMemMapFs()
		nc := newNerdctlCommand(ncc, ecc, ncsd, logger, fs, nil)
		// the first return value is never used
		_, flagKey, flagVal := nc.handleFlagArg(tc.inputArgs[0], tc.inputArgs[1])
		assert.Equal(t, flagKey, tc.expectedArgs[0])
		assert.Equal(t, flagVal, tc.expectedArgs[1])
	}
}

func TestIsNumericArg(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		arg      string
		expected bool
	}{
		{
			arg:      "5",
			expected: true,
		},
		{
			arg:      "5s",
			expected: true,
		},
		{
			arg:      "-5",
			expected: true,
		},
		{
			arg:      "-5s",
			expected: true,
		},
		{
			arg:      "abc",
			expected: false,
		},
		{
			arg:      "-abc",
			expected: false,
		},
	}
	for _, tc := range testCases {
		assert.Equal(t, tc.expected, isNumericArg(tc.arg))
	}
}
