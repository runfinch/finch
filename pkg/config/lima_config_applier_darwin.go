// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"errors"
	"fmt"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/xorcare/pointer"
)

// configureVirtualizationFramework changes settings that will only apply to the VM after a new init.
func (lca *limaConfigApplier) configureVirtualizationFramework(limaCfg *limayaml.LimaYAML) (*limayaml.LimaYAML, error) {
	hasSupport, hasSupportErr := SupportsVirtualizationFramework(lca.cmdCreator)
	if *lca.cfg.Rosetta &&
		lca.systemDeps.Arch() == "arm64" {
		if hasSupportErr != nil {
			return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasSupportErr)
		}
		if !hasSupport {
			return nil, errors.New(`system does not have virtualization framework support, change vmType to "qemu"`)
		}

		limaCfg.Rosetta.Enabled = pointer.Bool(true)
		limaCfg.Rosetta.BinFmt = pointer.Bool(true)
		limaCfg.VMType = pointer.String("vz")
		limaCfg.MountType = pointer.String("virtiofs")
	} else {
		switch *lca.cfg.VMType {
		case "vz":
			{
				if hasSupportErr != nil {
					return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasSupportErr)
				}
				if !hasSupport {
					return nil, errors.New(`system does not have virtualization framework support, change vmType to "qemu"`)
				}
				limaCfg.MountType = pointer.String("virtiofs")
			}
		case "qemu":
			{
				limaCfg.MountType = pointer.String("reverse-sshfs")
			}
		default:
			return nil, fmt.Errorf("unsupported vm type \"%s\" for macOS", *lca.cfg.VMType)
		}

		limaCfg.Rosetta.Enabled = pointer.Bool(false)
		limaCfg.Rosetta.BinFmt = pointer.Bool(false)
		limaCfg.VMType = lca.cfg.VMType
		userModeEmulationInstallationScript(limaCfg)
	}

	return limaCfg, nil
}

func userModeEmulationInstallationScript(limaCfg *limayaml.LimaYAML) {
	limaCfg.Provision = append(limaCfg.Provision, limayaml.Provision{
		Mode:   "system",
		Script: fmt.Sprintf(qemuPkgInstallationScript, userModeEmulationProvisioningScriptHeader),
	})
}

func (lca *limaConfigApplier) configureCPUs(limaCfg *limayaml.LimaYAML) *limayaml.LimaYAML {
	limaCfg.CPUs = lca.cfg.CPUs
	return limaCfg
}

func (lca *limaConfigApplier) configureMemory(limaCfg *limayaml.LimaYAML) *limayaml.LimaYAML {
	limaCfg.Memory = lca.cfg.Memory
	return limaCfg
}

func (lca *limaConfigApplier) configureMounts(limaCfg *limayaml.LimaYAML) *limayaml.LimaYAML {
	limaCfg.Mounts = []limayaml.Mount{}
	for _, ad := range lca.cfg.AdditionalDirectories {
		limaCfg.Mounts = append(limaCfg.Mounts, limayaml.Mount{
			Location: *ad.Path, Writable: pointer.Bool(true),
		})
	}
	return limaCfg
}
