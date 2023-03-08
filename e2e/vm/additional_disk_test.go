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
	containerName = "userDataTest"
	volumeName    = "test-volume"
	text          = "foo"
)

var testAdditionalDisk = func(o *option.Option) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.FIt("should retain all user data and able to start the created container after the VM is deleted", func() {
			command.Run(o, "pull", savedImage)
			gomega.Expect(command.StdoutAsLines(o, "images", "--format", "{{.Name}}")).
				Should(gomega.ContainElement(savedImage))

			command.Run(o, "volume", "create", volumeName)
			gomega.Expect(command.StdoutAsLines(o, "volume", "ls", "--format", "{{.Name}}")).
				Should(gomega.ContainElement(volumeName))

			//command.Run(o, "network", "create", networkName)
			//oldNetworkOutput := command.StdoutAsLines(o, "network", "ls", "--format", "{{.Name}}")
			//gomega.Expect(oldNetworkOutput).Should(gomega.ContainElement(networkName))

			command.Run(o, "run", "-d", "--name", containerName, "-v", fmt.Sprintf("%s:/tmp", volumeName), savedImage,
				"sh", "-c", fmt.Sprintf("echo %s > /tmp/test.txt; sleep infinity", text))
			oldPsOutput := command.StdoutAsLines(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(oldPsOutput).Should(gomega.ContainElement(containerName))

			command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
			command.Run(o, virtualMachineRootCmd, "remove")
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()

			newImagesOutput := command.StdoutAsLines(o, "images", "--format", "{{.Name}}")
			gomega.Expect(newImagesOutput).Should(gomega.ContainElement(savedImage))

			newPsOutput := command.StdoutAsLines(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(newPsOutput).Should(gomega.ContainElement(containerName))

			newVolumeOutput := command.StdoutAsLines(o, "volume", "ls", "--format", "{{.Name}}")
			gomega.Expect(newVolumeOutput).Should(gomega.ContainElement(volumeName))

			//newNetworkOutput := command.StdoutAsLines(o, "network", "ls", "--format", "{{.Name}}")
			//gomega.Expect(newNetworkOutput).Should(gomega.ContainElement(oldNetworkOutput))

			command.Run(o, "start", containerName)
			textOutput := command.StdoutStr(o, "exec", containerName, "cat", "/tmp/test.txt")
			gomega.Expect(textOutput).Should(gomega.Equal(text))

			//ginkgo.DeferCleanup(command.Run, o, "network", "rm", networkName)
			ginkgo.DeferCleanup(command.Run, o, "rmi", savedImage)
			ginkgo.DeferCleanup(command.Run, o, "volume", "rm", volumeName)
			ginkgo.DeferCleanup(command.Run, o, "rm", "-f", containerName)
		})
	})
}
