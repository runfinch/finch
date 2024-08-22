// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newPassDelete(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	passDeleteCommand := &cobra.Command{
		Use:   "pass-delete",
		Short: "Delete the pass key",
		RunE:  newPassDeleteAction(limaCmdCreator, logger).runAdapter,
	}
	return passDeleteCommand
}

type passDeleteAction struct {
	creator command.NerdctlCmdCreator
	logger  flog.Logger
}

func newPassDeleteAction(creator command.NerdctlCmdCreator, logger flog.Logger) *passDeleteAction {
	return &passDeleteAction{creator: creator, logger: logger}
}

func (pda *passDeleteAction) runAdapter(_ *cobra.Command, _ []string) error {
	return pda.run()
}

func (pda *passDeleteAction) run() error {
	return pda.delete()
}

func (pda *passDeleteAction) delete() error {
	cmd := pda.removePass()
	err := cmd.Run()
	if err != nil {
		pda.logger.Warnf("cannot perform pass remove action")
	}
	cmd = pda.removePassKey()
	return cmd.Run()
}
