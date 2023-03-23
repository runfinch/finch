// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"os"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/mocks"

	"github.com/runfinch/finch/pkg/flog"
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

func TestNerdctlCommand_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     *cobra.Command
		args    []string
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name: "happy path",
			cmd: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
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
			tc.mockSvc(lcc, logger, ctrl)

			assert.NoError(t, newNerdctlCommand(lcc, ncsd, logger, nil).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestNerdctlCommand_run(t *testing.T) {
	t.Parallel()

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
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "build", "-t", "demo", ".").Return(c)
				c.EXPECT().Run()
			},
		},
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
				logger.EXPECT().SetLevel(flog.Debug)
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
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3")
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
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3").Return("val3", true)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"-e", "ARG3=val3", "--rm", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement",
			cmdName: "run",
			args:    []string{"--rm", "--env-file=/env-file", "alpine:latest", "env"},
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
				require.NoError(t, afero.WriteFile(fs, "/env-file", []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				lcc.EXPECT().
					Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run", "-e", "ARG1=val1", "--rm", "alpine:latest", "env").
					Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement and existing env value",
			cmdName: "run",
			args:    []string{"--rm", "--env-file", "/env-file", "alpine:latest", "env"},
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
				require.NoError(t, afero.WriteFile(fs, "/env-file", []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				lcc.EXPECT().
					Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run", "-e", "ARG2=val2", "--rm", "alpine:latest", "env").
					Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag, but the specified file does not exist",
			cmdName: "run",
			args:    []string{"--rm", "--env-file", "/env-file", "alpine:latest", "env"},
			wantErr: &os.PathError{Op: "open", Path: "/env-file", Err: afero.ErrFileNotFound},
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
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
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
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
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
				c := mocks.NewCommand(ctrl)
				lcc.EXPECT().Create("shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "run",
					"--rm", "--add-host=name:0.0.0.0", "alpine:latest").Return(c)
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
				lcc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").
					Return(fmt.Errorf("failed to replace"))
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
