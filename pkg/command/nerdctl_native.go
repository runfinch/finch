// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package command

import (
	"io"
)

func (ncc *nerdctlCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	ncc.logger.Debugf("Creating nerdctl command: ARGUMENTS: %v", args)
	cmd := ncc.cmdCreator.Create("nerdctl", args...)

	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
