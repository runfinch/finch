// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"fmt"

	"github.com/docker/go-units"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/fmemory"
)

func validateCPUs(cpus int, log flog.Logger, systemDeps LoadSystemDeps) error {
	if cpus <= 0 {
		return fmt.Errorf(
			"specified number of CPUs (%d) must be greater than 0",
			cpus,
		)
	}

	totalCPUs := systemDeps.NumCPU()
	if cpus > totalCPUs {
		log.Infof(
			"The specified number of CPUs (%d) is greater than CPUs available on this system (%d),\n"+
				"which may lead to severe performance degradation",
			cpus,
			totalCPUs,
		)
	}

	return nil
}

func validateMemory(memory string, log flog.Logger, mem fmemory.Memory) error {
	memInt, err := units.FromHumanSize(memory)
	if err != nil {
		return fmt.Errorf("failed to parse memory to uint: %w", err)
	}

	if memInt <= 0 {
		return fmt.Errorf(
			"specified amount of memory (%s) must be greater than 0GiB",
			memory,
		)
	}

	totalMem := mem.TotalMemory()
	if uint64(memInt) > totalMem {
		log.Infof(
			"The specified amount of memory (%s) is greater than the memory available on this system (%s),\n"+
				"which may lead to severe performance degradation",
			memory,
			units.BytesSize(float64(totalMem)),
		)
	}

	return nil
}

func validate(cfg *Finch, log flog.Logger, systemDeps LoadSystemDeps, mem fmemory.Memory) error {
	cpus := *cfg.CPUs
	err := validateCPUs(cpus, log, systemDeps)
	if err != nil {
		return err
	}

	memory := *cfg.Memory
	err = validateMemory(memory, log, mem)
	if err != nil {
		return err
	}

	return nil
}
