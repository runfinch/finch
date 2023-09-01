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
