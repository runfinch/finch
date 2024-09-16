// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import (
	fpath "github.com/runfinch/finch/pkg/path"
)

// BundleConfig provides methods that configure what is included in a support bundle.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_support_config.go -package=mocks -mock_names BundleConfig=BundleConfig . BundleConfig
type BundleConfig interface {
	LogFiles() []string
	ConfigFiles() []string
}

type bundleConfig struct {
	finch   fpath.Finch
	homeDir string
}

// NewBundleConfig creates a new bundleConfig.
func NewBundleConfig(finch fpath.Finch, homeDir string) BundleConfig {
	return &bundleConfig{
		finch:   finch,
		homeDir: homeDir,
	}
}
