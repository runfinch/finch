// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/version"
)

func newVersionCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger, stdOut io.Writer) *cobra.Command {
	versionCommand := &cobra.Command{
		Use:   "version",
		Args:  cobra.NoArgs,
		Short: "Shows Finch version information",
		RunE:  newVersionAction(limaCmdCreator, logger, stdOut).runAdapter,
	}

	return versionCommand
}

type versionAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
	stdOut  io.Writer
}

// NerdctlVersionOutput captures the nerdctl version.
type NerdctlVersionOutput struct {
	Client NerdctlClientOutput `json:"Client"`
	Server NerdctlServerOutput `json:"Server"`
}

// NerdctlClientOutput captures the nerdctl Client output.
type NerdctlClientOutput struct {
	Version    string                    `json:"Version"`
	GitCommit  string                    `json:"GitCommit"`
	GoVersion  string                    `json:"GoVersion"`
	Os         string                    `json:"Os"`
	Arch       string                    `json:"Arch"`
	Components []NerdctlComponentsOutput `json:"Components"`
}

// NerdctlServerOutput captures the nerdctl Server output.
type NerdctlServerOutput struct {
	Components []NerdctlComponentsOutput `json:"Components"`
}

// NerdctlComponentsOutput captures the nerdctl components output.
type NerdctlComponentsOutput struct {
	Name    string `json:"Name"`
	Version string `json:"Version"`
	Details struct {
		GitCommit string `json:"GitCommit"`
	}
}

func newVersionAction(creator command.LimaCmdCreator, logger flog.Logger, stdOut io.Writer) *versionAction {
	return &versionAction{creator: creator, logger: logger, stdOut: stdOut}
}

func (va *versionAction) runAdapter(_ *cobra.Command, _ []string) error {
	return va.run()
}

func (va *versionAction) run() error {
	if err := va.printVersion(); err != nil {
		fmt.Fprintf(va.stdOut, "Finch version:\t%s\n", version.Version)
		return err
	}
	return nil
}

func (va *versionAction) printVersion() error {
	status, err := lima.GetVMStatus(va.creator, va.logger, limaInstanceName)
	if err != nil {
		return fmt.Errorf("failed to get VM status: %w", err)
	}
	if status != lima.Running {
		return errors.New("detailed version info is unavailable because VM is not running")
	}
	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs := []string{"shell", limaInstanceName, "sudo", "-E", "nerdctl", "version", "--format", "json"}
	out, err := va.creator.CreateWithoutStdio(limaArgs...).Output()
	if err != nil {
		return fmt.Errorf("failed to create the nerdctl version command: %w", err)
	}

	var nerdctlVersion NerdctlVersionOutput
	err = json.Unmarshal(out, &nerdctlVersion)
	if err != nil {
		return fmt.Errorf("failed to JSON-unmarshal the nerdctl version output: %w", err)
	}

	fmt.Fprintf(va.stdOut, "Client:\n")
	fmt.Fprintf(va.stdOut, " Version:\t%s\n", version.Version)
	fmt.Fprintf(va.stdOut, " OS/Arch:\t%s/%s\n", nerdctlVersion.Client.Os, nerdctlVersion.Client.Arch)
	fmt.Fprintf(va.stdOut, " GitCommit:\t%s\n", version.GitCommit)
	fmt.Fprintf(va.stdOut, " nerdctl:\n")
	fmt.Fprintf(va.stdOut, "  Version:\t%s\n", nerdctlVersion.Client.Version)
	fmt.Fprintf(va.stdOut, "  GitCommit:\t%s\n", nerdctlVersion.Client.GitCommit)
	for _, compo := range nerdctlVersion.Client.Components {
		fmt.Fprintf(va.stdOut, " %s:\n", compo.Name)
		fmt.Fprintf(va.stdOut, "  Version:\t%s\n", compo.Version)
		fmt.Fprintf(va.stdOut, "  GitCommit:\t%s\n", compo.Details.GitCommit)
	}
	fmt.Fprintf(va.stdOut, "\n")
	fmt.Fprintf(va.stdOut, "Server:\n")
	for _, compo := range nerdctlVersion.Server.Components {
		fmt.Fprintf(va.stdOut, " %s:\n", compo.Name)
		fmt.Fprintf(va.stdOut, "  Version:\t%s\n", compo.Version)
		fmt.Fprintf(va.stdOut, "  GitCommit:\t%s\n", compo.Details.GitCommit)
	}

	return nil
}
