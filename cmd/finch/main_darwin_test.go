// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"testing"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/stretchr/testify/assert"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/config"
)

func TestDependencies_Default(t *testing.T) {
	t.Parallel()

	fc := &config.Finch{}
	groups := dependencies(nil, fc, "", nil, nil, nil, "")
	// Only credhelper group, no vmnet
	assert.Equal(t, 1, len(groups))
}

func TestDependencies_VMNetEnabledQemu(t *testing.T) {
	t.Parallel()

	fc := &config.Finch{}
	fc.VMNet = pointer.Bool(true)
	vmType := limayaml.VMType("qemu")
	fc.VMType = &vmType
	groups := dependencies(nil, fc, "", nil, nil, nil, "")
	// credhelper + vmnet (socket_vmnet needed for qemu)
	assert.Equal(t, 2, len(groups))
}

func TestDependencies_VMNetEnabledVz(t *testing.T) {
	t.Parallel()

	fc := &config.Finch{}
	fc.VMNet = pointer.Bool(true)
	vmType := limayaml.VMType("vz")
	fc.VMType = &vmType
	groups := dependencies(nil, fc, "", nil, nil, nil, "")
	// Only credhelper, no socket_vmnet (vz uses vzNAT instead)
	assert.Equal(t, 1, len(groups))
}

func TestDependencies_VMNetDisabledQemu(t *testing.T) {
	t.Parallel()

	fc := &config.Finch{}
	fc.VMNet = pointer.Bool(false)
	vmType := limayaml.VMType("qemu")
	fc.VMType = &vmType
	groups := dependencies(nil, fc, "", nil, nil, nil, "")
	// Only credhelper, vmnet explicitly disabled
	assert.Equal(t, 1, len(groups))
}
