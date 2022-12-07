// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	"errors"
	"io/fs"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var finchConfigFilePath = os.Getenv("HOME") + "/.finch/finch.yaml"

const defaultLimaConfigFilePath = "../_output/lima/data/_config/override.yaml"

func readFile(filePath string) []byte {
	out, err := os.ReadFile(filepath.Clean(filePath))
	if err != nil && !errors.Is(err, fs.ErrNotExist) {
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	}
	return out
}

func writeFile(filePath string, buf []byte) {
	gomega.Expect(os.WriteFile(filePath, buf, 0o644)).ShouldNot(gomega.HaveOccurred())
}

// updateAndApplyConfig writes to the config file, and stop/starts the VM to apply its values.
// It returns the session of the final start command so it can be used in further assertions.
func updateAndApplyConfig(o *option.Option, configBytes []byte) *gexec.Session {
	writeFile(finchConfigFilePath, configBytes)

	command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
	return command.New(o, virtualMachineRootCmd, "start").WithoutCheckingExitCode().WithTimeoutInSeconds(60).Run()
}

// testConfig updates the finch config file and ensures that its settings are applied properly.
//
// Many test cases only check partial file contents, rather than strictly checking
// the exact contents, because other modules can update the same files.
//
// For example, pkg/dependency/vde/update_override_lima_config.go's appendNetworkConfiguration function
// updates the lima override.yaml config file, independently of the config file module's function.
//
// For simplicity, the cleanup for this test suite currently does not distinguish between an
// empty and a non-existent Finch config.yaml. Meaning, if you run this without an existing config.yaml,
// an empty config.yaml will be created after all test cases are run. This currently does not change the behavior
// of Finch, but may need to be revisited later.
var testConfig = func(o *option.Option, installed bool) {
	// These tests are run in serial because we only define one virtual machine instance, and it requires disk I/O.
	ginkgo.Describe("Config", ginkgo.Serial, func() {
		var limaConfigFilePath string
		ginkgo.BeforeEach(func() {
			origFinchCfg := readFile(finchConfigFilePath)
			limaConfigFilePath = defaultLimaConfigFilePath
			if installed {
				path, err := exec.LookPath(installedTestSubject)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				realFinchPath, err := filepath.EvalSymlinks(path)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				limaConfigFilePath = filepath.Join(realFinchPath, "/../../lima/data/_config/override.yaml")
			}
			origLimaCfg := readFile(limaConfigFilePath)

			ginkgo.DeferCleanup(func() {
				writeFile(finchConfigFilePath, origFinchCfg)
				writeFile(limaConfigFilePath, origLimaCfg)

				command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(60).Run()
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(120).Run()
			})
		})

		ginkgo.It("updates config values when a config file is present", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("memory: 4GiB\ncpus: 6"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(0))

			gomega.Expect(limaConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(limaConfigFilePath)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(cfgBuf).Should(gomega.SatisfyAll(gomega.ContainSubstring("cpus: 6"), gomega.ContainSubstring("memory: 4GiB")))
		})

		ginkgo.It("updates config values when partial config file is present", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("memory: 6GiB"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(0))

			gomega.Expect(limaConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(limaConfigFilePath)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			// 4 CPUs is the default
			gomega.Expect(cfgBuf).Should(gomega.SatisfyAll(gomega.MatchRegexp(`cpus: \d`), gomega.ContainSubstring("memory: 6GiB")))
		})

		ginkgo.It("uses the default config values when no config file is present", func() {
			startCmdSession := updateAndApplyConfig(o, nil)
			gomega.Expect(startCmdSession).Should(gexec.Exit(0))

			gomega.Expect(limaConfigFilePath).Should(gomega.BeARegularFile())
			cfgBuf, err := os.ReadFile(limaConfigFilePath)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(cfgBuf).Should(gomega.SatisfyAll(gomega.MatchRegexp(`cpus: \d`), gomega.MatchRegexp(`memory: \dGiB`)))
		})

		ginkgo.It("fails to launch when the config file is improperly formatted", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("this isn't yaml"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(1))
		})

		ginkgo.It("fails to launch when the config file file doesn't specify enough CPUs", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("cpus: 0"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(1))
		})

		ginkgo.It("fails to launch when the config file doesn't specify enough memory", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("memory: 0GiB"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(1))
		})
	})
}
