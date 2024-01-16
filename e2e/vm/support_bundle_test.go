// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"archive/zip"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"strings"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testSupportBundle = func(o *option.Option) {
	ginkgo.Describe("Support bundles", func() {
		ginkgo.It("Should generate a support bundle", func() {
			command.Run(o, "support-bundle", "generate")
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with an extra file included with --include flag by relative path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			command.Run(o, "support-bundle", "generate", "--include", includeFilename)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
					gomega.Expect(err).Should(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with an extra file included with --include flag by absolute path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			dir, err := os.Getwd()
			gomega.Expect(err).Should(gomega.BeNil())
			includeAbsPath := filepath.Join(dir, includeFilename)

			command.Run(o, "support-bundle", "generate", "--include", includeAbsPath)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
					gomega.Expect(err).Should(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with no extra file included with --include flag but an invalid path", func() {
			fakeFileName := "test123+fakefile"
			command.Run(o, "support-bundle", "generate", "--include", fakeFileName)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", fakeFileName))
					gomega.Expect(err).ShouldNot(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by basename", func() {
			command.Run(o, "support-bundle", "generate", "--exclude", "finch.yaml")
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, path.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "configs", "finch.yaml"))
					gomega.Expect(err).ShouldNot(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by absolute path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			absPath, err := filepath.Abs(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", absPath)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
					gomega.Expect(err).ShouldNot(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by relative path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", filepath.Join(".", includeFilename))
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
					gomega.Expect(err).ShouldNot(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with no file excluded with --exclude flag with invalid path", func() {
			fakeFileName := "test123+fakefile"
			command.Run(o, "support-bundle", "generate", "--exclude", fakeFileName)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "configs", "finch.yaml"))
					gomega.Expect(err).Should(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should generate a support bundle with a file excluded when specified with both --include and --exclude", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", includeFilename)
			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					reader, err := zip.OpenReader(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())

					zipBaseName := filepath.Base(dirEntry.Name())
					zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
					_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
					gomega.Expect(err).ShouldNot(gomega.BeNil())

					gomega.Expect(reader.Close()).Should(gomega.BeNil())
					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeTrue())
		})
		ginkgo.It("Should fail to generate a support bundle when the VM is nonexistent", func() {
			command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			time.Sleep(1 * time.Second)
			command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			time.Sleep(1 * time.Second)
			defer command.New(o, "vm", "init").WithoutCheckingExitCode().WithTimeoutInSeconds(60).Run()

			command.New(o, "support-bundle", "generate").WithoutSuccessfulExit().Run()

			entries, err := os.ReadDir(".")
			gomega.Expect(err).Should(gomega.BeNil())
			bundleExists := false
			for _, dirEntry := range entries {
				if strings.Contains(dirEntry.Name(), "finch-support") {
					_, err := os.Stat(dirEntry.Name())
					if err == nil {
						bundleExists = true
					}

					err = os.Remove(dirEntry.Name())
					gomega.Expect(err).Should(gomega.BeNil())
				}
			}
			gomega.Expect(bundleExists).Should(gomega.BeFalse())
		})
	})
}
