//go:build darwin

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credserver

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/docker/cli/cli/config/configfile"
	"github.com/docker/docker-credential-helpers/credentials"
	"github.com/spf13/afero"
)

// GetCredentials retrieves credentials for a given server URL using credential helpers or config.json fallback.
func GetCredentials(serverURL string, envVars ...map[string]string) (*credentials.Credentials, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get home directory: %w", err)
	}

	finchDir := filepath.Join(homeDir, ".finch")
	helperPath, err := GetCredHelperPath(serverURL, finchDir)
	if err != nil {
		return nil, fmt.Errorf("failed to find credential helper: %w", err)
	}

	// No helper configured, fall back to config.json
	if helperPath == "" {
		return ReadCredentialsFromConfig(serverURL, finchDir), nil
	}

	cmd := exec.Command(helperPath, "get") //nolint:gosec // helperPath is validated by exec.LookPath

	// Set environment variables
	cmd.Env = os.Environ()
	for _, env := range envVars {
		for key, val := range env {
			cmd.Env = append(cmd.Env, key+"="+val)
		}
	}

	cmd.Stdin = strings.NewReader(serverURL)

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

// GetCredHelperPath determines the appropriate credential helper for a given server URL and returns its full executable path.
func GetCredHelperPath(serverURL, finchPath string) (string, error) {
	cfgPath := filepath.Join(finchPath, "config.json")
	fs := afero.NewOsFs()

	if exists, _ := afero.Exists(fs, cfgPath); !exists {
		return "", nil
	}

	fileRead, err := fs.Open(cfgPath)
	if err != nil {
		return "", err
	}
	defer fileRead.Close() //nolint:errcheck // closing the file

	bytes, err := afero.ReadAll(fileRead)
	if err != nil {
		return "", err
	}

	var cfg configfile.ConfigFile
	if err := json.Unmarshal(bytes, &cfg); err != nil {
		return "", err
	}

	var helperName string
	// Check credHelpers first (registry-specific)
	if cfg.CredentialHelpers != nil {
		if helper, exists := cfg.CredentialHelpers[serverURL]; exists {
			helperName = helper
		}
	}

	// Fall back to credsStore (default)
	if helperName == "" && cfg.CredentialsStore != "" {
		helperName = cfg.CredentialsStore
	}

	// No helper configured
	if helperName == "" {
		return "", nil
	}

	// Look up the binary with docker-credential- prefix
	return exec.LookPath("docker-credential-" + helperName)
}

// ReadCredentialsFromConfig reads credentials directly from config.json auths section.
// Returns a Credentials with ServerURL set and Username/Secret if found.
func ReadCredentialsFromConfig(serverURL, finchPath string) *credentials.Credentials {
	configPath := filepath.Join(finchPath, "config.json")
	fs := afero.NewOsFs()

	data, err := afero.ReadFile(fs, configPath)
	if err != nil {
		return &credentials.Credentials{ServerURL: serverURL}
	}

	var config map[string]interface{}
	if json.Unmarshal(data, &config) != nil {
		return &credentials.Credentials{ServerURL: serverURL}
	}

	auths, ok := config["auths"].(map[string]interface{})
	if !ok {
		return &credentials.Credentials{ServerURL: serverURL}
	}

	auth, ok := auths[serverURL].(map[string]interface{})
	if !ok {
		return &credentials.Credentials{ServerURL: serverURL}
	}

	// Decode base64 encoded auth field
	if authStr, ok := auth["auth"].(string); ok {
		if decoded, err := base64.StdEncoding.DecodeString(authStr); err == nil {
			if parts := strings.SplitN(string(decoded), ":", 2); len(parts) == 2 {
				return &credentials.Credentials{ServerURL: serverURL, Username: parts[0], Secret: parts[1]}
			}
		}
	}

	return &credentials.Credentials{ServerURL: serverURL}
}
