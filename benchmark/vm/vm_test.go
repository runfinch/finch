// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package vm runs tests related to the virtual machine.
package vm

import (
	"flag"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
)

const (
	virtualMachineRootCmd = "vm"
)

// InstalledTestSubject is the test subject when Finch is installed.
const InstalledTestSubject = "finch"

// Installed indicates whether the tests are run against installed application.
var Installed = flag.Bool("installed", false, "the flag to show whether the tests are run against installed application")

func BenchmarkVMInit(b *testing.B) {
	subject, err := getSubject()
	if err != nil {
		b.Fatal(err)
	}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		b.StartTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "init").Run()) //nolint:gosec // testing only
		b.StopTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop").Run())   //nolint:gosec // testing only
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "remove").Run()) //nolint:gosec // testing only
	}
}

func BenchmarkVMStart(b *testing.B) {
	subject, err := getSubject()
	if err != nil {
		b.Fatal(err)
	}
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "init").Run()) //nolint:gosec // testing only
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop").Run()) //nolint:gosec // testing only
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		b.StartTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "start").Run()) //nolint:gosec // testing only
		b.StopTimer()
		assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "stop").Run()) //nolint:gosec // testing only
	}
	assert.NoError(b, exec.Command(subject, virtualMachineRootCmd, "remove").Run()) //nolint:gosec // testing only
}

func getSubject() (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("failed to get the current working directory: %w", err)
	}

	subject := filepath.Join(wd, "../../_output/bin/finch")
	if *Installed {
		subject = InstalledTestSubject
	}
	return subject, nil
}
