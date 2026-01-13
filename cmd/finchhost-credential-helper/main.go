//go:build !windows

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main implements docker-credential-finchhost
package main

import (
	"bytes"
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

type CredentialRequest struct {
	Action    string            `json:"action"`
	ServerURL string            `json:"serverURL"`
	Env       map[string]string `json:"env"`
}

// credentialEnvs are the environment variables collected for credential operations.
var credentialEnvs = []string{
	"COSIGN_PASSWORD", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY",
	"AWS_SESSION_TOKEN", "AWS_ECR_DISABLE_CACHE", "AWS_ECR_CACHE_DIR", "AWS_ECR_IGNORE_CREDS_STORAGE",
}

// Add is not implemented for Finch credential helper.
func (h FinchHostCredentialHelper) Add(*credentials.Credentials) error {
	return fmt.Errorf("not implemented")
}

// Delete is not implemented for Finch credential helper.
func (h FinchHostCredentialHelper) Delete(_ string) error {
	return fmt.Errorf("not implemented")
}

// List is not implemented for Finch credential helper.
func (h FinchHostCredentialHelper) List() (map[string]string, error) {
	return nil, fmt.Errorf("not implemented")
}

// Get retrieves credentials via HTTP to host.
func (h FinchHostCredentialHelper) Get(serverURL string) (string, string, error) {
	envMap := make(map[string]string)
	for _, key := range credentialEnvs {
		if val := os.Getenv(key); val != "" {
			envMap[key] = val
		}
	}

	req := CredentialRequest{
		Action:    "get",
		ServerURL: strings.TrimSpace(serverURL),
		Env:       envMap,
	}

	reqBody, err := json.Marshal(req)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	// Create HTTP client with Unix socket transport
	client := &http.Client{
		Transport: &http.Transport{
			Dial: func(_, _ string) (net.Conn, error) {
				return net.Dial("unix", "/run/finch-user-sockets/creds.sock")
			},
		},
	}

	resp, err := client.Post("http://unix/credentials", "application/json", bytes.NewReader(reqBody))
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}
	defer resp.Body.Close()

	// Read raw response body for debugging
	rawBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	var cred credentials.Credentials
	if err := json.Unmarshal(rawBody, &cred); err != nil {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	if cred.Username == "" && cred.Secret == "" {
		return "", "", credentials.NewErrCredentialsNotFound()
	}

	return cred.Username, cred.Secret, nil
}

func main() {
	credentials.Serve(FinchHostCredentialHelper{})
}
