// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

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

	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/mocks"
	finchPath "github.com/runfinch/finch/pkg/path"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

type noopManifestVerifier struct{}

func (noopManifestVerifier) Verify(_, _ []byte) error { return nil }

func newManifest(t *testing.T, runID string) []byte {
	manifest := Manifest{
		PublishedAt: time.Now(),
		ExpiresAt:   time.Now().Add(24 * time.Hour),
		Artifacts: []*ManifestArtifact{
			{
				Platform: runtime.GOOS,
				Arch:     runtime.GOARCH,
				URL:      fmt.Sprintf("https://deps.runfinch.com/finch-image-%s-%s.qcow2", runtime.GOARCH, runID),
				Digest:   "sha512:abc",
				Size:     100,
			},
		},
	}
	data, err := json.Marshal(manifest)
	require.NoError(t, err)
	return data
}

func TestCheckForUpdate(t *testing.T) {
	t.Parallel()

	t.Run("detects available update", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")

		manifestBytes := newManifest(t, "99999999999")

		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/" + manifestFileName:
				w.Write(manifestBytes)
			case "/" + manifestBundleFileName:
				w.Write([]byte("fake-bundle"))
			}
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		result, err := CheckForUpdate(
			logger,
			fp,
			DepsURLs{
				ManifestURL:       server.URL + "/" + manifestFileName,
				ManifestBundleURL: server.URL + "/" + manifestBundleFileName,
			},
			noopManifestVerifier{},
		)
		require.NoError(t, err)
		assert.True(t, result.Available)
		assert.Contains(t, result.NewImage, "99999999999")
	})

	t.Run("reports no update when current is latest", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Fetching manifest...")
		logger.EXPECT().Info("Validating manifest...")
		logger.EXPECT().Info("Checking current config...")

		manifestBytes := newManifest(t, "11111111111")

		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			switch r.URL.Path {
			case "/" + manifestFileName:
				w.Write(manifestBytes)
			case "/" + manifestBundleFileName:
				w.Write([]byte("fake-bundle"))
			}
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		yamlContent := fmt.Sprintf(`images:
  - location: "%s/finch-image-%s-99999999999.qcow2"
    arch: "aarch64"
    digest: "sha512:current"
`, osDir, runtime.GOARCH)
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		result, err := CheckForUpdate(
			logger,
			fp,
			DepsURLs{
				ManifestURL:       server.URL + "/" + manifestFileName,
				ManifestBundleURL: server.URL + "/" + manifestBundleFileName,
			},
			noopManifestVerifier{},
		)
		require.NoError(t, err)
		assert.False(t, result.Available)
	})
}

func TestUpdate(t *testing.T) {
	t.Parallel()

	t.Run("downloads image, verifies digest, and applies config successfully", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Verifying downloaded OS image...")
		logger.EXPECT().Info("Updating current config with new OS image...")

		imageContent := []byte("fake qcow2 image content")
		hash := sha512.Sum512(imageContent)
		digest := "sha512:" + hex.EncodeToString(hash[:])

		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write(imageContent)
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		yamlContent := `images:
  - location: "/old/finch-image-arm64-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
`
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		result := &CheckUpdateResult{
			Available:    true,
			CurrentImage: "finch-image-arm64-11111111111.qcow2",
			NewImage:     "finch-image-arm64-99999999999.qcow2",
			Artifact: &ManifestArtifact{
				URL:    server.URL + "/finch-image-arm64-99999999999.qcow2",
				Digest: digest,
			},
		}

		err := Update(logger, fp, result)
		require.NoError(t, err)

		// Verify image was downloaded
		downloaded, err := os.ReadFile(filepath.Join(osDir, "finch-image-arm64-99999999999.qcow2"))
		require.NoError(t, err)
		assert.Equal(t, imageContent, downloaded)

		// Verify finch.yaml was updated
		img, err := GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Contains(t, img.Location, "finch-image-arm64-99999999999.qcow2")
		assert.Equal(t, digest, img.Digest)
	})

	t.Run("fails update and removes image on digest mismatch", func(t *testing.T) {
		t.Parallel()
		ctrl := gomock.NewController(t)
		logger := mocks.NewLogger(ctrl)
		logger.EXPECT().Info("Verifying downloaded OS image...")

		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("corrupted data"))
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		yamlContent := `images:
  - location: "/old/img-11111111111.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
`
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		result := &CheckUpdateResult{
			Available:    true,
			CurrentImage: "img-11111111111.qcow2",
			NewImage:     "img-99999999999.qcow2",
			Artifact: &ManifestArtifact{
				URL:    server.URL + "/img-99999999999.qcow2",
				Digest: "sha512:expectedbutdifferent",
			},
		}

		err := Update(logger, fp, result)
		require.Error(t, err)
		assert.Contains(t, err.Error(), "failed to verify downloaded OS image")

		// Verify image was cleaned up
		_, statErr := os.Stat(filepath.Join(osDir, "img-99999999999.qcow2"))
		assert.True(t, os.IsNotExist(statErr))
	})

	t.Run("no-op when update not available", func(t *testing.T) {
		t.Parallel()
		result := &CheckUpdateResult{Available: false}
		err := Update(nil, finchPath.Finch("/tmp"), result)
		assert.NoError(t, err)
	})
}

func TestFindMatchingArtifact(t *testing.T) {
	t.Parallel()

	t.Run("finds matching artifact for current platform", func(t *testing.T) {
		t.Parallel()
		manifest := &Manifest{
			Artifacts: []*ManifestArtifact{
				{Platform: runtime.GOOS, Arch: runtime.GOARCH, URL: "https://deps.runfinch.com/matching.qcow2"},
				{Platform: "windows", Arch: "amd64", URL: "https://deps.runfinch.com/windows-arm64.qcow2"},
			},
		}

		artifact, err := findMatchingArtifact(manifest)
		require.NoError(t, err)
		assert.Equal(t, "https://deps.runfinch.com/matching.qcow2", artifact.URL)
	})

	t.Run("returns error when no matching artifact", func(t *testing.T) {
		t.Parallel()
		manifest := &Manifest{
			Artifacts: []*ManifestArtifact{
				{Platform: "fakeos", Arch: "fakearch", URL: "https://deps.runfinch.com/fake.qcow2"},
			},
		}

		_, err := findMatchingArtifact(manifest)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "no matching OS image artifact found")
	})

	t.Run("returns error on empty manifest", func(t *testing.T) {
		t.Parallel()
		manifest := &Manifest{Artifacts: []*ManifestArtifact{}}

		_, err := findMatchingArtifact(manifest)
		assert.Error(t, err)
	})
}

func TestGetCurrentImage(t *testing.T) {
	t.Parallel()

	t.Run("returns first image from finch.yaml", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		yamlContent := `images:
  - location: "/path/to/finch-os-image.qcow2"
    arch: "aarch64"
    digest: "sha512:abcdef"
`
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		img, err := GetCurrentImage(fp)
		require.NoError(t, err)
		assert.Equal(t, "/path/to/finch-os-image.qcow2", img.Location)
		assert.Equal(t, "sha512:abcdef", img.Digest)
	})

	t.Run("returns error when images list is empty", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		yamlContent := `images: []
`
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte(yamlContent), 0o644))

		fp := finchPath.Finch(tmpDir)
		_, err := GetCurrentImage(fp)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "no OS image found")
	})

	t.Run("returns error when finch.yaml does not exist", func(t *testing.T) {
		t.Parallel()
		fp := finchPath.Finch("/nonexistent/path")
		_, err := GetCurrentImage(fp)
		assert.Error(t, err)
	})

	t.Run("returns error on invalid yaml", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte("not: [valid: yaml"), 0o644))

		fp := finchPath.Finch(tmpDir)
		_, err := GetCurrentImage(fp)
		assert.Error(t, err)
	})
}
