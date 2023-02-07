// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/support"
)

func newSupportBundleCommand(logger flog.Logger, builder support.BundleBuilder, lcc command.LimaCmdCreator) *cobra.Command {
	supportBundleCommand := &cobra.Command{
		Use:   "support-bundle",
		Short: "Support bundle management",
	}
	supportBundleCommand.AddCommand(
		newSupportBundleGenerateCommand(logger, builder, lcc),
	)
	return supportBundleCommand
}

func newSupportBundleGenerateCommand(logger flog.Logger, builder support.BundleBuilder, lcc command.LimaCmdCreator) *cobra.Command {
	supportBundleGenerateCommand := &cobra.Command{
		Use:   "generate",
		Args:  cobra.NoArgs,
		Short: "Generate support bundle",
		Long:  "Generates a collection of logs and configs that can be uploaded to a Github issue to help debug issues.",
		RunE:  newGenerateSupportBundleAction(logger, builder, lcc).runAdapter,
	}

	supportBundleGenerateCommand.Flags().StringArray("include", []string{},
		"additional files to include in the support bundle, specified by absolute or relative path")
	supportBundleGenerateCommand.Flags().StringArray("exclude", []string{},
		//nolint:lll // usage string
		"files to exclude from the support bundle. if you specify a base name, all files matching that base name will be excluded. if you specify an absolute or relative path, only exact matches will be excluded")
	return supportBundleGenerateCommand
}

type generateSupportBundleAction struct {
	logger  flog.Logger
	builder support.BundleBuilder
	lcc     command.LimaCmdCreator
}

func newGenerateSupportBundleAction(
	logger flog.Logger,
	builder support.BundleBuilder,
	lcc command.LimaCmdCreator,
) *generateSupportBundleAction {
	return &generateSupportBundleAction{
		logger:  logger,
		builder: builder,
		lcc:     lcc,
	}
}

func (gsa *generateSupportBundleAction) runAdapter(cmd *cobra.Command, args []string) error {
	additionalFiles, err := cmd.Flags().GetStringArray("include")
	if err != nil {
		return err
	}
	excludeFiles, err := cmd.Flags().GetStringArray("exclude")
	if err != nil {
		return err
	}
	return gsa.run(additionalFiles, excludeFiles)
}

func (gsa *generateSupportBundleAction) run(additionalFiles []string, excludeFiles []string) error {
	err := gsa.assertVMExists()
	if err != nil {
		return err
	}
	gsa.logger.Info("Generating support bundle...")
	bundleFile, err := gsa.builder.GenerateSupportBundle(additionalFiles, excludeFiles)
	if err != nil {
		return err
	}
	gsa.logger.Infof("Bundle created: %s", bundleFile)
	gsa.logger.Info("Files posted on a Github issue can be read by anyone.")
	gsa.logger.Info("Please ensure there is no sensitive information in the bundle before uploading.")
	gsa.logger.Info("By default, this bundle contains basic logs and configs for Finch.")
	return nil
}

func (gsa *generateSupportBundleAction) assertVMExists() error {
	status, err := lima.GetVMStatus(gsa.lcc, gsa.logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("cannot create support bundle for nonexistent VM, run `finch %s init` to create a new instance",
			virtualMachineRootCmd)
	default:
		return nil
	}
}
