// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testVMLifecycle = func(o *option.Option) {
	// These tests are run in serial because we only define one virtual machine instance.
	ginkgo.Describe("virtual machine lifecycle", ginkgo.Serial, func() {
		ginkgo.When("the virtual machine is in running status", func() {
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
				command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
			})

			ginkgo.It("should be able to stop the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.When("the virtual machine is in stopped status", func() {
			ginkgo.It("should fail to init/stop", func() {
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should get stopped status", func() {
				gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
			})

			ginkgo.It("should be able to start the virtual machine", ginkgo.FlakeAttempts(3), func() {
				// TODO: Remove FlakeAttempts
				// vm start should happen in around 20 seconds if everything is working as expected
				// sometimes it fails, but the failure timeout is 1 minute. Clamping to 30 seconds and
				// allowing 3 tries will still be faster than the previous behavior.
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(30).Run()
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			})

			ginkgo.It("should be able to remove the virtual machine", func() {
				// don't asssume the VM will be in a stopped state (e.g. if the previous test fails)
				command.New(o, virtualMachineRootCmd, "stop", "--force").WithTimeoutInSeconds(90).Run()
				command.New(o, virtualMachineRootCmd, "remove").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
				command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(160).Run()
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			})
			ginkgo.It("should be able to force remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "remove", "--force").WithTimeoutInSeconds(160).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.When("the virtual machine instance does not exist", func() {
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
