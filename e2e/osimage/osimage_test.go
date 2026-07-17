// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage runs e2e tests for OS image management commands.
// These tests do not require the VM to be running.
package osimage

import (
	"os"
	"testing"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"

	"github.com/runfinch/finch/e2e"
	"github.com/runfinch/finch/pkg/osimage"
)

const newImageRunID = "99999999999"

var depsServer *localDepsServer

func TestOSImage(t *testing.T) {
	const description = "Finch OS Image E2E Tests"

	o, err := e2e.CreateOption()
	if err != nil {
		t.Fatal(err)
	}

	ginkgo.Describe("", ginkgo.Ordered, ginkgo.Serial, func() {
		ginkgo.BeforeAll(func() {
			// Cosign should be installed and available on PATH, for these tests
			// to sign locally generated manifests for test.
			requireCosign()

			// OIDC tokens should be available in the test environment. Without one, cosign will
			// prompt for login.
			requireOIDCInEnv()

			signDir, err := os.MkdirTemp("", "finch-osimage-e2e")
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			ginkgo.DeferCleanup(func() {
				os.RemoveAll(signDir)
				if depsServer != nil {
					depsServer.Close()
				}
			})

			depsServer = startLocalDepsServer(signDir, newImageRunID)

			// Point the updater to the local server
			o.UpdateEnv(osimage.EnvDepsURL, depsServer.BaseURL)
			o.UpdateEnv(osimage.EnvCosignIssuer, depsServer.CosignIssuer)
			o.UpdateEnv(osimage.EnvCosignIdentity, depsServer.CosignIdentity)
		})

		testOSImageList(o)
		testOSImageUpdate(o)
		testOSImageRollback(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}
