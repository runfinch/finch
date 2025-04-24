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
		command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
		time.Sleep(1 * time.Second)
		command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
		time.Sleep(1 * time.Second)
		command.New(o, "vm", "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
		return nil
	}, func(_ []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
		time.Sleep(1 * time.Second)
		command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
		time.Sleep(1 * time.Second)
		resetDisks(o, *e2e.Installed)
	}, func() {})

	ginkgo.AfterEach(func() {
		if ginkgo.CurrentSpecReport().Failed() {
			stderrLogPath := filepath.Join(limaDataDirPath(*e2e.Installed), "finch", "ha.stderr.log")
			stdoutLogPath := filepath.Join(limaDataDirPath(*e2e.Installed), "finch", "ha.stdout.log")
			ginkgo.AddReportEntry("ha.stderr.log", string(readFile(stderrLogPath)))
			ginkgo.AddReportEntry("ha.stdout.log", string(readFile(stdoutLogPath)))
		}
	})

	ginkgo.Describe("", func() {
		testVMPrune(o, *e2e.Installed)
		testVMLifecycle(o)
		testAdditionalDisk(o, *e2e.Installed)
		testConfig(o, *e2e.Installed)
		testFinchConfigFile(o)
		testVersion(o)
		testNonDefaultOptions(o, *e2e.Installed)
		testSupportBundle(o)
		testCredHelper(o, *e2e.Installed, *e2e.Registry)
		testSoci(o, *e2e.Installed)
		testVMNetwork(o, *e2e.Installed)
		testDaemon(o, *e2e.Installed)
		testVMDisk(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

var resetDisks = func(_ *option.Option, installed bool) {
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

var shutdownWSL = func() error {
	// no-op on darwin
	return nil
}
