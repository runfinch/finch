// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/command"
)

// SystemSettings represents the system configuration specifc to Windows.
type SystemSettings struct {
	Mode                 *string `yaml:"mode,omitempty"`
	SharedSystemSettings `yaml:",inline"`
}

// Finch represents the configuration file for Finch CLI.
type Finch struct {
	SystemSettings `yaml:",inline"`
	SharedSettings `yaml:",inline"`
}

// SupportsWSL2 checks if system supports WSL2 and sets default version to 2.
func SupportsWSL2(cmdCreator command.Creator) error {
	return cmdCreator.Create("wsl", "--set-default-version", "2").Run()
}
