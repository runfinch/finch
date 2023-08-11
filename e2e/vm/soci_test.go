// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	ffmpegSociImage = "public.ecr.aws/soci-workshop-examples/ffmpeg:latest"
	sociMountString = "fuse.rawBridge"
)

var testSoci = func(o *option.Option, installed bool) {
	ginkgo.Describe("SOCI", func() {
		var limactlO *option.Option
		var limaHomePathEnv string
		var wd string
		var err error

		ginkgo.BeforeEach(func() {
			wd, err = os.Getwd()
			gomega.Expect(err).Should(gomega.BeNil())
			limaHomePathEnv = "LIMA_HOME=" + filepath.Join(wd, "../../_output/lima/data")
			limactlO, err = option.New([]string{filepath.Join(wd, "../../_output/lima/bin/limactl")},
				option.Env([]string{limaHomePathEnv}))
			gomega.Expect(err).Should(gomega.BeNil())
		})

		ginkgo.It("finch pull should have same mounts as nerdctl pull with SOCI", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsnapshotters:\n    "+
				"- soci\nvmType: qemu\nrosetta: false"))
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			command.New(o, "pull", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			command.New(limactlO, "shell", "finch",
				"sudo", "nerdctl", "--snapshotter=soci", "pull", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			nerdctlPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})

		ginkgo.It("finch run should have same mounts as nerdctl run with SOCI", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsnapshotters:\n    "+
				"- soci\nvmType: qemu\nrosetta: false"))
			command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			command.New(o, "run", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			command.New(limactlO, "shell", "finch",
				"sudo", "nerdctl", "--snapshotter=soci", "run", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			nerdctlPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})
	})
}

// counts the mounts present in the VM after pulling an image.
func countMounts(limactlO *option.Option) int {
	mountOutput := command.StdoutStr(limactlO, "shell", "finch", "mount")
	return strings.Count(mountOutput, sociMountString)
}
