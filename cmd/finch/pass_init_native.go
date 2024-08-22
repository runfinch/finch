// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"github.com/gopasspw/gopass/pkg/pwgen"
	"github.com/runfinch/finch/pkg/command"
)

func (pia *passInitAction) initGpgKey() command.Command {
	passphrase := pwgen.GeneratePassword(passphraseLength, true)
	ecc := command.NewExecCmdCreator()
	cmd := ecc.Create(
		"gpg2", "--batch", "--passphrase", passphrase, "--quick-gen-key", "finch")
	return cmd
}

func (pia *passInitAction) passInit() command.Command {
	ecc := command.NewExecCmdCreator()
	cmd := ecc.Create("pass", "init", "finch")
	return cmd
}
