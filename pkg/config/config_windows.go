// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/command"
)

// SupportsWSL2 checks if system supports WSL2 and sets default version to 2.
func SupportsWSL2(cmdCreator command.Creator) error {
	return cmdCreator.Create("wsl", "--set-default-version", "2").Run()
}
