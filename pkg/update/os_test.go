// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package update

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"

	"gopkg.in/yaml.v3"
)

const testDigest = "f43db43b09b8139332e9320c0d7ccfaed8e10a1c04baefa50ad8f6bb23d237957" +
	"b6effa6f10783ecf717b4db6aff4938ff48e75e1a858370de046a9be1005872"

type mockTransport struct {
	failOSManifest, failRootfsManifest, failDownload bool
	invalidOSJSON, invalidRootfsJSON, serverError    bool
}

func (m *mockTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	url := req.URL.String()

	if m.failOSManifest && url == BaseOSURL {
		return nil, fmt.Errorf("network error")
	}
	if m.failRootfsManifest && url == RootfsURL {
		return nil, fmt.Errorf("network error")
	}
	if m.failDownload && strings.Contains(url, DependencyCloudFrontURL) {
		return nil, fmt.Errorf("download error")
	}
	if m.serverError {
		return &http.Response{StatusCode: http.StatusInternalServerError, Body: io.NopCloser(strings.NewReader("Server Error"))}, nil
	}

	switch url {
	case BaseOSURL:
		if m.invalidOSJSON {
			return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader("invalid"))}, nil
		}
		manifest := OSManifest{
			AARCH64: struct {
				Filename  string `json:"filename"`
				SHA512Sum string `json:"sha512sum"`
			}{"test-aarch64.qcow2", testDigest},
			X8664: struct {
				Filename  string `json:"filename"`
				SHA512Sum string `json:"sha512sum"`
			}{"test-x86_64.qcow2", testDigest},
		}
		data, _ := json.Marshal(manifest)
		return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader(string(data)))}, nil
	case RootfsURL:
		if m.invalidRootfsJSON {
			return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader("invalid"))}, nil
		}
		manifest := RootfsManifest{Filename: "test-rootfs.tar.zst", SHA512Sum: testDigest}
		data, _ := json.Marshal(manifest)
		return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader(string(data)))}, nil
	default:
		if strings.Contains(url, DependencyCloudFrontURL) {
			return &http.Response{StatusCode: http.StatusOK, Body: io.NopCloser(strings.NewReader("testshasum"))}, nil
		}
		return &http.Response{StatusCode: http.StatusNotFound, Body: io.NopCloser(strings.NewReader("Not found"))}, nil
	}
}

func setupMockHTTP(opts ...func(*mockTransport)) *http.Client {
	m := &mockTransport{}
	for _, opt := range opts {
		opt(m)
	}
	return &http.Client{Transport: m}
}

func setupTest(t *testing.T, subdirs ...string) (string, func()) {
	tempDir, err := os.MkdirTemp("", "osupdate-test")
	if err != nil {
		t.Fatal(err)
	}
	for _, subdir := range subdirs {
		if err := os.MkdirAll(filepath.Join(tempDir, subdir), 0o750); err != nil {
			_ = os.RemoveAll(tempDir)
			t.Fatal(err)
		}
	}
	return tempDir, func() { _ = os.RemoveAll(tempDir) }
}

func createTestUpdater(tempDir string, httpClient *http.Client) *OSUpdater {
	outputDir := filepath.Join(tempDir, "_output", "os")
	return &OSUpdater{
		ProjectRoot:   tempDir,
		OutputDir:     outputDir,
		FinchYAMLPath: filepath.Join(outputDir, "finch.yaml"),
		HTTPClient:    httpClient,
	}
}

func createFinchYAML(t *testing.T, path, imagePath string) {
	finchYAML := FinchYAML{Images: []OSImage{{Location: imagePath, Arch: "x86_64", Digest: "sha512:abcdef"}}}
	data, _ := yaml.Marshal(finchYAML)
	_ = os.MkdirAll(filepath.Dir(path), 0o750)
	if err := os.WriteFile(path, data, 0o644); err != nil {
		t.Fatal(err)
	}
}

func createMockBinary(_ *testing.T, dir string, exitCode int, _ string) string {
	var path string
	var content string

	if runtime.GOOS == "windows" {
		// On Windows host, create a .bat file
		path = filepath.Join(dir, "finch.bat")
		content = fmt.Sprintf("@echo off\nexit /b %d\n", exitCode)
	} else {
		// On Unix-like host systems, create a shell script
		path = filepath.Join(dir, "finch")
		content = fmt.Sprintf("#!/bin/sh\nexit %d\n", exitCode)
	}

	_ = os.WriteFile(path, []byte(content), 0o644)
	_ = os.Chmod(path, 0o755) // #nosec G302 -- executable permissions required for mock binary
	return path
}

func TestNewOSUpdater(t *testing.T) {
	t.Parallel()
	updater := NewOSUpdater("/test/root")
	if updater.ProjectRoot != "/test/root" {
		t.Errorf("Expected ProjectRoot /test/root, got %s", updater.ProjectRoot)
	}
	expectedSuffix := filepath.Join("", "os")
	if !strings.HasSuffix(updater.OutputDir, expectedSuffix) {
		t.Errorf("Expected OutputDir to end with %s, got %s", expectedSuffix, updater.OutputDir)
	}
}

func TestGetCurrentOSVersion(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name   string
		setup  func(string, string)
		expect string
		err    bool
	}{
		{"missing file", func(p, _ string) { _ = os.Remove(p) }, "", false},
		{"with image", func(p, d string) { createFinchYAML(t, p, filepath.Join(d, "test.qcow2")) }, "test.qcow2", false},
		{"empty images", func(p, _ string) {
			data, _ := yaml.Marshal(FinchYAML{Images: []OSImage{}})
			_ = os.WriteFile(p, data, 0o644)
		}, "", false},
		{"invalid yaml", func(p, _ string) { _ = os.WriteFile(p, []byte("invalid"), 0o644) }, "", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t, "_output/os")
			defer cleanup()

			updater := createTestUpdater(tempDir, http.DefaultClient)
			tt.setup(updater.FinchYAMLPath, updater.OutputDir)

			result, err := updater.getCurrentOSVersion()
			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
			if result != tt.expect {
				t.Errorf("Expected %q, got %q", tt.expect, result)
			}
		})
	}
}

func TestFindOldOSImages(t *testing.T) {
	t.Parallel()
	tempDir, cleanup := setupTest(t)
	defer cleanup()

	files := []string{"old1.qcow2", "old2.qcow2", "current.qcow2", "other.txt"}
	for _, f := range files {
		_ = os.WriteFile(filepath.Join(tempDir, f), []byte("test"), 0o644)
	}

	updater := &OSUpdater{OutputDir: tempDir}
	oldImages, err := updater.findOldOSImages("current.qcow2")
	if err != nil {
		t.Fatal(err)
	}
	if len(oldImages) != 2 {
		t.Errorf("Expected 2 old images, got %d", len(oldImages))
	}
}

func TestUpdateFinchYAML(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name  string
		setup func(string)
		err   bool
	}{
		{"new file", func(p string) { _ = os.Remove(p) }, false},
		{"existing file", func(p string) {
			data, _ := yaml.Marshal(map[string]interface{}{"images": []interface{}{}, "extra": "value"})
			_ = os.WriteFile(p, data, 0o644)
		}, false},
		{"invalid yaml", func(p string) { _ = os.WriteFile(p, []byte("invalid"), 0o644) }, true},
		{"write error", func(p string) { _ = os.Remove(p); _ = os.Mkdir(p, 0o750) }, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t, "_output/os")
			defer cleanup()

			updater := createTestUpdater(tempDir, nil)
			tt.setup(updater.FinchYAMLPath)

			err := updater.updateFinchYAML(filepath.Join(updater.OutputDir, "test.qcow2"), "x86_64", "sha512:test")
			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
		})
	}
}

func TestRemoveOldOSImages(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name   string
		files  []string
		remove []string
		err    bool
	}{
		{"remove existing", []string{"a.qcow2", "b.qcow2"}, []string{"a.qcow2", "b.qcow2"}, false},
		{"empty list", []string{}, []string{}, false},
		{"missing file", []string{}, []string{"missing.qcow2"}, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t)
			defer cleanup()

			updater := &OSUpdater{OutputDir: tempDir}

			for _, f := range tt.files {
				_ = os.WriteFile(filepath.Join(tempDir, f), []byte("test"), 0o644)
			}

			var paths []string
			for _, f := range tt.remove {
				paths = append(paths, filepath.Join(tempDir, f))
			}

			err := updater.removeOldOSImages(paths)
			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
		})
	}
}

func TestGetManifests(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name   string
		setup  func(*mockTransport)
		osTest bool
		err    bool
	}{
		{"OS success", func(_ *mockTransport) {}, true, false},
		{"rootfs success", func(_ *mockTransport) {}, false, false},
		{"OS network error", func(m *mockTransport) { m.failOSManifest = true }, true, true},
		{"rootfs network error", func(m *mockTransport) { m.failRootfsManifest = true }, false, true},
		{"server error", func(m *mockTransport) { m.serverError = true }, true, true},
		{"invalid OS JSON", func(m *mockTransport) { m.invalidOSJSON = true }, true, true},
		{"invalid rootfs JSON", func(m *mockTransport) { m.invalidRootfsJSON = true }, false, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			updater := &OSUpdater{HTTPClient: setupMockHTTP(tt.setup)}

			if tt.osTest {
				_, err := updater.getOSManifest()
				if (err != nil) != tt.err {
					t.Errorf("Expected error %v, got %v", tt.err, err)
				}
			} else {
				_, err := updater.getRootfsManifest()
				if (err != nil) != tt.err {
					t.Errorf("Expected error %v, got %v", tt.err, err)
				}
			}
		})
	}
}

func TestCheckForUpdates(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name     string
		goos     string
		goarch   string
		setup    func(*mockTransport)
		expected string
		err      bool
	}{
		{"darwin amd64", "darwin", "amd64", func(_ *mockTransport) {}, "test-x86_64.qcow2", false},
		{"darwin arm64", "darwin", "arm64", func(_ *mockTransport) {}, "test-aarch64.qcow2", false},
		{"windows amd64", "windows", "amd64", func(_ *mockTransport) {}, "test-rootfs.tar.zst", false},
		{"OS error", "darwin", "amd64", func(m *mockTransport) { m.failOSManifest = true }, "", true},
		{"rootfs error", "windows", "amd64", func(m *mockTransport) { m.failRootfsManifest = true }, "", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t, "_output/os")
			defer cleanup()

			updater := createTestUpdater(tempDir, setupMockHTTP(tt.setup))
			createFinchYAML(t, updater.FinchYAMLPath, filepath.Join(updater.OutputDir, "current.qcow2"))

			status, err := updater.CheckForUpdatesWithOS(tt.goos, tt.goarch)
			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
			if !tt.err && status.LatestVersion != tt.expected {
				t.Errorf("Expected %s, got %s", tt.expected, status.LatestVersion)
			}
		})
	}

	t.Run("runtime values", func(t *testing.T) {
		tempDir, cleanup := setupTest(t, "_output/os")
		defer cleanup()

		updater := createTestUpdater(tempDir, setupMockHTTP())
		createFinchYAML(t, updater.FinchYAMLPath, filepath.Join(updater.OutputDir, "current.qcow2"))

		if _, err := updater.CheckForUpdates(); err != nil {
			t.Error(err)
		}
	})
}

func TestVMOperations(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name      string
		exitCode  int
		operation string
		err       bool
	}{
		{"stop success", 0, "stop", false},
		{"init success", 0, "init", false},
		{"init failure", 1, "init", true},
	}

	updater := &OSUpdater{}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t)
			defer cleanup()

			mockPath := createMockBinary(t, tempDir, tt.exitCode, runtime.GOOS)

			var err error
			if tt.operation == "stop" {
				updater.stopAndRemoveVM(mockPath)
			} else {
				err = updater.initVM(mockPath)
			}

			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
		})
	}
}

func TestDownloadOSImage(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name   string
		setup  func(*mockTransport)
		digest string
		dest   string
		err    bool
	}{
		{"valid", func(_ *mockTransport) {}, testDigest, "test.qcow2", false},
		{"invalid digest", func(_ *mockTransport) {}, "invalid", "test.qcow2", true},
		{"network error", func(m *mockTransport) { m.failDownload = true }, testDigest, "test.qcow2", true},
		{"server error", func(m *mockTransport) { m.serverError = true }, testDigest, "test.qcow2", true},
		{"invalid dest", func(_ *mockTransport) {}, testDigest, "bad/test.qcow2", true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			tempDir, cleanup := setupTest(t)
			defer cleanup()

			updater := &OSUpdater{OutputDir: tempDir, HTTPClient: setupMockHTTP(tt.setup)}
			dest := filepath.Join(tempDir, tt.dest)
			if tt.name == "invalid dest" {
				dest = filepath.Join(tempDir, "nonexistent", tt.dest)
			}

			err := updater.downloadOSImage(DependencyCloudFrontURL, "test.qcow2", tt.digest, dest)
			if (err != nil) != tt.err {
				t.Errorf("Expected error %v, got %v", tt.err, err)
			}
		})
	}
}

func TestConstructDownloadURL(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name       string
		baseURL    string
		osBasename string
		expected   string
	}{
		{
			name:       "macOS baseOS artifact",
			baseURL:    "https://deps.runfinch.com",
			osBasename: "finch-os-amd64-123456789.qcow2",
			expected:   "https://deps.runfinch.com/finch-os-amd64-123456789.qcow2",
		},
		{
			name:       "Windows rootfs artifact",
			baseURL:    "https://deps.runfinch.com",
			osBasename: "finch-rootfs-production-amd64-123456789.tar.zst",
			expected:   "https://deps.runfinch.com/common/x86-64/finch-rootfs-production-amd64-123456789.tar.zst",
		},
		{
			name:       "Another Windows rootfs artifact",
			baseURL:    "https://deps.runfinch.com",
			osBasename: "finch-rootfs-production-amd64-987654321.tar.zst",
			expected:   "https://deps.runfinch.com/common/x86-64/finch-rootfs-production-amd64-987654321.tar.zst",
		},
		{
			name:       "macOS arm64 baseOS artifact",
			baseURL:    "https://deps.runfinch.com",
			osBasename: "finch-os-arm64-123456789.qcow2",
			expected:   "https://deps.runfinch.com/finch-os-arm64-123456789.qcow2",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			updater := &OSUpdater{}
			result := updater.constructDownloadURL(tt.baseURL, tt.osBasename)
			if result != tt.expected {
				t.Errorf("Expected %s, got %s", tt.expected, result)
			}
		})
	}
}

func TestApplyUpdate(t *testing.T) {
	t.Parallel()
	tests := []struct {
		name     string
		goos     string
		goarch   string
		expected string
		arch     string
	}{
		{"darwin-amd64", "darwin", "amd64", "test-x86_64.qcow2", "x86_64"},
		{"darwin-arm64", "darwin", "arm64", "test-aarch64.qcow2", "aarch64"},
		{"windows-amd64", "windows", "amd64", "test-rootfs.tar.zst", "x86_64"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()

			tempDir, cleanup := setupTest(t, "_output/os", "_output/bin")
			defer cleanup()

			updater := createTestUpdater(tempDir, setupMockHTTP())

			// Create mock binary
			binDir := filepath.Join(tempDir, "bin")
			_ = os.MkdirAll(binDir, 0o750)
			mockBinPath := createMockBinary(t, binDir, 0, tt.goos)

			currentPath := filepath.Join(updater.OutputDir, "current.qcow2")
			_ = os.WriteFile(currentPath, []byte("content"), 0o644)
			createFinchYAML(t, updater.FinchYAMLPath, currentPath)

			// Apply update with custom binary path
			if err := updater.applyUpdateWithBinary(tt.goos, tt.goarch, mockBinPath); err != nil {
				t.Error(err)
			}

			newPath := filepath.Join(updater.OutputDir, tt.expected)
			if _, err := os.Stat(newPath); os.IsNotExist(err) {
				t.Errorf("New image not found: %s", newPath)
			}
			if _, err := os.Stat(currentPath); !os.IsNotExist(err) {
				t.Error("Old image not removed")
			}
		})
	}

	errorTests := []struct {
		name  string
		setup func(*testing.T) (*OSUpdater, func())
	}{
		{"no updates", func(t *testing.T) (*OSUpdater, func()) {
			tempDir, cleanup := setupTest(t, "_output/os")
			updater := createTestUpdater(tempDir, setupMockHTTP())
			currentPath := filepath.Join(updater.OutputDir, "test-x86_64.qcow2")
			_ = os.WriteFile(currentPath, []byte("content"), 0o644)
			createFinchYAML(t, updater.FinchYAMLPath, currentPath)
			return updater, cleanup
		}},
		{"manifest error", func(t *testing.T) (*OSUpdater, func()) {
			tempDir, cleanup := setupTest(t, "_output/os")
			updater := createTestUpdater(tempDir, setupMockHTTP(func(m *mockTransport) { m.failOSManifest = true }))
			return updater, cleanup
		}},
		{"download error", func(t *testing.T) (*OSUpdater, func()) {
			tempDir, cleanup := setupTest(t, "_output/os")
			updater := createTestUpdater(tempDir, setupMockHTTP(func(m *mockTransport) { m.failDownload = true }))
			currentPath := filepath.Join(updater.OutputDir, "current.qcow2")
			_ = os.WriteFile(currentPath, []byte("content"), 0o644)
			createFinchYAML(t, updater.FinchYAMLPath, currentPath)
			return updater, cleanup
		}},
	}

	for _, tt := range errorTests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			updater, cleanup := tt.setup(t)
			defer cleanup()

			if err := updater.ApplyUpdateWithOS("darwin", "amd64"); err == nil {
				t.Error("Expected error, got nil")
			}
		})
	}
}
