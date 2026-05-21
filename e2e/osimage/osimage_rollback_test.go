// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/goccy/go-yaml"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"github.com/runfinch/finch/pkg/osimage"
)

var testOSImageRollback = func(o *option.Option) {
	ginkgo.Describe("finch os-image rollback", func() {
		ginkgo.Describe("when backup is disabled", func() {
			ginkgo.It("should return error when rollback is unavailable", func() {
				configPath := getFinchConfigFilePath()
				origConfig, _ := os.ReadFile(configPath)
				ginkgo.DeferCleanup(func() {
					if origConfig != nil {
						os.WriteFile(configPath, origConfig, 0o644)
					} else {
						os.Remove(configPath)
					}
				})
				err := os.WriteFile(configPath, []byte("os_image:\n  backup: false\n"), 0o644)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				output := command.New(o, "os-image", "rollback").WithoutSuccessfulExit().Run()
				gomega.Expect(string(output.Err.Contents())).Should(
					gomega.ContainSubstring("rollback is not available because OS image backups are disabled"))
			})
		})

		ginkgo.Describe("after an update", ginkgo.Serial, func() {
			var oldImageName string
			var oldImageDigest string
			var newImageName string

			ginkgo.It("should write correct history", func() {
				// Record current state
				baseYamlPath := getBaseYamlFilePath()
				yamlBytes, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var cfg struct {
					Images []struct {
						Location string `yaml:"location"`
						Digest   string `yaml:"digest"`
					} `yaml:"images"`
				}
				err = yaml.Unmarshal(yamlBytes, &cfg)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				oldImageName = filepath.Base(cfg.Images[0].Location)
				oldImageDigest = cfg.Images[0].Digest

				// Perform update
				command.New(o, "os-image", "update").WithTimeoutInSeconds(600).Run()

				// Determine new image
				yamlBytes, err = os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				err = yaml.Unmarshal(yamlBytes, &cfg)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				newImageName = filepath.Base(cfg.Images[0].Location)
				gomega.Expect(newImageName).ShouldNot(gomega.Equal(oldImageName))

				// History file should exist
				historyPath := filepath.Join(getFinchDir(), "os-image-history.json")
				historyBytes, err := os.ReadFile(historyPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				var history osimage.OSImageHistory
				err = json.Unmarshal(historyBytes, &history)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

				// History should have 2 entries: old first, new last (order matters)
				gomega.Expect(history.Images).Should(gomega.HaveLen(2))
				gomega.Expect(history.Images[0].Name).Should(gomega.Equal(oldImageName))
				gomega.Expect(history.Images[0].Digest).Should(gomega.Equal(oldImageDigest))
				gomega.Expect(history.Images[1].Name).Should(gomega.Equal(newImageName))
			})

			ginkgo.It("should rollback and restore previous state", func() {
				// Perform rollback
				command.New(o, "os-image", "rollback").Run()

				// History should now have only the old image
				historyPath := filepath.Join(getFinchDir(), "os-image-history.json")
				historyBytes, err := os.ReadFile(historyPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var history osimage.OSImageHistory
				err = json.Unmarshal(historyBytes, &history)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(history.Images).Should(gomega.HaveLen(1))
				gomega.Expect(history.Images[0].Name).Should(gomega.Equal(oldImageName))

				// New image should be deleted from disk
				osImageDir := getOSImageDir()
				_, err = os.Stat(filepath.Join(osImageDir, newImageName))
				gomega.Expect(os.IsNotExist(err)).Should(gomega.BeTrue(),
					"new image should be removed from disk after rollback")

				// finch.yaml should reference the old image again
				baseYamlPath := getBaseYamlFilePath()
				yamlBytes, err := os.ReadFile(baseYamlPath)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				var cfg struct {
					Images []struct {
						Location string `yaml:"location"`
						Digest   string `yaml:"digest"`
					} `yaml:"images"`
				}
				err = yaml.Unmarshal(yamlBytes, &cfg)
				gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				gomega.Expect(filepath.Base(cfg.Images[0].Location)).Should(gomega.Equal(oldImageName))
				gomega.Expect(cfg.Images[0].Digest).Should(gomega.Equal(oldImageDigest))
			})
		})
	})
}
