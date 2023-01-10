// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"testing"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

type TestFinchVersion struct {
	Client            string
	Version           string
	OSArch            string
	GitCommit         string
	nerdctl           string
	nerdctlVersion    string
	nerdctlGitCommit  string
	buildctl          string
	buildctlVersion   string
	buildctlGitCommit string
	Server            string
	containerd        string
	ServerVersion     string
	ServerGitCommit   string
	runc              string
	runcVersion       string
	runcGitCommit     string
}

func TestVersionCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	lcc := mocks.NewLimaCmdCreator(ctrl)
	var stdOut bytes.Buffer
	cmd := newVersionCommand(lcc, logger, &stdOut)
	assert.Equal(t, cmd.Name(), "version")
}

func TestVersionAction_runAdaptor(t *testing.T) {
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
				Use: "version",
			},
			args: []string{},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "nerdctl", "version", "--format", "json").Return(command)
				command.EXPECT().Output()
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			var stdOut bytes.Buffer
			tc.mockSvc(lcc, logger, ctrl)

			assert.NoError(t, newVersionAction(lcc, logger, &stdOut).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestVersionAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name          string
		wantErr       error
		cmd           *cobra.Command
		mockSvc       func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
		versionOutput TestFinchVersion
	}{
		{
			name:    "print finch version with Client and Server",
			wantErr: nil,
			cmd: &cobra.Command{
				Use: "version",
			},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "nerdctl", "version", "--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(""), nil)
			},
			versionOutput: TestFinchVersion{
				"Client:",
				"Version:       v1.0.0",
				"OS/Arch:       linux/amd64",
				"Git commit:    8ua9sdyas7dg0a78sdbasdasdasd78asudh980b",
				"nerdctl:",
				"Version:       v1.0.0",
				"Git commit:    78as0db7asbd7asbd078aysbd089asd00asdnas",
				"buildctl:",
				"Version:      	v0.0.1",
				"Git commit:   	9028314n2n304h374n3b0g2347bugbudfb0sdfb0",
				"Server:",
				"containerd:",
				"Version:     	v1.0.0",
				"Git commit:   	9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6",
				"runc:",
				"Version:      	1.0.0",
				"Git commit:   	v1.0.0-1-h77gsa0sa",
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)

			tc.mockSvc(lcc, logger, ctrl)
			var stdOut bytes.Buffer

			assert.NoError(t, newVersionAction(lcc, logger, &stdOut).run())
		})
	}
}
