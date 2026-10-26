// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

// Package container runs tests related to container development.
package container

import (
	"errors"
	"fmt"
	"net"
	"os"
	"os/exec"
	"strings"
	"time"
)

const (
	// allowWSLHostTrafficEnv opts in to managing the Windows Firewall rule below. It changes host
	// firewall state and requires Administrator, so it is only set by CI.
	allowWSLHostTrafficEnv = "FINCH_E2E_ALLOW_WSL_HOST_TRAFFIC"
	// wslHostRuleGroup is used as both the display name and group of the rule so it can be replaced idempotently.
	// The Windows runners' user data creates a rule with the same group at boot, which this replaces.
	wslHostRuleGroup = "Finch WSL to host"
	// wslAdapterPrefix matches both "vEthernet (WSL)" and "vEthernet (WSL (Hyper-V firewall))".
	wslAdapterPrefix = "vEthernet (WSL"

	// The PowerShell scripts are constants; the addresses are passed through these environment variables
	// so that nothing is interpolated into the command line.
	wslHostAddressEnv = "FINCH_E2E_WSL_HOST_ADDRESS"
	wslSubnetEnv      = "FINCH_E2E_WSL_SUBNET"

	removeWSLHostRuleScript = "Remove-NetFirewallRule -Group '" + wslHostRuleGroup + "' -ErrorAction SilentlyContinue"
	allowWSLHostRuleScript  = "$ErrorActionPreference = 'Stop'\n" +
		removeWSLHostRuleScript + "\n" +
		"New-NetFirewallRule -DisplayName '" + wslHostRuleGroup + "' -Group '" + wslHostRuleGroup + "' " +
		"-Direction Inbound -Action Allow -Protocol TCP " +
		"-LocalAddress $env:" + wslHostAddressEnv + " -RemoteAddress $env:" + wslSubnetEnv + " | Out-Null"
)

// allowWSLToHostTraffic creates an inbound Windows Firewall rule that lets the WSL VM reach TCP listeners
// on the host's WSL-facing address, which the "--add-host ... host-gateway" test needs.
//
// WSL recreates its NAT adapter, with a new subnet, whenever the WSL service restarts, so a rule created once
// (e.g. at instance launch) stops matching. The rule is rebuilt from the adapter's current addresses after the
// VM starts, and is scoped to traffic from the WSL subnet to the host's address on that subnet.
func allowWSLToHostTraffic() error {
	if os.Getenv(allowWSLHostTrafficEnv) != "true" {
		return nil
	}
	hostAddr, err := waitForWSLAdapterAddr(30 * time.Second)
	if err != nil {
		return err
	}
	subnet := &net.IPNet{IP: hostAddr.IP.Mask(hostAddr.Mask), Mask: hostAddr.Mask}
	cmd := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", allowWSLHostRuleScript)
	cmd.Env = append(os.Environ(), wslHostAddressEnv+"="+hostAddr.IP.String(), wslSubnetEnv+"="+subnet.String())
	if out, err := cmd.CombinedOutput(); err != nil {
		return fmt.Errorf("failed to allow WSL to host traffic from %s: %w: %s", subnet, err, out)
	}
	fmt.Printf("allowed inbound TCP from WSL subnet %s to host address %s\n", subnet, hostAddr.IP)
	return nil
}

// removeWSLToHostTraffic removes the rule created by allowWSLToHostTraffic.
func removeWSLToHostTraffic() error {
	if os.Getenv(allowWSLHostTrafficEnv) != "true" {
		return nil
	}
	if out, err := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", removeWSLHostRuleScript).
		CombinedOutput(); err != nil {
		return fmt.Errorf("%w: %s", err, out)
	}
	return nil
}

// waitForWSLAdapterAddr returns the host's IPv4 address on the WSL NAT adapter, waiting for the adapter to come up.
func waitForWSLAdapterAddr(timeout time.Duration) (*net.IPNet, error) {
	deadline := time.Now().Add(timeout)
	for {
		addr, err := wslAdapterAddr()
		if err == nil || time.Now().After(deadline) {
			return addr, err
		}
		time.Sleep(time.Second)
	}
}

func wslAdapterAddr() (*net.IPNet, error) {
	ifaces, err := net.Interfaces()
	if err != nil {
		return nil, fmt.Errorf("failed to list network interfaces: %w", err)
	}
	for _, iface := range ifaces {
		if !strings.HasPrefix(iface.Name, wslAdapterPrefix) {
			continue
		}
		addrs, err := iface.Addrs()
		if err != nil {
			return nil, fmt.Errorf("failed to read addresses of %q: %w", iface.Name, err)
		}
		for _, addr := range addrs {
			if ipNet, ok := addr.(*net.IPNet); ok && ipNet.IP.To4() != nil {
				return &net.IPNet{IP: ipNet.IP.To4(), Mask: ipNet.Mask}, nil
			}
		}
	}
	return nil, errors.New("no IPv4 address found on a WSL network adapter")
}
