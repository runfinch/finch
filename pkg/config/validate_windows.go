// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
)

func validateCPUs(_ int, _ flog.Logger, _ LoadSystemDeps) error {
	return nil
}

func validateMemory(_ string, _ flog.Logger, _ fmemory.Memory) error {
	return nil
}

func validate(_ *Finch, _ flog.Logger, _ LoadSystemDeps, _ fmemory.Memory) error {
	return nil
}
