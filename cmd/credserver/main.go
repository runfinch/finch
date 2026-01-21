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
	"io"
	"log"
	"log/slog"
	"net"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/docker/docker-credential-helpers/credentials"

	"github.com/runfinch/finch/pkg/credserver"
)

// Logic for process that handles requests on the credential socket.
func main() {
	if len(os.Args) < 3 {
		log.Fatal("Usage: credserver <socket-path> <pid-file> [log-file]")
	}
	socketPath := os.Args[1]
	pidFile := os.Args[2]

	// Setup file logging if log file path provided
	if len(os.Args) >= 4 {
		// #nosec G302 -- Log file needs to be readable for debugging
		logFile, err := os.OpenFile(os.Args[3], os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0o644)
		if err != nil {
			log.Fatalf("Failed to open log file: %v", err)
		}
		defer func() { _ = logFile.Close() }()
		log.SetOutput(logFile)
		slog.SetDefault(slog.New(slog.NewTextHandler(logFile, nil)))
	} else {
		// Disable non-fatal logging when no log file provided (fatal errors still go to stderr)
		slog.SetDefault(slog.New(slog.NewTextHandler(io.Discard, nil)))
	}

	slog.Info("Starting credential server", "socket", socketPath)

	// Remove stale socket if it exists
	_ = os.Remove(socketPath)

	// Create listener and socket
	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		//nolint:gocritic // exitAfterDefer: Fatal startup error, OS will handle cleanup
		log.Fatalf("Failed to create socket: %v", err)
	}

	// Set owning user read/write permissions on socket
	if err := os.Chmod(socketPath, 0o600); err != nil {
		_ = listener.Close()
		_ = os.Remove(socketPath)
		log.Fatalf("Failed to set socket permissions: %v", err)
	}

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
		slog.Info("Shutting down credential daemon")
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
	slog.Info("Credential server ready")
	if err := server.Serve(listener); err != nil && err != http.ErrServerClosed {
		slog.Warn("Server error", "error", err)
	}
}

func handleCredentials(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		slog.Warn("Invalid request method", "method", r.Method)
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Extract serverURL from query parameter.
	serverURL := r.URL.Query().Get("server")
	if serverURL == "" {
		slog.Warn("Missing server parameter")
		http.Error(w, "server query parameter is required", http.StatusBadRequest)
		return
	}

	slog.Debug("Handling credential request", "server", serverURL)

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

	// Retrieve credentials, returning minimal credential object on error
	creds, err := credserver.GetCredentials(serverURL, envMap)
	if err != nil {
		slog.Warn("Failed to retrieve credentials", "server", serverURL, "error", err)
		creds = &credentials.Credentials{ServerURL: serverURL}
	} else {
		slog.Debug("Successfully retrieved credentials", "server", serverURL)
	}

	// Encode credentials to JSON
	var buf bytes.Buffer
	if err := json.NewEncoder(&buf).Encode(creds); err != nil {
		http.Error(w, "Failed to encode credentials", http.StatusInternalServerError)
		return
	}

	// Send successful response
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write(buf.Bytes())
}
