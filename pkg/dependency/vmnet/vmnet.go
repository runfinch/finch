// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package vmnet handles installation and configuration of dependencies needed for Lima's managed networking
// and port-forwarding to work, with minimal user interaction.
//
// For more information, see [Lima Managed VMNet].
//
// [Lima Managed VMNet]: https://github.com/lima-vm/lima/blob/master/docs/network.md#managed-vmnet-networks-192168105024
package vmnet

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

const (
	description = "Requesting root access to finish network dependency configuration"
	errMsg      = "Failed to finish installing rootful dependencies" +
		" which are needed for external network access within the guest OS." +
		" Boot will continue, but container exposed ports will not be accessible from macOS."
)

// NewDependencyGroup returns a dependency group that contains all the dependencies required to make vmnet networking work.
func NewDependencyGroup(
	execCmdCreator command.Creator,
	limaCmdCreator command.LimaCmdCreator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
) *dependency.Group {
	deps := newDeps(execCmdCreator, limaCmdCreator, fs, fp, logger)
	return dependency.NewGroup(deps, description, errMsg)
}

func newDeps(
	execCmdCreator command.Creator,
	limaCmdCreator command.LimaCmdCreator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
) []dependency.Dependency {
	binaries := newBinaries(fp, fs, execCmdCreator, logger)
	sudoersFile := newSudoersFile(fs, execCmdCreator, limaCmdCreator, logger)
	overrideLimaConfig := newOverrideLimaConfig(fp, binaries, sudoersFile, fs, logger)

	// Ordering of these dependencies is important because overrideLimaConfig has a dependency on binaries and sudoersFile.
	// Adding the network configuration to Lima's overrideConfig without first installing binaries and sudoers leads
	// to a broken user experience.
	// Since Group.Install() installs dependencies serially, in-order, and continues to the next dependency after an error,
	// overrideLimaConfig itself checks to make sure that binaries and sudoers are installed before installing itself.
	return []dependency.Dependency{binaries, sudoersFile, overrideLimaConfig}
}
