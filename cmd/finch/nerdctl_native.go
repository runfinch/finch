// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package main

import (
	"golang.org/x/exp/slices"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func (nc *nerdctlCommand) run(cmdName string, args []string) error {
	var additionalEnv []string
	switch cmdName {
	case "image":
		if slices.Contains(args, "build") || slices.Contains(args, "pull") || slices.Contains(args, "push") {
			ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
		}
	case "container":
		if slices.Contains(args, "run") {
			ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
		}
	case "build", "pull", "push", "run":
		ensureRemoteCredentials(nc.fc, nc.ecc, &additionalEnv, nc.logger)
	}

	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout([]command.Replacement{{Source: "nerdctl", Target: "finch"}}, args...)
	}

	// eat the debug arg, and set the log level to avoid nerdctl parsing this flag
	dbgIdx := slices.Index(args, "--debug")
	if dbgIdx >= 0 {
		args = append(args[:dbgIdx], args[dbgIdx+1:]...)
		nc.logger.SetLevel(flog.Debug)
	}

	return nc.ncc.Create(append([]string{cmdName}, args...)...).Run()
}
