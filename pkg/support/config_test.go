// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import (
	"path"
	"testing"

	"github.com/stretchr/testify/assert"

	fpath "github.com/runfinch/finch/pkg/path"
)

func TestNewBundleConfig(t *testing.T) {
	t.Parallel()

	finch := fpath.Finch("/mockfinch")
	homeDir := "/mockhome"
	NewBundleConfig(finch, homeDir)
}

func TestBundleConfig_LogFiles(t *testing.T) {
	t.Parallel()

	finch := fpath.Finch("/mockfinch")
	homeDir := "/mockhome"
	config := NewBundleConfig(finch, homeDir)

	for _, fileName := range config.LogFiles() {
		assert.True(t, path.IsAbs(fileName))
	}
}

func TestBundleConfig_ConfigFiles(t *testing.T) {
	t.Parallel()

	finch := fpath.Finch("/mockfinch")
	homeDir := "/mockhome"
	config := NewBundleConfig(finch, homeDir)

	for _, fileName := range config.ConfigFiles() {
		assert.True(t, path.IsAbs(fileName))
	}
}
