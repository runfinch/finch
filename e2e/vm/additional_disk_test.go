// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"fmt"
	"time"

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

var testAdditionalDisk = func(o *option.Option, installed bool) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.It("Retains container user data after the VM is deleted", func() {
			resetVM(o)
			resetDisks(o, installed)
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
			command.Run(o, "volume", "create", volumeName)
			ginkgo.DeferCleanup(command.Run, o, "volume", "rm", volumeName)
			command.Run(o, "network", "create", networkName)
			ginkgo.DeferCleanup(command.Run, o, "network", "rm", networkName)

			command.Run(o, "run", "-d", "--name", containerName, "-v", fmt.Sprintf("%s:/tmp", volumeName),
				savedImage, "sleep", "infinity")
			command.Run(o, "exec", containerName, "sh", "-c", "echo foo > /tmp/test.txt")
			ginkgo.DeferCleanup(command.Run, o, "rmi", savedImage)
			ginkgo.DeferCleanup(command.Run, o, "rm", "-f", containerName)

			command.New(o, "stop", containerName).WithTimeoutInSeconds(30).Run()
			time.Sleep(20 * time.Second)
			command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			time.Sleep(1 * time.Second)
			command.New(o, virtualMachineRootCmd, "remove").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			time.Sleep(1 * time.Second)
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()

			imageOutput := command.StdoutAsLines(o, "images", "--format", "{{.Name}}")
			gomega.Expect(imageOutput).Should(gomega.ContainElement(savedImage))

			// Changed in nerdctl v1.5 to [<name>] https://github.com/containerd/nerdctl/commit/11d80f274257c064924f40bd007756110d863a16
			// And it changed back to <name> after upgrate to nerdctl v1.7.1
			psOutput := command.StdoutAsLines(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(psOutput).Should(gomega.ContainElement(containerName))

			volumeOutput := command.StdoutAsLines(o, "volume", "ls", "--format", "{{.Name}}")
			gomega.Expect(volumeOutput).Should(gomega.ContainElement(volumeName))

			networkOutput := command.StdoutAsLines(o, "network", "ls", "--format", "{{.Name}}")
			gomega.Expect(networkOutput).Should(gomega.ContainElement(networkName))

			command.Run(o, "start", containerName)
			gomega.Eventually(command.StdoutStr(o, "exec", containerName, "cat", "/tmp/test.txt")).
				WithTimeout(15 * time.Second).
				WithPolling(1 * time.Second).
				Should(gomega.Equal("foo"))
		})
	})
}
