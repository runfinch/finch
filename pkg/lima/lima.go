// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package lima provides common methods related to Lima.
package lima

import (
	"errors"
	"strings"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

// VMStatus for Lima.
// Relevant status defined in Lima upstream:
// https://github.com/lima-vm/lima/blob/fc783ec455a91d70639f9a1d7f22e9890fe6b1cd/pkg/store/instance.go#L23.
type VMStatus int64

// VMType for Lima.
// Relevant type defined in Lima upstream:
// https://github.com/lima-vm/lima/blob/f0282b2dfc4b6795295fceb2c86acd1312cef436/pkg/limayaml/limayaml.go#L53-L54.
type VMType string

// Finch CLI assumes there are only 4 VM status below. Adding more statuses will need to make changes in the caller side.
const (
	Running VMStatus = iota
	Stopped
	Nonexistent
	Unknown
	QEMU              VMType = "qemu"
	VZ                VMType = "vz"
	WSL               VMType = "wsl2"
	NonexistentVMType VMType = "nonexistent"
	UnknownVMType     VMType = "unknown"
)

// GetVMStatus returns the Lima VM status.
func GetVMStatus(creator command.LimaCmdCreator, logger flog.Logger, instanceName string) (VMStatus, error) {
	args := []string{"ls", "-f", "{{.Status}}", instanceName}
	cmd := creator.CreateWithoutStdio(args...)
	out, err := cmd.Output()
	if err != nil {
		return Unknown, err
	}
	status := strings.TrimSpace(string(out))
	return toVMStatus(status, logger)
}

// GetVMType returns the Lima VMType for a running instance.
func GetVMType(creator command.LimaCmdCreator, logger flog.Logger, instanceName string) (VMType, error) {
	args := []string{"ls", "-f", "{{.VMType}}", instanceName}
	cmd := creator.CreateWithoutStdio(args...)
	out, err := cmd.Output()
	if err != nil {
		return UnknownVMType, err
	}
	status := strings.TrimSpace(string(out))
	return toVMType(status, logger)
}

func toVMStatus(status string, logger flog.Logger) (VMStatus, error) {
	logger.Debugf("Status of virtual machine: %s", status)
	switch status {
	case "":
		return Nonexistent, nil
	case "Running":
		return Running, nil
	case "Stopped":
		return Stopped, nil
	default:
		return Unknown, errors.New("unrecognized system status")
	}
}

func toVMType(vmType string, logger flog.Logger) (VMType, error) {
	logger.Debugf("VMType of virtual machine: %s", vmType)
	switch vmType {
	case "":
		return NonexistentVMType, nil
	case "qemu":
		return QEMU, nil
	case "vz":
		return VZ, nil
	case "wsl2":
		return WSL, nil
	default:
		return UnknownVMType, errors.New("unrecognized VMType")
	}
}
