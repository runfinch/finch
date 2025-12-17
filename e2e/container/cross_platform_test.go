// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package container

import (
	"runtime"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	alpineImageLatest = "public.ecr.aws/docker/library/alpine:latest"
	busyboxImage      = "public.ecr.aws/docker/library/busybox:latest"
	pythonAlpineImage = "public.ecr.aws/docker/library/python:alpine"
	nodeAlpineImage   = "public.ecr.aws/docker/library/node:lts-alpine"
	helloWorldImage   = "public.ecr.aws/docker/library/hello-world:latest"
)

// testCrossPlatformRun tests running containers with cross-architecture support.
var testCrossPlatformRun = func(o *option.Option) {
	ginkgo.Describe("Run cross-architecture containers", func() {
		ginkgo.BeforeEach(func() {
			if runtime.GOOS == "linux" {
				ginkgo.Skip("Cross-platform tests only run for Darwin and Windows")
			} else {
				command.RemoveAll(o)
			}
		})

		ginkgo.AfterEach(func() {
			command.RemoveAll(o)
		})

		// Determine host architecture and set target architecture
		var targetArch, targetPlatform string
		if runtime.GOARCH == "arm64" {
			targetArch = "x86_64"
			targetPlatform = "linux/amd64"
		} else {
			targetArch = "aarch64"
			targetPlatform = "linux/arm64"
		}

		ginkgo.It("should run Alpine with cross-architecture", func() {
			output := command.StdoutStr(o, "run", "--rm", "--platform", targetPlatform,
				alpineImageLatest, "uname", "-m")
			gomega.Expect(output).To(gomega.Equal(targetArch))
		})

		ginkgo.It("should run Busybox with cross-architecture", func() {
			output := command.StdoutStr(o, "run", "--rm", "--platform", targetPlatform,
				busyboxImage, "uname", "-m")
			gomega.Expect(output).To(gomega.Equal(targetArch))
		})

		ginkgo.It("should run Hello World with cross-architecture", func() {
			output := command.StdoutStr(o, "run", "--rm", "--platform", targetPlatform,
				helloWorldImage)
			gomega.Expect(output).To(gomega.ContainSubstring("Hello from Docker!"))
		})

		ginkgo.It("should run Python  with cross-architecture", func() {
			output := command.StdoutStr(o, "run", "--rm", "--platform", targetPlatform,
				pythonAlpineImage, "python", "-c",
				"import platform; print(platform.machine())")
			gomega.Expect(output).To(gomega.Equal(targetArch))
		})

		ginkgo.It("should run Node.js Alpine with cross-architecture", func() {
			output := command.StdoutStr(o, "run", "--rm", "--platform", targetPlatform,
				nodeAlpineImage, "node", "-e",
				"console.log(process.arch)")

			var expectedNodeArch string
			if targetArch == "x86_64" {
				expectedNodeArch = "x64"
			} else {
				expectedNodeArch = "arm64"
			}

			gomega.Expect(output).To(gomega.Equal(expectedNodeArch))
		})
	})
}
