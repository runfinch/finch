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
	"os/exec"
	"path/filepath"
	"runtime"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/sigstore/sigstore-go/pkg/bundle"
	"github.com/sigstore/sigstore-go/pkg/fulcio/certificate"

	"github.com/runfinch/finch/e2e"
	"github.com/runfinch/finch/pkg/osimage"
)

const (
	manifestFileName       = "manifest.json"
	manifestBundleFileName = "manifest.json.bundle"
)

func getE2EFinchRoot() string {
	if *e2e.Installed {
		path, err := exec.LookPath(e2e.InstalledTestSubject)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		realPath, err := filepath.EvalSymlinks(path)
		gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
		return filepath.Join(realPath, "..", "..")
	}
	return filepath.Join("..", "..", "_output")
}

func getOSImageDir() string {
	return filepath.Join(getE2EFinchRoot(), "os")
}

func getBaseYamlFilePath() string {
	return filepath.Join(getE2EFinchRoot(), "os", "finch.yaml")
}

func getFinchDir() string {
	home, err := os.UserHomeDir()
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	return filepath.Join(home, ".finch")
}

func getMetadataFilePath() string {
	return filepath.Join(getFinchDir(), "os-image-metadata.json")
}

func getFinchConfigFilePath() string {
	return filepath.Join(getFinchDir(), "finch.yaml")
}

func requireCosign() {
	if _, err := exec.LookPath("cosign"); err != nil {
		ginkgo.Skip("cosign not found on PATH; it is required for os-image e2e tests")
	}
}

func requireOIDCInEnv() {
	if os.Getenv("ACTIONS_ID_TOKEN_REQUEST_URL") == "" && os.Getenv("SIGSTORE_ID_TOKEN") == "" {
		ginkgo.Skip("no ambient OIDC token available for cosign keyless signing; " +
			"skipping os-image e2e (runs in CI with id-token: write)")
	}
}

type localDepsServer struct {
	server         *httptest.Server
	NewImageName   string
	NewImageDigest string
	BaseURL        string
	CosignIssuer   string
	CosignIdentity string
}

func (s *localDepsServer) Close() {
	if s.server != nil {
		s.server.Close()
	}
}

func startLocalDepsServer(tmpDir, newRunID string) *localDepsServer {
	imageContent := []byte("finch-e2e-os-image-" + newRunID)
	hash := sha512.Sum512(imageContent)
	digest := "sha512:" + hex.EncodeToString(hash[:])
	newImageName := fmt.Sprintf("finch-al2023-os-image-%s-%s.qcow2", runtime.GOARCH, newRunID)

	var serverURL string
	manifestHolder := &struct{ bytes, bundle []byte }{}
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case "/" + manifestFileName:
			_, _ = w.Write(manifestHolder.bytes)
		case "/" + manifestBundleFileName:
			_, _ = w.Write(manifestHolder.bundle)
		default:
			_, _ = w.Write(imageContent)
		}
	}))
	serverURL = server.URL

	manifest := osimage.Manifest{
		PublishedAt: time.Now(),
		ExpiresAt:   time.Now().Add(24 * time.Hour),
		Artifacts: []*osimage.ManifestArtifact{
			{
				Platform: runtime.GOOS,
				Arch:     runtime.GOARCH,
				URL:      serverURL + "/" + newImageName,
				Digest:   digest,
				Size:     int64(len(imageContent)),
			},
		},
	}
	manifestBytes, err := json.Marshal(manifest)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

	bundleBytes, issuer, identity := signManifest(tmpDir, manifestBytes)

	manifestHolder.bytes = manifestBytes
	manifestHolder.bundle = bundleBytes

	return &localDepsServer{
		server:         server,
		NewImageName:   newImageName,
		NewImageDigest: digest,
		BaseURL:        serverURL,
		CosignIssuer:   issuer,
		CosignIdentity: identity,
	}
}

func signManifest(tmpDir string, manifestBytes []byte) (bundleBytes []byte, issuer, identity string) {
	manifestPath := filepath.Join(tmpDir, manifestFileName)
	bundlePath := filepath.Join(tmpDir, manifestBundleFileName)
	gomega.Expect(os.WriteFile(manifestPath, manifestBytes, 0o644)).ShouldNot(gomega.HaveOccurred())

	cmd := exec.Command("cosign", "sign-blob", //nolint:gosec // args are test-controlled
		"--yes",
		"--bundle", bundlePath,
		manifestPath,
	)
	cmd.Stderr = os.Stderr
	gomega.Expect(cmd.Run()).ShouldNot(gomega.HaveOccurred(), "cosign sign-blob failed")

	bundleBytes, err := os.ReadFile(bundlePath)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

	issuer, identity = extractCosignIdentity(bundleBytes)
	return bundleBytes, issuer, identity
}

// extractCosignIdentity parses a signature bundle and returns the OIDC issuer and the
// subject alternative name (identity) from the signing certificate. These are fed to the
// binary so its verifier trusts exactly the identity that produced the signature.
func extractCosignIdentity(bundleBytes []byte) (issuer, identity string) {
	var b bundle.Bundle
	gomega.Expect(b.UnmarshalJSON(bundleBytes)).ShouldNot(gomega.HaveOccurred())

	content, err := b.VerificationContent()
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

	cert := content.Certificate()
	gomega.Expect(cert).ShouldNot(gomega.BeNil(), "bundle has no signing certificate")

	summary, err := certificate.SummarizeCertificate(cert)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

	return summary.Extensions.Issuer, summary.SubjectAlternativeName
}
