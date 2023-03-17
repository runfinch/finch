// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"os/exec"
	"path/filepath"
	"runtime"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"github.com/runfinch/common-tests/tests"

	"github.com/runfinch/finch/e2e"
	finch_cmd "github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
)

var testVirtualizationFrameworkAndRosetta = func(o *option.Option, installed bool) {
	ginkgo.Describe("Virtualization framework", ginkgo.Ordered, func() {
		var limaConfigFilePath string

		supportsVz, supportsVzErr := config.SupportsVirtualizationFramework(finch_cmd.NewExecCmdCreator())
		gomega.Expect(supportsVzErr).ShouldNot(gomega.HaveOccurred())

		ginkgo.BeforeEach(func() {
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
		})

		ginkgo.FDescribe("Virtualization framework", ginkgo.Ordered, func() {
			ginkgo.BeforeEach(func() {
				if !supportsVz {
					ginkgo.Skip("Skipping because system does not support Virtualization.framework")
				}

				writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: vz\nrosetta: false"))
				initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(120).Run()
				gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			})

			// Run sanity check tests
			tests.Build(o)
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
			tests.Port(o)
		})

		ginkgo.Describe("Virtualization framework and Rosetta", ginkgo.Ordered, func() {
			ginkgo.BeforeEach(func() {
				if !supportsVz || runtime.GOOS != "darwin" || runtime.GOARCH != "arm64" {
					ginkgo.Skip("Skipping because system does not support Rosetta")
				}

				writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: vz\nrosetta: true"))
				initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(120).Run()
				gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			})

			// Run sanity check tests
			tests.Build(o)
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
			tests.Port(o)
		})
	})
}
