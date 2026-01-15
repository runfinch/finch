// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/ffs"
	"github.com/runfinch/common-tests/fnet"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/pkg/credserver"
)

// Creates a macOS keychain for GitHub Actions CI environment (ec2 user has no default keychain).
// Returns a cleanup function that removes the keychain.
func setupKeychain() func() {
	if os.Getenv("GITHUB_ACTIONS") != "true" {
		return func() {}
	}

	homeDir, err := os.UserHomeDir()
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	keychainsDir := filepath.Join(homeDir, "Library", "Keychains")
	loginKeychainPath := filepath.Join(keychainsDir, "login.keychain-db")
	fmt.Printf("Setting up keychain at: %s\n", loginKeychainPath)

	// Remove existing keychain if present
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "delete-keychain", loginKeychainPath).Run()

	// Create Keychains directory and keychain
	err = os.MkdirAll(keychainsDir, 0o750)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	if err := exec.Command("security", "create-keychain", "-p", "", loginKeychainPath).Run(); err != nil {
		fmt.Printf("Failed to create keychain: %v\n", err)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	}

	// Configure keychain
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "set-keychain-settings", "-t", "0", "-l", loginKeychainPath).Run()
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "unlock-keychain", "-p", keychainPassword, loginKeychainPath).Run()
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "list-keychains", "-s", loginKeychainPath, "/Library/Keychains/System.keychain").Run()
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "default-keychain", "-s", loginKeychainPath).Run()
	// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
	_ = exec.Command("security", "set-keychain-settings", "-t", "3600", "-l", loginKeychainPath).Run()

	fmt.Printf("Keychain setup complete\n")

	return func() {
		// #nosec G204 -- loginKeychainPath is constructed from user home directory, not user input
		_ = exec.Command("security", "delete-keychain", loginKeychainPath).Run()
	}
}

// testNativeCredHelper tests native credential helper functionality.
var testNativeCredHelper = func(o *option.Option, installed bool) {
	ginkgo.Describe("Native Credential Helper", func() {
		ginkgo.It("comprehensive native credential helper workflow", func() {
			ginkgo.By("Setting up CI user keychain")
			cleanupKeychain := setupKeychain()
			ginkgo.DeferCleanup(cleanupKeychain)

			ginkgo.By("Setting up VM")
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()

			ginkgo.By("Verifying daemon is running")
			homeDir, err := os.UserHomeDir()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			pidFile := filepath.Join(limaDataDirPath(installed), "finch", "cred-daemon.pid")
			// #nosec G304 -- pidFile path is constructed from user home directory, not user input
			pidData, err := os.ReadFile(pidFile)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred(), "PID file should exist")
			pid := strings.TrimSpace(string(pidData))
			gomega.Expect(pid).ToNot(gomega.BeEmpty(), "PID should not be empty")

			// Verify process is actually running using kill -0
			// #nosec G204 -- pid is read from PID file, not user input
			checkCmd := exec.Command("kill", "-0", pid)
			err = checkCmd.Run()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred(), "Daemon process should be running")
			fmt.Printf("✓ Daemon running (PID: %s)\n", pid)

			ginkgo.By("Setting up custom registry")
			filename := "htpasswd"
			registryImage := "public.ecr.aws/docker/library/registry:2"
			registryContainer := "auth-registry"
			//nolint:gosec // This password is only used for testing purpose.
			htpasswd := "testUser:$2y$05$wE0sj3r9O9K9q7R0MXcfPuIerl/06L1IsxXkCuUr3QZ8lHWwicIdS"
			htpasswdDir := filepath.Dir(ffs.CreateTempFile(filename, htpasswd))
			ginkgo.DeferCleanup(os.RemoveAll, htpasswdDir)
			port := fnet.GetFreePort()
			containerID := command.StdoutStr(o, "run",
				"-dp", fmt.Sprintf("%d:5000", port),
				"--name", registryContainer,
				"-v", fmt.Sprintf("%s:/auth", htpasswdDir),
				"-e", "REGISTRY_AUTH=htpasswd",
				"-e", "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm",
				"-e", fmt.Sprintf("REGISTRY_AUTH_HTPASSWD_PATH=/auth/%s", filename),
				registryImage)
			ginkgo.DeferCleanup(command.Run, o, "rmi", "-f", registryImage)
			ginkgo.DeferCleanup(command.Run, o, "rm", "-f", registryContainer)
			tries := 0
			for command.StdoutStr(o, "inspect", "-f", "{{.State.Running}}", containerID) != "true" {
				if tries >= 5 {
					ginkgo.Fail("Registry container failed to start after 5 seconds")
				}
				time.Sleep(1 * time.Second)
				tries++
			}
			time.Sleep(10 * time.Second)
			registry := fmt.Sprintf(`localhost:%d`, port)
			fmt.Printf("Registry running at %s\n", registry)

			// 1. Pre-auth baseline: Pull and tag image
			ginkgo.By("Testing credential-less operations")
			baseImage := "public.ecr.aws/docker/library/alpine:latest"
			command.Run(o, "pull", baseImage)
			testImageTag := fmt.Sprintf("%s/test-creds:latest", registry)
			command.Run(o, "tag", baseImage, testImageTag)

			// 2. Delete config and login - should auto-create with osxkeychain
			ginkgo.By("Testing login auto-creates config with osxkeychain")
			finchDir := filepath.Join(homeDir, ".finch")
			configPath := filepath.Join(finchDir, "config.json")
			_ = os.Remove(configPath)
			ginkgo.DeferCleanup(os.Remove, configPath)

			fmt.Printf("Attempting login to registry: %s\n", registry)
			loginResult := command.New(o, "login", registry, "-u", "testUser", "-p", "testPassword").
				WithoutCheckingExitCode().Run()
			fmt.Printf("Login result: exit=%d, stdout=%s, stderr=%s\n",
				loginResult.ExitCode(), string(loginResult.Out.Contents()), string(loginResult.Err.Contents()))
			gomega.Expect(loginResult.ExitCode()).To(gomega.Equal(0), "Login should succeed")

			configContent, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			fmt.Printf("Config after login: %s\n", string(configContent))
			gomega.Expect(string(configContent)).To(
				gomega.ContainSubstring(`"credsStore":"osxkeychain"`),
				"Config should have osxkeychain as credsStore")
			gomega.Expect(string(configContent)).To(gomega.ContainSubstring(registry), "Registry should appear in auths after login")
			gomega.Expect(string(configContent)).ToNot(gomega.ContainSubstring("testPassword"), "Password should not be stored in config")
			fmt.Printf("✓ Config auto-created with osxkeychain\n")

			// 3. Verify EnsureConfigExists preserves existing config
			ginkgo.By("Verifying EnsureConfigExists preserves existing config")
			err = credserver.EnsureConfigExists(finchDir)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			configContentAfter, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configContentAfter)).To(
				gomega.Equal(string(configContent)),
				"Config should remain unchanged after EnsureConfigExists")
			fmt.Printf("✓ Existing config preserved\n")

			// 4. Re-login to verify credentials work
			ginkgo.By("Testing push with credentials")
			pushResult := command.New(o, "push", testImageTag).WithoutCheckingExitCode().Run()
			if pushResult.ExitCode() != 0 {
				fmt.Printf("Push failed: exit=%d, stderr=%s\n", pushResult.ExitCode(), string(pushResult.Err.Contents()))
			}
			gomega.Expect(pushResult.ExitCode()).To(gomega.Equal(0), "Push should succeed with credentials")
			fmt.Printf("✓ Push successful\n")

			// 6. Clean + Pull test
			ginkgo.By("Testing pull with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			pullResult := command.New(o, "pull", testImageTag).WithoutCheckingExitCode().Run()
			if pullResult.ExitCode() != 0 {
				fmt.Printf("Pull failed: exit=%d, stderr=%s\n", pullResult.ExitCode(), string(pullResult.Err.Contents()))
			}
			gomega.Expect(pullResult.ExitCode()).To(gomega.Equal(0), "Pull should succeed with credentials")
			fmt.Printf("✓ Pull successful\n")

			// 7. Clean + Run test (regular and detached)
			ginkgo.By("Testing run with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			runResult := command.New(o, "run", "--rm", testImageTag, "echo", "test-run").WithoutCheckingExitCode().Run()
			if runResult.ExitCode() != 0 {
				fmt.Printf("Run failed: exit=%d, stderr=%s\n", runResult.ExitCode(), string(runResult.Err.Contents()))
			}
			gomega.Expect(runResult.ExitCode()).To(gomega.Equal(0), "Run should succeed with credentials")
			fmt.Printf("✓ Run successful\n")

			command.Run(o, "system", "prune", "-f", "-a")
			detachedResult := command.New(o, "run", "-d", testImageTag, "sleep", "5").WithoutCheckingExitCode().Run()
			if detachedResult.ExitCode() != 0 {
				fmt.Printf("Detached run failed: exit=%d, stderr=%s\n", detachedResult.ExitCode(), string(detachedResult.Err.Contents()))
			}
			gomega.Expect(detachedResult.ExitCode()).To(gomega.Equal(0), "Detached run should succeed with credentials")
			containerID = strings.TrimSpace(string(detachedResult.Out.Contents()))
			command.Run(o, "rm", "-f", containerID)
			fmt.Printf("✓ Detached run successful\n")

			// 7b. Clean + Create test
			ginkgo.By("Testing create with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			createResult := command.New(o, "create", testImageTag, "echo", "test-create").WithoutCheckingExitCode().Run()
			if createResult.ExitCode() != 0 {
				fmt.Printf("Create failed: exit=%d, stderr=%s\n", createResult.ExitCode(), string(createResult.Err.Contents()))
			}
			gomega.Expect(createResult.ExitCode()).To(gomega.Equal(0), "Create should succeed with credentials")
			containerID = strings.TrimSpace(string(createResult.Out.Contents()))
			command.Run(o, "rm", containerID)
			fmt.Printf("✓ Create successful\n")

			// 8. Clean + Build test
			ginkgo.By("Testing build with private base image")
			command.Run(o, "system", "prune", "-f", "-a")
			dockerfileContent := fmt.Sprintf("FROM %s\nRUN echo 'test build'", testImageTag)
			buildDir := ffs.CreateTempDir("build-test")
			ginkgo.DeferCleanup(os.RemoveAll, buildDir)
			err = os.WriteFile(filepath.Join(buildDir, "Dockerfile"), []byte(dockerfileContent), 0o644)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			buildResult := command.New(o, "build", "-t", "test-build", buildDir).WithoutCheckingExitCode().Run()
			if buildResult.ExitCode() != 0 {
				fmt.Printf("Build failed: exit=%d, stderr=%s\n", buildResult.ExitCode(), string(buildResult.Err.Contents()))
			}
			gomega.Expect(buildResult.ExitCode()).To(gomega.Equal(0), "Build should succeed with credentials")
			fmt.Printf("✓ Build successful\n")

			// 9. Logout
			ginkgo.By("Logging out from registry")
			command.Run(o, "logout", registry)

			// 10. Post-logout verification
			ginkgo.By("Verifying post-logout credential removal")
			configContent, err = os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			fmt.Printf("Config after logout: %s\n", string(configContent))
			gomega.Expect(string(configContent)).ToNot(gomega.ContainSubstring(registry), "Registry should be removed from auths after logout")
			fmt.Printf("✓ Credentials removed (verified by config change)\n")

			// Verify registry blocks unauthenticated access
			ginkgo.By("Verifying registry blocks unauthenticated access")
			command.Run(o, "system", "prune", "-f", "-a")
			unauthPullResult := command.New(o, "pull", testImageTag).WithoutCheckingExitCode().Run()
			fmt.Printf("Unauthenticated pull: exit=%d, stderr=%s\n", unauthPullResult.ExitCode(), string(unauthPullResult.Err.Contents()))
			gomega.Expect(unauthPullResult.ExitCode()).ToNot(gomega.Equal(0), "Registry should block unauthenticated pull")
			fmt.Printf("✓ Registry properly blocks unauthenticated access\n")

			// Verify daemon cleanup on VM stop
			ginkgo.By("Stopping VM and verifying daemon cleanup")
			command.Run(o, virtualMachineRootCmd, "stop")

			// Verify process is no longer running
			// #nosec G204 -- pid is read from PID file, not user input
			checkCmd = exec.Command("kill", "-0", pid)
			err = checkCmd.Run()
			gomega.Expect(err).Should(gomega.HaveOccurred(), "Daemon process should be stopped after VM stop")
			fmt.Printf("✓ Daemon stopped cleanly with VM\n")

			// Final cleanup
			ginkgo.By("Final cleanup")
			_ = os.Remove(configPath)
			command.Run(o, virtualMachineRootCmd, "remove", "-f")
			command.Run(o, "system", "prune", "-f", "-a", "--volumes")
		})
	})
}
