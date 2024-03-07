// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

// Package vm runs tests related to the virtual machine.
package vm

import (
	"os"
	"path/filepath"
	"testing"

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
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

var resetDisks = func(_ *option.Option, _ bool) {
	finchRootDir := os.Getenv("LOCALAPPDATA")
	dataDiskDir := filepath.Join(finchRootDir, ".finch", ".disks")
	gomega.Expect(os.RemoveAll(dataDiskDir)).ShouldNot(gomega.HaveOccurred())
}
