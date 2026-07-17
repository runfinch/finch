// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"os"
	"path/filepath"
	"strings"

	"github.com/goccy/go-yaml"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/pkg/osimage"
)

var testOSImageUpdate = func(o *option.Option) {
	ginkgo.Describe("finch os-image update", func() {
		ginkgo.Describe("--check", func() {
			ginkgo.AfterEach(func() {
				os.Remove(getMetadataFilePath())
			})

			ginkgo.It("should write metadata file indicating update is available", func() {
				command.New(o, "os-image", "update", "--check").Run()

				metadataBytes, err := os.ReadFile(getMetadataFilePath())
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				var metadata osimage.UpdateMetadata
				err = json.Unmarshal(metadataBytes, &metadata)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				gomega.Expect(metadata.UpdateAvailable).Should(gomega.BeTrue())
				gomega.Expect(metadata.CurrentImage).ShouldNot(gomega.BeEmpty())
				gomega.Expect(metadata.NewImage).ShouldNot(gomega.BeEmpty())
				gomega.Expect(metadata.CheckedAt.IsZero()).Should(gomega.BeFalse())
				gomega.Expect(metadata.NewImage).ShouldNot(gomega.Equal(metadata.CurrentImage))
			})

			ginkgo.It("should not modify the base finch.yaml", func() {
				baseYamlPath := getBaseYamlFilePath()
				beforeBytes, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				command.New(o, "os-image", "update", "--check").Run()

				afterBytes, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(afterBytes).Should(gomega.Equal(beforeBytes))
			})

			ginkgo.It("should not download any new image files", func() {
				osImageDir := getOSImageDir()
				beforeEntries, err := os.ReadDir(osImageDir)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				command.New(o, "os-image", "update", "--check").Run()

				afterEntries, err := os.ReadDir(osImageDir)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(len(afterEntries)).Should(gomega.Equal(len(beforeEntries)))
			})
		})

		ginkgo.Describe("full update with backup enabled", ginkgo.Serial, func() {
			ginkgo.It("should download, verify, update config, and keep old image", func() {
				ginkgo.DeferCleanup(func() {
					command.New(o, "os-image", "rollback").WithoutCheckingExitCode().Run()
					os.Remove(filepath.Join(getFinchDir(), "os-image-history.json"))
				})

				// Run --check to determine expected new image
				command.New(o, "os-image", "update", "--check").Run()
				metadataBytes, err := os.ReadFile(getMetadataFilePath())
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var metadata osimage.UpdateMetadata
				err = json.Unmarshal(metadataBytes, &metadata)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(metadata.UpdateAvailable).Should(gomega.BeTrue())

				oldImage := metadata.CurrentImage
				expectedNewImage := metadata.NewImage
				osImageDir := getOSImageDir()

				// Perform update
				command.New(o, "os-image", "update").WithTimeoutInSeconds(600).Run()

				// 1. New image file should exist in osImageDir
				newImagePath := filepath.Join(osImageDir, expectedNewImage)
				_, err = os.Stat(newImagePath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred(),
					"new image should exist at "+newImagePath)

				// 2. finch.yaml should reference the new image
				baseYamlPath := getBaseYamlFilePath()
				yamlBytes, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var cfg osimage.FinchYAML
				err = yaml.Unmarshal(yamlBytes, &cfg)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(cfg.Images).ShouldNot(gomega.BeEmpty())
				gomega.Expect(filepath.Base(cfg.Images[0].Location)).Should(gomega.Equal(expectedNewImage))

				// 3. Digest of downloaded file should match digest in finch.yaml
				expectedDigest := strings.TrimPrefix(cfg.Images[0].Digest, "sha512:")
				gomega.Expect(expectedDigest).ShouldNot(gomega.BeEmpty())
				imageBytes, err := os.ReadFile(newImagePath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				hash := sha512.Sum512(imageBytes)
				actualDigest := hex.EncodeToString(hash[:])
				gomega.Expect(actualDigest).Should(gomega.Equal(expectedDigest))

				// 4. os-image list should show both images, new marked as current
				listOutput := string(command.Stdout(o, "os-image", "list"))
				gomega.Expect(listOutput).Should(gomega.ContainSubstring("(Current) " + expectedNewImage))
				gomega.Expect(listOutput).Should(gomega.ContainSubstring(oldImage))
				gomega.Expect(listOutput).ShouldNot(gomega.ContainSubstring("(Current) " + oldImage))

				// 5. Old image should still exist on disk
				_, err = os.Stat(filepath.Join(osImageDir, oldImage))
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred(),
					"old image should still exist with backup enabled")
			})
		})

		ginkgo.Describe("full update with backup disabled", ginkgo.Serial, func() {
			ginkgo.It("should delete the old image after update", func() {
				osImageDir := getOSImageDir()
				baseYamlPath := getBaseYamlFilePath()

				// This test is destructive without backups, as the older image will be destroyed. Hence the need for manual backups.
				// Backup the current finch.yaml
				origYaml, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				// Backup the current image file
				var origCfg osimage.FinchYAML
				err = yaml.Unmarshal(origYaml, &origCfg)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				oldImage := filepath.Base(origCfg.Images[0].Location)
				oldImagePath := filepath.Join(osImageDir, oldImage)
				oldImageBytes, err := os.ReadFile(oldImagePath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				// Backup finch config if it exists because we make changes to it in this test.
				configPath := getFinchConfigFilePath()
				origConfig, _ := os.ReadFile(configPath)

				// Restore everything on cleanup
				ginkgo.DeferCleanup(func() {
					// Restore old image file
					os.WriteFile(oldImagePath, oldImageBytes, 0o644)
					// Restore base finch.yaml
					os.WriteFile(baseYamlPath, origYaml, 0o644)
					// Restore finch config to pre-test state
					if origConfig != nil {
						os.WriteFile(configPath, origConfig, 0o644)
					} else {
						os.Remove(configPath)
					}
				})

				// Write config with backup disabled
				err = os.WriteFile(configPath, []byte("os_image:\n  backup: false\n"), 0o644)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				// Run --check to determine images
				command.New(o, "os-image", "update", "--check").Run()
				metadataBytes, err := os.ReadFile(getMetadataFilePath())
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var metadata osimage.UpdateMetadata
				err = json.Unmarshal(metadataBytes, &metadata)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(metadata.UpdateAvailable).Should(gomega.BeTrue())

				expectedNewImage := metadata.NewImage

				// Perform update
				command.New(o, "os-image", "update").WithTimeoutInSeconds(600).Run()

				// Old image should be deleted
				_, err = os.Stat(oldImagePath)
				gomega.Expect(os.IsNotExist(err)).Should(gomega.BeTrue(),
					"old image should be deleted when backup is disabled")

				// New image should exist
				_, err = os.Stat(filepath.Join(osImageDir, expectedNewImage))
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred(),
					"new image should exist after update")

				// os-image list should only show the new image
				listOutput := string(command.Stdout(o, "os-image", "list"))
				gomega.Expect(listOutput).Should(gomega.ContainSubstring("(Current) " + expectedNewImage))
				gomega.Expect(listOutput).ShouldNot(gomega.ContainSubstring(oldImage))

				// History file should be removed
				historyPath := filepath.Join(getFinchDir(), "os-image-history.json")
				_, err = os.Stat(historyPath)
				gomega.Expect(os.IsNotExist(err)).Should(gomega.BeTrue(),
					"stale history file should be removed when backup is disabled")
			})
		})
	})
}
