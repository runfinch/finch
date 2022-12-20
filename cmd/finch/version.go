// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"

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

	limaArgs := []string{"shell", limaInstanceName, "nerdctl", "version", "--format", "json"}
	out, _ := va.creator.CreateWithoutStdio(limaArgs...).Output()

	var nerdctlVersion NerdctlVersionOutput
	err = json.Unmarshal(out, &nerdctlVersion)

	var w io.Writer = os.Stdout

	if err == nil {
		fmt.Fprintf(w, "Client:\n")
		fmt.Fprintf(w, " Version:\t%s\n", version.Version)
		fmt.Fprintf(w, " OS/Arch:\t%s/%s\n", nerdctlVersion.Client.Os, nerdctlVersion.Client.Arch)
		fmt.Fprintf(w, " Git commit:\t%s\n", version.GitCommit)
		fmt.Fprintf(w, "nerdctl:\n")
		fmt.Fprintf(w, " Version:\t%s\n", nerdctlVersion.Client.Version)
		fmt.Fprintf(w, " Git commit:\t%s\n", nerdctlVersion.Client.GitCommit)
		for _, compo := range nerdctlVersion.Client.Components {
			fmt.Fprintf(w, "%s:\n", compo.Name)
			fmt.Fprintf(w, "  Version:\t%s\n", compo.Version)
			fmt.Fprintf(w, "  Git commit:\t%s\n", compo.Details.GitCommit)
		}
		fmt.Fprintf(w, "\n")
		fmt.Fprintf(w, "Server:\n")
		for _, compo := range nerdctlVersion.Server.Components {
			fmt.Fprintf(w, " %s:\n", compo.Name)
			fmt.Fprintf(w, "  Version:\t%s\n", compo.Version)
			fmt.Fprintf(w, "  Git commit:\t%s\n", compo.Details.GitCommit)
		}
	}

	return nil
}
