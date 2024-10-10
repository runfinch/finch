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
	"github.com/sirupsen/logrus"
)

// InstalledTestSubject is the test subject when Finch is installed.
const InstalledTestSubject = "finch"

// Installed indicates whether the tests are run against installed application.
var Installed = flag.Bool("installed", false, "the flag to show whether the tests are run against installed application")

// Metrics includes all the additional metrics that Finch benchmark reports,
// except testing.B natively supported metrics like execution time and memory.
type Metrics struct {
	PeakCPUUsage    float64
	AverageCPUUsage float64
	TotalCPUTime    time.Duration
	DiskUsageDelta  int64
}

// Add combines the values of the current Metrics instance with the values
// of another Metrics instance passed as an argument. It updates the current
// instance's fields by adding the corresponding values from the other instance.
func (m *Metrics) Add(other Metrics) {
	m.PeakCPUUsage += other.PeakCPUUsage
	m.AverageCPUUsage += other.AverageCPUUsage
	m.TotalCPUTime += other.TotalCPUTime
	m.DiskUsageDelta += other.DiskUsageDelta
}

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

// GetDocker gets the path of docker installation
func GetDocker() (string, error) {
	subject := filepath.Join("/usr/bin/", "docker")
	return subject, nil
}

// func CleanUpFunc() error {
// cmd0 := exec.Command("sudo", "systemctl", "stop", "docker")
// if err := cmd0.Run(); err != nil {
// 	return fmt.Errorf("docker stop failed: %v", err)
// }
// cmd1 := exec.Command("sudo", "rm", "-rf", "/var/lib/docker")
// if err := cmd1.Run(); err != nil {
// 	return fmt.Errorf("docker cleanup failed: %v", err)
// }
// cmd2 := exec.Command("sudo", "rm", "-rf", "/var/run/docker.pid")
// if err := cmd2.Run(); err != nil {
// 	return fmt.Errorf("failed to stop docker process: %v", err)
// }
// cmd3 := exec.Command("sudo", "systemctl", "restart", "docker")
// if err := cmd3.Run(); err != nil {
// 	return fmt.Errorf("docker failed to restart: %v", err)
// }

// cmd4 := exec.Command("sudo", "rm", "-rf", "/var/lib/finch/buildkit/cache.db")
// if err := cmd4.Run(); err != nil {
// 	return fmt.Errorf("finch buildkit cleanup failed: %v", err)
// }

// cmd5 := exec.Command("sudo", "docker", "builder", "prune", "-a", "-f")
// if err := cmd5.Run(); err != nil {
// 	return fmt.Errorf("docker builder prune failed: %v", err)
// }

// cmd6 := exec.Command("sudo", "docker", "image", "prune", "-a", "-f")
// if err := cmd6.Run(); err != nil {
// 	return fmt.Errorf("docker image prune failed: %v", err)
// }

// cmd7 := exec.Command("sudo", "rm", "-rf", "/var/lib/containerd")
// if err := cmd7.Run(); err != nil {
// 	return fmt.Errorf("containerd cleanup failed: %v", err)
// }

// cmd8 := exec.Command("sudo", "systemctl", "restart", "containerd")
// if err := cmd8.Run(); err != nil {
// 	return fmt.Errorf("docker failed to restart: %v", err)
// }

// return nil

// }

// Wrapper reports the benchmarking metrics of targetFunc to testing.B.
func Wrapper(b *testing.B, targetFunc func(), cleanupFunc func()) {
	metricsSum := Metrics{}
	b.ResetTimer()
	for n := 0; n < b.N; n++ {
		b.StartTimer()
		metrics, err := measureMetrics(targetFunc)
		if err != nil {
			b.Fatal("Error measuring metrics:", err)
			return
		}
		b.StopTimer()
		metricsSum.Add(metrics)
		cleanupFunc()
	}
	b.ReportMetric(metricsSum.PeakCPUUsage/float64(b.N), "%cpu_peak/op")
	b.ReportMetric(metricsSum.AverageCPUUsage/float64(b.N), "%cpu_avg/op")
	b.ReportMetric(metricsSum.TotalCPUTime.Seconds()/float64(b.N), "cpu_seconds/op")
	b.ReportMetric(float64(metricsSum.DiskUsageDelta/int64(b.N)), "disk_bytes/op")
}

func measureMetrics(targetFunc func()) (Metrics, error) { //nolint:unparam // make it extensible for future error handling
	done := make(chan struct{})
	var cpuUsage []float64
	var startTime time.Time
	var diskUsageBefore, diskUsageAfter uint64

	wg := sync.WaitGroup{}
	// Increment the WaitGroup counter by 1 to indicate that the main goroutine
	// should wait for the target function (which runs in another goroutine)
	// to complete its execution. The value 1 is used because there's only
	// one goroutine running the target function.
	wg.Add(1)

	go func() {
		targetFunc()
		done <- struct{}{}
	}()

	go func() {
		before, err := disk.Usage("/")
		if err != nil {
			logrus.Errorf("Error getting disk usage before: %v", err)
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
					logrus.Errorf("Error getting disk usage after: %v", err)
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

	return Metrics{
		PeakCPUUsage:    peakCPU,
		AverageCPUUsage: avgCPU,
		TotalCPUTime:    totalCPUTime,
		DiskUsageDelta:  diskUsageDelta,
	}, nil
}
