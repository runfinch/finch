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
			// Test Running -> Stopped
			ginkgo.It("should get running status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
				command.Run(o, "images")
			})

			ginkgo.It("should fail to init/remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "remove").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should be able to stop the virtual machine", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
			})

			ginkgo.It("should fail to stop/init", func() {
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
			})

			// Test Stopped -> Running
			ginkgo.It("should be able to start the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
				command.Run(o, "images")
			})

			// Test Running -> NonExistent
			ginkgo.It("should be able to remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "remove", "-f").WithTimeoutInSeconds(90).Run()
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))
			})

			ginkgo.It("should fail to start/stop", func() {
				command.New(o, virtualMachineRootCmd, "start").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
			})

			// Test Stopped -> NonExistent
			ginkgo.It("should be able to remove a stopped vm", func() {
				command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
				command.New(o, virtualMachineRootCmd, "remove").WithTimeoutInSeconds(90).Run()
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))
			})

			// Following state changes are part of synchronization workflows
			// Test NonExistent -> Running
		})
	})
}
