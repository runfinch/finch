// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package benchmark runs benchmark tests of Finch.
package benchmark

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"sync"
	"testing"
	"time"

	"github.com/shirou/gopsutil/v3/cpu"
	"github.com/shirou/gopsutil/v3/disk"
)

// InstalledTestSubject is the test subject when Finch is installed.
const InstalledTestSubject = "finch"

// Installed indicates whether the tests are run against installed application.
var Installed = flag.Bool("installed", false, "the flag to show whether the tests are run against installed application")

// GetSubject returns the testing subject based on INSTALLED flag.
func GetSubject() (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("failed to get the current working directory: %w", err)
	}

	subject := filepath.Join(wd, "../../_output/bin/finch")
	if *Installed {
		subject = InstalledTestSubject
	}
	return subject, nil
}

// Wrapper reports the benchmarking metrics of targetFunc to testing.B.
func Wrapper(b *testing.B, targetFunc func(), cleanupFunc func()) {
	var peakCPUSum, avgCPUSum float64
	var totalCPUTimeSum time.Duration
	var diskUsageDeltaSum int64
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		b.StartTimer()
		peakCPU, avgCPU, totalCPUTime, diskUsageDelta, err := measureMetrics(targetFunc)
		if err != nil {
			b.Fatal("Error measuring metrics:", err)
			return
		}
		b.StopTimer()
		peakCPUSum += peakCPU
		avgCPUSum += avgCPU
		totalCPUTimeSum += totalCPUTime
		diskUsageDeltaSum += diskUsageDelta
		cleanupFunc()
	}
	b.ReportMetric(peakCPUSum/float64(b.N), "%cpu_peak/op")
	b.ReportMetric(avgCPUSum/float64(b.N), "%cpu_avg/op")
	b.ReportMetric(totalCPUTimeSum.Seconds()/float64(b.N), "cpu_seconds/op")
	b.ReportMetric(float64(diskUsageDeltaSum/int64(b.N)), "disk_bytes/op")
}

func measureMetrics(f func()) (float64, float64, time.Duration, int64, error) { //nolint:unparam // make it extensible for future error handling
	done := make(chan struct{})
	var cpuUsage []float64
	var startTime time.Time
	var diskUsageBefore, diskUsageAfter uint64

	wg := sync.WaitGroup{}
	wg.Add(1)

	go func() {
		f()
		done <- struct{}{}
	}()

	go func() {
		before, err := disk.Usage("/")
		if err != nil {
			fmt.Printf("Error getting disk usage before: %v\n", err)
			wg.Done()
			return
		}
		diskUsageBefore = before.Free

		ticker := time.NewTicker(10 * time.Millisecond)
		startTime = time.Now()

		for {
			select {
			case <-ticker.C:
				percent, err := cpu.Percent(time.Millisecond*10, false)
				if err != nil {
					ticker.Stop()
					wg.Done()
					return
				}
				cpuUsage = append(cpuUsage, percent[0])
			case <-done:

				after, err := disk.Usage("/")
				if err != nil {
					fmt.Printf("Error getting disk usage after: %v\n", err)
					wg.Done()
					return
				}
				diskUsageAfter = after.Free

				ticker.Stop()
				wg.Done()
				return
			}
		}
	}()

	wg.Wait()

	peakCPU := 0.0
	sumCPU := 0.0
	for _, usage := range cpuUsage {
		if usage > peakCPU {
			peakCPU = usage
		}
		sumCPU += usage
	}

	avgCPU := sumCPU / float64(len(cpuUsage))
	totalCPUTime := time.Since(startTime)

	diskUsageDelta := int64(diskUsageBefore - diskUsageAfter)

	return peakCPU, avgCPU, totalCPUTime, diskUsageDelta, nil
}
