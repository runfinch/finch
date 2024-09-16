// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/ffs"
	"github.com/runfinch/common-tests/fnet"
	"github.com/runfinch/common-tests/option"
)

const (
	ffmpegSociImage = "public.ecr.aws/soci-workshop-examples/ffmpeg:latest"
	registryImage   = "public.ecr.aws/docker/library/registry:latest"
	ubuntuImage     = "public.ecr.aws/docker/library/ubuntu:23.10"
	sociMountString = "fuse.rawBridge"
)

var testSoci = func(o *option.Option, installed bool) {
	ginkgo.Describe("SOCI", func() {
		var limactlO *option.Option
		var fpath, realFinchPath, limactlPath, limaHomePathEnv, wd, vmType string
		var err error
		var port int

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
			if runtime.GOOS == "windows" {
				vmType = "wsl2"
			} else {
				vmType = "qemu"
			}
		})

		ginkgo.It("finch pull should have same mounts as nerdctl pull with SOCI", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte(fmt.Sprintf("cpus: 6\nmemory: 4GiB\nsnapshotters:\n    "+
				"- soci\nvmType: %s\nrosetta: false", vmType)))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
			command.New(o, "pull", "--snapshotter=soci", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			command.New(limactlO, "shell", "finch",
				"sudo", "nerdctl", "--snapshotter=soci", "pull", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			nerdctlPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})

		ginkgo.It("finch run should have same mounts as nerdctl run with SOCI", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte(fmt.Sprintf("cpus: 6\nmemory: 4GiB\nsnapshotters:\n    "+
				"- soci\nvmType: %s\nrosetta: false", vmType)))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
			command.New(o, "run", "--snapshotter=soci", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			finchPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			command.New(limactlO, "shell", "finch",
				"sudo", "nerdctl", "--snapshotter=soci", "run", ffmpegSociImage).WithTimeoutInSeconds(30).Run()
			nerdctlPullMounts := countMounts(limactlO)
			command.Run(o, "rmi", "-f", ffmpegSociImage)
			gomega.Expect(finchPullMounts).Should(gomega.Equal(nerdctlPullMounts))
		})
		ginkgo.It("finch push should work", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte(fmt.Sprintf("cpus: 6\nmemory: 4GiB\nsnapshotters:\n    "+
				"- soci\nvmType: %s\nrosetta: false", vmType)))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
			port = fnet.GetFreePort()
			command.New(o, "run", "-dp", fmt.Sprintf("%d:5000", port), "--name", "registry", registryImage).
				WithTimeoutInSeconds(30).Run()
			buildContext := ffs.CreateBuildContext(fmt.Sprintf(`FROM %s
		CMD ["echo", "bar"]
			`, ubuntuImage))
			ginkgo.DeferCleanup(os.RemoveAll, buildContext)
			targetTag := fmt.Sprintf(`localhost:%d/test-push-soci:tag`, port)
			command.New(o, "build", "-t", targetTag, buildContext).WithTimeoutInSeconds(30).Run()
			testSociSpanSize := 2097152      // 2MiB
			testSociMinLayerSize := 20971520 // 20MiB
			command.New(o, "push", "--insecure-registry", "--snapshotter=soci", fmt.Sprintf("--soci-span-size=%d", testSociSpanSize),
				fmt.Sprintf("--soci-min-layer-size=%d", testSociMinLayerSize), targetTag).WithTimeoutInSeconds(30).Run()
			indexOutput := command.StdoutStr(limactlO, "shell", "finch", "sudo", "soci", "index", "list")
			gomega.Expect(indexOutput).Should(gomega.ContainSubstring(targetTag))
		})
	})
}

// counts the mounts present in the VM after pulling an image.
func countMounts(limactlO *option.Option) int {
	mountOutput := command.StdoutStr(limactlO, "shell", "finch", "mount")
	return strings.Count(mountOutput, sociMountString)
}
