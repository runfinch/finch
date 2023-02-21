// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/system"
	"github.com/spf13/afero"
	"github.com/xorcare/pointer"
	"gopkg.in/yaml.v3"
)

const USER_MODE_EMULATION_INSTALLATION_SCRIPT_HEADER = "# cross-arch tools"

// LoadSystemDeps contains the system dependencies for Load.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_lima_config_applier_system_deps.go -package=mocks -mock_names LimaConfigApplierSystemDeps=LimaConfigApplierSystemDeps . LimaConfigApplierSystemDeps
type LimaConfigApplierSystemDeps interface {
	system.RuntimeArchGetter
	system.RuntimeOSGetter
}

type limaConfigApplier struct {
	cfg            *Finch
	cmdCreator     command.Creator
	fs             afero.Fs
	limaConfigPath string
	systemDeps     LimaConfigApplierSystemDeps
}

var _ LimaConfigApplier = (*limaConfigApplier)(nil)

// NewLimaApplier creates a new LimaConfigApplier that
// applies lima configuration changes by writing to the lima config file on the disk.
func NewLimaApplier(cfg *Finch, cmdCreator command.Creator, fs afero.Fs, limaConfigPath string, systemDeps LimaConfigApplierSystemDeps) LimaConfigApplier {
	return &limaConfigApplier{
		cfg:            cfg,
		cmdCreator:     cmdCreator,
		fs:             fs,
		limaConfigPath: limaConfigPath,
		systemDeps:     systemDeps,
	}
}

// Apply writes Lima-specific config values from Finch's config to the supplied lima config file path.
// Apply will create a lima config file at the path if it does not exist.
func (lca *limaConfigApplier) Apply(isInit bool) error {
	if cfgExists, err := afero.Exists(lca.fs, lca.limaConfigPath); err != nil {
		return fmt.Errorf("error checking if file at path %s exists, error: %w", lca.limaConfigPath, err)
	} else if !cfgExists {
		if err := afero.WriteFile(lca.fs, lca.limaConfigPath, []byte(""), 0o644); err != nil {
			return fmt.Errorf("failed to create the an empty lima config file: %w", err)
		}
	}

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
		limaCfg.Mounts = append(limaCfg.Mounts, limayaml.Mount{
			Location: *ad.Path, Writable: pointer.Bool(true),
		})
	}

	if isInit {
		cfgAfterInit, err := lca.applyInit(&limaCfg)
		if err != nil {
			return fmt.Errorf("failed to apply init-only config values: %w", err)
		}
		limaCfg = *cfgAfterInit
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

// applyInit changes settings that will only apply to the VM after a new init.
func (lca *limaConfigApplier) applyInit(limaCfg *limayaml.LimaYAML) (*limayaml.LimaYAML, error) {
	hasSupport, hasSupportErr := lca.supportsVirtualizationFramework()
	if *lca.cfg.Rosetta == true &&
		lca.systemDeps.OS() == "darwin" &&
		lca.systemDeps.Arch() == "arm64" {

		if hasSupportErr != nil {
			return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasSupportErr)
		}
		if hasSupport == false {
			return nil, fmt.Errorf(`system does not have virtualization framework support, change vmType to "qemu"`)
		}

		limaCfg.Rosetta.Enabled = true
		limaCfg.Rosetta.BinFmt = true
		limaCfg.VMType = pointer.String("vz")
		limaCfg.MountType = pointer.String("virtiofs")
		toggleUserModeEmulationInstallationScript(limaCfg, false)
	} else {
		if *lca.cfg.VMType == "vz" {
			if hasSupportErr != nil {
				return nil, fmt.Errorf("failed to check for virtualization framework support: %w", hasSupportErr)
			}
			if !hasSupport {
				return nil, fmt.Errorf(`system does not have virtualization framework support, change vmType to "qemu"`)
			}
			limaCfg.MountType = pointer.String("virtiofs")
		} else if *lca.cfg.VMType == "qemu" {
			limaCfg.MountType = pointer.String("reverse-sshfs")
		}
		limaCfg.Rosetta = limayaml.Rosetta{}
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
dnf install -y --setopt=install_weak_deps=False qemu-user-static-aarch64 qemu-user-static-arm qemu-user-static-x86
`, USER_MODE_EMULATION_INSTALLATION_SCRIPT_HEADER)})
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
		if !hasCrossArchToolInstallationScript && strings.HasPrefix(trimmed, USER_MODE_EMULATION_INSTALLATION_SCRIPT_HEADER) {
			hasCrossArchToolInstallationScript = true
			scriptIdx = idx
		}
	}

	return scriptIdx, hasCrossArchToolInstallationScript
}

func (lca *limaConfigApplier) supportsVirtualizationFramework() (bool, error) {
	cmd := lca.cmdCreator.Create("sw_vers", "-productVersion")
	out, err := cmd.Output()
	if err != nil {
		return false, fmt.Errorf("failed to run sw_vers command: %w", err)
	}

	splitVer := strings.Split(string(out), ".")
	if len(splitVer) <= 0 {
		return false, fmt.Errorf("unexpected result from string split: %v", splitVer)
	}

	majorVersionInt, err := strconv.ParseInt(splitVer[0], 10, 64)
	if err != nil {
		return false, fmt.Errorf("failed to parse split sw_vers output (%s) into int: %w", splitVer[0], err)
	}

	if majorVersionInt >= 11 {
		return true, nil
	}

	return false, nil
}
