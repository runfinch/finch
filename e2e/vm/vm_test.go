// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package vm runs tests related to the virtual machine.
package vm

import (
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
		testVersion(o)
		testVirtualizationFrameworkAndRosetta(o, *e2e.Installed)
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
	})

	return limaConfigFilePath
}
