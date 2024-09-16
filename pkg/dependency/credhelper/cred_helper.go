// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package credhelper for integrating credential helpers into Finch
package credhelper

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"slices"

	"github.com/docker/cli/cli/config/configfile"
	"github.com/docker/cli/cli/config/types"
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
)

const (
	description = "Installing Credential Helper"
	errMsg      = "Failed to finish installing credential helper"
)

// NewDependencyGroup returns a dependency group that contains all the dependencies required to make credhelper work.
func NewDependencyGroup(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	finchDir string,
	arch string,
) *dependency.Group {
	deps := newDeps(execCmdCreator, fs, fp, logger, fc, finchDir, arch)
	return dependency.NewGroup(deps, description, errMsg)
}

type helperConfig struct {
	binaryName    string
	credHelperURL string
	hash          string
	installFolder string
	finchPath     string
}

func newDeps(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	finchDir string,
	arch string,
) []dependency.Dependency {
	var deps []dependency.Dependency
	empty := dependency.Dependency(nil)
	if fc == nil {
		deps = append(deps, empty)
		return deps
	}
	if fc.CredsHelpers == nil {
		deps = append(deps, empty)
		return deps
	}
	configs := map[string]helperConfig{}
	installFolder := filepath.Join(finchDir, "cred-helpers")

	const versionEcr = "0.8.0"
	const hashARM64 = "sha256:d62badea3153688ec5c24f440df9fb84ff4b02c624dff9288967267e7445daa1"
	const hashAMD64 = "sha256:dcc7ae9915b5d8fa2d9e2b18fc30bab5bfbbce5b82401c7644e6ab97973ac35c"
	credHelperURLEcr := fmt.Sprintf("https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"+
		"/%s/linux-%s/docker-credential-ecr-login", versionEcr, arch)

	hcEcr := helperConfig{
		binaryName:    "docker-credential-ecr-login",
		credHelperURL: credHelperURLEcr,
		installFolder: installFolder,
		finchPath:     finchDir,
	}

	if arch == "arm64" {
		hcEcr.hash = hashARM64
	} else {
		hcEcr.hash = hashAMD64
	}

	configs["ecr-login"] = hcEcr

	for _, helper := range fc.CredsHelpers {
		if configs[helper] != (helperConfig{}) {
			binaries := newCredHelperBinary(fp, fs, execCmdCreator, logger, helper, configs[helper])
			deps = append(deps, dependency.Dependency(binaries))
		}
	}

	return deps
}

// RefreshConfigFile refreshes config.json according to finch.yaml.
func RefreshConfigFile(fs afero.Fs, logger flog.Logger, finchConfigPath, configJSONPath string) error {
	systemDeps := system.NewStdLib()
	mem := fmemory.NewMemory()

	finchCfg, err := config.LoadFinchConfig(fs, finchConfigPath, logger, systemDeps, mem)
	if err != nil {
		return err
	}
	if slices.Contains(finchCfg.CredsHelpers, "ecr-login") {
		return nil
	}

	fileExists, err := afero.Exists(fs, configJSONPath)
	if err != nil {
		return err
	}
	if !fileExists {
		return nil
	}

	fileRead, err := fs.Open(configJSONPath)
	if err != nil {
		return err
	}
	defer fileRead.Close() //nolint:errcheck // closing the file

	var cfg configfile.ConfigFile

	bytes, _ := afero.ReadAll(fileRead)
	err = json.Unmarshal(bytes, &cfg)
	if err != nil {
		return err
	}
	if cfg.CredentialsStore == "" {
		return nil
	}

	cfg.CredentialsStore = ""
	if cfg.AuthConfigs == nil {
		cfg.AuthConfigs = map[string]types.AuthConfig{}
	}

	finalCfgBytes, err := json.Marshal(&cfg)
	if err != nil {
		return err
	}

	file, err := fs.OpenFile(configJSONPath, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0o600)
	if err != nil {
		return err
	}
	_, err = file.Write(finalCfgBytes)
	if err != nil {
		return err
	}
	defer file.Close() //nolint:errcheck // closing the file

	return nil
}
