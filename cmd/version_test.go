// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"io"
	"os"
	"testing"

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

	cmd := newVersionCommand()
	assert.Equal(t, cmd.Name(), "version")
}

//nolint:paralleltest // TODO: Add t.Parallel after using dependency injection to pass a io.Writer to newVersionCommand.
func TestVersionAction(t *testing.T) {
	mockCmd := newVersionCommand()
	versionActionFunc := func() {
		require.NoError(t, versionAction(mockCmd, []string{}))
	}

	output := captureStdout(t, versionActionFunc)
	assert.Contains(t, output, finchVersion())
}
