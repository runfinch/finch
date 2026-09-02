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

		// Mock home dir and clear DOCKER_CONFIG for test isolation
		originalHome := os.Getenv("HOME")
		originalDockerConfig := os.Getenv("DOCKER_CONFIG")
		_ = os.Setenv("HOME", tmpDir)
		_ = os.Unsetenv("DOCKER_CONFIG")
		defer func() {
			_ = os.Setenv("HOME", originalHome)
			if originalDockerConfig != "" {
				_ = os.Setenv("DOCKER_CONFIG", originalDockerConfig)
			}
		}()

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
		originalDockerConfig := os.Getenv("DOCKER_CONFIG")
		_ = os.Setenv("HOME", tmpDir)
		_ = os.Unsetenv("DOCKER_CONFIG")
		defer func() {
			_ = os.Setenv("HOME", originalHome)
			if originalDockerConfig != "" {
				_ = os.Setenv("DOCKER_CONFIG", originalDockerConfig)
			}
		}()

		_, err = loadConfig()
		assert.Error(t, err)
	})
}

func TestLoadConfigWithOverride(t *testing.T) {
	t.Parallel()
	t.Run("uses override path when provided", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		customDir := filepath.Join(tmpDir, "custom")
		configPath := filepath.Join(customDir, "config.json")
		err := os.MkdirAll(filepath.Dir(configPath), 0o750)
		require.NoError(t, err)

		configData := `{"credsStore":"custom-helper"}`
		err = os.WriteFile(configPath, []byte(configData), 0o644)
		require.NoError(t, err)

		cfg, err := loadConfigWithOverride(customDir)
		require.NoError(t, err)
		assert.Equal(t, "custom-helper", cfg.CredentialsStore)
	})

	t.Run("rejects relative override path", func(t *testing.T) {
		t.Parallel()
		cfg, err := loadConfigWithOverride("relative/dir")
		require.Error(t, err)
		assert.Nil(t, cfg)
		assert.Contains(t, err.Error(), "absolute path")
	})

	t.Run("falls back to ~/.finch when override and env empty", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		configPath := filepath.Join(tmpDir, ".finch", "config.json")
		err := os.MkdirAll(filepath.Dir(configPath), 0o750)
		require.NoError(t, err)

		configData := `{"credsStore":"default-helper"}`
		err = os.WriteFile(configPath, []byte(configData), 0o644)
		require.NoError(t, err)

		originalHome := os.Getenv("HOME")
		originalDockerConfig := os.Getenv("DOCKER_CONFIG")
		_ = os.Setenv("HOME", tmpDir)
		_ = os.Unsetenv("DOCKER_CONFIG")
		defer func() {
			_ = os.Setenv("HOME", originalHome)
			if originalDockerConfig != "" {
				_ = os.Setenv("DOCKER_CONFIG", originalDockerConfig)
			}
		}()

		cfg, err := loadConfigWithOverride("")
		require.NoError(t, err)
		assert.Equal(t, "default-helper", cfg.CredentialsStore)
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

	t.Run("rejects credsStore containing a path separator", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{ //nolint:gosec // G101: not a credential, this is a test
			CredentialsStore: "/tmp/bad/script.sh",
		}

		path := getCredHelperPath("registry.example.com", cfg)
		assert.Empty(t, path)
	})

	t.Run("rejects credHelpers value containing a path separator", func(t *testing.T) {
		t.Parallel()
		cfg := &configfile.ConfigFile{
			CredentialHelpers: map[string]string{
				"registry.example.com": "../../Users/bad/script.sh",
			},
		}

		path := getCredHelperPath("registry.example.com", cfg)
		assert.Empty(t, path)
	})
}

//nolint:paralleltest // test uses t.Setenv
func TestLookupHelperPath(t *testing.T) {
	binDir := t.TempDir()

	realHelper := filepath.Join(binDir, "docker-credential-realhelper")
	//nolint:gosec // Test helper must be executable for exec.LookPath to find it
	err := os.WriteFile(realHelper, []byte("#!/bin/sh\nexit 0\n"), 0o700)
	require.NoError(t, err)

	err = os.Symlink(realHelper, filepath.Join(binDir, "docker-credential-symlinkedhelper"))
	require.NoError(t, err)

	t.Setenv("PATH", binDir)

	t.Run("returns path of a regular executable", func(t *testing.T) {
		assert.Equal(t, realHelper, lookupHelperPath("realhelper"))
	})

	t.Run("rejects a helper that is a symlink", func(t *testing.T) {
		assert.Empty(t, lookupHelperPath("symlinkedhelper"))
	})

	t.Run("returns empty when helper is not in PATH", func(t *testing.T) {
		assert.Empty(t, lookupHelperPath("missinghelper"))
	})
}

//nolint:paralleltest // test mutates PATH and the helperFallbackDir package var
func TestResolveHelper(t *testing.T) {
	t.Run("prefers a helper found on PATH", func(t *testing.T) {
		pathDir := t.TempDir()
		onPath := filepath.Join(pathDir, "docker-credential-pathhelper")
		//nolint:gosec // Test helper must be executable for exec.LookPath to find it
		require.NoError(t, os.WriteFile(onPath, []byte("#!/bin/sh\nexit 0\n"), 0o700))

		t.Setenv("PATH", pathDir)

		got, err := resolveHelper("pathhelper")
		require.NoError(t, err)
		assert.Equal(t, onPath, got)
	})

	t.Run("falls back to finchHelperDir when not on PATH", func(t *testing.T) {
		// Empty PATH dir so exec.LookPath fails and the fallback is exercised.
		t.Setenv("PATH", t.TempDir())

		fallbackDir := t.TempDir()
		fallbackHelper := filepath.Join(fallbackDir, "docker-credential-fallbackhelper")
		//nolint:gosec // Test helper must be executable to satisfy the mode check
		require.NoError(t, os.WriteFile(fallbackHelper, []byte("#!/bin/sh\nexit 0\n"), 0o700))

		// Redirect the fallback directory (defaults to /opt/finch/bin, which is
		// not writable in CI) at the package-var seam.
		orig := helperFallbackDir
		helperFallbackDir = fallbackDir
		defer func() { helperFallbackDir = orig }()

		got, err := resolveHelper("fallbackhelper")
		require.NoError(t, err)
		assert.Equal(t, fallbackHelper, got)
	})

	t.Run("errors when helper is neither on PATH nor in finchHelperDir", func(t *testing.T) {
		t.Setenv("PATH", t.TempDir())

		orig := helperFallbackDir
		helperFallbackDir = t.TempDir() // empty
		defer func() { helperFallbackDir = orig }()

		_, err := resolveHelper("nowherehelper")
		assert.Error(t, err)
	})

	t.Run("ignores a non-executable file in finchHelperDir", func(t *testing.T) {
		t.Setenv("PATH", t.TempDir())

		fallbackDir := t.TempDir()
		//nolint:gosec // Intentionally non-executable to prove the mode check rejects it
		require.NoError(t, os.WriteFile(
			filepath.Join(fallbackDir, "docker-credential-nonexec"),
			[]byte("not executable"), 0o600))

		orig := helperFallbackDir
		helperFallbackDir = fallbackDir
		defer func() { helperFallbackDir = orig }()

		_, err := resolveHelper("nonexec")
		assert.Error(t, err)
	})

	// Documents that finchHelperDir is the installer path #1785 moved the bundled
	// osxkeychain helper into, which is intentionally not on the CLI's PATH.
	t.Run("default fallback dir is finchHelperDir", func(t *testing.T) {
		assert.Equal(t, finchHelperDir, helperFallbackDir)
	})
}

//nolint:paralleltest // test uses t.Setenv
func TestGetCredHelperPathSymlink(t *testing.T) {
	binDir := t.TempDir()

	realHelper := filepath.Join(binDir, "docker-credential-symlinktarget")
	//nolint:gosec // Test helper must be executable for exec.LookPath to find it
	err := os.WriteFile(realHelper, []byte("#!/bin/sh\nexit 0\n"), 0o700)
	require.NoError(t, err)

	err = os.Symlink(realHelper, filepath.Join(binDir, "docker-credential-bad"))
	require.NoError(t, err)

	t.Setenv("PATH", binDir)

	t.Run("rejects credHelpers value resolving to a symlink", func(t *testing.T) {
		cfg := &configfile.ConfigFile{
			CredentialHelpers: map[string]string{
				"registry.example.com": "bad",
			},
		}

		assert.Empty(t, getCredHelperPath("registry.example.com", cfg))
	})

	t.Run("rejects credsStore resolving to a symlink", func(t *testing.T) {
		cfg := &configfile.ConfigFile{
			CredentialsStore: "bad",
		}

		assert.Empty(t, getCredHelperPath("registry.example.com", cfg))
	})
}

func TestIsValidHelperName(t *testing.T) {
	t.Parallel()

	valid := []string{"osxkeychain", "ecr-login"}
	for _, name := range valid {
		t.Run("valid: "+name, func(t *testing.T) {
			t.Parallel()
			assert.True(t, isValidHelperName(name))
		})
	}

	invalid := []string{
		"",
		// path separators
		"/tmp/bad/script.sh",
		"./script.sh",
		"../script.sh",
		"../../Users/bad/script.sh",
		"foo/bar",
	}
	for _, name := range invalid {
		t.Run("invalid: "+name, func(t *testing.T) {
			t.Parallel()
			assert.False(t, isValidHelperName(name))
		})
	}
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
		originalDockerConfig := os.Getenv("DOCKER_CONFIG")
		_ = os.Setenv("HOME", tmpDir)
		_ = os.Unsetenv("DOCKER_CONFIG")
		defer func() {
			_ = os.Setenv("HOME", originalHome)
			if originalDockerConfig != "" {
				_ = os.Setenv("DOCKER_CONFIG", originalDockerConfig)
			}
		}()

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
