// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin
// +build darwin

package config

import "github.com/xorcare/pointer"

func vmDefault(cfg *Finch) {
	if cfg.VMType == nil {
		cfg.VMType = pointer.String("qemu")
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
