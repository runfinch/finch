// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/fmemory"
)

// Does not matter if Rosetta is set, no-op.
func rosettaDefault(_ *Finch) {
}

func vmDefault(cfg *Finch) {
	if cfg.VMType == nil {
		cfg.VMType = pointer.String("wsl2")
	}
}

// no-op , not configurable in wsl.
func memoryDefault(_ *Finch, _ fmemory.Memory) {
}

// no-op , not configurable in wsl.
func cpuDefault(_ *Finch, _ LoadSystemDeps) {
}
