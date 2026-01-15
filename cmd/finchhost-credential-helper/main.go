//go:build !windows

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main implements docker-credential-finchhost
package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
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
	"AWS_SESSION_TOKEN", "AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR", "AWS_ECR_IGNORE_CREDS_STORAGE",
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
	// Collect relevant variables from VM environment.
	envMap := make(map[string]string)
	for _, key := range credentialEnvs {
		if val := os.Getenv(key); val != "" {
			envMap[key] = val
		}
	}

	// Create request with JSON body.
	reqBody := struct {
		ServerURL string            `json:"serverURL"`
		Env       map[string]string `json:"env"`
	}{ServerURL: strings.TrimSpace(serverURL), Env: envMap}
	jsonData, _ := json.Marshal(reqBody)

	client := &http.Client{
		Transport: &http.Transport{
			DialContext: func(_ context.Context, _, _ string) (net.Conn, error) {
				return net.Dial("unix", getSocketPath())
			},
		},
	}

	req, _ := http.NewRequest(http.MethodPost, "http://unix/credentials", bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(req)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}
	defer func() { _ = resp.Body.Close() }()

	if resp.StatusCode != http.StatusOK {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	responseBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	var cred credentials.Credentials
	if err := json.Unmarshal(responseBytes, &cred); err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	return cred.Username, cred.Secret, nil
}

// Returns the credential socket path, using SUDO_UID when running under sudo.
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
