// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"errors"
	"fmt"
	"path"

	toml "github.com/pelletier/go-toml"
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/fssh"
)

const (
	nerdctlNamespace = "finch"
)

type nerdctlConfigApplier struct {
	dialer           fssh.Dialer
	fs               afero.Fs
	privateKeyPath   string
	finchDir         string
	homeDir          string
	limaInstancePath string
	fc               *Finch
}

var _ NerdctlConfigApplier = (*nerdctlConfigApplier)(nil)

// NewNerdctlApplier creates a new NerdctlConfigApplier that
// applies nerdctl configuration changes by SSHing to the lima VM to update the nerdctl configuration file in it.
func NewNerdctlApplier(
	dialer fssh.Dialer,
	fs afero.Fs,
	privateKeyPath,
	finchDir,
	homeDir string,
	limaInstancePath string,
	fc *Finch,
) NerdctlConfigApplier {
	return &nerdctlConfigApplier{
		dialer:           dialer,
		fs:               fs,
		privateKeyPath:   privateKeyPath,
		finchDir:         finchDir,
		homeDir:          homeDir,
		limaInstancePath: limaInstancePath,
		fc:               fc,
	}
}

// updateNerdctlConfig reads from the nerdctl config and updates values.
func updateNerdctlConfig(fs afero.Fs, homeDir string, rootless bool) error {
	nerdctlRootlessCfgPath := fmt.Sprintf("%s/.config/nerdctl/nerdctl.toml", homeDir)

	var cfgPath string
	if rootless {
		cfgPath = nerdctlRootlessCfgPath
	} else {
		cfgPath = nerdctlRootfulCfgPath
	}

	if err := fs.MkdirAll(path.Dir(cfgPath), 0o700); err != nil {
		return fmt.Errorf("failed to create config dir (dir(filepath)) %s: %w", cfgPath, err)
	}

	if _, err := fs.Stat(cfgPath); errors.Is(err, afero.ErrFileNotFound) {
		if err := afero.WriteFile(fs, cfgPath, []byte{}, 0o600); err != nil {
			return fmt.Errorf("failed to create %q with afero.WriteFile: %w", cfgPath, err)
		}
	}

	var cfg Nerdctl
	cfgBuf, err := afero.ReadFile(fs, cfgPath)
	if err != nil {
		return fmt.Errorf("updateEnvironment %q: %w", cfgPath, err)
	}

	if err := toml.Unmarshal(cfgBuf, &cfg); err != nil {
		return fmt.Errorf("failed to unmarshal config file %q: %w", cfgPath, err)
	}

	cfg.Namespace = nerdctlNamespace

	updatedCfg, err := toml.Marshal(cfg)
	if err != nil {
		return fmt.Errorf("failed to marshal config file %q: %w", cfgPath, err)
	}

	if err := afero.WriteFile(fs, cfgPath, updatedCfg, 0o600); err != nil {
		return fmt.Errorf("failed to write to config file %q: %w", cfgPath, err)
	}

	return nil
}

// Apply updates the nerdctl config.
func (nca *nerdctlConfigApplier) Apply(remoteAddr string) error {
	nFs, err := nca.nerdctlFs(nca.fs, nca.privateKeyPath, remoteAddr)
	if err != nil {
		return fmt.Errorf("failed to get nerdctlFs: %w", err)
	}

	homeDir, err := getHomeDir(nca.fs, nFs, nca.limaInstancePath, nca.fc, nca.homeDir)
	if err != nil {
		return fmt.Errorf("failed to get lima home dir: %w", err)
	}

	// rootless hardcoded to false for now to match our finch.yaml file
	if err := updateNerdctlConfig(nFs, homeDir, false); err != nil {
		return fmt.Errorf("failed to update the nerdctl config file: %w", err)
	}

	if err := updateEnvironment(nFs, nca.fc, nca.finchDir, homeDir, homeDir); err != nil {
		return fmt.Errorf("failed to update the user's .profile file: %w", err)
	}
	return nil
}
