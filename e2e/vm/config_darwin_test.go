// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//go:build darwin

package vm

import (
	"os"
	"os/exec"
	"path/filepath"
	"runtime"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/e2e"
	finch_cmd "github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
)

var (
	finchConfigFilePath = os.Getenv("HOME") + "/.finch/finch.yaml"
	finchConfigJSONPath = os.Getenv("HOME") + "/.finch/config.json"
)

func limaDataDirPath(installed bool) string {
	limaConfigFilePath := defaultLimaDataDirPath
	if installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realFinchPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		limaConfigFilePath = filepath.Join(realFinchPath, "..", "..", "lima", "data")
	}
	return limaConfigFilePath
}

var testConfig = func(o *option.Option, installed bool) {
	ginkgo.Describe("Config (after init)", ginkgo.Serial, func() {
		ginkgo.It("updates init-only config values when values are changed after init", func() {
			supportsVz, supportsVzErr := config.SupportsVirtualizationFramework(finch_cmd.NewExecCmdCreator())
			gomega.Expect(supportsVzErr).ShouldNot(gomega.HaveOccurred())
			if !supportsVz || runtime.GOOS != "darwin" {
				ginkgo.Skip("Skipping because existing init only configuration options require Virtualization.framework support to test")
			}

			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: vz\nrosetta: false"))
			// vm init with VZ set sometimes takes 2 minutes just to convert the disk to raw
			command.New(o, "vm", "init").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()

			overrideConfigFilePath := filepath.Join(limaDataDirPath(installed), "_config", "override.yaml")
			gomega.Expect(overrideConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(filepath.Clean(overrideConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			var limaCfg limayaml.LimaYAML
			err = yaml.Unmarshal(cfgBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(*limaCfg.CPUs).Should(gomega.Equal(6))
			gomega.Expect(*limaCfg.Memory).Should(gomega.Equal("4GiB"))

			defaultConfigFilePath := filepath.Join(limaDataDirPath(installed), "_config", "default.yaml")
			gomega.Expect(defaultConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err = os.ReadFile(filepath.Clean(defaultConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			err = yaml.Unmarshal(cfgBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(*limaCfg.VMType).Should(gomega.Equal("vz"))
			gomega.Expect(*limaCfg.Rosetta.Enabled).Should(gomega.Equal(false))
			gomega.Expect(*limaCfg.Rosetta.BinFmt).Should(gomega.Equal(false))
		})
	})
}
