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
	cfg, err := loadConfig()
	if err != nil {
		return nil, fmt.Errorf("failed to load config: %w", err)
	}

	helperPath := getCredHelperPath(registryHostname, cfg)

	if helperPath == "" {
		return readCredentialsFromConfig(registryHostname, cfg), nil
	}

	// #nosec G204 -- helperPath is from config file credential helper, not direct user input
	cmd := exec.Command(helperPath, "get")
	cmd.Env = os.Environ()
	for _, env := range envVars {
		for key, val := range env {
			cmd.Env = append(cmd.Env, key+"="+val)
		}
	}

	cmd.Stdin = strings.NewReader(registryHostname)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return nil, fmt.Errorf("credential helper failed: %w - %s", err, string(output))
	}

	var creds credentials.Credentials
	if err := json.Unmarshal(output, &creds); err != nil {
		return nil, fmt.Errorf("failed to parse credential response: %w", err)
	}
	return &creds, nil
}

// EnsureConfigExists creates config.json with osxkeychain if it doesn't exist. Leaves existing config untouched.
func EnsureConfigExists(finchPath string) error {
	fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists called with path: %s\n", finchPath)
	// #nosec G301 -- finchPath is user's home directory, 0755 is appropriate
	if err := os.MkdirAll(finchPath, 0o755); err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists MkdirAll failed: %v\n", err)
		return fmt.Errorf("failed to create finch directory: %w", err)
	}

	cfgPath := filepath.Join(finchPath, "config.json")
	fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists checking config at: %s\n", cfgPath)
	if _, err := os.Stat(cfgPath); err == nil {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists config already exists\n")
		return nil
	} else if !os.IsNotExist(err) {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists stat failed: %v\n", err)
		return fmt.Errorf("failed to check config file: %w", err)
	}

	fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists creating new config\n")
	cfg := configfile.ConfigFile{CredentialsStore: "osxkeychain"}
	data, err := json.MarshalIndent(&cfg, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists marshal failed: %v\n", err)
		return err
	}

	err = os.WriteFile(cfgPath, data, 0o644)
	fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists WriteFile result: %v\n", err)
	return err
}

// Ensures config file exists, loads it, and returns decoded ConfigFile.
func loadConfig() (*configfile.ConfigFile, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get home directory: %w", err)
	}

	finchPath := filepath.Join(homeDir, ".finch")
	if err := EnsureConfigExists(finchPath); err != nil {
		return nil, fmt.Errorf("failed to ensure config: %w", err)
	}

	cfg := configfile.New(filepath.Join(finchPath, "config.json"))
	file, err := os.Open(cfg.Filename)
	if err != nil {
		return nil, err
	}
	defer func() { _ = file.Close() }()

	if err := cfg.LoadFromReader(file); err != nil {
		return nil, err
	}
	return cfg, nil
}

// Determines credential helper path from credHelpers or credsStore. Returns empty string to signal plaintext fallback.
func getCredHelperPath(registryHostname string, cfg *configfile.ConfigFile) string {
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

// Reads credentials from auths section. Returns empty credentials with only ServerURL if not found.
func readCredentialsFromConfig(registryHostname string, cfg *configfile.ConfigFile) *credentials.Credentials {
	if authConfig, exists := cfg.AuthConfigs[registryHostname]; exists {
		return &credentials.Credentials{
			ServerURL: registryHostname,
			Username:  authConfig.Username,
			Secret:    authConfig.Password,
		}
	}
	return &credentials.Credentials{ServerURL: registryHostname}
}
