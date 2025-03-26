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
	alpineImage           = "public.ecr.aws/y0o4y9o3/anaconda-pkg-build:latest"
	testImageName         = "test:tag"
	testContainerName     = "ctr-test"
	ligthImage            = "public.ecr.aws/docker/library/amazonlinux:latest"
)

// public.ecr.aws/soci-workshop-examples/mongo:latest public.ecr.aws/soci-workshop-examples/redis:latest public.ecr.aws/docker/library/alpine:latest
// Suite is a struct that groups benchmark functions and shared state.
type Suite struct {
	subject string
	docker  string
}

// Setup initializes the Suite by getting the subject.
func (suite *Suite) Setup() error {
	subject, err := GetSubject()
	if err != nil {
		return err
	}

	docker, err := GetDocker()
	if err != nil {
		return err
	}
	suite.subject = subject
	suite.docker = docker
	return nil
}

// InitVM initializes a virtual machine.
func (suite *Suite) InitVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "init").Run() // #nosec G204
}

// StartVM starts the VM.
func (suite *Suite) StartVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "start", "-f").Run() // #nosec G204
}

// StopVM stops the VM.
func (suite *Suite) StopVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run() // #nosec G204
}

// RemoveVM removes the VM.
func (suite *Suite) RemoveVM() error {
	return exec.Command(suite.subject, virtualMachineRootCmd, "remove", "-f").Run() // #nosec G204
}

// BenchmarkVMInit measures the metrics to initialize the VM.
func (suite *Suite) BenchmarkVMInit(b *testing.B) {
	Wrapper(b, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "init").Run()) //nolint:gosec // testing only
	}, func() {
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "stop", "-f").Run())   //nolint:gosec // testing only
		assert.NoError(b, exec.Command(suite.subject, virtualMachineRootCmd, "remove", "-f").Run()) //nolint:gosec // testing only	})
	})
}

// BenchmarkVMStart measures the metrics to start the VM.
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

// BenchmarkContainerRun measures the metrics to run a container.
func (suite *Suite) BenchmarkContainerRun(b *testing.B, binaryName string) {
	// assert.NoError(b, CleanUpFunc())
	if binaryName == "finch" {
		assert.NoError(b, exec.Command("sudo", suite.subject, "pull", alpineImage).Run()) //nolint:gosec // testing only
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "run", "--name", testContainerName, alpineImage).Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "rm", "--force", testContainerName).Run()) //nolint:gosec // testing only
		})
		assert.NoError(b, exec.Command("sudo", suite.subject, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
	} else {
		// assert.NoError(b, CleanUpFunc())
		assert.NoError(b, exec.Command("sudo", suite.docker, "pull", alpineImage).Run()) //nolint:gosec // testing only
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "run", "--name", testContainerName, alpineImage).Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "rm", "--force", testContainerName).Run()) //nolint:gosec // testing only
		})
		assert.NoError(b, exec.Command("sudo", suite.docker, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
	}

}

func (suite *Suite) BenchmarkContainerPull(b *testing.B, binaryName string) {
	if binaryName == "finch" {
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "pull", alpineImage, "--namespace=finch").Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
		})
	} else {
		assert.NoError(b, exec.Command("sudo", suite.docker, "images", "prune", "-a").Run())
		assert.NoError(b, exec.Command("sudo", suite.docker, "volume", "prune", "-a").Run())
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "pull", alpineImage).Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "rmi", "--force", alpineImage).Run()) //nolint:gosec // testing only
		})
	}
}

// BenchmarkImageBuild measures the metrics to build an image.
func (suite *Suite) BenchmarkImageBuild(b *testing.B, binaryName string) {
	homeDir, err := os.UserHomeDir()
	assert.NoError(b, err)
	tempDir, err := os.MkdirTemp(homeDir, "finch-test")
	assert.NoError(b, err)
	dockerFilePath := filepath.Join(tempDir, "Dockerfile")
	err = os.WriteFile(dockerFilePath, []byte(fmt.Sprintf(`FROM %s
			CMD ["echo", "finch-test-dummy-output"]
			`, alpineImage)), 0o600)
	assert.NoError(b, err)
	buildContext := filepath.Dir(dockerFilePath)
	defer os.RemoveAll(buildContext) //nolint:errcheck // testing only
	// assert.NoError(b, CleanUpFunc())
	if binaryName == "finch" {
		assert.NoError(b, exec.Command("sudo", suite.subject, "builder", "prune").Run())
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "build", "--tag", testImageName, buildContext, "--namespace=finch").Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
		})
	} else {
		// assert.NoError(b, CleanUpFunc())
		assert.NoError(b, exec.Command("sudo", suite.docker, "builder", "prune").Run())
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "build", "--tag", testImageName, buildContext, "--no-cache").Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
		})
	}
}

func (suite *Suite) BenchmarkImageDelete(b *testing.B, binaryImage string) {
	homeDir, err := os.UserHomeDir()
	assert.NoError(b, err)
	tempDir, err := os.MkdirTemp(homeDir, "finch-test")
	assert.NoError(b, err)
	dockerFilePath := filepath.Join(tempDir, "Dockerfile")
	err = os.WriteFile(dockerFilePath, []byte(fmt.Sprintf(`FROM %s
			CMD ["echo", "finch-test-dummy-output"]
			`, alpineImage)), 0o600)
	assert.NoError(b, err)
	buildContext := filepath.Dir(dockerFilePath)
	defer os.RemoveAll(buildContext) //nolint:errcheck // testing only
	if binaryImage == "finch" {
		assert.NoError(b, exec.Command("sudo", suite.subject, "build", "--tag", testImageName, buildContext).Run()) //nolint:gosec // testing only
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.subject, "rmi", "--help").Run())
		})
	} else {
		assert.NoError(b, exec.Command("sudo", suite.docker, "build", "--tag", testImageName, buildContext).Run()) //nolint:gosec // testing only
		Wrapper(b, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "rmi", "--force", testImageName).Run()) //nolint:gosec // testing only
		}, func() {
			assert.NoError(b, exec.Command("sudo", suite.docker, "rmi", "--help").Run())
		})
	}
}
