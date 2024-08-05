// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

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
	sociVersion                              = "0.5.0"
	sociAMD64Sha256Sum                       = "768f73dbd2c772386df1d12d0a371e9cbcefebea4856623335a2e8ea5170691c"
	sociARM64Sha256Sum                       = "9238e00426ec67a725d511e232476248f2379d66a4ccab224a50ad4c56a0292e"
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

	# pull release tarball
	release_tarball="%s"
	curl --retry 2 --retry-max-time 120 -OL "%s"

	# validate shasum
	(sha256sum "${release_tarball}" | cut -d ' ' -f 1 | grep -xq "^%s$") || \
	  (echo "error: shasum verification failed for SOCI release tarball" && rm -f "${release_tarball}" && exit 1)

	# move to usr/local/bin
	tar -C /usr/local/bin -xvf ${release_tarball} ./soci ./soci-snapshotter-grpc

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
	qemuPkgInstallationScript                 = `%s
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
`
)

// LimaConfigApplierSystemDeps contains the system dependencies for LimaConfigApplier.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_lima_config_applier_system_deps.go -package=mocks -mock_names LimaConfigApplierSystemDeps=LimaConfigApplierSystemDeps . LimaConfigApplierSystemDeps
type LimaConfigApplierSystemDeps interface {
	system.RuntimeArchGetter
	system.RuntimeOSGetter
}

type limaConfigApplier struct {
	cfg                    *Finch
	cmdCreator             command.Creator
	fs                     afero.Fs
	limaDefaultConfigPath  string
	limaOverrideConfigPath string
	systemDeps             LimaConfigApplierSystemDeps
	finchConfigPath        string
}

var _ LimaConfigApplier = (*limaConfigApplier)(nil)

// NewLimaApplier creates a new LimaConfigApplier that
// applies lima configuration changes by writing to the lima config file on the disk.
func NewLimaApplier(
	cfg *Finch,
	cmdCreator command.Creator,
	fs afero.Fs,
	limaDefaultConfigPath string,
	limaOverrideConfigPath string,
	systemDeps LimaConfigApplierSystemDeps,
	finchConfigPath string,
) LimaConfigApplier {
	return &limaConfigApplier{
		cfg:                    cfg,
		cmdCreator:             cmdCreator,
		fs:                     fs,
		limaDefaultConfigPath:  limaDefaultConfigPath,
		limaOverrideConfigPath: limaOverrideConfigPath,
		systemDeps:             systemDeps,
		finchConfigPath:        finchConfigPath,
	}
}

// ConfigureDefaultLimaYaml writes Lima-specific config values from Finch's config to default.yaml at lima config file path.
// ConfigureDefaultLimaYaml will create a default.yaml at the path if it does not exist.
func (lca *limaConfigApplier) ConfigureDefaultLimaYaml() error {
	if err := afero.WriteFile(lca.fs, lca.limaDefaultConfigPath, []byte(""), 0o600); err != nil {
		return fmt.Errorf("failed to create the an empty lima config file: %w", err)
	}

	var limaCfg limayaml.LimaYAML

	if limaCfg.Rosetta.Enabled == nil {
		limaCfg.Rosetta.Enabled = pointer.Bool(false)
		limaCfg.Rosetta.BinFmt = pointer.Bool(false)
	}

	cfgAfterInit, err := lca.configureVirtualizationFramework(&limaCfg)
	if err != nil {
		return fmt.Errorf("failed to apply init-only config values: %w", err)
	}
	limaCfg = *cfgAfterInit

	limaCfgBytes, err := yaml.Marshal(limaCfg)
	if err != nil {
		return fmt.Errorf("failed to marshal the lima config file: %w", err)
	}

	if err := afero.WriteFile(lca.fs, lca.limaDefaultConfigPath, limaCfgBytes, 0o600); err != nil {
		return fmt.Errorf("failed to write to the lima config file: %w", err)
	}

	return nil
}

// ConfigureOverrideLimaYaml writes Lima-specific config values from Finch's config to override.yaml at lima config file path.
// ConfigureOverrideLimaYaml will create a override.yaml at the path if it does not exist.
func (lca *limaConfigApplier) ConfigureOverrideLimaYaml() error {
	if err := afero.WriteFile(lca.fs, lca.limaOverrideConfigPath, []byte(""), 0o600); err != nil {
		return fmt.Errorf("failed to create the an empty lima config file: %w", err)
	}
	var limaCfg limayaml.LimaYAML

	lca.configureCPUs(&limaCfg)
	lca.configureMemory(&limaCfg)
	lca.configureMounts(&limaCfg)
	if *lca.cfg.VMType != "wsl2" && len(limaCfg.AdditionalDisks) == 0 {
		limaCfg.AdditionalDisks = append(limaCfg.AdditionalDisks, limayaml.Disk{
			Name: "finch",
		})
	}

	err := lca.provisionSnapshotters(&limaCfg)
	if err != nil {
		return fmt.Errorf("failed to provision snapshotters: %w", err)
	}

	err = lca.configureDefaultSnapshotter(&limaCfg)
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

	if err := afero.WriteFile(lca.fs, lca.limaOverrideConfigPath, limaCfgBytes, 0o600); err != nil {
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

func (lca *limaConfigApplier) configureDefaultSnapshotter(limaCfg *limayaml.LimaYAML) error {
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

func (lca *limaConfigApplier) provisionSnapshotters(limaCfg *limayaml.LimaYAML) error {
	for _, snapshotter := range lca.cfg.Snapshotters {
		switch snapshotter {
		case "soci":
			lca.provisionSociSnapshotter(limaCfg)
		case "overlayfs":
			continue
		default:
			return fmt.Errorf("snapshotter %s is not supported", snapshotter)
		}
	}

	return nil
}

func (lca *limaConfigApplier) provisionSociSnapshotter(limaCfg *limayaml.LimaYAML) {
	arch := lca.systemDeps.Arch()
	sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, arch)
	sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
	sociSha256Sum := sociAMD64Sha256Sum
	if arch == "arm64" {
		sociSha256Sum = sociARM64Sha256Sum
	}
	sociServiceDownloadURL := fmt.Sprintf(sociServiceDownloadURLFormat, sociVersion)
	sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat, sociInstallationProvisioningScriptHeader,
		sociFileName, sociDownloadURL, sociSha256Sum, sociServiceDownloadURL)
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

func (lca *limaConfigApplier) GetFinchConfigPath() string {
	return lca.finchConfigPath
}
