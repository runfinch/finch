// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"crypto"
	"crypto/sha256"
	"encoding/hex"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/sigstore/sigstore-go/pkg/root"
	"github.com/sigstore/sigstore-go/pkg/verify"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

type mockTrustedRootProvider struct {
	root *root.TrustedRoot
	err  error
}

func (m *mockTrustedRootProvider) FetchTrustedRoot() (*root.TrustedRoot, error) {
	return m.root, m.err
}

func TestCosignVerifier(t *testing.T) {
	t.Parallel()

	t.Run("verifies real manifest correctly", func(t *testing.T) {
		t.Parallel()
		signingDir := filepath.Join("testdata")

		trustedRootJSON, err := os.ReadFile(filepath.Join(signingDir, "trusted-root-public-good.json"))
		require.NoError(t, err)
		trustedRoot, err := root.NewTrustedRootFromJSON(trustedRootJSON)
		require.NoError(t, err)

		provider := &mockTrustedRootProvider{root: trustedRoot}
		opts := []verify.VerifierOption{
			verify.WithSignedCertificateTimestamps(1),
			verify.WithIntegratedTimestamps(1),
			verify.WithTransparencyLog(1),
		}
		verifier := NewCosignVerifier(provider, CosignIssuer, CosignIdentity, opts)

		manifestBytes, err := os.ReadFile(filepath.Join(signingDir, "manifest.json"))
		require.NoError(t, err)
		bundleBytes, err := os.ReadFile(filepath.Join(signingDir, "manifest.json.bundle"))
		require.NoError(t, err)

		err = verifier.Verify(manifestBytes, bundleBytes)
		require.NoError(t, err)
	})

	t.Run("rejects tampered manifest", func(t *testing.T) {
		t.Parallel()
		signingDir := filepath.Join("testdata")

		trustedRootJSON, err := os.ReadFile(filepath.Join(signingDir, "trusted-root-public-good.json"))
		require.NoError(t, err)
		trustedRoot, err := root.NewTrustedRootFromJSON(trustedRootJSON)
		require.NoError(t, err)

		provider := &mockTrustedRootProvider{root: trustedRoot}
		opts := []verify.VerifierOption{
			verify.WithSignedCertificateTimestamps(1),
			verify.WithIntegratedTimestamps(1),
			verify.WithTransparencyLog(1),
		}
		verifier := NewCosignVerifier(provider, CosignIssuer, CosignIdentity, opts)

		manifestBytes, err := os.ReadFile(filepath.Join(signingDir, "manifest.json"))
		require.NoError(t, err)
		bundleBytes, err := os.ReadFile(filepath.Join(signingDir, "manifest.json.bundle"))
		require.NoError(t, err)

		// Tamper with manifest
		tampered := make([]byte, len(manifestBytes))
		copy(tampered, manifestBytes)
		tampered[0] = 'X'

		err = verifier.Verify(tampered, bundleBytes)
		require.Error(t, err)
		assert.Contains(t, err.Error(), "failed to verify signature")
	})

	t.Run("returns error when root provider fails", func(t *testing.T) {
		t.Parallel()
		provider := &mockTrustedRootProvider{
			err: assert.AnError,
		}
		verifier := NewCosignVerifier(provider, CosignIssuer, CosignIdentity, DefaultVerifierOptions)

		err := verifier.Verify([]byte("data"), []byte("bundle"))
		require.Error(t, err)
		assert.Contains(t, err.Error(), "failed to fetch trusted root")
	})

	t.Run("returns error on invalid bundle JSON", func(t *testing.T) {
		t.Parallel()
		provider := &mockTrustedRootProvider{
			root: &root.TrustedRoot{},
		}
		verifier := NewCosignVerifier(provider, CosignIssuer, CosignIdentity, DefaultVerifierOptions)

		err := verifier.Verify([]byte("data"), []byte("not valid json"))
		require.Error(t, err)
		assert.Contains(t, err.Error(), "failed to load signature bundle")
	})
}

func TestVerifyDigest(t *testing.T) {
	t.Parallel()

	t.Run("valid digest passes", func(t *testing.T) {
		t.Parallel()
		data := "hello world"
		hash := sha256.Sum256([]byte(data))
		expectedDigest := hex.EncodeToString(hash[:])
		err := verifyDigest(strings.NewReader(data), expectedDigest, crypto.SHA256)
		assert.NoError(t, err)
	})

	t.Run("invalid digest fails", func(t *testing.T) {
		t.Parallel()
		data := "hello world"
		err := verifyDigest(strings.NewReader(data), "wrongdigest", crypto.SHA256)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "digest mismatch")
	})
}

func TestVerifyManifestExpiry(t *testing.T) {
	t.Parallel()

	t.Run("non-expired manifest passes", func(t *testing.T) {
		t.Parallel()
		manifest := &Manifest{ExpiresAt: time.Now().Add(24 * time.Hour)}
		err := verifyManifestExpiry(manifest)
		assert.NoError(t, err)
	})

	t.Run("expired manifest fails", func(t *testing.T) {
		t.Parallel()
		manifest := &Manifest{ExpiresAt: time.Now().Add(-1 * time.Hour)}
		err := verifyManifestExpiry(manifest)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "expired")
	})
}

func TestVerifyImageIsNewer(t *testing.T) {
	t.Parallel()

	t.Run("newer image returns true", func(t *testing.T) {
		t.Parallel()
		isNewer, err := verifyImageIsNewer(
			"finch-al2023-os-image-arm64-25872286438.qcow2",
			"finch-al2023-os-image-arm64-24789639918.qcow2",
		)
		require.NoError(t, err)
		assert.True(t, isNewer)
	})

	t.Run("older image returns false", func(t *testing.T) {
		t.Parallel()
		isNewer, err := verifyImageIsNewer(
			"finch-al2023-os-image-arm64-24789639918.qcow2",
			"finch-al2023-os-image-arm64-25872286438.qcow2",
		)
		require.NoError(t, err)
		assert.False(t, isNewer)
	})

	t.Run("same image returns false", func(t *testing.T) {
		t.Parallel()
		isNewer, err := verifyImageIsNewer(
			"finch-al2023-os-image-arm64-24789639918.qcow2",
			"finch-al2023-os-image-arm64-24789639918.qcow2",
		)
		require.NoError(t, err)
		assert.False(t, isNewer)
	})
}

func TestExtractGHRunID(t *testing.T) {
	t.Parallel()

	t.Run("extracts run ID from valid filename", func(t *testing.T) {
		t.Parallel()
		runID, err := extractGHRunID("finch-al2023-os-image-arm64-24789639918.qcow2")
		require.NoError(t, err)
		assert.Equal(t, int64(24789639918), runID)
	})

	t.Run("returns error for non-numeric run ID", func(t *testing.T) {
		t.Parallel()
		_, err := extractGHRunID("finch-al2023-os-image-arm64-notanumber.qcow2")
		assert.Error(t, err)
	})
}
