// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	savedImage    = "public.ecr.aws/docker/library/alpine:latest"
	containerName = "userDataTest"
)

var testAdditionalDisk = func(o *option.Option) {
	ginkgo.Describe("Additional disk", ginkgo.Serial, func() {
		ginkgo.It("Retains container user data after the VM is deleted", func() {
			command.Run(o, "pull", savedImage)
			oldImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			gomega.Expect(oldImagesOutput).Should(gomega.ContainSubstring(savedImage))

			command.Run(o, "run", "--name", containerName, savedImage)
			oldPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(oldPsOutput).Should(gomega.ContainSubstring(containerName))

			command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(60).Run()
			command.Run(o, virtualMachineRootCmd, "remove")

			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(240).Run()

			newImagesOutput := command.StdoutStr(o, "images", "--format", "{{.Name}}")
			gomega.Expect(newImagesOutput).Should(gomega.Equal(oldImagesOutput))

			newPsOutput := command.StdoutStr(o, "ps", "--all", "--format", "{{.Names}}")
			gomega.Expect(newPsOutput).Should(gomega.Equal(oldPsOutput))

			command.Run(o, "rm", containerName)
			command.Run(o, "rmi", savedImage)
		})
	})
}
