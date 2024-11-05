// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package main for unit test coverage parsing
package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"os/exec"
	"strconv"
	"strings"
)

func main() {
	threshold := 100.0
	if len(os.Args) > 1 {
		argThreshold, err := strconv.ParseFloat(os.Args[1], 64)
		if err != nil {
			fmt.Fprintln(os.Stderr, "Invalid threshold value. Please provide a number.")
			os.Exit(1)
		}
		threshold = argThreshold
	}

	cmd := exec.Command("go", "tool", "cover", "-func=coverage.out")
	output, err := cmd.Output()
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error executing coverage command:", err)
		os.Exit(1)
	}

	var coverage float64
	scanner := bufio.NewScanner(strings.NewReader(string(output)))
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "total:") {
			parts := strings.Fields(line)
			if len(parts) > 2 {
				coverageStr := strings.TrimSuffix(parts[2], "%")
				coverage, err = strconv.ParseFloat(coverageStr, 64)
				if err != nil {
					fmt.Fprintln(os.Stderr, "Error parsing coverage:", err)
					os.Exit(1)
				}
				coverage = math.Round(coverage)
				fmt.Printf("Total Coverage: %.0f%%\n", coverage)
				break
			}
		}
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "Error reading coverage output:", err)
		os.Exit(1)
	}

	if coverage < threshold {
		fmt.Fprintf(os.Stderr, "Coverage %.0f%% is below the %.0f%% threshold\n", coverage, threshold)
		os.Exit(1)
	}

	fmt.Printf("Coverage %.0f%% meets the %.0f%% threshold\n", coverage, threshold)
}
