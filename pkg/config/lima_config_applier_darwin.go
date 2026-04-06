// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"errors"
	"fmt"

	"github.com/lima-vm/lima/v2/pkg/limatype"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/flog"
)

// configureVirtualizationFramework changes settings that will only apply to the VM after a new init.
func (lca *limaConfigApplier) configureVirtualizationFramework(limaCfg *limatype.LimaYAML, logger flog.Logger) (*limatype.LimaYAML, error) {
	hasVZSupport, hasVZSupportErr := SupportsVirtualizationFramework(lca.cmdCreator)
	// rosetta option takes priority over vmType.
	// is rosetta:true is set, vmType: qemu is ignored.
	if *lca.cfg.Rosetta && lca.systemDeps.Arch() == "arm64" {
		if hasVZSupportErr != nil {
			return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasVZSupportErr)
		}
		if !hasVZSupport {
			return nil, errors.New(`system does not have virtualization framework support, change vmType to "qemu"`)
		}

		hasRosettaSupportKernel6_18, hasRosettaSupportKernel6_18Err := SupportsRosettaWithLinuxKernel6_18(lca.cmdCreator)
		if hasRosettaSupportKernel6_18Err != nil {
			return nil, fmt.Errorf("failed to check rosetta support for Linux kernel 6.18: %w", hasRosettaSupportKernel6_18Err)
		}
		if !hasRosettaSupportKernel6_18 {
			logger.Warnf(
				"Rosetta does not support Linux kernel 6.18 on macOS < 26. " +
					"Please update your mac or use \"qemu\" emulator by setting " +
					"\"rosetta: false\" in your finch.yaml",
			)
		}

		var vzOpts limatype.VZOpts
		vzOpts.Rosetta.Enabled = pointer.Bool(true)
		vzOpts.Rosetta.BinFmt = pointer.Bool(true)
		if limaCfg.VMOpts == nil {
			limaCfg.VMOpts = make(map[limatype.VMType]any)
		}
		limaCfg.VMOpts[limatype.VZ] = &vzOpts
		limaCfg.VMType = pointer.String("vz")
		limaCfg.MountType = pointer.String("virtiofs")
	} else {
		switch *lca.cfg.VMType {
		case "vz":
			{
				if hasVZSupportErr != nil {
					return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasVZSupportErr)
				}
				if !hasVZSupport {
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

		var vzOpts limatype.VZOpts
		vzOpts.Rosetta.Enabled = pointer.Bool(false)
		vzOpts.Rosetta.BinFmt = pointer.Bool(false)
		if limaCfg.VMOpts == nil {
			limaCfg.VMOpts = make(map[limatype.VMType]any)
		}
		limaCfg.VMOpts[limatype.VZ] = &vzOpts
		limaCfg.VMType = lca.cfg.VMType
		userModeEmulationInstallationScript(limaCfg)
	}

	return limaCfg, nil
}

func userModeEmulationInstallationScript(limaCfg *limatype.LimaYAML) {
	scriptContent := fmt.Sprintf(qemuPkgInstallationScript, userModeEmulationProvisioningScriptHeader)
	limaCfg.Provision = append(limaCfg.Provision, limatype.Provision{
		Mode:   "system",
		Script: &scriptContent,
	})
}

func (lca *limaConfigApplier) configureCPUs(limaCfg *limatype.LimaYAML) *limatype.LimaYAML {
	limaCfg.CPUs = lca.cfg.CPUs
	return limaCfg
}

func (lca *limaConfigApplier) configureMemory(limaCfg *limatype.LimaYAML) *limatype.LimaYAML {
	limaCfg.Memory = lca.cfg.Memory
	return limaCfg
}

func (lca *limaConfigApplier) configureMounts(limaCfg *limatype.LimaYAML) *limatype.LimaYAML {
	limaCfg.Mounts = []limatype.Mount{}
	for _, ad := range lca.cfg.AdditionalDirectories {
		limaCfg.Mounts = append(limaCfg.Mounts, limatype.Mount{
			Location: *ad.Path, Writable: pointer.Bool(true),
		})
	}
	return limaCfg
}

func (lca *limaConfigApplier) configureDisk(limaCfg *limatype.LimaYAML) *limatype.LimaYAML {
	limaCfg.Disk = lca.cfg.BootDisk
	return limaCfg
}
