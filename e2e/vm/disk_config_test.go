// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"os"
	"path/filepath"

	"github.com/lima-vm/lima/v2/pkg/limatype"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gbytes"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"gopkg.in/yaml.v3"
)

var testDiskConfig = func(o *option.Option, installed bool) {
	ginkgo.Describe("Disk config (bootdisk and datadisk)", ginkgo.Serial, func() {
		ginkgo.It("should apply bootdisk and datadisk from config on vm init", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\nbootdisk: 120GiB\ndatadisk: 60GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Verify bootdisk is set in override.yaml (lima Disk field)
			overrideConfigFilePath := filepath.Join(limaDataDirPath(installed), "_config", "override.yaml")
			gomega.Expect(overrideConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(filepath.Clean(overrideConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			var limaCfg limatype.LimaYAML
			err = yaml.Unmarshal(cfgBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(limaCfg.Disk).ShouldNot(gomega.BeNil())
			gomega.Expect(*limaCfg.Disk).Should(gomega.Equal("120GiB"))

			// Verify datadisk size via disk info
			result := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
			gomega.Expect(result.Out.Contents()).To(gomega.ContainSubstring("60GiB"))
		})

		ginkgo.It("should update bootdisk and datadisk via vm settings command", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\nbootdisk: 100GiB\ndatadisk: 50GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Update bootdisk and datadisk via settings
			command.New(o, virtualMachineRootCmd, "settings", "--bootdisk=120GiB", "--datadisk=70GiB").Run()

			// Verify config file was updated
			cfgBuf, err := os.ReadFile(filepath.Clean(finchConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(cfgBuf)).Should(gomega.ContainSubstring("bootdisk: 120GiB"))
			gomega.Expect(string(cfgBuf)).Should(gomega.ContainSubstring("datadisk: 70GiB"))
		})

		ginkgo.It("should warn when reducing data disk size on vm start", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 60GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Reduce datadisk in config and restart
			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 50GiB"))
			session := command.New(o, virtualMachineRootCmd, "start").
				WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// VM should still start successfully but warn about shrink
			gomega.Expect(session).Should(gexec.Exit(0))
			gomega.Expect(session.Err).Should(gbytes.Say("Shrinking the data disk is not supported"))
		})

		ginkgo.It("should warn when reducing data disk size on vm init", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 60GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Remove VM but keep disks, then re-init with smaller datadisk
			command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 50GiB"))
			session := command.New(o, virtualMachineRootCmd, "init").
				WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			gomega.Expect(session).Should(gexec.Exit(0))
			gomega.Expect(session.Err).Should(gbytes.Say("Shrinking the data disk is not supported"))
		})

		ginkgo.It("should successfully resize data disk on vm start after config increase", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 50GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Increase datadisk in config and restart
			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\ndatadisk: 60GiB"))
			command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()

			// Verify new disk size
			result := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
			gomega.Expect(result.Out.Contents()).To(gomega.ContainSubstring("60GiB"))
		})

		ginkgo.It("should validate boot and data disk sizes after vm init", func() {
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 2\nbootdisk: 110GiB\ndatadisk: 55GiB"))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			// Validate bootdisk in override.yaml
			overrideConfigFilePath := filepath.Join(limaDataDirPath(installed), "_config", "override.yaml")
			cfgBuf, err := os.ReadFile(filepath.Clean(overrideConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			var limaCfg limatype.LimaYAML
			err = yaml.Unmarshal(cfgBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(limaCfg.Disk).ShouldNot(gomega.BeNil())
			gomega.Expect(*limaCfg.Disk).Should(gomega.Equal("110GiB"))

			// Validate datadisk via disk info
			result := command.New(o, virtualMachineRootCmd, "disk", "info").Run()
			gomega.Expect(result.Out.Contents()).To(gomega.ContainSubstring("55GiB"))

			// Validate after stop/start cycle
			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()

			overrideBuf, err := os.ReadFile(filepath.Clean(overrideConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			err = yaml.Unmarshal(overrideBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(*limaCfg.Disk).Should(gomega.Equal("110GiB"))

			result = command.New(o, virtualMachineRootCmd, "disk", "info").Run()
			gomega.Expect(result.Out.Contents()).To(gomega.ContainSubstring("55GiB"))
		})
	})
}
