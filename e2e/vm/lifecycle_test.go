// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testVMLifecycle = func(o *option.Option) {
	ginkgo.Describe("virtual machine lifecycle", ginkgo.Serial, ginkgo.Ordered, func() {
		ginkgo.Describe("when the virtual machine is in running status", func() {
			ginkgo.It("should fail to init/remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "remove").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get running status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
			})

			ginkgo.It("should be able to stop the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
				command.RunWithoutSuccessfulExit(o, "images")
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

			ginkgo.It("should be able to force stop the virtual machine after restarting", func() {
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop", "--force").WithTimeoutInSeconds(180).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})

			ginkgo.It("should be able to remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "remove").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})

			ginkgo.It("should fail to start/stop", func() {
				command.New(o, virtualMachineRootCmd, "start").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get nonexistent status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))
			})
		})
	})
}
