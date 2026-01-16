//go:build !windows

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetSocketPath(t *testing.T) {
	t.Run("uses os.Getuid() when SUDO_UID not set", func(t *testing.T) {
		os.Unsetenv("SUDO_UID")
		
		path := getSocketPath()
		uid := os.Getuid()
		expected := fmt.Sprintf("/run/user/%d/finch-creds.sock", uid)
		
		assert.Equal(t, expected, path)
	})

	t.Run("uses SUDO_UID when set", func(t *testing.T) {
		t.Setenv("SUDO_UID", "1000")
		
		path := getSocketPath()
		expected := "/run/user/1000/finch-creds.sock"
		
		assert.Equal(t, expected, path)
	})

	t.Run("handles invalid SUDO_UID (non-numeric)", func(t *testing.T) {
		t.Setenv("SUDO_UID", "invalid")
		
		path := getSocketPath()
		uid := os.Getuid()
		expected := fmt.Sprintf("/run/user/%d/finch-creds.sock", uid)
		
		assert.Equal(t, expected, path)
	})

	t.Run("handles SUDO_UID with whitespace", func(t *testing.T) {
		t.Setenv("SUDO_UID", "  1000  ")
		
		path := getSocketPath()
		expected := "/run/user/1000/finch-creds.sock"
		
		assert.Equal(t, expected, path)
	})

	t.Run("handles UID 0 (root)", func(t *testing.T) {
		t.Setenv("SUDO_UID", "0")
		
		path := getSocketPath()
		expected := "/run/user/0/finch-creds.sock"
		
		assert.Equal(t, expected, path)
	})
}

func TestFinchHostCredentialHelper_Add(t *testing.T) {
	t.Run("returns not implemented error", func(t *testing.T) {
		helper := FinchHostCredentialHelper{}
		err := helper.Add(nil)
		
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "not implemented")
	})
}

func TestFinchHostCredentialHelper_Delete(t *testing.T) {
	t.Run("returns not implemented error", func(t *testing.T) {
		helper := FinchHostCredentialHelper{}
		err := helper.Delete("")
		
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "not implemented")
	})
}

func TestFinchHostCredentialHelper_List(t *testing.T) {
	t.Run("returns not implemented error", func(t *testing.T) {
		helper := FinchHostCredentialHelper{}
		result, err := helper.List()
		
		assert.Error(t, err)
		assert.Nil(t, result)
		assert.Contains(t, err.Error(), "not implemented")
	})
}

func TestCredentialEnvs(t *testing.T) {
	t.Run("contains expected environment variables", func(t *testing.T) {
		expectedVars := []string{
			"COSIGN_PASSWORD",
			"AWS_ACCESS_KEY_ID",
			"AWS_SECRET_ACCESS_KEY",
			"AWS_SESSION_TOKEN",
			"AWS_ECR_DISABLE_CACHE",
			"AWS_ECR_CACHE_DIR",
			"AWS_ECR_IGNORE_CREDS_STORAGE",
		}

		for _, expectedVar := range expectedVars {
			assert.Contains(t, credentialEnvs, expectedVar, "credentialEnvs should contain %s", expectedVar)
		}
	})

	t.Run("has correct number of environment variables", func(t *testing.T) {
		assert.Len(t, credentialEnvs, 7)
	})
}

// Note: Testing Get() requires mocking the HTTP transport and Unix socket connection.
// This would require refactoring the code to accept an http.Client as a parameter.
// For now, we test the components that don't require network mocking.
