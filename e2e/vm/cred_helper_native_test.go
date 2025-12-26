// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

// testNativeCredHelper is unused in current test suite but kept for future use.
//nolint:unused
var testNativeCredHelper = func(o *option.Option, installed bool) {
	ginkgo.Describe("Native Credential Helper", func() {
		ginkgo.It("should support registry workflow with build and push", func() {
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
			
			// Setup local registry
			registryPort := "5000"
			registryName := "localhost:" + registryPort
			command.New(o, "run", "-d", "-p", registryPort+":5000", "--name", "test-registry", "registry:2").Run()
			
			// Login to local registry
			command.New(o, "login", registryName, "-u", "test", "-p", "test").WithoutCheckingExitCode().Run()
			
			// Pull, tag and push single image
			command.New(o, "pull", "public.ecr.aws/docker/library/alpine:latest").WithTimeoutInSeconds(300).Run()
			command.New(o, "tag", "public.ecr.aws/docker/library/alpine:latest", registryName+"/alpine:test").Run()
			command.New(o, "push", registryName+"/alpine:test").WithTimeoutInSeconds(300).Run()
			
			// Build and push dockerfile
			tmpDir := "/tmp/finch-test-build"
			command.New(o, "run", "--rm", "-v", tmpDir+":/workspace", "alpine", "sh", "-c",
				"mkdir -p /workspace && echo 'FROM alpine\nRUN echo test' > /workspace/Dockerfile").Run()
			command.New(o, "build", "-t", registryName+"/test-build", tmpDir).Run()
			command.New(o, "push", registryName+"/test-build").WithTimeoutInSeconds(300).Run()
			
			// Clear local images and test pull from registry
			command.New(o, "system", "prune", "-f", "-a").Run()
			command.New(o, "run", "--rm", registryName+"/alpine:test", "echo", "success").WithTimeoutInSeconds(300).Run()
			command.New(o, "run", "--rm", registryName+"/test-build", "echo", "build-success").WithTimeoutInSeconds(300).Run()
			
			// Cleanup
			command.New(o, "stop", "test-registry").WithoutCheckingExitCode().Run()
			command.New(o, "rm", "test-registry").WithoutCheckingExitCode().Run()
		})
		
		ginkgo.It("should handle concurrent credential operations", func() {
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
			
			// Test concurrent pulls of same image to stress credential system
			var wg sync.WaitGroup
			concurrentOps := 5
			wg.Add(concurrentOps)
			for i := 0; i < concurrentOps; i++ {
				go func() {
					defer wg.Done()
					command.New(o, "pull", "public.ecr.aws/docker/library/alpine:latest").WithTimeoutInSeconds(300).Run()
				}()
			}
			wg.Wait()
		})
		
		ginkgo.It("should create and cleanup credential socket", func() {
			socketPath := filepath.Join("..", "..", "_output", "lima", "data", "finch", "sock", "creds.sock")
			
			var socketSeen bool
			done := make(chan struct{})
			
			// Background watcher
			go func() {
				for {
					select {
					case <-done:
						return
					default:
						if _, err := os.Stat(socketPath); err == nil {
							socketSeen = true
						}
					}
				}
			}()
			
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
			command.New(o, "pull", "public.ecr.aws/docker/library/postgres:latest").WithTimeoutInSeconds(300).Run()
			
			close(done)
			time.Sleep(10 * time.Millisecond)
			
			gomega.Expect(socketSeen).To(gomega.BeTrue(), "credential socket should exist during operations")
		})
		
		ginkgo.It("should have secure credential helper installation", func() {
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
			
			var helperName string
			if os.Getenv("GOOS") == "windows" {
				helperName = "docker-credential-wincred.exe"
			} else {
				helperName = "docker-credential-osxkeychain"
			}
			
			// Check original binary in _output/cred-helpers (should be 755)
			origBinaryPath := filepath.Join("..", "..", "_output", "cred-helpers", helperName)
			if info, err := os.Stat(origBinaryPath); err == nil {
				gomega.Expect(info.Mode().Perm()).To(gomega.Equal(os.FileMode(0755)), "original credential helper binary should have 755 permissions")
			}
			
			homeDir, _ := os.UserHomeDir()
			
			// Check credential helper directory permissions
			credHelperDir := filepath.Join(homeDir, ".finch", "cred-helpers")
			info, err := os.Stat(credHelperDir)
			gomega.Expect(err).NotTo(gomega.HaveOccurred(), "credential helper directory should exist")
			gomega.Expect(info.Mode().Perm()).To(gomega.Equal(os.FileMode(0755)), "credential helper directory should have 755 permissions")
			
			// Check credential helper symlink exists
			helperPath := filepath.Join(credHelperDir, helperName)
			_, err = os.Lstat(helperPath)
			gomega.Expect(err).NotTo(gomega.HaveOccurred(), "credential helper symlink should exist")
			
			// Check socket directory permissions
			socketDir := filepath.Join("..", "..", "_output", "lima", "data", "finch", "sock")
			if info, err := os.Stat(socketDir); err == nil {
				gomega.Expect(info.Mode().Perm()).To(gomega.Equal(os.FileMode(0750)), "socket directory should have 750 permissions")
			}
			
			// Check VM socket permissions (should be 600)
			limaHome := filepath.Join("..", "..", "_output", "lima", "data")
			limaBin := filepath.Join("..", "..", "_output", "lima", "bin", "limactl")
			err = os.Setenv("LIMA_HOME", limaHome)
			gomega.Expect(err).NotTo(gomega.HaveOccurred(), "should be able to set LIMA_HOME")
			command.New(o, limaBin, "shell", "finch", "stat", "-c", "%a", "/run/finch-user-sockets/creds.sock").WithoutCheckingExitCode().Run()
		})
	})
}