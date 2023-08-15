// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"os"
	"os/exec"
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
		var fpath, realFinchPath, limactlPath, limaHomePathEnv, wd string
		var err error

		ginkgo.BeforeEach(func() {
			// Find lima paths. limactl is used to shell into the Finch VM and verify
			// mounted snapshots match the expected SOCI snapshotter behavior.
			if installed {
				fpath, err = exec.LookPath("finch")
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				realFinchPath, err = filepath.EvalSymlinks(fpath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				limactlPath = filepath.Join(realFinchPath, "../../lima/bin/limactl")
				limaHomePathEnv = "LIMA_HOME=" + filepath.Join(realFinchPath, "../../lima/data")
			} else {
				wd, err = os.Getwd()
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				limactlPath = filepath.Join(wd, "../../_output/lima/bin/limactl")
				limaHomePathEnv = "LIMA_HOME=" + filepath.Join(wd, "../../_output/lima/data")
			}

			limactlO, err = option.New([]string{limactlPath},
				option.Env([]string{limaHomePathEnv}))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
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
