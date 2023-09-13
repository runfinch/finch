// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/command"
)

// Ensures wsl 2 is available and sets version to 2 which is required for finch to work.
func SupportsWSL2(cmdCreator command.Creator) error {
	return cmdCreator.Create("wsl", "--set-default-version", "2").Run()
}
