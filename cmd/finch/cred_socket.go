//go:build darwin || windows

package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"net"
	"os"
	"path/filepath"
	"strings"
	"sync"
)

type credentialSocket struct {
	mu       sync.Mutex
	listener net.Listener
}

var globalCredSocket = &credentialSocket{}

func (cs *credentialSocket) start(finchRootPath string) error {
	cs.mu.Lock()
	defer cs.mu.Unlock()

	// Break if already running
	if cs.listener != nil {
		return nil
	}

	socketPath := filepath.Join(finchRootPath, "lima", "data", "finch", "sock", "creds.sock")
	if err := os.MkdirAll(filepath.Dir(socketPath), 0750); err != nil {
		return fmt.Errorf("failed to create socket directory: %w", err)
	}
	_ = os.Remove(socketPath) // Remove stale socket

	listener, err := net.Listen("unix", socketPath)
	if err != nil {
		return fmt.Errorf("failed to create credential socket: %w", err)
	}
	
	// Set secure permissions on socket (owner-only access)
	if err := os.Chmod(socketPath, 0600); err != nil {
		return fmt.Errorf("failed to set socket permissions: %w", err)
	}
	
	cs.listener = listener

	go cs.handleConnections() // Accept connections in background
	return nil
}

func (cs *credentialSocket) stop() {
	cs.mu.Lock()
	defer cs.mu.Unlock()

	if cs.listener != nil {
		_ = cs.listener.Close()
		cs.listener = nil
	}
}

func (cs *credentialSocket) handleConnections() {
	for {
		conn, err := cs.listener.Accept()
		if err != nil {
			return // Socket closed
		}
		go func(c net.Conn) {
			defer func() { _ = c.Close() }()
			cs.handleRequest(c)
		}(conn)
	}
}

func (cs *credentialSocket) handleRequest(conn net.Conn) {
	scanner := bufio.NewScanner(conn)
	
	// Read command (get/store/erase)
	if !scanner.Scan() {
		return
	}
	command := strings.TrimSpace(scanner.Text())
	
	// Read server URL
	if !scanner.Scan() {
		return
	}
	serverURL := strings.TrimSpace(scanner.Text())
	
	// Get credentials from native helper
	creds, err := callCredentialHelper(command, serverURL, "", "")
	if err != nil {
		creds = &dockerCredential{ServerURL: serverURL} // Return empty creds
	}
	
	credJSON, err := json.Marshal(creds)
	if err != nil {
		return
	}
	
	_, _ = conn.Write(credJSON)
}

// withCredSocket wraps command execution with credential socket lifecycle.
func withCredSocket(finchRootPath string, fn func() error) error {
	if err := globalCredSocket.start(finchRootPath); err != nil {
		return err
	}
	defer globalCredSocket.stop()
	return fn()
}