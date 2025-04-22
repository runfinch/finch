// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"
	"strings"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newVMDiskInfoCommand(creator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "info",
		Short: "Display information about the virtual machine disk",
		RunE:  newDiskInfoAction(creator, logger).runAdapter,
	}
	return cmd
}

type diskInfoAction struct {
	creator command.NerdctlCmdCreator
	logger  flog.Logger
}

func newDiskInfoAction(creator command.NerdctlCmdCreator, logger flog.Logger) *diskInfoAction {
	return &diskInfoAction{
		creator: creator,
		logger:  logger,
	}
}

func (dia *diskInfoAction) runAdapter(_ *cobra.Command, _ []string) error {
	return dia.run()
}

func (dia *diskInfoAction) run() error {
	limaCmd := dia.creator.CreateWithoutStdio("disk", "ls", limaInstanceName)
	output, err := limaCmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to get disk information: %w\n%s", err, output)
	}

	if len(strings.TrimSpace(string(output))) == 0 {
		return fmt.Errorf("no disk information found for virtual machine %q", limaInstanceName)
	}

	fmt.Print(string(output))
	return nil
}
