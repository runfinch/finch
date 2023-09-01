// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package config handles parsing and applying options from finch's config
// file. These options can be applied to any aspect of the project, from the VMM
// to components running inside the VM.
//
// Currently, VMM options are applied to one of Lima's configuration files and options
// within the VM are applied via running SSH commands and writing files via SFTP.
package config

import (
	"errors"
	"fmt"
	"path"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/system"
)

// AdditionalDirectory represents the additional directory used in Finch config.
type AdditionalDirectory struct {
	Path *string `yaml:"path"`
}

// Finch represents the configuration file for Finch CLI.
type Finch struct {
	CPUs   *int    `yaml:"cpus,omitempty"`
	Memory *string `yaml:"memory,omitempty"`
	// Snapshotters: the snapshotters that will be installed and configured automatically on vm init or on vm start.
	// Values: `soci` for SOCI snapshotter; `overlayfs` for default overlay snapshotter.
	Snapshotters []string `yaml:"snapshotters,omitempty"`
	// CredsHelper: the list of credential helpers that will be installed and configured automatically on vm init or on vm start
	CredsHelpers []string `yaml:"creds_helpers,omitempty"`
	// AdditionalDirectories are the work directories that are not supported by default. In macOS, only home directory is supported by default.
	// For example, if you want to mount a directory into a container, and that directory is not under your home directory,
	// then you'll need to specify this field to add that directory or any ascendant of it as a work directory.
	AdditionalDirectories []AdditionalDirectory `yaml:"additional_directories,omitempty"`
	// VMType sets which technology to use for Finch's VM.
	// Currently supports `qemu` and `vz` (Virtualization.framework).
	// Also sets mountType to "virtiofs", instead of the default "reverse-sshfs"
	// Requires macOS 13.0 or later.
	// This setting will only be applied on vm init.
	VMType *limayaml.VMType `yaml:"vmType,omitempty"`
	// Use Rosetta 2 when available. Forces vmType to "vz" (Virtualization.framework) if set to `true`.
	// Requires macOS 13.0 or later and an Apple Silicon (ARM64) mac.
	// Has no effect on systems where Rosetta 2 is not available (Intel/AMD64 macs, or macOS < 13.0).
	// This setting will only be applied on vm init.
	Rosetta *bool `yaml:"rosetta,omitempty"`
}

// Nerdctl is a copy from github.com/containerd/nerdctl/cmd/nerdctl/main.go
// TODO: make PR to nerdctl repo to move this config out of the main package
// so it can be imported on macOS.
type Nerdctl struct {
	Debug            bool     `toml:"debug,omitempty"`
	DebugFull        bool     `toml:"debug_full1,omitempty"`
	Address          string   `toml:"address,omitempty"`
	Namespace        string   `toml:"namespace,omitempty"`
	Snapshotter      string   `toml:"snapshotter,omitempty"`
	CNIPath          string   `toml:"cni_path,omitempty"`
	CNINetConfPath   string   `toml:"cni_netconfpath,omitempty"`
	DataRoot         string   `toml:"data_root,omitempty"`
	CgroupManager    string   `toml:"cgroup_manager,omitempty"`
	InsecureRegistry bool     `toml:"insecure_registry,omitempty"`
	HostsDir         []string `toml:"hosts_dir,omitempty"`
}

// LimaConfigApplier applies lima configuration changes.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_lima_config_applier.go -package=mocks -mock_names LimaConfigApplier=LimaConfigApplier . LimaConfigApplier
type LimaConfigApplier interface {
	Apply(isInit bool) error
}

// NerdctlConfigApplier applies nerdctl configuration changes.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_nerdctl_config_applier.go -package=mocks -mock_names NerdctlConfigApplier=NerdctlConfigApplier . NerdctlConfigApplier
type NerdctlConfigApplier interface {
	Apply(remoteAddr string) error
}

// LoadSystemDeps contains the system dependencies for Load.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_load_system_deps.go -package=mocks -mock_names LoadSystemDeps=LoadSystemDeps . LoadSystemDeps
type LoadSystemDeps interface {
	system.RuntimeCPUGetter
}

// writeConfig writes a config struct back to a YAML file at a path.
func writeConfig(cfg *Finch, fs afero.Fs, path string) error {
	cfgBuf, err := yaml.Marshal(cfg)
	if err != nil {
		return fmt.Errorf("failed to write to marshal config: %w", err)
	}

	if err := afero.WriteFile(fs, path, cfgBuf, 0o755); err != nil {
		return fmt.Errorf("failed to write to config file: %w", err)
	}

	return nil
}

func ensureConfigDir(fs afero.Fs, path string, log flog.Logger) error {
	dirExists, err := afero.DirExists(fs, path)
	if err != nil {
		return fmt.Errorf("failed to get status of config directory: %w", err)
	}
	if !dirExists {
		log.Infof("%q directory doesn't exist, attempting to create it", path)
		if err := fs.Mkdir(path, 0o755); err != nil {
			return fmt.Errorf("failed to create config directory: %w", err)
		}
	}
	return nil
}

// Load loads Finch's configuration from a YAML file and initializes default values.
func Load(fs afero.Fs, cfgPath string, log flog.Logger, systemDeps LoadSystemDeps, mem fmemory.Memory) (*Finch, error) {
	b, err := afero.ReadFile(fs, cfgPath)
	if err != nil {
		if errors.Is(err, afero.ErrFileNotFound) {
			log.Infof("Using default values due to missing config file at %q", cfgPath)
			defCfg := applyDefaults(&Finch{}, systemDeps, mem)
			if err := ensureConfigDir(fs, path.Dir(cfgPath), log); err != nil {
				return nil, fmt.Errorf("failed to ensure %q directory: %w", cfgPath, err)
			}
			if err := writeConfig(defCfg, fs, cfgPath); err != nil {
				return nil, err
			}
			return defCfg, nil
		}
		return nil, fmt.Errorf("failed to read the config file: %w", err)
	}

	var cfg Finch
	if err := yaml.Unmarshal(b, &cfg); err != nil {
		return nil, fmt.Errorf("failed to unmarshal config file: %w", err)
	}

	defCfg := applyDefaults(&cfg, systemDeps, mem)
	if err := writeConfig(defCfg, fs, cfgPath); err != nil {
		return nil, err
	}

	if err := validate(defCfg, log, systemDeps, mem); err != nil {
		return nil, fmt.Errorf("failed to validate config file: %w", err)
	}

	return defCfg, nil
}
