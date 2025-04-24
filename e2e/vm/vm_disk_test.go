// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

func testVMDisk(o *option.Option) {
	ginkgo.Describe("vm disk commands", ginkgo.Serial, func() {
		ginkgo.AfterEach(func() {
			restoreVM(o)
		})

		ginkgo.Context("when VM is running", func() {
			ginkgo.It("should fail to resize disk", func() {
				command.New(o, virtualMachineRootCmd, "disk", "resize", "--size", "60GiB").WithoutSuccessfulExit().Run()
			})

			ginkgo.It("should display disk info", func() {
				result := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
				gomega.Expect(result.Out.Contents()).To(gomega.ContainSubstring("finch"))
			})
		})

		ginkgo.Context("when VM is stopped", func() {
			ginkgo.BeforeEach(func() {
				command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			})

			ginkgo.It("should successfully resize disk", func() {
				// Check initial disk size
				initialResult := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
				gomega.Expect(initialResult.Out.Contents()).To(gomega.ContainSubstring("finch"))
				gomega.Expect(initialResult.Out.Contents()).To(gomega.ContainSubstring("50GiB"))

				// Perform resize operation
				command.New(o, virtualMachineRootCmd, "disk", "resize", "--size", "60GiB").Run()

				// Verify new disk size
				finalResult := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
				gomega.Expect(finalResult.Out.Contents()).To(gomega.ContainSubstring("finch"))
				gomega.Expect(finalResult.Out.Contents()).To(gomega.ContainSubstring("60GiB"))
			})

			ginkgo.It("should fail with invalid size format", func() {
				command.New(o, virtualMachineRootCmd, "disk", "resize", "--size", "60aib").WithoutSuccessfulExit().Run()
			})
		})
	})
}
