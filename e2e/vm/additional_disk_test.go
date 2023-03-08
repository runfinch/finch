// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	savedImage    = "public.ecr.aws/docker/library/alpine:latest"
	containerName = "userDataTest4"
)

var testAdditionalDisk = func(o *option.Option) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.FIt("Retains container user data after the VM is deleted", func() {
			//command.Run(o, "pull", savedImage)
			////ginkgo.DeferCleanup(command.Run, o, "rmi", "-f", savedImage)
			//oldImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			//gomega.Expect(oldImagesOutput).Should(gomega.ContainSubstring(savedImage))

			command.New(o, "run", "-d", "--name", containerName, savedImage, "sleep", "infinity").WithTimeoutInSeconds(20).Run()
			//ginkgo.DeferCleanup(command.Run, o, "rm", "-f", containerName)
			oldPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(oldPsOutput).Should(gomega.ContainSubstring(containerName))

			command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
			command.Run(o, virtualMachineRootCmd, "remove")
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()

			time.Sleep(2 * time.Second)

			//newImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			//gomega.Expect(newImagesOutput).Should(gomega.Equal(oldImagesOutput))
			//
			//newPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			//gomega.Expect(newPsOutput).Should(gomega.Equal(oldPsOutput))

			command.Run(o, "start", containerName)

			//command.Run(o, "stop", containerName)
			//command.Run(o, "rm", containerName)
			//command.Run(o, "rmi", savedImage)
		})
	})
}
