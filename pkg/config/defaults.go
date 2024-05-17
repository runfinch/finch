// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/fmemory"
)

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
	rosettaDefault(cfg, supportsVz)

	return cfg
}
