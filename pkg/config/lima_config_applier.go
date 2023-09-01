// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"
	"strings"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"github.com/xorcare/pointer"
	"golang.org/x/exp/slices"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/system"
)

const (
	sociVersion                              = "0.3.0"
	sociInstallationProvisioningScriptHeader = "# soci installation and configuring"
	sociFileNameFormat                       = "soci-snapshotter-%s-linux-%s.tar.gz"
	sociDownloadURLFormat                    = "https://github.com/awslabs/soci-snapshotter/releases/download/v%s/%s"
	sociInstallationScriptFormat             = `%s
if [ ! -f /usr/local/bin/soci ]; then
	# download soci
	set -e
	curl --retry 2 --retry-max-time 120 -OL "%s"
	# move to usr/local/bin
	tar -C /usr/local/bin -xvf %s soci soci-snapshotter-grpc
fi

# changing containerd config
export config=etc/containerd/config.toml
echo "    [proxy_plugins.soci]
  type = \"snapshot\"
  address = \"/run/soci-snapshotter-grpc/soci-snapshotter-grpc.sock\" " >> $config
	
sudo systemctl restart containerd.service
sudo soci-snapshotter-grpc &> ~/soci-snapshotter-logs &

	`

	userModeEmulationProvisioningScriptHeader = "# cross-arch tools"
)

// LimaConfigApplierSystemDeps contains the system dependencies for LimaConfigApplier.
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
func NewLimaApplier(
	cfg *Finch,
	cmdCreator command.Creator,
	fs afero.Fs,
	limaConfigPath string,
	systemDeps LimaConfigApplierSystemDeps,
) LimaConfigApplier {
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
	if limaCfg.Rosetta.Enabled == nil {
		limaCfg.Rosetta.Enabled = pointer.Bool(false)
		limaCfg.Rosetta.BinFmt = pointer.Bool(false)
	}

	if isInit {
		cfgAfterInit, err := lca.applyInit(&limaCfg)
		if err != nil {
			return fmt.Errorf("failed to apply init-only config values: %w", err)
		}
		limaCfg = *cfgAfterInit
	}

	supportedSnapshotters := []string{"overlayfs", "soci"}
	snapshotters := make(map[string][2]bool)
	for i, snapshotter := range lca.cfg.Snapshotters {
		if !slices.Contains(supportedSnapshotters, snapshotter) {
			return fmt.Errorf("invalid snapshotter config value: %s", snapshotter)
		}

		isDefaultSnapshotter := false
		if i == 0 {
			isDefaultSnapshotter = true
		}

		isEnabled := true
		snapshotters[snapshotter] = [2]bool{isEnabled, isDefaultSnapshotter}
	}

	toggleSnaphotters(&limaCfg, snapshotters)

	limaCfgBytes, err := yaml.Marshal(limaCfg)
	if err != nil {
		return fmt.Errorf("failed to marshal the lima config file: %w", err)
	}

	if err := afero.WriteFile(lca.fs, lca.limaConfigPath, limaCfgBytes, 0o644); err != nil {
		return fmt.Errorf("failed to write to the lima config file: %w", err)
	}

	return nil
}

// toggles snapshotters and sets default snapshotter.
func toggleSnaphotters(limaCfg *limayaml.LimaYAML, snapshotters map[string][2]bool) {
	toggleOverlayFs(limaCfg, snapshotters["overlayfs"][1])
	toggleSoci(limaCfg, snapshotters["soci"][0], snapshotters["soci"][1], sociVersion)
}

// sets overlayfs as the default snapshotter.
func toggleOverlayFs(limaCfg *limayaml.LimaYAML, isDefault bool) {
	if isDefault {
		limaCfg.Env = map[string]string{"CONTAINERD_SNAPSHOTTER": ""}
	}
}

func toggleSoci(limaCfg *limayaml.LimaYAML, enabled bool, isDefault bool, sociVersion string) {
	idx, hasScript := findSociInstallationScript(limaCfg)
	sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, system.NewStdLib().Arch())
	sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
	sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat, sociInstallationProvisioningScriptHeader, sociDownloadURL, sociFileName)
	if !hasScript && enabled {
		limaCfg.Provision = append(limaCfg.Provision, limayaml.Provision{
			Mode:   "system",
			Script: sociInstallationScript,
		})
	} else if hasScript && !enabled {
		if len(limaCfg.Provision) > 0 {
			limaCfg.Provision = append(limaCfg.Provision[:idx], limaCfg.Provision[idx+1:]...)
		}
	}

	if isDefault {
		limaCfg.Env = map[string]string{"CONTAINERD_SNAPSHOTTER": "soci"}
	} else {
		limaCfg.Env = map[string]string{"CONTAINERD_SNAPSHOTTER": ""}
	}
}

func findSociInstallationScript(limaCfg *limayaml.LimaYAML) (int, bool) {
	hasSociInstallationScript := false
	var scriptIdx int
	for idx, prov := range limaCfg.Provision {
		trimmed := strings.Trim(prov.Script, " ")
		if !hasSociInstallationScript && strings.HasPrefix(trimmed, sociInstallationProvisioningScriptHeader) {
			hasSociInstallationScript = true
			scriptIdx = idx
			break
		}
	}

	return scriptIdx, hasSociInstallationScript
}
