// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/fmemory"
)

func vmDefault(cfg *Finch) {
	if cfg.VMType == nil {
		cfg.VMType = pointer.String("wsl2")
	}
}

// applyDefaults sets default configuration options if they are not already set.
func applyDefaults(
	cfg *Finch,
	_ LoadSystemDeps,
	_ fmemory.Memory,
	_ command.Creator,
) *Finch {
	vmDefault(cfg)
	return cfg
}
