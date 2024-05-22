// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"math"

	"github.com/docker/go-units"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/fmemory"
)

const (
	// 2,147,483,648 => 2GiB.
	fallbackMemory float64 = 2_147_483_648
	fallbackCPUs   int     = 2
)

func vmDefault(cfg *Finch, supportsVz bool) {
	if cfg.VMType == nil {
		if supportsVz {
			cfg.VMType = pointer.String("vz")
		} else {
			cfg.VMType = pointer.String("qemu")
		}
	}
}

func rosettaDefault(cfg *Finch) {
	if cfg.Rosetta == nil {
		cfg.Rosetta = pointer.Bool(false)
	}
}

func memoryDefault(cfg *Finch, mem fmemory.Memory) {
	if cfg.Memory == nil {
		defaultMemory := math.Round(float64(mem.TotalMemory()) * 0.25)
		if defaultMemory >= fallbackMemory {
			cfg.Memory = pointer.String(units.BytesSize(defaultMemory))
		} else {
			cfg.Memory = pointer.String(units.BytesSize(fallbackMemory))
		}
	}
}

func cpuDefault(cfg *Finch, deps LoadSystemDeps) {
	if cfg.CPUs == nil {
		defaultCPUs := int(math.Round(float64(deps.NumCPU()) * 0.25))
		if defaultCPUs >= fallbackCPUs {
			cfg.CPUs = pointer.Int(defaultCPUs)
		} else {
			cfg.CPUs = pointer.Int(fallbackCPUs)
		}
	}
}

// applyDefaults sets default configuration options if they are not already set.
func applyDefaults(
	cfg *Finch,
	deps LoadSystemDeps,
	mem fmemory.Memory,
	ecc command.Creator,
) *Finch {
	cpuDefault(cfg, deps)
	memoryDefault(cfg, mem)
	supportsVz := false
	vz, err := SupportsVirtualizationFramework(ecc)
	if err == nil && vz {
		supportsVz = true
	}
	vmDefault(cfg, supportsVz)
	rosettaDefault(cfg)

	return cfg
}
