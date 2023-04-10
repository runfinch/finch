// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package vm runs benchmark tests related to the virtual machine of Finch.
package vm

import (
	"os/exec"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/benchmark"
)

const (
	virtualMachineRootCmd = "vm"
)

func BenchmarkVMInit(b *testing.B) {
	subject, err := benchmark.GetSubject()
	if err != nil {
		b.Fatal(err)
	}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		b.StartTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "init").Run()) //nolint:gosec // testing only
		b.StopTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop", "-f").Run())   //nolint:gosec // testing only
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "remove", "-f").Run()) //nolint:gosec // testing only
	}
}

func BenchmarkVMStart(b *testing.B) {
	subject, err := benchmark.GetSubject()
	if err != nil {
		b.Fatal(err)
	}
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "init").Run())       //nolint:gosec // testing only
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop", "-f").Run()) //nolint:gosec // testing only
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		b.StartTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "start").Run()) //nolint:gosec // testing only
		b.StopTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop", "-f").Run()) //nolint:gosec // testing only
	}
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "remove", "-f").Run()) //nolint:gosec // testing only
}
