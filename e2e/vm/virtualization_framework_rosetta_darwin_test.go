// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"runtime"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"github.com/runfinch/common-tests/tests"

	finch_cmd "github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
)

var testNonDefaultOptions = func(o *option.Option, installed bool) {
	ginkgo.Describe("Non-default options", ginkgo.Ordered, func() {
		supportsVz, supportsVzErr := config.SupportsVirtualizationFramework(finch_cmd.NewExecCmdCreator())
		gomega.Expect(supportsVzErr).ShouldNot(gomega.HaveOccurred())

		ginkgo.Describe("QEMU", ginkgo.Ordered, func() {
			ginkgo.BeforeAll(func() {
				if !supportsVz {
					ginkgo.Skip("Skipping because default for this system is already QEMU")
				}

				resetVM(o)
				resetDisks(o, installed)
				writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: qemu\nrosetta: false"))
				// vm init with VZ set sometimes takes 2 minutes just to convert the disk to raw
				command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()
				tests.SetupLocalRegistry(o)
				ginkgo.DeferCleanup(func() {
					tests.CleanupLocalRegistry(o)
				})
			})

			// Run sanity check tests
			tests.Build(o)
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
			tests.Port(o)
		})

		ginkgo.Describe("Virtualization framework with Rosetta", ginkgo.Ordered, func() {
			ginkgo.BeforeAll(func() {
				if !supportsVz || runtime.GOOS != "darwin" || runtime.GOARCH != "arm64" {
					ginkgo.Skip("Skipping because system does not support Rosetta")
				}

				resetVM(o)
				resetDisks(o, installed)
				writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: vz\nrosetta: true"))
				// vm init with VZ set sometimes takes 2 minutes just to convert the disk to raw
				command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()
				tests.SetupLocalRegistry(o)
				ginkgo.DeferCleanup(func() {
					tests.CleanupLocalRegistry(o)
				})
			})

			// Run sanity check tests
			tests.Build(o)
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
			tests.Port(o)
		})
	})
}
