// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package vm runs benchmark tests related to the virtual machine of Finch.
package vm

import (
	"testing"

	"github.com/runfinch/finch/benchmark"
)

const (
	virtualMachineRootCmd = "vm"
)

func BenchmarkVM(b *testing.B) {
	suite := &benchmark.Suite{}
	err := suite.Setup()
	if err != nil {
		b.Fatal(err)
	}

	b.Run("BenchmarkVMInit", func(b *testing.B) {
		suite.BenchmarkVMInit(b)
	})

	b.Run("BenchmarkVMStart", func(b *testing.B) {
		suite.BenchmarkVMStart(b)
	})
}
