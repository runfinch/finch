// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"
	"strings"

	goyaml "github.com/goccy/go-yaml"
	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"github.com/xorcare/pointer"
	"golang.org/x/exp/slices"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/system"
)

const (
	sociVersion                              = "0.4.0"
	snapshotterProvisioningScriptHeader      = "# snapshotter provisioning script"
	sociInstallationProvisioningScriptHeader = snapshotterProvisioningScriptHeader + ": soci"
	sociFileNameFormat                       = "soci-snapshotter-%s-linux-%s.tar.gz"
	sociDownloadURLFormat                    = "https://github.com/awslabs/soci-snapshotter/releases/download/v%s/%s"
	sociServiceDownloadURLFormat             = "https://raw.githubusercontent.com/awslabs/soci-snapshotter/v%s/soci-snapshotter.service"
	//nolint:lll // command string
	sociInstallationScriptFormat = `%s
if [ ! -f /usr/local/bin/soci ]; then
	# download soci
	set -e
	curl --retry 2 --retry-max-time 120 -OL "%s"
	# move to usr/local/bin
	tar -C /usr/local/bin -xvf %s soci soci-snapshotter-grpc

	# install as a systemd service
	curl --retry 2 --retry-max-time 120 -OL "%s"
	mv soci-snapshotter.service /usr/local/lib/systemd/system/
	ln -s /usr/local/lib/systemd/system/soci-snapshotter.service /etc/systemd/system/multi-user.target.wants/
	restorecon -v /usr/local/lib/systemd/system/soci-snapshotter.service
	systemctl daemon-reload
	sudo mkdir -p /usr/local/lib/systemd/system/soci-snapshotter.service.d/
	printf '[Unit]\nPartOf=containerd.service\n\n[Service]\nKillSignal=SIGTERM\n' | sudo tee /usr/local/lib/systemd/system/soci-snapshotter.service.d/finch.conf
	systemctl enable --now soci-snapshotter
fi

# changing containerd config, this seems to get reset on every VM stop/start
if ! grep -q soci /etc/containerd/config.toml; then
	printf '    [proxy_plugins.soci]\n      type = "snapshot"\n      address = "/run/soci-snapshotter-grpc/soci-snapshotter-grpc.sock"\n' >> /etc/containerd/config.toml
fi

sudo systemctl restart containerd.service
`

	userModeEmulationProvisioningScriptHeader = "# cross-arch tools"
	wslDiskFormatScriptHeader                 = "# wsl disk format script"
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
		if err := afero.WriteFile(lca.fs, lca.limaConfigPath, []byte(""), 0o600); err != nil {
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

	// Unmarshall with custom unmarshaler for Disk:
	// https://github.com/lima-vm/lima/blob/v0.17.2/pkg/limayaml/load.go#L16
	if err := goyaml.UnmarshalWithOptions(b, &limaCfg, goyaml.DisallowDuplicateKey(),
		goyaml.CustomUnmarshaler[limayaml.Disk](unmarshalDisk)); err != nil {
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

	if *lca.cfg.VMType != "wsl2" && len(limaCfg.AdditionalDisks) == 0 {
		limaCfg.AdditionalDisks = append(limaCfg.AdditionalDisks, limayaml.Disk{
			Name: "finch",
		})
	}

	err = provisionSnapshotters(lca, &limaCfg)
	if err != nil {
		return fmt.Errorf("failed to provision snapshotters: %w", err)
	}

	err = configureDefaultSnapshotter(lca, &limaCfg)
	if err != nil {
		return fmt.Errorf("failed to configure default snapshotter: %w", err)
	}

	if *lca.cfg.VMType == "wsl2" {
		ensureWslDiskFormatScript(&limaCfg)
	}

	limaCfgBytes, err := yaml.Marshal(limaCfg)
	if err != nil {
		return fmt.Errorf("failed to marshal the lima config file: %w", err)
	}

	if err := afero.WriteFile(lca.fs, lca.limaConfigPath, limaCfgBytes, 0o600); err != nil {
		return fmt.Errorf("failed to write to the lima config file: %w", err)
	}

	return nil
}

func validateSnapshotter(snapshotter string) error {
	supportedSnapshotters := []string{"overlayfs", "soci"}
	if !slices.Contains(supportedSnapshotters, snapshotter) {
		return fmt.Errorf("snapshotter %s is not supported", snapshotter)
	}
	return nil
}

func configureDefaultSnapshotter(lca *limaConfigApplier, limaCfg *limayaml.LimaYAML) error {
	if len(lca.cfg.Snapshotters) == 0 {
		limaCfg.Env = map[string]string{}
		return nil
	}

	snapshotter := lca.cfg.Snapshotters[0]
	err := validateSnapshotter(snapshotter)
	if err != nil {
		return err
	}

	limaCfg.Env = map[string]string{"CONTAINERD_SNAPSHOTTER": snapshotter}

	return nil
}

func provisionSnapshotters(lca *limaConfigApplier, limaCfg *limayaml.LimaYAML) error {
	removeSnapshotterProvisioningScripts(limaCfg)
	for _, snapshotter := range lca.cfg.Snapshotters {
		switch snapshotter {
		case "soci":
			provisionSociSnapshotter(limaCfg)
		case "overlayfs":
			continue
		default:
			return fmt.Errorf("snapshotter %s is not supported", snapshotter)
		}
	}

	return nil
}

func provisionSociSnapshotter(limaCfg *limayaml.LimaYAML) {
	sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, system.NewStdLib().Arch())
	sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
	sociServiceDownloadURL := fmt.Sprintf(sociServiceDownloadURLFormat, sociVersion)
	sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat, sociInstallationProvisioningScriptHeader,
		sociDownloadURL, sociFileName, sociServiceDownloadURL)
	limaCfg.Provision = append(limaCfg.Provision, limayaml.Provision{
		Mode:   "system",
		Script: sociInstallationScript,
	})
}

func ensureWslDiskFormatScript(limaCfg *limayaml.LimaYAML) {
	if hasScript := findWslDiskFormatScript(limaCfg); !hasScript {
		limaCfg.Provision = append(limaCfg.Provision, limayaml.Provision{
			Mode: "system",
			Script: fmt.Sprintf(`%s
#!/bin/bash
mkdir -p /mnt/lima-finch
mount "$(blkid -s TYPE -t LABEL=FinchDataDisk -o device)" /mnt/lima-finch
`, wslDiskFormatScriptHeader),
		})
	}
}

func findWslDiskFormatScript(limaCfg *limayaml.LimaYAML) bool {
	hasWslDiskFormatScript := false
	for _, prov := range limaCfg.Provision {
		trimmed := strings.Trim(prov.Script, " ")
		if !hasWslDiskFormatScript && strings.HasPrefix(trimmed, wslDiskFormatScriptHeader) {
			hasWslDiskFormatScript = true
			break
		}
	}

	return hasWslDiskFormatScript
}

// https://github.com/lima-vm/lima/blob/v0.17.2/pkg/limayaml/load.go#L16
func unmarshalDisk(dst *limayaml.Disk, b []byte) error {
	var s string
	if err := goyaml.Unmarshal(b, &s); err == nil {
		*dst = limayaml.Disk{Name: s}
		return nil
	}
	return goyaml.Unmarshal(b, dst)
}

func removeSnapshotterProvisioningScripts(limaCfg *limayaml.LimaYAML) {
	var provisionScripts []limayaml.Provision
	for _, prov := range limaCfg.Provision {
		trimmed := strings.Trim(prov.Script, " ")
		if !strings.HasPrefix(trimmed, snapshotterProvisioningScriptHeader) {
			provisionScripts = append(provisionScripts, prov)
		}
	}
	limaCfg.Provision = provisionScripts
}
