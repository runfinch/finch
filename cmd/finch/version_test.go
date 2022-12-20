// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"io"
	"os"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

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

//TODO: Ang's review
// func TestVersionAction_runAdapter(t *testing.T) {
// 		cmd     *cobra.Command
// 		args    []string
// 		mockSvc func(*mocks.LimaCmdCreator, *mocks.Logger, *gomock.Controller)
// 	printVersionFunc := func() {
// 		require.NoError(t, newVersionAction(cmd, []string{}))
// 	}

// 	output := captureStdout(t, printVersionFunc)
// 	assert.Contains(t, output, finchVersion())
// }
