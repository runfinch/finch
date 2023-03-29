// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package support provides functions and methods to produce Finch support bundles
package support

import (
	"archive/zip"
	"bytes"
	"errors"
	"fmt"
	"io"
	"path"
	"path/filepath"
	"strings"
	"time"

	"github.com/lima-vm/lima/pkg/osutil"
	"github.com/spf13/afero"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	fpath "github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/version"
)

const (
	bundlePrefix     = "finch-support"
	platformFileName = "platform.yaml"
	logPrefix        = "logs"
	configPrefix     = "configs"
	additionalPrefix = "misc"
)

// PlatformData defines the YAML structure for the platform data included in a support bundle.
type PlatformData struct {
	Os    string `yaml:"os"`
	Arch  string `yaml:"arch"`
	Finch string `yaml:"finch"`
}

// BundleBuilder provides methods to generate support bundles.
type BundleBuilder interface {
	GenerateSupportBundle([]string, []string) (string, error)
}

type bundleBuilder struct {
	logger flog.Logger
	fs     afero.Fs
	config BundleConfig
	finch  fpath.Finch
	ecc    command.Creator
}

// NewBundleBuilder produces a new BundleBuilder.
func NewBundleBuilder(
	logger flog.Logger,
	fs afero.Fs,
	config BundleConfig,
	finch fpath.Finch,
	ecc command.Creator,
) BundleBuilder {
	return &bundleBuilder{
		logger: logger,
		fs:     fs,
		config: config,
		finch:  finch,
		ecc:    ecc,
	}
}

// GenerateSupportBundle generates a new support bundle.
func (bb *bundleBuilder) GenerateSupportBundle(additionalFiles []string, excludeFiles []string) (string, error) {
	zipFileName := bundleFileName()
	bb.logger.Debugf("Creating %s...", zipFileName)
	zipFile, err := bb.fs.Create(zipFileName)
	if err != nil {
		return "", err
	}

	zipPrefix := strings.TrimSuffix(zipFileName, path.Ext(zipFileName))

	writer := zip.NewWriter(zipFile)

	_, err = writer.Create(fmt.Sprintf("%s/", zipPrefix))
	if err != nil {
		return "", err
	}

	platform, err := bb.getPlatformData()
	if err != nil {
		return "", err
	}

	bb.logger.Debugln("Gathering platform data...")
	err = writePlatformData(writer, platform, zipPrefix)
	if err != nil {
		return "", err
	}

	bb.logger.Debugln("Copying in log files...")
	for _, file := range bb.config.LogFiles() {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		err := bb.copyInFile(writer, file, path.Join(zipPrefix, logPrefix))
		if err != nil {
			bb.logger.Warnf("Could not copy in %q. Error: %s", file, err)
		}
	}

	bb.logger.Debugln("Copying in config files...")
	for _, file := range bb.config.ConfigFiles() {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		err := bb.copyInFile(writer, file, path.Join(zipPrefix, configPrefix))
		if err != nil {
			bb.logger.Warnf("Could not copy in %q. Error: %s", file, err)
		}
	}

	bb.logger.Debugln("Copying in additional files...")
	for _, file := range additionalFiles {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		err := bb.copyInFile(writer, file, path.Join(zipPrefix, additionalPrefix))
		if err != nil {
			bb.logger.Warnf("Could not add additional file %s. Error: %s", file, err)
		}
	}

	err = writer.Close()
	if err != nil {
		return "", err
	}

	return zipFileName, nil
}

func (bb *bundleBuilder) copyInFile(writer *zip.Writer, fileName string, prefix string) error {
	f, err := bb.fs.Open(fileName)
	if err != nil {
		return err
	}

	bb.logger.Debugf("Copying %s...", fileName)

	var buf bytes.Buffer
	_, err = buf.ReadFrom(f)
	if err != nil {
		return err
	}

	var redacted []byte
	var bufErr error
	for bufErr == nil {
		var line []byte
		line, bufErr = buf.ReadBytes('\n')
		if bufErr != nil && !errors.Is(bufErr, io.EOF) {
			continue
		}

		line, err = redactFinchInstall(line, bb.finch)
		if err != nil {
			return err
		}

		user, err := osutil.LimaUser(false)
		if err != nil {
			return err
		}
		line, err = redactUsername(line, user.Username)
		if err != nil {
			return err
		}

		line = redactNetworkAddresses(line)
		line = redactPorts(line)
		line = redactSSHKeys(line)

		redacted = append(redacted, line...)
	}

	baseName := path.Base(fileName)
	zipCopy, err := writer.Create(path.Join(prefix, baseName))
	if err != nil {
		return err
	}

	_, err = zipCopy.Write(redacted)
	if err != nil {
		return err
	}

	return nil
}

func (bb *bundleBuilder) getPlatformData() (*PlatformData, error) {
	platform := &PlatformData{}

	// populate OS version
	os, err := bb.getOSVersion()
	if err != nil {
		return nil, err
	}
	platform.Os = os

	// populate arch
	arch, err := bb.getArch()
	if err != nil {
		return nil, err
	}
	platform.Arch = arch

	// populate Finch version
	platform.Finch = getFinchVersion()

	return platform, nil
}

func (bb *bundleBuilder) getOSVersion() (string, error) {
	cmd := bb.ecc.Create("sw_vers", "-productVersion")
	out, err := cmd.Output()
	if err != nil {
		return "", err
	}

	os := strings.TrimSuffix(string(out), "\n")

	return os, nil
}

func (bb *bundleBuilder) getArch() (string, error) {
	cmd := bb.ecc.Create("uname", "-m")
	out, err := cmd.Output()
	if err != nil {
		return "", err
	}

	arch := strings.TrimSuffix(string(out), "\n")

	return arch, nil
}

func getFinchVersion() string {
	return version.Version
}

func writePlatformData(writer *zip.Writer, platform *PlatformData, prefix string) error {
	platformFile, err := writer.Create(path.Join(prefix, platformFileName))
	if err != nil {
		return err
	}

	platformYaml, err := yaml.Marshal(&platform)
	if err != nil {
		return err
	}

	_, err = platformFile.Write(platformYaml)
	if err != nil {
		return err
	}

	return nil
}

func bundleFileName() string {
	timestamp := time.Now().Format("20060102150405")
	return fmt.Sprintf("%s-%s.zip", bundlePrefix, timestamp)
}

func fileShouldBeExcluded(filename string, exclude []string) bool {
	fileAbs, err := filepath.Abs(filename)
	if err != nil {
		return true
	}
	for _, excludeFile := range exclude {
		excludeAbs, err := filepath.Abs(excludeFile)
		if err != nil {
			continue
		}
		if fileAbs == excludeAbs {
			return true
		}
		if path.Base(filename) == excludeFile {
			return true
		}
	}
	return false
}
