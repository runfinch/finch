// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
)

func validate(cfg *Finch, log flog.Logger, systemDeps LoadSystemDeps, mem fmemory.Memory) error {
	return nil
}
