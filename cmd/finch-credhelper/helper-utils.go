// Package main implements the finch credential helper bridge.
package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
)

const (
	maxBufferSize  = 4096
	credHelpersDir = "cred-helpers"
	finchConfigDir = ".finch"
)

var credentialHelperNames = map[string]string{
	"darwin":  "docker-credential-osxkeychain",
	"windows": "docker-credential-wincred.exe",
}

// Parses JSON requests.
func parseCredstoreRequest(request string) (command, input string, err error) {
	lines := strings.Split(strings.TrimSpace(request), "\n")
	if len(lines) == 0 {
		return "", "", fmt.Errorf("empty request")
	}

	command = strings.TrimSpace(lines[0])
	if command == "list" {
		return command, "", nil
	}
	if len(lines) < 2 {
		return "", "", fmt.Errorf("command %s requires input", command)
	}

	return command, strings.TrimSpace(lines[1]), nil
}

// Determines and validates the credential helper path.
func getCredentialHelperPath() (string, error) {
	helperName, exists := credentialHelperNames[runtime.GOOS]
	if !exists {
		return "", fmt.Errorf("credential helper not supported on this platform")
	}

	homeDir, err := os.UserHomeDir()
	if err != nil {
		return "", fmt.Errorf("failed to get home directory")
	}

	path := filepath.Join(homeDir, finchConfigDir, credHelpersDir, helperName)
	if _, err := os.Stat(path); err != nil {
		return "", fmt.Errorf("credential helper not found")
	}

	return path, nil
}

// Invokes the platform-specific credential helper binary.
func executeCredentialHelper(command, input string) (string, error) {
	credHelperPath, err := getCredentialHelperPath()
	if err != nil {
		return "", err
	}

	// #nosec G204 -- credHelperPath is validated and command is from trusted source
	cmd := exec.Command(credHelperPath, command)
	if input != "" {
		cmd.Stdin = strings.NewReader(input)
	}
	cmd.Env = os.Environ()

	output, err := cmd.CombinedOutput()
	response := strings.TrimSpace(string(output))

	// Handling errors, with special case for "get" command requiring empty cred. JSON
	if err != nil {
		if command == "get" {
			return createEmptyCredentials(input), nil
		}
		return "", fmt.Errorf("credential helper failed")
	}

	return response, nil
}

// Creates default credentials when credentials are not found.
func createEmptyCredentials(serverURL string) string {
	return fmt.Sprintf(`{"ServerURL":"%s","Username":"","Secret":""}`, serverURL)
}

// Processes inbound credential requests from Lima VM bridge.
func processCredentialRequest(conn interface {
	Read([]byte) (int, error)
	Write([]byte) (int, error)
}) error {
	buffer := make([]byte, 0, maxBufferSize)
	buffer = buffer[:maxBufferSize]
	n, err := conn.Read(buffer)
	if err != nil {
		return fmt.Errorf("failed to read request")
	}

	request := strings.TrimSpace(string(buffer[:n]))
	command, input, err := parseCredstoreRequest(request)
	if err != nil {
		return err
	}

	response, err := executeCredentialHelper(command, input)
	if err != nil {
		return err
	}

	_, err = conn.Write([]byte(response))
	return err
}
