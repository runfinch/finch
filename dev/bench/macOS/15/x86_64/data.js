window.BENCHMARK_DATA = {
  "lastUpdate": 1769036719267,
  "repoUrl": "https://github.com/runfinch/finch",
  "entries": {
    "Finch Benchmark": [
      {
        "commit": {
          "author": {
            "email": "47723536+Shubhranshu153@users.noreply.github.com",
            "name": "Subhransu",
            "username": "Shubhranshu153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71ea4dbe2dfe8aeeaba20601f5dd937ff7903229",
          "message": "chore: deprecate macos 13 runners (#1607)\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2025-10-27T10:33:21-07:00",
          "tree_id": "59b367905464f85fd3badfa0b6cbcd1fc6e1b915",
          "url": "https://github.com/runfinch/finch/commit/71ea4dbe2dfe8aeeaba20601f5dd937ff7903229"
        },
        "date": 1761587412913,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81940787595,
            "unit": "ns/op\t         0.3445 %cpu_avg/op\t        54.55 %cpu_peak/op\t        81.94 cpu_seconds/op\t2010316800 disk_bytes/op\t 3861784 B/op\t   73425 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81940787595,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3445,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 54.55,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2010316800,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3861784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 73425,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 627617878,
            "unit": "ns/op\t         0.3154 %cpu_avg/op\t        13.81 %cpu_peak/op\t         0.6276 cpu_seconds/op\t   9254912 disk_bytes/op\t   41056 B/op\t     627 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 627617878,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3154,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.81,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6276,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 9254912,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41056,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 627,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1396864543,
            "unit": "ns/op\t         0.4321 %cpu_avg/op\t        15.38 %cpu_peak/op\t         1.397 cpu_seconds/op\t   2555904 disk_bytes/op\t   76192 B/op\t    1330 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1396864543,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4321,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.397,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2555904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 76192,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1330,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47723536+Shubhranshu153@users.noreply.github.com",
            "name": "Subhransu",
            "username": "Shubhranshu153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95939feb3c1724030425d0a74e89704c5a020ba4",
          "message": "feat: Override Runc Version (#1611)\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2025-10-30T14:39:33-07:00",
          "tree_id": "39dc597d110e12dd7239379ceba62cf7e936d94b",
          "url": "https://github.com/runfinch/finch/commit/95939feb3c1724030425d0a74e89704c5a020ba4"
        },
        "date": 1761862313387,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 83586317056,
            "unit": "ns/op\t         0.3205 %cpu_avg/op\t        37.50 %cpu_peak/op\t        83.59 cpu_seconds/op\t2029215744 disk_bytes/op\t 3941856 B/op\t   75068 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 83586317056,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3205,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 83.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2029215744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3941856,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 75068,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28318290828,
            "unit": "ns/op\t         0.3792 %cpu_avg/op\t        41.67 %cpu_peak/op\t        28.32 cpu_seconds/op\t  20766720 disk_bytes/op\t 1312328 B/op\t   25422 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28318290828,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3792,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20766720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1312328,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25422,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 618131548,
            "unit": "ns/op\t         0.3238 %cpu_avg/op\t         7.143 %cpu_peak/op\t         0.6181 cpu_seconds/op\t   1232896 disk_bytes/op\t   40848 B/op\t     623 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 618131548,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3238,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 7.143,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6181,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1232896,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 40848,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 623,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1315941382,
            "unit": "ns/op\t         0.1715 %cpu_avg/op\t        11.76 %cpu_peak/op\t         1.316 cpu_seconds/op\t   2555904 disk_bytes/op\t   73480 B/op\t    1264 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1315941382,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1715,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 11.76,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.316,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2555904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 73480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1264,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "b22fda93e5e6af58d1a7b320d8921f26898f9bfc",
          "message": "ci(deps): bump aws-actions/configure-aws-credentials from 5.0.0 to 5.1.0 (#1578)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 5.0.0 to 5.1.0.\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/a03048d87541d1d9fcf2ecf528a4a65ba9bd7838...00943011d9042930efac3dcd3a170e4273319bc8)\n\n---\nupdated-dependencies:\n- dependency-name: aws-actions/configure-aws-credentials\n  dependency-version: 5.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-03T16:16:59-08:00",
          "tree_id": "5f7ff4b1d559230265461a83fbe87112a3c19068",
          "url": "https://github.com/runfinch/finch/commit/b22fda93e5e6af58d1a7b320d8921f26898f9bfc"
        },
        "date": 1762215743254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 83143189934,
            "unit": "ns/op\t         0.3378 %cpu_avg/op\t        61.11 %cpu_peak/op\t        83.14 cpu_seconds/op\t2021019648 disk_bytes/op\t 3915152 B/op\t   74524 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 83143189934,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3378,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 61.11,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 83.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2021019648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3915152,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 74524,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27889421220,
            "unit": "ns/op\t         0.3820 %cpu_avg/op\t        46.15 %cpu_peak/op\t        27.89 cpu_seconds/op\t  18931712 disk_bytes/op\t 1291136 B/op\t   24979 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27889421220,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.382,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18931712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1291136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24979,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 627946962,
            "unit": "ns/op\t         0.2191 %cpu_avg/op\t         8.712 %cpu_peak/op\t         0.6279 cpu_seconds/op\t   1249280 disk_bytes/op\t   41172 B/op\t     632 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 627946962,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2191,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.712,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6279,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1249280,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41172,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 632,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1384990197,
            "unit": "ns/op\t         0.5565 %cpu_avg/op\t        25.00 %cpu_peak/op\t         1.385 cpu_seconds/op\t   2478080 disk_bytes/op\t   77360 B/op\t    1339 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1384990197,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5565,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.385,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2478080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 77360,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1339,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47723536+Shubhranshu153@users.noreply.github.com",
            "name": "Subhransu",
            "username": "Shubhranshu153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98824722a93c9c166a817f1c45ad1914535a7549",
          "message": "fix: fix yaml char in windows (#1616)\n\nfix: fix yaml char\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2025-11-04T09:30:56-08:00",
          "tree_id": "1816ea19b14eeb75138e6f6ed89a218595daba48",
          "url": "https://github.com/runfinch/finch/commit/98824722a93c9c166a817f1c45ad1914535a7549"
        },
        "date": 1762277765818,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79780004548,
            "unit": "ns/op\t         0.3152 %cpu_avg/op\t        57.14 %cpu_peak/op\t        79.78 cpu_seconds/op\t1839964160 disk_bytes/op\t 3708312 B/op\t   71697 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79780004548,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3152,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1839964160,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3708312,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 71697,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28049104888,
            "unit": "ns/op\t         0.3767 %cpu_avg/op\t        30.77 %cpu_peak/op\t        28.05 cpu_seconds/op\t  24100864 disk_bytes/op\t 1301872 B/op\t   25203 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28049104888,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3767,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24100864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1301872,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25203,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 628711986,
            "unit": "ns/op\t         0.2137 %cpu_avg/op\t         4.167 %cpu_peak/op\t         0.6287 cpu_seconds/op\t   1282048 disk_bytes/op\t   40772 B/op\t     622 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 628711986,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2137,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 4.167,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6287,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1282048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 40772,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 622,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1312098174,
            "unit": "ns/op\t         0.7187 %cpu_avg/op\t        21.43 %cpu_peak/op\t         1.312 cpu_seconds/op\t   2441216 disk_bytes/op\t   72536 B/op\t    1258 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1312098174,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.7187,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 21.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.312,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2441216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 72536,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1258,
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
          "id": "4df2f2624da03e31bb171ae249cab8c9c42d7919",
          "message": "build(deps): Bump submodules and dependencies (#1614)\n\n[create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: Shubhranshu153 <47723536+Shubhranshu153@users.noreply.github.com>",
          "timestamp": "2025-11-04T14:33:13-08:00",
          "tree_id": "36332ee08e6c210f3360f643573706325d859333",
          "url": "https://github.com/runfinch/finch/commit/4df2f2624da03e31bb171ae249cab8c9c42d7919"
        },
        "date": 1762295904396,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80535840690,
            "unit": "ns/op\t         0.2798 %cpu_avg/op\t        42.86 %cpu_peak/op\t        80.54 cpu_seconds/op\t2016780288 disk_bytes/op\t 3805904 B/op\t   72273 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80535840690,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2798,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2016780288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3805904,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 72273,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 31317603629,
            "unit": "ns/op\t         0.3160 %cpu_avg/op\t        28.57 %cpu_peak/op\t        31.32 cpu_seconds/op\t  13172736 disk_bytes/op\t 1470464 B/op\t   28109 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31317603629,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.316,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 28.57,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 13172736,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1470464,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28109,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 624332621,
            "unit": "ns/op\t         0.8675 %cpu_avg/op\t        24.05 %cpu_peak/op\t         0.6243 cpu_seconds/op\t  10313728 disk_bytes/op\t   41496 B/op\t     630 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 624332621,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8675,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.05,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6243,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10313728,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41496,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 630,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1418187009,
            "unit": "ns/op\t         0.3722 %cpu_avg/op\t        15.38 %cpu_peak/op\t         1.418 cpu_seconds/op\t   2543616 disk_bytes/op\t   78928 B/op\t    1348 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1418187009,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3722,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.418,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2543616,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 78928,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1348,
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
          "id": "1a9c1998acec554bbe2cd08afc86b21ff4fa8346",
          "message": "build(deps): Bump submodules and dependencies (#1617)\n\n* [create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\n\n* chore: upgrade runc version to v1.3.3\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>\n\n---------\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>\nCo-authored-by: Shubhranshu153 <47723536+Shubhranshu153@users.noreply.github.com>\nCo-authored-by: Shubhranshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2025-11-05T10:45:34-05:00",
          "tree_id": "7e4d3fbb419f3be20ed3d75cbbab2162e6b42004",
          "url": "https://github.com/runfinch/finch/commit/1a9c1998acec554bbe2cd08afc86b21ff4fa8346"
        },
        "date": 1762357899475,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 82099311083,
            "unit": "ns/op\t         0.3191 %cpu_avg/op\t        52.94 %cpu_peak/op\t        82.10 cpu_seconds/op\t2021965824 disk_bytes/op\t 3882080 B/op\t   73695 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82099311083,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3191,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 52.94,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 82.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2021965824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3882080,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 73695,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28291027668,
            "unit": "ns/op\t         0.3625 %cpu_avg/op\t        45.45 %cpu_peak/op\t        28.29 cpu_seconds/op\t  30064640 disk_bytes/op\t 1310528 B/op\t   25402 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28291027668,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3625,
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
            "value": 28.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 30064640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1310528,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25402,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 624559926,
            "unit": "ns/op\t         0.5489 %cpu_avg/op\t        20.59 %cpu_peak/op\t         0.6245 cpu_seconds/op\t   1212416 disk_bytes/op\t   40808 B/op\t     626 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 624559926,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5489,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.59,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6245,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1212416,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 40808,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 626,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1408455364,
            "unit": "ns/op\t         0.5668 %cpu_avg/op\t        25.00 %cpu_peak/op\t         1.408 cpu_seconds/op\t   2543616 disk_bytes/op\t   79568 B/op\t    1355 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1408455364,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5668,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.408,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2543616,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 79568,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1355,
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
          "id": "bb9c9d5568b00db48dd8de56b7271f253a616b06",
          "message": "chore(main): release 1.13.0 (#1604)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-05T09:26:40-08:00",
          "tree_id": "8eb98fd982b233a82ac50e47d76682b61e528456",
          "url": "https://github.com/runfinch/finch/commit/bb9c9d5568b00db48dd8de56b7271f253a616b06"
        },
        "date": 1762363910168,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80151014664,
            "unit": "ns/op\t         0.3802 %cpu_avg/op\t        58.82 %cpu_peak/op\t        80.15 cpu_seconds/op\t2030239744 disk_bytes/op\t 3798504 B/op\t   72010 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80151014664,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3802,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.82,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2030239744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3798504,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 72010,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28041171310,
            "unit": "ns/op\t         0.4249 %cpu_avg/op\t        50.00 %cpu_peak/op\t        28.04 cpu_seconds/op\t  15413248 disk_bytes/op\t 1301048 B/op\t   25185 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28041171310,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4249,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 15413248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1301048,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25185,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 635252805,
            "unit": "ns/op\t         0.4014 %cpu_avg/op\t        10.83 %cpu_peak/op\t         0.6352 cpu_seconds/op\t   1224704 disk_bytes/op\t   41872 B/op\t     638 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 635252805,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4014,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.83,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6352,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1224704,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41872,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 638,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1317692781,
            "unit": "ns/op\t         1.171 %cpu_avg/op\t        46.15 %cpu_peak/op\t         1.318 cpu_seconds/op\t   2555904 disk_bytes/op\t   74704 B/op\t    1278 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1317692781,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.171,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.318,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2555904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 74704,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1278,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "b537d8cb7035db56b36f66e6b8161a9f08616bfc",
          "message": "build(deps): bump github.com/containerd/containerd/v2 from 2.1.4 to 2.1.5 (#1618)\n\nbuild(deps): bump github.com/containerd/containerd/v2\n\nBumps [github.com/containerd/containerd/v2](https://github.com/containerd/containerd) from 2.1.4 to 2.1.5.\n- [Release notes](https://github.com/containerd/containerd/releases)\n- [Changelog](https://github.com/containerd/containerd/blob/main/RELEASES.md)\n- [Commits](https://github.com/containerd/containerd/compare/v2.1.4...v2.1.5)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/containerd/containerd/v2\n  dependency-version: 2.1.5\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-06T10:22:49-08:00",
          "tree_id": "73291f28eb0c307bf4c4216c96676dad75aa776a",
          "url": "https://github.com/runfinch/finch/commit/b537d8cb7035db56b36f66e6b8161a9f08616bfc"
        },
        "date": 1762453687648,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81678800656,
            "unit": "ns/op\t         0.3674 %cpu_avg/op\t        50.00 %cpu_peak/op\t        81.68 cpu_seconds/op\t2023292928 disk_bytes/op\t 3863552 B/op\t   73416 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81678800656,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3674,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.68,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2023292928,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3863552,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 73416,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27891205713,
            "unit": "ns/op\t         0.5572 %cpu_avg/op\t        50.00 %cpu_peak/op\t        27.89 cpu_seconds/op\t  19193856 disk_bytes/op\t 1290488 B/op\t   24978 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27891205713,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5572,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 19193856,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1290488,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24978,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 609029749,
            "unit": "ns/op\t         0.3784 %cpu_avg/op\t        17.14 %cpu_peak/op\t         0.6090 cpu_seconds/op\t   1241088 disk_bytes/op\t   40696 B/op\t     620 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 609029749,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3784,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.14,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.609,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1241088,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 40696,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 620,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1814220357,
            "unit": "ns/op\t         0.4143 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.814 cpu_seconds/op\t   2568192 disk_bytes/op\t   98544 B/op\t    1721 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1814220357,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4143,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 23.08,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.814,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2568192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 98544,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1721,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47723536+Shubhranshu153@users.noreply.github.com",
            "name": "Subhransu",
            "username": "Shubhranshu153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8fff6f87723bb96160cd14b9b9fad39d05d7c463",
          "message": "chore: Upgrade selinux version to 1.13.0 (#1620)\n\n* chore: Upgrade selinux version to 1.13.0\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>\n\n* chore: add MPL 2.0 license to the allowlist\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>\n\n---------\n\nSigned-off-by: Shubhranshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2025-11-10T06:33:23-08:00",
          "tree_id": "7a0a72e7d36161615ea4403554e7d918404a304c",
          "url": "https://github.com/runfinch/finch/commit/8fff6f87723bb96160cd14b9b9fad39d05d7c463"
        },
        "date": 1762785544276,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80671249048,
            "unit": "ns/op\t         0.3340 %cpu_avg/op\t        38.89 %cpu_peak/op\t        80.67 cpu_seconds/op\t2033119232 disk_bytes/op\t 3819280 B/op\t   72428 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80671249048,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.334,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 38.89,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.67,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2033119232,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3819280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 72428,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27749449267,
            "unit": "ns/op\t         0.3828 %cpu_avg/op\t        53.85 %cpu_peak/op\t        27.75 cpu_seconds/op\t  18448384 disk_bytes/op\t 1288432 B/op\t   24918 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27749449267,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3828,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18448384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1288432,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24918,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 618809917,
            "unit": "ns/op\t         0.7445 %cpu_avg/op\t        18.80 %cpu_peak/op\t         0.6188 cpu_seconds/op\t   1232896 disk_bytes/op\t   41516 B/op\t     628 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 618809917,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7445,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.8,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6188,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1232896,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41516,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 628,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1388399982,
            "unit": "ns/op\t         0.1901 %cpu_avg/op\t        15.38 %cpu_peak/op\t         1.388 cpu_seconds/op\t   2584576 disk_bytes/op\t   78104 B/op\t    1348 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1388399982,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1901,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.388,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2584576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 78104,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1348,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "1a7491acccc09494f713369e079058d547ec6854",
          "message": "chore: pass github secrets from top level workflow (#1597)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2025-11-17T12:59:47-08:00",
          "tree_id": "0bb57fe2d6f211f65acc9e5d20be20794403571b",
          "url": "https://github.com/runfinch/finch/commit/1a7491acccc09494f713369e079058d547ec6854"
        },
        "date": 1763413550984,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81450832064,
            "unit": "ns/op\t         0.3385 %cpu_avg/op\t        61.54 %cpu_peak/op\t        81.45 cpu_seconds/op\t2032717824 disk_bytes/op\t 3863272 B/op\t   73285 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81450832064,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3385,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 61.54,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2032717824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3863272,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 73285,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28134688777,
            "unit": "ns/op\t         0.4504 %cpu_avg/op\t        53.33 %cpu_peak/op\t        28.13 cpu_seconds/op\t  18948096 disk_bytes/op\t 1307256 B/op\t   25332 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28134688777,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4504,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 53.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18948096,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1307256,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25332,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 620979256,
            "unit": "ns/op\t         0.1530 %cpu_avg/op\t         8.712 %cpu_peak/op\t         0.6209 cpu_seconds/op\t   1294336 disk_bytes/op\t   41024 B/op\t     627 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 620979256,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.153,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.712,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6209,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1294336,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41024,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 627,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1337455645,
            "unit": "ns/op\t         0.2580 %cpu_avg/op\t         9.114 %cpu_peak/op\t         1.337 cpu_seconds/op\t   2498560 disk_bytes/op\t   75040 B/op\t    1291 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1337455645,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.258,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 9.114,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.337,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2498560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 75040,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1291,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "0fb53f68e3926a2533d5cc7ce27ce42115848bf7",
          "message": "ci: create internal release tag only once per release run (#1598)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2025-11-17T13:31:54-08:00",
          "tree_id": "7140f3cfab53be31f69968d079da2eb6fb1efe3a",
          "url": "https://github.com/runfinch/finch/commit/0fb53f68e3926a2533d5cc7ce27ce42115848bf7"
        },
        "date": 1763415461559,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 82307663739,
            "unit": "ns/op\t         0.3448 %cpu_avg/op\t        53.85 %cpu_peak/op\t        82.31 cpu_seconds/op\t2024140800 disk_bytes/op\t 3882184 B/op\t   73779 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82307663739,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3448,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 82.31,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2024140800,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3882184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 73779,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27834641935,
            "unit": "ns/op\t         0.3564 %cpu_avg/op\t        50.00 %cpu_peak/op\t        27.83 cpu_seconds/op\t  21979136 disk_bytes/op\t 1287944 B/op\t   24944 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27834641935,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3564,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.83,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 21979136,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1287944,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24944,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 628833824,
            "unit": "ns/op\t         0.5039 %cpu_avg/op\t        18.68 %cpu_peak/op\t         0.6288 cpu_seconds/op\t   1230848 disk_bytes/op\t   41276 B/op\t     632 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 628833824,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5039,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.68,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6288,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1230848,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 41276,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 632,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1363725355,
            "unit": "ns/op\t         0.3749 %cpu_avg/op\t        14.29 %cpu_peak/op\t         1.364 cpu_seconds/op\t   2572288 disk_bytes/op\t   74912 B/op\t    1307 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1363725355,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3749,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 14.29,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.364,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2572288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 74912,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1307,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "runfinch",
            "username": "runfinch"
          },
          "committer": {
            "name": "runfinch",
            "username": "runfinch"
          },
          "id": "f92e3ed4cbb8208d5d3d5ab84a265050ffe98989",
          "message": "fix(ci): add github token to benchmark workflow",
          "timestamp": "2025-11-25T19:03:31Z",
          "url": "https://github.com/runfinch/finch/pull/1629/commits/f92e3ed4cbb8208d5d3d5ab84a265050ffe98989"
        },
        "date": 1764100114179,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79323177433,
            "unit": "ns/op\t         0.3166 %cpu_avg/op\t        69.23 %cpu_peak/op\t        22.03 %mem_avg/op\t        26.38 %mem_peak/op\t        79.32 cpu_seconds/op\t2023452672 disk_bytes/op\t 7159608 B/op\t  106453 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79323177433,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3166,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 69.23,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.03,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.38,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2023452672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7159608,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 106453,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28263432382,
            "unit": "ns/op\t         0.5153 %cpu_avg/op\t        53.85 %cpu_peak/op\t        21.26 %mem_avg/op\t        24.20 %mem_peak/op\t        28.26 cpu_seconds/op\t  20480000 disk_bytes/op\t 2541472 B/op\t   37949 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28263432382,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5153,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.26,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.2,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20480000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2541472,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37949,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 622679712,
            "unit": "ns/op\t         0.1515 %cpu_avg/op\t         8.712 %cpu_peak/op\t        26.98 %mem_avg/op\t        26.98 %mem_peak/op\t         0.6226 cpu_seconds/op\t   9342976 disk_bytes/op\t   69988 B/op\t     937 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 622679712,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.1515,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.712,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.98,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.98,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6226,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 9342976,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 69988,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 937,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1346389121,
            "unit": "ns/op\t         0.6516 %cpu_avg/op\t        23.53 %cpu_peak/op\t        27.00 %mem_avg/op\t        27.02 %mem_peak/op\t         1.346 cpu_seconds/op\t   2560000 disk_bytes/op\t  135912 B/op\t    1935 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1346389121,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6516,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 23.53,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.02,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.346,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2560000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 135912,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1935,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "7c684d1a529a3b617151a1739ed1aaaecc36ffd5",
          "message": "ci: revert alert comment in benchmark workflow (#1629)\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>",
          "timestamp": "2025-12-08T14:03:23-08:00",
          "tree_id": "5b2838572552eb88cdcfc7a847f6fd01cd03ccf2",
          "url": "https://github.com/runfinch/finch/commit/7c684d1a529a3b617151a1739ed1aaaecc36ffd5"
        },
        "date": 1765232274060,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81156833621,
            "unit": "ns/op\t         0.2654 %cpu_avg/op\t        58.33 %cpu_peak/op\t        23.17 %mem_avg/op\t        27.68 %mem_peak/op\t        81.16 cpu_seconds/op\t2027147264 disk_bytes/op\t 7448304 B/op\t  108774 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81156833621,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2654,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.17,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.68,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2027147264,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7448304,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108774,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30923165574,
            "unit": "ns/op\t         0.4073 %cpu_avg/op\t        53.33 %cpu_peak/op\t        22.53 %mem_avg/op\t        25.56 %mem_peak/op\t        30.92 cpu_seconds/op\t  18587648 disk_bytes/op\t 2822112 B/op\t   41505 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30923165574,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4073,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 53.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 22.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 25.56,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18587648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2822112,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41505,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 630033810,
            "unit": "ns/op\t         0.3417 %cpu_avg/op\t        19.64 %cpu_peak/op\t        27.38 %mem_avg/op\t        27.39 %mem_peak/op\t         0.6300 cpu_seconds/op\t   1232896 disk_bytes/op\t   68352 B/op\t     919 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 630033810,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3417,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.64,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.38,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.39,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.63,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1232896,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68352,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 919,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1371885359,
            "unit": "ns/op\t         0.6020 %cpu_avg/op\t        20.00 %cpu_peak/op\t        27.39 %mem_avg/op\t        27.42 %mem_peak/op\t         1.372 cpu_seconds/op\t   2543616 disk_bytes/op\t  135176 B/op\t    1941 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1371885359,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.602,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.39,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.42,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.372,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2543616,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 135176,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1941,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55555210+sondavidb@users.noreply.github.com",
            "name": "David Son",
            "username": "sondavidb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "468983ab5c37872b3951c76f2dfcdb2c828ab0d7",
          "message": "feat: add journalctl logs to support-bundle (#1630)\n\nSigned-off-by: David Son <davbson@amazon.com>",
          "timestamp": "2025-12-09T10:57:02-08:00",
          "tree_id": "e201a4b202627b067a150e3e98c42a8a34a59221",
          "url": "https://github.com/runfinch/finch/commit/468983ab5c37872b3951c76f2dfcdb2c828ab0d7"
        },
        "date": 1765306919557,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76294072150,
            "unit": "ns/op\t         0.3169 %cpu_avg/op\t        53.85 %cpu_peak/op\t        21.58 %mem_avg/op\t        25.85 %mem_peak/op\t        76.29 cpu_seconds/op\t2027855872 disk_bytes/op\t 6935168 B/op\t  102925 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 76294072150,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3169,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.58,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 25.85,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 76.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2027855872,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 6935168,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 102925,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27769721303,
            "unit": "ns/op\t         0.3959 %cpu_avg/op\t        50.00 %cpu_peak/op\t        20.58 %mem_avg/op\t        23.54 %mem_peak/op\t        27.77 cpu_seconds/op\t  17555456 disk_bytes/op\t 2497128 B/op\t   37244 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27769721303,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3959,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.58,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 23.54,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17555456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2497128,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37244,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 661830288,
            "unit": "ns/op\t         0.2096 %cpu_avg/op\t        12.66 %cpu_peak/op\t        25.91 %mem_avg/op\t        25.92 %mem_peak/op\t         0.6618 cpu_seconds/op\t   1261568 disk_bytes/op\t   71448 B/op\t     965 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 661830288,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2096,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.66,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 25.91,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 25.92,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6618,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1261568,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 71448,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 965,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1449584190,
            "unit": "ns/op\t         0.1186 %cpu_avg/op\t         8.333 %cpu_peak/op\t        25.89 %mem_avg/op\t        25.93 %mem_peak/op\t         1.450 cpu_seconds/op\t   2486272 disk_bytes/op\t  148320 B/op\t    2079 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1449584190,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1186,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 8.333,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 25.89,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 25.93,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2486272,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 148320,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2079,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "b7e4eec75b97a10b63dfcd0f3687b2980a852dbe",
          "message": "build(deps): bump github.com/containernetworking/plugins from 1.8.0 to 1.9.0 (#1636)\n\nbuild(deps): bump github.com/containernetworking/plugins\n\nBumps [github.com/containernetworking/plugins](https://github.com/containernetworking/plugins) from 1.8.0 to 1.9.0.\n- [Release notes](https://github.com/containernetworking/plugins/releases)\n- [Commits](https://github.com/containernetworking/plugins/compare/v1.8.0...v1.9.0)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/containernetworking/plugins\n  dependency-version: 1.9.0\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-12T11:01:37-08:00",
          "tree_id": "43bb8f82c1abaca06a5c1a9b9ea6c1325e7911d0",
          "url": "https://github.com/runfinch/finch/commit/b7e4eec75b97a10b63dfcd0f3687b2980a852dbe"
        },
        "date": 1765566930227,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79218979484,
            "unit": "ns/op\t         0.3530 %cpu_avg/op\t        45.45 %cpu_peak/op\t        21.68 %mem_avg/op\t        26.08 %mem_peak/op\t        79.22 cpu_seconds/op\t2023636992 disk_bytes/op\t 7154840 B/op\t  106441 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79218979484,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.353,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.68,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.08,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2023636992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7154840,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 106441,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27450499757,
            "unit": "ns/op\t         0.4021 %cpu_avg/op\t        50.00 %cpu_peak/op\t        20.94 %mem_avg/op\t        24.10 %mem_peak/op\t        27.45 cpu_seconds/op\t  25407488 disk_bytes/op\t 2471280 B/op\t   36825 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27450499757,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4021,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.94,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.1,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 25407488,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2471280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 36825,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 639634516,
            "unit": "ns/op\t         0.2762 %cpu_avg/op\t        16.03 %cpu_peak/op\t        25.73 %mem_avg/op\t        25.74 %mem_peak/op\t         0.6396 cpu_seconds/op\t   1263616 disk_bytes/op\t   70016 B/op\t     940 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 639634516,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2762,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.03,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 25.73,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 25.74,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6396,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1263616,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 70016,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 940,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1357686667,
            "unit": "ns/op\t         0.5870 %cpu_avg/op\t        23.53 %cpu_peak/op\t        25.75 %mem_avg/op\t        25.75 %mem_peak/op\t         1.358 cpu_seconds/op\t   2510848 disk_bytes/op\t  134640 B/op\t    1927 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1357686667,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.587,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 23.53,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 25.75,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 25.75,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.358,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2510848,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 134640,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1927,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "8d4605a717f5a93c4a0542cc9f8762ce6f25552d",
          "message": "ci(deps): bump softprops/action-gh-release from 2.4.1 to 2.4.2 (#1621)\n\nBumps [softprops/action-gh-release](https://github.com/softprops/action-gh-release) from 2.4.1 to 2.4.2.\n- [Release notes](https://github.com/softprops/action-gh-release/releases)\n- [Changelog](https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/softprops/action-gh-release/compare/6da8fa9354ddfdc4aeace5fc48d7f679b5214090...5be0e66d93ac7ed76da52eca8bb058f665c3a5fe)\n\n---\nupdated-dependencies:\n- dependency-name: softprops/action-gh-release\n  dependency-version: 2.4.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:10:00-08:00",
          "tree_id": "04537164e334808b5deb86e790830f58e18d5f60",
          "url": "https://github.com/runfinch/finch/commit/8d4605a717f5a93c4a0542cc9f8762ce6f25552d"
        },
        "date": 1765921850022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 82434989357,
            "unit": "ns/op\t         0.2741 %cpu_avg/op\t        41.18 %cpu_peak/op\t        22.19 %mem_avg/op\t        26.29 %mem_peak/op\t        82.43 cpu_seconds/op\t2020188160 disk_bytes/op\t 7566304 B/op\t  110520 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82434989357,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2741,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.18,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.19,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.29,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 82.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2020188160,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7566304,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 110520,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28321209839,
            "unit": "ns/op\t         0.4249 %cpu_avg/op\t        58.33 %cpu_peak/op\t        21.49 %mem_avg/op\t        24.52 %mem_peak/op\t        28.32 cpu_seconds/op\t  20930560 disk_bytes/op\t 2550528 B/op\t   38090 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28321209839,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4249,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.49,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.52,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20930560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2550528,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 38090,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 672024192,
            "unit": "ns/op\t         0.6183 %cpu_avg/op\t        19.64 %cpu_peak/op\t        26.49 %mem_avg/op\t        26.52 %mem_peak/op\t         0.6720 cpu_seconds/op\t   1230848 disk_bytes/op\t   72392 B/op\t     981 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 672024192,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6183,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.64,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.49,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.52,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.672,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1230848,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 72392,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 981,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1368081204,
            "unit": "ns/op\t         0.3343 %cpu_avg/op\t        20.00 %cpu_peak/op\t        26.53 %mem_avg/op\t        26.56 %mem_peak/op\t         1.368 cpu_seconds/op\t   2600960 disk_bytes/op\t  135736 B/op\t    1944 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1368081204,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3343,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.56,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.368,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2600960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 135736,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1944,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "17341abf02a385ea5629010c40b943e129b05f0d",
          "message": "build(deps): bump github.com/onsi/ginkgo/v2 from 2.25.3 to 2.27.2 (#1610)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from 2.25.3 to 2.27.2.\n- [Release notes](https://github.com/onsi/ginkgo/releases)\n- [Changelog](https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/onsi/ginkgo/compare/v2.25.3...v2.27.2)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/onsi/ginkgo/v2\n  dependency-version: 2.27.2\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:10:30-08:00",
          "tree_id": "d62fb0ac7b35ee6a50ac6712865e45902566c443",
          "url": "https://github.com/runfinch/finch/commit/17341abf02a385ea5629010c40b943e129b05f0d"
        },
        "date": 1765923552375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81223907720,
            "unit": "ns/op\t         0.3162 %cpu_avg/op\t        58.82 %cpu_peak/op\t        22.40 %mem_avg/op\t        26.56 %mem_peak/op\t        81.22 cpu_seconds/op\t2024558592 disk_bytes/op\t 7486512 B/op\t  109266 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81223907720,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3162,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.82,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.4,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.56,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2024558592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7486512,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 109266,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 31391277953,
            "unit": "ns/op\t         0.3151 %cpu_avg/op\t        23.08 %cpu_peak/op\t        21.71 %mem_avg/op\t        24.58 %mem_peak/op\t        31.39 cpu_seconds/op\t  16433152 disk_bytes/op\t 2853784 B/op\t   42013 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31391277953,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3151,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 23.08,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.71,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.58,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16433152,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2853784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 42013,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 663939756,
            "unit": "ns/op\t         0.4889 %cpu_avg/op\t        13.57 %cpu_peak/op\t        26.97 %mem_avg/op\t        26.97 %mem_peak/op\t         0.6639 cpu_seconds/op\t   1253376 disk_bytes/op\t   71724 B/op\t     972 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 663939756,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4889,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.57,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.97,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.97,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6639,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1253376,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 71724,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 972,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1417085633,
            "unit": "ns/op\t         0.5693 %cpu_avg/op\t        25.00 %cpu_peak/op\t        26.98 %mem_avg/op\t        26.98 %mem_peak/op\t         1.417 cpu_seconds/op\t   2560000 disk_bytes/op\t  139232 B/op\t    1992 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1417085633,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5693,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.98,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.98,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.417,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2560000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 139232,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1992,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "6e283a4f67598c6661761dee80ad9a101e6b42ad",
          "message": "ci(deps): bump actions/upload-artifact from 4.6.2 to 5.0.0 (#1608)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 4.6.2 to 5.0.0.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/ea165f8d65b6e75b540449e92b4886f43607fa02...330a01c490aca151604b8cf639adc76d48f6c5d4)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: 5.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:10:58-08:00",
          "tree_id": "27f8c6b79d845a63aa3f2bfc85653943993fb0eb",
          "url": "https://github.com/runfinch/finch/commit/6e283a4f67598c6661761dee80ad9a101e6b42ad"
        },
        "date": 1765923885912,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76887212675,
            "unit": "ns/op\t         0.3663 %cpu_avg/op\t        58.33 %cpu_peak/op\t        22.45 %mem_avg/op\t        27.19 %mem_peak/op\t        76.89 cpu_seconds/op\t2020921344 disk_bytes/op\t 6975696 B/op\t  103548 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 76887212675,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3663,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.45,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.19,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 76.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2020921344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 6975696,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 103548,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27630206458,
            "unit": "ns/op\t         0.4982 %cpu_avg/op\t        66.67 %cpu_peak/op\t        21.53 %mem_avg/op\t        24.61 %mem_peak/op\t        27.63 cpu_seconds/op\t  24145920 disk_bytes/op\t 2496080 B/op\t   37249 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27630206458,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4982,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.61,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24145920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2496080,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37249,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 598248850,
            "unit": "ns/op\t         0.4853 %cpu_avg/op\t        11.54 %cpu_peak/op\t        27.09 %mem_avg/op\t        27.12 %mem_peak/op\t         0.5982 cpu_seconds/op\t   1220608 disk_bytes/op\t   66720 B/op\t     890 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 598248850,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4853,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.54,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.09,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.12,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5982,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1220608,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 66720,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 890,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1374512234,
            "unit": "ns/op\t         0.2935 %cpu_avg/op\t        14.29 %cpu_peak/op\t        27.11 %mem_avg/op\t        27.14 %mem_peak/op\t         1.374 cpu_seconds/op\t   2498560 disk_bytes/op\t  135592 B/op\t    1942 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1374512234,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2935,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 14.29,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.11,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.14,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.374,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2498560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 135592,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1942,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "684e296dbced8f1340a187fbafbada61b6535889",
          "message": "ci(deps): bump golangci/golangci-lint-action from 8.0.0 to 9.0.0 (#1622)\n\nBumps [golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action) from 8.0.0 to 9.0.0.\n- [Release notes](https://github.com/golangci/golangci-lint-action/releases)\n- [Commits](https://github.com/golangci/golangci-lint-action/compare/4afd733a84b1f43292c63897423277bb7f4313a9...0a35821d5c230e903fcfe077583637dea1b27b47)\n\n---\nupdated-dependencies:\n- dependency-name: golangci/golangci-lint-action\n  dependency-version: 9.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:11:26-08:00",
          "tree_id": "c8d012556bec1b1c826bdcf328d1d57996c750f5",
          "url": "https://github.com/runfinch/finch/commit/684e296dbced8f1340a187fbafbada61b6535889"
        },
        "date": 1765924187777,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80411980501,
            "unit": "ns/op\t         0.3174 %cpu_avg/op\t        53.85 %cpu_peak/op\t        22.37 %mem_avg/op\t        26.27 %mem_peak/op\t        80.41 cpu_seconds/op\t2025558016 disk_bytes/op\t 7418960 B/op\t  108162 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80411980501,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3174,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.37,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.27,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2025558016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7418960,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108162,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27686716128,
            "unit": "ns/op\t         0.4546 %cpu_avg/op\t        54.55 %cpu_peak/op\t        21.32 %mem_avg/op\t        24.28 %mem_peak/op\t        27.69 cpu_seconds/op\t  28905472 disk_bytes/op\t 2496752 B/op\t   37235 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27686716128,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4546,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 54.55,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.32,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.28,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.69,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 28905472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2496752,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37235,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 620873238,
            "unit": "ns/op\t         0.3390 %cpu_avg/op\t         8.333 %cpu_peak/op\t        26.48 %mem_avg/op\t        26.50 %mem_peak/op\t         0.6208 cpu_seconds/op\t  10420224 disk_bytes/op\t   68400 B/op\t     919 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 620873238,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.339,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.333,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.48,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.5,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6208,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10420224,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68400,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 919,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1262302152,
            "unit": "ns/op\t         0.6466 %cpu_avg/op\t        15.38 %cpu_peak/op\t        26.51 %mem_avg/op\t        26.53 %mem_peak/op\t         1.262 cpu_seconds/op\t   2547712 disk_bytes/op\t  126560 B/op\t    1807 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1262302152,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6466,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.51,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.53,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.262,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2547712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 126560,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1807,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "aee706a77f9d6f265414ef7063e38656c60b746a",
          "message": "ci(deps): bump actions/download-artifact from 5.0.0 to 6.0.0 (#1609)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 5.0.0 to 6.0.0.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/634f93cb2916e3fdff6788551b99b062d0335ce0...018cc2cf5baa6db3ef3c5f8a56943fffe632ef53)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:21:42-08:00",
          "tree_id": "4c1888f852c44742b12c7d003fbf7d75ad288cfb",
          "url": "https://github.com/runfinch/finch/commit/aee706a77f9d6f265414ef7063e38656c60b746a"
        },
        "date": 1765924486969,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79147327314,
            "unit": "ns/op\t         0.3640 %cpu_avg/op\t        54.55 %cpu_peak/op\t        22.47 %mem_avg/op\t        26.76 %mem_peak/op\t        79.15 cpu_seconds/op\t2019909632 disk_bytes/op\t 7140632 B/op\t  106177 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79147327314,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.364,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 54.55,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.47,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.76,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2019909632,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7140632,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 106177,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27648296487,
            "unit": "ns/op\t         0.3232 %cpu_avg/op\t        33.33 %cpu_peak/op\t        21.53 %mem_avg/op\t        24.64 %mem_peak/op\t        27.65 cpu_seconds/op\t  18194432 disk_bytes/op\t 2487472 B/op\t   37108 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27648296487,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3232,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.53,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.64,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.65,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18194432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2487472,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37108,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 621717383,
            "unit": "ns/op\t         0.2107 %cpu_avg/op\t         8.333 %cpu_peak/op\t        26.54 %mem_avg/op\t        26.56 %mem_peak/op\t         0.6217 cpu_seconds/op\t   9363456 disk_bytes/op\t   68448 B/op\t     920 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 621717383,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2107,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.333,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.54,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.56,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6217,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 9363456,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68448,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 920,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1262007811,
            "unit": "ns/op\t         0.2786 %cpu_avg/op\t        10.18 %cpu_peak/op\t        26.59 %mem_avg/op\t        26.62 %mem_peak/op\t         1.262 cpu_seconds/op\t   2539520 disk_bytes/op\t  127376 B/op\t    1812 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1262007811,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2786,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 10.18,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.59,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.62,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.262,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2539520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 127376,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1812,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "033ab777f0bc79304ef3d0802d948fbd8385940a",
          "message": "ci(deps): bump googleapis/release-please-action from 4.3.0 to 4.4.0 (#1605)\n\nBumps [googleapis/release-please-action](https://github.com/googleapis/release-please-action) from 4.3.0 to 4.4.0.\n- [Release notes](https://github.com/googleapis/release-please-action/releases)\n- [Changelog](https://github.com/googleapis/release-please-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/googleapis/release-please-action/compare/c2a5a2bd6a758a0937f1ddb1e8950609867ed15c...16a9c90856f42705d54a6fda1823352bdc62cf38)\n\n---\nupdated-dependencies:\n- dependency-name: googleapis/release-please-action\n  dependency-version: 4.4.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:21:59-08:00",
          "tree_id": "f1ceed09af0b65eaf504b86317beb9ad7399ebd1",
          "url": "https://github.com/runfinch/finch/commit/033ab777f0bc79304ef3d0802d948fbd8385940a"
        },
        "date": 1765924789924,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78922244651,
            "unit": "ns/op\t         0.3630 %cpu_avg/op\t        62.50 %cpu_peak/op\t        22.50 %mem_avg/op\t        27.12 %mem_peak/op\t        78.92 cpu_seconds/op\t2019119104 disk_bytes/op\t 7147032 B/op\t  106128 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78922244651,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.363,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 62.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.5,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.12,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 78.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2019119104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7147032,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 106128,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27152318476,
            "unit": "ns/op\t         0.3473 %cpu_avg/op\t        50.00 %cpu_peak/op\t        21.32 %mem_avg/op\t        24.27 %mem_peak/op\t        27.15 cpu_seconds/op\t  33624064 disk_bytes/op\t 2447184 B/op\t   36464 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27152318476,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3473,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.32,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.27,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33624064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2447184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 36464,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 614359452,
            "unit": "ns/op\t         0.3227 %cpu_avg/op\t        14.56 %cpu_peak/op\t        26.82 %mem_avg/op\t        26.85 %mem_peak/op\t         0.6143 cpu_seconds/op\t   1181696 disk_bytes/op\t   67756 B/op\t     912 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 614359452,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3227,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.56,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.82,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.85,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6143,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1181696,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 67756,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 912,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1371689035,
            "unit": "ns/op\t         0.4239 %cpu_avg/op\t        21.43 %cpu_peak/op\t        26.82 %mem_avg/op\t        26.87 %mem_peak/op\t         1.372 cpu_seconds/op\t   2539520 disk_bytes/op\t  137176 B/op\t    1958 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1371689035,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4239,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 21.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.82,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.87,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.372,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2539520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 137176,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1958,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "9b536bac75e8ba818d448490bbee872b0d1992bf",
          "message": "build(deps): bump github.com/aws/aws-sdk-go-v2 from 1.39.0 to 1.39.4 (#1606)\n\nBumps [github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2) from 1.39.0 to 1.39.4.\n- [Release notes](https://github.com/aws/aws-sdk-go-v2/releases)\n- [Changelog](https://github.com/aws/aws-sdk-go-v2/blob/main/changelog-template.json)\n- [Commits](https://github.com/aws/aws-sdk-go-v2/compare/v1.39.0...v1.39.4)\n\n---\nupdated-dependencies:\n- dependency-name: github.com/aws/aws-sdk-go-v2\n  dependency-version: 1.39.4\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T13:22:22-08:00",
          "tree_id": "3004a4e7af73a8e15311b01b2b428488ec3bba50",
          "url": "https://github.com/runfinch/finch/commit/9b536bac75e8ba818d448490bbee872b0d1992bf"
        },
        "date": 1765924903355,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79211500903,
            "unit": "ns/op\t         0.2955 %cpu_avg/op\t        35.71 %cpu_peak/op\t        21.99 %mem_avg/op\t        26.41 %mem_peak/op\t        79.21 cpu_seconds/op\t2030141440 disk_bytes/op\t 7158944 B/op\t  106423 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79211500903,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2955,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 35.71,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.99,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.41,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2030141440,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7158944,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 106423,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27655933903,
            "unit": "ns/op\t         0.3536 %cpu_avg/op\t        35.71 %cpu_peak/op\t        21.20 %mem_avg/op\t        24.12 %mem_peak/op\t        27.66 cpu_seconds/op\t  18456576 disk_bytes/op\t 2489904 B/op\t   37145 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27655933903,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3536,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 35.71,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.2,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.12,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.66,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18456576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2489904,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37145,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 634551790,
            "unit": "ns/op\t         0.4041 %cpu_avg/op\t        11.86 %cpu_peak/op\t        26.68 %mem_avg/op\t        26.71 %mem_peak/op\t         0.6345 cpu_seconds/op\t  10403840 disk_bytes/op\t   68652 B/op\t     927 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 634551790,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4041,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.86,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.68,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.71,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6345,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10403840,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68652,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 927,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1413457325,
            "unit": "ns/op\t         0.3304 %cpu_avg/op\t        20.00 %cpu_peak/op\t        26.73 %mem_avg/op\t        26.74 %mem_peak/op\t         1.413 cpu_seconds/op\t   2498560 disk_bytes/op\t  146392 B/op\t    2030 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1413457325,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3304,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.73,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.74,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.413,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2498560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 146392,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2030,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55555210+sondavidb@users.noreply.github.com",
            "name": "David Son",
            "username": "sondavidb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9685b58d8cc94be30119b1a65f39f37120872232",
          "message": "fix(ci): run linter in ci-docs.yaml (#1475)\n\nWe had a case where the linter got updated but failed to report that it\ndidn't run because it was a YAML-only change that didn't run the linter.\nThis should help mitigate the issue as well as hopefully catch any\nYAML-only changes that also affect our code.\n\nSigned-off-by: David Son <davbson@amazon.com>",
          "timestamp": "2025-12-18T09:32:02-08:00",
          "tree_id": "72648f2dcdffa00db706e2dda43dd8c33b9f818f",
          "url": "https://github.com/runfinch/finch/commit/9685b58d8cc94be30119b1a65f39f37120872232"
        },
        "date": 1766079462646,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78290221070,
            "unit": "ns/op\t         0.3537 %cpu_avg/op\t        71.43 %cpu_peak/op\t        21.11 %mem_avg/op\t        25.47 %mem_peak/op\t        78.29 cpu_seconds/op\t2025529344 disk_bytes/op\t 7106480 B/op\t  105524 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78290221070,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3537,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 71.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.11,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 25.47,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 78.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2025529344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7106480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 105524,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30883162109,
            "unit": "ns/op\t         0.3289 %cpu_avg/op\t        53.85 %cpu_peak/op\t        20.71 %mem_avg/op\t        23.43 %mem_peak/op\t        30.88 cpu_seconds/op\t  22265856 disk_bytes/op\t 2820816 B/op\t   41492 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30883162109,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3289,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.71,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 23.43,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 22265856,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2820816,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41492,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 634601984,
            "unit": "ns/op\t         0.9899 %cpu_avg/op\t        25.00 %cpu_peak/op\t        25.71 %mem_avg/op\t        25.71 %mem_peak/op\t         0.6345 cpu_seconds/op\t   1198080 disk_bytes/op\t   68608 B/op\t     920 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 634601984,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9899,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 25.71,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 25.71,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6345,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1198080,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68608,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 920,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1392462278,
            "unit": "ns/op\t         0.5292 %cpu_avg/op\t        14.29 %cpu_peak/op\t        25.77 %mem_avg/op\t        25.78 %mem_peak/op\t         1.392 cpu_seconds/op\t   2572288 disk_bytes/op\t  138904 B/op\t    1987 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1392462278,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5292,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 14.29,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 25.77,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 25.78,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.392,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2572288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 138904,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1987,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55555210+sondavidb@users.noreply.github.com",
            "name": "David Son",
            "username": "sondavidb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a365220b9598beddf969a33545c216cce047c9f",
          "message": "fix: restrict number of journalctl output lines (#1637)",
          "timestamp": "2025-12-18T12:38:01-05:00",
          "tree_id": "4ea97574df03f9aa3404b5e6e4b6f30acbf278c9",
          "url": "https://github.com/runfinch/finch/commit/5a365220b9598beddf969a33545c216cce047c9f"
        },
        "date": 1766080490262,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80967473100,
            "unit": "ns/op\t         0.3072 %cpu_avg/op\t        58.33 %cpu_peak/op\t        21.84 %mem_avg/op\t        26.34 %mem_peak/op\t        80.97 cpu_seconds/op\t2039422976 disk_bytes/op\t 7441632 B/op\t  108599 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80967473100,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3072,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.84,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.34,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.97,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2039422976,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7441632,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108599,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27223803582,
            "unit": "ns/op\t         0.4771 %cpu_avg/op\t        90.00 %cpu_peak/op\t        20.93 %mem_avg/op\t        24.11 %mem_peak/op\t        27.22 cpu_seconds/op\t  14733312 disk_bytes/op\t 2458624 B/op\t   36620 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27223803582,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4771,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 90,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.93,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.11,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 14733312,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2458624,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 36620,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 594576950,
            "unit": "ns/op\t         0.1933 %cpu_avg/op\t        10.48 %cpu_peak/op\t        26.28 %mem_avg/op\t        26.30 %mem_peak/op\t         0.5945 cpu_seconds/op\t   1249280 disk_bytes/op\t   66472 B/op\t     889 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 594576950,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.1933,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.48,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.28,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.3,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5945,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1249280,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 66472,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 889,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1357068305,
            "unit": "ns/op\t         0.2576 %cpu_avg/op\t        15.38 %cpu_peak/op\t        26.31 %mem_avg/op\t        26.35 %mem_peak/op\t         1.357 cpu_seconds/op\t   2519040 disk_bytes/op\t  133240 B/op\t    1911 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1357068305,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2576,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.31,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.35,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.357,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2519040,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 133240,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1911,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "6297e65656fd3f01ef8a1670899488d21883d628",
          "message": "fix: finch run panic without arguments (#1634)\n\n* fix: finch run panic without arguments\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>\n\n* fix: remove test\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>\n\n---------\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2025-12-18T10:40:59-08:00",
          "tree_id": "1f94709bdc11df0037845817cec7ca6f689467d0",
          "url": "https://github.com/runfinch/finch/commit/6297e65656fd3f01ef8a1670899488d21883d628"
        },
        "date": 1766083570846,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78838491868,
            "unit": "ns/op\t         0.3474 %cpu_avg/op\t        45.45 %cpu_peak/op\t        21.92 %mem_avg/op\t        26.05 %mem_peak/op\t        78.84 cpu_seconds/op\t2030645248 disk_bytes/op\t 7124480 B/op\t  105901 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78838491868,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3474,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.92,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.05,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 78.84,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2030645248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7124480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 105901,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30780413334,
            "unit": "ns/op\t         0.4037 %cpu_avg/op\t        58.33 %cpu_peak/op\t        21.44 %mem_avg/op\t        24.20 %mem_peak/op\t        30.78 cpu_seconds/op\t  18116608 disk_bytes/op\t 2812824 B/op\t   41338 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30780413334,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4037,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.44,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.2,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18116608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2812824,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41338,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 619179217,
            "unit": "ns/op\t         0.3420 %cpu_avg/op\t         6.250 %cpu_peak/op\t        26.39 %mem_avg/op\t        26.39 %mem_peak/op\t         0.6191 cpu_seconds/op\t   1165312 disk_bytes/op\t   67640 B/op\t     905 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 619179217,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.342,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 6.25,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.39,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.39,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6191,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1165312,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 67640,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 905,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1328629760,
            "unit": "ns/op\t         0.4352 %cpu_avg/op\t        15.38 %cpu_peak/op\t        26.40 %mem_avg/op\t        26.42 %mem_peak/op\t         1.329 cpu_seconds/op\t   2478080 disk_bytes/op\t  132704 B/op\t    1897 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1328629760,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4352,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.4,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.42,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.329,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2478080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 132704,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1897,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "32879650dc3f3d07a7e3f517a0f208d6d4b400a3",
          "message": "chore: group dependabot prs into one single pr (#1649)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2025-12-23T09:36:45-08:00",
          "tree_id": "5fb84871a00f5747c57b211e577f264f68438b39",
          "url": "https://github.com/runfinch/finch/commit/32879650dc3f3d07a7e3f517a0f208d6d4b400a3"
        },
        "date": 1766511743972,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81433178532,
            "unit": "ns/op\t         0.3075 %cpu_avg/op\t        57.14 %cpu_peak/op\t        21.31 %mem_avg/op\t        26.06 %mem_peak/op\t        81.43 cpu_seconds/op\t2029428736 disk_bytes/op\t 7510888 B/op\t  109565 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81433178532,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3075,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.31,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.06,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2029428736,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7510888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 109565,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27817834509,
            "unit": "ns/op\t         0.4276 %cpu_avg/op\t        50.00 %cpu_peak/op\t        20.60 %mem_avg/op\t        23.58 %mem_peak/op\t        27.82 cpu_seconds/op\t  17399808 disk_bytes/op\t 2495160 B/op\t   37234 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27817834509,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4276,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.6,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 23.58,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17399808,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2495160,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37234,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 579763746,
            "unit": "ns/op\t         0.5796 %cpu_avg/op\t        18.82 %cpu_peak/op\t        26.11 %mem_avg/op\t        26.11 %mem_peak/op\t         0.5797 cpu_seconds/op\t   1335296 disk_bytes/op\t   64328 B/op\t     859 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 579763746,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5796,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.82,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.11,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.11,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5797,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1335296,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 64328,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 859,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1327957898,
            "unit": "ns/op\t         0.8703 %cpu_avg/op\t        58.33 %cpu_peak/op\t        26.13 %mem_avg/op\t        26.13 %mem_peak/op\t         1.328 cpu_seconds/op\t   2506752 disk_bytes/op\t  131800 B/op\t    1882 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1327957898,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.8703,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.13,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.13,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.328,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2506752,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 131800,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1882,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "1549ce5540a5413c5357b6af7c040ddfd77af51d",
          "message": "ci(deps): bump the github-actions group with 9 updates (#1650)\n\nBumps the github-actions group with 9 updates:\n\n| Package | From | To |\n| --- | --- | --- |\n| [actions/checkout](https://github.com/actions/checkout) | `5.0.0` | `6.0.1` |\n| [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) | `5.1.0` | `5.1.1` |\n| [actions/setup-go](https://github.com/actions/setup-go) | `6.0.0` | `6.1.0` |\n| [actions/setup-python](https://github.com/actions/setup-python) | `6.0.0` | `6.1.0` |\n| [golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action) | `8.0.0` | `9.2.0` |\n| [actions/upload-artifact](https://github.com/actions/upload-artifact) | `5.0.0` | `6.0.0` |\n| [peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request) | `7.0.8` | `8.0.0` |\n| [actions/download-artifact](https://github.com/actions/download-artifact) | `6.0.0` | `7.0.0` |\n| [softprops/action-gh-release](https://github.com/softprops/action-gh-release) | `2.4.2` | `2.5.0` |\n\n\nUpdates `actions/checkout` from 5.0.0 to 6.0.1\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Commits](https://github.com/actions/checkout/compare/v5...v6.0.1)\n\nUpdates `aws-actions/configure-aws-credentials` from 5.1.0 to 5.1.1\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/00943011d9042930efac3dcd3a170e4273319bc8...61815dcd50bd041e203e49132bacad1fd04d2708)\n\nUpdates `actions/setup-go` from 6.0.0 to 6.1.0\n- [Release notes](https://github.com/actions/setup-go/releases)\n- [Commits](https://github.com/actions/setup-go/compare/44694675825211faa026b3c33043df3e48a5fa00...4dc6199c7b1a012772edbd06daecab0f50c9053c)\n\nUpdates `actions/setup-python` from 6.0.0 to 6.1.0\n- [Release notes](https://github.com/actions/setup-python/releases)\n- [Commits](https://github.com/actions/setup-python/compare/e797f83bcb11b83ae66e0230d6156d7c80228e7c...83679a892e2d95755f2dac6acb0bfd1e9ac5d548)\n\nUpdates `golangci/golangci-lint-action` from 8.0.0 to 9.2.0\n- [Release notes](https://github.com/golangci/golangci-lint-action/releases)\n- [Commits](https://github.com/golangci/golangci-lint-action/compare/v8...1e7e51e771db61008b38414a730f564565cf7c20)\n\nUpdates `actions/upload-artifact` from 5.0.0 to 6.0.0\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/330a01c490aca151604b8cf639adc76d48f6c5d4...b7c566a772e6b6bfb58ed0dc250532a479d7789f)\n\nUpdates `peter-evans/create-pull-request` from 7.0.8 to 8.0.0\n- [Release notes](https://github.com/peter-evans/create-pull-request/releases)\n- [Commits](https://github.com/peter-evans/create-pull-request/compare/271a8d0340265f705b14b6d32b9829c1cb33d45e...98357b18bf14b5342f975ff684046ec3b2a07725)\n\nUpdates `actions/download-artifact` from 6.0.0 to 7.0.0\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/018cc2cf5baa6db3ef3c5f8a56943fffe632ef53...37930b1c2abaa49bbe596cd826c3c89aef350131)\n\nUpdates `softprops/action-gh-release` from 2.4.2 to 2.5.0\n- [Release notes](https://github.com/softprops/action-gh-release/releases)\n- [Changelog](https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/softprops/action-gh-release/compare/5be0e66d93ac7ed76da52eca8bb058f665c3a5fe...a06a81a03ee405af7f2048a818ed3f03bbf83c7b)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: 6.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: aws-actions/configure-aws-credentials\n  dependency-version: 5.1.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n  dependency-group: github-actions\n- dependency-name: actions/setup-go\n  dependency-version: 6.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: actions/setup-python\n  dependency-version: 6.1.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n- dependency-name: golangci/golangci-lint-action\n  dependency-version: 9.2.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/upload-artifact\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: peter-evans/create-pull-request\n  dependency-version: 8.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: actions/download-artifact\n  dependency-version: 7.0.0\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n  dependency-group: github-actions\n- dependency-name: softprops/action-gh-release\n  dependency-version: 2.5.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n  dependency-group: github-actions\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-24T15:07:03-08:00",
          "tree_id": "528bdc9be845103278f4eaba6b7a0feb3ec4ca5e",
          "url": "https://github.com/runfinch/finch/commit/1549ce5540a5413c5357b6af7c040ddfd77af51d"
        },
        "date": 1766617960510,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80370726511,
            "unit": "ns/op\t         0.2726 %cpu_avg/op\t        45.45 %cpu_peak/op\t        21.57 %mem_avg/op\t        26.02 %mem_peak/op\t        80.37 cpu_seconds/op\t2029993984 disk_bytes/op\t 7420952 B/op\t  108235 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80370726511,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2726,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 21.57,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 26.02,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2029993984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7420952,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108235,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27866843315,
            "unit": "ns/op\t         0.4364 %cpu_avg/op\t        60.00 %cpu_peak/op\t        20.74 %mem_avg/op\t        23.78 %mem_peak/op\t        27.87 cpu_seconds/op\t  24395776 disk_bytes/op\t 2511576 B/op\t   37463 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27866843315,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4364,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 20.74,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 23.78,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24395776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2511576,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37463,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 603770242,
            "unit": "ns/op\t         0.5151 %cpu_avg/op\t        17.07 %cpu_peak/op\t        26.62 %mem_avg/op\t        26.63 %mem_peak/op\t         0.6037 cpu_seconds/op\t   1208320 disk_bytes/op\t   66664 B/op\t     890 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 603770242,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5151,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.07,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 26.62,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 26.63,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6037,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1208320,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 66664,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 890,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1315359179,
            "unit": "ns/op\t         0.6227 %cpu_avg/op\t        18.75 %cpu_peak/op\t        26.64 %mem_avg/op\t        26.64 %mem_peak/op\t         1.315 cpu_seconds/op\t   2576384 disk_bytes/op\t  132584 B/op\t    1887 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1315359179,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6227,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 26.64,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 26.64,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.315,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2576384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 132584,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1887,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "93ead3d561d4f1ea21583fa713cfd438098b165f",
          "message": "feat: enable healthchecks (#1655)\n\n* deps: bump nerdctl, enable healthchecks\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* update github.com/containerd/cgroups package to v3\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* bump common-tests so healthchecks are skipped on nerdctl<2.2.1\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* bump finch-core which internally rolls back finch daemon to 0.20.0 from 0.21.0\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* Changes:\n\n- bump finch-core again so that we revert back to finch-daemon 0.21\n- update AL tests workflow to overwrite nerdctl version in CI\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* update expected dependency versions in vm serial tests\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* fix handling of flags that can have negative integer values\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n* fix inNumericArg function and add unit tests for handleFlagArg function\n\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>\n\n---------\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\nSigned-off-by: Swapnanil-Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-01-12T14:45:59-08:00",
          "tree_id": "5cceeca58b8ebd52253c30502343771a589290d8",
          "url": "https://github.com/runfinch/finch/commit/93ead3d561d4f1ea21583fa713cfd438098b165f"
        },
        "date": 1768258277934,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81411585926,
            "unit": "ns/op\t         0.3959 %cpu_avg/op\t        53.85 %cpu_peak/op\t        24.98 %mem_avg/op\t        29.56 %mem_peak/op\t        81.41 cpu_seconds/op\t2106142720 disk_bytes/op\t 7526112 B/op\t  109798 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81411585926,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3959,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 24.98,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 29.56,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2106142720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7526112,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 109798,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30801260614,
            "unit": "ns/op\t         0.3459 %cpu_avg/op\t        50.00 %cpu_peak/op\t        24.24 %mem_avg/op\t        27.01 %mem_peak/op\t        30.80 cpu_seconds/op\t  20586496 disk_bytes/op\t 2811336 B/op\t   41325 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30801260614,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3459,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 24.24,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 27.01,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20586496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2811336,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41325,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 605788458,
            "unit": "ns/op\t         0.8202 %cpu_avg/op\t        14.17 %cpu_peak/op\t        29.90 %mem_avg/op\t        29.91 %mem_peak/op\t         0.6057 cpu_seconds/op\t   1232896 disk_bytes/op\t   66740 B/op\t     896 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 605788458,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8202,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.17,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 29.9,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 29.91,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6057,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1232896,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 66740,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 896,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1394546338,
            "unit": "ns/op\t         0.5140 %cpu_avg/op\t        25.00 %cpu_peak/op\t        29.96 %mem_avg/op\t        30.00 %mem_peak/op\t         1.395 cpu_seconds/op\t   2719744 disk_bytes/op\t  139232 B/op\t    1993 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1394546338,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.514,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 29.96,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 30,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.395,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2719744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 139232,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1993,
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
          "id": "397023d8e7f9e2cd6b3279c071d8c6577d753f87",
          "message": "chore(main): release 1.14.0 (#1619)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-13T10:50:03-08:00",
          "tree_id": "aa2ec5bc6119ca1d0dc03f57eef95d17216c6982",
          "url": "https://github.com/runfinch/finch/commit/397023d8e7f9e2cd6b3279c071d8c6577d753f87"
        },
        "date": 1768330512149,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81052742419,
            "unit": "ns/op\t         0.3302 %cpu_avg/op\t        46.67 %cpu_peak/op\t        23.79 %mem_avg/op\t        28.42 %mem_peak/op\t        81.05 cpu_seconds/op\t2107883520 disk_bytes/op\t 7463336 B/op\t  108915 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81052742419,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3302,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 46.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.79,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 28.42,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 81.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2107883520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7463336,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108915,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 31303776524,
            "unit": "ns/op\t         0.3824 %cpu_avg/op\t        57.14 %cpu_peak/op\t        23.13 %mem_avg/op\t        26.01 %mem_peak/op\t        31.30 cpu_seconds/op\t  40304640 disk_bytes/op\t 2849464 B/op\t   41934 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31303776524,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3824,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 23.13,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 26.01,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 40304640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2849464,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41934,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 641358043,
            "unit": "ns/op\t         0.4117 %cpu_avg/op\t        17.14 %cpu_peak/op\t        28.40 %mem_avg/op\t        28.43 %mem_peak/op\t         0.6413 cpu_seconds/op\t   1230848 disk_bytes/op\t   69852 B/op\t     942 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 641358043,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4117,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.14,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 28.4,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 28.43,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6413,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1230848,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 69852,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 942,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1378732242,
            "unit": "ns/op\t         0.5403 %cpu_avg/op\t        21.43 %cpu_peak/op\t        28.46 %mem_avg/op\t        28.53 %mem_peak/op\t         1.379 cpu_seconds/op\t   2662400 disk_bytes/op\t  136528 B/op\t    1957 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1378732242,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5403,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 21.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 28.46,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 28.53,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.379,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2662400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 136528,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1957,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "9c82c735276c500e3093b3930712d0d455b328b1",
          "message": "fix(ci): get-tag-name and permissions of release automation workflow (#1670)\n\n* ci: fix get-tag-name in deb release automation\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* ci: fix permission of build-test-pkg workflow\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n---------\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-01-13T15:59:18-08:00",
          "tree_id": "7aaf1afab5d3c4a4ead457652968059ae436f088",
          "url": "https://github.com/runfinch/finch/commit/9c82c735276c500e3093b3930712d0d455b328b1"
        },
        "date": 1768349065268,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80103328780,
            "unit": "ns/op\t         0.3287 %cpu_avg/op\t        42.86 %cpu_peak/op\t        23.79 %mem_avg/op\t        28.70 %mem_peak/op\t        80.10 cpu_seconds/op\t2092941312 disk_bytes/op\t 7235936 B/op\t  107666 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80103328780,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3287,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.79,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 28.7,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2092941312,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7235936,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 107666,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28400792952,
            "unit": "ns/op\t         0.4194 %cpu_avg/op\t        46.15 %cpu_peak/op\t        22.88 %mem_avg/op\t        26.25 %mem_peak/op\t        28.40 cpu_seconds/op\t  20484096 disk_bytes/op\t 2564064 B/op\t   38292 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28400792952,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4194,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 22.88,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 26.25,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.4,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20484096,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2564064,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 38292,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 627086667,
            "unit": "ns/op\t         0.3599 %cpu_avg/op\t        16.67 %cpu_peak/op\t        28.16 %mem_avg/op\t        28.20 %mem_peak/op\t         0.6270 cpu_seconds/op\t  10766336 disk_bytes/op\t   68608 B/op\t     921 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 627086667,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3599,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.67,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 28.16,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 28.2,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.627,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10766336,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68608,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 921,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1440403970,
            "unit": "ns/op\t         0.06468 %cpu_avg/op\t         8.473 %cpu_peak/op\t        28.25 %mem_avg/op\t        28.26 %mem_peak/op\t         1.440 cpu_seconds/op\t   2736128 disk_bytes/op\t  145000 B/op\t    2033 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1440403970,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.06468,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 8.473,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 28.25,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 28.26,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.44,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2736128,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 145000,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 2033,
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
          "id": "e83c6fb9196d6157b5ef3bacc1f440c85134004d",
          "message": "build(deps): Bump submodules and dependencies (#1672)\n\n[create-pull-request] automated change\n\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: coderbirju <47769978+coderbirju@users.noreply.github.com>",
          "timestamp": "2026-01-13T19:34:49-08:00",
          "tree_id": "0cc8a5810488f532894d2a0cc8a9b18b77d87c0a",
          "url": "https://github.com/runfinch/finch/commit/e83c6fb9196d6157b5ef3bacc1f440c85134004d"
        },
        "date": 1768361998950,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 82487641658,
            "unit": "ns/op\t         0.3317 %cpu_avg/op\t        53.33 %cpu_peak/op\t        23.93 %mem_avg/op\t        28.86 %mem_peak/op\t        82.49 cpu_seconds/op\t2095947776 disk_bytes/op\t 7586336 B/op\t  110929 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82487641658,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3317,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.93,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 28.86,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 82.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2095947776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7586336,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 110929,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30854391445,
            "unit": "ns/op\t         0.3440 %cpu_avg/op\t        57.14 %cpu_peak/op\t        23.09 %mem_avg/op\t        25.79 %mem_peak/op\t        30.85 cpu_seconds/op\t  20832256 disk_bytes/op\t 2819584 B/op\t   41452 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30854391445,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.344,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 23.09,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 25.79,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.85,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20832256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2819584,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 41452,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 630157482,
            "unit": "ns/op\t         0.5832 %cpu_avg/op\t        13.92 %cpu_peak/op\t        28.80 %mem_avg/op\t        28.81 %mem_peak/op\t         0.6301 cpu_seconds/op\t   1193984 disk_bytes/op\t   68608 B/op\t     920 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 630157482,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5832,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.92,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 28.8,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 28.81,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6301,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1193984,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68608,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 920,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1291648502,
            "unit": "ns/op\t         0.4832 %cpu_avg/op\t        25.00 %cpu_peak/op\t        28.82 %mem_avg/op\t        28.86 %mem_peak/op\t         1.292 cpu_seconds/op\t   2732032 disk_bytes/op\t  128416 B/op\t    1836 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1291648502,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4832,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 28.82,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 28.86,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.292,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2732032,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 128416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1836,
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
          "id": "3dfe28073826af42359f494750525209697a7577",
          "message": "chore(main): release 1.14.1 (#1671)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-14T10:01:46-08:00",
          "tree_id": "43d4171913b8e37eaff412e482a09489ce1d6e15",
          "url": "https://github.com/runfinch/finch/commit/3dfe28073826af42359f494750525209697a7577"
        },
        "date": 1768414630581,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80616464751,
            "unit": "ns/op\t         0.2981 %cpu_avg/op\t        31.39 %cpu_peak/op\t        22.58 %mem_avg/op\t        27.72 %mem_peak/op\t        80.62 cpu_seconds/op\t2104573952 disk_bytes/op\t 7455824 B/op\t  108749 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80616464751,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2981,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 31.39,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.58,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.72,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 80.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2104573952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7455824,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 108749,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28324390722,
            "unit": "ns/op\t         0.4145 %cpu_avg/op\t        38.89 %cpu_peak/op\t        21.52 %mem_avg/op\t        24.61 %mem_peak/op\t        28.32 cpu_seconds/op\t  36360192 disk_bytes/op\t 2548952 B/op\t   38057 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28324390722,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4145,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 38.89,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.52,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.61,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 36360192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2548952,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 38057,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 601625407,
            "unit": "ns/op\t         0.5123 %cpu_avg/op\t        17.14 %cpu_peak/op\t        27.09 %mem_avg/op\t        27.11 %mem_peak/op\t         0.6016 cpu_seconds/op\t  10766336 disk_bytes/op\t   66968 B/op\t     895 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 601625407,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5123,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.14,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.09,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.11,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6016,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10766336,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 66968,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 895,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1389996118,
            "unit": "ns/op\t         0.4442 %cpu_avg/op\t        18.75 %cpu_peak/op\t        27.12 %mem_avg/op\t        27.16 %mem_peak/op\t         1.390 cpu_seconds/op\t   2674688 disk_bytes/op\t  138744 B/op\t    1985 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1389996118,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4442,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.12,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.16,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2674688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 138744,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1985,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "30967b3496e483e4d474aed30b923405f10941ce",
          "message": "ci: add signature validation to nightlies (#1673)\n\n* ci: add signature validation to nightlies\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n* use tee for live feedback on notarization\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>\n\n---------\n\nSigned-off-by: Swapnanil Gupta <swpnlg@amazon.com>",
          "timestamp": "2026-01-15T11:15:06-08:00",
          "tree_id": "aedc510935dc1b5982f14cbb553b1a5ce9cfeb54",
          "url": "https://github.com/runfinch/finch/commit/30967b3496e483e4d474aed30b923405f10941ce"
        },
        "date": 1768506095812,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79644753671,
            "unit": "ns/op\t         0.3212 %cpu_avg/op\t        36.36 %cpu_peak/op\t        22.71 %mem_avg/op\t        27.53 %mem_peak/op\t        79.64 cpu_seconds/op\t2111389696 disk_bytes/op\t 7200392 B/op\t  107112 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79644753671,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3212,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.71,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.53,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.64,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2111389696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7200392,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 107112,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28141865468,
            "unit": "ns/op\t         0.3091 %cpu_avg/op\t        18.75 %cpu_peak/op\t        21.57 %mem_avg/op\t        24.55 %mem_peak/op\t        28.14 cpu_seconds/op\t  24457216 disk_bytes/op\t 2537344 B/op\t   37866 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28141865468,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3091,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.57,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.55,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24457216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2537344,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37866,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 611573182,
            "unit": "ns/op\t         0.4506 %cpu_avg/op\t        18.75 %cpu_peak/op\t        27.72 %mem_avg/op\t        27.73 %mem_peak/op\t         0.6115 cpu_seconds/op\t   1282048 disk_bytes/op\t   67024 B/op\t     891 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 611573182,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4506,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.72,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.73,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6115,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1282048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 67024,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 891,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1387427867,
            "unit": "ns/op\t         0.5613 %cpu_avg/op\t        16.67 %cpu_peak/op\t        27.72 %mem_avg/op\t        27.74 %mem_peak/op\t         1.387 cpu_seconds/op\t   2658304 disk_bytes/op\t  136720 B/op\t    1958 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1387427867,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5613,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.72,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.74,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.387,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2658304,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 136720,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1958,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "4e3d3faeca77a2ee58915617b95520843b3bf28d",
          "message": "fix: generate date-agnostic gzip files (#1676)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2026-01-16T11:28:27-08:00",
          "tree_id": "c769d07f3ddcacf685fb70ea5cb10dd19a21654d",
          "url": "https://github.com/runfinch/finch/commit/4e3d3faeca77a2ee58915617b95520843b3bf28d"
        },
        "date": 1768592027618,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77663461536,
            "unit": "ns/op\t         0.3179 %cpu_avg/op\t        42.86 %cpu_peak/op\t        23.23 %mem_avg/op\t        27.95 %mem_peak/op\t        77.66 cpu_seconds/op\t2080862208 disk_bytes/op\t 7054352 B/op\t  104701 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77663461536,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3179,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.23,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.95,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 77.66,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2080862208,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7054352,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 104701,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 31498647284,
            "unit": "ns/op\t         0.3894 %cpu_avg/op\t        50.00 %cpu_peak/op\t        22.19 %mem_avg/op\t        24.73 %mem_peak/op\t        31.50 cpu_seconds/op\t  25755648 disk_bytes/op\t 2866048 B/op\t   42204 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31498647284,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3894,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 22.19,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.73,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 25755648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2866048,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 42204,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 625639912,
            "unit": "ns/op\t         0.5646 %cpu_avg/op\t        13.81 %cpu_peak/op\t        27.58 %mem_avg/op\t        27.58 %mem_peak/op\t         0.6256 cpu_seconds/op\t   1259520 disk_bytes/op\t   68552 B/op\t     921 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 625639912,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5646,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.81,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.58,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.58,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6256,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1259520,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 68552,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 921,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1317104429,
            "unit": "ns/op\t         0.5406 %cpu_avg/op\t        25.00 %cpu_peak/op\t        27.57 %mem_avg/op\t        27.62 %mem_peak/op\t         1.317 cpu_seconds/op\t   2744320 disk_bytes/op\t  131368 B/op\t    1882 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1317104429,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5406,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.57,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.62,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.317,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2744320,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 131368,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1882,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "29f81de1fc8bc004dcc270831c185f9bb7339bcc",
          "message": "ci: add retry logic to debian canaries (#1678)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2026-01-20T10:22:50-08:00",
          "tree_id": "9446d576326554611f8542e65d753b5f75f99d3e",
          "url": "https://github.com/runfinch/finch/commit/29f81de1fc8bc004dcc270831c185f9bb7339bcc"
        },
        "date": 1768933683294,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79808334482,
            "unit": "ns/op\t         0.3448 %cpu_avg/op\t        57.14 %cpu_peak/op\t        23.82 %mem_avg/op\t        28.50 %mem_peak/op\t        79.81 cpu_seconds/op\t2092277760 disk_bytes/op\t 7233232 B/op\t  107514 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79808334482,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3448,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 23.82,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 28.5,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 79.81,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2092277760,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7233232,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 107514,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27706437763,
            "unit": "ns/op\t         0.3765 %cpu_avg/op\t        46.15 %cpu_peak/op\t        22.76 %mem_avg/op\t        25.78 %mem_peak/op\t        27.71 cpu_seconds/op\t  20135936 disk_bytes/op\t 2491336 B/op\t   37174 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27706437763,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3765,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 22.76,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 25.78,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.71,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20135936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2491336,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37174,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 588153066,
            "unit": "ns/op\t         0.6537 %cpu_avg/op\t        12.86 %cpu_peak/op\t        28.96 %mem_avg/op\t        28.99 %mem_peak/op\t         0.5881 cpu_seconds/op\t  10782720 disk_bytes/op\t   65272 B/op\t     874 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 588153066,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6537,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.86,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 28.96,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 28.99,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5881,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 10782720,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 65272,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 874,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1341360860,
            "unit": "ns/op\t         0.07132 %cpu_avg/op\t         8.772 %cpu_peak/op\t        28.99 %mem_avg/op\t        28.99 %mem_peak/op\t         1.341 cpu_seconds/op\t   2703360 disk_bytes/op\t  133224 B/op\t    1911 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1341360860,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.07132,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 8.772,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 28.99,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 28.99,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.341,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2703360,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 133224,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1911,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
          "id": "2c26c9ba7ab9349236704db5301017dd0c8ca694",
          "message": "fix: remove multiple cp commands that overwrites older installers (#1681)\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2026-01-21T14:47:30-08:00",
          "tree_id": "0caaf2aa48d6f39e056753f4d51b040eb81c2f00",
          "url": "https://github.com/runfinch/finch/commit/2c26c9ba7ab9349236704db5301017dd0c8ca694"
        },
        "date": 1769036718255,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77847390813,
            "unit": "ns/op\t         0.3298 %cpu_avg/op\t        61.54 %cpu_peak/op\t        22.98 %mem_avg/op\t        27.93 %mem_peak/op\t        77.85 cpu_seconds/op\t2100035584 disk_bytes/op\t 7053360 B/op\t  104861 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77847390813,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3298,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 61.54,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_avg/op",
            "value": 22.98,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %mem_peak/op",
            "value": 27.93,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 77.85,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2100035584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 7053360,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 104861,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 28095846363,
            "unit": "ns/op\t         0.3701 %cpu_avg/op\t        30.00 %cpu_peak/op\t        21.78 %mem_avg/op\t        24.83 %mem_peak/op\t        28.10 cpu_seconds/op\t   1085440 disk_bytes/op\t 2532560 B/op\t   37797 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28095846363,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3701,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_avg/op",
            "value": 21.78,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %mem_peak/op",
            "value": 24.83,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 1085440,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 2532560,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 37797,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 607322742,
            "unit": "ns/op\t         0.4741 %cpu_avg/op\t        10.99 %cpu_peak/op\t        27.25 %mem_avg/op\t        27.26 %mem_peak/op\t         0.6073 cpu_seconds/op\t   1220608 disk_bytes/op\t   67156 B/op\t     897 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 607322742,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4741,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.99,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_avg/op",
            "value": 27.25,
            "unit": "%mem_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %mem_peak/op",
            "value": 27.26,
            "unit": "%mem_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6073,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1220608,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 67156,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 897,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1276738879,
            "unit": "ns/op\t         0.7890 %cpu_avg/op\t        50.00 %cpu_peak/op\t        27.31 %mem_avg/op\t        27.32 %mem_peak/op\t         1.277 cpu_seconds/op\t   2772992 disk_bytes/op\t  129360 B/op\t    1838 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1276738879,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.789,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 50,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_avg/op",
            "value": 27.31,
            "unit": "%mem_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %mem_peak/op",
            "value": 27.32,
            "unit": "%mem_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.277,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 2772992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 129360,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1838,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      }
    ]
  }
}