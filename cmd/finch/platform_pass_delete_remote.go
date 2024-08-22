// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"github.com/runfinch/finch/pkg/command"
)

func (pda *passDeleteAction) removePassKey() command.Command {
	return pda.creator.Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--yes", "--delete-secret-and-public-key", "finch")
}

func (pda *passDeleteAction) removePass() command.Command {
	return pda.creator.Create("shell", limaInstanceName, "sudo", "-E",
		"pass", "rm", "finch")
}
