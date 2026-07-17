// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"github.com/runfinch/finch/pkg/osimage"

	"github.com/goccy/go-yaml"
)

var testOSImageList = func(o *option.Option) {
	ginkgo.Describe("finch os-image list", func() {
		ginkgo.It("should list all images that exist in the os image directory", func() {
			output := string(command.Stdout(o, "os-image", "list"))
			gomega.Expect(output).ShouldNot(gomega.BeEmpty())

			osImageDir := getOSImageDir()
			for _, line := range strings.Split(strings.TrimSpace(output), "\n") {
				if line == "" {
					continue
				}
				// Parse image name from line (format: "(Current) name\tsize bytes" or "  name\tsize bytes")
				parts := strings.Split(line, "\t")
				gomega.Expect(len(parts)).Should(gomega.BeNumerically(">=", 2))
				nameField := strings.TrimSpace(parts[0])
				nameField = strings.TrimPrefix(nameField, "(Current) ")
				imageName := strings.TrimSpace(nameField)

				imagePath := filepath.Join(osImageDir, imageName)
				info, err := os.Stat(imagePath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred(),
					fmt.Sprintf("listed image %s does not exist in %s", imageName, osImageDir))

				// Validate reported size matches actual file size
				sizeStr := strings.TrimSuffix(strings.TrimSpace(parts[1]), " bytes")
				reportedSize, err := strconv.ParseInt(sizeStr, 10, 64)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(reportedSize).Should(gomega.Equal(info.Size()),
					fmt.Sprintf("reported size for %s does not match actual file size", imageName))
			}
		})

		ginkgo.It("should mark the image referenced in the base finch.yaml as current", func() {
			baseYamlPath := getBaseYamlFilePath()
			yamlBytes, err := os.ReadFile(baseYamlPath)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			var cfg osimage.FinchYAML
			err = yaml.Unmarshal(yamlBytes, &cfg)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			gomega.Expect(cfg.Images).ShouldNot(gomega.BeEmpty())

			configImageName := filepath.Base(cfg.Images[0].Location)

			output := string(command.Stdout(o, "os-image", "list"))
			gomega.Expect(output).Should(gomega.ContainSubstring("(Current) " + configImageName))
		})
	})
}
