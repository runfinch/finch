// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/spf13/afero"
)

type SystemSettings struct {
	SharedSystemSettings `yaml:",inline"`
}

type Finch struct {
	SystemSettings `yaml:",inline"`
	SharedSettings `yaml:",inline"`
}

// SupportsWSL2 checks if system supports WSL2 and sets default version to 2.
func SupportsWSL2(cmdCreator command.Creator) error {
	return cmdCreator.Create("wsl", "--set-default-version", "2").Run()
}

// ModifyFinchConfig Modify Finch's configuration from user inputs.
func ModifyFinchConfig(_ afero.Fs, _ flog.Logger, _ string, _ VMConfigOpts) (bool, error) {
	return true, nil
}
