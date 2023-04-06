// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

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

const (
	virtualMachineRootCmd = "vm"
)

//nolint:paralleltest // TestVM is like TestMain for the VM-related tests.
func TestVM(t *testing.T) {
	const description = "Finch Virtual Machine E2E Tests"

	o, err := e2e.CreateOption()
	if err != nil {
		t.Fatal(err)
	}

	ginkgo.SynchronizedBeforeSuite(func() []byte {
		command.New(o, "vm", "init").WithTimeoutInSeconds(600).Run()
		return nil
	}, func(bytes []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop", "-f").WithTimeoutInSeconds(90).Run()
		command.New(o, "vm", "remove", "-f").WithTimeoutInSeconds(60).Run()
	}, func() {})

	ginkgo.Describe("", func() {
		testVMLifecycle(o)
		testAdditionalDisk(o)
		testConfig(o, *e2e.Installed)
		testFinchConfigFile(o)
		testVersion(o)
		testVirtualizationFrameworkAndRosetta(o, *e2e.Installed)
		testSupportBundle(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

var resetVM = func(o *option.Option, installed bool) string {
	var limaConfigFilePath string

	origFinchCfg := readFile(finchConfigFilePath)
	limaConfigFilePath = defaultLimaConfigFilePath
	if installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realFinchPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		limaConfigFilePath = filepath.Join(realFinchPath, "../../lima/data/_config/override.yaml")
	}
	origLimaCfg := readFile(limaConfigFilePath)

	command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
	command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()

	ginkgo.DeferCleanup(func() {
		writeFile(finchConfigFilePath, origFinchCfg)
		writeFile(limaConfigFilePath, origLimaCfg)
		command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
		command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
		command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(600).Run()
	})

	return limaConfigFilePath
}

var resetDisks = func(o *option.Option, installed bool) {
	var dataDiskDir string
	limaDisksPath := "lima/data/_disks/"
	if installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realFinchPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		dataDiskDir = filepath.Join(realFinchPath, "../../", limaDisksPath)
	} else {
		dataDiskDir = filepath.Join("../../_output/", limaDisksPath)
	}
	realDiskPath, err := os.Readlink(filepath.Join(dataDiskDir, "finch/datadisk"))
	if err == nil {
		gomega.Expect(os.Remove(realDiskPath)).ShouldNot(gomega.HaveOccurred())
	} else if !errors.Is(err, fs.ErrExist) {
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	}
	gomega.Expect(os.RemoveAll(dataDiskDir)).ShouldNot(gomega.HaveOccurred())
}
