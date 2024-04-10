// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
)

func validate(_ *Finch, _ flog.Logger, _ LoadSystemDeps, _ fmemory.Memory) error {
	return nil
}
