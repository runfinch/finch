// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/ffs"
	"github.com/runfinch/common-tests/fnet"
	"github.com/runfinch/common-tests/option"
)

// testFinchConfigFile makes sure that DOCKER_CONFIG is properly set to ~/.finch so that related information
// is written to ~/.finch/config.json file.
var testFinchConfigFile = func(o *option.Option) {
	ginkgo.Describe("finch config file", func() {
		ginkgo.It("should store login credentials", func() {
			filename := "htpasswd"
			registryImage := "registry"
			registryContainer := "auth-registry"
			// The htpasswd is generated by
			// `finch run --entrypoint htpasswd public.ecr.aws/docker/library/httpd:2 -Bbn testUser testPassword`.
			// We don't want to generate it on the fly because:
			// 1. Pulling the httpd image can take a long time, sometimes even more 10 seconds.
			// 2. It's unlikely that we will have to update this in the future.
			// 3. It's not the thing we want to validate by the functional tests. We only want the output produced by it.
			//nolint:gosec // This password is only used for testing purpose.
			htpasswd := "testUser:$2y$05$k2APCrbppB86kOEaTAKWzedCagg5e4WCLsq1gsfarnGFpaSso9rNi"
			htpasswdDir := filepath.Dir(ffs.CreateTempFile(filename, htpasswd))
			ginkgo.DeferCleanup(os.RemoveAll, htpasswdDir)
			port := fnet.GetFreePort()
			command.Run(o, "run",
				"-dp", fmt.Sprintf("%d:5000", port),
				"--name", registryContainer,
				"-v", fmt.Sprintf("%s:/auth", htpasswdDir),
				"-e", "REGISTRY_AUTH=htpasswd",
				"-e", "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm",
				"-e", fmt.Sprintf("REGISTRY_AUTH_HTPASSWD_PATH=/auth/%s", filename),
				registryImage)
			ginkgo.DeferCleanup(command.Run, o, "rmi", "-f", registryImage)
			ginkgo.DeferCleanup(command.Run, o, "rm", "-f", registryContainer)
			registry := fmt.Sprintf("localhost:%d", port)
			command.Run(o, "login", registry, "-u", "testUser", "-p", "testPassword")

			homeDir, err := os.UserHomeDir()
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			configPath := fmt.Sprintf("%s/.finch/config.json", homeDir)
			configContent, err := os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			gomega.Expect(string(configContent)).Should(gomega.ContainSubstring(registry))
			command.Run(o, "logout", registry)

			configContent, err = os.ReadFile(filepath.Clean(configPath))
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(string(configContent)).ShouldNot(gomega.ContainSubstring(registry))
		})
	})
}
