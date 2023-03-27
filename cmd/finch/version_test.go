// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"errors"
	"fmt"
	"strings"
	"testing"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestNewVersionCommand(t *testing.T) {
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
				lcc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "nerdctl", "version", "--format", "json").Return(command)
				//nolint: lll	// Version output format is larger than 500
				command.EXPECT().Output().Return([]byte(`{"Client":{"Version":"v1.0.0","GitCommit":"c00780a1f5b905b09812722459c54936c9e070e6","GoVersion":"go1.19.2","Os":"linux","Arch":"arm64","Components":[{"Name":"buildctl","Version":"v0.10.5","Details":{"GitCommit":"bc26045116045516ff2427201abd299043eaf8f7"}}]},"Server":{"Components":[{"Name":"containerd","Version":"v1.6.8","Details":{"GitCommit":"9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6"}},{"Name":"runc","Version":"1.1.4","Details":{"GitCommit":"v1.1.4-0-g5fd4c4d1"}}]}}`), nil)
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
		name         string
		wantErr      error
		cmd          *cobra.Command
		mockSvc      func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
		postRunCheck func(t *testing.T, stdout []byte)
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
				lcc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "nerdctl", "version", "--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(`{
					"Client":{
						"Version":"v1.0.0",
						"GitCommit":"c00780a1f5b905b09812722459c54936c9e070e6",
						"GoVersion":"go1.19.2",
						"Os":"linux",
						"Arch":"arm64",
						"Components":[
							{
								"Name":"buildctl",
								"Version":"v0.10.5",
								"Details":{
									"GitCommit":"bc26045116045516ff2427201abd299043eaf8f7"
								}
							}
						]
					},
					"Server":{
						"Components":[
							{
								"Name":"containerd",
								"Version":"v1.6.8",
								"Details":{
									"GitCommit":"9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6"
								}
							},
							{
								"Name":"runc",
								"Version":"1.1.4",
								"Details":{
									"GitCommit":"v1.1.4-0-g5fd4c4d1"
								}
							}
						]
					}
				}`), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				lines := strings.SplitAfter(string(stdout), "\n")
				require.Len(t, lines, 19)

				assert.Equal(t, lines[0], "Client:\n")
				assert.Equal(t, lines[1], " Version:\t\n")
				assert.Equal(t, lines[2], " OS/Arch:\tlinux/arm64\n")
				assert.Equal(t, lines[3], " GitCommit:\t\n")
				assert.Equal(t, lines[4], " nerdctl:\n")
				assert.Equal(t, lines[5], "  Version:\tv1.0.0\n")
				assert.Equal(t, lines[6], "  GitCommit:\tc00780a1f5b905b09812722459c54936c9e070e6\n")
				assert.Equal(t, lines[7], " buildctl:\n")
				assert.Equal(t, lines[8], "  Version:\tv0.10.5\n")
				assert.Equal(t, lines[9], "  GitCommit:\tbc26045116045516ff2427201abd299043eaf8f7\n")
				assert.Equal(t, lines[10], "\n")
				assert.Equal(t, lines[11], "Server:\n")
				assert.Equal(t, lines[12], " containerd:\n")
				assert.Equal(t, lines[13], "  Version:\tv1.6.8\n")
				assert.Equal(t, lines[14], "  GitCommit:\t9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6\n")
				assert.Equal(t, lines[15], " runc:\n")
				assert.Equal(t, lines[16], "  Version:\t1.1.4\n")
				assert.Equal(t, lines[17], "  GitCommit:\tv1.1.4-0-g5fd4c4d1\n")
				assert.Equal(t, lines[18], "")
			},
		},
		{
			name:    "print only finch version only while VM not running",
			wantErr: errors.New("detailed version info is unavailable because VM is not running"),
			cmd: &cobra.Command{
				Use: "version",
			},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				assert.Equal(t, string(stdout), "Finch version:\t\n")
			},
		},
		{
			name: "print only finch version if VM getting error",
			wantErr: fmt.Errorf(
				"failed to get VM status: %w",
				errors.New("get status error"),
			),
			cmd: &cobra.Command{
				Use: "version",
			},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				assert.Equal(t, string(stdout), "Finch version:\t\n")
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

			err := newVersionAction(lcc, logger, &stdOut).run()
			assert.Equal(t, tc.wantErr, err)

			tc.postRunCheck(t, stdOut.Bytes())
		})
	}
}
