// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package benchmark runs benchmark tests of Finch.
package benchmark

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
)

const (
	virtualMachineRootCmd = "vm"
	alpineImage           = "public.ecr.aws/docker/library/alpine:latest"
	testImageName         = "test:tag"
	testContainerName     = "ctr-test"
)

type Suite struct {
	subject string
}

func (suite *Suite) Setup() error {
	subject, err := GetSubject()
	if err != nil {
		return err
	}
	suite.subject = subject
	return nil
}

func (suite *Suite) InitVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "init").Run()
}

func (suite *Suite) StartVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "start", "-f").Run()
}

func (suite *Suite) StopVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run()
}

func (suite *Suite) RemoveVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "remove", "-f").Run()
}

func (suite *Suite) BenchmarkVMInit(b *testing.B) {
	Wrapper(b, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "init").Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run())   //nolint:gosec // testing only
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "remove", "-f").Run()) //nolint:gosec // testing only	})
	})
}

func (suite *Suite) BenchmarkVMStart(b *testing.B) {
	assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "init").Run())       //nolint:gosec // testing only
	assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run()) //nolint:gosec // testing only
	b.ResetTimer()
	Wrapper(b, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "start").Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run()) //nolint:gosec // testing only
	})
	assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "remove", "-f").Run()) //nolint:gosec // testing only
}

func (suite *Suite) BenchmarkContainerRun(b *testing.B) {
	assert.NoError(b, exec.Command(suite.subject, "pull", alpineImage).Run()) //nolint:gosec // testing only
	Wrapper(b, func() {
		assert.NoError(b, exec.Command(suite.subject, "run", "--name", testContainerName, alpineImage).Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(suite.subject, "rm", "--force", testContainerName).Run()) //nolint:gosec // testing only
	})
	assert.NoError(b, exec.Command(suite.subject, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
}

func (suite *Suite) BenchmarkImageBuild(b *testing.B) {
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
	Wrapper(b, func() {
		assert.NoError(b, exec.Command(suite.subject, "build", "--tag", testImageName, buildContext).Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(suite.subject, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
	})
}
