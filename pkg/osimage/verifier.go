// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage provies osimage related utilities.
package osimage

import (
	"bytes"
	"crypto"
	"encoding/hex"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/sigstore/sigstore-go/pkg/bundle"
	"github.com/sigstore/sigstore-go/pkg/root"
	"github.com/sigstore/sigstore-go/pkg/verify"
)

const (
	// CosignIssuer is issuer used to validate the manifest signature.
	CosignIssuer = "https://token.actions.githubusercontent.com"
	// CosignIdentity is identity used to validate the manifest signature.
	// The workflow in finch-core that will sign the OS images.
	CosignIdentity = "https://github.com/runfinch/finch-core/.github/workflows/publish-os-image-manifest.yaml@refs/heads/main"
)

// GetCosignIssuer returns the cosign issuer to be used to validate the manifest signature.
func GetCosignIssuer() string {
	if envOverridesAllowed() {
		if v := os.Getenv(EnvCosignIssuer); v != "" {
			return v
		}
	}
	return CosignIssuer
}

// GetCosignIdentity returns the cosign identity to be used to validate the manifest signature.
func GetCosignIdentity() string {
	if envOverridesAllowed() {
		if v := os.Getenv(EnvCosignIdentity); v != "" {
			return v
		}
	}
	return CosignIdentity
}

// ManifestVerifier reprents a verifier for os image manifests.
type ManifestVerifier interface {
	// Verify verifies a cosign signature bundle.
	Verify(data, signature []byte) error
}

// TrustedRootProvider represents the provider of the root certificate.
type TrustedRootProvider interface {
	// FetchTrustedRoot returns the provider of the root certificate.
	FetchTrustedRoot() (*root.TrustedRoot, error)
}

// DefaultTrustedRootProvider is the default provider for the root certificate.
type DefaultTrustedRootProvider struct{}

// FetchTrustedRoot returns the default provider for the root certificate.
func (DefaultTrustedRootProvider) FetchTrustedRoot() (*root.TrustedRoot, error) {
	return root.FetchTrustedRoot()
}

// DefaultVerifierOptions are the default options used to verify a cosign signature bundle.
var DefaultVerifierOptions = []verify.VerifierOption{
	verify.WithSignedCertificateTimestamps(1),
	verify.WithIntegratedTimestamps(1),
	verify.WithSignedTimestamps(1),
	verify.WithTransparencyLog(1),
}

// CosignVerifier represents a verifier for a cosign signature bundle.
type CosignVerifier struct {
	rootProvider    TrustedRootProvider
	issuer          string
	identity        string
	verifierOptions []verify.VerifierOption
}

// NewCosignVerifier returns a new CosignVerifier from the provided root provider, issuer and identity.
func NewCosignVerifier(rootProvider TrustedRootProvider, issuer, identity string, opts []verify.VerifierOption) *CosignVerifier {
	return &CosignVerifier{
		rootProvider:    rootProvider,
		issuer:          issuer,
		identity:        identity,
		verifierOptions: opts,
	}
}

// Verify verifies a cosign signature bundle.
func (v *CosignVerifier) Verify(data, bundleBytes []byte) error {
	trustedRoot, err := v.rootProvider.FetchTrustedRoot()
	if err != nil {
		return fmt.Errorf("failed to fetch trusted root: %w", err)
	}

	verifier, err := verify.NewVerifier(trustedRoot, v.verifierOptions...)
	if err != nil {
		return fmt.Errorf("failed to create verifier: %w", err)
	}

	certID, err := verify.NewShortCertificateIdentity(v.issuer, "", v.identity, "")
	if err != nil {
		return fmt.Errorf("failed to create certificate identity: %w", err)
	}

	policy := verify.NewPolicy(
		verify.WithArtifact(bytes.NewReader(data)),
		verify.WithCertificateIdentity(certID),
	)

	var sigBundle bundle.Bundle
	if err := sigBundle.UnmarshalJSON(bundleBytes); err != nil {
		return fmt.Errorf("failed to load signature bundle: %w", err)
	}

	if _, err := verifier.Verify(&sigBundle, policy); err != nil {
		return fmt.Errorf("failed to verify signature: %w", err)
	}
	return nil
}

func verifyDigest(reader io.Reader, expectedDigest string, hash crypto.Hash) error {
	hasher := hash.New()
	if _, err := io.Copy(hasher, reader); err != nil {
		return fmt.Errorf("failed to read data for digest verification: %w", err)
	}

	computedDigest := hex.EncodeToString(hasher.Sum(nil))
	if computedDigest != expectedDigest {
		return fmt.Errorf("digest mismatch: expected %s, got %s", expectedDigest, computedDigest)
	}
	return nil
}

func verifyManifestExpiry(manifest *Manifest) error {
	if time.Now().After(manifest.ExpiresAt) {
		return fmt.Errorf("the downloaded manifest has expired")
	}
	return nil
}

func verifyImageIsNewer(newImage, currentImage string) (bool, error) {
	currentRunID, err := extractGHRunID(filepath.Base(currentImage))
	if err != nil {
		return false, fmt.Errorf("failed to extract run ID from current image: %w", err)
	}
	newRunID, err := extractGHRunID(filepath.Base(newImage))
	if err != nil {
		return false, fmt.Errorf("failed to extract run ID from new image: %w", err)
	}
	return newRunID > currentRunID, nil
}

func extractGHRunID(filename string) (int64, error) {
	name := filename
	for {
		ext := filepath.Ext(name)
		if ext == "" {
			break
		}
		name = strings.TrimSuffix(name, ext)
	}
	parts := strings.Split(name, "-")
	if len(parts) == 0 {
		return 0, fmt.Errorf("invalid image filename: %s", filename)
	}
	runID, err := strconv.ParseInt(parts[len(parts)-1], 10, 64)
	if err != nil {
		return 0, fmt.Errorf("failed to parse run ID from filename %s: %w", filename, err)
	}
	return runID, nil
}
