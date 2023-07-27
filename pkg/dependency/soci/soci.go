// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package credhelper for integrating SOCI into Finch
package soci

import (
	"fmt"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

const (
	description = "Installing SOCI"
	errMsg      = "Failed to finish installing SOCI"
)

// NewDependencyGroup returns a dependency group that contains all the dependencies required to make credhelper work.
func NewDependencyGroup(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	user string,
	arch string,
) *dependency.Group {
	deps := newDeps(execCmdCreator, fs, fp, logger, fc, user, arch)
	return dependency.NewGroup(deps, description, errMsg)
}

type helperConfig struct {
	binaryName    string
	sociURL       string
	installFolder string
	finchPath     string
}

func newDeps(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	user string,
	arch string,
) []dependency.Dependency {
	var deps []dependency.Dependency
	empty := dependency.Dependency(nil)
	if fc == nil {
		deps = append(deps, empty)
		return deps
	}
	if fc.Soci == nil {
		deps = append(deps, empty)
		return deps
	}
	configs := map[string]helperConfig{}
	installFolder := fmt.Sprintf("/Users/%s/.finch/soci/", user)
	finchPath := fmt.Sprintf("/Users/%s/.finch/", user)

	const versionSoci = "0.3.0"

	binaryName := fmt.Sprintf("soci-snapshotter-%s-linux-%s.tar.gz", versionSoci, arch)
	sociURL := fmt.Sprintf("https://github.com/awslabs/soci-snapshotter/releases/download/v%s/%s",
		versionSoci, binaryName)
	hcSoci := helperConfig{
		binaryName: binaryName, sociURL: sociURL,
		installFolder: installFolder,
		finchPath:     finchPath,
	}
	configs["soci"] = hcSoci

	binaries := newSociBinary(fp, fs, execCmdCreator, logger, user, configs["soci"])
	deps = append(deps, dependency.Dependency(binaries))

	return deps
}
