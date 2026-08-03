// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
	"github.com/runfinch/finch/pkg/path"
)

type vmAutoStarter struct {
	ncc           command.NerdctlCmdCreator
	ecc           command.Creator
	logger        flog.Logger
	fp            path.Finch
	fs            afero.Fs
	fc            *config.Finch
	home          string
	finchRootPath string
}

func newVMAutoStarter(
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	logger flog.Logger,
	fp path.Finch,
	fs afero.Fs,
	fc *config.Finch,
	home string,
	finchRootPath string,
) VMAutoStarter {
	return &vmAutoStarter{
		ncc:           ncc,
		ecc:           ecc,
		logger:        logger,
		fp:            fp,
		fs:            fs,
		fc:            fc,
		home:          home,
		finchRootPath: finchRootPath,
	}
}

func (v *vmAutoStarter) EnsureVMRunning() error {
	status, err := lima.GetVMStatus(v.ncc, v.logger, limaInstanceName)
	if err != nil {
		return err
	}

	switch status {
	case lima.Running:
		return nil
	case lima.Nonexistent:
		return v.initVM()
	case lima.Stopped:
		return v.startVM()
	default:
		return fmt.Errorf("instance %q has an unknown status", limaInstanceName)
	}
}

func (v *vmAutoStarter) deps() *vmDependencies {
	return buildVMDependencies(v.logger, v.fp, v.ncc, v.ecc, v.fs, v.fc, v.home, v.finchRootPath)
}

func (v *vmAutoStarter) initVM() error {
	deps := v.deps()
	initAction := newInitVMAction(
		v.ncc,
		v.logger,
		deps.optionalDepGroups,
		deps.lca,
		v.fp.BaseYamlFilePath(),
		deps.diskManager,
		v.fc,
	)
	if err := initAction.run(); err != nil {
		return err
	}

	return v.postStartConfig(deps)
}

func (v *vmAutoStarter) startVM() error {
	deps := v.deps()
	startAction := newStartVMAction(
		v.ncc,
		v.logger,
		deps.optionalDepGroups,
		deps.lca,
		deps.diskManager,
	)
	if err := startAction.run(); err != nil {
		return err
	}

	return v.postStartConfig(deps)
}

func (v *vmAutoStarter) postStartConfig(deps *vmDependencies) error {
	postAction := newPostVMStartInitAction(
		v.logger,
		v.ncc,
		v.fs,
		v.fp.LimaSSHPrivateKeyPath(),
		deps.nca,
	)
	return postAction.run()
}
