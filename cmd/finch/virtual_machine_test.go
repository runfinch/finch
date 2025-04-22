// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"errors"
	"runtime"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
)

func TestVirtualMachineCommand(t *testing.T) {
	t.Parallel()

	cmd := newVirtualMachineCommand(nil, nil, nil, nil, nil, "", nil, nil)
	assert.Equal(t, cmd.Use, virtualMachineRootCmd)

	// check the number of subcommand for vm
	expectedCmds := 6
	if runtime.GOOS == "darwin" {
		expectedCmds = 7 // Darwin includes disk commands
	}
	assert.Equal(t, len(cmd.Commands()), expectedCmds)
}

func TestPostVMStartInitAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.NerdctlCmdCreator, *mocks.Command, *mocks.NerdctlConfigApplier)
		cmd     *cobra.Command
		args    []string
		wantErr error
	}{
		{
			name: "config files are applied after boot",
			mockSvc: func(logger *mocks.Logger, ncc *mocks.NerdctlCmdCreator, command *mocks.Command, nca *mocks.NerdctlConfigApplier) {
				logger.EXPECT().Debugln("Applying guest configuration options")
				command.EXPECT().Output().Return([]byte("80"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.SSHLocalPort}}", limaInstanceName).Return(command)
				nca.EXPECT().Apply("127.0.0.1:80").Return(nil)
			},
			cmd: &cobra.Command{
				Use: "init",
			},
			args:    []string{},
			wantErr: nil,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			command := mocks.NewCommand(ctrl)
			nca := mocks.NewNerdctlConfigApplier(ctrl)
			tc.mockSvc(logger, ncc, command, nca)

			err := newPostVMStartInitAction(logger, ncc, nil, "", nca).runAdapter(tc.cmd, tc.args)
			assert.Equal(t, err, tc.wantErr)
		})
	}
}

func TestPostVMStartInitAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.NerdctlCmdCreator, *mocks.Command, *mocks.NerdctlConfigApplier)
		wantErr error
	}{
		{
			name: "config files are applied after boot",
			mockSvc: func(logger *mocks.Logger, ncc *mocks.NerdctlCmdCreator, command *mocks.Command, nca *mocks.NerdctlConfigApplier) {
				logger.EXPECT().Debugln("Applying guest configuration options")
				command.EXPECT().Output().Return([]byte("80"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.SSHLocalPort}}", limaInstanceName).Return(command)
				nca.EXPECT().Apply("127.0.0.1:80").Return(nil)
			},
			wantErr: nil,
		},
		{
			name: "should return an error if sshPortCmd has an error output",
			mockSvc: func(logger *mocks.Logger, ncc *mocks.NerdctlCmdCreator, command *mocks.Command, _ *mocks.NerdctlConfigApplier) {
				logger.EXPECT().Debugln("Applying guest configuration options")
				command.EXPECT().Output().Return(nil, errors.New("ssh port error"))
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.SSHLocalPort}}", limaInstanceName).Return(command)
			},
			wantErr: errors.New("ssh port error"),
		},
		{
			name: "should print info and return without error if port is 0",
			mockSvc: func(logger *mocks.Logger, ncc *mocks.NerdctlCmdCreator, command *mocks.Command, _ *mocks.NerdctlConfigApplier) {
				logger.EXPECT().Debugln("Applying guest configuration options")
				command.EXPECT().Output().Return([]byte("0"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.SSHLocalPort}}", limaInstanceName).Return(command)
				logger.EXPECT().Warnln("SSH port = 0, is the instance running? Not able to apply VM configuration options")
			},
			wantErr: nil,
		},
		{
			name: "should return error if applyNerdctlConfig has an error",
			mockSvc: func(logger *mocks.Logger, ncc *mocks.NerdctlCmdCreator, command *mocks.Command, nca *mocks.NerdctlConfigApplier) {
				logger.EXPECT().Debugln("Applying guest configuration options")
				command.EXPECT().Output().Return([]byte("80"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.SSHLocalPort}}", limaInstanceName).Return(command)
				nca.EXPECT().Apply("127.0.0.1:80").Return(errors.New("applyNerdctlConfig has an error"))
			},
			wantErr: errors.New("applyNerdctlConfig has an error"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			command := mocks.NewCommand(ctrl)
			nca := mocks.NewNerdctlConfigApplier(ctrl)
			tc.mockSvc(logger, ncc, command, nca)

			err := newPostVMStartInitAction(logger, ncc, nil, "", nca).run()
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
