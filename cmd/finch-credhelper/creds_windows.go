//go:build windows

package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"path/filepath"

	"github.com/runfinch/finch/pkg/path"
)

// Windows socket server (for WSL2 socket forwarding).
func startWindowsCredentialServer() error {
	// Adding to make path in lima/../sock (consistent with mac)
	finchPath, err := path.FindFinch(path.NewFinchFinderDeps())
	if err != nil {
		return fmt.Errorf("failed to find Finch installation: %w", err)
	}
	sockDir := filepath.Join(finchPath.LimaInstancePath(), "sock")
	if err := os.MkdirAll(sockDir, 0o755); err != nil {
		return fmt.Errorf("failed to create sock directory: %w", err)
	}
	socketPath := filepath.Join(sockDir, "native-creds.sock")
	_ = os.Remove(socketPath) // Ignore error if file doesn't exist

	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		return fmt.Errorf("failed to create socket: %w", err)
	}

	// set socket file permissions to owner only
	if err := os.Chmod(socketPath, 0o600); err != nil {
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
