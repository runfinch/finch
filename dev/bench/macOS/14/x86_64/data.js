window.BENCHMARK_DATA = {
  "lastUpdate": 1701998653092,
  "repoUrl": "https://github.com/runfinch/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47606630+weikequ@users.noreply.github.com",
            "name": "Weike Qu",
            "username": "weikequ"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8382ef5fedbf109047b835237ae00d3c1645165",
          "message": "feat: update infrastructure to use macOS 14 (#710)\n\nIssue #, if available:\r\n- Closes https://github.com/runfinch/finch/issues/680\r\n\r\n*Description of changes:*\r\n- https://github.com/runfinch/infrastructure/pull/496\r\n- Removed the docker-compat e2e tests in the corresponding ci-docs left\r\nover from https://github.com/runfinch/finch/pull/524\r\n\r\n*Testing done:*\r\n- none\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Weike Qu <weikequ@amazon.com>",
          "timestamp": "2023-12-07T10:09:21-08:00",
          "tree_id": "f63a9e526fe581cfa4b10d856ce86a4cd9c8dbd7",
          "url": "https://github.com/runfinch/finch/commit/f8382ef5fedbf109047b835237ae00d3c1645165"
        },
        "date": 1701972871706,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 49122077410,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.149,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 49.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1751257088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2207136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 46998,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 477539783,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9068,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.91,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4775,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 31965,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 507,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1620321044,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4606,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 16.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3612672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 83112,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1608,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb1a273e0b966599d77dd649002e2896ed8b98e5",
          "message": "build(deps): Bump submodules and dependencies (#724)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: KevinLiAWS <KevinLiAWS@users.noreply.github.com>",
          "timestamp": "2023-12-07T15:20:23-08:00",
          "tree_id": "9163c4536bd055db63f35e66e8d92f57c0ea5d6e",
          "url": "https://github.com/runfinch/finch/commit/bb1a273e0b966599d77dd649002e2896ed8b98e5"
        },
        "date": 1701991433255,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 46670666579,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3336,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 28.57,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 46.67,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1328910336,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2082784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 44191,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 34163320503,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4545,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 34.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 96907264,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1528416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 32525,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 498414432,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6502,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.9,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4984,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2730,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32509,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 526,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cnkevin@amazon.com",
            "name": "Kevin Li",
            "username": "KevinLiAWS"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ea255abb64c653a8c35e82c9c17aec9904278c5",
          "message": "revert: \"fix: resolve shellcheck warnings\" (#725)\n\nReverts runfinch/finch#684\r\nThis commit has a regression for signing. Revert to unblock the release.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-12-07T17:20:04-08:00",
          "tree_id": "530bcb1b7e610d7eed5e4b5f95f71abc8d7e888d",
          "url": "https://github.com/runfinch/finch/commit/8ea255abb64c653a8c35e82c9c17aec9904278c5"
        },
        "date": 1701998652186,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42525171861,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3782,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1195573248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1915840,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40384,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30936904795,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4855,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 38.46,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 100786176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1394576,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29500,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      }
    ]
  }
}