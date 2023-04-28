window.BENCHMARK_DATA = {
  "lastUpdate": 1682705730725,
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
        "date": 1682705729568,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 109376839334,
            "unit": "ns/op\t         0.2969 %cpu_avg/op\t        72.73 %cpu_peak/op\t       109.4 cpu_seconds/op\t2584264704 disk_bytes/op\t 4910336 B/op\t  103171 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24293431542,
            "unit": "ns/op\t         0.4778 %cpu_avg/op\t        40.00 %cpu_peak/op\t        24.29 cpu_seconds/op\t    -81920 disk_bytes/op\t 1081120 B/op\t   23024 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 345829930,
            "unit": "ns/op\t         2.255 %cpu_avg/op\t        25.15 %cpu_peak/op\t         0.3458 cpu_seconds/op\t         0 disk_bytes/op\t   24989 B/op\t     372 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1233779833,
            "unit": "ns/op\t         0.1423 %cpu_avg/op\t        16.36 %cpu_peak/op\t         1.234 cpu_seconds/op\t   3510272 disk_bytes/op\t   62792 B/op\t    1207 allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      }
    ]
  }
}