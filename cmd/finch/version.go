// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/spf13/cobra"
)

func finchVersion() string {
	// TODO: Remove hardcoded version after the git can be access through buildtime
	return "v0.1.1"
}

func newVersionCommand() *cobra.Command {
	versionCommand := &cobra.Command{
		Use:   "version",
		Args:  cobra.NoArgs,
		Short: "Show Finch version information",
		RunE:  versionAction,
	}

	return versionCommand
}

func versionAction(cmd *cobra.Command, args []string) error {
	fmt.Println("Finch version:", finchVersion())
	return nil
}
