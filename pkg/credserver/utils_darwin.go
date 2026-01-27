// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package credserver

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/docker/cli/cli/config/configfile"
	"github.com/docker/docker-credential-helpers/credentials"
)

// GetCredentials retrieves credentials from configured helper or auths in config. Returns empty credentials if not found.
func GetCredentials(registryHostname string, envVars ...map[string]string) (*credentials.Credentials, error) {
	// Load snapshot of config file.
	cfg, err := loadConfig()
	if err != nil {
		return nil, fmt.Errorf("failed to load config: %w", err)
	}

	// Determine helper required for registryHostname.
	helperPath := getCredHelperPath(registryHostname, cfg)

	// If helper is not found, defer to searching the plaintext credstore.
	if helperPath == "" {
		return readCredentialsFromConfig(registryHostname, cfg), nil
	}

	// Build the GET command to helper with added environment variables.
	// #nosec G204 -- helperPath is from config file credential helper, not direct user input
	cmd := exec.Command(helperPath, "get")
	cmd.Env = os.Environ()
	for _, env := range envVars {
		for key, val := range env {
			cmd.Env = append(cmd.Env, key+"="+val)
		}
	}

	// Send request to the helper via stdin.
	cmd.Stdin = strings.NewReader(registryHostname)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return nil, fmt.Errorf("credential helper failed: %w - %s", err, string(output))
	}

	// Parse response from helper and return credential struct.
	var creds credentials.Credentials
	if err := json.Unmarshal(output, &creds); err != nil {
		return nil, fmt.Errorf("failed to parse credential response: %w", err)
	}
	return &creds, nil
}

// EnsureConfigExists creates config.json with osxkeychain if it doesn't exist. Leaves existing config untouched.
func EnsureConfigExists(finchPath string) error {
	// #nosec G301 -- finchPath is user's home directory, 0755 is appropriate
	if err := os.MkdirAll(finchPath, 0o755); err != nil {
		return fmt.Errorf("failed to create finch directory: %w", err)
	}

	// If config already exists, immediately return.
	cfgPath := filepath.Join(finchPath, "config.json")
	if _, err := os.Stat(cfgPath); err == nil {
		return nil
	} else if !os.IsNotExist(err) {
		return fmt.Errorf("failed to check config file: %w", err)
	}

	// Check if osxkeychain is available; if so, set as store.
	var cfg configfile.ConfigFile
	if isOSXKeychainUsable() {
		cfg.CredentialsStore = "osxkeychain"
	}

	// Create config file with JSON structure.
	data, err := json.MarshalIndent(&cfg, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(cfgPath, data, 0o644)
}

// loadConfig loads the config file if it exists, returns empty config if not found.
func loadConfig() (*configfile.ConfigFile, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get home directory: %w", err)
	}
	finchPath := filepath.Join(homeDir, ".finch")
	cfgPath := filepath.Join(finchPath, "config.json")

	cfg := configfile.New(cfgPath)
	file, err := os.Open(cfg.Filename)
	if err != nil {
		if os.IsNotExist(err) {
			return &configfile.ConfigFile{}, nil
		}
		return nil, err
	}
	defer func() { _ = file.Close() }()

	if err := cfg.LoadFromReader(file); err != nil {
		return nil, err
	}
	return cfg, nil
}

// getCredHelperPath determines credential helper path from credHelpers or credsStore. Returns empty string to signal plaintext fallback.
func getCredHelperPath(registryHostname string, cfg *configfile.ConfigFile) string {
	if cfg == nil {
		return ""
	}

	if cfg.CredentialHelpers != nil && registryHostname != "" {
		if helper, exists := cfg.CredentialHelpers[registryHostname]; exists {
			path, err := exec.LookPath("docker-credential-" + helper)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Warning: credential helper 'docker-credential-%s' not found: %v\n", helper, err)
				return ""
			}
			return path
		}
	}

	if cfg.CredentialsStore != "" {
		path, err := exec.LookPath("docker-credential-" + cfg.CredentialsStore)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Warning: credential helper 'docker-credential-%s' not found: %v\n", cfg.CredentialsStore, err)
			return ""
		}
		return path
	}

	return ""
}

// readCredentialsFromConfig reads credentials from auths section. Returns empty credentials with only ServerURL if not found.
func readCredentialsFromConfig(registryHostname string, cfg *configfile.ConfigFile) *credentials.Credentials {
	if cfg == nil || cfg.AuthConfigs == nil {
		return &credentials.Credentials{ServerURL: registryHostname}
	}

	if authConfig, exists := cfg.AuthConfigs[registryHostname]; exists {
		return &credentials.Credentials{
			ServerURL: registryHostname,
			Username:  authConfig.Username,
			Secret:    authConfig.Password,
		}
	}

	return &credentials.Credentials{ServerURL: registryHostname}
}

// isOSXKeychainUsable checks if osxkeychain credential helper is both available and functional.
func isOSXKeychainUsable() bool {
	// Check if binary exists in PATH
	helperPath, err := exec.LookPath("docker-credential-osxkeychain")
	if err != nil {
		return false
	}

	// Test if helper can execute (will fail if keychain unavailable or locked)
	// #nosec G204 -- helperPath is from exec.LookPath, not user input
	cmd := exec.Command(helperPath, "list")
	err = cmd.Run()
	return err == nil
}
