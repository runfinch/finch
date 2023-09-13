// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import "github.com/xorcare/pointer"

// Does not matter if Rosetta is set, no-op.
func rosettaDefault(cfg *Finch) {
}

func vmDefault(cfg *Finch) {
	if cfg.VMType == nil {
		cfg.VMType = pointer.String("wsl2")
	}
}
