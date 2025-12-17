//go:build windows

package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"path/filepath"
)

// Windows socket server (for WSL2 socket forwarding)
func startWindowsCredentialServer() error {
	userProfile := os.Getenv("USERPROFILE")
	if userProfile == "" {
		return fmt.Errorf("USERPROFILE not set")
	}
	socketPath := filepath.Join(userProfile, ".finch", "native-creds.sock")
	_ = os.Remove(socketPath) // Ignore error if file doesn't exist

	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		return fmt.Errorf("failed to create socket: %w", err)
	}

	// set socket file permissions to owner only
	if err := os.Chmod(socketPath, 0600); err != nil {
		return fmt.Errorf("failed to set socket permissions: %w", err)
	}

	defer func() { _ = listener.Close() }()

	// Accept connections
	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Printf("Failed to accept connection")
			continue
		}

		// Handle each connection
		go func(c net.Conn) {
			defer func() { _ = c.Close() }()
			if err := processCredentialRequest(c); err != nil {
				log.Printf("Error processing credential request")
			}
		}(conn)
	}
}

func main() {
	if err := startWindowsCredentialServer(); err != nil {
		log.Printf("Windows credential server failed")
		os.Exit(1)
	}
}
