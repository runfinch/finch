// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	_ "embed"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"text/template"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/system"
)

// GenDocsSystemDeps contains the system dependencies for newGenDocsCommand.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../../pkg/mocks/gen_docs_system_deps.go -package=mocks -mock_names GenDocsSystemDeps=GenDocsSystemDeps -source=gen_docs.go GenDocsSystemDeps
type GenDocsSystemDeps interface {
	system.PipeGetter
	system.StdoutGetter
	system.StdoutSetter
}

func newGenDocsCommand(
	rootCmd *cobra.Command,
	logger flog.Logger,
	fs afero.Fs,
	deps GenDocsSystemDeps,
) *cobra.Command {
	genDocsCommand := &cobra.Command{
		Use:   "gen-docs",
		Short: "Document generation",
	}
	genDocsCommand.AddCommand(
		newGenDocsGenerateCommand(rootCmd, logger, fs, deps),
	)
	return genDocsCommand
}

func newGenDocsGenerateCommand(
	rootCmd *cobra.Command,
	logger flog.Logger,
	fs afero.Fs,
	deps GenDocsSystemDeps,
) *cobra.Command {
	genDocsGenerateCommand := &cobra.Command{
		Use:    "generate",
		Args:   cobra.NoArgs,
		Hidden: true,
		Short:  "Generate Finch docs",
		RunE:   newGenDocsGenerateAction(rootCmd, logger, fs, deps).runAdapter,
	}

	genDocsGenerateCommand.Flags().StringP("path", "p", "", "Doc output directory")
	// Ignore error since we check if the flag is set anyway
	_ = genDocsGenerateCommand.MarkFlagRequired("path")

	return genDocsGenerateCommand
}

type genDocsAction struct {
	rootCmd *cobra.Command
	logger  flog.Logger
	fs      afero.Fs
	deps    GenDocsSystemDeps
}

func newGenDocsGenerateAction(
	rootCmd *cobra.Command,
	logger flog.Logger,
	fs afero.Fs,
	deps GenDocsSystemDeps,
) *genDocsAction {
	return &genDocsAction{
		rootCmd: rootCmd,
		logger:  logger,
		deps:    deps,
		fs:      fs,
	}
}

func (gd *genDocsAction) runAdapter(cmd *cobra.Command, _ []string) error {
	path, err := cmd.Flags().GetString("path")
	if err != nil {
		return fmt.Errorf("failed to get required parameter 'path': %w", err)
	}
	return gd.run(path)
}

func (gd *genDocsAction) run(outDir string) error {
	return gd.captureHelpOutput(gd.rootCmd, outDir)
}

func (gd *genDocsAction) captureHelpOutput(cmd *cobra.Command, outDir string) error {
	for _, c := range cmd.Commands() {
		if err := gd.captureHelpOutput(c, outDir); err != nil {
			return err
		}
	}

	if !cmd.Runnable() || cmd.Hidden {
		return nil
	}

	gd.logger.Infof("Creating doc for command: %s", cmd.CommandPath())

	baseName := strings.ReplaceAll(cmd.CommandPath(), " ", "_") + ".md"
	fileName := filepath.Clean(filepath.Join(outDir, baseName))
	f, err := gd.fs.OpenFile(fileName, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0o666)
	if err != nil {
		return fmt.Errorf("error while creating out file %q: %w", fileName, err)
	}

	// redirect Stdout to pipe
	rescueStdout := gd.deps.Stdout()
	r, w, _ := gd.deps.Pipe()
	gd.deps.SetStdout(w)

	rootCmd := cmd.Root()

	// everything except the initial `finch`
	args := strings.Split(cmd.CommandPath(), " ")[1:]
	args = append(args, "--help")
	rootCmd.SetArgs(args)
	// rootCmd.SetOutput() would work for all "default finch" commands, but doesn't work
	// for the nerdctl commands. Getting it to work would remove the need to capture all Stdout.
	if err := rootCmd.Execute(); err != nil {
		return fmt.Errorf("error while executing command (args=%v): %w", args, err)
	}
	gd.deps.SetStdout(rescueStdout)

	_ = w.Close()
	helpText, err := io.ReadAll(r)
	if err != nil {
		return fmt.Errorf("error while reading stdout from pipe: %w", err)
	}

	seeAlso := ""
	if cmd.HasParent() && cmd.Parent().Runnable() {
		parentName := cmd.Parent().CommandPath()
		parentDocFile := parentName + ".md"
		parentDocFile = strings.ReplaceAll(parentDocFile, " ", "_")
		parentShortDescription := cmd.Parent().Short
		seeAlso = fmt.Sprintf("* [%s](%s)\t - %s\n", parentName, parentDocFile, parentShortDescription)
	}

	mdOut, err := convertToMarkdown(cmd.CommandPath(), seeAlso, string(helpText))
	if err != nil {
		return fmt.Errorf("error while converting docs to markdown: %w", err)
	}

	if _, err := f.WriteString(mdOut); err != nil {
		return fmt.Errorf("error while writing docs to file (%q): %w", f.Name(), err)
	}

	_ = f.Close()

	return nil
}

//go:embed doc.TEMPLATE.md
var docTmpl string

type docTmplOpts struct {
	CmdPath     string
	Description string
	Properties  string
	Usage       string
	Aliases     string
	Examples    string
	Commands    string
	Options     string
	SeeAlso     string
}

func convertToMarkdown(cmdPath, seeAlso, helpText string) (string, error) {
	t := template.Must(template.New("docTmpl").Parse(docTmpl))
	opts := docTmplOpts{
		CmdPath: cmdPath,
	}

	opts.SeeAlso = seeAlso

	// Assume that everything up until "header section" (i.e. `Usage:\n`) is a description
	re := regexp.MustCompile(`(?msU)^(.*)[A-Z]\w*:\s`)
	matches := re.FindStringSubmatch(helpText)
	// Take the last index (if no match, 0 or if match, 1) as the description.
	// This handles the rare case in where the only help info is a description.
	opts.Description = strings.TrimSpace(matches[len(matches)-1])

	// The rest of the fields are treated as optional.
	// A reference of all fields and how they may appear in help out put can
	// be found here: https://github.com/spf13/cobra/blob/v1.7.0/command.go#L539-L568
	opts.Properties = tryExtractField(helpText, "Properties")
	opts.Usage = tryExtractField(helpText, "Usage")
	opts.Aliases = tryExtractField(helpText, "Aliases")
	opts.Examples = tryExtractField(helpText, "Examples")
	opts.Commands = tryExtractField(helpText, "Commands")
	opts.Options = tryExtractField(helpText, "Flags")

	var tmpl bytes.Buffer
	if err := t.Execute(&tmpl, opts); err != nil {
		return "", err
	}

	return tmpl.String(), nil
}

func tryExtractField(helpString, fieldName string) string {
	re := regexp.MustCompile(fmt.Sprintf(`(?smU)^%s:\s(.*)^\s?$`, fieldName))
	matches := re.FindStringSubmatch(strings.TrimSpace(helpString))
	if len(matches) == 2 {
		return strings.TrimSuffix(strings.TrimSuffix(matches[1], " "), "\n")
	}
	return ""
}
