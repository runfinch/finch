// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"io"
	"os/exec"
)

// ExecCmdCreator implements CommandCreator by invoking functions offered by os/exec.
type ExecCmdCreator struct{}

var _ Creator = (*ExecCmdCreator)(nil)

// NewExecCmdCreator creates a new ExecCmdCreator.
func NewExecCmdCreator() *ExecCmdCreator {
	return &ExecCmdCreator{}
}

// Create creates a new Command.
func (ecc *ExecCmdCreator) Create(name string, args ...string) Command {
	return newExecCmd(name, args...)
}

func newExecCmd(name string, args ...string) *execCmd {
	return &execCmd{
		exec.Command(name, args...),
	}
}

type execCmd struct {
	*exec.Cmd
}

var _ Command = (*execCmd)(nil)

func (c *execCmd) String() string {
	return c.Cmd.String()
}

func (c *execCmd) Output() ([]byte, error) {
	b, err := c.Cmd.Output()
	return b, wrapIfExitError(err)
}

func (c *execCmd) SetEnv(env []string) {
	c.Env = env
}

func (c *execCmd) SetStdin(stdin io.Reader) {
	c.Stdin = stdin
}

func (c *execCmd) SetStdout(stdout io.Writer) {
	c.Stdout = stdout
}

func (c *execCmd) SetStderr(stderr io.Writer) {
	c.Stderr = stderr
}

func (c *execCmd) StdinPipe() (io.WriteCloser, error) {
	return c.Cmd.StdinPipe()
}
