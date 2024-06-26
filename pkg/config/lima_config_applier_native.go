// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package config

import (
	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
)

// NewLimaApplier creates a new LimaConfigApplier that
// applies lima configuration changes by writing to the lima config file on the disk.
func NewLimaApplier(
	_ *Finch,
	_ command.Creator,
	_ afero.Fs,
	_ string,
	_ string,
	_ LimaConfigApplierSystemDeps,
	_ string,
) LimaConfigApplier {
	return &limaConfigApplier{}
}

func (lca *limaConfigApplier) ConfigureDefaultLimaYaml() error {
	return nil
}

// ConfigureOverrideLimaYaml writes Lima-specific config values from Finch's config to override.yaml at lima config file path.
// ConfigureOverrideLimaYaml will create a override.yaml at the path if it does not exist.
func (lca *limaConfigApplier) ConfigureOverrideLimaYaml() error {
	return nil
}

func (lca *limaConfigApplier) configureDefaultSnapshotter(limaCfg *limayaml.LimaYAML) error {
	return nil
}

func (lca *limaConfigApplier) provisionSnapshotters(limaCfg *limayaml.LimaYAML) error {
	return nil
}

func (lca *limaConfigApplier) provisionSociSnapshotter(limaCfg *limayaml.LimaYAML) {
}

func (lca *limaConfigApplier) GetFinchConfigPath() string {
	return lca.finchConfigPath
}
