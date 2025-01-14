// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package all runs all the benchmark tests of Finch.
package all

import (
	"testing"

	"github.com/runfinch/finch/benchmark"
)

func BenchmarkAll(b *testing.B) {
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

	err = suite.InitVM()
	if err != nil {
		b.Fatal(err)
	}

	b.Run("BenchmarkContainerRun", func(b *testing.B) {
		suite.BenchmarkContainerRun(b, "finch")
	})

	b.Run("BenchmarkImageBuild", func(b *testing.B) {
		suite.BenchmarkImageBuild(b, "finch")
	})

	err = suite.StopVM()
	if err != nil {
		b.Fatal(err)
	}
	err = suite.RemoveVM()
	if err != nil {
		b.Fatal(err)
	}
}
