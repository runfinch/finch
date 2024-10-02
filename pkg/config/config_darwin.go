// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/spf13/afero"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
	"github.com/runfinch/finch/pkg/system"
)

// SystemSettings represents the system configuration specifc to macOS.
type SystemSettings struct {
	CPUs                  *int                  `yaml:"cpus,omitempty"`
	Memory                *string               `yaml:"memory,omitempty"`
	AdditionalDirectories []AdditionalDirectory `yaml:"additional_directories,omitempty"`
	Rosetta               *bool                 `yaml:"rosetta,omitempty"`
	SharedSystemSettings  `yaml:",inline"`
}

// Finch represents the configuration file for Finch CLI.
type Finch struct {
	SystemSettings `yaml:",inline"`
	SharedSettings `yaml:",inline"`
}

// SupportsVirtualizationFramework checks if the user's system supports Virtualization.framework.
func SupportsVirtualizationFramework(cmdCreator command.Creator) (bool, error) {
	cmd := cmdCreator.Create("sw_vers", "-productVersion")
	out, err := cmd.Output()
	if err != nil {
		return false, fmt.Errorf("failed to run sw_vers command: %w", err)
	}

	splitVer := strings.Split(string(out), ".")
	if len(splitVer) == 0 {
		return false, fmt.Errorf("unexpected result from string split: %v", splitVer)
	}

	majorVersionInt, err := strconv.ParseInt(splitVer[0], 10, 64)
	if err != nil {
		return false, fmt.Errorf("failed to parse split sw_vers output (%s) into int: %w", splitVer[0], err)
	}

	if majorVersionInt >= 13 {
		return true, nil
	}

	return false, nil
}

// ModifyFinchConfig Modify Finch's configuration from user inputs.
func ModifyFinchConfig(fs afero.Fs, logger flog.Logger, finchConfigPath string, opts VMConfigOpts) (bool, error) {
	var isConfigUpdated bool

	systemDeps := system.NewStdLib()
	mem := fmemory.NewMemory()

	finchCfg, err := loadFinchConfig(fs, finchConfigPath, logger, systemDeps, mem)
	if err != nil {
		return isConfigUpdated, err
	}

	cpus, memory := opts.CPUs, opts.Memory
	if cpus != DefaultCPUs && cpus != *finchCfg.CPUs {
		*finchCfg.CPUs = cpus
		isConfigUpdated = true
	}
	if memory != DefaultMemory && memory != *finchCfg.Memory {
		*finchCfg.Memory = memory
		isConfigUpdated = true
	}

	if !isConfigUpdated {
		return isConfigUpdated, fmt.Errorf("the number of CPUs or the amount of memory should be at least one valid value")
	}

	if err := validate(finchCfg, logger, systemDeps, mem); err != nil {
		return false, fmt.Errorf("failed to validate config file: %w", err)
	}
	if err := writeConfig(finchCfg, fs, finchConfigPath); err != nil {
		return false, err
	}

	return isConfigUpdated, nil
}

// loadFinchConfig Load Finch's configuration from a YAML file.
func loadFinchConfig(fs afero.Fs, finchConfigPath string, logger flog.Logger, systemDeps LoadSystemDeps, mem fmemory.Memory) (*Finch, error) {
	b, err := afero.ReadFile(fs, finchConfigPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read config file: %w", err)
	}

	var cfg Finch
	if err := yaml.Unmarshal(b, &cfg); err != nil {
		return nil, fmt.Errorf("failed to unmarshal config file: %w", err)
	}
	if err := validate(&cfg, logger, systemDeps, mem); err != nil {
		return nil, fmt.Errorf("failed to validate config file: %w", err)
	}

	return &cfg, nil
}
