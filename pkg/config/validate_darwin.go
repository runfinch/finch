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

func validate(cfg *Finch, log flog.Logger, systemDeps LoadSystemDeps, mem fmemory.Memory) error {
	if *cfg.CPUs <= 0 {
		return fmt.Errorf(
			"specified number of CPUs (%d) must be greater than 0",
			*cfg.CPUs,
		)
	}

	memInt, err := units.FromHumanSize(*cfg.Memory)
	if err != nil {
		return fmt.Errorf("failed to parse memory to uint: %w", err)
	}

	if memInt <= 0 {
		return fmt.Errorf(
			"specified amount of memory (%s) must be greater than 0GiB",
			*cfg.Memory,
		)
	}

	totalCPUs := systemDeps.NumCPU()
	if *cfg.CPUs > totalCPUs {
		log.Infof(
			"The specified number of CPUs (%d) is greater than CPUs available on this system (%d),\n"+
				"which may lead to severe performance degradation",
			*cfg.CPUs,
			totalCPUs,
		)
	}

	totalMem := mem.TotalMemory()
	if uint64(memInt) > totalMem {
		log.Infof(
			"The specified amount of memory (%s) is greater than the memory available on this system (%s),\n"+
				"which may lead to severe performance degradation",
			*cfg.Memory,
			units.BytesSize(float64(totalMem)),
		)
	}

	return nil
}
