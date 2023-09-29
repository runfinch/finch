// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"github.com/runfinch/finch/pkg/fmemory"
)

// applyDefaults sets default configuration options if they are not already set.
func applyDefaults(cfg *Finch, deps LoadSystemDeps, mem fmemory.Memory) *Finch {
	cpuDefault(cfg, deps)

	memoryDefault(cfg, mem)

	vmDefault(cfg)

	rosettaDefault(cfg)

	return cfg
}
