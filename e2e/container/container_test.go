// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package container runs tests related to container development.
package container

import (
	"fmt"
	"os/exec"
	"regexp"
	"runtime"
	"testing"
	"time"

	ncdefaults "github.com/containerd/nerdctl/v2/pkg/defaults"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/tests"

	"github.com/runfinch/finch/e2e"
)

//nolint:paralleltest // TestContainer is like TestMain for the container-related tests.
func TestContainer(t *testing.T) {
	const description = "Finch Container Development E2E Tests"

	o, err := e2e.CreateOption()
	if err != nil {
		t.Fatal(err)
	}

	ginkgo.SynchronizedBeforeSuite(func() []byte {
		if runtime.GOOS != "linux" {
			command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			time.Sleep(1 * time.Second)
			command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			time.Sleep(1 * time.Second)
			command.New(o, "vm", "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
		}
		tests.SetupLocalRegistry(o)
		return nil
	}, func(_ []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		if runtime.GOOS != "linux" {
			command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			time.Sleep(1 * time.Second)
			command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			time.Sleep(1 * time.Second)
		}
	}, func() {})

	ginkgo.Describe(description, func() {
		tests.Pull(o)
		tests.Rm(o)
		tests.Rmi(o)
		switch runtime.GOOS {
		case "windows":
			// get ip address for adapter vEthernet (WSL)
			n, err := exec.Command("cmd", "/C", "netsh", "interface", "ipv4", "show",
				"addresses", "vEthernet (WSL)").Output()
			gomega.Expect(err).Should(gomega.BeNil())
			hostIP := extractIPAddress(string(n))
			// wsl2 cgroup v2 is mounted at /sys/fs/cgroup/unified,
			// containerd expects it at /sys/fs/cgroup based on
			// https://github.com/containerd/cgroups/blob/cc78c6c1e32dc5bde018d92999910fdace3cfa27/utils.go#L36
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Hybrid, DefaultHostGatewayIP: hostIP})
		case "darwin":
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
		case "linux":
			fmt.Printf("getCGroupMode(): %d\n", getCGroupMode())
			tests.Run(&tests.RunOption{BaseOpt: o, CGMode: getCGroupMode(), DefaultHostGatewayIP: ncdefaults.HostGatewayIP()})
		}

		tests.Start(o)
		tests.Stop(o)
		tests.Cp(o)
		tests.Tag(o)
		tests.Save(o)
		tests.Load(o)
		tests.Build(o)
		tests.Push(o)
		tests.Images(o)
		tests.ComposeBuild(o)
		tests.ComposeDown(o)
		tests.ComposeKill(o)
		tests.ComposePs(o)
		tests.ComposePull(o)
		tests.ComposeLogs(o)
		tests.Create(o)
		tests.Port(o)
		tests.Kill(o)
		tests.Stats(o)
		tests.BuilderPrune(o)
		tests.Exec(o)
		tests.Logs(o)
		tests.Login(o)
		tests.Logout(o)
		tests.VolumeCreate(o)
		tests.VolumeInspect(o)
		tests.VolumeLs(o)
		tests.VolumeRm(o)
		tests.VolumePrune(o)
		tests.ImageHistory(o)
		tests.ImageInspect(o)
		tests.ImagePrune(o)
		tests.Info(o)
		tests.Events(o)
		tests.Inspect(o)
		tests.NetworkCreate(o)
		tests.NetworkInspect(o)
		tests.NetworkLs(o)
		tests.NetworkRm(o)
		tests.HealthCheck(o)
		testCosign(o)
		testCrossPlatformRun(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}

func extractIPAddress(data string) string {
	re := regexp.MustCompile(`IP Address:\s+(\d+\.\d+\.\d+\.\d+)`)
	match := re.FindStringSubmatch(data)

	if match != nil {
		return match[1]
	}
	return ""
}
