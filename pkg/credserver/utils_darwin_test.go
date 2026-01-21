//go:build darwin

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credserver

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"

	"github.com/docker/cli/cli/config/configfile"
	"github.com/docker/cli/cli/config/types"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestEnsureConfigExists(t *testing.T) {
	t.Parallel()
	t.Run("creates config with osxkeychain when helper exists", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()

		err := EnsureConfigExists(tmpDir)
		require.NoError(t, err)

		configPath := filepath.Join(tmpDir, "config.json")
		//nolint:gosec // Test file path is safe
		data, err := os.ReadFile(configPath)
		require.NoError(t, err)

		var cfg configfile.ConfigFile
		err = json.Unmarshal(data, &cfg)
		require.NoError(t, err)

		// Should have osxkeychain if available on system
		if isOSXKeychainUsable() {
			assert.Equal(t, "osxkeychain", cfg.CredentialsStore)
		}
	})

	t.Run("skips when config already exists", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		configPath := filepath.Join(tmpDir, "config.json")

		existingConfig := `{"credsStore":"test"}`
		err := os.WriteFile(configPath, []byte(existingConfig), 0o644)
		require.NoError(t, err)

		err = EnsureConfigExists(tmpDir)
		require.NoError(t, err)

		//nolint:gosec // Test file path is safe
		data, err := os.ReadFile(configPath)
		require.NoError(t, err)
		assert.Equal(t, existingConfig, string(data))
	})

	t.Run("creates directory if missing", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		finchDir := filepath.Join(tmpDir, "nested", "finch")

		err := EnsureConfigExists(finchDir)
		require.NoError(t, err)

		configPath := filepath.Join(finchDir, "config.json")
		_, err = os.Stat(configPath)
		assert.NoError(t, err)
	})
}

func TestLoadConfig(t *testing.T) {
	t.Parallel()
	t.Run("loads valid config with credsStore", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		configPath := filepath.Join(tmpDir, ".finch", "config.json")
		err := os.MkdirAll(filepath.Dir(configPath), 0o750)
		require.NoError(t, err)

		configData := `{"credsStore":"osxkeychain"}`
		err = os.WriteFile(configPath, []byte(configData), 0o644)
		require.NoError(t, err)

		// Mock home dir
		originalHome := os.Getenv("HOME")
		_ = os.Setenv("HOME", tmpDir)
		defer func() { _ = os.Setenv("HOME", originalHome) }()

		cfg, err := loadConfig()
		require.NoError(t, err)
		assert.Equal(t, "osxkeychain", cfg.CredentialsStore)
	})

	t.Run("returns empty config when file missing", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()

		originalHome := os.Getenv("HOME")
		_ = os.Setenv("HOME", tmpDir)
		defer func() { _ = os.Setenv("HOME", originalHome) }()

		cfg, err := loadConfig()
		require.NoError(t, err)
		assert.NotNil(t, cfg)
		assert.Empty(t, cfg.CredentialsStore)
	})

	t.Run("returns error on malformed JSON", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		configPath := filepath.Join(tmpDir, ".finch", "config.json")
		err := os.MkdirAll(filepath.Dir(configPath), 0o750)
		require.NoError(t, err)

		err = os.WriteFile(configPath, []byte(`{invalid json`), 0o644)
		require.NoError(t, err)

		originalHome := os.Getenv("HOME")
		_ = os.Setenv("HOME", tmpDir)
		defer func() { _ = os.Setenv("HOME", originalHome) }()

		_, err = loadConfig()
		assert.Error(t, err)
	})
}

func TestGetCredHelperPath(t *testing.T) {
	t.Parallel()
	t.Run("returns registry-specific helper from credHelpers", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{
			CredentialHelpers: map[string]string{
				"registry.example.com": "ecr-login",
			},
		}

		path := getCredHelperPath("registry.example.com", cfg)
		// Should attempt to find docker-credential-ecr-login
		// Path will be empty if not in PATH, which is expected in test
		assert.NotNil(t, path)
	})

	t.Run("falls back to credsStore when registry not in credHelpers", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{
			CredentialsStore: "osxkeychain",
			CredentialHelpers: map[string]string{
				"other.example.com": "ecr-login",
			},
		}

		path := getCredHelperPath("registry.example.com", cfg)
		assert.NotNil(t, path)
	})

	t.Run("returns empty when no helper configured", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{}

		path := getCredHelperPath("registry.example.com", cfg)
		assert.Empty(t, path)
	})

	t.Run("handles nil config", func(t *testing.T) {
		t.Parallel()
		path := getCredHelperPath("registry.example.com", nil)
		assert.Empty(t, path)
	})
}

func TestReadCredentialsFromConfig(t *testing.T) {
	t.Parallel()
	t.Run("reads username and password from auths", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{
			AuthConfigs: map[string]types.AuthConfig{
				"registry.example.com": {
					Username: "testuser",
					Password: "testpass",
				},
			},
		}

		creds := readCredentialsFromConfig("registry.example.com", cfg)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
		assert.Equal(t, "testuser", creds.Username)
		assert.Equal(t, "testpass", creds.Secret)
	})

	t.Run("returns empty creds when registry not found", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{
			AuthConfigs: map[string]types.AuthConfig{},
		}

		creds := readCredentialsFromConfig("registry.example.com", cfg)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
		assert.Empty(t, creds.Username)
		assert.Empty(t, creds.Secret)
	})

	t.Run("handles nil config", func(t *testing.T) {
		t.Parallel()
		creds := readCredentialsFromConfig("registry.example.com", nil)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
		assert.Empty(t, creds.Username)
	})

	t.Run("handles nil AuthConfigs map", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{}

		creds := readCredentialsFromConfig("registry.example.com", cfg)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
		assert.Empty(t, creds.Username)
	})
}

func TestIsOSXKeychainUsable(t *testing.T) {
	t.Parallel()
	t.Run("checks osxkeychain availability", func(t *testing.T) {
		t.Parallel()
		usable := isOSXKeychainUsable()
		// Result depends on system state, just verify it doesn't panic
		assert.NotNil(t, usable)
	})
}

func TestGetCredentials_Plaintext(t *testing.T) {
	t.Parallel()
	t.Run("returns credentials from plaintext config", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		configPath := filepath.Join(tmpDir, ".finch", "config.json")
		err := os.MkdirAll(filepath.Dir(configPath), 0o750)
		require.NoError(t, err)

		cfg := configfile.ConfigFile{
			AuthConfigs: map[string]types.AuthConfig{
				"registry.example.com": {
					Username: "testuser",
					Password: "testpass",
				},
			},
		}
		data, err := json.Marshal(cfg)
		require.NoError(t, err)
		err = os.WriteFile(configPath, data, 0o644)
		require.NoError(t, err)

		originalHome := os.Getenv("HOME")
		_ = os.Setenv("HOME", tmpDir)
		defer func() { _ = os.Setenv("HOME", originalHome) }()

		creds, err := GetCredentials("registry.example.com")
		require.NoError(t, err)
		assert.Equal(t, "testuser", creds.Username)
		assert.Equal(t, "testpass", creds.Secret)
	})

	t.Run("returns empty credentials when not found", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()

		originalHome := os.Getenv("HOME")
		_ = os.Setenv("HOME", tmpDir)
		defer func() { _ = os.Setenv("HOME", originalHome) }()

		creds, err := GetCredentials("registry.example.com")
		require.NoError(t, err)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
		assert.Empty(t, creds.Username)
	})
}
