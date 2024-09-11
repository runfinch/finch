// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package main

import (
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

var (
	augmentedPath = filepath.Join(string(filepath.Separator), "mnt", "c", "workdir")
	wslPath       = filepath.ToSlash(augmentedPath)
)

func TestNerdctlCommand_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     *cobra.Command
		args    []string
		mockSvc func(*mocks.CommandCreator, *mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name: "happy path",
			cmd: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "info").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(ecc, ncc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestNerdctlCommand_run(t *testing.T) {
	t.Parallel()
	envFilePath := filepath.Join(string(filepath.Separator), "env-file")
	testCases := []struct {
		name    string
		cmdName string
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(*testing.T, *mocks.CommandCreator, *mocks.NerdctlCmdCreator, *mocks.Command, *mocks.NerdctlCommandSystemDeps,
			*mocks.Logger, *gomock.Controller, afero.Fs)
	}{
		{
			name:    "happy path",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "C:\\Users"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\Users").Return("C:\\Users", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "Users").Return("\\mnt\\c\\Users")
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncsd.EXPECT().FilePathToSlash("\\mnt\\c\\Users").Return("/mnt/c/Users")

				c := mocks.NewCommand(ctrl)
				// alias substitution, build => image build
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "image", "build", "-t", "demo", "/mnt/c/Users").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --debug flag",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--debug"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				logger.EXPECT().SetLevel(flog.Debug)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with implicit env flag parsing; values do not exist",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"-it", "-e", "ARG0=val0", "-e", "ARG1", "--env=ARG2", "-eARG3", "--rm", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG1")
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"-it", "--rm", "-e", "ARG0=val0", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with environment flags parsing and env value exists",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env=ARG2", "-eARG3", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3").Return("val3", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				// alias substitution run=>container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "-e", "ARG3=val3", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with environment flags parsing and env value exists and with --debug flag",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--debug", "--rm", "--env=ARG2", "-eARG3", "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("ARG3").Return("val3", true)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				// alias substitution run=>container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "-e", "ARG3=val3", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env-file=" + envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\nARG1=val1\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--rm", "-e", "ARG1=val1", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement and with --debug flag",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--debug", "--rm", "--env-file=" + envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\nARG1=val1\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().SetLevel(flog.Debug)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2")
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--rm", "-e", "ARG1=val1", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag replacement and existing env value",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: nil,
			mockSvc: func(
				t *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				fs afero.Fs,
			) {
				envFileStr := "# a comment\n  ARG2\n\n  # a 2nd comment\nNOTSETARG\n  "
				require.NoError(t, afero.WriteFile(fs, envFilePath, []byte(envFileStr), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				c := mocks.NewCommand(ctrl)
				ncsd.EXPECT().LookupEnv("ARG2").Return("val2", true)
				ncsd.EXPECT().LookupEnv("NOTSETARG")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--rm", "-e", "ARG2=val2", "alpine:latest", "env").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --env-file flag, but the specified file does not exist",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--env-file", envFilePath, "alpine:latest", "env"},
			wantErr: &os.PathError{Op: "open", Path: envFilePath, Err: afero.ErrFileNotFound},
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
				_ *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name:    "with --add-host flag and special IP by space",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "name:host-gateway", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ecc *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("cmd", "/C", "netsh", "interface", "ipv4", "show", "addresses", "vEthernet (WSL)").Return(cmd)
				cmd.EXPECT().Output().Return([]byte("IP Address: 192.168.5.2"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "--add-host", "name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without using special IP by space",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "--add-host", "name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without subsequent arg",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host", "alpine:latest"},
			wantErr: errors.New("run cmd error"),
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "--add-host", "alpine:latest").Return(c)
				c.EXPECT().Run().Return(errors.New("run cmd error"))
			},
		},
		{
			name:    "with --add-host flag and special IP by equal",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host=name:host-gateway", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ecc *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("cmd", "/C", "netsh", "interface", "ipv4", "show", "addresses", "vEthernet (WSL)").Return(cmd)
				cmd.EXPECT().Output().Return([]byte("IP Address: 192.168.5.2"), nil)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				logger.EXPECT().Debugf(`Resolving special IP "host-gateway" to %q for host %q`, "192.168.5.2", "name")
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "--add-host=name:192.168.5.2", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --add-host flag but without using special IP by equal",
			cmdName: "run",
			fc:      &config.Finch{},
			args:    []string{"--rm", "--add-host=name:0.0.0.0", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "--add-host=name:0.0.0.0", "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with multiple nested volumes",
			cmdName: "run",
			fc:      &config.Finch{},
			args: []string{
				"--rm", "-v", "C:\\workdir:/tmp1/tmp2:rro", "-v=C:\\workdir:/tmp1/tmp2/tmp3/tmp4:rro",
				"-v", "volume", "alpine:latest",
			},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil).Times(1)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(5)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(3)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(3)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "container", "run",
					"--rm", "-v", "/mnt/c/workdir:/tmp1/tmp2:rro", "-v", "/mnt/c/workdir:/tmp1/tmp2/tmp3/tmp4:rro",
					"-v", "volume", "alpine:latest").Return(c)
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
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").Return(nil)
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
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", nerdctlCmdName, "pull", "test:tag", "--help").
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
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
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
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test", nerdctlCmdName,
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
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Command,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("test", true)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E", "COSIGN_PASSWORD=test",
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
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			cmd := mocks.NewCommand(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ecc, ncc, cmd, ncsd, logger, ctrl, fs)
			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmdName, tc.args))
		})
	}
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

func TestNerdctlCommand_Run_withBindMounts(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		cmdName string
		args    []string
		wantErr error
		mockSvc func(*testing.T, *mocks.CommandCreator, *mocks.NerdctlCmdCreator, *mocks.NerdctlCommandSystemDeps,
			*mocks.Logger, *gomock.Controller, afero.Fs)
	}{
		{
			name:    "mount type is bind and src",
			cmdName: "run",
			args:    []string{"--mount", "type=bind,src=C:\\workdir,target=/app", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(2)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(2)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(2)

				c := mocks.NewCommand(ctrl)
				// alias substitution, run => container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--mount",
					ContainsStr("src=/mnt/c/workdir"), "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "mount type is bind and source",
			cmdName: "run",
			args:    []string{"--mount", "type=bind,source=C:\\workdir,target=/app", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(2)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(2)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(2)

				c := mocks.NewCommand(ctrl)
				// alias substitution, run => container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--mount",
					ContainsStr("source=/mnt/c/workdir"), "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "mount type is bind and is concatenated to --mount option",
			cmdName: "run",
			args:    []string{"--mount=type=bind,source=C:\\workdir,target=/app", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(2)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(2)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(2)

				c := mocks.NewCommand(ctrl)
				// alias substitution, run => container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--mount",
					ContainsStr("source=/mnt/c/workdir"), "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "mount type is bind and source is not a windows directory",
			cmdName: "run",
			args:    []string{"--mount", "type=bind,source=something,target=/app", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(1)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(1)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(1)

				c := mocks.NewCommand(ctrl)
				// alias substitution, run => container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--mount",
					ContainsStr("source=something"), "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "mount type is not bind",
			cmdName: "run",
			args:    []string{"--mount", "type=notbind,source=C:/workdir,target=/app", "alpine:latest"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				_ *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
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
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil).Times(1)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath).Times(1)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath).Times(1)

				c := mocks.NewCommand(ctrl)
				// alias substitution, run => container run
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "run", "--mount",
					ContainsStr("type=notbind"), "alpine:latest").Return(c)
				c.EXPECT().Run()
			},
		},
	}
	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ecc, ncc, ncsd, logger, ctrl, fs)
			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, &config.Finch{}).run(tc.cmdName, tc.args))
		})
	}
}

func TestNerdctlCommand_run_CpCommand(t *testing.T) {
	t.Parallel()
	var (
		hostcopyPath = filepath.Join(string(filepath.Separator), "mnt", "c", "workdir", "test")
		wslcopyPath  = filepath.ToSlash(hostcopyPath)
	)

	testCases := []struct {
		name    string
		cmdName string
		args    []string
		mockSvc func(*mocks.CommandCreator, *mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name:    "copy into container",
			cmdName: "cp",
			args:    []string{"C:\\workdir\\test", "somecontainer:/tmp"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\test").Return("C:\\workdir\\test", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\test").Return(hostcopyPath)
				ncsd.EXPECT().FilePathToSlash(hostcopyPath).Return(wslcopyPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "cp", wslcopyPath, "somecontainer:/tmp").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "copy out of container",
			cmdName: "cp",
			args:    []string{"somecontainer:/tmp/test", "C:\\workdir\\test"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\test").Return("C:\\workdir\\test", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\test").Return(hostcopyPath)
				ncsd.EXPECT().FilePathToSlash(hostcopyPath).Return(wslcopyPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "cp", "somecontainer:/tmp/test", wslcopyPath).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "copy with options",
			cmdName: "cp",
			args:    []string{"-L", "somecontainer:/tmp/test", "C:\\workdir\\test"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\test").Return("C:\\workdir\\test", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\test").Return(hostcopyPath)
				ncsd.EXPECT().FilePathToSlash(hostcopyPath).Return(wslcopyPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "container", "cp", "-L", "somecontainer:/tmp/test", wslcopyPath).Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(ecc, ncc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).run(tc.cmdName, tc.args))
		})
	}
}

func TestNerdctlCommand_run_BuildCommand(t *testing.T) {
	t.Parallel()
	var (
		buildContext        = filepath.Join(string(filepath.Separator), "mnt", "c", "workdir", "buildcontext")
		wslBuildContextPath = filepath.ToSlash(buildContext)
		secretPath          = filepath.Join(string(filepath.Separator), "mnt", "c", "workdir", "secret")
		wslSecretPath       = filepath.ToSlash(secretPath)
	)

	testCases := []struct {
		name    string
		cmdName string
		args    []string
		mockSvc func(*mocks.CommandCreator, *mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name:    "build without options",
			cmdName: "build",
			args:    []string{"C:\\workdir\\buildcontext"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\buildcontext").Return("C:\\workdir\\buildcontext", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\buildcontext").Return(buildContext)
				ncsd.EXPECT().FilePathToSlash(buildContext).Return(wslBuildContextPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "image", "build", wslBuildContextPath).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "build with file option",
			cmdName: "build",
			args:    []string{"-f", "C:\\workdir\\buildcontext", "C:\\workdir\\buildcontext"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\buildcontext").Return("C:\\workdir\\buildcontext", nil).Times(2)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\buildcontext").Return(buildContext).Times(2)
				ncsd.EXPECT().FilePathToSlash(buildContext).Return(wslBuildContextPath).Times(2)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "image", "build", "-f", ContainsStr(wslBuildContextPath), wslBuildContextPath).Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "build with secret option",
			cmdName: "build",
			args:    []string{"--secret", "src=C:\\workdir\\secret", "C:\\workdir\\buildcontext"},
			mockSvc: func(_ *mocks.CommandCreator, ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger,
				ctrl *gomock.Controller, ncsd *mocks.NerdctlCommandSystemDeps,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
				ncsd.EXPECT().LookupEnv("AWS_ACCESS_KEY_ID").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SECRET_ACCESS_KEY").Return("", false)
				ncsd.EXPECT().LookupEnv("AWS_SESSION_TOKEN").Return("", false)
				ncsd.EXPECT().LookupEnv("COSIGN_PASSWORD").Return("", false)
				ncsd.EXPECT().LookupEnv("COMPOSE_FILE").Return("", false)
				ncsd.EXPECT().GetWd().Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathAbs("C:\\workdir").Return("C:\\workdir", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir").Return(augmentedPath)
				ncsd.EXPECT().FilePathToSlash(augmentedPath).Return(wslPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\buildcontext").Return("C:\\workdir\\buildcontext", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\buildcontext").Return(buildContext)
				ncsd.EXPECT().FilePathToSlash(buildContext).Return(wslBuildContextPath)

				ncsd.EXPECT().FilePathAbs("C:\\workdir\\secret").Return("C:\\workdir\\secret", nil)
				ncsd.EXPECT().FilePathJoin(string(filepath.Separator), "mnt", "c", "workdir\\secret").Return(secretPath)
				ncsd.EXPECT().FilePathToSlash(secretPath).Return(wslSecretPath)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("shell", "--workdir", wslPath, limaInstanceName,
					"sudo", "-E", nerdctlCmdName, "image", "build", "--secret",
					ContainsStr(wslSecretPath), ContainsStr(wslBuildContextPath)).Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(ecc, ncc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).run(tc.cmdName, tc.args))
		})
	}
}
