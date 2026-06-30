// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testAutoVMStart = func(o *option.Option) {
	ginkgo.Describe("auto vm start", ginkgo.Serial, func() {
		ginkgo.It("should auto-start a stopped VM when running a container command", func() {
			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))

			command.New(o, "info").WithTimeoutInSeconds(240).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
		})

		ginkgo.It("should auto-init a nonexistent VM when running a container command", func() {
			command.New(o, virtualMachineRootCmd, "stop", "-f").WithTimeoutInSeconds(90).Run()
			time.Sleep(1 * time.Second)
			command.New(o, virtualMachineRootCmd, "remove", "-f").WithTimeoutInSeconds(60).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))

			command.New(o, "info").WithTimeoutInSeconds(240).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
		})

		ginkgo.It("should not auto-start when auto_vm_start is disabled", func() {
			origCfg := readFile(finchConfigFilePath)
			ginkgo.DeferCleanup(func() {
				writeFile(finchConfigFilePath, origCfg)
				command.New(o, virtualMachineRootCmd, "start").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()
			})

			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))

			writeFile(finchConfigFilePath, append(origCfg, []byte("\nauto_vm_start: false\n")...))

			command.New(o, "info").WithoutSuccessfulExit().Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
		})
	})
}
