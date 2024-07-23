// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

func virtualMachineCommands(
	_ flog.Logger,
	_ path.Finch,
	_ command.NerdctlCmdCreator,
	_ command.Creator,
	_ afero.Fs,
	_ *config.Finch,
	_ string,
	_ string,
) *cobra.Command {
	return &cobra.Command{}
}
