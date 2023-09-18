// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/flog"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/mocks"
)

func TestNerdctlCommand_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     *cobra.Command
		args    []string
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name: "happy path",
			cmd: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "info").Return(c)
				c.EXPECT().Run()
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
			tc.mockSvc(lcc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(lcc, ncsd, logger, nil).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestNerdctlCommand_run(t *testing.T) {
	t.Parallel()
	envFilePath := filepath.Join(string(filepath.Separator), "env-file")
	testCases := []struct {
		name    string
		cmdName string
		args    []string
		wantErr error
		mockSvc func(*testing.T, *mocks.LimaCmdCreator, *mocks.NerdctlCommandSystemDeps, *mocks.Logger, *gomock.Controller, afero.Fs)
	}{
		{
			name:    "happy path",
			cmdName: "build",
			args:    []string{"-t", "demo", "."},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "build", "-t", "demo", ".").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --debug flag",
			cmdName: "pull",
			args:    []string{"test:tag", "--debug"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				logger.EXPECT().SetLevel(flog.Debug)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with environment flags parsing and env value doesn't exist",
			cmdName: "run",
			args:    []string{"--rm", "-e", "ARG1=val1", "--env=ARG2", "-eARG3", "alpine:latest", "env"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)

				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-e", "ARG1=val1", "--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with environment flags parsing and env value exists",
			cmdName: "run",
			args:    []string{"--rm", "--env=ARG2", "-eARG3", "alpine:latest", "env"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3").Return("val3", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-e", "ARG3=val3", "--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement",
			cmdName: "run",
			args:    []string{"--rm", "--env-file=" + envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
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
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				lcc.EXPECT().
					Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run", "-e", "ARG1=val1", "--rm", "alpine:latest", "env").
					Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement and existing env value",
			cmdName: "run",
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				lcc *mocks.LimaCmdCreator,
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
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				lcc.EXPECT().
					Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run", "-e", "ARG2=val2", "--rm", "alpine:latest", "env").
					Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag, but the specified file does not exist",
			cmdName: "run",
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: &os.PathError{Op: "open", Path: envFilePath, Err: afero.ErrFileNotFound},
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "with --add-host flag and special IP by space",
			cmdName: "run",
			args:    []string{"--rm", "--add-host", "name:host-gateway", "alpine:latest"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without using special IP by space",
			cmdName: "run",
			args:    []string{"--rm", "--add-host", "name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without subsequent arg",
			cmdName: "run",
			args:    []string{"--rm", "--add-host", "alpine:latest"},
			wantErr: errors.New("run cmd error"),
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host", "alpine:latest").Return(c)
				c.EXPECT().Run().Return(errors.New("run cmd error"))
			},
		},
		{
			name:    "with --add-host flag and special IP by equal",
			cmdName: "run",
			args:    []string{"--rm", "--add-host=name:host-gateway", "alpine:latest"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host=name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without using special IP by equal",
			cmdName: "run",
			args:    []string{"--rm", "--add-host=name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)

				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host=name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with multiple nested volumes",
			cmdName: "run",
			args: []string{
				"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro", "-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro",
				"--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest",
			},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro", "-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro",
					"--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with multiple nested volumes with full container run command",
			cmdName: "container",
			args: []string{
				"run", "--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro",
				"-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro", "--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest",
			},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "-v", "/tmp:/tmp1/tmp2:rro", "--volume", "/tmp:/tmp1:rprivate,rro",
					"-v=/tmp:/tmp1/tmp2/tmp3/tmp4:rro", "--volume=/tmp:/tmp1/tmp3/tmp4:rshared", "-v", "volume", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --help flag",
			cmdName: "pull",
			args:    []string{"test:tag", "--help"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				lcc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").Return(nil)
			},
		},
		{
			name:    "with --help flag but replacing returns error",
			cmdName: "pull",
			args:    []string{"test:tag", "--help"},
			wantErr: fmt.Errorf("failed to replace"),
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				lcc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").
					Return(fmt.Errorf("failed to replace"))
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var and --sign=cosign",
			cmdName: "push",
			args:    []string{"--sign=cosign", "test:tag"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
					"push", "--sign=cosign", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var and --verify=cosign",
			cmdName: "pull",
			args:    []string{"--verify=cosign", "test:tag"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
					"pull", "--verify=cosign", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with COSIGN_PASSWORD env var without cosign arg",
			cmdName: "pull",
			args:    []string{"test:tag"},
			wantErr: nil,
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
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test",
					nerdctlCmdName, "pull", "test:tag").Return(c)
				c.EXPECT().Run()
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
