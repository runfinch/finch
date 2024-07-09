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
	logger flog.Logger,
	fp path.Finch,
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	fs afero.Fs,
	fc *config.Finch,
	home string,
	finchRootPath string,
) *cobra.Command {
	return &cobra.Command{}
}
