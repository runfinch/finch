// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package command_test

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/mocks"
)

const (
	mockNerdctlConfigPath  = "/etc/finch/nerdctl.toml"
	mockBuildkitSocketPath = "/etc/finch/buildkit"
	mockFinchBinPath       = "/usr/lib/usrexec/finch"
	mockSystemPath         = "/usr/bin"
	finalPath              = mockFinchBinPath + command.EnvKeyPathJoiner + mockSystemPath
)

var mockArgs = []string{"shell", "finch"}

func TestLimaCmdCreator_Create(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.CommandCreator, *mocks.Command, *mocks.NerdctlCmdCreatorSystemDeps)
		wantErr error
	}{
		{
			name:    "happy path",
			wantErr: nil,
			mockSvc: func(logger *mocks.Logger, cmdCreator *mocks.CommandCreator, cmd *mocks.Command, lcd *mocks.NerdctlCmdCreatorSystemDeps) {
				logger.EXPECT().Debugf("Creating nerdctl command: ARGUMENTS: %v", mockArgs)
				cmdCreator.EXPECT().Create("/usr/lib/usrexec/finch/nerdctl", mockArgs).Return(cmd)
				lcd.EXPECT().Env(command.EnvKeyPath).Return(mockSystemPath)
				lcd.EXPECT().Environ().Return([]string{})
				lcd.EXPECT().Stdin().Return(nil)
				lcd.EXPECT().Stdout().Return(nil)
				lcd.EXPECT().Stderr().Return(nil)
				cmd.EXPECT().SetEnv([]string{
					fmt.Sprintf("%s=%s", command.EnvKeyPath, finalPath),
					fmt.Sprintf("%s=%s", command.EnvKeyNerdctlTOML, mockNerdctlConfigPath),
					fmt.Sprintf("%s=unix://%s", command.EnvKeyBuildkitHost, mockBuildkitSocketPath),
				})
				cmd.EXPECT().SetStdin(nil)
				cmd.EXPECT().SetStdout(nil)
				cmd.EXPECT().SetStderr(nil)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmdCreator := mocks.NewCommandCreator(ctrl)
			cmd := mocks.NewCommand(ctrl)
			logger := mocks.NewLogger(ctrl)
			lcd := mocks.NewNerdctlCmdCreatorSystemDeps(ctrl)
			tc.mockSvc(logger, cmdCreator, cmd, lcd)
			command.NewNerdctlCmdCreator(
				cmdCreator,
				logger,
				mockNerdctlConfigPath,
				mockBuildkitSocketPath,
				mockFinchBinPath,
				lcd,
			).Create(mockArgs...)
		})
	}
}
