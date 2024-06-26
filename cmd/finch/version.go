// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"fmt"
	"io"
	"text/template"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/templates"
	"github.com/runfinch/finch/pkg/version"
)

const defaultVersionTemplate = `{{with .Client -}}
Client:
 Version:	{{.Version}}
 GitCommit:	{{.GitCommit}}
 {{with .NerdctlClient -}}
 OS/Arch:	{{.Os}}/{{.Arch}}
 nerdctl:
  Version:	{{.Version}}
  GitCommit:	{{.GitCommit}}
 {{- range $component := .Components}}
 {{$component.Name}}:
  Version:	{{.Version}}
  GitCommit:	{{.Details.GitCommit}}
 {{- end}}
 {{- end}}
{{- end}}

{{with .Server -}}
Server:
{{- range $component := .Components}}
 {{$component.Name}}:
  Version:	{{.Version}}
  GitCommit:	{{.Details.GitCommit}}
{{- end}}
{{- end}}`

func newVersionCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger, stdOut io.Writer) *cobra.Command {
	versionCommand := &cobra.Command{
		Use:   "version",
		Args:  cobra.NoArgs,
		Short: "Shows Finch version information",
		RunE:  newVersionAction(limaCmdCreator, logger, stdOut).runAdapter,
	}

	versionCommand.Flags().StringP("format", "f", "", "Format the output using the given Go template, e.g, '{{json .}}'")

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

// FinchVersionOutput captures the finch version.
type FinchVersionOutput struct {
	Client ClientVersionOutput `json:"Client"`
	Server NerdctlServerOutput `json:"Server"`
}

// ClientVersionOutput captures the commit ID for finch and the nerdctl Client output.
type ClientVersionOutput struct {
	Version       string              `json:"Version"`
	GitCommit     string              `json:"GitCommit"`
	NerdctlClient NerdctlClientOutput `json:"NerdctlClient"`
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

// NerdctlComponentsOutput captures the nerdctl components output.
type NerdctlComponentsOutput struct {
	Name    string `json:"Name"`
	Version string `json:"Version"`
	Details struct {
		GitCommit string `json:"GitCommit"`
	}
}

// NerdctlServerOutput captures the nerdctl Server output.
type NerdctlServerOutput struct {
	Components []NerdctlComponentsOutput `json:"Components"`
}

func newVersionAction(creator command.LimaCmdCreator, logger flog.Logger, stdOut io.Writer) *versionAction {
	return &versionAction{creator: creator, logger: logger, stdOut: stdOut}
}

func (va *versionAction) runAdapter(cmd *cobra.Command, _ []string) error {
	format, err := cmd.Flags().GetString("format")
	if err != nil {
		return err
	}

	return va.run(format)
}

func (va *versionAction) run(format string) error {
	if err := va.printVersion(format); err != nil {
		fmt.Fprintf(va.stdOut, "Finch version:\t%s\n", version.Version)
		return err
	}
	return nil
}

func newVersionTemplate(templateFormat string) (*template.Template, error) {
	switch templateFormat {
	case "":
		templateFormat = defaultVersionTemplate
	case templates.JSONFormatKey:
		templateFormat = templates.JSONFormat
	}

	tmpl := templates.New("version")
	tmpl, err := tmpl.Parse(templateFormat)
	if err != nil {
		return nil, err
	}

	return tmpl, nil
}

func createFinchVersionOutput(nerdctlVersion NerdctlVersionOutput) FinchVersionOutput {
	var finchVersionOutput FinchVersionOutput

	finchVersionOutput.Client.Version = version.Version
	finchVersionOutput.Client.GitCommit = version.GitCommit
	finchVersionOutput.Client.NerdctlClient = nerdctlVersion.Client
	finchVersionOutput.Server = nerdctlVersion.Server

	return finchVersionOutput
}

func (va *versionAction) showVersionMessage(tmpl *template.Template, nerdctlVersion NerdctlVersionOutput) error {
	var b bytes.Buffer

	finchVersionOutput := createFinchVersionOutput(nerdctlVersion)
	if err := tmpl.Execute(&b, finchVersionOutput); err != nil {
		return err
	}
	if _, err := fmt.Fprintln(va.stdOut, b.String()); err != nil {
		return err
	}

	return nil
}
