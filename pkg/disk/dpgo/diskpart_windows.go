// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

// Package main is the entrypoint of the diskpart utility executable that is
// run as a separate process from Finch such that it can be given elevated
// Administrator privileges
package main

import (
	_ "embed"
	"fmt"
	"io"
	"os"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/version"
)

const diskpartRootCmd = "dpgo"

func main() {
	logger := flog.NewLogrus()
	stdOut := os.Stdout
	if err := xmain(logger, stdOut); err != nil {
		logger.Fatal(err)
	}
}

func xmain(logger flog.Logger, stdOut io.Writer) error {
	rootCmd := &cobra.Command{
		Use:           fmt.Sprintf("%v <command>", diskpartRootCmd),
		Short:         "dpgo: utility to interact with diskpart",
		SilenceUsage:  true,
		SilenceErrors: true,
		Version:       version.Version,
	}

	rootCmd.PersistentFlags().Bool("debug", false, "running under debug mode")
	rootCmd.PersistentFlags().Bool("json", false, "sets logs to output in JSON rather than plaintext")

	rootCmd.PersistentPreRunE = func(cmd *cobra.Command, args []string) error {
		// running commands under debug mode will print out debug logs
		debugMode, _ := cmd.Flags().GetBool("debug")
		if debugMode {
			logger.SetLevel(flog.Debug)
		}
		// running commands under debug mode will print out debug logs
		json, _ := cmd.Flags().GetBool("json")
		if json {
			logger.SetFormatter(flog.JSON)
		}
		return nil
	}

	ecc := command.NewExecCmdCreator()

	rootCmd.AddCommand(newDiskCommand(ecc, logger, stdOut))

	return rootCmd.Execute()
}
