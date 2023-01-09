// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"io"
	"os"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/version"
	"github.com/spf13/cobra"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func captureStdout(t *testing.T, f func()) string {
	temp := os.Stdout
	read, write, _ := os.Pipe()
	os.Stdout = write

	f()

	require.NoError(t, write.Close())
	os.Stdout = temp

	var buffer bytes.Buffer
	_, err := io.Copy(&buffer, read)
	require.NoError(t, err)
	return buffer.String()
}

func TestVersionCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	lcc := mocks.NewLimaCmdCreator(ctrl)
	cmd := newVersionCommand(lcc, logger)
	assert.Equal(t, cmd.Name(), "version")
}

func TestPrintVersion(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		command *cobra.Command
		args    []string
		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name: "print finch version",
			command: &cobra.Command{
				Use: "version",
			},
			args: []string{},
			mockSvc: func(lcc *mocks.LimaCmdCreator, logger *mocks.Logger, ctrl *gomock.Controller) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
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

			versionActionFunc := func() {
				require.NoError(t, newVersionAction(lcc, logger).printVersion())
			}
		
			output := captureStdout(t, versionActionFunc)
			assert.Equal(t, output, version.Version)
			assert.Equal(t, output, version.GitCommit)
		})
	}
}

// func TestVersionAction(t *testing.T) {
// 	ctrl := gomock.NewController(t)
// 	logger := mocks.NewLogger(ctrl)
// 	lcc := mocks.NewLimaCmdCreator(ctrl)
// 	mockCmd := newVersionCommand(lcc, logger)

// 	versionActionFunc := func() {
// 		require.NoError(t, newVersionAction(lcc, logger).printVersion())
// 	}

// 	output := captureStdout(t, versionActionFunc)
// 	assert.Equal(t, output, version.Version)
// 	assert.Equal(t, output, version.GitCommit)
// }