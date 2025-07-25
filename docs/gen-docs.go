// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// This program generates documentations for the finch commands.
package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

const (
	virtualMachineRootCmd = "vm"
)

// Docs is a struct for creating documentations for the finch commands.
type Docs struct {
	subject string
}

// InitVM initializes the VM.
func (d *Docs) InitVM() error {
	return exec.Command(d.subject, virtualMachineRootCmd, "init").Run() // #nosec G204
}

// StartVM starts the VM.
func (d *Docs) StartVM() error {
	return exec.Command(d.subject, virtualMachineRootCmd, "start", "-f").Run() // #nosec G204
}

// StopVM stops the VM.
func (d *Docs) StopVM() error {
	return exec.Command(d.subject, virtualMachineRootCmd, "stop", "-f").Run() // #nosec G204
}

// RemoveVM removes the VM.
func (d *Docs) RemoveVM() error {
	return exec.Command(d.subject, virtualMachineRootCmd, "remove", "-f").Run() // #nosec G204
}

// CreateDocs create documentations for the finch commands.
func (d *Docs) CreateDocs() error {
	return exec.Command(d.subject, "gen-docs", "generate", "-p", "docs/cmd/").Run() // #nosec G204
}

// GetSubject returns the subjects for the finch command.
func GetSubject() (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("failed to get the current working directory: %w", err)
	}

	subject := filepath.Join(wd, "_output", "bin", "finch")

	return subject, nil
}

// NewDocs creates an object of type Docs.
func NewDocs() (*Docs, error) {
	d := Docs{}

	subject, err := GetSubject()
	if err != nil {
		return &d, err
	}
	d.subject = subject

	return &d, nil
}

func main() {
	d, err := NewDocs()
	if err != nil {
		fmt.Printf("NewDocs Error: %s\n", err.Error())
		return
	}

	err = d.StopVM()
	if err != nil {
		fmt.Printf("Stopping the VM Error: %s\n", err.Error())
	}
	err = d.RemoveVM()
	if err != nil {
		fmt.Printf("Removing the VM Error: %s\n", err.Error())
	}
	err = d.InitVM()
	if err != nil {
		fmt.Printf("Init the VM Error: %s\n", err.Error())
	}
	err = d.CreateDocs()
	if err != nil {
		fmt.Printf("Creating Docs Error: %s\n", err.Error())
	}
}
