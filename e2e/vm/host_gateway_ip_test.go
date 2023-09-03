package vm

import (
	"os/exec"
	"path/filepath"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/e2e"
)

const defaultImage    = "public.ecr.aws/docker/library/alpine:latest"
const nerdctlRootlessCfgPath = "/home/root.linux/.config/nerdctl/nerdctl.toml"

var testHostGatewayIp = func(o *option.Option, installed bool) {
	// it requires disk I/O so this will be serial test
	ginkgo.Describe("--add-host tag with host_gateway", ginkgo.Serial, func() {
		var limaConfigFilePath string
		ginkgo.BeforeEach(func() {
			origFinchCfg := readFile(finchConfigFilePath)
			limaConfigFilePath = defaultLimaConfigFilePath
			if installed {
				path, err := exec.LookPath(e2e.InstalledTestSubject)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				realFinchPath, err := filepath.EvalSymlinks(path)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				limaConfigFilePath = filepath.Join(realFinchPath, "../../lima/data/_config/override.yaml")
			}
			origLimaCfg := readFile(limaConfigFilePath)

			ginkgo.DeferCleanup(func() {
				writeFile(finchConfigFilePath, origFinchCfg)
				writeFile(limaConfigFilePath, origLimaCfg)

				command.New(o, virtualMachineRootCmd, "stop").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
				command.New(o, virtualMachineRootCmd, "start").WithTimeoutInSeconds(240).Run()
			})
		})
		ginkgo.It("should add a custom host-to-IP mapping with --add-host flag: default value", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("memory: 4GiB\ncpus: 6"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(0))
			mapping := command.StdoutStr(o, "run", "--add-host", "test-host:host-gateway", defaultImage, "cat", "/etc/hosts")
			gomega.Expect(mapping).Should(gomega.ContainSubstring("192.168.5.2"))
			gomega.Expect(mapping).Should(gomega.ContainSubstring("test-host"))
		})
		ginkgo.It("should add a custom host-to-IP mapping with --add-host flag: custom value", func() {
			startCmdSession := updateAndApplyConfig(o, []byte("memory: 4GiB\ncpus: 6\nhost_gateway_ip: 192.168.31.1"))
			gomega.Expect(startCmdSession).Should(gexec.Exit(0))
			mapping := command.StdoutStr(o, "run", "--add-host", "test-host:host-gateway", defaultImage, "cat", "/etc/hosts")
			gomega.Expect(mapping).Should(gomega.ContainSubstring("192.168.31.1"))
			gomega.Expect(mapping).Should(gomega.ContainSubstring("test-host"))
		})
	})
}
