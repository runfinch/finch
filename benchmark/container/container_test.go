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

	b.Run("BenchmarkContainerRun-docker", func(b *testing.B) {
		suite.BenchmarkContainerRun(b, "docker")
	})

	b.Run("BenchmarkContainerRun-finch", func(b *testing.B) {
		suite.BenchmarkContainerRun(b, "finch")
	})

	b.Run("BenchmarkContainerPull-docker", func(b *testing.B) {
		suite.BenchmarkContainerPull(b, "docker")
	})

	b.Run("BenchmarkContainerPull-finch", func(b *testing.B) {
		suite.BenchmarkContainerPull(b, "finch")
	})

	b.Run("BenchmarkImageBuild-docker", func(b *testing.B) {
		suite.BenchmarkImageBuild(b, "docker")
	})

	b.Run("BenchmarkImageBuild-finch", func(b *testing.B) {
		suite.BenchmarkImageBuild(b, "finch")
	})

	b.Run("BenchmarkImageDelete-docker", func(b *testing.B) {
		suite.BenchmarkImageDelete(b, "docker")
	})

	b.Run("BenchmarkImageDelete-finch", func(b *testing.B) {
		suite.BenchmarkImageDelete(b, "finch")
	})

}
