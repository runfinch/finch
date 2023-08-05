// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testSoci = func(o *option.Option, limactlO *option.Option, limaHomePath string, installed bool) {

	ginkgo.Describe("Soci", func() {
		ginkgo.It("finch pull should have same mounts as nerdctl pull with SOCI", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsoci_snapshotter: true\n"+
				"vmType: qemu\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			command.New(o, "pull", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			command.New(limactlO, "shell", "finch", "sudo", "nerdctl", "pull", FfmpegSociImage).WithTimeoutInSeconds(30).Run().Out.Contents()
			nerdctlPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})
	})

	ginkgo.Describe("Soci", func() {
		ginkgo.It("finch run should have same mounts as nerdctl run with SOCI", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsoci_snapshotter: true\n"+
				"vmType: qemu\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			command.New(o, "run", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			command.New(limactlO, "shell", "finch", "sudo", "nerdctl", "run", FfmpegSociImage).WithTimeoutInSeconds(30).Run().Out.Contents()
			nerdctlPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})
	})

}

// counts the mounts present in the VM after pulling an image
func countMounts(limactlO *option.Option) int {
	mountOutput := string(command.New(limactlO, "shell", "finch", "mount").WithTimeoutInSeconds(30).Run().Out.Contents())
	return strings.Count(mountOutput, sociMountString)
}
