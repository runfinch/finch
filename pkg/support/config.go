// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import fpath "github.com/runfinch/finch/pkg/path"

type bundleConfig struct {
	finch   fpath.Finch
	rootDir string
}

// BundleConfig provides methods that configure what is included in a support bundle.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_support_config.go -package=mocks -mock_names BundleConfig=BundleConfig . BundleConfig
type BundleConfig interface {
	LogFiles() []string
	ConfigFiles() []string
}

// NewBundleConfig creates a new bundleConfig.
func NewBundleConfig(finch fpath.Finch, rootDir string) BundleConfig {
	return &bundleConfig{
		finch:   finch,
		rootDir: rootDir,
	}
}
