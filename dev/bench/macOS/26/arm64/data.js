window.BENCHMARK_DATA = {
  "lastUpdate": 1775757995216,
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
      }
    ]
  }
}