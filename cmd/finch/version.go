// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"encoding/json"
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
	Client NerdctlClientOuput  `json:"Client"`
	Server NerdctlServerOutput `json:"Server"`
}

// NerdctlClientOuput captures the nerdctl Client output.
type NerdctlClientOuput struct {
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

func (va *versionAction) runAdapter(cmd *cobra.Command, args []string) error {
	return va.run()
}

func (va *versionAction) run() error {
	status, err := lima.GetVMStatus(va.creator, va.logger, limaInstanceName)
	//nolint: gocritic // will change to switch statement later
	if err != nil {
		fmt.Fprintf(va.stdOut, "Finch version:\t%s", version.Version)
		return err
	} else if status != lima.Running {
		fmt.Fprintf(va.stdOut, "Finch version:\t%s", version.Version)
	} else {
		limaArgs := []string{"shell", limaInstanceName, "nerdctl", "version", "--format", "json"}
		out, err := va.creator.CreateWithoutStdio(limaArgs...).Output()
		if err != nil {
			fmt.Fprintf(va.stdOut, "Finch version:\t%s", version.Version)
			return err
		}

		var nerdctlVersion NerdctlVersionOutput
		err = json.Unmarshal(out, &nerdctlVersion)

		if err != nil {
			fmt.Fprintf(va.stdOut, "Finch version:\t%s", version.Version)
			return err
		}

		fmt.Fprintf(va.stdOut, "Client:\n")
		fmt.Fprintf(va.stdOut, " Version:\t%s\n", version.Version)
		fmt.Fprintf(va.stdOut, " OS/Arch:\t%s/%s\n", nerdctlVersion.Client.Os, nerdctlVersion.Client.Arch)
		fmt.Fprintf(va.stdOut, " GitCommit:\t%s\n", version.GitCommit)
		fmt.Fprintf(va.stdOut, "nerdctl:\n")
		fmt.Fprintf(va.stdOut, " Version:\t%s\n", nerdctlVersion.Client.Version)
		fmt.Fprintf(va.stdOut, " GitCommit:\t%s\n", nerdctlVersion.Client.GitCommit)
		for _, compo := range nerdctlVersion.Client.Components {
			fmt.Fprintf(va.stdOut, "%s:\n", compo.Name)
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
	}

	return nil
}
