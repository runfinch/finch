// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"

	limayaml "github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"github.com/xorcare/pointer"
	"gopkg.in/yaml.v3"
)

type limaConfigApplier struct {
	cfg            *Finch
	fs             afero.Fs
	limaConfigPath string
}

var _ LimaConfigApplier = (*limaConfigApplier)(nil)

// NewLimaApplier creates a new LimaConfigApplier that
// applies lima configuration changes by writing to the lima config file on the disk.
func NewLimaApplier(cfg *Finch, fs afero.Fs, limaConfigPath string) LimaConfigApplier {
	return &limaConfigApplier{
		cfg:            cfg,
		fs:             fs,
		limaConfigPath: limaConfigPath,
	}
}

// Apply reads the Finch config from disk and writes the Lima-related portion to the lima config file.
func (lca *limaConfigApplier) Apply() error {
	b, err := afero.ReadFile(lca.fs, lca.limaConfigPath)
	if err != nil {
		return fmt.Errorf("failed to load the lima config file: %w", err)
	}

	var limaCfg limayaml.LimaYAML
	if err := yaml.Unmarshal(b, &limaCfg); err != nil {
		return fmt.Errorf("failed to unmarshal the lima config file: %w", err)
	}

	limaCfg.CPUs = lca.cfg.CPUs
	limaCfg.Memory = lca.cfg.Memory
	limaCfg.Mounts = []limayaml.Mount{}
	for _, ad := range lca.cfg.AdditionalDirectories {
		// Copied default configs from Lima code: https://github.com/lima-vm/lima/blob/142c5fd17c31464e6d37ac2d78b24c16a5500968/pkg/limayaml/defaults.go#L448.
		limaCfg.Mounts = append(limaCfg.Mounts, limayaml.Mount{Location: ad, MountPoint: ad, Writable: pointer.Bool(true),
			SSHFS: limayaml.SSHFS{Cache: pointer.Bool(true), FollowSymlinks: pointer.Bool(false),
				SFTPDriver: pointer.String("")},
			NineP: limayaml.NineP{SecurityModel: pointer.String(limayaml.Default9pSecurityModel),
				ProtocolVersion: pointer.String(limayaml.Default9pProtocolVersion),
				Msize:           pointer.String(limayaml.Default9pMsize), Cache: pointer.String(limayaml.Default9pCacheForRW)}})
	}

	limaCfgBytes, err := yaml.Marshal(limaCfg)
	if err != nil {
		return fmt.Errorf("failed to marshal the lima config file: %w", err)
	}

	if err := afero.WriteFile(lca.fs, lca.limaConfigPath, limaCfgBytes, 0o644); err != nil {
		return fmt.Errorf("failed to write to the lima config file: %w", err)
	}

	return nil
}
