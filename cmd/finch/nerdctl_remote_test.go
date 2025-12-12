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

	"github.com/runfinch/finch/pkg/command"
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

func TestNerdctlCommand_withEmptyArgs(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmdName string
		args    []string
	}{
		{
			name:    "finch run with no arguments",
			cmdName: "container run",
			args:    []string{},
		},
		{
			name:    "finch compose with no arguments",
			cmdName: "compose",
			args:    []string{},
		},
		{
			name:    "finch exec with no arguments",
			cmdName: "exec",
			args:    []string{},
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
			fc := &config.Finch{}

			// Mock VM status check to return running
			getVMStatusC := mocks.NewCommand(ctrl)
			ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
			getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
			logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

			// Mock environment variable lookups (these happen in the run method)
			envVars := []string{
				"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
				"AWS_SESSION_TOKEN", "COMPOSE_FILE", "SOURCE_DATE_EPOCH",
				"AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR", "AWS_ECR_IGNORE_CREDS_STORAGE",
			}
			for _, envVar := range envVars {
				ncsd.EXPECT().LookupEnv(envVar).Return("", false).AnyTimes()
			}

			// Mock Windows-specific system calls (GetCmdArgs method calls these)
			ncsd.EXPECT().GetWd().Return("C:\\test", nil).AnyTimes()
			ncsd.EXPECT().FilePathAbs(gomock.Any()).DoAndReturn(func(path string) (string, error) {
				return path, nil
			}).AnyTimes()
			ncsd.EXPECT().FilePathToSlash(gomock.Any()).DoAndReturn(func(path string) string {
				return path
			}).AnyTimes()
			ncsd.EXPECT().FilePathJoin(gomock.Any()).DoAndReturn(func(_ ...string) string {
				return "/mnt/c/test"
			}).AnyTimes()

			// Mock the RunWithReplacingStdout method (used when --help is present)
			ncc.EXPECT().RunWithReplacingStdout(gomock.Any(), gomock.Any()).DoAndReturn(
				func(replacements []command.Replacement, args ...string) error {
					// Verify that --help was added to the arguments
					found := false
					for _, arg := range args {
						if arg == "--help" {
							found = true
							break
						}
					}
					assert.True(t, found, "Expected --help to be added to arguments")

					// Verify the replacement is correct (nerdctl -> finch)
					assert.Len(t, replacements, 1, "Expected one replacement")
					assert.Equal(t, "nerdctl", replacements[0].Source, "Expected source to be 'nerdctl'")
					assert.Equal(t, "finch", replacements[0].Target, "Expected target to be 'finch'")

					return nil
				})

			// This should not panic and should complete successfully
			err := newNerdctlCommand(ncc, ecc, ncsd, logger, fs, fc).run(tc.cmdName, tc.args)
			assert.NoError(t, err)
		})
	}
}
