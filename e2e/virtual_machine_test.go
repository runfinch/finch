// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testVirtualMachine = func(o *option.Option) {
	// These tests are run in serial because we only define one virtual machine instance.
	ginkgo.Describe("virtual machine lifecycle", ginkgo.Serial, func() {
		ginkgo.When("the virtual machine is in running status", func() {
			ginkgo.It("should fail to init/remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "remove").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should be able to stop the virtual machine", func() {
				command.Run(o, "images")
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(60).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.When("the virtual machine is in stopped status", func() {
			ginkgo.It("should fail to init/stop", func() {
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "init").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should be able to start the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(120).Run()
				command.Run(o, "images")
			})

			ginkgo.It("should be able to remove the virtual machine", func() {
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(60).Run()
				command.New(o, virtualMachineRootCmd, "remove").WithTimeoutInSeconds(60).Run()
				command.RunWithoutSuccessfulExit(o, "images")
			})
		})

		ginkgo.When("the virtual machine instance does not exist", func() {
			ginkgo.It("should fail to start/stop", func() {
				command.New(o, virtualMachineRootCmd, "start").WithoutSuccessfulExit().Run()
				command.New(o, virtualMachineRootCmd, "stop").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should be able to init", func() {
				command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
				command.Run(o, "images")
			})
		})
	})
}
