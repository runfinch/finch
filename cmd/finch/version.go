// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"os/exec"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/version"
)

func newVersionCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	versionCommand := &cobra.Command{
		Use:   "version",
		Args:  cobra.NoArgs,
		Short: "Shows Finch version information",
		RunE:  newVersionAction(limaCmdCreator, logger).runAdapter,
	}

	return versionCommand
}

type versionAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newVersionAction(creator command.LimaCmdCreator, logger flog.Logger) *versionAction {
	return &versionAction{creator: creator, logger: logger}
}

func (va *versionAction) runAdapter(cmd *cobra.Command, args []string) error {
	return va.printVersion()
}

func (va *versionAction) printVersion() error {
	_, err := lima.GetVMStatus(va.creator, va.logger, limaInstanceName)
	if err != nil {
		fmt.Println("Finch version:", version.Version)
	}

	v, _ := exec.Command("lima", "nerdctl", "version").Output()

	fmt.Println("Finch version:", version.Version, "\n", v)

	return nil
}
