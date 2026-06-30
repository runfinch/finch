// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/osimage"
	"github.com/runfinch/finch/pkg/path"
)

func TestOSImageRollbackAction_run(t *testing.T) {
	t.Parallel()

	t.Run("rolls back to previous image", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Infof("Removed OS image: %s", "img-new.qcow2")
		logger.EXPECT().Infof("Rolled back to OS image: %s", "img-old.qcow2")
		logger.EXPECT().Info("Please re-initialize your Finch VM instance by running \"finch vm stop && finch vm remove && finch vm init\"")

		tmpDir := t.TempDir()
		fp := path.Finch(tmpDir)
		finchDir := fp.FinchDir(tmpDir)
		osDir := fp.OSImageDir()
		require.NoError(t, os.MkdirAll(finchDir, 0o755))
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		// Create image files
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-old.qcow2"), []byte("old"), 0o644))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-new.qcow2"), []byte("new"), 0o644))

		// Create finch.yaml pointing to new image
		yamlContent := `images:
  - location: "` + filepath.Join(osDir, "img-new.qcow2") + `"
    arch: "aarch64"
    digest: "sha512:newdigest"
`
		require.NoError(t, os.WriteFile(fp.BaseYamlFilePath(), []byte(yamlContent), 0o644))

		// Create history with two entries
		history := osimage.NewHistory(3)
		history.PushLast("img-old.qcow2", "sha512:olddigest")
		history.PushLast("img-new.qcow2", "sha512:newdigest")
		require.NoError(t, osimage.SaveHistory(finchDir, history))

		fc := &config.Finch{}
		action := &osImageRollbackAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
		}

		err := action.run()
		require.NoError(t, err)

		// Verify finch.yaml was updated to old image
		img, err := osimage.GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Contains(t, img.Location, "img-old.qcow2")
		assert.Equal(t, "sha512:olddigest", img.Digest)

		// Verify new image was deleted from disk
		_, err = os.Stat(filepath.Join(osDir, "img-new.qcow2"))
		assert.True(t, os.IsNotExist(err))

		// Verify history now has only one entry
		updatedHistory, err := osimage.LoadHistory(finchDir, 3)
		require.NoError(t, err)
		assert.Equal(t, 1, updatedHistory.Len())
		assert.Equal(t, "img-old.qcow2", updatedHistory.PeekLast().Name)
	})

	t.Run("returns error when backup is disabled", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		backupDisabled := false
		fc := &config.Finch{}
		fc.OSImage.Backup = &backupDisabled

		action := &osImageRollbackAction{
			logger:        logger,
			fp:            path.Finch("/tmp"),
			fc:            fc,
			finchRootPath: "/tmp",
		}

		err := action.run()
		require.Error(t, err)
		assert.Contains(t, err.Error(), "backups are disabled")
	})

	t.Run("returns error when no history exists", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		tmpDir := t.TempDir()
		fp := path.Finch(tmpDir)
		finchDir := fp.FinchDir(tmpDir)
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		fc := &config.Finch{}
		action := &osImageRollbackAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
		}

		err := action.run()
		require.Error(t, err)
		assert.Contains(t, err.Error(), "no previous image to roll back to")
	})

	t.Run("returns error when only one image in history", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)

		tmpDir := t.TempDir()
		fp := path.Finch(tmpDir)
		finchDir := fp.FinchDir(tmpDir)
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		history := osimage.NewHistory(3)
		history.PushLast("img-only.qcow2", "sha512:only")
		require.NoError(t, osimage.SaveHistory(finchDir, history))

		fc := &config.Finch{}
		action := &osImageRollbackAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
		}

		err := action.run()
		require.Error(t, err)
		assert.Contains(t, err.Error(), "no previous image to roll back to")
	})

	t.Run("returns error when previous image file is missing", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Infof("The image may be available for download at %s%s", "https://deps.runfinch.com/", "img-old.qcow2")

		tmpDir := t.TempDir()
		fp := path.Finch(tmpDir)
		finchDir := fp.FinchDir(tmpDir)
		osDir := fp.OSImageDir()
		require.NoError(t, os.MkdirAll(finchDir, 0o755))
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		// History references img-old.qcow2 but it doesn't exist on disk
		history := osimage.NewHistory(3)
		history.PushLast("img-old.qcow2", "sha512:old")
		history.PushLast("img-new.qcow2", "sha512:new")
		require.NoError(t, osimage.SaveHistory(finchDir, history))

		fc := &config.Finch{}
		action := &osImageRollbackAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
		}

		err := action.run()
		require.Error(t, err)
		assert.Contains(t, err.Error(), "not found in OS image directory")
	})
}
