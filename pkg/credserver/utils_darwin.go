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
	fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials called for registry: %s\n", registryHostname)
	
	cfg, err := loadConfig()
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials loadConfig failed: %v\n", err)
		return nil, fmt.Errorf("failed to load config: %w", err)
	}

	helperPath := getCredHelperPath(registryHostname, cfg)
	fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials helperPath: %s\n", helperPath)

	if helperPath == "" {
		fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials no helper, reading from config\n")
		return readCredentialsFromConfig(registryHostname, cfg), nil
	}

	fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials calling helper: %s\n", helperPath)
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
		fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials helper failed: %v, output: %s\n", err, string(output))
		return nil, fmt.Errorf("credential helper failed: %w - %s", err, string(output))
	}

	var creds credentials.Credentials
	if err := json.Unmarshal(output, &creds); err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials unmarshal failed: %v\n", err)
		return nil, fmt.Errorf("failed to parse credential response: %w", err)
	}
	
	fmt.Fprintf(os.Stderr, "DEBUG: GetCredentials successfully retrieved credentials\n")
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

	// Check if osxkeychain credential helper is available AND usable
	var cfg configfile.ConfigFile
	if isOSXKeychainUsable() {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists osxkeychain is usable, setting as credsStore\n")
		cfg.CredentialsStore = "osxkeychain"
	} else {
		fmt.Fprintf(os.Stderr, "Warning: osxkeychain does not exist or not usable, credentials will be stored in plaintext\n")
		// Leave CredentialsStore empty - will use plaintext storage
	}

	data, err := json.MarshalIndent(&cfg, "", "  ")
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists marshal failed: %v\n", err)
		return err
	}

	err = os.WriteFile(cfgPath, data, 0o644)
	fmt.Fprintf(os.Stderr, "DEBUG: EnsureConfigExists WriteFile result: %v\n", err)
	return err
}

// loadConfig loads the config file if it exists, returns empty config if not found.
func loadConfig() (*configfile.ConfigFile, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: loadConfig failed to get home dir: %v\n", err)
		return nil, fmt.Errorf("failed to get home directory: %w", err)
	}

	finchPath := filepath.Join(homeDir, ".finch")
	cfgPath := filepath.Join(finchPath, "config.json")
	fmt.Fprintf(os.Stderr, "DEBUG: loadConfig attempting to load: %s\n", cfgPath)

	cfg := configfile.New(cfgPath)
	file, err := os.Open(cfg.Filename)
	if err != nil {
		// If config doesn't exist, return empty config (plaintext storage)
		if os.IsNotExist(err) {
			fmt.Fprintf(os.Stderr, "DEBUG: loadConfig config does not exist, returning empty config\n")
			return &configfile.ConfigFile{}, nil
		}
		fmt.Fprintf(os.Stderr, "DEBUG: loadConfig failed to open config: %v\n", err)
		return nil, err
	}
	defer func() { _ = file.Close() }()

	if err := cfg.LoadFromReader(file); err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: loadConfig failed to parse config: %v\n", err)
		return nil, err
	}
	
	fmt.Fprintf(os.Stderr, "DEBUG: loadConfig successfully loaded config (credsStore: %s)\n", cfg.CredentialsStore)
	return cfg, nil
}

// Determines credential helper path from credHelpers or credsStore. Returns empty string to signal plaintext fallback.
func getCredHelperPath(registryHostname string, cfg *configfile.ConfigFile) string {
	if cfg == nil {
		fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath config is nil\n")
		return ""
	}
	
	if cfg.CredentialHelpers != nil && registryHostname != "" {
		if helper, exists := cfg.CredentialHelpers[registryHostname]; exists {
			fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath found registry-specific helper: %s\n", helper)
			path, err := exec.LookPath("docker-credential-" + helper)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Warning: credential helper 'docker-credential-%s' not found: %v\n", helper, err)
				return ""
			}
			fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath resolved to: %s\n", path)
			return path
		}
	}

	if cfg.CredentialsStore != "" {
		fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath using credsStore: %s\n", cfg.CredentialsStore)
		path, err := exec.LookPath("docker-credential-" + cfg.CredentialsStore)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Warning: credential helper 'docker-credential-%s' not found: %v\n", cfg.CredentialsStore, err)
			return ""
		}
		fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath resolved to: %s\n", path)
		return path
	}
	
	fmt.Fprintf(os.Stderr, "DEBUG: getCredHelperPath no helper configured\n")
	return ""
}

// Reads credentials from auths section. Returns empty credentials with only ServerURL if not found.
func readCredentialsFromConfig(registryHostname string, cfg *configfile.ConfigFile) *credentials.Credentials {
	if cfg == nil || cfg.AuthConfigs == nil {
		fmt.Fprintf(os.Stderr, "DEBUG: readCredentialsFromConfig config or AuthConfigs is nil\n")
		return &credentials.Credentials{ServerURL: registryHostname}
	}
	
	if authConfig, exists := cfg.AuthConfigs[registryHostname]; exists {
		fmt.Fprintf(os.Stderr, "DEBUG: readCredentialsFromConfig found credentials for %s (username: %s)\n", registryHostname, authConfig.Username)
		return &credentials.Credentials{
			ServerURL: registryHostname,
			Username:  authConfig.Username,
			Secret:    authConfig.Password,
		}
	}
	
	fmt.Fprintf(os.Stderr, "DEBUG: readCredentialsFromConfig no credentials found for %s\n", registryHostname)
	return &credentials.Credentials{ServerURL: registryHostname}
}

// isOSXKeychainUsable checks if osxkeychain credential helper is both available and functional.
func isOSXKeychainUsable() bool {
	fmt.Fprintf(os.Stderr, "DEBUG: isOSXKeychainUsable checking osxkeychain availability\n")
	
	// Check 1: Binary exists in PATH
	helperPath, err := exec.LookPath("docker-credential-osxkeychain")
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: osxkeychain helper not in PATH: %v\n", err)
		return false
	}
	fmt.Fprintf(os.Stderr, "DEBUG: isOSXKeychainUsable found helper at: %s\n", helperPath)

	// Check 2: Verify login keychain exists
	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: osxkeychain failed to get home dir: %v\n", err)
		return false
	}
	loginKeychainPath := filepath.Join(homeDir, "Library", "Keychains", "login.keychain-db")
	if _, err := os.Stat(loginKeychainPath); err != nil {
		fmt.Fprintf(os.Stderr, "DEBUG: osxkeychain login keychain not found at %s: %v\n", loginKeychainPath, err)
		return false
	}
	
	fmt.Fprintf(os.Stderr, "DEBUG: isOSXKeychainUsable osxkeychain is fully functional\n")
	return true
}
