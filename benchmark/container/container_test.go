// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package container runs benchmark tests related to container development of Finch.
package container

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/benchmark"
)

const (
	virtualMachineRootCmd = "vm"
	alpineImage           = "public.ecr.aws/docker/library/alpine:latest"
	testImageName         = "test:tag"
	testContainerName     = "ctr-test"
)

func BenchmarkContainerRun(b *testing.B) {
	subject, err := benchmark.GetSubject()
	if err != nil {
		b.Fatal(err)
	}
	assert.NoError(b, exec.Command(subject, "pull", alpineImage).Run()) //nolint:gosec // testing only
	benchmark.Wrapper(b, func() {
		assert.NoError(b, exec.Command(subject, "run", "--name", testContainerName, alpineImage).Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(subject, "rm", "--force", testContainerName).Run()) //nolint:gosec // testing only
	})
	assert.NoError(b, exec.Command(subject, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
}

func BenchmarkImageBuild(b *testing.B) {
	subject, err := benchmark.GetSubject()
	if err != nil {
		b.Fatal(err)
	}
	homeDir, err := os.UserHomeDir()
	assert.NoError(b, err)
	tempDir, err := os.MkdirTemp(homeDir, "finch-test")
	assert.NoError(b, err)
	dockerFilePath := filepath.Join(tempDir, "Dockerfile")
	err = os.WriteFile(dockerFilePath, []byte(fmt.Sprintf(`FROM %s
			CMD ["echo", "finch-test-dummy-output"]
			`, alpineImage)), 0o644)
	assert.NoError(b, err)
	buildContext := filepath.Dir(dockerFilePath)
	defer os.RemoveAll(buildContext) //nolint:errcheck // testing only
	benchmark.Wrapper(b, func() {
		assert.NoError(b, exec.Command(subject, "build", "--tag", testImageName, buildContext).Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(subject, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
	})
}
