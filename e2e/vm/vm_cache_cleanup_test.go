// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"fmt"
	"strings"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/ffs"
	"github.com/runfinch/common-tests/option"
)

var testVMPrune = func(o *option.Option, installed bool) {
	ginkgo.Describe("Test System Prune Cleans Up Build Cache, Images, Containers", func() {
		ginkgo.It("check prune cleans up build cache, images and containers", func() {
			limaCtlO, err := limaCtlOpt(installed)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			command.Stdout(limaCtlO, "shell", "finch", "mount")
			setupTestContainer(o)
			verifyResourcesExist(o, limaCtlO)
			restartVM(o)
			verifyResourcesExist(o, limaCtlO)

			// Run system prune
			pruneOutput := command.StdoutStr(o, "system", "prune", "--all", "--force")
			gomega.Expect(strings.TrimSpace(pruneOutput)).ToNot(gomega.Equal(""),
				"System prune should produce output indicating resources were cleaned")

			// Verify all resources are cleaned up after prune
			verifyResourcesCleaned(o, limaCtlO)
		})
	})
}

func setupTestContainer(o *option.Option) {
	alpineImage := "public.ecr.aws/docker/library/alpine:latest"
	buildContext := ffs.CreateBuildContext(fmt.Sprintf(`FROM %s
	CMD ["echo", "finch-test-dummy-output"]
	`, alpineImage))

	command.Run(o, "build", "-t", "test:tag", buildContext)
	command.Run(o, "run", "--name", "test-container", "test:tag")
	// TODO: Fix Issue with nerdctl namestore when we try to delete with prune
	// name-store error\ncannot release name \"test-4c8e9\" (used by ID \"\", not by <>
	command.Run(o, "container", "rm", "-f", "test-container")
}

func verifyResourcesExist(o *option.Option, limaCtlO *option.Option) {
	gomega.Expect(command.StdoutStr(o, "images", "-q")).ToNot(gomega.BeEmpty(),
		"Expected at least one image to exist")
	buildCacheOutput := command.Stdout(limaCtlO, "shell", "finch", "sudo", "buildctl", "du", "--format=json")
	gomega.Expect(strings.TrimSpace(string(buildCacheOutput))).ToNot(gomega.Equal("null"),
		"Expected build cache to exist")
}

func restartVM(o *option.Option) {
	command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
	time.Sleep(5 * time.Second)
	command.New(o, "vm", "init").WithTimeoutInSeconds(160).Run()
}

func verifyResourcesCleaned(o *option.Option, limaCtlO *option.Option) {
	gomega.Expect(command.StdoutStr(o, "images", "ls", "-q")).To(gomega.Equal(""),
		"Expected no images after prune")
	gomega.Expect(command.StdoutStr(o, "container", "ls", "-a", "-q")).To(gomega.Equal(""),
		"Expected no containers after prune")
	buildCacheOutput := command.Stdout(limaCtlO, "shell", "finch", "sudo", "buildctl", "du", "--format=json")
	gomega.Expect(strings.TrimSpace(string(buildCacheOutput))).To(gomega.Equal("null"),
		"Expected build cache to be cleaned up after prune")
}
