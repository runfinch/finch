// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"bytes"
	"fmt"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"
)

func TestNewOSImageListCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	fp := path.Finch("/tmp/finch")
	var stdOut bytes.Buffer
	cmd := newOSImageListCommand(logger, fp, &stdOut)
	assert.Equal(t, "list", cmd.Name())
	assert.Contains(t, cmd.Aliases, "ls")
}

func TestOSImageListAction_run(t *testing.T) {
	t.Parallel()

	t.Run("lists images and marks current", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-old.qcow2"), []byte("old"), 0o644))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-new.qcow2"), []byte("new data"), 0o644))

		yamlContent := `images:
  - location: "` + filepath.Join(osDir, "img-new.qcow2") + `"
    arch: "aarch64"
    digest: "sha512:abc"
`
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)
		var stdOut bytes.Buffer
		action := &osImageListAction{logger: logger, fp: fp, stdOut: &stdOut}

		err := action.run()
		require.NoError(t, err)

		output := stdOut.String()
		assert.Contains(t, output, fmt.Sprintf("(Current) img-new.qcow2\t%d bytes", 8))
		assert.Contains(t, output, fmt.Sprintf("  img-old.qcow2\t%d bytes", 3))
	})

	t.Run("logs info when no images found", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte("images: []"), 0o644))

		logger.EXPECT().Info("No OS images found")

		fp := path.Finch(tmpDir)
		var stdOut bytes.Buffer
		action := &osImageListAction{logger: logger, fp: fp, stdOut: &stdOut}
		err := action.run()
		assert.NoError(t, err)
		assert.Empty(t, stdOut.String())
	})

	t.Run("returns error when os image dir does not exist", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		fp := path.Finch("/nonexistent/path")
		var stdOut bytes.Buffer
		action := &osImageListAction{logger: logger, fp: fp, stdOut: &stdOut}
		err := action.run()
		assert.Error(t, err)
	})
}
