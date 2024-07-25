// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
)

func nerdctlCmdCreator(ecc command.Creator, logger flog.Logger, _ path.Finch) command.NerdctlCmdCreator {
	return command.NewNerdctlCmdCreator(ecc,
		logger,
		"",
		"",
		"",
		system.NewStdLib(),
	)
}
