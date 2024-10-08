// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main denotes the entry point of finch CLI.
// TODO: Remove all instances of these calls once supported upstream
package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"strings"

	"github.com/containerd/nerdctl/v2/pkg/inspecttypes/dockercompat"
	"github.com/docker/go-connections/nat"
	"github.com/sirupsen/logrus"
	"golang.org/x/exp/slices"

	"github.com/runfinch/finch/pkg/command"
)

// Config is from https://github.com/moby/moby/blob/8dbd90ec00daa26dc45d7da2431c965dec99e8b4/api/types/container/config.go#L37-L69
type Config struct {
	Hostname     string              `json:",omitempty"` // Hostname
	User         string              `json:",omitempty"` // User that will run the command(s) inside the container, also support user:group
	AttachStdin  bool                // Attach the standard input, makes possible user interaction
	ExposedPorts nat.PortSet         `json:",omitempty"` // List of exposed ports
	Env          []string            `json:",omitempty"` // List of environment variable to set in the container
	Cmd          []string            `json:",omitempty"` // Command to run when starting the container
	Volumes      map[string]struct{} `json:",omitempty"` // List of volumes (mounts) used for the container
	WorkingDir   string              `json:",omitempty"` // Current directory (PWD) in the command will be launched
	Entrypoint   []string            `json:",omitempty"` // Entrypoint to run when starting the container
	Labels       map[string]string   `json:",omitempty"` // List of labels set to this containerT
	Image        string              `json:",omitempty"`
}

// Container mimics a `docker container inspect` object.
// From https://github.com/moby/moby/blob/v20.10.1/api/types/types.go#L340-L374
type Container struct {
	ID              string `json:"Id"`
	Created         string
	Path            string
	Args            []string
	State           *dockercompat.ContainerState
	Image           string
	ResolvConfPath  string
	HostnamePath    string
	LogPath         string
	Name            string
	RestartCount    int
	Driver          string
	Platform        string
	AppArmorProfile string
	SizeRw          *int64 `json:",omitempty"`
	SizeRootFs      *int64 `json:",omitempty"`
	Mounts          []dockercompat.MountPoint
	Config          *Config
	NetworkSettings *dockercompat.NetworkSettings
}

func prettyPrintJSON(input string) {
	var mergedData []Container
	jsonObjects := strings.Split(input, "\n")

	for i, jsonStr := range jsonObjects {
		if len(jsonStr) == 0 {
			continue
		}
		var container Container
		err := json.Unmarshal([]byte(jsonStr), &container)
		if err != nil {
			logrus.Error("Error parsing JSON at index: ", i, err)
			continue
		}

		if container.Config != nil {
			container.Config.Image = container.Image
		}

		if container.State != nil {
			container.State.StartedAt = "0001-01-01T00:00:00Z"
		}

		if container.NetworkSettings == nil {
			container.NetworkSettings = &dockercompat.NetworkSettings{
				Ports: &nat.PortMap{},
			}
		}

		mergedData = append(mergedData, container)
	}

	finalJSON, err := json.MarshalIndent(mergedData, "", "  ")
	if err != nil {
		logrus.Error("Error marshaling final JSON: ", err)
		return
	}

	fmt.Println(string(finalJSON))
}

func inspectContainerOutputHandler(cmd command.Command) error {
	var stdoutBuf bytes.Buffer
	cmd.SetStdout(&stdoutBuf)
	err := cmd.Run()
	if err != nil {
		return err
	}
	prettyPrintJSON(stdoutBuf.String())
	return err
}

func handleDockerCompatComposeVersion(cmdName string, nc nerdctlCommand, runArgs []string) error {
	if cmdName == "compose" && nc.fc.DockerCompat && slices.Contains(runArgs, "version") {
		ver := nc.systemDeps.Env("DOCKER_COMPOSE_VERSION")
		if ver != "" {
			logrus.Warn("Displaying docker compose version set as environment variable DOCKER_COMPOSE_VERSION...")
			fmt.Println(ver)
			return nil
		}
		return errors.New("DOCKER_COMPOSE_VERSION environment variable is not set")
	}
	return errors.New("")
}
