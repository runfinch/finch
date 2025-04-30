// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"bytes"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNerdctlCommand_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     *cobra.Command
		args    []string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name: "happy path",
			cmd: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "info").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(ncc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestNerdctlCommand_run_pullCommand(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		cmdName string
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(
			t *testing.T,
			ncc *mocks.NerdctlCmdCreator,
			ecc *mocks.CommandCreator,
			ncsd *mocks.NerdctlCommandSystemDeps,
			logger *mocks.Logger,
			ctrl *gomock.Controller,
			fs afero.Fs,
		)
	}{
		{
			name:    "with --debug flag",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--debug"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				logger.EXPECT().SetLevel(flog.Debug)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --help flag",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--help"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").Return(nil)
			},
		},
		{
			name:    "with --help flag but replacing returns error",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--help"},
			wantErr: fmt.Errorf("failed to replace"),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").
					Return(fmt.Errorf("failed to replace"))
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var and --sign=cosign",
			cmdName: "push",
			fc:      &config.Finch{},
			args:    []string{"--sign=cosign", "test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
					"push", "--sign=cosign", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var and --verify=cosign",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"--verify=cosign", "test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
					"pull", "--verify=cosign", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var without cosign arg",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test",
					nerdctlCmdName, "pull", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with ECR credential helper and environment set",
			cmdName: "pull",
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					CredsHelpers: []string{"ecr-login"},
				},
			},
			args:    []string{"test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				ecc *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("TEST_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("TEST_SECRET_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("TEST_SESSION_TOKEN", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)

				awsCmd := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create(
					"aws",
					"configure",
					"export-credentials",
					"--format",
					"process",
				).Return(awsCmd)
				awsCmd.EXPECT().CombinedOutput().Return([]byte(`{
    "AccessKeyID": "TEST_ACCESS_KEY_FROM_PROCESS",
    "SecretAccessKey": "TEST_SECRET_ACCESS_KEY_FROM_PROCESS",
    "SessionToken": "TEST_SESSION_TOKEN_FROM_PROCESS"
}
`), nil)

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell",
					limaInstanceName,
					"sudo",
					"-E",
					"AWS_ACCESS_KEY_ID=TEST_ACCESS_KEY_FROM_PROCESS",
					"AWS_SECRET_ACCESS_KEY=TEST_SECRET_ACCESS_KEY_FROM_PROCESS",
					"AWS_SESSION_TOKEN=TEST_SESSION_TOKEN_FROM_PROCESS",
					"AWS_ACCESS_KEY_ID=TEST_ACCESS_KEY",
					"AWS_SECRET_ACCESS_KEY=TEST_SECRET_ACCESS_KEY",
					"AWS_SESSION_TOKEN=TEST_SESSION_TOKEN",
					nerdctlCmdName,
					"pull",
					"test:tag",
				).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with ECR credential helper, no environment set",
			cmdName: "pull",
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					CredsHelpers: []string{"ecr-login"},
				},
			},
			args:    []string{"test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				ecc *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("TEST_ACCESS_KEY", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("TEST_SECRET_ACCESS_KEY", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("TEST_SESSION_TOKEN", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)

				awsCmd := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create(
					"aws",
					"configure",
					"export-credentials",
					"--format",
					"process",
				).Return(awsCmd)
				awsCmd.EXPECT().CombinedOutput().Return([]byte(`{
    "AccessKeyID": "TEST_ACCESS_KEY_FROM_PROCESS",
    "SecretAccessKey": "TEST_SECRET_ACCESS_KEY_FROM_PROCESS",
    "SessionToken": "TEST_SESSION_TOKEN_FROM_PROCESS"
}
`), nil)

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell",
					limaInstanceName,
					"sudo",
					"-E",
					"AWS_ACCESS_KEY_ID=TEST_ACCESS_KEY_FROM_PROCESS",
					"AWS_SECRET_ACCESS_KEY=TEST_SECRET_ACCESS_KEY_FROM_PROCESS",
					"AWS_SESSION_TOKEN=TEST_SESSION_TOKEN_FROM_PROCESS",
					nerdctlCmdName,
					"pull",
					"test:tag",
				).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with ECR credential helper, aws command fails but environment is used",
			cmdName: "pull",
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					CredsHelpers: []string{"ecr-login"},
				},
			},
			args:    []string{"test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				ecc *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("TEST_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("TEST_SECRET_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("TEST_SESSION_TOKEN", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)

				awsCmd := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create(
					"aws",
					"configure",
					"export-credentials",
					"--format",
					"process",
				).Return(awsCmd)
				awsCmd.EXPECT().CombinedOutput().Return(nil, fmt.Errorf("an error"))
				logger.EXPECT().Debugln("failed to run `aws configure` command")

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell",
					limaInstanceName,
					"sudo",
					"-E",
					"AWS_ACCESS_KEY_ID=TEST_ACCESS_KEY",
					"AWS_SECRET_ACCESS_KEY=TEST_SECRET_ACCESS_KEY",
					"AWS_SESSION_TOKEN=TEST_SESSION_TOKEN",
					nerdctlCmdName,
					"pull",
					"test:tag",
				).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with ECR credential helper, aws command fails but returns unexpected response",
			cmdName: "pull",
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					CredsHelpers: []string{"ecr-login"},
				},
			},
			args:    []string{"test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				ecc *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("TEST_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("TEST_SECRET_ACCESS_KEY", true)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("TEST_SESSION_TOKEN", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)

				awsCmd := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create(
					"aws",
					"configure",
					"export-credentials",
					"--format",
					"process",
				).Return(awsCmd)
				awsCmd.EXPECT().CombinedOutput().Return([]byte("unexpected response"), nil)
				logger.EXPECT().Debugln("`aws configure export-credentials` output is unexpected, is command available? " +
					"This may result in a broken ecr-credential helper experience.")

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell",
					limaInstanceName,
					"sudo",
					"-E",
					"AWS_ACCESS_KEY_ID=TEST_ACCESS_KEY",
					"AWS_SECRET_ACCESS_KEY=TEST_SECRET_ACCESS_KEY",
					"AWS_SESSION_TOKEN=TEST_SESSION_TOKEN",
					nerdctlCmdName,
					"pull",
					"test:tag",
				).Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ncc, ecc, ncsd, logger, ctrl, fs)

			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmdName, tc.args))
		})
	}
}

func TestNerdctlCommand_run(t *testing.T) {
	t.Parallel()
	envFilePath := filepath.Join(string(filepath.Separator), "env-file")
	testCases := []struct {
		name    string
		cmd     *cobra.Command
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(
			t *testing.T,
			lcc *mocks.NerdctlCmdCreator,
			ecc *mocks.CommandCreator,
			ncsd *mocks.NerdctlCommandSystemDeps,
			logger *mocks.Logger,
			ctrl *gomock.Controller,
			fs afero.Fs,
		)
	}{
		{
			name: "with single option flag",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"-it", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-it", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with explicit env flag parsing",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"-it", "-e", "ARG1=val1", "--env=ARG2=val2", "-eARG3=val3",
				"--name", "myContainer", "--rm", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-it", "-e", "ARG1=val1", "--env=ARG2=val2", "-eARG3=val3",
					"--name", "myContainer", "--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with implicit env flag parsing; values exist in host env",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"-it", "-e", "ARG1", "--env=ARG2", "-eARG3", "--rm", "--name", "myContainer", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncsd.EXPECT().LookupEnv("ARG1").Return("val1", true)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "ARG1=val1", "ARG2=val2", nerdctlCmdName, "run",
					"-it", "-e", "ARG1", "--env=ARG2", "-eARG3", "--rm", "--name", "myContainer", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with implicit env flag parsing; values do not exist",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--name", "myContainer", "-it", "-e", "ARG0=val0", "-e", "ARG1", "--env=ARG2", "-eARG3",
				"--rm", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncsd.EXPECT().LookupEnv("ARG1")
				ncsd.EXPECT().LookupEnv("ARG2")
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--name", "myContainer", "-it", "-e", "ARG0=val0", "-e", "ARG1", "--env=ARG2", "-eARG3",
					"--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with explicit env flag parsing and debug mode",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--debug", "--name", "myContainer", "--rm", "-e", "ARG1=val1", "--env=ARG2=val2",
				"-it", "-eARG3=val3", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--name", "myContainer", "--rm", "-e", "ARG1=val1", "--env=ARG2=val2",
					"-it", "-eARG3=val3", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with implicit env flag parsing and debug mode; values exist in host env",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--debug", "--rm", "--name", "myContainer", "-e", "ARG1", "--env=ARG2", "-it", "-eARG3", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncsd.EXPECT().LookupEnv("ARG1").Return("val1", true)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "ARG1=val1", "ARG2=val2", nerdctlCmdName, "run",
					"--rm", "--name", "myContainer", "-e", "ARG1", "--env=ARG2", "-it", "-eARG3", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with implicit env flag parsing and debug mode; values do not exist",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--debug", "--rm", "-e", "ARG0=val0", "-e", "ARG1", "--env=ARG2", "-it",
				"--name", "myContainer", "-eARG3", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncsd.EXPECT().LookupEnv("ARG1")
				ncsd.EXPECT().LookupEnv("ARG2")
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "-e", "ARG0=val0", "-e", "ARG1", "--env=ARG2", "-it",
					"--name", "myContainer", "-eARG3", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with explicit env flag parsing and image args",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--debug", "-i", "--name", "myContainer", "--rm", "-e", "ARG1=val1", "--env=ARG2=val2",
				"-t", "-eARG3=val3", "busybox:latest", "echo", "-e", "hello\tbye",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				ncsd.EXPECT().LookupEnv("hello\tbye")
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-i", "--name", "myContainer", "--rm", "-e", "ARG1=val1", "--env=ARG2=val2",
					"-t", "-eARG3=val3", "busybox:latest", "echo", "-e", "hello\tbye").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --env-file flag replacement",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"-i", "--name", "myContainer", "--rm", "--env-file=/env-file", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\nARG1=val1\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				lcc.EXPECT().
					Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
						"-i", "--name", "myContainer", "--rm", "--env-file=/env-file", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --env-file flag replacement and with --debug flag; implicit value not present",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--debug", "--rm", "--env-file=/env-file", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\nARG1=val1\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				lcc.EXPECT().
					Create(
						"shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run", "--rm",
						"--env-file=/env-file", "alpine:latest", "env",
					).
					Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --env-file flag replacement and existing env value",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				lcc.EXPECT().
					Create(
						"shell", limaInstanceName, "sudo", "-E", "ARG2=val2", nerdctlCmdName, "run",
						"--rm", "--env-file", envFilePath, "alpine:latest", "env",
					).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --env-file flag, but the specified file does not exist",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: &os.PathError{Op: "open", Path: envFilePath, Err: afero.ErrFileNotFound},
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				_ *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name: "with --add-host flag and special IP by space",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "name:host-gateway", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				AddEmptyEnvLookUps(ncsd)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --add-host flag but without using special IP by space",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --add-host flag but without subsequent arg",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "alpine:latest"},
			wantErr: errors.New("run cmd error"),
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "alpine:latest").Return(c)
				c.EXPECT().Run().Return(errors.New("run cmd error"))
			},
		},
		{
			name: "with --add-host flag and special IP by equal",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host=name:host-gateway", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host=name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with --add-host flag but without using special IP by equal",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host=name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host=name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with multiple nested volumes",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro", "-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro",
				"--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro", "-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro",
					"--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with multiple nested volumes with full container run command",
			cmd: &cobra.Command{
				Use: "container",
			},
			fc: &config.Finch{},
			args: []string{
				"run", "--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro",
				"-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro", "--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro",
					"-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro", "--volume=/tmp:/tmp1/tmp3/tmp4:rshared",
					"-v", "volume", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with combo short flag parsing",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"-ie", "ARG1=val1", "-dp", "8080:8080",
				"--name", "myContainer", "--rm", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-ie", "ARG1=val1", "-dp", "8080:8080",
					"--name", "myContainer", "--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "bindmount with src and consistency",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"--mount", "type=bind,src=./src,consistency=cached", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--mount", "type=bind,src=./src", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "with long-form boolean flags",
			cmd: &cobra.Command{
				Use: "run",
			},
			fc: &config.Finch{},
			args: []string{
				"--env", "ARG1=val1", "-p", "8080:8080",
				"--name", "myContainer", "--interactive=true", "--detach", "--rm=true", "--init=false",
				"--tty=true", "--debug-full=false", "--sig-proxy=0",
				"--experimental=false", "--oom-kill-disable=false", "--read-only=false",
				"--privileged=false", "alpine:latest", "env",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--env", "ARG1=val1", "-p", "8080:8080",
					"--name", "myContainer", "--interactive=true", "--detach", "--rm=true", "--init=false",
					"--tty=true", "--debug-full=false", "--sig-proxy=0",
					"--experimental=false", "--oom-kill-disable=false", "--read-only=false",
					"--privileged=false", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			lcc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, lcc, ecc, ncsd, logger, ctrl, fs)
			if tc.fc.DockerCompat {
				assert.Equal(t, tc.wantErr, newNerdctlCommandCreator(lcc, ecc, ncsd, logger,
					fs, tc.fc).createDockerCompatRunCmd().RunE(tc.cmd, tc.args))
			} else {
				assert.Equal(t, tc.wantErr, newNerdctlCommand(lcc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmd.Name(), tc.args))
			}
		})
	}
}

func TestNerdctlCommand_run_inspectCommand(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		cmd     *cobra.Command
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(
			t *testing.T,
			lcc *mocks.NerdctlCmdCreator,
			ecc *mocks.CommandCreator,
			ncsd *mocks.NerdctlCommandSystemDeps,
			logger *mocks.Logger,
			ctrl *gomock.Controller,
			fs afero.Fs,
		)
	}{
		{
			name: "inspect without flags",
			cmd: &cobra.Command{
				Use: "inspect",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"da24"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				var stdoutBuf bytes.Buffer
				c.EXPECT().SetStdout(&stdoutBuf)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "inspect", "--mode=dockercompat", "da24",
					"--format", "{{json .}}").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "inspect with typeContainer flag",
			cmd: &cobra.Command{
				Use: "inspect",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"--type=container", "44de"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				var stdoutBuf bytes.Buffer
				c.EXPECT().SetStdout(&stdoutBuf)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "inspect", "--mode=dockercompat", "44de",
					"--format", "{{json .}}").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name: "inspect with typeVolume option",
			cmd: &cobra.Command{
				Use: "inspect",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"--type=volume", "myVolume"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName,
					"volume", "inspect", "myVolume", "--format", "{{json .}}").Return(c)
				c.EXPECT().SetStdout(gomock.Any())
				c.EXPECT().Run()
			},
		},
		{
			name: "inspect with typeImage option",
			cmd: &cobra.Command{
				Use: "inspect",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"--type=image", "myImage"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create(
					"shell",
					limaInstanceName,
					"sudo",
					"-E",
					nerdctlCmdName,
					"image",
					"inspect",
					"--mode=dockercompat",
					"myImage",
					"--format",
					"{{json .}}",
				).Return(c)
				c.EXPECT().SetStdout(gomock.Any())
				c.EXPECT().Run()
			},
		},
		{
			name: "inspect with size flag",
			cmd: &cobra.Command{
				Use: "inspect",
			},
			fc: &config.Finch{
				SharedSettings: config.SharedSettings{
					DockerCompat: true,
				},
			},
			args:    []string{"--size", "44de"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				var stdoutBuf bytes.Buffer
				c.EXPECT().SetStdout(&stdoutBuf)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "inspect", "--mode=dockercompat", "44de",
					"--format", "{{json .}}").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ncc, ecc, ncsd, logger, ctrl, fs)

			if tc.fc.DockerCompat {
				assert.Equal(t, tc.wantErr, newNerdctlCommandCreator(ncc, ecc, ncsd,
					logger, fs, tc.fc).createDockerCompatInspectCmd().RunE(tc.cmd, tc.args))
			} else {
				assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd,
					logger, fs, tc.fc).run(tc.cmd.Name(), tc.args))
			}
		})
	}
}

func TestNerdctlCommand_run_miscCommand(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		cmdName string
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(
			t *testing.T,
			lcc *mocks.NerdctlCmdCreator,
			ecc *mocks.CommandCreator,
			ncsd *mocks.NerdctlCommandSystemDeps,
			logger *mocks.Logger,
			ctrl *gomock.Controller,
			fs afero.Fs,
		)
	}{
		{
			name:    "happy path",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "build", "-t", "demo", ".").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var and --sign=cosign",
			cmdName: "push",
			fc:      &config.Finch{},
			args:    []string{"--sign=cosign", "test:tag"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
					"push", "--sign=cosign", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "exec without flags",
			cmdName: "exec",
			fc:      &config.Finch{},
			// exec test-ctr sh -c echo foo > /tmp/test.txt
			args:    []string{"test-ctr", "sh", "-c", "echo", "foo", ">", "/tmp/test.txt"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				lcc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				AddEmptyEnvLookUps(ncsd)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "exec",
					"test-ctr", "sh", "-c", "echo", "foo", ">", "/tmp/test.txt").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ncc, ecc, ncsd, logger, ctrl, fs)

			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmdName, tc.args))
		})
	}
}

func AddEmptyEnvLookUps(ncsd *mocks.NerdctlCommandSystemDeps) {
	ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
	ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
	ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
	ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
	ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
	ncsd.EXPECT().LookupEnv("SOURCE_DATE_EPOCH").Return("", false)
	ncsd.EXPECT().LookupEnv("AWS_ECR_DISABLE_CACHE").Return("", false)
	ncsd.EXPECT().LookupEnv("AWS_ECR_CACHE_DIR").Return("", false)
	ncsd.EXPECT().LookupEnv("AWS_ECR_IGNORE_CREDS_STORAGE").Return("", false)
}

type ContainsSubstring struct {
	substr string
}

func (m *ContainsSubstring) Matches(x interface{}) bool {
	s, ok := x.(string)
	if !ok {
		return false
	}
	return strings.Contains(s, m.substr)
}

func (m *ContainsSubstring) String() string {
	return fmt.Sprintf("contains substring %q", m.substr)
}

func ContainsStr(substr string) gomock.Matcher {
	return &ContainsSubstring{substr: substr}
}

type ContainsMultipleSubstrings struct {
	substrs []string
}

func (m *ContainsMultipleSubstrings) Matches(x interface{}) bool {
	s, ok := x.(string)
	if !ok {
		return false
	}
	// Check if each substrings is present in the input string
	//   except strings that start with "!"
	passTest := true
	for _, substr := range m.substrs {
		if substr[0] == '!' {
			if strings.Contains(s, substr[1:]) {
				passTest = false
			}
			continue
		}

		if !strings.Contains(s, substr) {
			passTest = false
		}
	}
	return passTest
}

func (m *ContainsMultipleSubstrings) String() string {
	return fmt.Sprintf("contains substrings %q", m.substrs)
}

func ContainsMultipleStrs(substrs []string) gomock.Matcher {
	return &ContainsMultipleSubstrings{substrs: substrs}
}
