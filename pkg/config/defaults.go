// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"github.com/runfinch/finch/pkg/fmemory"
)

const (
	// 2,147,483,648 => 2GiB.
	fallbackMemory float64 = 2_147_483_648
	fallbackCPUs   int     = 2
)

// applyDefaults sets default configuration options if they are not already set.
func applyDefaults(cfg *Finch, deps LoadSystemDeps, mem fmemory.Memory) *Finch {
	cpuDefault(cfg, deps)

	memoryDefault(cfg, mem)

	vmDefault(cfg)

	rosettaDefault(cfg)

	return cfg
}
