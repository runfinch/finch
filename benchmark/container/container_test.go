// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package container runs benchmark tests related to container development of Finch.
package container

import (
	"testing"

	"github.com/runfinch/finch/benchmark"
)

func BenchmarkContainer(b *testing.B) {
	suite := &benchmark.Suite{}
	err := suite.Setup()
	if err != nil {
		b.Fatal(err)
	}

	b.Run("BenchmarkContainerRun", func(b *testing.B) {
		suite.BenchmarkContainerRun(b)
	})

	b.Run("BenchmarkImageBuild", func(b *testing.B) {
		suite.BenchmarkImageBuild(b)
	})
}
