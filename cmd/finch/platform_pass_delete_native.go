// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"os"

	"github.com/runfinch/finch/pkg/command"
)

func (pda *passDeleteAction) removePassKey() command.Command {
	ecc := command.NewExecCmdCreator()

	cmd := ecc.Create("gpg2", "--yes", "--delete-secret-and-public-key", "finch")
	cmd.SetStdin(os.Stdin)
	cmd.SetStdout(os.Stdout)
	return cmd
}

func (pda *passDeleteAction) removePass() command.Command {
	ecc := command.NewExecCmdCreator()

	cmd := ecc.Create("pass", "rm", "finch")
	cmd.SetStdin(os.Stdin)
	cmd.SetStdout(os.Stdout)
	return cmd
}
