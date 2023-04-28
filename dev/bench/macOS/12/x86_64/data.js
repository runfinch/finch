window.BENCHMARK_DATA = {
  "lastUpdate": 1682705661667,
  "repoUrl": "https://github.com/runfinch/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ningziwe@amazon.com",
            "name": "Ziwen Ning",
            "username": "ningziwen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "325a8510c75b0b030be5ec075327ac337b7c22e5",
          "message": "ci: add benchmarking workflow (#384)\n\nhttps://github.com/runfinch/finch/issues/345\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\nhttps://runfinch.github.io/finch/dev/bench/macOS/12/arm64/\r\nhttps://runfinch.github.io/finch/dev/bench/macOS/12/x86_64/\r\nhttps://runfinch.github.io/finch/dev/bench/macOS/13/arm64/\r\nhttps://runfinch.github.io/finch/dev/bench/macOS/13/x86_64/\r\n\r\n\r\n- [ X ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Ziwen Ning <ningziwe@amazon.com>",
          "timestamp": "2023-04-28T18:08:29Z",
          "tree_id": "36a278e67f9282187e295ad59e2bcea15679a739",
          "url": "https://github.com/runfinch/finch/commit/325a8510c75b0b030be5ec075327ac337b7c22e5"
        },
        "date": 1682705660738,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 91255409465,
            "unit": "ns/op\t         0.2698 %cpu_avg/op\t        30.77 %cpu_peak/op\t        91.26 cpu_seconds/op\t2682449920 disk_bytes/op\t 4057504 B/op\t   85998 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26132336795,
            "unit": "ns/op\t         0.3783 %cpu_avg/op\t        31.25 %cpu_peak/op\t        26.13 cpu_seconds/op\t    512000 disk_bytes/op\t 1163328 B/op\t   24892 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 451716536,
            "unit": "ns/op\t         0.4689 %cpu_avg/op\t         7.509 %cpu_peak/op\t         0.4516 cpu_seconds/op\t      4096 disk_bytes/op\t   30037 B/op\t     483 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1740483594,
            "unit": "ns/op\t         0.2702 %cpu_avg/op\t        16.67 %cpu_peak/op\t         1.740 cpu_seconds/op\t   3526656 disk_bytes/op\t   88080 B/op\t    1720 allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      }
    ]
  }
}