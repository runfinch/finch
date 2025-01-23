// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"runtime"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var restoreVM = func(o *option.Option) {
	origFinchCfg := readFile(finchConfigFilePath)
	writeFile(finchConfigFilePath, origFinchCfg)
	command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
	time.Sleep(1 * time.Second)
	command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(10).Run()
	time.Sleep(1 * time.Second)
	if runtime.GOOS == "windows" {
		// clean up iptables
		//nolint:lll // link to explanation
		// https://docs.rancherdesktop.io/troubleshooting-tips/#q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run
		gomega.Expect(shutdownWSL()).Should(gomega.BeNil())
	}
	time.Sleep(1 * time.Second)
	command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
}

var testVMLifecycle = func(o *option.Option) {
	ginkgo.Describe("virtual machine lifecycle", ginkgo.Serial, func() {
		ginkgo.Describe("when the virtual machine is in running status", func() {
			ginkgo.AfterEach(func() {
				restoreVM(o)
			})

			ginkgo.It("should fail to init/remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "remove").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get running status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
			})

			ginkgo.It("should be able to force stop the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop", "--force").WithTimeoutInSeconds(180).Run()
				command.RunWithoutSuccessfulExit(o, "images")
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()
			})

			ginkgo.It("should be able to force remove the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "remove", "--force").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})

			ginkgo.It("should be able to stop the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.Describe("when the virtual machine is in stopped status", func() {
			ginkgo.BeforeEach(func() {
				command.New(o, virtualMachineRootCmd, "stop", "--force").WithTimeoutInSeconds(90).Run()
			})

			ginkgo.AfterEach(func() {
				restoreVM(o)
			})

			ginkgo.It("should fail to init/stop", func() {
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get stopped status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
			})

			ginkgo.It("should be able to start the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			})

			ginkgo.It("should be able to remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "remove").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})

			ginkgo.It("should be able to force remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "remove", "--force").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.Describe("when the virtual machine instance does not exist", func() {
			ginkgo.BeforeEach(func() {
				command.New(o, virtualMachineRootCmd, "remove", "--force").WithTimeoutInSeconds(160).Run()
			})

			ginkgo.AfterEach(func() {
				restoreVM(o)
			})

			ginkgo.It("should fail to start/stop", func() {
				command.New(o, virtualMachineRootCmd, "start").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get nonexistent status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))
			})

			ginkgo.It("should be able to init", func() {
				command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
				command.Run(o, "images")
			})
		})
	})
}
