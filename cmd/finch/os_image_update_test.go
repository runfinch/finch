// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"runtime"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/osimage"
	"github.com/runfinch/finch/pkg/path"
)

type noopVerifier struct{}

func (noopVerifier) Verify(_, _ []byte) error { return nil }

func newTestManifest(t *testing.T, baseURL, runID string) []byte {
	manifest := osimage.Manifest{
		PublishedAt: time.Now(),
		ExpiresAt:   time.Now().Add(24 * time.Hour),
		Artifacts: []*osimage.ManifestArtifact{
			{
				Platform: runtime.GOOS,
				Arch:     runtime.GOARCH,
				URL:      fmt.Sprintf("%sfinch-image-%s-%s.qcow2", baseURL, runtime.GOARCH, runID),
				Digest:   "sha512:placeholder",
				Size:     100,
			},
		},
	}
	data, err := json.Marshal(manifest)
	require.NoError(t, err)
	return data
}

func TestOSImageUpdateAction_run(t *testing.T) {
	t.Parallel()

	t.Run("checkOnly writes metadata and returns", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")
		logger.EXPECT().Infof("New OS image found: %s => %s", gomock.Any(), gomock.Any())

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		var serverURL string
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/manifest.json":
				w.Write(newTestManifest(t, serverURL, "99999999999"))
			case "/manifest.json.bundle":
				w.Write([]byte("fake-bundle"))
			}
		}))
		defer server.Close()
		serverURL = server.URL + "/"

		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)
		fc := &config.Finch{}
		action := &osImageUpdateAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
			depsURLs:      osimage.DepsURLs{
				ManifestURL: serverURL + "manifest.json", 
				ManifestBundleURL: serverURL + "manifest.json.bundle",
			},
			verifier:      noopVerifier{},
			checkOnly:     true,
		}

		err := action.run()
		require.NoError(t, err)

		// Verify metadata was written
		metadata, err := osimage.ReadMetadata(finchDir)
		require.NoError(t, err)
		require.NotNil(t, metadata)
		assert.True(t, metadata.UpdateAvailable)
		assert.Contains(t, metadata.CurrentImage, "11111111111")
		assert.Contains(t, metadata.NewImage, "99999999999")
		assert.False(t, metadata.CheckedAt.IsZero())
	})

	t.Run("full update downloads image and records history", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")
		logger.EXPECT().Infof("New OS image found: %s => %s", gomock.Any(), gomock.Any())
		logger.EXPECT().Info("Verifying downloaded OS image...")
		logger.EXPECT().Info("Updating current config with new OS image...")
		logger.EXPECT().Info("OS image updated successfully")
		logger.EXPECT().Info("Please re-initialize your Finch VM instance by running \"finch vm stop && finch vm remove && finch vm init\"")

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		imageContent := []byte("new os image data")
		hash := sha512.Sum512(imageContent)
		digest := "sha512:" + hex.EncodeToString(hash[:])

		var serverURL string
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/manifest.json":
				manifest := osimage.Manifest{
					PublishedAt: time.Now(),
					ExpiresAt:   time.Now().Add(24 * time.Hour),
					Artifacts: []*osimage.ManifestArtifact{
						{
							Platform: runtime.GOOS,
							Arch:     runtime.GOARCH,
							URL:      serverURL + "finch-image-" + runtime.GOARCH + "-99999999999.qcow2",
							Digest:   digest,
							Size:     int64(len(imageContent)),
						},
					},
				}
				json.NewEncoder(w).Encode(manifest)
			case "/manifest.json.bundle":
				w.Write([]byte("fake-bundle"))
			default:
				w.Write(imageContent)
			}
		}))
		defer server.Close()
		serverURL = server.URL + "/"

		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)
		fc := &config.Finch{}
		action := &osImageUpdateAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
			depsURLs:      osimage.DepsURLs{
				ManifestURL: serverURL + "manifest.json", 
				ManifestBundleURL: serverURL + "manifest.json.bundle",
			},
			verifier:      noopVerifier{},
			checkOnly:     false,
		}

		err := action.run()
		require.NoError(t, err)

		// Verify image was downloaded
		newImageName := fmt.Sprintf("finch-image-%s-99999999999.qcow2", runtime.GOARCH)
		downloaded, err := os.ReadFile(filepath.Join(osDir, newImageName))
		require.NoError(t, err)
		assert.Equal(t, imageContent, downloaded)

		// Verify finch.yaml was updated
		img, err := osimage.GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Equal(t, filepath.Join(osDir, newImageName), img.Location)
		assert.Equal(t, digest, img.Digest)

		// Verify history was written
		// History should container old image(11111111111) and new image(99999999999)
		history, err := osimage.LoadHistory(finchDir, 4)
		require.NoError(t, err)
		assert.Equal(t, 2, history.Len())
		// Second last should be old image(11111111111)
		first := history.PeekSecondLast()
		require.NotNil(t, first)
		assert.Contains(t, first.Name, "11111111111")
		assert.Equal(t, "sha512:old", first.Digest)
		// Last should be new image(99999999999)
		last := history.PeekLast()
		require.NotNil(t, last)
		assert.Equal(t, newImageName, last.Name)
		assert.Equal(t, digest, last.Digest)

		// Verify metadata was cleared
		metadata, err := osimage.ReadMetadata(finchDir)
		require.NoError(t, err)
		assert.Nil(t, metadata)
	})

	t.Run("multiple updates prune oldest images and maintain correct history", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info(gomock.Any()).AnyTimes()
		logger.EXPECT().Infof(gomock.Any(), gomock.Any()).AnyTimes()
		logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).AnyTimes()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		// Create the initial image on disk
		require.NoError(t, os.WriteFile(filepath.Join(osDir, fmt.Sprintf("finch-image-%s-11111111111.qcow2", runtime.GOARCH)), []byte("img1"), 0o644))

		// numBackups=2 means capacity=3 (current + 2 backups)
		numBackups := 2
		fc := &config.Finch{}
		fc.OSImage.NumBackups = &numBackups

		// Track which run ID the server should serve
		updateRunIDs := []string{"22222222222", "33333333333", "44444444444"}
		imageContents := map[string][]byte{
			"22222222222": []byte("image-content-22222222222"),
			"33333333333": []byte("image-content-33333333333"),
			"44444444444": []byte("image-content-44444444444"),
		}
		imageDigests := make(map[string]string)
		for runID, content := range imageContents {
			hash := sha512.Sum512(content)
			imageDigests[runID] = "sha512:" + hex.EncodeToString(hash[:])
		}

		// Set initial finch.yaml
		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:digest1"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)

		for _, runID := range updateRunIDs {
			var serverURL string
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				switch r.URL.Path {
				case "/manifest.json":
					manifest := osimage.Manifest{
						PublishedAt: time.Now(),
						ExpiresAt:   time.Now().Add(24 * time.Hour),
						Artifacts: []*osimage.ManifestArtifact{
							{
								Platform: runtime.GOOS,
								Arch:     runtime.GOARCH,
								URL:      serverURL + fmt.Sprintf("finch-image-%s-%s.qcow2", runtime.GOARCH, runID),
								Digest:   imageDigests[runID],
								Size:     int64(len(imageContents[runID])),
							},
						},
					}
					json.NewEncoder(w).Encode(manifest)
				case "/manifest.json.bundle":
					w.Write([]byte("fake-bundle"))
				default:
					w.Write(imageContents[runID])
				}
			}))
			serverURL = server.URL + "/"

			action := &osImageUpdateAction{
				logger:        logger,
				fp:            fp,
				fc:            fc,
				finchRootPath: tmpDir,
				depsURLs:      osimage.DepsURLs{
					ManifestURL: serverURL + "manifest.json", 
					ManifestBundleURL: serverURL + "manifest.json.bundle",
				},
				verifier:      noopVerifier{},
				checkOnly:     false,
			}

			err := action.run()
			require.NoError(t, err)
			server.Close()
		}

		// After 3 updates with numBackups=2 (capacity=3):
		// History started as [11111111111], then pushed 22222222222, 33333333333, 44444444444
		// Capacity is 3, so 11111111111 should have been pruned

		// Verify history has exactly 3 entries: 22222222222, 33333333333, 44444444444
		history, err := osimage.LoadHistory(finchDir, numBackups+1)
		require.NoError(t, err)
		assert.Equal(t, 3, history.Len())
		assert.Equal(t, fmt.Sprintf("finch-image-%s-44444444444.qcow2", runtime.GOARCH), history.PeekLast().Name)
		assert.Equal(t, fmt.Sprintf("finch-image-%s-33333333333.qcow2", runtime.GOARCH), history.PeekSecondLast().Name)

		// Verify the pruned image (11111111111) was deleted from disk
		_, statErr := os.Stat(filepath.Join(osDir, fmt.Sprintf("finch-image-%s-11111111111.qcow2", runtime.GOARCH)))
		assert.True(t, os.IsNotExist(statErr))

		// Verify the remaining images exist on disk
		for _, runID := range []string{"22222222222", "33333333333", "44444444444"} {
			imgPath := filepath.Join(osDir, fmt.Sprintf("finch-image-%s-%s.qcow2", runtime.GOARCH, runID))
			_, err := os.Stat(imgPath)
			assert.NoError(t, err, "expected image %s to exist on disk", runID)
		}

		// Verify finch.yaml points to the latest image
		img, err := osimage.GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Contains(t, img.Location, "44444444444")
		assert.Equal(t, imageDigests["44444444444"], img.Digest)
	})

	t.Run("reducing numBackups prunes extra images on next update", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info(gomock.Any()).AnyTimes()
		logger.EXPECT().Infof(gomock.Any(), gomock.Any()).AnyTimes()
		logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).AnyTimes()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		fp := path.Finch(tmpDir)

		// Pre-populate history with 4 entries (as if numBackups was 3, capacity=4)
		history := osimage.NewHistory(4)
		for _, runID := range []string{"11111111111", "22222222222", "33333333333", "44444444444"} {
			imgName := fmt.Sprintf("finch-image-%s-%s.qcow2", runtime.GOARCH, runID)
			history.PushLast(imgName, "sha512:digest-"+runID)
			require.NoError(t, os.WriteFile(filepath.Join(osDir, imgName), []byte("content-"+runID), 0o644))
		}
		require.NoError(t, osimage.SaveHistory(finchDir, history))

		// finch.yaml points to the current (latest) image
		currentImage := fmt.Sprintf("finch-image-%s-44444444444.qcow2", runtime.GOARCH)
		yamlContent := fmt.Sprintf(`images:
  - location: "%s/%s"
    arch: "aarch64"
    digest: "sha512:digest-44444444444"
`, osDir, currentImage)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		// Now reduce numBackups to 1 (capacity=2) and perform one more update
		numBackups := 1
		fc := &config.Finch{}
		fc.OSImage.NumBackups = &numBackups

		newImageContent := []byte("content-55555555555")
		newHash := sha512.Sum512(newImageContent)
		newDigest := "sha512:" + hex.EncodeToString(newHash[:])

		var serverURL string
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/manifest.json":
				manifest := osimage.Manifest{
					PublishedAt: time.Now(),
					ExpiresAt:   time.Now().Add(24 * time.Hour),
					Artifacts: []*osimage.ManifestArtifact{
						{
							Platform: runtime.GOOS,
							Arch:     runtime.GOARCH,
							URL:      serverURL + fmt.Sprintf("finch-image-%s-55555555555.qcow2", runtime.GOARCH),
							Digest:   newDigest,
							Size:     int64(len(newImageContent)),
						},
					},
				}
				json.NewEncoder(w).Encode(manifest)
			case "/manifest.json.bundle":
				w.Write([]byte("fake-bundle"))
			default:
				w.Write(newImageContent)
			}
		}))
		defer server.Close()
		serverURL = server.URL + "/"

		action := &osImageUpdateAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
			depsURLs:      osimage.DepsURLs{
				ManifestURL: serverURL + "manifest.json", 
				ManifestBundleURL: serverURL + "manifest.json.bundle",
			},
			verifier:      noopVerifier{},
			checkOnly:     false,
		}

		err := action.run()
		require.NoError(t, err)

		// With numBackups=1 (capacity=2), after pushing 55555555555:
		// History had [11111111111, 22222222222, 33333333333, 44444444444] + push 55555555555
		// Should prune down to [44444444444, 55555555555]

		// Verify history has exactly 2 entries
		updatedHistory, err := osimage.LoadHistory(finchDir, numBackups+1)
		require.NoError(t, err)
		assert.Equal(t, 2, updatedHistory.Len())
		assert.Equal(t, fmt.Sprintf("finch-image-%s-55555555555.qcow2", runtime.GOARCH), updatedHistory.PeekLast().Name)
		assert.Equal(t, fmt.Sprintf("finch-image-%s-44444444444.qcow2", runtime.GOARCH), updatedHistory.PeekSecondLast().Name)

		// Verify pruned images (11111111111, 22222222222, 33333333333) were deleted
		for _, runID := range []string{"11111111111", "22222222222", "33333333333"} {
			imgPath := filepath.Join(osDir, fmt.Sprintf("finch-image-%s-%s.qcow2", runtime.GOARCH, runID))
			_, statErr := os.Stat(imgPath)
			assert.True(t, os.IsNotExist(statErr), "expected image %s to be pruned", runID)
		}

		// Verify remaining images exist
		for _, runID := range []string{"44444444444", "55555555555"} {
			imgPath := filepath.Join(osDir, fmt.Sprintf("finch-image-%s-%s.qcow2", runtime.GOARCH, runID))
			_, statErr := os.Stat(imgPath)
			assert.NoError(t, statErr, "expected image %s to exist on disk", runID)
		}

		// Verify finch.yaml points to 55555555555
		img, err := osimage.GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Contains(t, img.Location, "55555555555")
		assert.Equal(t, newDigest, img.Digest)
	})

	t.Run("no update available logs and returns", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")
		logger.EXPECT().Info("OS image is already up to date")

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		var serverURL string
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/manifest.json":
				w.Write(newTestManifest(t, serverURL, "11111111111"))
			case "/manifest.json.bundle":
				w.Write([]byte("fake-bundle"))
			}
		}))
		defer server.Close()
		serverURL = server.URL + "/"

		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-99999999999.qcow2"
    arch: "aarch64"
    digest: "sha512:current"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)
		fc := &config.Finch{}
		action := &osImageUpdateAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
			depsURLs:      osimage.DepsURLs{
				ManifestURL: serverURL + "manifest.json", 
				ManifestBundleURL: serverURL + "manifest.json.bundle",
			},
			verifier:      noopVerifier{},
			checkOnly:     false,
		}

		err := action.run()
		require.NoError(t, err)

		// Verify metadata was written with no update available
		metadata, err := osimage.ReadMetadata(finchDir)
		require.NoError(t, err)
		require.NotNil(t, metadata)
		assert.False(t, metadata.UpdateAvailable)
		assert.Contains(t, metadata.CurrentImage, "99999999999")
		assert.Contains(t, metadata.NewImage, "11111111111")
		assert.False(t, metadata.CheckedAt.IsZero())
	})

	t.Run("backup disabled deletes old image", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")
		logger.EXPECT().Infof("New OS image found: %s => %s", gomock.Any(), gomock.Any())
		logger.EXPECT().Info("Verifying downloaded OS image...")
		logger.EXPECT().Info("Updating current config with new OS image...")
		logger.EXPECT().Infof("Removed old OS image: %s", gomock.Any())
		logger.EXPECT().Info("OS image updated successfully")
		logger.EXPECT().Info("Please re-initialize your Finch VM instance by running \"finch vm stop && finch vm remove && finch vm init\"")

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		finchDir := filepath.Join(tmpDir, ".finch")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(finchDir, 0o755))

		imageContent := []byte("new image")
		hash := sha512.Sum512(imageContent)
		digest := "sha512:" + hex.EncodeToString(hash[:])

		oldImageName := fmt.Sprintf("finch-image-%s-11111111111.qcow2", runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, oldImageName), []byte("old image"), 0o644))

		var serverURL string
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/manifest.json":
				manifest := osimage.Manifest{
					PublishedAt: time.Now(),
					ExpiresAt:   time.Now().Add(24 * time.Hour),
					Artifacts: []*osimage.ManifestArtifact{
						{
							Platform: runtime.GOOS,
							Arch:     runtime.GOARCH,
							URL:      serverURL + "finch-image-" + runtime.GOARCH + "-99999999999.qcow2",
							Digest:   digest,
							Size:     int64(len(imageContent)),
						},
					},
				}
				json.NewEncoder(w).Encode(manifest)
			case "/manifest.json.bundle":
				w.Write([]byte("fake-bundle"))
			default:
				w.Write(imageContent)
			}
		}))
		defer server.Close()
		serverURL = server.URL + "/"

		yamlContent := fmt.Sprintf(`images:
  - location: "%s/%s"
    arch: "aarch64"
    digest: "sha512:old"
`, osDir, oldImageName)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := path.Finch(tmpDir)
		backupDisabled := false
		fc := &config.Finch{}
		fc.OSImage.Backup = &backupDisabled

		action := &osImageUpdateAction{
			logger:        logger,
			fp:            fp,
			fc:            fc,
			finchRootPath: tmpDir,
			depsURLs:      osimage.DepsURLs{
				ManifestURL: serverURL + "manifest.json", 
				ManifestBundleURL: serverURL + "manifest.json.bundle",
			},
			verifier:      noopVerifier{},
			checkOnly:     false,
		}

		err := action.run()
		require.NoError(t, err)

		// Verify old image was deleted
		_, statErr := os.Stat(filepath.Join(osDir, oldImageName))
		assert.True(t, os.IsNotExist(statErr))
	})
}
