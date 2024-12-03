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
	args = nc.preprocessArgs(args)
	cmdArgs := append([]string{cmdName}, args...)
	if nc.shouldReplaceForHelp(cmdName, args) {
		return nc.ncc.RunWithReplacingStdout(
			[]command.Replacement{{Source: "nerdctl", Target: "finch"}},
			cmdArgs...,
		)
	}
	return nc.ncc.Create(cmdArgs...).Run()
}

func (nc *nerdctlCommand) runDockerCompatInspect(cmdName string, args []string) error {
	args = nc.preprocessArgs(args)

	if !slices.Contains(args, "--format") {
		args = append(args, "--format", "{{json .}}")
	}

	cmd := nc.ncc.Create(append([]string{cmdName}, args...)...)
	return inspectContainerOutputHandler(cmd)
}

func (nc *nerdctlCommand) preprocessArgs(args []string) []string {
	dbgIdx := slices.Index(args, "--debug")
	if dbgIdx >= 0 {
		args = append(args[:dbgIdx], args[dbgIdx+1:]...)
		nc.logger.SetLevel(flog.Debug)
	}

	return args
}
