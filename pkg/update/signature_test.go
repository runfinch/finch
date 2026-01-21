// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package update

import (
	"os"
	"runtime"
	"testing"
)

func TestVerifySignature(t *testing.T) {
	t.Parallel()

	// Test platform-specific behavior
	switch runtime.GOOS {
	case "darwin":
		// On macOS, we expect pkgutil to be available
		if _, err := os.Stat("/usr/sbin/pkgutil"); os.IsNotExist(err) {
			t.Skip("pkgutil not available, skipping macOS signature test")
		}
		// Test with a non-existent file - should return error on macOS
		err := verifySignature(runtime.GOOS, "/tmp/nonexistent.pkg")
		if err == nil {
			t.Error("Expected error for non-existent file on macOS, got nil")
		}
	case "windows":
		// On Windows, we expect PowerShell to be available
		// Test with a non-existent file - should return error on Windows
		err := verifySignature(runtime.GOOS, "/tmp/nonexistent.msi")
		if err == nil {
			t.Error("Expected error for non-existent file on Windows, got nil")
		}
	default:
		// On other platforms, verification should succeed with a warning
		err := verifySignature(runtime.GOOS, "/tmp/test.file")
		if err != nil {
			t.Errorf("Expected no error on unsupported platform, got: %v", err)
		}
		// Test with non-existent file - should still return nil on unsupported platforms
		err = verifySignature(runtime.GOOS, "/tmp/nonexistent.file")
		if err != nil {
			t.Errorf("Expected no error for non-existent file on unsupported platform, got: %v", err)
		}
	}
}

func TestVerifySignatureCrossPlatform(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name        string
		goos        string
		filePath    string
		expectError bool
	}{
		{
			name:        "darwin with pkg file",
			goos:        "darwin",
			filePath:    "/tmp/test.pkg",
			expectError: true, // Will error due to non-existent file
		},
		{
			name:        "windows with msi file",
			goos:        "windows",
			filePath:    "/tmp/test.msi",
			expectError: true, // Will error due to non-existent file
		},
		{
			name:        "linux unsupported platform",
			goos:        "linux",
			filePath:    "/tmp/test.file",
			expectError: false, // Should return nil with warning
		},
		{
			name:        "freebsd unsupported platform",
			goos:        "freebsd",
			filePath:    "/tmp/test.file",
			expectError: false, // Should return nil with warning
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			err := verifySignature(tc.goos, tc.filePath)
			if tc.expectError {
				if err == nil {
					t.Errorf("Expected error for %s platform, got nil", tc.goos)
				}
			} else {
				if err != nil {
					t.Errorf("Expected no error for %s platform, got: %v", tc.goos, err)
				}
			}
		})
	}
}

func TestVerifyPKGSignature(t *testing.T) {
	t.Parallel()
	if runtime.GOOS != "darwin" {
		t.Skip("PKG signature verification only supported on macOS")
	}

	// Test with non-existent file
	err := verifyPKGSignature("/tmp/nonexistent.pkg")
	if err == nil {
		t.Error("Expected error for non-existent PKG file, got nil")
	}
}

func TestVerifyMSISignature(t *testing.T) {
	t.Parallel()
	if runtime.GOOS != "windows" {
		t.Skip("MSI signature verification only supported on Windows")
	}

	// Test with non-existent file
	err := verifyMSISignature("/tmp/nonexistent.msi")
	if err == nil {
		t.Error("Expected error for non-existent MSI file, got nil")
	}
}
