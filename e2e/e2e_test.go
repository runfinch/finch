// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	"flag"
	"os"
	"path/filepath"
	"testing"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"github.com/runfinch/common-tests/tests"
)

const (
	virtualMachineRootCmd = "vm"
	installedTestSubject  = "finch"
)

var installed = flag.Bool("installed", false, "the flag to show whether the tests are ran against installed application")

//nolint:paralleltest // TestE2e is like TestMain for our e2e tests.
func TestE2e(t *testing.T) {
	description := "Finch CLI e2e Tests"

	wd, err := os.Getwd()
	if err != nil {
		t.Fatalf("failed to get the current working directory: %v", err)
	}
	subject := filepath.Join(wd, "../_output/bin/finch")
	if *installed {
		subject = installedTestSubject
	}

	o, err := option.New([]string{subject})
	if err != nil {
		t.Fatalf("failed to initialize a testing option: %v", err)
	}

	ginkgo.SynchronizedBeforeSuite(func() []byte {
		command.New(o, "vm", "init").WithTimeoutInSeconds(600).Run()
		tests.SetupLocalRegistry(o)
		return nil
	}, func(bytes []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop").WithTimeoutInSeconds(60).Run()
		command.New(o, "vm", "remove").WithTimeoutInSeconds(60).Run()
	}, func() {})

	ginkgo.Describe(description, func() {
		tests.Pull(o)
		tests.Rm(o)
		tests.Rmi(o)
		tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified})
		tests.Start(o)
		tests.Stop(o)
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
		// When running tests in serial sequence and using the local registry, testVirtualMachine needs to run after generic tests finished
		// since it will remove the VM instance thus removing the local registry.
		testVirtualMachine(o)
		testAdditionalDisk(o)
		testConfig(o, *installed)
		testVersion(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}
