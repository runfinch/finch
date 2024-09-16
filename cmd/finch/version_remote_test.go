// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

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

const nerdctlMockVersion = `{
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
}`

func TestNewVersionCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	ncc := mocks.NewNerdctlCmdCreator(ctrl)
	var stdOut bytes.Buffer
	cmd := newVersionCommand(ncc, logger, &stdOut)
	assert.Equal(t, cmd.Name(), "version")
}

func TestVersionAction_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     func(t *testing.T) *cobra.Command
		args    []string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name: "happy path",
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			args: []string{},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				//nolint: lll	// Version output format is larger than 500
				command.EXPECT().Output().Return([]byte(`{"Client":{"Version":"v1.0.0","GitCommit":"c00780a1f5b905b09812722459c54936c9e070e6","GoVersion":"go1.19.2","Os":"linux","Arch":"arm64","Components":[{"Name":"buildctl","Version":"v0.10.5","Details":{"GitCommit":"bc26045116045516ff2427201abd299043eaf8f7"}}]},"Server":{"Components":[{"Name":"containerd","Version":"v1.6.8","Details":{"GitCommit":"9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6"}},{"Name":"runc","Version":"1.1.4","Details":{"GitCommit":"v1.1.4-0-g5fd4c4d1"}}]}}`), nil)
			},
		},
		{
			name: "with --format json",
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			args: []string{"--format", "json"},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
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
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			var stdOut bytes.Buffer
			tc.mockSvc(ncc, logger, ctrl)

			assert.NoError(t, newVersionAction(ncc, logger, &stdOut).runAdapter(tc.cmd(t), tc.args))
		})
	}
}

func TestVersionAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		wantErr      error
		cmd          func(t *testing.T) *cobra.Command
		mockSvc      func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
		postRunCheck func(t *testing.T, stdout []byte)
		format       string
	}{
		{
			name:    "print finch version with Client and Server",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				lines := strings.SplitAfter(string(stdout), "\n")
				require.Len(t, lines, 19)

				assert.Equal(t, lines[0], "Client:\n")
				assert.Equal(t, lines[1], " Version:\t\n")
				assert.Equal(t, lines[2], " GitCommit:\t\n")
				assert.Equal(t, lines[3], " OS/Arch:\tlinux/arm64\n")
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
			format: "",
		},
		{
			name:    "print only finch version only while VM not running",
			wantErr: errors.New("detailed version info is unavailable because VM is not running"),
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				assert.Equal(t, string(stdout), "Finch version:\t\n")
			},
			format: "",
		},
		{
			name: "print only finch version if VM getting error",
			wantErr: fmt.Errorf(
				"failed to get VM status: %w",
				errors.New("get status error"),
			),
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, _ *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				assert.Equal(t, string(stdout), "Finch version:\t\n")
			},
			format: "",
		},
		{
			name:    "with --format json",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				//nolint: lll	// Version output format is larger than 500
				assert.Equal(t, string(stdout), "{\"Client\":{\"Version\":\"\",\"GitCommit\":\"\",\"NerdctlClient\":{\"Version\":\"v1.0.0\",\"GitCommit\":\"c00780a1f5b905b09812722459c54936c9e070e6\",\"GoVersion\":\"go1.19.2\",\"Os\":\"linux\",\"Arch\":\"arm64\",\"Components\":[{\"Name\":\"buildctl\",\"Version\":\"v0.10.5\",\"Details\":{\"GitCommit\":\"bc26045116045516ff2427201abd299043eaf8f7\"}}]}},\"Server\":{\"Components\":[{\"Name\":\"containerd\",\"Version\":\"v1.6.8\",\"Details\":{\"GitCommit\":\"9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6\"}},{\"Name\":\"runc\",\"Version\":\"1.1.4\",\"Details\":{\"GitCommit\":\"v1.1.4-0-g5fd4c4d1\"}}]}}\n")
			},
			format: "json",
		},
		{
			name:    "with --format '{{json .}}'",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				//nolint: lll	// Version output format is larger than 500
				assert.Equal(t, string(stdout), "{\"Client\":{\"Version\":\"\",\"GitCommit\":\"\",\"NerdctlClient\":{\"Version\":\"v1.0.0\",\"GitCommit\":\"c00780a1f5b905b09812722459c54936c9e070e6\",\"GoVersion\":\"go1.19.2\",\"Os\":\"linux\",\"Arch\":\"arm64\",\"Components\":[{\"Name\":\"buildctl\",\"Version\":\"v0.10.5\",\"Details\":{\"GitCommit\":\"bc26045116045516ff2427201abd299043eaf8f7\"}}]}},\"Server\":{\"Components\":[{\"Name\":\"containerd\",\"Version\":\"v1.6.8\",\"Details\":{\"GitCommit\":\"9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6\"}},{\"Name\":\"runc\",\"Version\":\"1.1.4\",\"Details\":{\"GitCommit\":\"v1.1.4-0-g5fd4c4d1\"}}]}}\n")
			},
			format: "{{json .}}",
		},
		{
			name:    "with --format '{{.Client}'",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				//nolint: lll	// Version output format is larger than 150
				assert.Equal(t, string(stdout), "{  {v1.0.0 c00780a1f5b905b09812722459c54936c9e070e6 go1.19.2 linux arm64 [{buildctl v0.10.5 {bc26045116045516ff2427201abd299043eaf8f7}}]}}\n")
			},
			format: "{{.Client}}",
		},
		{
			name:    "with --format {{.Client.NerdctlClient.Version}}",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				assert.Equal(t, string(stdout), "v1.0.0\n")
			},
			format: "{{.Client.NerdctlClient.Version}}",
		},
		{
			name:    "with --format {{.Server}}",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "version",
				}
				c.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

				return c
			},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "nerdctl", "version",
					"--format", "json").Return(command)
				command.EXPECT().Output().Return([]byte(nerdctlMockVersion), nil)
			},
			postRunCheck: func(t *testing.T, stdout []byte) {
				//nolint: lll	// Version output format is larger than 100
				assert.Equal(t, string(stdout), "{[{containerd v1.6.8 {9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6}} {runc 1.1.4 {v1.1.4-0-g5fd4c4d1}}]}\n")
			},
			format: "{{.Server}}",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)

			tc.mockSvc(ncc, logger, ctrl)
			var stdOut bytes.Buffer

			err := newVersionAction(ncc, logger, &stdOut).run(tc.format)
			assert.Equal(t, tc.wantErr, err)

			tc.postRunCheck(t, stdOut.Bytes())
		})
	}
}
