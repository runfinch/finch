//go:build darwin

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main implements the Finch credential daemon that serves credential requests over Unix socket.
// TODO: credserver is currently macOS-only. Windows uses credential helper binaries directly in WSL2.
// Consider implementing a Windows version using named pipes to enable Windows Credential Manager integration.
package main

import (
	"bytes"
	"encoding/json"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/docker/docker-credential-helpers/credentials"
	"github.com/sirupsen/logrus"
	"gopkg.in/natefinch/lumberjack.v2"

	"github.com/runfinch/finch/pkg/credserver"
)

// Logic for process that handles requests on the credential socket.
func main() {
	if len(os.Args) < 4 {
		logrus.Fatal("Usage: credserver <socket-path> <pid-file> <log-file>")
	}
	socketPath := os.Args[1]
	pidFile := os.Args[2]
	logPath := os.Args[3]

	// Setup file logging with rotation
	// #nosec G302 -- Log file needs to be readable for debugging
	logger := &lumberjack.Logger{
		Filename:   logPath,
		MaxSize:    1, // 1 MB (we want 100KB but lumberjack only supports MB, so 1MB is closest)
		MaxBackups: 1, // Keep 1 backup file
		MaxAge:     0, // Don't delete based on age
		Compress:   false,
	}
	defer func() { _ = logger.Close() }()
	logrus.SetOutput(logger)
	logrus.SetFormatter(&logrus.TextFormatter{
		FullTimestamp: true,
	})

	logrus.WithField("socket", socketPath).Info("Starting credential server")

	// Remove stale socket if it exists (ignore error if socket doesn't exist)
	if err := os.Remove(socketPath); err != nil && !os.IsNotExist(err) {
		logrus.Fatalf("Failed to remove stale socket: %v", err)
	}

	// Create listener and socket
	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		logrus.Fatalf("Failed to create socket: %v", err)
	}
	logrus.WithField("socket", socketPath).Info("Socket created")

	// Set owning user read/write permissions on socket
	if err := os.Chmod(socketPath, 0o600); err != nil {
		_ = listener.Close()
		_ = os.Remove(socketPath)
		logrus.Fatalf("Failed to set socket permissions: %v", err)
	}
	logrus.Info("Socket permissions set to 0600")

	// Handle cleanup on shutdown
	defer func() {
		_ = listener.Close()
		_ = os.Remove(socketPath)
		_ = os.Remove(pidFile)
	}()

	// Handle shutdown signals
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-sigChan
		logrus.Info("Shutting down credential daemon")
		_ = listener.Close()
		_ = os.Remove(socketPath)
		_ = os.Remove(pidFile)
		os.Exit(0)
	}()

	// Create HTTP server to handle credential requests
	mux := http.NewServeMux()
	mux.HandleFunc("/credentials", handleCredentials)
	server := &http.Server{
		Handler:           mux,
		ReadHeaderTimeout: 10 * time.Second,
	}

	// Serve HTTP over Unix socket
	logrus.Info("Credential server ready")
	if err := server.Serve(listener); err != nil && err != http.ErrServerClosed {
		logrus.Errorf("Server error: %v", err)
	}
}

func handleCredentials(w http.ResponseWriter, r *http.Request) {
	logrus.Info("========================================")

	if r.Method != http.MethodGet {
		logrus.WithField("method", r.Method).Warn("Invalid request method")
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Extract serverURL from query parameter.
	serverURL := r.URL.Query().Get("server")
	if serverURL == "" {
		logrus.Warn("Missing server parameter")
		http.Error(w, "server query parameter is required", http.StatusBadRequest)
		return
	}

	logrus.WithField("server", serverURL).Info("Credential request")

	// Extract environment variables from headers.
	// HTTP headers are canonicalized, so X-Finch-Env-AWS_PROFILE becomes X-Finch-Env-Aws_profile
	// We need to uppercase the extracted env var name to restore the correct case
	envMap := make(map[string]string)
	for key, values := range r.Header {
		if strings.HasPrefix(key, "X-Finch-Env-") {
			envKey := strings.ToUpper(strings.TrimPrefix(key, "X-Finch-Env-"))
			envKey = strings.ReplaceAll(envKey, "-", "_")
			if len(values) > 0 {
				envMap[envKey] = values[0]
			}
		}
	}

	if len(envMap) > 0 {
		// Log env var keys only (not values, which could be sensitive)
		envKeys := make([]string, 0, len(envMap))
		for key := range envMap {
			envKeys = append(envKeys, key)
		}
		logrus.WithField("env_vars", envKeys).Info("Environment variables provided")
	}

	// Retrieve credentials, returning minimal credential object on error
	creds, err := credserver.GetCredentials(serverURL, envMap)
	if err != nil {
		logrus.WithField("server", serverURL).Info("Credentials not found")
		creds = &credentials.Credentials{ServerURL: serverURL}
	} else {
		logrus.WithFields(logrus.Fields{
			"server":      serverURL,
			"hasUsername": creds.Username != "",
		}).Info("Credentials found")
	}

	// Encode credentials to JSON
	var buf bytes.Buffer
	if err := json.NewEncoder(&buf).Encode(creds); err != nil {
		logrus.Errorf("Failed to encode credentials to JSON: %v", err)
		http.Error(w, "Failed to encode credentials", http.StatusInternalServerError)
		return
	}

	// Send successful response
	w.Header().Set("Content-Type", "application/json")
	if _, err := w.Write(buf.Bytes()); err != nil {
		logrus.Errorf("Failed to write response: %v", err)
	}
}
