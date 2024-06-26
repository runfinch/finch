// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"runtime"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

const (
	virtualMachineRootCmd = "vm"
)

var resetVM = func(o *option.Option) {
	origFinchCfg := readFile(finchConfigFilePath)

	command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
	time.Sleep(1 * time.Second)
	command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(10).Run()
	time.Sleep(1 * time.Second)
	if runtime.GOOS == "windows" {
		// clean up iptables
		//nolint:lll // link to explanation
		// https://docs.rancherdesktop.io/troubleshooting-tips/#q-how-do-i-fix-fata0005-subnet-1040024-overlaps-with-other-one-on-this-address-space-when-running-a-container-using-nerdctl-run
		gomega.Expect(shutdownWSL()).Should(gomega.BeNil())
	}

	ginkgo.DeferCleanup(func() {
		writeFile(finchConfigFilePath, origFinchCfg)
		command.New(o, virtualMachineRootCmd, "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
		time.Sleep(1 * time.Second)
		command.New(o, virtualMachineRootCmd, "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(10).Run()
		time.Sleep(1 * time.Second)
		if runtime.GOOS == "windows" {
			gomega.Expect(shutdownWSL()).Should(gomega.BeNil())
		}
		time.Sleep(1 * time.Second)
		command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
	})
}
