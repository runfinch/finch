// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	FfmpegSociImage = "public.ecr.aws/soci-workshop-examples/ffmpeg:latest"
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
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsnapshotter: soci\n"+
				"vmType: qemu\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			command.New(o, "pull", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			command.New(limactlO, "shell", "finch", "sudo", "nerdctl", "--snapshotter=soci", "pull", FfmpegSociImage).WithTimeoutInSeconds(30).Run().Out.Contents()
			nerdctlPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})

		ginkgo.It("finch run should have same mounts as nerdctl run with SOCI", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("cpus: 6\nmemory: 4GiB\nsnapshotter: soci\n"+
				"vmType: qemu\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			command.New(o, "run", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.New(o, "rmi", "-f", FfmpegSociImage).WithTimeoutInSeconds(30).Run()
			command.New(limactlO, "shell", "finch", "sudo", "nerdctl", "--snapshotter=soci", "run", FfmpegSociImage).WithTimeoutInSeconds(30).Run().Out.Contents()
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
