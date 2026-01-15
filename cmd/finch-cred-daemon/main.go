// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main implements the Finch credential daemon that serves credential requests over Unix socket.
package main

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/docker/docker-credential-helpers/credentials"

	"github.com/runfinch/finch/pkg/credserver"
)

// CredentialRequest represents the JSON payload for credential requests.
type CredentialRequest struct {
	ServerURL string            `json:"serverURL"`
	Env       map[string]string `json:"env"`
}

// Logic for process that handles requests on the credential socket.
func main() {
	if len(os.Args) < 2 {
		log.Fatal("Usage: finch-cred-daemon <socket-path>")
	}
	socketPath := os.Args[1]

	// Pre-emptive socket removal as safe measure
	_ = os.Remove(socketPath)

	// Create listener and socket
	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		log.Fatalf("Failed to create socket: %v", err)
	}

	// Set permissions immediately
	if err := os.Chmod(socketPath, 0o600); err != nil {
		_ = listener.Close()
		_ = os.Remove(socketPath)
		log.Fatalf("Failed to set socket permissions: %v", err)
	}

	defer func() {
		_ = listener.Close()
		_ = os.Remove(socketPath)
	}()

	// Handle shutdown signals
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	go func() {
		<-sigChan
		log.Println("Shutting down credential daemon.")
		_ = listener.Close()
		_ = os.Remove(socketPath)
		os.Exit(0)
	}()

	// Create HTTP server
	mux := http.NewServeMux()
	mux.HandleFunc("/credentials", handleCredentials)
	server := &http.Server{
		Handler:           mux,
		ReadHeaderTimeout: 10 * time.Second,
	}

	// Serve HTTP over Unix socket
	if err := server.Serve(listener); err != nil {
		log.Printf("Server stopped: %v", err)
	}
}

func handleCredentials(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req CredentialRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	if req.ServerURL == "" {
		http.Error(w, "ServerURL is required", http.StatusBadRequest)
		return
	}

	creds, err := credserver.GetCredentials(req.ServerURL, req.Env)
	if err != nil {
		creds = &credentials.Credentials{ServerURL: req.ServerURL}
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(creds); err != nil {
		log.Printf("Failed to encode credentials response: %v", err)
	}
}
