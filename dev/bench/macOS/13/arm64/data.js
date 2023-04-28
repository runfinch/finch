window.BENCHMARK_DATA = {
  "lastUpdate": 1682705620837,
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
        "date": 1682705619744,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 71582241583,
            "unit": "ns/op\t         0.4146 %cpu_avg/op\t        44.44 %cpu_peak/op\t        71.58 cpu_seconds/op\t2587455488 disk_bytes/op\t 3174808 B/op\t   67696 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27115681958,
            "unit": "ns/op\t         0.4361 %cpu_avg/op\t        50.00 %cpu_peak/op\t        27.12 cpu_seconds/op\t    733184 disk_bytes/op\t 1198032 B/op\t   25669 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 370115208,
            "unit": "ns/op\t         1.086 %cpu_avg/op\t        19.44 %cpu_peak/op\t         0.3701 cpu_seconds/op\t         0 disk_bytes/op\t   26080 B/op\t     393 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1354717334,
            "unit": "ns/op\t         0.7051 %cpu_avg/op\t        33.33 %cpu_peak/op\t         1.355 cpu_seconds/op\t   3526656 disk_bytes/op\t   68168 B/op\t    1328 allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      }
    ]
  }
}