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
	_ = exec.Command("security", "unlock-keychain", "-p", "", loginKeychainPath).Run()
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

// setupRegistry creates an authenticated registry and returns registry URL and test image tag.
func setupRegistry(o *option.Option) (string, string) {
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

	baseImage := "public.ecr.aws/docker/library/alpine:latest"
	command.Run(o, "pull", baseImage)
	testImageTag := fmt.Sprintf("%s/test-creds:latest", registry)
	command.Run(o, "tag", baseImage, testImageTag)

	return registry, testImageTag
}

// testNativeCredHelper tests native credential helper functionality.
var testNativeCredHelper = func(o *option.Option, installed bool) {
	ginkgo.Describe("Native Credential Helper", func() {
		ginkgo.It("should perform standard operations with osxkeychain credhelper configured", func() {
			cleanupKeychain := setupKeychain()
			ginkgo.DeferCleanup(cleanupKeychain)

			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(300).Run()

			homeDir, err := os.UserHomeDir()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			finchDir := filepath.Join(homeDir, ".finch")
			configPath := filepath.Join(finchDir, "config.json")
			_ = os.Remove(configPath)
			ginkgo.DeferCleanup(os.Remove, configPath)

			registry, testImageTag := setupRegistry(o)

			ginkgo.By("Login auto-creates config with osxkeychain")
			loginResult := command.New(o, "login", registry, "-u", "testUser", "-p", "testPassword").
				WithoutCheckingExitCode().Run()
			gomega.Expect(loginResult.ExitCode()).To(gomega.Equal(0), "Login should succeed")

			configContent, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configContent)).To(
				gomega.ContainSubstring(`"credsStore": "osxkeychain"`),
				"Config should have osxkeychain as credsStore")
			gomega.Expect(string(configContent)).ToNot(gomega.ContainSubstring("testPassword"), "Password should not be stored in config")

			ginkgo.By("Testing push with credentials")
			pushResult := command.New(o, "push", testImageTag).WithoutCheckingExitCode().Run()
			gomega.Expect(pushResult.ExitCode()).To(gomega.Equal(0), "Push should succeed with credentials")

			ginkgo.By("Testing pull with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			pullResult := command.New(o, "pull", testImageTag).WithoutCheckingExitCode().Run()
			gomega.Expect(pullResult.ExitCode()).To(gomega.Equal(0), "Pull should succeed with credentials")

			ginkgo.By("Testing standard run with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			runResult := command.New(o, "run", "--rm", testImageTag, "echo", "test-run").WithoutCheckingExitCode().Run()
			gomega.Expect(runResult.ExitCode()).To(gomega.Equal(0), "Run should succeed with credentials")

			ginkgo.By("Testing detached run with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			detachedResult := command.New(o, "run", "-d", testImageTag, "sleep", "5").WithoutCheckingExitCode().Run()
			gomega.Expect(detachedResult.ExitCode()).To(gomega.Equal(0), "Detached run should succeed with credentials")
			containerID := strings.TrimSpace(string(detachedResult.Out.Contents()))
			command.Run(o, "rm", "-f", containerID)

			ginkgo.By("Testing create with credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			createResult := command.New(o, "create", testImageTag, "echo", "test-create").WithoutCheckingExitCode().Run()
			gomega.Expect(createResult.ExitCode()).To(gomega.Equal(0), "Create should succeed with credentials")
			containerID = strings.TrimSpace(string(createResult.Out.Contents()))
			command.Run(o, "rm", containerID)

			ginkgo.By("Testing build with private base image")
			command.Run(o, "system", "prune", "-f", "-a")
			dockerfileContent := fmt.Sprintf("FROM %s\nRUN echo 'test build'", testImageTag)
			buildDir := ffs.CreateTempDir("build-test")
			ginkgo.DeferCleanup(os.RemoveAll, buildDir)
			err = os.WriteFile(filepath.Join(buildDir, "Dockerfile"), []byte(dockerfileContent), 0o644)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			buildResult := command.New(o, "build", "-t", "test-build", buildDir).WithoutCheckingExitCode().Run()
			gomega.Expect(buildResult.ExitCode()).To(gomega.Equal(0), "Build should succeed with credentials")

			ginkgo.By("Logout removes credentials")
			command.Run(o, "logout", registry)
			configContent, err = os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configContent)).ToNot(gomega.ContainSubstring(registry), "Registry should be removed from auths after logout")

			ginkgo.By("Registry blocks unauthenticated access")
			command.Run(o, "system", "prune", "-f", "-a")
			unauthPullResult := command.New(o, "pull", testImageTag).WithoutCheckingExitCode().Run()
			gomega.Expect(unauthPullResult.ExitCode()).ToNot(gomega.Equal(0), "Registry should block unauthenticated pull")
		})
		ginkgo.It("should work with plaintext config", func() {
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(300).Run()

			homeDir, err := os.UserHomeDir()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			finchDir := filepath.Join(homeDir, ".finch")
			configPath := filepath.Join(finchDir, "config.json")
			ginkgo.DeferCleanup(os.Remove, configPath)

			ginkgo.By("Creating empty plaintext config")
			plaintextConfig := `{}`
			err = os.WriteFile(configPath, []byte(plaintextConfig), 0o644)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			registry, testImageTag := setupRegistry(o)

			ginkgo.By("Login with plaintext config")
			command.Run(o, "login", registry, "-u", "testUser", "-p", "testPassword")

			ginkgo.By("EnsureConfigExists preserves existing config")
			configBefore, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			err = credserver.EnsureConfigExists(finchDir)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			configAfter, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configAfter)).To(gomega.Equal(string(configBefore)), "Config should remain unchanged")

			ginkgo.By("Testing push with plaintext credentials")
			pushResult := command.New(o, "push", testImageTag).WithoutCheckingExitCode().Run()
			gomega.Expect(pushResult.ExitCode()).To(gomega.Equal(0), "Push should succeed with plaintext config")

			ginkgo.By("Testing run with plaintext credentials")
			command.Run(o, "system", "prune", "-f", "-a")
			runResult := command.New(o, "run", "--rm", testImageTag, "echo", "test-run").WithoutCheckingExitCode().Run()
			gomega.Expect(runResult.ExitCode()).To(gomega.Equal(0), "Run should succeed with plaintext config")

			ginkgo.By("Logout removes credentials")
			command.Run(o, "logout", registry)
			configContent, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configContent)).ToNot(gomega.ContainSubstring(registry), "Registry should be removed after logout")

			ginkgo.By("Registry blocks unauthenticated access")
			command.Run(o, "system", "prune", "-f", "-a")
			unauthPullResult := command.New(o, "pull", testImageTag).WithoutCheckingExitCode().Run()
			gomega.Expect(unauthPullResult.ExitCode()).ToNot(gomega.Equal(0), "Registry should block unauthenticated pull")
		})
		ginkgo.It("should manage daemon lifecycle", func() {
			cleanupKeychain := setupKeychain()
			ginkgo.DeferCleanup(cleanupKeychain)

			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(300).Run()

			pidFile := filepath.Join(limaDataDirPath(installed), "finch", "cred-daemon.pid")
			// #nosec G304 -- pidFile path is constructed from user home directory, not user input
			pidData, err := os.ReadFile(pidFile)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred(), "PID file should exist")
			pid := strings.TrimSpace(string(pidData))
			gomega.Expect(pid).ToNot(gomega.BeEmpty(), "PID should not be empty")

			// #nosec G204 -- pid is read from PID file, not user input
			checkCmd := exec.Command("kill", "-0", pid)
			err = checkCmd.Run()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred(), "Daemon process should be running")

			command.Run(o, virtualMachineRootCmd, "stop")

			// #nosec G204 -- pid is read from PID file, not user input
			checkCmd = exec.Command("kill", "-0", pid)
			err = checkCmd.Run()
			gomega.Expect(err).Should(gomega.HaveOccurred(), "Daemon process should be stopped after VM stop")
		})
	})
}
