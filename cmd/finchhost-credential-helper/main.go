//go:build !windows

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main implements docker-credential-finchhost, the standardized credhelper in the VM (only on macOS for now).
// TODO: finchhost credential helper is macOS-only because it relies on Unix socket
// communication with the host credential server. Windows uses a different architecture
// where credential helpers run directly in WSL2. Consider creating a Windows equivalent
// or extend functionality to support a similar socket-based approach for Windows.
package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/fs"
	"net"
	"net/http"
	"os"
	"strings"

	"github.com/docker/docker-credential-helpers/credentials"
)

// FinchHostCredentialHelper implements the credentials.Helper interface.
type FinchHostCredentialHelper struct{}

// credentialEnvs are the environment variables collected for credential operations.
var credentialEnvs = []string{
	"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
	"AWS_SESSION_TOKEN", "AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR",
	"AWS_ECR_IGNORE_CREDS_STORAGE", "AWS_PROFILE", "HOST_DOCKER_CONFIG",
}

// Add is not implemented for FinchHost credential helper.
func (h FinchHostCredentialHelper) Add(*credentials.Credentials) error {
	return fmt.Errorf("not implemented")
}

// Delete is not implemented for FinchHost credential helper.
func (h FinchHostCredentialHelper) Delete(_ string) error {
	return fmt.Errorf("not implemented")
}

// List is not implemented for FinchHost credential helper.
func (h FinchHostCredentialHelper) List() (map[string]string, error) {
	return nil, fmt.Errorf("not implemented")
}

// Get retrieves credentials via HTTP request to host.
func (h FinchHostCredentialHelper) Get(serverURL string) (string, string, error) {
	// Build URL with serverURL as query parameter.
	url := fmt.Sprintf("http://unix/credentials?server=%s", strings.TrimSpace(serverURL))
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	// Add environment variables as headers.
	for _, key := range credentialEnvs {
		if val := os.Getenv(key); val != "" {
			req.Header.Set("X-Finch-Env-"+key, val)
		}
	}

	// Create client that interfaces with UNIX socket.
	client := &http.Client{
		Transport: &http.Transport{
			DialContext: func(_ context.Context, _, _ string) (net.Conn, error) {
				return net.Dial("unix", getSocketPath())
			},
		},
	}

	// Send data through UNIX connection via client.
	resp, err := client.Do(req)
	if err != nil {
		// Check if socket exists to provide better error message
		socketPath := getSocketPath()
		if _, statErr := os.Stat(socketPath); errors.Is(statErr, fs.ErrNotExist) {
			return "", "", fmt.Errorf("credential server socket not found at %s. "+
				"The credential server may not be running. "+
				"Try restarting the VM with 'finch vm stop' and 'finch vm start'", socketPath)
		}
		return "", "", credentials.NewErrCredentialsNotFound()
	}
	defer func() { _ = resp.Body.Close() }()

	// Ensure response status is valid.
	if resp.StatusCode != http.StatusOK {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	// Read response body into raw data.
	responseBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	// Unmarshal raw data into credentials object.
	var cred credentials.Credentials
	if err := json.Unmarshal(responseBytes, &cred); err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	return cred.Username, cred.Secret, nil
}

// Returns the credential socket path, using SUDO_UID when running under sudo.
// This path must match the guestSocket path configured in mac.yaml portForwards.
func getSocketPath() string {
	uid := os.Getuid()
	if sudoUID := os.Getenv("SUDO_UID"); sudoUID != "" {
		var parsedUID int
		if _, err := fmt.Sscanf(sudoUID, "%d", &parsedUID); err == nil {
			uid = parsedUID
		}
	}
	return fmt.Sprintf("/run/user/%d/finch-creds.sock", uid)
}

func main() {
	credentials.Serve(FinchHostCredentialHelper{})
}
