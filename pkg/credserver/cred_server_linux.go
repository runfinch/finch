//go:build linux

// Package credserver provides credential server functionality for Finch.
package credserver

import "github.com/docker/docker-credential-helpers/credentials"

// GetCredentials is not implemented on Linux
func GetCredentials(serverURL string, envVars ...map[string]string) (*credentials.Credentials, error) {
	return &credentials.Credentials{ServerURL: serverURL}, nil
}

// GetPathToCredHelper is not implemented on Linux
func GetPathToCredHelper(serverURL, finchPath string) (string, error) {
	return "", nil
}

// ReadCredentialsFromConfig is not implemented on Linux
func ReadCredentialsFromConfig(serverURL, finchPath string) *credentials.Credentials {
	return &credentials.Credentials{ServerURL: serverURL}
}

// StartCredentialServer is not implemented on Linux
func StartCredentialServer(finchRootPath string) error {
	return nil
}

// StopCredentialServer is not implemented on Linux
func StopCredentialServer() {
	// No-op
}