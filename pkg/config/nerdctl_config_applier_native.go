// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package config

import (
	"github.com/spf13/afero"
)

const nerdctlRootfulCfgPath = "/etc/finch/nerdctl/nerdctl.toml"

func (nca *nerdctlConfigApplier) nerdctlFs(hostFs afero.Fs, _ string, _ string) (afero.Fs, error) {
	return hostFs, nil
}

// updateEnvironment is a noop on Linux since Finch does not fully control the user's environment
// on native Linux, unlike on macOS/Windows, via a VM.
func updateEnvironment(_ afero.Fs, _ *Finch, _, _, _ string) error {
	return nil
}

func getHomeDir(_ afero.Fs, _ afero.Fs, _ string, _ *Finch, systemHomeDir string) (string, error) {
	return systemHomeDir, nil
}
