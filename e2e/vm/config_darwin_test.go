// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//go:build darwin

package vm

import (
	"os"
	"path/filepath"
	"runtime"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"gopkg.in/yaml.v3"

	finch_cmd "github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
)

var testConfig = func(o *option.Option, installed bool) {
	ginkgo.Describe("Config (after init)", ginkgo.Serial, func() {
		ginkgo.It("updates init-only config values when values are changed after init", func() {
			supportsVz, supportsVzErr := config.SupportsVirtualizationFramework(finch_cmd.NewExecCmdCreator())
			gomega.Expect(supportsVzErr).ShouldNot(gomega.HaveOccurred())
			if !supportsVz || runtime.GOOS != "darwin" {
				ginkgo.Skip("Skipping because existing init only configuration options require Virtualization.framework support to test")
			}

			limaConfigFilePath := resetVM(o, installed)
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncpus: 6\nvmType: vz\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))

			gomega.Expect(limaConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(filepath.Clean(limaConfigFilePath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			var limaCfg limayaml.LimaYAML
			err = yaml.Unmarshal(cfgBuf, &limaCfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(*limaCfg.CPUs).Should(gomega.Equal(6))
			gomega.Expect(*limaCfg.Memory).Should(gomega.Equal("4GiB"))
			gomega.Expect(*limaCfg.VMType).Should(gomega.Equal("vz"))
			gomega.Expect(*limaCfg.Rosetta.Enabled).Should(gomega.Equal(false))
			gomega.Expect(*limaCfg.Rosetta.BinFmt).Should(gomega.Equal(false))
		})
	})
}
