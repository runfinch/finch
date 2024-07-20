// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newPassDelete(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	passDeleteCommand := &cobra.Command{
		Use:   "pass-delete",
		Short: "Delete the pass key",
		RunE:  newPassDeleteAction(limaCmdCreator, logger).runAdapter,
	}
	return passDeleteCommand
}

type passDeleteAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newPassDeleteAction(creator command.LimaCmdCreator, logger flog.Logger) *passDeleteAction {
	return &passDeleteAction{creator: creator, logger: logger}
}

func (pda *passDeleteAction) runAdapter(_ *cobra.Command, _ []string) error {
	return pda.run()
}

func (pda *passDeleteAction) run() error {
	return pda.deleteKey()
}

func (pda *passDeleteAction) deleteKey() error {
	cmd := pda.createPassDeleteKey()
	return cmd.Run()
}

func (pda *passDeleteAction) createPassDeleteKey() command.Command {
	return pda.creator.Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--yes", "--delete-secret-and-public-key", "$USER")
}
