// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

// Package vm runs tests related to the virtual machine.
package vm

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"

	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/e2e"
)

//nolint:paralleltest // TestVM is like TestMain for the VM-related tests.
func TestVM(t *testing.T) {
	const description = "Finch Virtual Machine E2E Tests"

	o, err := e2e.CreateOption()
	if err != nil {
		t.Fatal(err)
	}

	ginkgo.SynchronizedBeforeSuite(func() []byte {
		resetDisks(o, *e2e.Installed)
		command.New(o, "vm", "init").WithTimeoutInSeconds(160).Run()
		return nil
	}, func(_ []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop", "-f").WithTimeoutInSeconds(90).Run()
		command.New(o, "vm", "remove", "-f").WithTimeoutInSeconds(60).Run()
		resetDisks(o, *e2e.Installed)
	}, func() {})

	ginkgo.Describe("", func() {
		testVMLifecycle(o)
		testAdditionalDisk(o, *e2e.Installed)
		testFinchConfigFile(o)
		testVersion(o)
		testSupportBundle(o)
		testCredHelper(o, *e2e.Installed, *e2e.Registry)
		testSoci(o, *e2e.Installed)
		testMSIInstallPermission(o, *e2e.Installed)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

var resetDisks = func(_ *option.Option, _ bool) {
	finchRootDir := os.Getenv("LOCALAPPDATA")
	dataDiskDir := filepath.Join(finchRootDir, ".finch", ".disks")
	gomega.Expect(os.RemoveAll(dataDiskDir)).ShouldNot(gomega.HaveOccurred())
}

// shutdownWSL is a wrapper function for "wsl --shutdown".
//
// This is a workaround for https://github.com/microsoft/WSL/issues/8529
//
// If WSL is suspected of hanging for longer than 180 seconds, then
// kill the WSL service and retry the shutdown command.
//
// This function will at maximum run for 300 seconds before returning
// context.DeadlineExceeded error.
var shutdownWSL = func() error {
	ctx, cancel := context.WithTimeout(context.Background(), 180*time.Second)
	defer cancel()

	if err := exec.CommandContext(ctx, "wsl", "--shutdown").Run(); err != nil {
		ginkgo.GinkgoLogr.Error(err, "WSL shutdown failed", "time", time.Now().Format(time.RFC3339))

		// wsl might be hung, kill the wsl service and try again.
		// https://github.com/microsoft/WSL/issues/8529
		killCtx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel()

		if err := exec.CommandContext(killCtx, "taskkill", "/f", "/im", "wslservice.exe").Run(); err != nil {
			ginkgo.GinkgoLogr.Error(err, "WSL task kill failed", "time", time.Now().Format(time.RFC3339))
			return fmt.Errorf("unable to kill wsl service: %w", err)
		}

		retryCtx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
		defer cancel()

		if err := exec.CommandContext(retryCtx, "wsl", "--shutdown").Run(); err != nil {
			return fmt.Errorf("unable to shutdown wsl: %w", err)
		}
	}

	return nil
}
