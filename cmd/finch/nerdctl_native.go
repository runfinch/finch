// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"golang.org/x/exp/slices"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	// eat the debug arg, and set the log level to avoid nerdctl parsing this flag
	dbgIdx := slices.Index(args, "--debug")
	if dbgIdx >= 0 {
		args = append(args[:dbgIdx], args[dbgIdx+1:]...)
		nc.logger.SetLevel(flog.Debug)
	}

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, args...)
	}

	return nc.ncc.Create(append([]string{cmdName}, args...)...).Run()
}
