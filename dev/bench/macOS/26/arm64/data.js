window.BENCHMARK_DATA = {
  "lastUpdate": 1782537381408,
  "repoUrl": "https://github.com/runfinch/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "swpnlg@amazon.com",
            "name": "Swapnanil Gupta",
            "username": "Swapnanil-Gupta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88090eb73d54214f6de92f689b9ee2e8c9e0907f",
          "message": "ci: test on macos 26, remove macos 14 (#1730)\n\n* ci: start testing on macos 26\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* ci: skip x86_64 on macos 26 since we dont have runners for that combo\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* update triggers for ci.yaml and change codebuild runner names\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* update samcli codebuild runner name\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n---------\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-04-08T11:08:32-07:00",
          "tree_id": "e95c961be27a8921786f28feb1c655369b02923a",
          "url": "https://github.com/runfinch/finch/commit/88090eb73d54214f6de92f689b9ee2e8c9e0907f"
        },
        "date": 1775671977535,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 51226794000,
            "unit": "ns/op\t         0.4432 %cpu_avg/op\t        37.50 %cpu_peak/op\t        53.52 %mem_avg/op\t        55.02 %mem_peak/op\t        51.23 cpu_seconds/op\t1989877760 disk_bytes/op\t 4392104 B/op\t   64904 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 51226794000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4432,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.52,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.02,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 51.23,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1989877760,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4392104,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 64904,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15377121291,
            "unit": "ns/op\t         0.5979 %cpu_avg/op\t        71.43 %cpu_peak/op\t        50.15 %mem_avg/op\t        54.24 %mem_peak/op\t        15.38 cpu_seconds/op\t  -6873088 disk_bytes/op\t 1336560 B/op\t   19624 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15377121291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5979,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 71.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.15,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.24,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.38,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -6873088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1336560,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19624,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 417677264,
            "unit": "ns/op\t         1.173 %cpu_avg/op\t        23.16 %cpu_peak/op\t        54.63 %mem_avg/op\t        54.63 %mem_peak/op\t         0.4176 cpu_seconds/op\t   1137322 disk_bytes/op\t   48874 B/op\t     605 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 417677264,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.173,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.16,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.63,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.63,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4176,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1137322,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48874,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 605,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1138093792,
            "unit": "ns/op\t         0.3620 %cpu_avg/op\t        22.22 %cpu_peak/op\t        54.65 %mem_avg/op\t        54.65 %mem_peak/op\t         1.138 cpu_seconds/op\t   2764800 disk_bytes/op\t  109504 B/op\t    1536 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1138093792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.362,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 22.22,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.65,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.65,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.138,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2764800,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 109504,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1536,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b0ac6473d8cdc12d8e45eb75c9e28e06cf48819",
          "message": "build(deps): bump github.com/docker/cli from 29.1.3+incompatible to 29.2.0+incompatible (#1714)\n\nbuild(deps): bump github.com/docker/cli\n\nBumps [github.com/docker/cli](https://github.com/docker/cli) from 29.1.3+incompatible to 29.2.0+incompatible.\n- [Commits](https://github.com/docker/cli/compare/v29.1.3...v29.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/docker/cli\n  dependency-version: 29.2.0+incompatible\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-09T10:59:03-07:00",
          "tree_id": "37b8af96c5e998dfd3224b56560f09eb84afacb2",
          "url": "https://github.com/runfinch/finch/commit/8b0ac6473d8cdc12d8e45eb75c9e28e06cf48819"
        },
        "date": 1775757860261,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144503970875,
            "unit": "ns/op\t         0.2017 %cpu_avg/op\t        55.56 %cpu_peak/op\t        53.53 %mem_avg/op\t        54.91 %mem_peak/op\t       144.5 cpu_seconds/op\t2021896192 disk_bytes/op\t12389392 B/op\t  183129 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144503970875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2017,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 55.56,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.91,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2021896192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12389392,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183129,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15831089500,
            "unit": "ns/op\t         0.4022 %cpu_avg/op\t        37.50 %cpu_peak/op\t        50.84 %mem_avg/op\t        54.29 %mem_peak/op\t        15.83 cpu_seconds/op\t   7405568 disk_bytes/op\t 1370760 B/op\t   20166 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15831089500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4022,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.84,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.29,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.83,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 7405568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1370760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 20166,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 430739778,
            "unit": "ns/op\t         0.6349 %cpu_avg/op\t        16.34 %cpu_peak/op\t        54.76 %mem_avg/op\t        54.77 %mem_peak/op\t         0.4307 cpu_seconds/op\t   1094997 disk_bytes/op\t   49754 B/op\t     624 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 430739778,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6349,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.34,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.76,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.77,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4307,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1094997,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 49754,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 624,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1225162459,
            "unit": "ns/op\t         0.4249 %cpu_avg/op\t        22.22 %cpu_peak/op\t        54.76 %mem_avg/op\t        54.79 %mem_peak/op\t         1.225 cpu_seconds/op\t   2633728 disk_bytes/op\t  117616 B/op\t    1657 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1225162459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4249,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 22.22,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.76,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.79,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.225,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2633728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 117616,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1657,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05a28eef28264746383ed5148b8980016e7c1c4c",
          "message": "build(deps): bump golang.org/x/image from 0.18.0 to 0.38.0 (#1731)\n\nBumps [golang.org/x/image](https://github.com/golang/image) from 0.18.0 to 0.38.0.\n- [Commits](https://github.com/golang/image/compare/v0.18.0...v0.38.0)\n\n---\nupdated-dependencies:\n- dependency-name: golang.org/x/image\n  dependency-version: 0.38.0\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-09T11:01:38-07:00",
          "tree_id": "3b222a1d74c0d20132e8747166635fb00796b0a1",
          "url": "https://github.com/runfinch/finch/commit/05a28eef28264746383ed5148b8980016e7c1c4c"
        },
        "date": 1775757994089,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 52140415584,
            "unit": "ns/op\t         0.4340 %cpu_avg/op\t        37.50 %cpu_peak/op\t        51.17 %mem_avg/op\t        55.00 %mem_peak/op\t        52.14 cpu_seconds/op\t1966424064 disk_bytes/op\t 4457640 B/op\t   65950 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 52140415584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.434,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 51.17,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 52.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1966424064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4457640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 65950,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15259089833,
            "unit": "ns/op\t         0.4841 %cpu_avg/op\t        44.44 %cpu_peak/op\t        49.72 %mem_avg/op\t        53.99 %mem_peak/op\t        15.26 cpu_seconds/op\t  -7045120 disk_bytes/op\t 1331520 B/op\t   19511 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15259089833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4841,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 49.72,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 53.99,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -7045120,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1331520,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19511,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 428903458,
            "unit": "ns/op\t         0.6305 %cpu_avg/op\t        15.01 %cpu_peak/op\t        54.57 %mem_avg/op\t        54.58 %mem_peak/op\t         0.4288 cpu_seconds/op\t   1060864 disk_bytes/op\t   49288 B/op\t     619 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 428903458,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6305,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.01,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.57,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.58,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4288,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1060864,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 49288,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 619,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1120253875,
            "unit": "ns/op\t         0.4325 %cpu_avg/op\t        12.52 %cpu_peak/op\t        54.58 %mem_avg/op\t        54.59 %mem_peak/op\t         1.120 cpu_seconds/op\t   2727936 disk_bytes/op\t  108568 B/op\t    1521 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1120253875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4325,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.52,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.58,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.59,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2727936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 108568,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1521,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "802ce82b241436d6e6639334a0f1b9c391e3f49b",
          "message": "build(deps): bump github.com/go-jose/go-jose/v4 from 4.1.3 to 4.1.4 (#1732)\n\nBumps [github.com/go-jose/go-jose/v4](https://github.com/go-jose/go-jose) from 4.1.3 to 4.1.4.\n- [Release notes](https://github.com/go-jose/go-jose/releases)\n- [Commits](https://github.com/go-jose/go-jose/compare/v4.1.3...v4.1.4)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/go-jose/go-jose/v4\n  dependency-version: 4.1.4\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-09T11:03:02-07:00",
          "tree_id": "5d9ad7f3c4c511ab568da42ba64d99cd0427ac78",
          "url": "https://github.com/runfinch/finch/commit/802ce82b241436d6e6639334a0f1b9c391e3f49b"
        },
        "date": 1775758072030,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 50079322083,
            "unit": "ns/op\t         1.066 %cpu_avg/op\t        72.73 %cpu_peak/op\t        51.82 %mem_avg/op\t        54.95 %mem_peak/op\t        50.08 cpu_seconds/op\t2084941824 disk_bytes/op\t 4306944 B/op\t   63427 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 50079322083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.066,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 72.73,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 51.82,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.95,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 50.08,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2084941824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4306944,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 63427,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15461569625,
            "unit": "ns/op\t         0.6009 %cpu_avg/op\t        50.00 %cpu_peak/op\t        50.08 %mem_avg/op\t        54.06 %mem_peak/op\t        15.46 cpu_seconds/op\t  20897792 disk_bytes/op\t 1337472 B/op\t   19673 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15461569625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6009,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.08,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.06,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20897792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1337472,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19673,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 400031333,
            "unit": "ns/op\t         0.5197 %cpu_avg/op\t        13.88 %cpu_peak/op\t        54.58 %mem_avg/op\t        54.59 %mem_peak/op\t         0.4000 cpu_seconds/op\t   1134592 disk_bytes/op\t   46893 B/op\t     579 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 400031333,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5197,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.88,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.58,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.59,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1134592,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 46893,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 579,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1084368083,
            "unit": "ns/op\t         0.2590 %cpu_avg/op\t        13.49 %cpu_peak/op\t        54.60 %mem_avg/op\t        54.61 %mem_peak/op\t         1.084 cpu_seconds/op\t   2719744 disk_bytes/op\t  106680 B/op\t    1491 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1084368083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.259,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.49,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.6,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.61,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.084,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2719744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 106680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1491,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swpnlg@amazon.com",
            "name": "Swapnanil Gupta",
            "username": "Swapnanil-Gupta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "916da699d34d4fe0cc1edca9e87a048a05bf2deb",
          "message": "feat: make disk sizes configurable on macos (#1733)\n\n* feat: make disk sizes (both boot & data) configurable on macos\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* fix unit tests and add unit tests for disk config\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* fix lint issues\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* add e2e tests\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* Changes:\n\n- Add warnings that increasing datadisk size is irreversible without losing data\n- Add ability to rollback config changes if disk resize operation fails\n- Add a test to set size of disk to a very large amount\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n---------\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-04-13T13:45:55-07:00",
          "tree_id": "f57a2f4d24c65249e6b088054c821be2c3f77d6c",
          "url": "https://github.com/runfinch/finch/commit/916da699d34d4fe0cc1edca9e87a048a05bf2deb"
        },
        "date": 1776113457745,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144668699458,
            "unit": "ns/op\t         0.2028 %cpu_avg/op\t        36.36 %cpu_peak/op\t        53.56 %mem_avg/op\t        55.22 %mem_peak/op\t       144.7 cpu_seconds/op\t2020769792 disk_bytes/op\t12394744 B/op\t  183242 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144668699458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2028,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.56,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.22,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2020769792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12394744,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183242,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15446515583,
            "unit": "ns/op\t         0.6010 %cpu_avg/op\t        50.00 %cpu_peak/op\t        50.99 %mem_avg/op\t        54.43 %mem_peak/op\t        15.45 cpu_seconds/op\t  22282240 disk_bytes/op\t 1337704 B/op\t   19660 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15446515583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.601,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.99,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.43,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 22282240,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1337704,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19660,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 450584653,
            "unit": "ns/op\t         1.079 %cpu_avg/op\t        22.22 %cpu_peak/op\t        54.95 %mem_avg/op\t        54.96 %mem_peak/op\t         0.4505 cpu_seconds/op\t   1142784 disk_bytes/op\t   51536 B/op\t     644 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 450584653,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.079,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.22,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.95,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.96,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4505,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1142784,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 51536,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 644,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1134414625,
            "unit": "ns/op\t         0.3202 %cpu_avg/op\t        12.88 %cpu_peak/op\t        55.00 %mem_avg/op\t        55.00 %mem_peak/op\t         1.134 cpu_seconds/op\t   2666496 disk_bytes/op\t  110928 B/op\t    1538 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1134414625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3202,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.88,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.134,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2666496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 110928,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1538,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5611716499444008e90e5dad6b59833fe969381",
          "message": "build(deps): bump github.com/containerd/nerdctl/v2 from 2.2.1 to 2.2.2 (#1736)\n\nBumps [github.com/containerd/nerdctl/v2](https://github.com/containerd/nerdctl) from 2.2.1 to 2.2.2.\n- [Release notes](https://github.com/containerd/nerdctl/releases)\n- [Commits](https://github.com/containerd/nerdctl/compare/v2.2.1...v2.2.2)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/containerd/nerdctl/v2\n  dependency-version: 2.2.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-23T13:26:00-07:00",
          "tree_id": "b02ad702252deda1c90966a94aca2e0b9ed6dbcc",
          "url": "https://github.com/runfinch/finch/commit/d5611716499444008e90e5dad6b59833fe969381"
        },
        "date": 1776976201250,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 55929071500,
            "unit": "ns/op\t         0.4226 %cpu_avg/op\t        60.00 %cpu_peak/op\t        51.01 %mem_avg/op\t        55.24 %mem_peak/op\t        55.93 cpu_seconds/op\t1981591552 disk_bytes/op\t 4773928 B/op\t   70794 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 55929071500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4226,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 51.01,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.24,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 55.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1981591552,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4773928,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 70794,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 18862758625,
            "unit": "ns/op\t         0.4277 %cpu_avg/op\t        37.50 %cpu_peak/op\t        47.41 %mem_avg/op\t        53.56 %mem_peak/op\t        18.86 cpu_seconds/op\t   5853184 disk_bytes/op\t 1612600 B/op\t   23983 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 18862758625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4277,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 47.41,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 53.56,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 18.86,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 5853184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1612600,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23983,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 418851236,
            "unit": "ns/op\t         1.079 %cpu_avg/op\t        21.15 %cpu_peak/op\t        54.96 %mem_avg/op\t        55.04 %mem_peak/op\t         0.4188 cpu_seconds/op\t   1131861 disk_bytes/op\t   48973 B/op\t     600 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 418851236,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.079,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.15,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.96,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.04,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4188,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1131861,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48973,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 600,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1100141208,
            "unit": "ns/op\t         0.9526 %cpu_avg/op\t        25.00 %cpu_peak/op\t        55.04 %mem_avg/op\t        55.04 %mem_peak/op\t         1.100 cpu_seconds/op\t   2695168 disk_bytes/op\t  109296 B/op\t    1511 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1100141208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.9526,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.04,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.04,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2695168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 109296,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1511,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "80958a6b3965787a540717bd6e863f3c16ab11ec",
          "message": "build(deps): Bump submodules and dependencies (#1728)\n\n[create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: shashank-boyapally <135713015+shashank-boyapally@users.noreply.github.com>",
          "timestamp": "2026-04-23T18:36:34-07:00",
          "tree_id": "bf8c6b2c981681dedf3978e76a4abff7b24bd50e",
          "url": "https://github.com/runfinch/finch/commit/80958a6b3965787a540717bd6e863f3c16ab11ec"
        },
        "date": 1776994910765,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144211783584,
            "unit": "ns/op\t         0.2139 %cpu_avg/op\t        60.00 %cpu_peak/op\t        53.53 %mem_avg/op\t        55.28 %mem_peak/op\t       144.2 cpu_seconds/op\t2055561216 disk_bytes/op\t12364480 B/op\t  182759 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144211783584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2139,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.28,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2055561216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12364480,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 182759,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15414588541,
            "unit": "ns/op\t         0.4664 %cpu_avg/op\t        55.56 %cpu_peak/op\t        50.84 %mem_avg/op\t        54.21 %mem_peak/op\t        15.41 cpu_seconds/op\t  18272256 disk_bytes/op\t 1336512 B/op\t   19641 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15414588541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4664,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 55.56,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.84,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.21,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18272256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1336512,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19641,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 438311097,
            "unit": "ns/op\t         0.8773 %cpu_avg/op\t        18.47 %cpu_peak/op\t        54.78 %mem_avg/op\t        54.85 %mem_peak/op\t         0.4382 cpu_seconds/op\t   1153706 disk_bytes/op\t   50413 B/op\t     629 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 438311097,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8773,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.47,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.78,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.85,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4382,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1153706,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 50413,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 629,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1196452417,
            "unit": "ns/op\t         0.6225 %cpu_avg/op\t        18.18 %cpu_peak/op\t        54.92 %mem_avg/op\t        54.93 %mem_peak/op\t         1.196 cpu_seconds/op\t   2662400 disk_bytes/op\t  115936 B/op\t    1628 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1196452417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6225,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 18.18,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.92,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.93,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.196,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2662400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 115936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1628,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "swpnlg@amazon.com",
            "name": "Swapnanil Gupta",
            "username": "Swapnanil-Gupta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73742f672a937db7dce2b204d643298fd0b5a279",
          "message": "chore(ci): make ci and ci-docs workflows have the same set of checks (#1740)\n\nmake ci and ci-docs workflow have the same set of checks\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-04-24T13:44:58-07:00",
          "tree_id": "f36d61a889c5a9670b68363a95201958d080d850",
          "url": "https://github.com/runfinch/finch/commit/73742f672a937db7dce2b204d643298fd0b5a279"
        },
        "date": 1777065113918,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 52880875917,
            "unit": "ns/op\t         0.4659 %cpu_avg/op\t        45.45 %cpu_peak/op\t        49.66 %mem_avg/op\t        55.00 %mem_peak/op\t        52.88 cpu_seconds/op\t2003050496 disk_bytes/op\t 4535704 B/op\t   67149 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 52880875917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4659,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 49.66,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 52.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2003050496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4535704,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 67149,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15205021250,
            "unit": "ns/op\t         0.7675 %cpu_avg/op\t        66.67 %cpu_peak/op\t        49.11 %mem_avg/op\t        53.05 %mem_peak/op\t        15.20 cpu_seconds/op\t  12570624 disk_bytes/op\t 1328080 B/op\t   19465 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15205021250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7675,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 49.11,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 53.05,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 12570624,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1328080,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19465,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 429271930,
            "unit": "ns/op\t         0.9148 %cpu_avg/op\t        22.35 %cpu_peak/op\t        54.75 %mem_avg/op\t        54.76 %mem_peak/op\t         0.4292 cpu_seconds/op\t   1111381 disk_bytes/op\t   49856 B/op\t     616 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 429271930,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9148,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.35,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.75,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.76,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4292,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1111381,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 49856,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 616,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1129171791,
            "unit": "ns/op\t         0.8837 %cpu_avg/op\t        22.22 %cpu_peak/op\t        54.74 %mem_avg/op\t        54.75 %mem_peak/op\t         1.129 cpu_seconds/op\t   2785280 disk_bytes/op\t  110672 B/op\t    1541 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1129171791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.8837,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 22.22,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.74,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.75,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.129,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2785280,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 110672,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1541,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "8744d0cad293f9c9810fd9db214ed6e7919bb4f5",
          "message": "chore(main): release 1.17.0 (#1734)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:02:15-07:00",
          "tree_id": "00c83febbedf38d010e1db8c5308ae54f0f754f4",
          "url": "https://github.com/runfinch/finch/commit/8744d0cad293f9c9810fd9db214ed6e7919bb4f5"
        },
        "date": 1777065325324,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 52700837666,
            "unit": "ns/op\t         0.4893 %cpu_avg/op\t        63.64 %cpu_peak/op\t        49.66 %mem_avg/op\t        54.97 %mem_peak/op\t        52.70 cpu_seconds/op\t2013614080 disk_bytes/op\t 4513760 B/op\t   66734 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 52700837666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4893,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 63.64,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 49.66,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.97,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 52.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2013614080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4513760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 66734,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15215594000,
            "unit": "ns/op\t         0.5005 %cpu_avg/op\t        50.00 %cpu_peak/op\t        49.21 %mem_avg/op\t        53.12 %mem_peak/op\t        15.22 cpu_seconds/op\t   -286720 disk_bytes/op\t 1326256 B/op\t   19444 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15215594000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5005,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 49.21,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 53.12,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -286720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1326256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19444,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 420415042,
            "unit": "ns/op\t         1.168 %cpu_avg/op\t        22.56 %cpu_peak/op\t        54.74 %mem_avg/op\t        54.75 %mem_peak/op\t         0.4204 cpu_seconds/op\t   1044480 disk_bytes/op\t   48842 B/op\t     604 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 420415042,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.168,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.56,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.74,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.75,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4204,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1044480,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48842,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 604,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1088108875,
            "unit": "ns/op\t         0.2530 %cpu_avg/op\t        13.78 %cpu_peak/op\t        54.75 %mem_avg/op\t        54.75 %mem_peak/op\t         1.088 cpu_seconds/op\t   2748416 disk_bytes/op\t  106256 B/op\t    1476 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1088108875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.253,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.78,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.75,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.75,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.088,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2748416,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 106256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1476,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "57cfee009f5db96abd6608dc324170211e75360c",
          "message": "build(deps): Bump submodules and dependencies (#1739)\n\n[create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: ayush-panta <219054581+ayush-panta@users.noreply.github.com>",
          "timestamp": "2026-05-21T11:52:16-07:00",
          "tree_id": "9fa18415a493f461ad5359a929f95716723235b0",
          "url": "https://github.com/runfinch/finch/commit/57cfee009f5db96abd6608dc324170211e75360c"
        },
        "date": 1779389894973,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 143952459375,
            "unit": "ns/op\t         0.2175 %cpu_avg/op\t        63.64 %cpu_peak/op\t        53.61 %mem_avg/op\t        55.96 %mem_peak/op\t       144.0 cpu_seconds/op\t2062274560 disk_bytes/op\t12390560 B/op\t  183061 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 143952459375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2175,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 63.64,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.61,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.96,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2062274560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12390560,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183061,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15305043625,
            "unit": "ns/op\t         0.6025 %cpu_avg/op\t        71.43 %cpu_peak/op\t        50.63 %mem_avg/op\t        54.99 %mem_peak/op\t        15.30 cpu_seconds/op\t  -1388544 disk_bytes/op\t 1326552 B/op\t   19501 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15305043625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6025,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 71.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.63,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.99,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -1388544,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1326552,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19501,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 400061056,
            "unit": "ns/op\t         1.569 %cpu_avg/op\t        20.50 %cpu_peak/op\t        55.66 %mem_avg/op\t        55.68 %mem_peak/op\t         0.4000 cpu_seconds/op\t   1045845 disk_bytes/op\t   47208 B/op\t     579 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 400061056,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.569,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.5,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.66,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.68,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1045845,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 47208,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 579,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1171019167,
            "unit": "ns/op\t         0.2849 %cpu_avg/op\t        14.49 %cpu_peak/op\t        55.69 %mem_avg/op\t        55.69 %mem_peak/op\t         1.171 cpu_seconds/op\t   2838528 disk_bytes/op\t  113352 B/op\t    1582 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1171019167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2849,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 14.49,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.69,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.69,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.171,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2838528,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 113352,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1582,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ayushkp@amazon.com",
            "name": "ayush-panta",
            "username": "ayush-panta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b0ce05e8c4658be71982e4b3746b205d6539869",
          "message": "fix: troubleshoot and patch samcli invoke tests (#1721)\n\nfix(ci): Fix samcli-vm invoke tests for ARM64 runners\n\n- Fix homebrew ownership for dotnet installation\n- Enable Rosetta for x86_64 emulation in Finch VM\n- Increase memory for dotnet10/nodejs22.x under x86_64 emulation\n- Add test_invoke_returns_expected_results_from_git_function to\n  expected failures (layer download message leaks into stdout)\n\nSigned-off-by: ayush-panta <ayushkp@amazon.com>",
          "timestamp": "2026-05-26T08:54:03-07:00",
          "tree_id": "7a3dcba130dd632cf171ccb718e2e47b8bc56b3d",
          "url": "https://github.com/runfinch/finch/commit/9b0ce05e8c4658be71982e4b3746b205d6539869"
        },
        "date": 1779811218666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 143918378750,
            "unit": "ns/op\t         0.2325 %cpu_avg/op\t        50.00 %cpu_peak/op\t        53.56 %mem_avg/op\t        55.26 %mem_peak/op\t       143.9 cpu_seconds/op\t2053230592 disk_bytes/op\t12387856 B/op\t  183142 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 143918378750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2325,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.56,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.26,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 143.9,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2053230592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12387856,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183142,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15292054333,
            "unit": "ns/op\t         0.5212 %cpu_avg/op\t        36.36 %cpu_peak/op\t        50.82 %mem_avg/op\t        54.27 %mem_peak/op\t        15.29 cpu_seconds/op\t   8601600 disk_bytes/op\t 1329256 B/op\t   19515 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15292054333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5212,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.82,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.27,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 8601600,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1329256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19515,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 393683444,
            "unit": "ns/op\t         1.065 %cpu_avg/op\t        19.49 %cpu_peak/op\t        54.96 %mem_avg/op\t        55.02 %mem_peak/op\t         0.3936 cpu_seconds/op\t   1078613 disk_bytes/op\t   46773 B/op\t     574 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 393683444,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.065,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.49,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.96,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.02,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3936,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1078613,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 46773,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 574,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1206074542,
            "unit": "ns/op\t         0.4128 %cpu_avg/op\t        20.00 %cpu_peak/op\t        55.10 %mem_avg/op\t        55.11 %mem_peak/op\t         1.206 cpu_seconds/op\t   2625536 disk_bytes/op\t  116760 B/op\t    1642 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1206074542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4128,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.1,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.11,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.206,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2625536,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 116760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1642,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ayushkp@amazon.com",
            "name": "ayush-panta",
            "username": "ayush-panta"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08bbf909b2149cd6fd2da32354d997e5b8eb3879",
          "message": "chore: bump golang.org/x/crypto to v0.52.0 (#1750)\n\nSigned-off-by: ayush-panta <ayushkp@amazon.com>",
          "timestamp": "2026-05-27T12:07:53-07:00",
          "tree_id": "47dcf9285482de2e8c72141d2891ca771a68486b",
          "url": "https://github.com/runfinch/finch/commit/08bbf909b2149cd6fd2da32354d997e5b8eb3879"
        },
        "date": 1779909111091,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 55326542834,
            "unit": "ns/op\t         0.4173 %cpu_avg/op\t        41.67 %cpu_peak/op\t        53.37 %mem_avg/op\t        55.95 %mem_peak/op\t        55.33 cpu_seconds/op\t1998995456 disk_bytes/op\t 4744576 B/op\t   70341 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 55326542834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4173,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.37,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.95,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 55.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1998995456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4744576,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 70341,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15450721666,
            "unit": "ns/op\t         0.5233 %cpu_avg/op\t        72.73 %cpu_peak/op\t        51.83 %mem_avg/op\t        55.09 %mem_peak/op\t        15.45 cpu_seconds/op\t  10432512 disk_bytes/op\t 1345432 B/op\t   19753 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15450721666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5233,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 72.73,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 51.83,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 55.09,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 10432512,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1345432,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19753,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 399863361,
            "unit": "ns/op\t         0.9509 %cpu_avg/op\t        18.08 %cpu_peak/op\t        55.78 %mem_avg/op\t        55.79 %mem_peak/op\t         0.3998 cpu_seconds/op\t   1077248 disk_bytes/op\t   47597 B/op\t     581 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 399863361,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9509,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.08,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.78,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.79,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3998,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1077248,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 47597,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 581,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1133105917,
            "unit": "ns/op\t         0.3529 %cpu_avg/op\t        20.00 %cpu_peak/op\t        55.76 %mem_avg/op\t        55.81 %mem_peak/op\t         1.133 cpu_seconds/op\t   2711552 disk_bytes/op\t  111040 B/op\t    1538 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1133105917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3529,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.76,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.81,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.133,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2711552,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 111040,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1538,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "6560f1de45954277c45746b98a3b019f9db025ae",
          "message": "build(deps): Bump submodules and dependencies (#1747)\n\n[create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: ayush-panta <219054581+ayush-panta@users.noreply.github.com>",
          "timestamp": "2026-05-28T20:20:24-07:00",
          "tree_id": "339aabb054c0cb7ca2975b88385523f72b7eef31",
          "url": "https://github.com/runfinch/finch/commit/6560f1de45954277c45746b98a3b019f9db025ae"
        },
        "date": 1780025133717,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144441160625,
            "unit": "ns/op\t         0.1986 %cpu_avg/op\t        50.00 %cpu_peak/op\t        53.98 %mem_avg/op\t        56.13 %mem_peak/op\t       144.4 cpu_seconds/op\t2051313664 disk_bytes/op\t12457344 B/op\t  184144 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144441160625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.1986,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.98,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 56.13,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.4,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2051313664,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12457344,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 184144,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15462505708,
            "unit": "ns/op\t         0.4395 %cpu_avg/op\t        37.50 %cpu_peak/op\t        50.48 %mem_avg/op\t        54.25 %mem_peak/op\t        15.46 cpu_seconds/op\t  16723968 disk_bytes/op\t 1342552 B/op\t   19728 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15462505708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4395,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.48,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.25,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16723968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1342552,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19728,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 439671750,
            "unit": "ns/op\t         1.012 %cpu_avg/op\t        19.92 %cpu_peak/op\t        56.01 %mem_avg/op\t        56.03 %mem_peak/op\t         0.4396 cpu_seconds/op\t   1082709 disk_bytes/op\t   51562 B/op\t     639 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 439671750,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.012,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.92,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 56.01,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 56.03,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4396,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1082709,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 51562,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 639,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1120094209,
            "unit": "ns/op\t         0.8735 %cpu_avg/op\t        33.33 %cpu_peak/op\t        56.05 %mem_avg/op\t        56.06 %mem_peak/op\t         1.120 cpu_seconds/op\t   2691072 disk_bytes/op\t  110096 B/op\t    1537 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1120094209,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.8735,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 56.05,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 56.06,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2691072,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 110096,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1537,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "e568f8cccc1992c2eb71f0c6e9bd55efd5c69d3a",
          "message": "chore(main): release 1.17.1 (#1745)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-29T09:57:14-07:00",
          "tree_id": "94abe302bfbaeb4e2e0afdcf60acc55ee2354448",
          "url": "https://github.com/runfinch/finch/commit/e568f8cccc1992c2eb71f0c6e9bd55efd5c69d3a"
        },
        "date": 1780074139547,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 145554726084,
            "unit": "ns/op\t         0.2336 %cpu_avg/op\t        88.89 %cpu_peak/op\t        55.14 %mem_avg/op\t        56.23 %mem_peak/op\t       145.6 cpu_seconds/op\t2061774848 disk_bytes/op\t12790128 B/op\t  185365 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 145554726084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2336,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 88.89,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 55.14,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 56.23,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 145.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2061774848,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12790128,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 185365,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15286825000,
            "unit": "ns/op\t         0.5285 %cpu_avg/op\t        55.56 %cpu_peak/op\t        52.61 %mem_avg/op\t        55.47 %mem_peak/op\t        15.29 cpu_seconds/op\t  -1748992 disk_bytes/op\t 1329504 B/op\t   19530 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15286825000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5285,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 55.56,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 52.61,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 55.47,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -1748992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1329504,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19530,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 413084027,
            "unit": "ns/op\t         1.010 %cpu_avg/op\t        18.38 %cpu_peak/op\t        56.13 %mem_avg/op\t        56.15 %mem_peak/op\t         0.4130 cpu_seconds/op\t   1079978 disk_bytes/op\t   48514 B/op\t     599 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 413084027,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.01,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.38,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 56.13,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 56.15,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.413,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1079978,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48514,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 599,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1051986167,
            "unit": "ns/op\t         0.1518 %cpu_avg/op\t        13.97 %cpu_peak/op\t        56.16 %mem_avg/op\t        56.16 %mem_peak/op\t         1.052 cpu_seconds/op\t   2625536 disk_bytes/op\t  104688 B/op\t    1447 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1051986167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1518,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.97,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 56.16,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 56.16,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.052,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2625536,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 104688,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1447,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2025afde37de960775a6930ef889ca012b8a3af",
          "message": "build(deps): bump github.com/containerd/containerd/v2 from 2.2.1 to 2.2.4 (#1746)\n\nbuild(deps): bump github.com/containerd/containerd/v2\n\nBumps [github.com/containerd/containerd/v2](https://github.com/containerd/containerd) from 2.2.1 to 2.2.4.\n- [Release notes](https://github.com/containerd/containerd/releases)\n- [Changelog](https://github.com/containerd/containerd/blob/main/RELEASES.md)\n- [Commits](https://github.com/containerd/containerd/compare/v2.2.1...v2.2.4)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/containerd/containerd/v2\n  dependency-version: 2.2.4\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-05T11:47:03-07:00",
          "tree_id": "49654723f3f38e746dc1e8d5a3c84e6754ee9bd0",
          "url": "https://github.com/runfinch/finch/commit/c2025afde37de960775a6930ef889ca012b8a3af"
        },
        "date": 1780687937507,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 55121716750,
            "unit": "ns/op\t         0.4037 %cpu_avg/op\t        33.33 %cpu_peak/op\t        50.45 %mem_avg/op\t        54.80 %mem_peak/op\t        55.12 cpu_seconds/op\t2000412672 disk_bytes/op\t 4716240 B/op\t   69891 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 55121716750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4037,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 50.45,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.8,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 55.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2000412672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4716240,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 69891,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15285547291,
            "unit": "ns/op\t         0.5104 %cpu_avg/op\t        41.67 %cpu_peak/op\t        50.02 %mem_avg/op\t        53.90 %mem_peak/op\t        15.29 cpu_seconds/op\t  16175104 disk_bytes/op\t 1330640 B/op\t   19544 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15285547291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5104,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.02,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 53.9,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16175104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1330640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19544,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 442720389,
            "unit": "ns/op\t         1.168 %cpu_avg/op\t        20.15 %cpu_peak/op\t        54.60 %mem_avg/op\t        54.61 %mem_peak/op\t         0.4427 cpu_seconds/op\t   1096362 disk_bytes/op\t   50922 B/op\t     634 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 442720389,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.168,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.15,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.6,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.61,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4427,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1096362,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 50922,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 634,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1199428250,
            "unit": "ns/op\t         0.9148 %cpu_avg/op\t        30.00 %cpu_peak/op\t        54.65 %mem_avg/op\t        54.66 %mem_peak/op\t         1.199 cpu_seconds/op\t   2785280 disk_bytes/op\t  116336 B/op\t    1632 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1199428250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.9148,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.65,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.66,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.199,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2785280,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 116336,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1632,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71107651+smandhada16@users.noreply.github.com",
            "name": "Sai Nikhil Reddy",
            "username": "smandhada16"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2c5d05b31767c13e499d75897c4d917e0ea1679",
          "message": "build(deps): golang.org/x/net from v0.54.0 to v0.55.0 (#1756)\n\n* build(deps): golang.org/x/net from v0.54.0 to v0.55.0\n\nSigned-off-by: Sainikhilreddy <sainrman@amazon.com>\n\n* go mod tidy\n\nSigned-off-by: Sainikhilreddy <sainrman@amazon.com>\n\n---------\n\nSigned-off-by: Sainikhilreddy <sainrman@amazon.com>\nCo-authored-by: Sainikhilreddy <sainrman@amazon.com>",
          "timestamp": "2026-06-11T10:38:54-07:00",
          "tree_id": "4aeb6533828118361aa25bcfc957adfd444a37f4",
          "url": "https://github.com/runfinch/finch/commit/e2c5d05b31767c13e499d75897c4d917e0ea1679"
        },
        "date": 1781199884292,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144934664458,
            "unit": "ns/op\t         0.1984 %cpu_avg/op\t        30.00 %cpu_peak/op\t        52.49 %mem_avg/op\t        55.10 %mem_peak/op\t       144.9 cpu_seconds/op\t2050695168 disk_bytes/op\t12422744 B/op\t  183766 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144934664458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.1984,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 52.49,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.1,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.9,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2050695168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12422744,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183766,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15305009333,
            "unit": "ns/op\t         0.5421 %cpu_avg/op\t        37.50 %cpu_peak/op\t        50.37 %mem_avg/op\t        54.67 %mem_peak/op\t        15.30 cpu_seconds/op\t  13565952 disk_bytes/op\t 1334968 B/op\t   19568 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15305009333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5421,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.37,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.67,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 13565952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1334968,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19568,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 435644250,
            "unit": "ns/op\t         0.7536 %cpu_avg/op\t        16.85 %cpu_peak/op\t        54.58 %mem_avg/op\t        54.60 %mem_peak/op\t         0.4356 cpu_seconds/op\t   1104554 disk_bytes/op\t   50266 B/op\t     624 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 435644250,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7536,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.85,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.58,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.6,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4356,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1104554,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 50266,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 624,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1512471625,
            "unit": "ns/op\t         0.2467 %cpu_avg/op\t        13.52 %cpu_peak/op\t        54.60 %mem_avg/op\t        54.61 %mem_peak/op\t         1.512 cpu_seconds/op\t   2764800 disk_bytes/op\t  146552 B/op\t    2041 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1512471625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2467,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.52,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.6,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.61,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.512,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2764800,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 146552,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2041,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d32702cffecad670fd197110214629bc33a245b5",
          "message": "ci(deps): bump the github-actions group across 1 directory with 13 updates (#1748)\n\nBumps the github-actions group with 13 updates in the / directory:\n\n| Package | From | To |\n| --- | --- | --- |\n| [actions/checkout](https://github.com/actions/checkout) | `4` | `6` |\n| [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark) | `1.20.7` | `1.22.1` |\n| [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) | `4.2.1` | `6.2.0` |\n| [actions/setup-go](https://github.com/actions/setup-go) | `5.5.0` | `6.4.0` |\n| [actions/setup-python](https://github.com/actions/setup-python) | `5` | `6` |\n| [nick-fields/retry](https://github.com/nick-fields/retry) | `3` | `4` |\n| [golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action) | `9.2.0` | `9.2.1` |\n| [WyriHaximus/github-action-get-previous-tag](https://github.com/wyrihaximus/github-action-get-previous-tag) | `1.4.0` | `2.0.0` |\n| [actions/upload-artifact](https://github.com/actions/upload-artifact) | `6.0.0` | `7.0.1` |\n| [googleapis/release-please-action](https://github.com/googleapis/release-please-action) | `4.4.0` | `5.0.0` |\n| [peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request) | `8.0.0` | `8.1.1` |\n| [actions/download-artifact](https://github.com/actions/download-artifact) | `7.0.0` | `8.0.1` |\n| [softprops/action-gh-release](https://github.com/softprops/action-gh-release) | `2.5.0` | `3.0.0` |\n\n\n\nUpdates `actions/checkout` from 4 to 6\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\nUpdates `benchmark-action/github-action-benchmark` from 1.20.7 to 1.22.1\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/4bdcce38c94cec68da58d012ac24b7b1155efe8b...52576c92bccf6ac60c8223ec7eb2565637cae9ba)\n\nUpdates `aws-actions/configure-aws-credentials` from 4.2.1 to 6.2.0\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...e7f100cf4c008499ea8adda475de1042d6975c7b)\n\nUpdates `actions/setup-go` from 5.5.0 to 6.4.0\n- [Release notes](https://github.com/actions/setup-go/releases)\n- [Commits](https://github.com/actions/setup-go/compare/v5.5.0...4a3601121dd01d1626a1e23e37211e3254c1c06c)\n\nUpdates `actions/setup-python` from 5 to 6\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/v5...v6)\n\nUpdates `nick-fields/retry` from 3 to 4\n- [Release notes](https://github.com/nick-fields/retry/releases)\n- [Commits](https://github.com/nick-fields/retry/compare/v3...v4)\n\nUpdates `golangci/golangci-lint-action` from 9.2.0 to 9.2.1\n- [Release notes](https://github.com/golangci/golangci-lint-action/releases)\n- [Commits](https://github.com/golangci/golangci-lint-action/compare/1e7e51e771db61008b38414a730f564565cf7c20...82606bf257cbaff209d206a39f5134f0cfbfd2ee)\n\nUpdates `WyriHaximus/github-action-get-previous-tag` from 1.4.0 to 2.0.0\n- [Release notes](https://github.com/wyrihaximus/github-action-get-previous-tag/releases)\n- [Commits](https://github.com/wyrihaximus/github-action-get-previous-tag/compare/04e8485ecb6487243907e330d522ff60f02283ce...61819f33034117e6c686e6a31dba995a85afc9de)\n\nUpdates `actions/upload-artifact` from 6.0.0 to 7.0.1\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/b7c566a772e6b6bfb58ed0dc250532a479d7789f...043fb46d1a93c77aae656e7c1c64a875d1fc6a0a)\n\nUpdates `googleapis/release-please-action` from 4.4.0 to 5.0.0\n- [Release notes](https://github.com/googleapis/release-please-action/releases)\n- [Changelog](https://github.com/googleapis/release-please-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/googleapis/release-please-action/compare/16a9c90856f42705d54a6fda1823352bdc62cf38...45996ed1f6d02564a971a2fa1b5860e934307cf7)\n\nUpdates `peter-evans/create-pull-request` from 8.0.0 to 8.1.1\n- [Release notes](https://github.com/peter-evans/create-pull-request/releases)\n- [Commits](https://github.com/peter-evans/create-pull-request/compare/98357b18bf14b5342f975ff684046ec3b2a07725...5f6978faf089d4d20b00c7766989d076bb2fc7f1)\n\nUpdates `actions/download-artifact` from 7.0.0 to 8.0.1\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/37930b1c2abaa49bbe596cd826c3c89aef350131...3e5f45b2cfb9172054b4087a40e8e0b5a5461e7c)\n\nUpdates `softprops/action-gh-release` from 2.5.0 to 3.0.0\n- [Release notes](https://github.com/softprops/action-gh-release/releases)\n- [Changelog](https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/softprops/action-gh-release/compare/a06a81a03ee405af7f2048a818ed3f03bbf83c7b...b4309332981a82ec1c5618f44dd2e27cc8bfbfda)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/download-artifact\n  dependency-version: 8.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/setup-go\n  dependency-version: 6.4.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/setup-python\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/upload-artifact\n  dependency-version: 7.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: aws-actions/configure-aws-credentials\n  dependency-version: 6.1.1\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: golangci/golangci-lint-action\n  dependency-version: 9.2.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: googleapis/release-please-action\n  dependency-version: 5.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: nick-fields/retry\n  dependency-version: '4'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: peter-evans/create-pull-request\n  dependency-version: 8.1.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: softprops/action-gh-release\n  dependency-version: 3.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: WyriHaximus/github-action-get-previous-tag\n  dependency-version: 2.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-22T14:23:04-07:00",
          "tree_id": "113a09ce489e6e17cefe7a10cc15abd9bb2d3a2e",
          "url": "https://github.com/runfinch/finch/commit/d32702cffecad670fd197110214629bc33a245b5"
        },
        "date": 1782163685845,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 62325738625,
            "unit": "ns/op\t         1.120 %cpu_avg/op\t       100.0 %cpu_peak/op\t        54.32 %mem_avg/op\t        54.89 %mem_peak/op\t        62.33 cpu_seconds/op\t2391568384 disk_bytes/op\t 5418200 B/op\t   78981 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62325738625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.12,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 54.32,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.89,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 62.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2391568384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 5418200,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 78981,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15406826042,
            "unit": "ns/op\t         1.883 %cpu_avg/op\t        76.92 %cpu_peak/op\t        51.36 %mem_avg/op\t        54.37 %mem_peak/op\t        15.41 cpu_seconds/op\t   9383936 disk_bytes/op\t 1334744 B/op\t   19623 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15406826042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.883,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 76.92,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 51.36,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.37,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 9383936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1334744,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19623,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 416825958,
            "unit": "ns/op\t         2.193 %cpu_avg/op\t        48.43 %cpu_peak/op\t        54.77 %mem_avg/op\t        54.78 %mem_peak/op\t         0.4168 cpu_seconds/op\t   1368064 disk_bytes/op\t   49232 B/op\t     605 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 416825958,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.193,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 48.43,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.77,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.78,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4168,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1368064,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 49232,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 605,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1599736458,
            "unit": "ns/op\t         0.9380 %cpu_avg/op\t        37.50 %cpu_peak/op\t        54.76 %mem_avg/op\t        54.81 %mem_peak/op\t         1.600 cpu_seconds/op\t   4313088 disk_bytes/op\t  153776 B/op\t    2144 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1599736458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.938,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.76,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.81,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 4313088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 153776,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2144,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b55aa377c889741f7362b5b399b67a249de7d8fe",
          "message": "build(deps): bump go.opentelemetry.io/otel from 1.39.0 to 1.41.0 (#1741)\n\nBumps [go.opentelemetry.io/otel](https://github.com/open-telemetry/opentelemetry-go) from 1.39.0 to 1.41.0.\n- [Release notes](https://github.com/open-telemetry/opentelemetry-go/releases)\n- [Changelog](https://github.com/open-telemetry/opentelemetry-go/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/open-telemetry/opentelemetry-go/compare/v1.39.0...v1.41.0)\n\n---\nupdated-dependencies:\n- dependency-name: go.opentelemetry.io/otel\n  dependency-version: 1.41.0\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-22T15:07:14-07:00",
          "tree_id": "dea4a4ba1e9a42f7b754844c3d2cdac1d416917b",
          "url": "https://github.com/runfinch/finch/commit/b55aa377c889741f7362b5b399b67a249de7d8fe"
        },
        "date": 1782168660583,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 55330586625,
            "unit": "ns/op\t         0.4134 %cpu_avg/op\t        45.45 %cpu_peak/op\t        51.65 %mem_avg/op\t        54.95 %mem_peak/op\t        55.33 cpu_seconds/op\t2026434560 disk_bytes/op\t 4732048 B/op\t   70139 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 55330586625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4134,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 51.65,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 54.95,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 55.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2026434560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4732048,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 70139,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15228245000,
            "unit": "ns/op\t         0.4794 %cpu_avg/op\t        30.00 %cpu_peak/op\t        50.11 %mem_avg/op\t        54.02 %mem_peak/op\t        15.23 cpu_seconds/op\t  10653696 disk_bytes/op\t 1326976 B/op\t   19466 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15228245000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4794,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 50.11,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.02,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.23,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 10653696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1326976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19466,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 418442778,
            "unit": "ns/op\t         1.183 %cpu_avg/op\t        22.86 %cpu_peak/op\t        54.57 %mem_avg/op\t        54.62 %mem_peak/op\t         0.4184 cpu_seconds/op\t   1078613 disk_bytes/op\t   48997 B/op\t     604 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 418442778,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.183,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.86,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.57,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.62,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4184,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1078613,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48997,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 604,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1520689708,
            "unit": "ns/op\t         0.1489 %cpu_avg/op\t        13.31 %cpu_peak/op\t        54.61 %mem_avg/op\t        54.61 %mem_peak/op\t         1.521 cpu_seconds/op\t   2772992 disk_bytes/op\t  147472 B/op\t    2052 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1520689708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1489,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.31,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.61,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.61,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.521,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2772992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 147472,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2052,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73676d50be6e35461e1993aec066c3741c6be41e",
          "message": "build(deps): bump github.com/docker/cli from 29.2.0+incompatible to 29.5.3+incompatible in the docker group across 1 directory (#1667)\n\nbuild(deps): bump github.com/docker/cli\n\nBumps the docker group with 1 update in the / directory: [github.com/docker/cli](https://github.com/docker/cli).\n\n\nUpdates `github.com/docker/cli` from 29.2.0+incompatible to 29.5.3+incompatible\n- [Commits](https://github.com/docker/cli/compare/v29.2.0...v29.5.3)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/docker/cli\n  dependency-version: 29.1.4+incompatible\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: docker\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-22T15:07:26-07:00",
          "tree_id": "e6fda4146fde3969c36121a701da72373ef974bf",
          "url": "https://github.com/runfinch/finch/commit/73676d50be6e35461e1993aec066c3741c6be41e"
        },
        "date": 1782173307499,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 144538783875,
            "unit": "ns/op\t         0.2108 %cpu_avg/op\t        50.00 %cpu_peak/op\t        52.59 %mem_avg/op\t        55.43 %mem_peak/op\t       144.5 cpu_seconds/op\t2062610432 disk_bytes/op\t12416912 B/op\t  183534 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 144538783875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2108,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 52.59,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.43,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 144.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2062610432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12416912,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 183534,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15253669125,
            "unit": "ns/op\t         0.5285 %cpu_avg/op\t        33.33 %cpu_peak/op\t        48.81 %mem_avg/op\t        52.31 %mem_peak/op\t        15.25 cpu_seconds/op\t  12984320 disk_bytes/op\t 1325416 B/op\t   19445 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15253669125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5285,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 48.81,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 52.31,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 12984320,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1325416,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19445,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 409519667,
            "unit": "ns/op\t         1.035 %cpu_avg/op\t        27.78 %cpu_peak/op\t        54.41 %mem_avg/op\t        54.42 %mem_peak/op\t         0.4095 cpu_seconds/op\t   1090901 disk_bytes/op\t   48389 B/op\t     594 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 409519667,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.035,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 27.78,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 54.41,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 54.42,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4095,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1090901,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48389,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 594,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1672929000,
            "unit": "ns/op\t         0.2024 %cpu_avg/op\t        14.19 %cpu_peak/op\t        54.47 %mem_avg/op\t        54.49 %mem_peak/op\t         1.673 cpu_seconds/op\t   2777088 disk_bytes/op\t  158064 B/op\t    2228 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1672929000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2024,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 14.19,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 54.47,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 54.49,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.673,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2777088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 158064,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2228,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01120324ecea8225fbab782bbfd0d3a5f8077e3f",
          "message": "ci(deps): bump the github-actions group across 1 directory with 3 updates (#1767)\n\nBumps the github-actions group with 3 updates in the / directory: [actions/checkout](https://github.com/actions/checkout), [actions/setup-go](https://github.com/actions/setup-go) and [softprops/action-gh-release](https://github.com/softprops/action-gh-release).\n\n\nUpdates `actions/checkout` from 6 to 7\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Commits](https://github.com/actions/checkout/compare/v6...v7)\n\nUpdates `actions/setup-go` from 6.4.0 to 6.5.0\n- [Release notes](https://github.com/actions/setup-go/releases)\n- [Commits](https://github.com/actions/setup-go/compare/4a3601121dd01d1626a1e23e37211e3254c1c06c...924ae3a1cded613372ab5595356fb5720e22ba16)\n\nUpdates `softprops/action-gh-release` from 3.0.0 to 3.0.1\n- [Release notes](https://github.com/softprops/action-gh-release/releases)\n- [Changelog](https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/softprops/action-gh-release/compare/b4309332981a82ec1c5618f44dd2e27cc8bfbfda...718ea10b132b3b2eba29c1007bb80653f286566b)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '7'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/setup-go\n  dependency-version: 6.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: softprops/action-gh-release\n  dependency-version: 3.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-26T10:46:39-07:00",
          "tree_id": "c3ebeb536719f2496ec0103ed969fb8e5f3f189d",
          "url": "https://github.com/runfinch/finch/commit/01120324ecea8225fbab782bbfd0d3a5f8077e3f"
        },
        "date": 1782496233542,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 62119833959,
            "unit": "ns/op\t         0.4114 %cpu_avg/op\t        80.00 %cpu_peak/op\t        54.40 %mem_avg/op\t        55.66 %mem_peak/op\t        62.12 cpu_seconds/op\t2013011968 disk_bytes/op\t 5387400 B/op\t   78743 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62119833959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4114,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 80,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 54.4,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.66,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 62.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2013011968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 5387400,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 78743,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15321976750,
            "unit": "ns/op\t         0.4619 %cpu_avg/op\t        30.00 %cpu_peak/op\t        51.39 %mem_avg/op\t        54.77 %mem_peak/op\t        15.32 cpu_seconds/op\t  -1884160 disk_bytes/op\t 1333120 B/op\t   19562 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15321976750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4619,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 51.39,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.77,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -1884160,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1333120,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19562,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 424837472,
            "unit": "ns/op\t         0.8696 %cpu_avg/op\t        16.66 %cpu_peak/op\t        55.31 %mem_avg/op\t        55.32 %mem_peak/op\t         0.4248 cpu_seconds/op\t   1058133 disk_bytes/op\t   50424 B/op\t     620 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 424837472,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8696,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.66,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.31,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.32,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4248,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1058133,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 50424,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 620,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1438454084,
            "unit": "ns/op\t         0.5940 %cpu_avg/op\t        20.00 %cpu_peak/op\t        55.34 %mem_avg/op\t        55.37 %mem_peak/op\t         1.438 cpu_seconds/op\t   2613248 disk_bytes/op\t  135816 B/op\t    1941 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1438454084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.594,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.34,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.37,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.438,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2613248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 135816,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1941,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun",
            "username": "coderbirju"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bc57dabba7c4b44f6bfc69d9d7d53cfe69603bc",
          "message": "chore: update changelog approvers (#1759)\n\nchore: update chanelog approvers\n\nSigned-off-by: Arjun Yogidas <arjunry@amazon.com>",
          "timestamp": "2026-06-26T11:35:19-07:00",
          "tree_id": "58fb219e16919b030ac44931dfe13d00f56b7cb1",
          "url": "https://github.com/runfinch/finch/commit/6bc57dabba7c4b44f6bfc69d9d7d53cfe69603bc"
        },
        "date": 1782499144018,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 55119377000,
            "unit": "ns/op\t         0.4469 %cpu_avg/op\t        33.33 %cpu_peak/op\t        52.44 %mem_avg/op\t        55.46 %mem_peak/op\t        55.12 cpu_seconds/op\t2002681856 disk_bytes/op\t 4702936 B/op\t   69768 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 55119377000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4469,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 52.44,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.46,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 55.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2002681856,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4702936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 69768,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15331432750,
            "unit": "ns/op\t         0.5677 %cpu_avg/op\t        44.44 %cpu_peak/op\t        49.97 %mem_avg/op\t        54.49 %mem_peak/op\t        15.33 cpu_seconds/op\t  12075008 disk_bytes/op\t 1328536 B/op\t   19515 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15331432750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5677,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 49.97,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 54.49,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 12075008,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1328536,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19515,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 399286653,
            "unit": "ns/op\t         1.587 %cpu_avg/op\t        29.09 %cpu_peak/op\t        55.19 %mem_avg/op\t        55.21 %mem_peak/op\t         0.3992 cpu_seconds/op\t   1126400 disk_bytes/op\t   47898 B/op\t     584 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 399286653,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.587,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 29.09,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.19,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.21,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3992,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1126400,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 47898,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 584,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1606966417,
            "unit": "ns/op\t         0.7712 %cpu_avg/op\t        22.22 %cpu_peak/op\t        55.35 %mem_avg/op\t        55.37 %mem_peak/op\t         1.607 cpu_seconds/op\t   2605056 disk_bytes/op\t  152816 B/op\t    2139 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1606966417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.7712,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 22.22,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.35,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.37,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.607,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2605056,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 152816,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2139,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b328cd2825d95ba291acf4b0b20cc4572f54cb5",
          "message": "build(deps): bump github.com/containerd/containerd/v2 from 2.2.4 to 2.2.5 (#1763)\n\nbuild(deps): bump github.com/containerd/containerd/v2\n\nBumps [github.com/containerd/containerd/v2](https://github.com/containerd/containerd) from 2.2.4 to 2.2.5.\n- [Release notes](https://github.com/containerd/containerd/releases)\n- [Changelog](https://github.com/containerd/containerd/blob/main/RELEASES.md)\n- [Commits](https://github.com/containerd/containerd/compare/v2.2.4...v2.2.5)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/containerd/containerd/v2\n  dependency-version: 2.2.5\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-26T19:51:46-07:00",
          "tree_id": "a38c99e3bd70c15a8b5efd652a5b9fb61be2a5f2",
          "url": "https://github.com/runfinch/finch/commit/1b328cd2825d95ba291acf4b0b20cc4572f54cb5"
        },
        "date": 1782529032078,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 145073080709,
            "unit": "ns/op\t         0.2015 %cpu_avg/op\t        58.33 %cpu_peak/op\t        54.40 %mem_avg/op\t        55.60 %mem_peak/op\t       145.1 cpu_seconds/op\t2056114176 disk_bytes/op\t12457504 B/op\t  184154 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 145073080709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2015,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 54.4,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.6,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 145.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2056114176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 12457504,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 184154,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15543183917,
            "unit": "ns/op\t         0.5105 %cpu_avg/op\t        27.27 %cpu_peak/op\t        52.21 %mem_avg/op\t        55.29 %mem_peak/op\t        15.54 cpu_seconds/op\t   7016448 disk_bytes/op\t 1348160 B/op\t   19809 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15543183917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5105,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 52.21,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 55.29,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 7016448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1348160,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19809,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 389947514,
            "unit": "ns/op\t         1.194 %cpu_avg/op\t        22.56 %cpu_peak/op\t        55.47 %mem_avg/op\t        55.47 %mem_peak/op\t         0.3899 cpu_seconds/op\t   1077248 disk_bytes/op\t   47408 B/op\t     575 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 389947514,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.194,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.56,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.47,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.47,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3899,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1077248,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 47408,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 575,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1481836417,
            "unit": "ns/op\t         0.8680 %cpu_avg/op\t        60.00 %cpu_peak/op\t        55.47 %mem_avg/op\t        55.47 %mem_peak/op\t         1.482 cpu_seconds/op\t   2846720 disk_bytes/op\t  138704 B/op\t    1986 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1481836417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.868,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.47,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.47,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.482,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2846720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 138704,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1986,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "979aad85cb64c926ab525dda193c2d27a49e62a5",
          "message": "build(deps): bump github.com/docker/cli from 29.5.3+incompatible to 29.6.0+incompatible in the docker group (#1764)\n\nbuild(deps): bump github.com/docker/cli in the docker group\n\nBumps the docker group with 1 update: [github.com/docker/cli](https://github.com/docker/cli).\n\n\nUpdates `github.com/docker/cli` from 29.5.3+incompatible to 29.6.0+incompatible\n- [Commits](https://github.com/docker/cli/compare/v29.5.3...v29.6.0)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/docker/cli\n  dependency-version: 29.6.0+incompatible\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: docker\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-26T21:30:06-07:00",
          "tree_id": "e8f8d21a94921989aedaed07ce082c298b8e3036",
          "url": "https://github.com/runfinch/finch/commit/979aad85cb64c926ab525dda193c2d27a49e62a5"
        },
        "date": 1782537380536,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 56151745833,
            "unit": "ns/op\t         0.4237 %cpu_avg/op\t        44.44 %cpu_peak/op\t        53.17 %mem_avg/op\t        55.82 %mem_peak/op\t        56.15 cpu_seconds/op\t2020618240 disk_bytes/op\t 4787776 B/op\t   71032 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 56151745833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4237,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 53.17,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 55.82,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 56.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2020618240,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4787776,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 71032,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 15408724083,
            "unit": "ns/op\t         0.5941 %cpu_avg/op\t        60.00 %cpu_peak/op\t        51.42 %mem_avg/op\t        55.28 %mem_peak/op\t        15.41 cpu_seconds/op\t  20103168 disk_bytes/op\t 1342312 B/op\t   19699 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 15408724083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5941,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 51.42,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 55.28,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 15.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20103168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1342312,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19699,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 416679403,
            "unit": "ns/op\t         1.522 %cpu_avg/op\t        33.79 %cpu_peak/op\t        55.36 %mem_avg/op\t        55.46 %mem_peak/op\t         0.4166 cpu_seconds/op\t   1094997 disk_bytes/op\t   48781 B/op\t     600 allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 416679403,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.522,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 33.79,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 55.36,
            "unit": "%mem_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 55.46,
            "unit": "%mem_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4166,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1094997,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 48781,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 600,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1494822000,
            "unit": "ns/op\t         0.9829 %cpu_avg/op\t        36.36 %cpu_peak/op\t        55.51 %mem_avg/op\t        55.52 %mem_peak/op\t         1.495 cpu_seconds/op\t   2813952 disk_bytes/op\t  145864 B/op\t    2016 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1494822000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.9829,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 55.51,
            "unit": "%mem_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 55.52,
            "unit": "%mem_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.495,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2813952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 145864,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2016,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      }
    ]
  }
}