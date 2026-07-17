// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"io"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

func newOSImageCommand(logger flog.Logger, fp path.Finch, fc *config.Finch, stdOut io.Writer, finchRootPath string) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "os-image",
		Short: "Manage the OS image used by the virtual machine",
	}

	cmd.AddCommand(
		newOSImageListCommand(logger, fp, stdOut),
		newOSImageUpdateCommand(logger, fp, fc, finchRootPath),
		newOSImageRollbackCommand(logger, fp, fc, finchRootPath),
	)

	return cmd
}
