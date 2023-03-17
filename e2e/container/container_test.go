// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package container runs tests related to container development.
package container

import (
	"testing"

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
		command.New(o, "vm", "init").WithTimeoutInSeconds(600).Run()
		tests.SetupLocalRegistry(o)
		return nil
	}, func(bytes []byte) {})

	ginkgo.SynchronizedAfterSuite(func() {
		command.New(o, "vm", "stop").WithTimeoutInSeconds(90).Run()
		command.New(o, "vm", "remove").WithTimeoutInSeconds(60).Run()
	}, func() {})

	ginkgo.Describe(description, func() {
		tests.Pull(o)
		tests.Rm(o)
		tests.Rmi(o)
		tests.Run(&tests.RunOption{BaseOpt: o, CGMode: tests.Unified, DefaultHostGatewayIP: "192.168.5.2"})
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
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}
