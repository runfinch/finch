// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"errors"
	"fmt"
	"strings"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/xorcare/pointer"
)

// applyInit changes settings that will only apply to the VM after a new init.
func (lca *limaConfigApplier) applyInit(limaCfg *limayaml.LimaYAML) (*limayaml.LimaYAML, error) {
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
		toggleUserModeEmulationInstallationScript(limaCfg, false)
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
		toggleUserModeEmulationInstallationScript(limaCfg, true)
	}

	return limaCfg, nil
}

func toggleUserModeEmulationInstallationScript(limaCfg *limayaml.LimaYAML, enabled bool) {
	idx, hasScript := hasUserModeEmulationInstallationScript(limaCfg)
	if !hasScript && enabled {
		limaCfg.Provision = append(limaCfg.Provision, limayaml.Provision{
			Mode: "system",
			Script: fmt.Sprintf(`%s
#!/bin/bash
qemu_pkgs=""
if [ ! -f /usr/bin/qemu-aarch64-static ]; then
  qemu_pkgs="$qemu_pkgs qemu-user-static-aarch64"
elif [ ! -f /usr/bin/qemu-aarch64-static ]; then
  qemu_pkgs="$qemu_pkgs qemu-user-static-arm"
elif [ ! -f  /usr/bin/qemu-aarch64-static ]; then
  qemu_pkgs="$qemu_pkgs qemu-user-static-x86"
fi

if [[ $qemu_pkgs ]]; then
  dnf install -y --setopt=install_weak_deps=False ${qemu_pkgs}
fi
`, userModeEmulationProvisioningScriptHeader),
		})
	} else if hasScript && !enabled {
		if len(limaCfg.Provision) > 0 {
			limaCfg.Provision = append(limaCfg.Provision[:idx], limaCfg.Provision[idx+1:]...)
		}
	}
}

func hasUserModeEmulationInstallationScript(limaCfg *limayaml.LimaYAML) (int, bool) {
	hasCrossArchToolInstallationScript := false
	var scriptIdx int
	for idx, prov := range limaCfg.Provision {
		trimmed := strings.Trim(prov.Script, " ")
		if !hasCrossArchToolInstallationScript && strings.HasPrefix(trimmed, userModeEmulationProvisioningScriptHeader) {
			hasCrossArchToolInstallationScript = true
			scriptIdx = idx
		}
	}

	return scriptIdx, hasCrossArchToolInstallationScript
}
