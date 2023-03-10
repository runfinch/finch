// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"fmt"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	savedImage    = "public.ecr.aws/docker/library/alpine:latest"
	containerName = "test-ctr"
	volumeName    = "test-volume"
	networkName   = "test-network"
)

var testAdditionalDisk = func(o *option.Option) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.It("Retains container user data after the VM is deleted", func() {
			command.Run(o, "volume", "create", volumeName)
			ginkgo.DeferCleanup(command.Run, o, "volume", "rm", volumeName)
			command.Run(o, "network", "create", networkName)
			ginkgo.DeferCleanup(command.Run, o, "network", "rm", networkName)

			command.Run(o, "run", "-d", "--name", containerName, "-v", fmt.Sprintf("%s:/tmp", volumeName),
				savedImage, "sh", "-c", "sleep infinity")
			command.Run(o, "exec", containerName, "sh", "-c", "echo foo > /tmp/test.txt")
			ginkgo.DeferCleanup(command.Run, o, "rmi", savedImage)
			ginkgo.DeferCleanup(command.Run, o, "rm", "-f", containerName)

			command.Run(o, "kill", containerName)

			command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
			command.Run(o, virtualMachineRootCmd, "remove")
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()

			imageOutput := command.StdoutAsLines(o, "images", "--format", "{{.Name}}")
			gomega.Expect(imageOutput).Should(gomega.ContainElement(savedImage))

			psOutput := command.StdoutAsLines(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(psOutput).Should(gomega.ContainElement(containerName))

			volumeOutput := command.StdoutAsLines(o, "volume", "ls", "--format", "{{.Name}}")
			gomega.Expect(volumeOutput).Should(gomega.ContainElement(volumeName))

			networkOutput := command.StdoutAsLines(o, "network", "ls", "--format", "{{.Name}}")
			gomega.Expect(networkOutput).Should(gomega.ContainElement(networkName))

			command.Run(o, "start", containerName)
			gomega.Expect(command.StdoutStr(o, "exec", containerName, "cat", "/tmp/test.txt")).
				Should(gomega.Equal("foo"))
		})
	})
}
