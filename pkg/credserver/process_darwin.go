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
	"strings"
	"syscall"
	"time"

	"github.com/sirupsen/logrus"
)

const (
	credSocketRelPath  = "lima/data/finch/sock/creds.sock" //nolint:gosec // G101: File path, not credentials
	credDaemonRelPath  = "finch-cred/credserver"           //nolint:gosec // G101: File path, not credentials
	credPIDFileRelPath = "lima/data/finch/cred-daemon.pid" //nolint:gosec // G101: File path, not credentials
	credLogRelPath     = "logs/credserver.log"             //nolint:gosec // G101: File path, not credentials
)

// IsDaemonRunning checks if the credential daemon is already running.
func IsDaemonRunning(finchRootPath string) bool {
	pidFile := filepath.Join(finchRootPath, credPIDFileRelPath)
	return isDaemonRunning(pidFile)
}

// StartCredentialServer starts the credential daemon process that handles requests from Lima VM via mounted socket.
// Called during finch vm init or start.
func StartCredentialServer(finchRootPath string) error {
	socketPath := filepath.Join(finchRootPath, credSocketRelPath)
	daemonPath := filepath.Join(finchRootPath, credDaemonRelPath)
	pidFile := filepath.Join(finchRootPath, credPIDFileRelPath)

	// Use user home directory for logs (consistent with other user data like config and Lima data)
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return fmt.Errorf("failed to get user home directory: %w", err)
	}
	logPath := filepath.Join(homeDir, ".finch", credLogRelPath)

	// Clean up stale PID file if daemon is not running
	// #nosec G304 -- pidFile path is constructed from finchRootPath, not user input
	if data, err := os.ReadFile(pidFile); err == nil {
		pid := strings.TrimSpace(string(data))
		if !isDaemonRunning(pidFile) {
			logrus.Warnf("Stale PID file found (PID: %s), cleaning up", pid)
			if err := os.Remove(pidFile); err != nil {
				logrus.Warnf("Failed to remove stale PID file: %v", err)
			}
		}
	}

	// Create log directory
	// #nosec G301 -- Log directory needs standard permissions
	if err := os.MkdirAll(filepath.Dir(logPath), 0o755); err != nil {
		return fmt.Errorf("failed to create log directory: %w", err)
	}

	// Construct command to start daemon as detached background process.
	// #nosec G204 -- daemonPath is constructed from finchRootPath, not user input
	cmd := exec.Command(daemonPath, socketPath, pidFile, logPath)
	cmd.Stderr = nil
	cmd.Stdout = nil
	cmd.SysProcAttr = &syscall.SysProcAttr{
		Setpgid: true,
	}

	// Attempt to start the daemon.
	if err := cmd.Start(); err != nil {
		return fmt.Errorf("failed to start credential daemon: %w", err)
	}

	pid := cmd.Process.Pid
	logrus.WithField("pid", pid).Info("Credential daemon started")

	// Write the PID file with permissions to track the detached process.
	if err := os.WriteFile(pidFile, []byte(strconv.Itoa(pid)), 0o644); err != nil {
		return fmt.Errorf("failed to write PID file: %w", err)
	}
	return nil
}

// StopCredentialServer stops the credential daemon process.
// Called during finch vm stop or remove.
func StopCredentialServer(finchRootPath string) error {
	pidFile := filepath.Join(finchRootPath, credPIDFileRelPath)

	// Read PID for logging
	// #nosec G304 -- pidFile path is constructed from finchRootPath, not user input
	if data, err := os.ReadFile(pidFile); err == nil {
		pid := strings.TrimSpace(string(data))
		logrus.WithField("pid", pid).Info("Stopping credential daemon")
	}

	return stopDaemon(pidFile)
}

// isDaemonRunning checks if the daemon process is alive by sending signal 0.
func isDaemonRunning(pidFile string) bool {
	process, err := getProcessFromPIDFile(pidFile)
	if err != nil {
		return false
	}
	return process.Signal(syscall.Signal(0)) == nil
}

// stopDaemon attempts to gracefully stop the daemon with SIGTERM, waiting up to 2 seconds before force-killing.
func stopDaemon(pidFile string) error {
	defer func() { _ = os.Remove(pidFile) }()

	process, err := getProcessFromPIDFile(pidFile)
	if err != nil {
		logrus.Info("Credential daemon already stopped")
		return nil
	}

	// Ensure the process is still running.
	if err := process.Signal(syscall.Signal(0)); err != nil {
		logrus.Info("Credential daemon already stopped")
		return nil
	}

	// Prompt the process to terminate.
	if err := process.Signal(syscall.SIGTERM); err != nil {
		return fmt.Errorf("failed to terminate process: %w", err)
	}
	logrus.WithField("pid", process.Pid).Info("Sent SIGTERM to credential daemon")

	// Wait for process to terminate (up to 2 seconds).
	for i := 0; i < 20; i++ {
		if process.Signal(syscall.Signal(0)) != nil {
			return nil
		}
		time.Sleep(100 * time.Millisecond)
	}

	// Force kill if still running.
	logrus.WithField("pid", process.Pid).Warn("Credential daemon did not stop gracefully, sending SIGKILL")
	_ = process.Signal(syscall.SIGKILL)
	return nil
}

// getProcessFromPIDFile reads the PID file and returns a handle to the process.
func getProcessFromPIDFile(pidFile string) (*os.Process, error) {
	// #nosec G304 -- pidFile path is constructed from finchRootPath, not user input
	data, err := os.ReadFile(pidFile)
	if err != nil {
		return nil, err
	}

	pid, err := strconv.Atoi(strings.TrimSpace(string(data)))
	if err != nil {
		return nil, err
	}

	return os.FindProcess(pid)
}
