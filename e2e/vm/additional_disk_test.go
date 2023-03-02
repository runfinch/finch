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
	userNetwork   = "userNetwork"
	userVolume    = "userVolume"
	userFile      = "userFile"
)

var testAdditionalDisk = func(o *option.Option) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.It("Retains container user data after the VM is deleted", func() {
			command.Run(o, "pull", savedImage)
			ginkgo.DeferCleanup(command.Run, o, "rmi", savedImage)
			oldImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			gomega.Expect(oldImagesOutput).Should(gomega.ContainSubstring(savedImage))

			command.Run(o, "volume", "create", userVolume)
			command.Run(o, "run", "--name", containerName, "-v", fmt.Sprintf("%s:/myvolume", userVolume),
				savedImage, "sh", "-c", fmt.Sprintf("touch /myvolume/%s; ls /myvolume", userFile))

			ginkgo.DeferCleanup(command.Run, o, "volume", "rm", userVolume)
			ginkgo.DeferCleanup(command.Run, o, "rm", containerName)
			oldPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(oldPsOutput).Should(gomega.ContainSubstring(containerName))

			command.Run(o, "network", "create", userNetwork)
			ginkgo.DeferCleanup(command.Run, o, "network", "rm", userNetwork)

			command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
			command.Run(o, virtualMachineRootCmd, "remove")

			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()

			newImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			gomega.Expect(newImagesOutput).Should(gomega.Equal(oldImagesOutput))

			newPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(newPsOutput).Should(gomega.ContainSubstring(oldPsOutput))

			networks := command.StdoutStr(o, "network", "ls")
			gomega.Expect(networks).Should(gomega.ContainSubstring(userNetwork))
			gomega.Expect(command.StdoutStr(o, "start", "--attach", containerName)).Should(gomega.Equal(userFile))
		})
	})
}
