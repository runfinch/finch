//go:build darwin

package credserver

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strconv"
	"syscall"
)

func StartCredentialServer(finchRootPath string) error {

	socketPath := filepath.Join(finchRootPath, "lima", "data", "finch", "sock", "creds.sock")
	daemonPath := filepath.Join(finchRootPath, "bin", "finch-cred-daemon")
	pidFile := filepath.Join(finchRootPath, "lima", "data", "finch", "cred-daemon.pid")

	// Check if daemon is already running
	if isRunning(pidFile) {
		return nil
	}

	// Launch daemon process
	cmd := exec.Command(daemonPath, socketPath)
	cmd.Stderr = nil // Don't inherit stderr
	cmd.Stdout = nil // Don't inherit stdout
	cmd.SysProcAttr = &syscall.SysProcAttr{
		Setpgid: true, // Create new process group
	}

	err := cmd.Start()
	if err != nil {
		return fmt.Errorf("failed to start credential daemon: %w", err)
	}

	// Save PID to file
	pid := cmd.Process.Pid
	err = os.WriteFile(pidFile, []byte(strconv.Itoa(pid)), 0644)
	if err != nil {
	}

	return nil
}

func StopCredentialServer() {

	// Find PID file in common locations
	pidFiles := []string{
		"/Users/" + os.Getenv("USER") + "/Documents/finch-creds/finch/_output/lima/data/finch/cred-daemon.pid",
		"./lima/data/finch/cred-daemon.pid",
		"../_output/lima/data/finch/cred-daemon.pid",
	}

	for _, pidFile := range pidFiles {
		if killDaemon(pidFile) {
			return
		}
	}

}

func isRunning(pidFile string) bool {
	data, err := os.ReadFile(pidFile)
	if err != nil {
		return false
	}

	pid, err := strconv.Atoi(string(data))
	if err != nil {
		return false
	}

	// Check if process exists
	process, err := os.FindProcess(pid)
	if err != nil {
		return false
	}

	// Send signal 0 to check if process is alive
	err = process.Signal(syscall.Signal(0))
	return err == nil
}

func killDaemon(pidFile string) bool {
	data, err := os.ReadFile(pidFile)
	if err != nil {
		return false
	}

	pid, err := strconv.Atoi(string(data))
	if err != nil {
		return false
	}

	// Kill the process
	process, err := os.FindProcess(pid)
	if err != nil {
		return false
	}

	err = process.Signal(syscall.SIGTERM)
	if err != nil {
		return false
	}

	// Remove PID file
	os.Remove(pidFile)
	return true
}
