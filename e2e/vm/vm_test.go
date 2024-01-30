// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"os/exec"
	"path/filepath"
	"runtime"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/e2e"
)

const (
	virtualMachineRootCmd = "vm"
)

var resetVM = func(o *option.Option, installed bool) string {
	var limaConfigFilePath string

	origFinchCfg := readFile(finchConfigFilePath)
	limaConfigFilePath = defaultLimaConfigFilePath
	if installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realFinchPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		limaConfigFilePath = filepath.Join(realFinchPath, "..", "..", "lima", "data", "_config", "override.yaml")
	}
	origLimaCfg := readFile(limaConfigFilePath)

	command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
	time.Sleep(1 * time.Second)
	command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(10).Run()
	time.Sleep(1 * time.Second)
	if runtime.GOOS == "windows" {
		// clean up iptables
		//nolint:lll // link to explanation
		// https://docs.rancherdesktop.io/troubleshooting-tips/#q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run
		gomega.Expect(exec.Command("wsl", "--shutdown").Run()).Should(gomega.BeNil())
	}

	ginkgo.DeferCleanup(func() {
		writeFile(finchConfigFilePath, origFinchCfg)
		writeFile(limaConfigFilePath, origLimaCfg)
		command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
		time.Sleep(1 * time.Second)
		command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(10).Run()
		if runtime.GOOS == "windows" {
			gomega.Expect(exec.Command("wsl", "--shutdown").Run()).Should(gomega.BeNil())
		}
		time.Sleep(1 * time.Second)
		command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
	})

	return limaConfigFilePath
}
