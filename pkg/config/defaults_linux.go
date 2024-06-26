// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package config

import (
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/fmemory"
)

// applyDefaults sets default configuration options if they are not already set.
func applyDefaults(
	cfg *Finch,
	_ LoadSystemDeps,
	_ fmemory.Memory,
	_ command.Creator,
) *Finch {
	return cfg
}
