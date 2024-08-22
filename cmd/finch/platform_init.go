// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newPassInit(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	passInitCommand := &cobra.Command{
		Use:   "pass-init",
		Short: "Initialize the pass",
		RunE:  newPassInitAction(limaCmdCreator, logger).runAdapter,
	}

	return passInitCommand
}

const passphraseLength = 16

type passInitAction struct {
	creator command.NerdctlCmdCreator
	logger  flog.Logger
}

func newPassInitAction(creator command.NerdctlCmdCreator, logger flog.Logger) *passInitAction {
	return &passInitAction{creator: creator, logger: logger}
}

func (pia *passInitAction) runAdapter(_ *cobra.Command, _ []string) error {
	return pia.run()
}

func (pia *passInitAction) run() error {
	return pia.init()
}

func (pia *passInitAction) init() error {
	cmd := pia.initGpgKey()
	err := cmd.Run()
	if err != nil {
		return err
	}
	cmd = pia.passInit()
	return cmd.Run()
}
