// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

// Package credserver provides credential server operations for macOS.
package credserver

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"syscall"
)

// StartCredentialServer starts the credential daemon process that handles requests from Lima VM via mounted socket.
// Called during finch vm init or start.
func StartCredentialServer(finchRootPath string) error {
	socketPath := filepath.Join(finchRootPath, "lima", "data", "finch", "sock", "creds.sock")
	daemonPath := filepath.Join(finchRootPath, "finch-cred", "finch-cred-daemon")
	pidFile := filepath.Join(finchRootPath, "lima", "data", "finch", "cred-daemon.pid")

	if isDaemonRunning(pidFile) {
		return nil
	}

	// #nosec G204 -- daemonPath is constructed from finchRootPath, not user input
	cmd := exec.Command(daemonPath, socketPath)
	cmd.Stderr = nil
	cmd.Stdout = nil
	cmd.SysProcAttr = &syscall.SysProcAttr{
		Setpgid: true,
	}

	if err := cmd.Start(); err != nil {
		return fmt.Errorf("failed to start credential daemon: %w", err)
	}

	if err := os.WriteFile(pidFile, []byte(strconv.Itoa(cmd.Process.Pid)), 0o644); err != nil {
		return fmt.Errorf("failed to write PID file: %w", err)
	}

	return nil
}

// StopCredentialServer stops the credential daemon process.
// Called during finch vm stop or remove.
func StopCredentialServer(finchRootPath string) error {
	pidFile := filepath.Join(finchRootPath, "lima", "data", "finch", "cred-daemon.pid")
	return stopDaemon(pidFile)
}

func isDaemonRunning(pidFile string) bool {
	// #nosec G304 -- pidFile path is constructed from finchRootPath, not user input
	data, err := os.ReadFile(pidFile)
	if err != nil {
		return false
	}

	pid, err := strconv.Atoi(string(data))
	if err != nil {
		return false
	}

	process, err := os.FindProcess(pid)
	if err != nil {
		return false
	}

	err = process.Signal(syscall.Signal(0))
	return err == nil
}

func stopDaemon(pidFile string) error {
	// #nosec G304 -- pidFile path is constructed from finchRootPath, not user input
	data, err := os.ReadFile(pidFile)
	if err != nil {
		return fmt.Errorf("failed to read PID file: %w", err)
	}

	pid, err := strconv.Atoi(string(data))
	if err != nil {
		return fmt.Errorf("invalid PID in file: %w", err)
	}

	process, err := os.FindProcess(pid)
	if err != nil {
		return fmt.Errorf("failed to find process: %w", err)
	}

	if err := process.Signal(syscall.SIGTERM); err != nil {
		return fmt.Errorf("failed to terminate process: %w", err)
	}

	_ = os.Remove(pidFile)
	return nil
}
