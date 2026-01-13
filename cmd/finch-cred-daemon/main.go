package main

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/docker/docker-credential-helpers/credentials"
	"github.com/runfinch/finch/pkg/credserver"
)

type CredentialRequest struct {
	Action    string            `json:"action"`
	ServerURL string            `json:"serverURL"`
	Env       map[string]string `json:"env"`
}

func main() {
	if len(os.Args) < 2 {
		log.Fatal("Usage: finch-cred-daemon <socket-path>")
	}

	socketPath := os.Args[1]

	// Clean up old socket
	os.Remove(socketPath)

	// Create listener
	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		log.Fatalf("Failed to create socket: %v", err)
	}
	defer listener.Close()
	defer os.Remove(socketPath)

	// Set permissions
	os.Chmod(socketPath, 0600)

	log.Printf("Credential daemon listening on %s", socketPath)

	// Handle shutdown signals
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-sigChan
		log.Println("Shutting down...")
		listener.Close()
		os.Exit(0)
	}()

	// Create HTTP server
	mux := http.NewServeMux()
	mux.HandleFunc("/credentials", handleCredentials)
	server := &http.Server{Handler: mux}

	// Serve HTTP over Unix socket
	server.Serve(listener)
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

	// Call credential helper with environment variables
	creds, err := credserver.GetCredentials(req.ServerURL, req.Env)
	if err != nil {
		// Return empty credentials on error
		creds = &credentials.Credentials{ServerURL: req.ServerURL}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(creds)
}
