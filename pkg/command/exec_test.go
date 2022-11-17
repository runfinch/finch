// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"bytes"
	"testing"

	"github.com/stretchr/testify/assert"
)

var mockEnv = []string{"env=1"}

func TestExecCommandCreator_Create(t *testing.T) {
	t.Parallel()

	got := NewExecCmdCreator().Create("")
	assert.IsType(t, got, &execCmd{})
}

func TestExecCommand_SetEnv(t *testing.T) {
	t.Parallel()

	cmd := newExecCmd("")
	cmd.SetEnv(mockEnv)
	assert.Equal(t, cmd.Env, mockEnv)
}

func TestExecCommand_SetStdin(t *testing.T) {
	t.Parallel()

	cmd := newExecCmd("")
	buf := bytes.NewBuffer([]byte("test"))
	cmd.SetStdin(buf)
	assert.Equal(t, cmd.Stdin, buf)
}

func TestExecCommand_SetStdout(t *testing.T) {
	t.Parallel()

	cmd := newExecCmd("")
	buf := bytes.NewBuffer([]byte("test"))
	cmd.SetStdout(buf)
	assert.Equal(t, cmd.Stdout, buf)
}

func TestExecCommand_SetStderr(t *testing.T) {
	t.Parallel()

	cmd := newExecCmd("")
	buf := bytes.NewBuffer([]byte("test"))
	cmd.SetStderr(buf)
	assert.Equal(t, cmd.Stderr, buf)
}
