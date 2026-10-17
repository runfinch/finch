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

func newVMDiskUsageCommand(creator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "usage",
		Short: "Display disk usage information from within the virtual machine",
		Long: `Display disk usage information from within the virtual machine.
This command shows the actual disk usage as seen from inside the VM,
including used space, available space, and usage percentage.`,
		RunE: newDiskUsageAction(creator, logger).runAdapter,
	}
	return cmd
}

type diskUsageAction struct {
	creator command.NerdctlCmdCreator
	logger  flog.Logger
}

func newDiskUsageAction(creator command.NerdctlCmdCreator, logger flog.Logger) *diskUsageAction {
	return &diskUsageAction{
		creator: creator,
		logger:  logger,
	}
}

func (dua *diskUsageAction) runAdapter(_ *cobra.Command, _ []string) error {
	return dua.run()
}

func (dua *diskUsageAction) run() error {
	// First check if the VM is running
	statusCmd := dua.creator.CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName)
	statusOutput, err := statusCmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to check VM status: %w", err)
	}

	status := strings.TrimSpace(string(statusOutput))
	if status != "Running" {
		return fmt.Errorf("virtual machine is not running (status: %s)", status)
	}

	shellCmd := dua.creator.CreateWithoutStdio("shell", limaInstanceName, "df", "-h", "/mnt/lima-finch")
	output, err := shellCmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to get disk usage information: %w\n%s", err, output)
	}

	outputStr := strings.TrimSpace(string(output))
	if len(outputStr) == 0 {
		return fmt.Errorf("no disk usage information available")
	}

	// Parse and format the df output
	lines := strings.Split(outputStr, "\n")
	if len(lines) < 2 {
		return fmt.Errorf("unexpected disk usage output format")
	}

	// Parse the data line (skip header)
	fields := strings.Fields(lines[1])
	if len(fields) < 6 {
		return fmt.Errorf("insufficient disk usage data")
	}

	// df output format: Filesystem Size Used Avail Use% Mounted
	filesystem := fields[0]
	size := fields[1]
	used := fields[2]
	available := fields[3]
	percentage := fields[4]
	mountpoint := fields[5]

	fmt.Printf("Filesystem:  %s\n", filesystem)
	fmt.Printf("Mountpoint:  %s\n", mountpoint)
	fmt.Printf("Total Size:  %s\n", size)
	fmt.Printf("Used:        %s\n", used)
	fmt.Printf("Available:   %s\n", available)
	fmt.Printf("Usage:       %s\n", percentage)

	return nil
}
