// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"github.com/gopasspw/gopass/pkg/pwgen"
	"github.com/runfinch/finch/pkg/command"
)

func (pia *passInitAction) initGpgKey() command.Command {
	passphrase := pwgen.GeneratePassword(passphraseLength, true)
	return pia.creator.CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--batch", "--passphrase", passphrase, "--quick-gen-key", "finch")
}

func (pia *passInitAction) passInit() command.Command {
	return pia.creator.CreateWithoutStdio("shell", limaInstanceName, "sudo", "-E", "pass", "init", "finch")
}
