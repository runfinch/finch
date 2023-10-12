// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

// Package vm runs tests related to the virtual machine.
package vm

import (
	"errors"
	"io/fs"
	"os"
	"os/exec"
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
		command.New(o, "vm", "init").WithTimeoutInSeconds(600).Run()
		return nil
	}, func(bytes []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop", "-f").WithTimeoutInSeconds(90).Run()
		command.New(o, "vm", "remove", "-f").WithTimeoutInSeconds(60).Run()
	}, func() {})

	ginkgo.Describe("", func() {
		testVMLifecycle(o)
		testAdditionalDisk(o, *e2e.Installed)
		testConfig(o, *e2e.Installed)
		testFinchConfigFile(o)
		testVersion(o)
		testVirtualizationFrameworkAndRosetta(o, *e2e.Installed)
		testSupportBundle(o)
		testCredHelper(o, *e2e.Installed, *e2e.Registry)
		testSoci(o, *e2e.Installed)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

var resetDisks = func(o *option.Option, installed bool) {
	var dataDiskDir string
	limaDisksPath := "lima/data/_disks/"
	if installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realFinchPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		dataDiskDir = filepath.Join(realFinchPath, "..", "..", limaDisksPath)
	} else {
		dataDiskDir = filepath.Join("..", "..", "_output", limaDisksPath)
	}
	realDiskPath, err := os.Readlink(filepath.Join(dataDiskDir, "finch", "datadisk"))
	if err == nil {
		gomega.Expect(os.Remove(realDiskPath)).ShouldNot(gomega.HaveOccurred())
	} else if !errors.Is(err, fs.ErrNotExist) {
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	}
	gomega.Expect(os.RemoveAll(dataDiskDir)).ShouldNot(gomega.HaveOccurred())
}
