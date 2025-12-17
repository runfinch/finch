//go:build darwin

package main

import (
	"fmt"
	"net"
	"os"
)

// handleCredstoreRequest processes credential requests via socket activation
func handleCredstoreRequest() error {
	conn, err := net.FileConn(os.Stdin)
	if err != nil {
		return fmt.Errorf("failed to create connection from stdin: %w", err)
	}
	defer conn.Close()

	return processCredentialRequest(conn)
}

func main() {
	// macOS credential helper using socket activation via launchd
	// launchd passes the socket connection through stdin
	if err := handleCredstoreRequest(); err != nil {
		fmt.Fprintf(os.Stderr, "credential helper failed\n")
		os.Exit(1)
	}
}
