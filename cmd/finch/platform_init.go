// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"github.com/spf13/cobra"

	"github.com/gopasspw/gopass/pkg/pwgen"
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newPassInit(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	passInitCommand := &cobra.Command{
		Use:   "pass-init",
		Short: "Initialize the pass",
		RunE:  newPassInitAction(limaCmdCreator, logger).runAdapter,
	}

	return passInitCommand
}

const passphraseLength = 16

type passInitAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newPassInitAction(creator command.LimaCmdCreator, logger flog.Logger) *passInitAction {
	return &passInitAction{creator: creator, logger: logger}
}

func (pia *passInitAction) runAdapter(_ *cobra.Command, _ []string) error {
	return pia.run()
}

func (pia *passInitAction) run() error {
	return pia.initKey()
}

func (pia *passInitAction) initKey() error {
	cmd := pia.createPassInitKey()
	return cmd.Run()
}

func (pia *passInitAction) createPassInitKey() command.Command {
	passphrase := pwgen.GeneratePassword(passphraseLength, true)
	return pia.creator.Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--batch", "--passphrase", passphrase, "--quick-gen-key", "$USER")
}
