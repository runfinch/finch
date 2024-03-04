window.BENCHMARK_DATA = {
  "lastUpdate": 1709571672346,
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
          "id": "963d278df6cfb2c660f25601a916293b29d51bc8",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.23.5 to 1.24.0 (#729)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.23.5 to 1.24.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0d643a8f0a8ad09075f41a60acba6a208cb36c58\"><code>0d643a8</code></a>\r\nRelease 2023-12-07</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e38b534ccea2707475381f985bc9236970bab554\"><code>e38b534</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/f394daf705a925e626f6a5c52aa433ff5504c7f1\"><code>f394daf</code></a>\r\nUpdate SDK's smithy-go dependency to v1.19.0</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/4fb654cee93178383ad85934adc3e16cb906baf7\"><code>4fb654c</code></a>\r\nUpdate endpoints model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/8594ca09ef8095c3287128f364527b1fea3bc49c\"><code>8594ca0</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e33a34c60f1001aa0a85cb9eb682d1b3153bed43\"><code>e33a34c</code></a>\r\nfix codegen ci (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2418\">#2418</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/57a201c7bb214737f78cf871fbeafaa929bf1d8d\"><code>57a201c</code></a>\r\nregenerate partitions (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2415\">#2415</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/be06f0299409272364d03e76196939db023ef807\"><code>be06f02</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2344\">#2344</a>\r\nfrom aws/feat-request-compression-2</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/70bf4107034085068fb6847667657fbb78367be4\"><code>70bf410</code></a>\r\nChange config loading logic</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/8c02c46d4857cbf2c1eb607484e3b94458fe50eb\"><code>8c02c46</code></a>\r\nRelease 2023-12-06</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.23.5...v1.24.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.23.5&new-version=1.24.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-08T16:12:03-08:00",
          "tree_id": "3a6ef11ec1f4a56f7c58041b811b6b92342d2d19",
          "url": "https://github.com/runfinch/finch/commit/963d278df6cfb2c660f25601a916293b29d51bc8"
        },
        "date": 1702080939349,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42581584788,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3039,
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
            "value": 42.58,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1211072512,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1918640,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40444,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 37184811378,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4329,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 37.18,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 139440128,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1691400,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 35302,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 498338778,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6057,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.36,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4983,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33032,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 528,
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
          "id": "e8187432a02c59a821a0d3b39c9cbc51f75a60cd",
          "message": "fix: Change the default behavoir for deleting .finch folder to false when uninstall (#732)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nTo make homebrew keep the .finch folder when uninstall, change the\r\nuninstall script default option to not deleting the .finch folder\r\n\r\n*Testing done:*\r\nTested locally by modifying the script after homebrew installation\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-12-11T11:43:31-08:00",
          "tree_id": "474d39949c4b090117022086bf254b7d9e208570",
          "url": "https://github.com/runfinch/finch/commit/e8187432a02c59a821a0d3b39c9cbc51f75a60cd"
        },
        "date": 1702324026480,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45874481391,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3642,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 45.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1215074304,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2054280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43508,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31071444249,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4552,
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
            "value": 31.07,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 222326784,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1399144,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29616,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 495287628,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7947,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.43,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4952,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32378,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 523,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "efecfcae8922f47581a4575125acbe375a706b11",
          "message": "build(deps): Bump golang.org/x/tools from 0.16.0 to 0.16.1 (#734)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.16.0\r\nto 0.16.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2acb2e697b49f179be93652febb89d384f0f09c9\"><code>2acb2e6</code></a>\r\ngopls/internal/test/marker: minor clean up of marker test doc</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/28b92af2866ab2bc225795ba13f5a1ae765ffec5\"><code>28b92af</code></a>\r\ninternal/typeparams: eliminate remainining compatibility shims</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ee35f8ea92b83ca45ebd96714001e9312bfc96a0\"><code>ee35f8e</code></a>\r\ngopls/internal/lsp/source: hovering over broken packages is not an\r\nerror</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/67611a11a1be5466d372eba4e925d97290929ef4\"><code>67611a1</code></a>\r\ninternal/typeparams: eliminate type aliases</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/23c86e8ed69114240a9c50fbacdbbeadb4b63385\"><code>23c86e8</code></a>\r\ninternal/typeparams: delete const Enabled=true and simplify</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e46688f41326d03a6df28607f1b4d170e31b16ad\"><code>e46688f</code></a>\r\ngopls/internal/analysis/fillstruct: don't panic with invalid fields</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/8bd7553f7c595ecbf244343302e1bfe890f1f947\"><code>8bd7553</code></a>\r\ngopls/internal/util/goversion: warn about EOL for Go 1.18</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bc9cd159c589d9f78867aaeb5c70867c58e24e61\"><code>bc9cd15</code></a>\r\ngopls/internal/settings: remove MemoryMode option</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bbc30f1f81aa4a8e2b390bdcc5ebb019e90d658e\"><code>bbc30f1</code></a>\r\ngopls/protocol: Allow AnnotatedTextEdits</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f40889dc8bf08e65329aa3f302ba7af3024d712d\"><code>f40889d</code></a>\r\ngopls/internal/analysis/stubmethods: fix OOB panic in fromValueSpec</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.16.0...v0.16.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.16.0&new-version=0.16.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T09:33:22-08:00",
          "tree_id": "6ac23b8db3dc26f2cfc59445be768b0cd3484631",
          "url": "https://github.com/runfinch/finch/commit/efecfcae8922f47581a4575125acbe375a706b11"
        },
        "date": 1702576375555,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44452294925,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3392,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1256239104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1996224,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42202,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 37236798323,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4168,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 37.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 159289344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1691280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 35301,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 505279395,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.033,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.72,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5052,
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
            "value": 33160,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 534,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "0c4e056a70babe205fe633e35f92b0aa2aed2c3a",
          "message": "ci(deps): Bump actions/upload-artifact from 2 to 4 (#737)\n\nBumps\r\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\r\nfrom 2 to 4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<p>The release of upload-artifact@v4 and download-artifact@v4 are major\r\nchanges to the backend architecture of Artifacts. They have numerous\r\nperformance and behavioral improvements.</p>\r\n<p>For more information, see the <a\r\nhref=\"https://github.com/actions/toolkit/tree/main/packages/artifact\"><code>@​actions/artifact</code></a>\r\ndocumentation.</p>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/vmjoseph\"><code>@​vmjoseph</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/464\">actions/upload-artifact#464</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v4.0.0\">https://github.com/actions/upload-artifact/compare/v3...v4.0.0</a></p>\r\n<h2>v3.1.3</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>chore(github): remove trailing whitespaces by <a\r\nhref=\"https://github.com/ljmf00\"><code>@​ljmf00</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/313\">actions/upload-artifact#313</a></li>\r\n<li>Bump <code>@​actions/artifact</code> version to v1.1.2 by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/436\">actions/upload-artifact#436</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v3.1.3\">https://github.com/actions/upload-artifact/compare/v3...v3.1.3</a></p>\r\n<h2>v3.1.2</h2>\r\n<ul>\r\n<li>Update all <code>@actions/*</code> NPM packages to their latest\r\nversions- <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/374\">#374</a></li>\r\n<li>Update all dev dependencies to their most recent versions - <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/375\">#375</a></li>\r\n</ul>\r\n<h2>v3.1.1</h2>\r\n<ul>\r\n<li>Update actions/core package to latest version to remove\r\n<code>set-output</code> deprecation warning <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/351\">#351</a></li>\r\n</ul>\r\n<h2>v3.1.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Bump <code>@​actions/artifact</code> to v1.1.0 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/327\">actions/upload-artifact#327</a>)\r\n<ul>\r\n<li>Adds checksum headers on artifact upload (<a\r\nhref=\"https://redirect.github.com/actions/toolkit/pull/1095\">actions/toolkit#1095</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/actions/toolkit/pull/1063\">actions/toolkit#1063</a>)</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<h2>v3.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update default runtime to node16 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/293\">#293</a>)</li>\r\n<li>Update package-lock.json file version to 2 (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/302\">#302</a>)</li>\r\n</ul>\r\n<h3>Breaking Changes</h3>\r\n<p>With the update to Node 16, all scripts will now be run with Node 16\r\nrather than Node 12.</p>\r\n<h2>v2.3.1</h2>\r\n<p>Fix for empty fails on Windows failing on upload <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/281\">#281</a></p>\r\n<h2>v2.3.0 Upload Artifact</h2>\r\n<ul>\r\n<li>Optimizations for faster uploads of larger files that are already\r\ncompressed</li>\r\n<li>Significantly improved logging when there are chunked uploads</li>\r\n<li>Clarifications in logs around the upload size and prohibited\r\ncharacters that aren't allowed in the artifact name or any uploaded\r\nfiles</li>\r\n<li>Various other small bugfixes &amp; optimizations</li>\r\n</ul>\r\n<h2>v2.2.4</h2>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/c7d193f32edcb7bfad88892161225aeda64e9392\"><code>c7d193f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/466\">#466</a>\r\nfrom actions/v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/13131bb095770b4070a7477c3cd2d96e1c16d9f4\"><code>13131bb</code></a>\r\nlicensed cache</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/4a6c273b9834f66a1d05c170dc3f80f9cdb9def1\"><code>4a6c273</code></a>\r\nMerge branch 'main' into v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/f391bb91a3d3118aeca171c365bb319ece276b37\"><code>f391bb9</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/465\">#465</a>\r\nfrom actions/robherley/v4-documentation</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/9653d03c4b74c32144e02dae644fea70e079d4b3\"><code>9653d03</code></a>\r\nApply suggestions from code review</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/875b63076402f25ef9d52c294c86ba4f97810575\"><code>875b630</code></a>\r\nadd limitations section</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/ecb21463e93740a6be75c3116242169bfdbcb15a\"><code>ecb2146</code></a>\r\nadd compression example</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/5e7604f84a055838f64ed68bb9904751523081ae\"><code>5e7604f</code></a>\r\ntrim some repeated info</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/d6437d07581fe318a364512e6cf6b1dca6b4f92c\"><code>d6437d0</code></a>\r\nnaming</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/1b561557037b4957d7d184e9aac02bec86c771eb\"><code>1b56155</code></a>\r\ns/v4-beta/v4/g</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v2...v4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=2&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T12:53:05-05:00",
          "tree_id": "5212cdf60f73beecd33016b17ab0b9a886b15732",
          "url": "https://github.com/runfinch/finch/commit/0c4e056a70babe205fe633e35f92b0aa2aed2c3a"
        },
        "date": 1702576590717,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44503720934,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3258,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1188708352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1997696,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42237,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30930976870,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.436,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 155168768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1394384,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29484,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 510325838,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3886,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.34,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5103,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33424,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 537,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "c98daa0c781e14dd582ef1e34b9b5dce59a44b7c",
          "message": "ci(deps): Bump actions/download-artifact from 2 to 4 (#736)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 2 to 4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<p>The release of upload-artifact@v4 and download-artifact@v4 are major\r\nchanges to the backend architecture of Artifacts. They have numerous\r\nperformance and behavioral improvements.</p>\r\n<p>For more information, see the <a\r\nhref=\"https://github.com/actions/toolkit/tree/main/packages/artifact\"><code>@​actions/artifact</code></a>\r\ndocumentation.</p>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/bflad\"><code>@​bflad</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/194\">actions/download-artifact#194</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v3...v4.0.0\">https://github.com/actions/download-artifact/compare/v3...v4.0.0</a></p>\r\n<h2>v3.0.2</h2>\r\n<ul>\r\n<li>Bump <code>@actions/artifact</code> to v1.1.1 - <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/195\">actions/download-artifact#195</a></li>\r\n<li>Fixed a bug in Node16 where if an HTTP download finished too quickly\r\n(&lt;1ms, e.g. when it's mocked) we attempt to delete a temp file that\r\nhas not been created yet <a\r\nhref=\"hhttps://redirect.github.com/actions/toolkit/pull/1278\">actions/toolkit#1278</a></li>\r\n</ul>\r\n<h2>v3.0.1</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/178\">Bump\r\n<code>@​actions/core</code> to 1.10.0</a></li>\r\n</ul>\r\n<h2>v3.0.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update default runtime to node16 (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/134\">actions/download-artifact#134</a>)</li>\r\n<li>Update package-lock.json file version to 2 (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/136\">actions/download-artifact#136</a>)</li>\r\n</ul>\r\n<h3>Breaking Changes</h3>\r\n<p>With the update to Node 16, all scripts will now be run with Node 16\r\nrather than Node 12.</p>\r\n<h2>v2.1.1</h2>\r\n<ul>\r\n<li>Bump <code>@actions/core</code> to the latest version to prevent\r\nbreaking changes once <code>set-output</code> and\r\n<code>save-state</code> commands are deprecated <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/210\">#21</a></li>\r\n</ul>\r\n<h2>v2.1.0 Download Artifact</h2>\r\n<ul>\r\n<li>Improved output &amp; logging</li>\r\n<li>Fixed issue where downloading all artifacts could cause display\r\npercentages to be over 100%</li>\r\n<li>Various small bug fixes &amp; improvements</li>\r\n</ul>\r\n<h2>v2.0.10</h2>\r\n<ul>\r\n<li>Retry on HTTP 500 responses from the service</li>\r\n</ul>\r\n<h2>v2.0.9</h2>\r\n<ul>\r\n<li>Fixes to proxy related issues</li>\r\n</ul>\r\n<h2>v2.0.8</h2>\r\n<ul>\r\n<li>Improvements to retryability if an error is encountered during\r\nartifact download</li>\r\n</ul>\r\n<h2>v2.0.7 download-artifact</h2>\r\n<ul>\r\n<li>Improved download retry-ability if a partial download is\r\nencountered</li>\r\n</ul>\r\n<h2>v2.0.6</h2>\r\n<p>Update actions/core NPM package that is used internally</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7a1cd3216ca9260cd8022db641d960b1db4d1be4\"><code>7a1cd32</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/246\">#246</a>\r\nfrom actions/v4-beta</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/8f32874a49903ea488c5e7d476a9173e8706f409\"><code>8f32874</code></a>\r\nlicensed cache</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/b5ff8444b1c4fcec8131f3cb1ddade813ddfacb1\"><code>b5ff844</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/245\">#245</a>\r\nfrom actions/robherley/v4-documentation</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/f07a0f73f51b3f1d41667c782c821b9667da9d19\"><code>f07a0f7</code></a>\r\nUpdate README.md</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7226129829bb686fdff47bd63bbd0d1373993a84\"><code>7226129</code></a>\r\nupdate test workflow to use different artifact names for matrix</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/ada9446619b84dd8a557aaaec3b79b58c4986cdf\"><code>ada9446</code></a>\r\nupdate docs and bump <code>@​actions/artifact</code></li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7eafc8b729ba790ce8f2cee54be8ad6257af4c7c\"><code>7eafc8b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/244\">#244</a>\r\nfrom actions/robherley/bump-toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/3132d12662b5915f20cdbf449465896962101abf\"><code>3132d12</code></a>\r\nconsume latest toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/5be1d3867182a382bc59f2775e002595f487aa88\"><code>5be1d38</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/243\">#243</a>\r\nfrom actions/robherley/v4-beta-updates</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/465b526e63559575a64716cdbb755bc78dfb263b\"><code>465b526</code></a>\r\nconsume latest <code>@​actions/toolkit</code></li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v2...v4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=2&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-14T12:52:50-05:00",
          "tree_id": "ba67d6c1b3df67071d8689f7370e0f414bbab523",
          "url": "https://github.com/runfinch/finch/commit/c98daa0c781e14dd582ef1e34b9b5dce59a44b7c"
        },
        "date": 1702576598783,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 46345785916,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3747,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 46.35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1236369408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2073136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43964,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31281168632,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4754,
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
            "value": 31.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 134631424,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1406992,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29778,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 506022075,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.03,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.94,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.506,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33232,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70125362b9e5ab058b7f3005a07b617d8f5c67a1",
          "message": "ci: update release-please action config to work with v4 (#738)\n\nIssue #, if available: N/A\r\n\r\n*Description of changes:* Our release-please GH action version was\r\nrecently bumped from v3 to v4 by a dependabot PR merge. Since then,\r\nwe've merged subsequent PRs but haven't had a new automated release PR\r\nbe created by the bot. This seems to be caused by the [breaking changes\r\ndescribed\r\nhere](https://github.com/google-github-actions/release-please-action?tab=readme-ov-file#upgrading-from-v3-to-v4).\r\n\r\nThis PR tries to migrate our config to work with version 4 of\r\nrelease-please.\r\n\r\n*Testing done:*\r\n- It's kinda hard to test this since the action runs remotely and uses\r\nthe GitHub repo itself as input. If anyone has an idea of how to test\r\nthis that can be done _before_ merging this PR, lmk and I can try it.\r\nOtherwise, seems pretty low-risk to merge and see what happens.\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2023-12-14T15:31:28-05:00",
          "tree_id": "30c23e2d0a73f6baac0c3e8291bc68c907d7645f",
          "url": "https://github.com/runfinch/finch/commit/70125362b9e5ab058b7f3005a07b617d8f5c67a1"
        },
        "date": 1702586098225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42673620607,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3901,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 38.46,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.67,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1110941696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1923384,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40539,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 37040056869,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4234,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 37.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 258531328,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1684920,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 35177,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 489536459,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5185,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.9,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4895,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32360,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 519,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "7d1e25068a503a8b4ea7dd3f349ff4020168a6fb",
          "message": "build(deps): Bump github.com/containerd/containerd from 1.7.10 to 1.7.11 (#742)\n\nBumps\r\n[github.com/containerd/containerd](https://github.com/containerd/containerd)\r\nfrom 1.7.10 to 1.7.11.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/containerd/containerd/releases\">github.com/containerd/containerd's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>containerd 1.7.11</h2>\r\n<p>Welcome to the v1.7.11 release of containerd!</p>\r\n<p>The eleventh patch release for containerd 1.7 contains various fixes\r\nand updates including\r\none security issue.</p>\r\n<h3>Notable Updates</h3>\r\n<ul>\r\n<li><strong>Fix Windows default path overwrite issue</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9440\">#9440</a>)</li>\r\n<li><strong>Update push to always inherit distribution sources from\r\nparent</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9452\">#9452</a>)</li>\r\n<li><strong>Update shim to use net dial for gRPC shim sockets</strong>\r\n(<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9458\">#9458</a>)</li>\r\n<li><strong>Fix otel version incompatibility</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9483\">#9483</a>)</li>\r\n<li><strong>Fix Windows snapshotter blocking snapshot GC on remove\r\nfailure</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9482\">#9482</a>)</li>\r\n<li><strong>Mask <code>/sys/devices/virtual/powercap</code> path in\r\nruntime spec and deny in default apparmor profile</strong> (<a\r\nhref=\"https://github.com/containerd/containerd/security/advisories/GHSA-7ww5-4wqc-m92c\">GHSA-7ww5-4wqc-m92c</a>)</li>\r\n</ul>\r\n<h3>Deprecation Warnings</h3>\r\n<ul>\r\n<li><strong>Emit deprecation warning for AUFS snapshotter</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9436\">#9436</a>)</li>\r\n<li><strong>Emit deprecation warning for v1 runtime</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9450\">#9450</a>)</li>\r\n<li><strong>Emit deprecation warning for deprecated CRI configs</strong>\r\n(<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9469\">#9469</a>)</li>\r\n<li><strong>Emit deprecation warning for CRI v1alpha1 usage</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9479\">#9479</a>)</li>\r\n<li><strong>Emit deprecation warning for CRIU config in CRI</strong> (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9481\">#9481</a>)</li>\r\n</ul>\r\n<p>See the changelog for complete list of changes</p>\r\n<p>Please try out the release binaries and report any issues at\r\n<a\r\nhref=\"https://github.com/containerd/containerd/issues\">https://github.com/containerd/containerd/issues</a>.</p>\r\n<h3>Contributors</h3>\r\n<ul>\r\n<li>Samuel Karp</li>\r\n<li>Derek McGowan</li>\r\n<li>Phil Estes</li>\r\n<li>Bjorn Neergaard</li>\r\n<li>Danny Canter</li>\r\n<li>Sebastiaan van Stijn</li>\r\n<li>ruiwen-zhao</li>\r\n<li>Akihiro Suda</li>\r\n<li>Amit Barve</li>\r\n<li>Charity Kathure</li>\r\n<li>Maksym Pavlenko</li>\r\n<li>Milas Bowman</li>\r\n<li>Paweł Gronowski</li>\r\n<li>Wei Fu</li>\r\n</ul>\r\n<h3>Changes</h3>\r\n<!-- raw HTML omitted -->\r\n<ul>\r\n<li>[release/1.7] Prepare release notes for v1.7.11 (<a\r\nhref=\"https://redirect.github.com/containerd/containerd/pull/9491\">#9491</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/64b8a811b07ba6288238eefc14d898ee0b5b99ba\"><code>64b8a81</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9491\">#9491</a>\r\nfrom dmcgowan/prepare-1.7.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/ea5a4778aa63b3bee0225ec368d4cd2af7dcd238\"><code>ea5a477</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9352\">#9352</a>\r\nfrom thaJeztah/1.7_update_golang_1.20.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/67d356cb3095f3e8f8ad7d36f9a733fea1e7e28c\"><code>67d356c</code></a>\r\nMerge pull request from GHSA-7ww5-4wqc-m92c</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/dfae68bc3e614a091d0a468c9026da370e3de0d9\"><code>dfae68b</code></a>\r\nPrepare release notes for v1.7.11</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/de6d8a8fc60851adbfc1d7c9567799357f288e5c\"><code>de6d8a8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9482\">#9482</a>\r\nfrom ambarve/sn_cleanup_1.7</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/ed7c6895bd3b33ccc7cfbc8cbd43f6a31333328a\"><code>ed7c689</code></a>\r\nDon't block snapshot garbage collection on Remove failures</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/467de562c108d074d81dd81d42150f98a6608eae\"><code>467de56</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9481\">#9481</a>\r\nfrom ruiwen-zhao/cri-u</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/d94f8ffeb057a89dd363fa220b24454cf88f0780\"><code>d94f8ff</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9483\">#9483</a>\r\nfrom dmcgowan/backport-1.7-fix-otel-http</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/1fdefdd2242fcf704a11f1d6b5149e056ce98ed3\"><code>1fdefdd</code></a>\r\nAdd warning for CRIU config usage</li>\r\n<li><a\r\nhref=\"https://github.com/containerd/containerd/commit/8e0689938a47e582ebefc5709b405fce3badd835\"><code>8e06899</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/containerd/containerd/issues/9479\">#9479</a>\r\nfrom ruiwen-zhao/cri-api-warning</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/containerd/containerd/compare/v1.7.10...v1.7.11\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/containerd/containerd&package-manager=go_modules&previous-version=1.7.10&new-version=1.7.11)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\nYou can disable automated security fix PRs for this repo from the\r\n[Security Alerts\r\npage](https://github.com/runfinch/finch/network/alerts).\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-21T11:28:41-08:00",
          "tree_id": "83f50efa0cc0cb8fcae9aba67a962755ba84e6bf",
          "url": "https://github.com/runfinch/finch/commit/7d1e25068a503a8b4ea7dd3f349ff4020168a6fb"
        },
        "date": 1703187141148,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44892611652,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3787,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1316638720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2015168,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42605,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 37242447868,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3986,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 37.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 154681344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1694864,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 35374,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 501825551,
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
            "value": 14.17,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5018,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32868,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f140aa39574ac20c4a1bff6812fa5c8b9fab4985",
          "message": "ci: move from manifest to config file (#746)\n\nIssue #, if available: release-please action not triggering as expected,\r\nsee\r\n[errors](https://github.com/runfinch/finch/actions/runs/7292396775/job/20104474662)\r\nand previous PR (https://github.com/runfinch/finch/pull/738)\r\n\r\n*Description of changes:*\r\n- I re-read the release-please-action\r\n[documentation](https://github.com/google-github-actions/release-please-action?tab=readme-ov-file#advanced-release-configuration),\r\nand I think I put the config in the wrong file in my previous PR.\r\n- Followed the instructions\r\n[here](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md)\r\nto create a manifest release since that seems to be what release-please\r\nrequires when using a config file on v4\r\n- Moved release-type to the config file instead of the yaml directly\r\nbecause the action [seems to\r\nbranch](https://github.com/google-github-actions/release-please-action/blob/cc61a07e2da466bebbc19b3a7dd01d6aecb20d1e/src/index.ts#L83)\r\nits behavior depending on if that's present or not\r\n \r\n*Testing done:*\r\n- Tested on my fork, but its hard to replicate the upstream perfectly\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-03T13:32:42-05:00",
          "tree_id": "7d104d833ea5aea94c3ee1890f2c80c4387fb308",
          "url": "https://github.com/runfinch/finch/commit/f140aa39574ac20c4a1bff6812fa5c8b9fab4985"
        },
        "date": 1704307031378,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45127216126,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3591,
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
            "value": 45.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1310924800,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2023072,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42811,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 509562884,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8094,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.94,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5095,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33093,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vsiravara@gmail.com",
            "name": "Vishwas Siravara",
            "username": "vsiravar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31cdc411d29758bae54a0b3fdb37be2777bd9fdc",
          "message": "exp: make finch work on windows with wsl2 (#649)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- translation logic to wsl paths\r\n- persistent disk for windows\r\n- CI/CD (workflows to run CI on every PR on windows runners, MSI\r\nbuilder, Windows release automation)\r\n\r\nThis PR combines 4 distinct PRs to a separate windev branch. \r\n- additional disk for windows https://github.com/runfinch/finch/pull/594\r\n- translation logic for wsl paths\r\nhttps://github.com/runfinch/finch/pull/581\r\n- CI https://github.com/runfinch/finch/pull/581\r\n- Installer https://github.com/runfinch/finch/pull/624\r\n\r\nThis PR also contains bug fixes and modifications to e2e tests.  \r\n*Testing done:*\r\nYes\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>\r\nSigned-off-by: Vishwas Siravara <vsiravar@gmail.com>\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nSigned-off-by: chaoningusc <chaoningusc@gmail.com>\r\nSigned-off-by: cnkevin@amazon.com <chaoningusc@gmail.com>\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: Vishwas Siravara <vsiravar@gmail.com>\r\nCo-authored-by: Gavin Inglis <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>\r\nCo-authored-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: chaoningusc <chaoningusc@gmail.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-10T11:19:44-05:00",
          "tree_id": "6bf7f9671f5669beb5edc14faf442320416479d2",
          "url": "https://github.com/runfinch/finch/commit/31cdc411d29758bae54a0b3fdb37be2777bd9fdc"
        },
        "date": 1704903802134,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45202184521,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3494,
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
            "value": 45.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1296150528,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2028000,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42923,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 32043957669,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4662,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 32.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 136757248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1440696,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 30557,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 491649762,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8703,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.45,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4916,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32450,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 520,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "c3ae96794165b4ea696bb94856d40ff91767ed1b",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.24.0 to 1.24.1 (#749)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.24.0 to 1.24.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/47dd1b1bcbde244357a82ef00fa6a61a9bfb9b39\"><code>47dd1b1</code></a>\r\nRelease 2024-01-04</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/23145e3e605a93582020facfe13350b4153714e1\"><code>23145e3</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/00e57bb7feb2d104387103aa4fbcd55dfff3a6a7\"><code>00e57bb</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/73e1a99f2fa858ca56627779852768a9198ba057\"><code>73e1a99</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2441\">#2441</a>\r\nfrom RanVaknin/fix-documentation-config</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0f8ad11593c219c52ad7fb12998c75ade39dc7ad\"><code>0f8ad11</code></a>\r\nFix SRA auth trailing checksum retry bug (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2438\">#2438</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/efbc5aa622a882167129e69a88aa50c730cd1904\"><code>efbc5aa</code></a>\r\nRelease 2024-01-03</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/78357bb87682230e24b15c01e807d7375a9474e4\"><code>78357bb</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e465ddd60d18e91b34de5917534cfa1542323027\"><code>e465ddd</code></a>\r\nUpdate endpoints model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/384ad3b7ec21eecb3c6c38b69f86fb6342906b11\"><code>384ad3b</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/1126a91e53a20b18bc1db74225a8417bfb63f427\"><code>1126a91</code></a>\r\nchangelog added</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.24.0...v1.24.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.24.0&new-version=1.24.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-10T13:44:36-08:00",
          "tree_id": "f6e13dcdc163db1055b42f1e2a4ae00f1bae9d35",
          "url": "https://github.com/runfinch/finch/commit/c3ae96794165b4ea696bb94856d40ff91767ed1b"
        },
        "date": 1704923737562,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41294152861,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.32,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 31.25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 41.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1204269056,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1866016,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39255,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31134373150,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.462,
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
            "value": 31.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 147017728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1402024,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29654,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 511150192,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6137,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.1,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5111,
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
            "value": 33501,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 541,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278",
          "message": "build(deps): Bump golang.org/x/crypto from 0.16.0 to 0.18.0 (#751)",
          "timestamp": "2024-01-12T00:18:52+05:30",
          "tree_id": "29743e38ad1008f1e4155c845df31db67d9e8a2a",
          "url": "https://github.com/runfinch/finch/commit/fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278"
        },
        "date": 1704999147558,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44673914709,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3543,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 38.46,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.67,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1253261312,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2005440,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42387,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30978708338,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5029,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.98,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 86073344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1395776,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29529,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 485233328,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.309,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 25.66,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4852,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32400,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab5bccb1b1803c4cba835a9e7b68632e296060e5",
          "message": "ci: disable secrets for dependabot PRs (#756)\n\nIssue #, if available:\r\nhttps://github.com/dependabot/dependabot-core/issues/3253#issuecomment-852541544\r\n\r\n*Description of changes:*\r\nWe've seen several tests fail lately, mainly on Windows, for the reason\r\nthat the `aws-actions/configure-aws-credentials` action is failing [like\r\nso](https://github.com/runfinch/finch/actions/runs/7477790251/job/20351287299):\r\n```\r\nRun aws-actions/configure-aws-credentials@010d0da01d0b5a38af31e9c3470dbfdabdecca3a\r\n  with:\r\n    role-session-name: credhelper-test\r\n    audience: sts.amazonaws.com\r\n  env:\r\n    has_creds: true\r\nError: Input required and not supplied: aws-region\r\n```\r\n\r\nThe role-to-assume and aws-region aren't even passed into the action as\r\ninputs. Since this seems to only happen on Windows and on dependabot\r\nPRs, it leads me to believe that this is the root cause:\r\nhttps://github.com/dependabot/dependabot-core/issues/3253#issuecomment-852541544.\r\nThe issue describes how/why dependabot PRs are have secrets disabled in\r\ndepth, which lines up with the errors we're seeing.\r\n\r\nThe reason this only occurred for Windows e2e test runs is because the\r\ncondition that was set for macOS always evaluated to false, due to a\r\nsyntax error (which should also be fixed by this PR).\r\n\r\n*Testing done:*\r\n- It's pretty hard to test this since I'm not dependabot, but we'll know\r\nas soon as this PR is merged and the dependabot PRs are rebased.\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-11T15:59:14-05:00",
          "tree_id": "9ad285383548380d69ff49851e177df8ddd83e71",
          "url": "https://github.com/runfinch/finch/commit/ab5bccb1b1803c4cba835a9e7b68632e296060e5"
        },
        "date": 1705006970657,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45613711158,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3457,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 45.61,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1349550080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2043016,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43260,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31033001202,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4503,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.03,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 36069376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1397592,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29578,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 514522732,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4928,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.86,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5145,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33380,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 541,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "ae6db09af37a6a2e2752a772da126c409a0866e1",
          "message": "ci(deps): Bump actions/download-artifact from 4.1.0 to 4.1.1 (#754)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 4.1.0 to 4.1.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.1</h2>\r\n<ul>\r\n<li>Fix transient request timeouts <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/249\">actions/download-artifact#249</a></li>\r\n<li>Bump <code>@actions/artifacts</code> to latest version</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6b208ae046db98c579e8a3aa621ab581ff575935\"><code>6b208ae</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/274\">#274</a>\r\nfrom actions/vmjoseph/timeout-patch</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6c5b5806e1d833ffbeb6c412b38ba07d67086dc6\"><code>6c5b580</code></a>\r\nonly adding updated license</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/5f5015dc38f8eb6cafa9c4d68689495abffbea38\"><code>5f5015d</code></a>\r\nreadding index</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/1fddaaf0f1912c34f984d46c39e99a66afa07172\"><code>1fddaaf</code></a>\r\nRevert &quot;updating licenses&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/8aa9e2115bb091db1962857dc393a054568a7851\"><code>8aa9e21</code></a>\r\nRevert &quot;updating dist&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/657edd9b813fc9cdb0cddf8601de283f4ecea661\"><code>657edd9</code></a>\r\nupdating licenses</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/555a2fc1299fb63c5a4e673a65c8b9e6e3474b22\"><code>555a2fc</code></a>\r\nupdating dist</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/4fc4d70d4c55025435f9bfd763515cecf048fc86\"><code>4fc4d70</code></a>\r\nupdating lock</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/072ac9dcebef67fdbbc9612b2879103e0e877f16\"><code>072ac9d</code></a>\r\nupdating version no</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/038dc0329f0e804ae981db8af9f43b00a55b10de\"><code>038dc03</code></a>\r\nupdating version no</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/f44cd7b40bfd40b6aa1cc1b9b5b7bf03d3c67110...6b208ae046db98c579e8a3aa621ab581ff575935\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4.1.0&new-version=4.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T16:02:00-05:00",
          "tree_id": "49f7b4dca582fd1a0d81a5c25ad9cf57708496c0",
          "url": "https://github.com/runfinch/finch/commit/ae6db09af37a6a2e2752a772da126c409a0866e1"
        },
        "date": 1705009736501,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42945677471,
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
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1112207360,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1933208,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40777,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31013534448,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4834,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 64.71,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.01,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 169906176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1394728,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29507,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 501486742,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7371,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.24,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5014,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32940,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "eb55877a330d4c45eb210a19188f54032d7f8274",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.11 to 3.23.12 (#744)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.11 to 3.23.12.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.12</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>Avoid some uses of regexps by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1570\">shirou/gopsutil#1570</a></li>\r\n<li>Avoid repeated regexp compilations by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1569\">shirou/gopsutil#1569</a></li>\r\n</ul>\r\n<h3>disk</h3>\r\n<ul>\r\n<li>feat(disk): look for filesystem labels from udev on Linux by <a\r\nhref=\"https://github.com/scop\"><code>@​scop</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1573\">shirou/gopsutil#1573</a></li>\r\n</ul>\r\n<h3>host</h3>\r\n<ul>\r\n<li>add deepin and uos distro by <a\r\nhref=\"https://github.com/keeword\"><code>@​keeword</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1561\">shirou/gopsutil#1561</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>Revert &quot;chore(deps): bump actions/labeler from 4.3.0 to\r\n5.0.0&quot; by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1564\">shirou/gopsutil#1564</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/keeword\"><code>@​keeword</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1561\">shirou/gopsutil#1561</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12\">https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/df3c7bdec0a58ca29b74457e37bc545f540eb4a0\"><code>df3c7bd</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1573\">#1573</a>\r\nfrom scop/feat/udev-fs-label</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/adaeba09d9ed5b0a95d0cf7656034d8873565ff7\"><code>adaeba0</code></a>\r\nfeat(disk): look for filesystem labels from udev on Linux</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4870f6f119fadb622039e083a9e2280f1da415b5\"><code>4870f6f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1569\">#1569</a>\r\nfrom scop/perf/regex-compile</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/08afc01d17fd284d59e4ef0d51ad976e9d706e99\"><code>08afc01</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1570\">#1570</a>\r\nfrom scop/perf/unnecessary-regexps</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/11bc5b3970859642148dbd0fa3157c4945498a5e\"><code>11bc5b3</code></a>\r\nAvoid some uses of regexps</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/362fa4b9c4058915c41458e68fd0ac297f2625cd\"><code>362fa4b</code></a>\r\nAvoid repeated regexp compilations</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/108235a0983e3f136a707ddfd5d73b2478673636\"><code>108235a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1561\">#1561</a>\r\nfrom keeword/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/f308985abbab0da2951cdc404491eb9df5881831\"><code>f308985</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1563\">#1563</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/5ce87a61133b1f0a3508591dde9f6104dea799ad\"><code>5ce87a6</code></a>\r\nchore(deps): bump actions/upload-artifact from 3.1.3 to 4.0.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4b820ed2cad8a89a7921ff74c16043d6834978c1\"><code>4b820ed</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1564\">#1564</a>\r\nfrom shirou/revert-1559-dependabot/github_actions/ac...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.11...v3.23.12\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.11&new-version=3.23.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T16:06:32-05:00",
          "tree_id": "b7fb8de04ea3118bd0f637850c13b4759d06206d",
          "url": "https://github.com/runfinch/finch/commit/eb55877a330d4c45eb210a19188f54032d7f8274"
        },
        "date": 1705009950663,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42427399698,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4019,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1215205376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1909320,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40245,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31297642906,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5451,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 83935232,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1406864,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29773,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 501086265,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.722,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.98,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.501,
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
            "value": 32525,
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
          "id": "9a08b45466cc58326df05d94dfe91edd07158759",
          "message": "build(deps): Bump golang.org/x/image from 0.0.0-20210220032944-ac19c3e999fb to 0.10.0 (#752)\n\nBumps [golang.org/x/image](https://github.com/golang/image) from\r\n0.0.0-20210220032944-ac19c3e999fb to 0.10.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/image/commits/v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/image&package-manager=go_modules&previous-version=0.0.0-20210220032944-ac19c3e999fb&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\nYou can disable automated security fix PRs for this repo from the\r\n[Security Alerts\r\npage](https://github.com/runfinch/finch/network/alerts).\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-11T13:52:57-08:00",
          "tree_id": "227ea982fbb3bd2057aec38607f2ddaa89efc997",
          "url": "https://github.com/runfinch/finch/commit/9a08b45466cc58326df05d94dfe91edd07158759"
        },
        "date": 1705010204515,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42435712213,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.394,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.44,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1228619776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1914256,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40351,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31051537333,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4431,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 127762432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1398688,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29597,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 492549201,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8625,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.49,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4925,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32221,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 519,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb",
          "message": "build(deps): Bump submodules and dependencies (#733)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nSigned-off-by: Mrudul Harwani <mharwani@amazon.com>\r\nCo-authored-by: ginglis13 <ginglis13@users.noreply.github.com>",
          "timestamp": "2024-01-11T15:25:54-08:00",
          "tree_id": "f04b17052e4606778765629a0f3702e029fcba9a",
          "url": "https://github.com/runfinch/finch/commit/8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb"
        },
        "date": 1705015758214,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42937790546,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3676,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1316638720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1935424,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40810,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27955945686,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3957,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 111177728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1268944,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26640,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 511742684,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5407,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.78,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5117,
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
            "value": 33240,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "89623dab53f0128c1616c66a7361a5ce3df847c3",
          "message": "build(deps): Bump golang.org/x/tools from 0.16.1 to 0.17.0 (#757)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.16.1\r\nto 0.17.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0b1f1d4bc227cc2e610854f23e14696becb9e46c\"><code>0b1f1d4</code></a>\r\ngopls/internal/lsp/cache: (re-)ensure clean shutdown</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/706525de51451bb409297f305f23ac473eb693ff\"><code>706525d</code></a>\r\ngopls/internal/lsp/source/completion: support postfix completion\r\n(iferr,</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/581c0b357f883185d60780718e053e600005dac4\"><code>581c0b3</code></a>\r\ngopls/internal/lsp/source: add receiver name to stubbed methods</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c95fa0ff4c2370b6f4b78947fc45987c8d0d664a\"><code>c95fa0f</code></a>\r\ngopls/internal/test: skip marker tests on darwin builders if -short</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/25a0e9d3e36e70c0dd9ab7302baa370bd20373b1\"><code>25a0e9d</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c9c95f97fda18f56ab4c8c406e9f48a4cb3b3d7e\"><code>c9c95f9</code></a>\r\ninternal/refactor/inline: improve a confusing error message</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ba8672b53f4b6840528df6fd534cb16f65278711\"><code>ba8672b</code></a>\r\ngo/analysis/passes/unusedresult: add functions from slices package</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3e8a0a3b0845dc1af9def080412d0a11d11a10d6\"><code>3e8a0a3</code></a>\r\ngopls/internal/lsp/cache: address additional comments from CL\r\n553095</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/920d665b996049294bff24b972efc9f3d949a8ba\"><code>920d665</code></a>\r\ngopls/internal/cmd: factor three loops in fix subcommand</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/782573673af31588817cb7e79a1baeca1570609c\"><code>7825736</code></a>\r\ngopls/internal/lsp/cache: simplify critical errors</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.16.1...v0.17.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.16.1&new-version=0.17.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-12T11:05:14-08:00",
          "tree_id": "fcfa893cdacfdc942ce32fc233324f115b8fae0a",
          "url": "https://github.com/runfinch/finch/commit/89623dab53f0128c1616c66a7361a5ce3df847c3"
        },
        "date": 1705086568971,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42593919176,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3752,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1347620864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1919120,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40458,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27503474347,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3957,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16736256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1250072,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26209,
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
          "id": "7d3a7c84b02d70edad7947573f77dada22332f41",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0 (#758)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.13.2 to 2.14.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.14.0</h2>\r\n<h2>2.14.0</h2>\r\n<h3>Features</h3>\r\n<p>You can now use <code>GinkgoTB()</code> when you need an instance of\r\n<code>testing.TB</code> to pass to a library.</p>\r\n<p>Prior to this release table testing only supported generating\r\nindividual <code>It</code>s for each test entry.\r\n<code>DescribeTableSubtree</code> extends table testing support to\r\nentire testing subtrees - under the hood\r\n<code>DescrieTableSubtree</code> generates a new container for each\r\nentry and invokes your function to fill our the container. See the <a\r\nhref=\"https://onsi.github.io/ginkgo/#generating-subtree-tables\">docs</a>\r\nto learn more.</p>\r\n<ul>\r\n<li>Introduce DescribeTableSubtree [65ec56d]</li>\r\n<li>add GinkgoTB() to docs [4a2c832]</li>\r\n<li>Add GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)\r\n[92b6744]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)\r\n[beb9507]</li>\r\n<li>Fix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)\r\n[4ac3a13]</li>\r\n<li>allow wasm to compile with ginkgo present (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1311\">#1311</a>)\r\n[b2e5bc5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)\r\n[465a8ec]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)\r\n[eab0e40]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)\r\n[fbf9724]</li>\r\n<li>Bump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)\r\n[3ee80ee]</li>\r\n<li>Bump golang.org/x/tools from 0.14.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1306\">#1306</a>)\r\n[123e1d5]</li>\r\n<li>Bump github.com/onsi/gomega from 1.29.0 to 1.30.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1297\">#1297</a>)\r\n[558f6e0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1307\">#1307</a>)\r\n[84ff7f3]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.14.0</h2>\r\n<h3>Features</h3>\r\n<p>You can now use <code>GinkgoTB()</code> when you need an instance of\r\n<code>testing.TB</code> to pass to a library.</p>\r\n<p>Prior to this release table testing only supported generating\r\nindividual <code>It</code>s for each test entry.\r\n<code>DescribeTableSubtree</code> extends table testing support to\r\nentire testing subtrees - under the hood\r\n<code>DescrieTableSubtree</code> generates a new container for each\r\nentry and invokes your function to fill our the container. See the <a\r\nhref=\"https://onsi.github.io/ginkgo/#generating-subtree-tables\">docs</a>\r\nto learn more.</p>\r\n<ul>\r\n<li>Introduce DescribeTableSubtree [65ec56d]</li>\r\n<li>add GinkgoTB() to docs [4a2c832]</li>\r\n<li>Add GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)\r\n[92b6744]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)\r\n[beb9507]</li>\r\n<li>Fix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)\r\n[4ac3a13]</li>\r\n<li>allow wasm to compile with ginkgo present (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1311\">#1311</a>)\r\n[b2e5bc5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)\r\n[465a8ec]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)\r\n[eab0e40]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)\r\n[fbf9724]</li>\r\n<li>Bump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)\r\n[3ee80ee]</li>\r\n<li>Bump golang.org/x/tools from 0.14.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1306\">#1306</a>)\r\n[123e1d5]</li>\r\n<li>Bump github.com/onsi/gomega from 1.29.0 to 1.30.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1297\">#1297</a>)\r\n[558f6e0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1307\">#1307</a>)\r\n[84ff7f3]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/beaf16d17f98f30365a11ff236583d611c094078\"><code>beaf16d</code></a>\r\nv2.14.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4a2c8326e1a618a6dba9339e14755b30118e4260\"><code>4a2c832</code></a>\r\nadd GinkgoTB() to docs</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/92b6744a3a0c4e7a196009a0620b6c211e1d8b8e\"><code>92b6744</code></a>\r\nAdd GinkgoTB() function (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1333\">#1333</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/beb95072b84ada2addccf9dca167a35f56d2af39\"><code>beb9507</code></a>\r\nFix typo in internal/suite.go (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1332\">#1332</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/65ec56d254aaa3e221933e911aa1540f1e93bd00\"><code>65ec56d</code></a>\r\nIntroduce DescribeTableSubtree</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4ac3a130a33f4839442f45331e3386b1d3d94a23\"><code>4ac3a13</code></a>\r\nFix typo in docs/index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1319\">#1319</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/465a8ec1bb583f2f30af269e09b69d7142d11d0c\"><code>465a8ec</code></a>\r\nBump golang.org/x/tools from 0.16.0 to 0.16.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1316\">#1316</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/eab0e40d801360cf7a3665b47ebe80c08c8259e2\"><code>eab0e40</code></a>\r\nBump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1313\">#1313</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/fbf9724382128d09643cb1339b838d9991745819\"><code>fbf9724</code></a>\r\nBump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1317\">#1317</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/3ee80ee27f78973801684cd6da1a9c8d443bcf9d\"><code>3ee80ee</code></a>\r\nBump golang.org/x/crypto (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1318\">#1318</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.13.2...v2.14.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.13.2&new-version=2.14.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-12T12:46:44-08:00",
          "tree_id": "0c619c94ba05949f497359ea4e72b8da1c7e2fef",
          "url": "https://github.com/runfinch/finch/commit/7d3a7c84b02d70edad7947573f77dada22332f41"
        },
        "date": 1705092605278,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 40884076809,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3838,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 40.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1284710400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1849296,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 38872,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28326494181,
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
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 28.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17817600,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1282352,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26954,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 504354202,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3068,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.43,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5043,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33156,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "bb17a96b58b85c42fdc6fbd093209ce1ab900707",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.11 to 0.7.12 (#761)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.7.11 to 0.7.12.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.12</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">0.7.12</a>\r\n(2024-01-13)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> Bump github.com/onsi/ginkgo/v2 from 2.13.2 to\r\n2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\">ece5ec6</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\">8aeb41a</a>)</li>\r\n<li>increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\">33308d0</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">0.7.12</a>\r\n(2024-01-13)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> Bump github.com/onsi/ginkgo/v2 from 2.13.2 to\r\n2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\">ece5ec6</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\">8aeb41a</a>)</li>\r\n<li>increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\">33308d0</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/d5a29d515cf91e308504fb61c58c8903a7d0b1f5\"><code>d5a29d5</code></a>\r\nchore(main): release 0.7.12 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/113\">#113</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/33308d0ea9235454783bd88cc40de3d84852974a\"><code>33308d0</code></a>\r\nfix: increase nginx pull timeout (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/114\">#114</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/ece5ec6eab9870208c693bdf34ee8371373b3501\"><code>ece5ec6</code></a>\r\nbuild(deps): Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/112\">#112</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8aeb41a875c62a0aedfe7042861c424d42ab7bb1\"><code>8aeb41a</code></a>\r\nfix: allow propagation time for async conditions (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/111\">#111</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.11...v0.7.12\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.7.11&new-version=0.7.12)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-16T12:24:28-05:00",
          "tree_id": "e7b2bd710797bd598202acf73a6ff2ea46524980",
          "url": "https://github.com/runfinch/finch/commit/bb17a96b58b85c42fdc6fbd093209ce1ab900707"
        },
        "date": 1705426134056,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43105550200,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3358,
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
            "value": 43.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1274363904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1939896,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40900,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 499950923,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5101,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.75,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4999,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32786,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 527,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "fa85ba694545c4c82b6449c1845a6ed48b642d1b",
          "message": "ci(deps): Bump actions/upload-artifact from 4.0.0 to 4.1.0 (#760)\n\nBumps\r\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\r\nfrom 4.0.0 to 4.1.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Add migrations docs by <a\r\nhref=\"https://github.com/robherley\"><code>@​robherley</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/482\">actions/upload-artifact#482</a></li>\r\n<li>Update README.md by <a\r\nhref=\"https://github.com/samuelwine\"><code>@​samuelwine</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/492\">actions/upload-artifact#492</a></li>\r\n<li>Support artifact-url output by <a\r\nhref=\"https://github.com/konradpabjan\"><code>@​konradpabjan</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/496\">actions/upload-artifact#496</a></li>\r\n<li>Update readme to reflect new 500 artifact per job limit by <a\r\nhref=\"https://github.com/robherley\"><code>@​robherley</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/497\">actions/upload-artifact#497</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/samuelwine\"><code>@​samuelwine</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/492\">actions/upload-artifact#492</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.1.0\">https://github.com/actions/upload-artifact/compare/v4...v4.1.0</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/1eb3cb2b3e0f29609092a73eb033bb759a334595\"><code>1eb3cb2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/497\">#497</a>\r\nfrom actions/robherley/update-readme-limit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/8688a86492f53c8d67423223a877bc9e3768fe95\"><code>8688a86</code></a>\r\nUpdate readme to reflect new artifact/job limit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/73d8b66ede50d06e26f1d69f28e1652c702c56d8\"><code>73d8b66</code></a>\r\nSupport artifact-url output (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/496\">#496</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/c320f57948d137eb8c7f8e781ddcc0f61b04e834\"><code>c320f57</code></a>\r\nUpdate README.md (<a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/492\">#492</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/cf8714cfeaba5687a442b9bcb85b29e23f468dfa\"><code>cf8714c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/482\">#482</a>\r\nfrom actions/robherley/add-migration-docs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/7f16e37e88af9d50a1db3c1e84660985ee8dd1ab\"><code>7f16e37</code></a>\r\nadd migrations docs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/353073034f1f3c6d1a65ede161c5a2ca79650a49\"><code>3530730</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/468\">#468</a>\r\nfrom actions/robherley/misc-updates</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/6c139afa6f18a1359e5a9185f9415433473e3793\"><code>6c139af</code></a>\r\nupdate imports and old v4-beta references</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/c7d193f32edcb7bfad88892161225aeda64e9392...1eb3cb2b3e0f29609092a73eb033bb759a334595\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4.0.0&new-version=4.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-16T12:25:30-05:00",
          "tree_id": "71e06288cc00059923e759430deb91cf36e48c8e",
          "url": "https://github.com/runfinch/finch/commit/fa85ba694545c4c82b6449c1845a6ed48b642d1b"
        },
        "date": 1705426149620,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 40199190285,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4358,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 40.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1413173248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1821944,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 38257,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28143592519,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5073,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
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
            "value": 16822272,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1275088,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26790,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 489522455,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.826,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 33.57,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4895,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -19114,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32224,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 516,
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
          "id": "ec9d697bb82cce541f22dba76150de99bf17c6ac",
          "message": "ci: Enable nightly build for Windows MSI and integrate action into 1 click release automation (#695)\n\nEnable nightly build for Windows MSI and integrate atom action into 1\r\nclick automation\r\n\r\n*Description of changes:*\r\nAdded the scheduled time to Windows build and test action.\r\n\r\n*Testing done:*\r\nTODO\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>\r\nSigned-off-by: Vishwas Siravara <vsiravar@gmail.com>\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nSigned-off-by: chaoningusc <chaoningusc@gmail.com>\r\nSigned-off-by: cnkevin@amazon.com <chaoningusc@gmail.com>\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>\r\nCo-authored-by: Vishwas Siravara <siravara@amazon.com>\r\nCo-authored-by: Vishwas Siravara <vsiravar@gmail.com>\r\nCo-authored-by: Vishwas Siravara <vsiravara@gmail.com>\r\nCo-authored-by: Gavin Inglis <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>\r\nCo-authored-by: chaoningusc <chaoningusc@gmail.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-18T19:04:02-05:00",
          "tree_id": "e69b829f722dec1a7c9cf2f50d1aea09eecd6cdf",
          "url": "https://github.com/runfinch/finch/commit/ec9d697bb82cce541f22dba76150de99bf17c6ac"
        },
        "date": 1705623443646,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42455619645,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4405,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1418579968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1914592,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40326,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27871204550,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4098,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17862656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1266552,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26586,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "673c2a5315b562a1f3c18413575c874d8956daad",
          "message": "ci: make tests more reliable and debuggable (#759)\n\nIssue #, if available: The most common case for macOS tests failing\r\nseems to be vm init or vm start failing (or, partially failing), see:\r\nhttps://github.com/runfinch/finch/actions/runs/7493200344/job/20398390952,\r\nhttps://github.com/runfinch/finch/actions/runs/7493150724/job/20398225275,\r\nhttps://github.com/runfinch/finch/actions/runs/7493910137/job/20400678411\r\n\r\n*Description of changes:*\r\n- Adds a delay between vm state changes. I'm not sure if this will fix\r\nthe issue, but its worth a try\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-22T10:18:42-05:00",
          "tree_id": "ee18a050ca846eefb2426eebca2ea99597c9d3ae",
          "url": "https://github.com/runfinch/finch/commit/673c2a5315b562a1f3c18413575c874d8956daad"
        },
        "date": 1705942753894,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43112115935,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3121,
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
            "value": 43.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1216446464,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1944072,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41005,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30412191115,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4344,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 41.18,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.41,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 190894080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1368808,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28900,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 503134605,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.193,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.87,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5031,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33052,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 533,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "700cb92da72510b47498c48f188c50806382a291",
          "message": "fix: properly reload persistent snapshotter data and restart services (#767)\n\nIssue #, if available: re-verified #412\r\n- Through extensive e2e test debugging, I noticed that soci and stargz\r\nsnapshotters weren't persisting data as expected. After debugging, I\r\nfound some context in these two PRs:\r\n  - https://github.com/awslabs/soci-snapshotter/pull/881\r\n  - https://github.com/containerd/stargz-snapshotter/pull/1526\r\nUnfortunately, neither of them are deployed yet, so I've implemented a\r\nhacky workaround for now. After this change, an image/container can be\r\npull/run, the VM can be restarted, and then the container can be\r\nre-started again.\r\n\r\n*Description of changes:*\r\n- Redo how BuildKit/Stargz/SOCI are related to containerd using\r\n[systemd's `PartOf`\r\n\r\n](https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html#PartOf=)\r\n- this ensures that all of these services are restarted when containerd\r\nis restarted, which the lack of has caused errors in the past\r\n- Create some missing directories that might throw errors in cloud-init\r\n- Ensure that `SIGTERM` is used to kill the snapshotter services for now\r\n\r\n*Testing done:*\r\n- manual testing\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-29T11:43:15-05:00",
          "tree_id": "ebf927cf48687823362eb8c5c436ccb9d255d6be",
          "url": "https://github.com/runfinch/finch/commit/700cb92da72510b47498c48f188c50806382a291"
        },
        "date": 1706546810221,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44275077735,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3582,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1149161472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1986184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41982,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30455772684,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4471,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 203329536,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1370032,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28947,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 487025619,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9109,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 28.09,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.487,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -19114,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32405,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 517,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "ef8880c5c14eeb2469e89bb6630d9040ddbaa515",
          "message": "ci(deps): Bump benchmark-action/github-action-benchmark from 1.18.0 to 1.19.2 (#775)\n\nBumps\r\n[benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)\r\nfrom 1.18.0 to 1.19.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases\">benchmark-action/github-action-benchmark's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.19.2</h2>\r\n<ul>\r\n<li><strong>fix</strong> - markdown rendering for summary is broken (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/218\">#218</a>)</li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.1...v1.19.2\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.1...v1.19.2</a></p>\r\n<h2>v1.19.1</h2>\r\n<ul>\r\n<li><strong>fix</strong> improve flaky CI runs (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/215\">#215</a>)</li>\r\n<li><strong>fix</strong> write with retry fails with the separate\r\nrepository (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/216\">#216</a>)</li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.0...v1.19.1\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.0...v1.19.1</a></p>\r\n<h2>v1.19.0</h2>\r\n<ul>\r\n<li><strong>docs</strong> Add description for skip-fetch-gh-pages (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/180\">#180</a>)</li>\r\n<li><strong>fix</strong> Mismatch input in action.yml (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/191\">#191</a>)</li>\r\n<li><strong>fix</strong> Update Manifest.toml to fix julia test failure\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/210\">#210</a>)</li>\r\n<li><strong>chore</strong> update to node 20 (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/208\">#208</a>)</li>\r\n<li><strong>chore</strong> update actions/* (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/212\">#212</a>)</li>\r\n<li><strong>fix</strong> summary-always and gh-repository don't work\r\ntogether (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/214\">#214</a>)</li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.18.0...v1.19.0\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.18.0...v1.19.0</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md\">benchmark-action/github-action-benchmark's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>Unreleased</h2>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.2\">v1.19.2</a>\r\n- 26 Jan 2024</h1>\r\n<ul>\r\n<li><strong>fix</strong> markdown rendering for summary is broken (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/218\">#218</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.1\">v1.19.1</a>\r\n- 25 Jan 2024</h1>\r\n<ul>\r\n<li><strong>fix</strong> improve flaky CI runs (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/215\">#215</a>)</li>\r\n<li><strong>fix</strong> write with retry fails with the separate\r\nrepository (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/216\">#216</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.0\">v1.19.0</a>\r\n- 25 Jan 2024</h1>\r\n<ul>\r\n<li><strong>docs</strong> Add description for skip-fetch-gh-pages (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/180\">#180</a>)</li>\r\n<li><strong>fix</strong> Mismatch input in action.yml (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/191\">#191</a>)</li>\r\n<li><strong>fix</strong> Update Manifest.toml to fix julia test failure\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/210\">#210</a>)</li>\r\n<li><strong>chore</strong> update to node 20 (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/208\">#208</a>)</li>\r\n<li><strong>chore</strong> update actions/* (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/212\">#212</a>)</li>\r\n<li><strong>fix</strong> summary-always and gh-repository don't work\r\ntogether (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/214\">#214</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.18.0\">v1.18.0</a>\r\n- 07 Jul 2023</h1>\r\n<ul>\r\n<li><strong>feat</strong> getServerUrl refers to the GITHUB_SERVER_URL\r\nenvironment variable (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/169\">#169</a>)</li>\r\n<li><strong>feat</strong> extract multiple metrics from Golang\r\nbenchmarks (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/177\">#177</a>)</li>\r\n<li><strong>fix</strong> getCommitFromGitHubAPIRequest to refer to\r\nGITHUB_API_URL (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/171\">#171</a>)</li>\r\n<li><strong>chore</strong> Remove unreachable code from extract.ts (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/153\">#153</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.17.0\">v1.17.0</a>\r\n- 26 Apr 2023</h1>\r\n<ul>\r\n<li><strong>feat</strong> support for JMH parameters (as separate\r\ncharts) (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/161\">#161</a>)</li>\r\n<li><strong>feat</strong> enable user to specify the ref being tested\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/163\">#163</a>)</li>\r\n<li><strong>feat</strong> allow more characters in Golang bench outputs\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/131\">#131</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.16.2\">v1.16.2</a>\r\n- 08 Feb 2023</h1>\r\n<ul>\r\n<li><strong>Fix</strong> use commit.id over commit object (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/155\">#155</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.16.1\">v1.16.1</a>\r\n- 06 Feb 2023</h1>\r\n<ul>\r\n<li><strong>Fix</strong> action.yml missing <code>summary-always</code>\r\ninput</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.16.0\">v1.16.0</a>\r\n- 05 Feb 2023</h1>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/315072f079db10e96004ffb95b9b7263bf3a547e\"><code>315072f</code></a>\r\nv1.19.2</li>\r\n<li><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/43d26a5d4cf455feb00c366b6c6a0a3e01813139\"><code>43d26a5</code></a>\r\nv1.19.1</li>\r\n<li><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/a16dfc786053b0fa10c71986e0939a85fae09e76\"><code>a16dfc7</code></a>\r\nv1.19.0</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/70405016b032d44f409e4b1b451c40215cbe2393...315072f079db10e96004ffb95b9b7263bf3a547e\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=benchmark-action/github-action-benchmark&package-manager=github_actions&previous-version=1.18.0&new-version=1.19.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-29T11:55:03-05:00",
          "tree_id": "156755520d17489bee48b6dfae8e002bbea5ad25",
          "url": "https://github.com/runfinch/finch/commit/ef8880c5c14eeb2469e89bb6630d9040ddbaa515"
        },
        "date": 1706547528020,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43743318924,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4082,
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
            "value": 43.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1446555648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1970232,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41609,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30824307310,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4185,
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
            "value": 30.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16617472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1383424,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29250,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 500458124,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9174,
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
            "value": 0.5004,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33228,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "307845c3f78bff26a58e8a03773f1650aa0c8aba",
          "message": "ci(deps): Bump WyriHaximus/github-action-get-previous-tag from 1.3.0 to 1.4.0 (#777)\n\nBumps\r\n[WyriHaximus/github-action-get-previous-tag](https://github.com/wyrihaximus/github-action-get-previous-tag)\r\nfrom 1.3.0 to 1.4.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/wyrihaximus/github-action-get-previous-tag/releases\">WyriHaximus/github-action-get-previous-tag's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h1>v1.4.0</h1>\r\n<ul>\r\n<li>Total issues resolved: <strong>1</strong></li>\r\n<li>Total pull requests resolved: <strong>6</strong></li>\r\n<li>Total contributors: <strong>4</strong></li>\r\n</ul>\r\n<h2>CI 🚧,Configuration ⚙,JavaScript 🦏,YAML 🍄</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/53\">53:\r\nStricten working directory tests</a> thanks to <a\r\nhref=\"https://github.com/WyriHaximus\"><code>@​WyriHaximus</code></a></li>\r\n</ul>\r\n<h2>YAML 🍄</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/52\">52:\r\nUpdate to Node 20</a> thanks to <a\r\nhref=\"https://github.com/coreyworrell\"><code>@​coreyworrell</code></a>\r\nand <a\r\nhref=\"https://github.com/Gershon-A\"><code>@​Gershon-A</code></a></li>\r\n</ul>\r\n<h2>CI 🚧,Configuration ⚙,JavaScript 🦏,MarkDown 📝,YAML 🍄</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/51\">51:\r\nAdd the ability to specify the working directory</a> thanks to <a\r\nhref=\"https://github.com/WyriHaximus\"><code>@​WyriHaximus</code></a></li>\r\n</ul>\r\n<h2>MarkDown 📝</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/49\">49:\r\nfetch tags instead of fetch-depth: 0</a> thanks to <a\r\nhref=\"https://github.com/staabm\"><code>@​staabm</code></a></li>\r\n</ul>\r\n<h2>CI 🚧,Configuration ⚙,YAML 🍄</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/44\">44:\r\nRemove file removal action</a> thanks to <a\r\nhref=\"https://github.com/WyriHaximus\"><code>@​WyriHaximus</code></a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/WyriHaximus/github-action-get-previous-tag/pull/43\">43:\r\nAdd unit tests</a> thanks to <a\r\nhref=\"https://github.com/WyriHaximus\"><code>@​WyriHaximus</code></a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/04e8485ecb6487243907e330d522ff60f02283ce\"><code>04e8485</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/wyrihaximus/github-action-get-previous-tag/issues/53\">#53</a>\r\nfrom WyriHaximus/stricten-working-directory-tests</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/86401148eafc2b0abe569294f482e93325860219\"><code>8640114</code></a>\r\nStricten working directory tests</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/53f35ded7ded93b348da7186532329cac2add73b\"><code>53f35de</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/wyrihaximus/github-action-get-previous-tag/issues/44\">#44</a>\r\nfrom WyriHaximus/remove-file-removal-action</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/80e207e8b54363eab1b3b8a550c1055a1ff3de36\"><code>80e207e</code></a>\r\nRemove file removal action</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/487f53abb72975864bc607e5df42bf19d6ee8e53\"><code>487f53a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/wyrihaximus/github-action-get-previous-tag/issues/51\">#51</a>\r\nfrom WyriHaximus/set-working-directory</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/752030f0749a8de1938ec8e77b2308f2471f8c5a\"><code>752030f</code></a>\r\nAdd the ability to specify the working directory</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/5e8388fa0aeeab0542f48ca356d36c8750374802\"><code>5e8388f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/wyrihaximus/github-action-get-previous-tag/issues/52\">#52</a>\r\nfrom coreyworrell/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/80af5d6fa6c58de8385c8016b6eb1d68a98f6ef5\"><code>80af5d6</code></a>\r\nUpdate to Node 20</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/5916541c5386cccc2dad1d66afa26765a2956bd4\"><code>5916541</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/wyrihaximus/github-action-get-previous-tag/issues/49\">#49</a>\r\nfrom staabm/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/WyriHaximus/github-action-get-previous-tag/commit/a0f33a9b2dffc4775031c91d86c26528efb782b1\"><code>a0f33a9</code></a>\r\nfetch tags instead of fetch-depth: 0</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/wyrihaximus/github-action-get-previous-tag/compare/385a2a0b6abf6c2efeb95adfac83d96d6f968e0c...04e8485ecb6487243907e330d522ff60f02283ce\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=WyriHaximus/github-action-get-previous-tag&package-manager=github_actions&previous-version=1.3.0&new-version=1.4.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T09:21:05-08:00",
          "tree_id": "11816c1b22bae1069722fced1c25bd584606d6a0",
          "url": "https://github.com/runfinch/finch/commit/307845c3f78bff26a58e8a03773f1650aa0c8aba"
        },
        "date": 1706635482913,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42522393339,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.354,
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
            "value": 42.52,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1218600960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1914312,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40356,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30844364072,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3476,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.84,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 153047040,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1389248,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29352,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 497695172,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7284,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.58,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4976,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1365,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32781,
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
          "id": "7f0c86e208a2d6faf3a93ed72887a7211fb9aa9f",
          "message": "build(deps): Bump github.com/lima-vm/lima from 0.19.0 to 0.20.0 (#769)\n\nBumps [github.com/lima-vm/lima](https://github.com/lima-vm/lima) from\r\n0.19.0 to 0.20.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/lima-vm/lima/releases\">github.com/lima-vm/lima's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.20.0</h2>\r\n<p>This release adds the support for propagating the timezone from the\r\nhost setting.\r\nThis release also fixes incompatibility with Go 1.22 (ETA: February\r\n2024).</p>\r\n<h2>Changes</h2>\r\n<ul>\r\n<li>\r\n<p>Misc:</p>\r\n<ul>\r\n<li>Set guest timezone from host setting (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2097\">#2097</a>)</li>\r\n<li>Support Go 1.22 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2137\">#2137</a>)</li>\r\n<li>Store <code>lima-version</code> file in the instance directory (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2107\">#2107</a>,\r\nthanks to <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p><code>limactl</code> CLI:</p>\r\n<ul>\r\n<li>Add <code>limactl start --foreground</code> for better support of\r\nlaunchd (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2146\">#2146</a>,\r\nthanks to <a\r\nhref=\"https://github.com/norio-nomura\"><code>@​norio-nomura</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p>YAML:</p>\r\n<ul>\r\n<li>Add <code>upgradePackages: &lt;bool&gt;</code> to upgrade the\r\npackages on boot (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2119\">#2119</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p>QEMU:</p>\r\n<ul>\r\n<li>Revert virtserialport back to unix socket for QEMU guest agent\r\ncommunication (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2112\">#2112</a>,\r\nthanks to <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a>)</li>\r\n<li>Support Debian trixie hosts' UEFI firmware path (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2124\">#2124</a>,\r\nthanks to <a\r\nhref=\"https://github.com/DennisRasey\"><code>@​DennisRasey</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p>WSL2:</p>\r\n<ul>\r\n<li>Support guest agent (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2118\">#2118</a>,\r\nthanks to <a\r\nhref=\"https://github.com/pendo324\"><code>@​pendo324</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>\r\n<p>Templates:</p>\r\n<ul>\r\n<li><code>alpine</code>: Update Alpine to 3.19 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2136\">#2136</a>,\r\nthanks to <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a>)</li>\r\n<li><code>rke2</code>: Update RKE2 to 1.29 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2157\">#2157</a>)</li>\r\n<li><code>u7s</code>: Update Usernetes to gen2-v20231218.0 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2157\">#2157</a>)</li>\r\n<li><code>k8s</code>: stop using <code>sudo kubectl</code> for\r\n<code>KUBECONFIG</code> (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2102\">#2102</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n<li>Update Ubuntu, CentOS Stream, Debian, Arch Linux to the latest\r\nrevision (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2157\">#2157</a>)</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>Full changes: <a\r\nhref=\"https://github.com/lima-vm/lima/milestone/41?closed=1\">https://github.com/lima-vm/lima/milestone/41?closed=1</a>\r\nThanks to <a\r\nhref=\"https://github.com/DennisRasey\"><code>@​DennisRasey</code></a> <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a> <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a> <a\r\nhref=\"https://github.com/mhumeSF\"><code>@​mhumeSF</code></a> <a\r\nhref=\"https://github.com/norio-nomura\"><code>@​norio-nomura</code></a>\r\n<a href=\"https://github.com/pendo324\"><code>@​pendo324</code></a> <a\r\nhref=\"https://github.com/porfirion\"><code>@​porfirion</code></a> <a\r\nhref=\"https://github.com/stefanb\"><code>@​stefanb</code></a> <a\r\nhref=\"https://github.com/zhaojizhuang\"><code>@​zhaojizhuang</code></a></p>\r\n<h2>Usage</h2>\r\n<pre lang=\"console\"><code>[macOS]$ limactl create\r\n[macOS]$ limactl start\r\n...\r\nINFO[0029] READY. Run `lima` to open the shell.\r\n<p>[macOS]$ lima uname\r\nLinux\r\n</code></pre></p>\r\n<hr />\r\n<p>The binaries were built automatically on GitHub Actions.\r\nThe build log is available for 90 days: <a\r\nhref=\"https://github.com/lima-vm/lima/actions/runs/7582028915\">https://github.com/lima-vm/lima/actions/runs/7582028915</a></p>\r\n<p>The sha256sum of the SHA256SUMS file itself is\r\n<code>09361987b9794963cfc4e6290842de8fbeafb8f075138178b0a7c42d85839b25</code>\r\n.</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/b578b3fad840402d08607150f97b217f6c29f586\"><code>b578b3f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2157\">#2157</a>\r\nfrom AkihiroSuda/dev</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/cb1b59e2f2ca71b886ece186adf50c7319accb32\"><code>cb1b59e</code></a>\r\ntemplates: update Usernetes to gen2-v20231218.0</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/c0ece9b993000b401cb7bf8133dd0040f4ea51cf\"><code>c0ece9b</code></a>\r\ntemplates: update RKE2 to v1.29</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/d189cedb2cb4ad526f8731407a4f1cb91596938a\"><code>d189ced</code></a>\r\ntemplates: update Arch Linux to 20240115.207158</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/faa651615b9fb2714591e4b1b3e277698b56b623\"><code>faa6516</code></a>\r\ntemplates: update Debian 12 to 20240102-1614</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/6aad83096583131933c1df406b96d79026c3f834\"><code>6aad830</code></a>\r\ntemplates: update Debian 11 to 20240104-1616</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/fef279bec0681d531f84ff84a6fa0fbd91377eaa\"><code>fef279b</code></a>\r\ntemplates: update CentOS Stream 9 to 20240115.0</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bd995dab4c7a98359762ee2f57c3e0d4c733124d\"><code>bd995da</code></a>\r\ntemplates: update CentOS Stream 8 to 20240117.0</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/5724db24aa20a0a8b42e936afc13ee6e12f44894\"><code>5724db2</code></a>\r\ntemplates: update Ubuntu 23.10 to release-20231220</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/8532b74924557b7097198cc5b53788b9d2f2fca1\"><code>8532b74</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/2156\">#2156</a>\r\nfrom AkihiroSuda/doc-dns-internal</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/lima-vm/lima/compare/v0.19.0...v0.20.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/lima-vm/lima&package-manager=go_modules&previous-version=0.19.0&new-version=0.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T15:45:41-05:00",
          "tree_id": "42330e8089d40497c00191e7ae0fa1225f4ea45d",
          "url": "https://github.com/runfinch/finch/commit/7f0c86e208a2d6faf3a93ed72887a7211fb9aa9f"
        },
        "date": 1706647753411,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43344816853,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3668,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.34,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1301491712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1952448,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41207,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31540826749,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.442,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 31.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 180310016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1416288,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29981,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 496340045,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4072,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.08,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4963,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1365,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32597,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 524,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "b16f6aeb31473ce2e49550827d7a1974fd719e0d",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.7+incompatible to 25.0.1+incompatible (#772)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.7+incompatible to 25.0.1+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v25.0.1</h2>\r\n<h2>25.0.1</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A25.0.1\">docker/cli,\r\n25.0.1 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A25.0.1\">moby/moby,\r\n25.0.1 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>API: Fix incorrect HTTP status code for containers with an invalid\r\nnetwork configuration created before upgrading to Docker Engine v25.0.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47159\">moby/moby#47159</a></li>\r\n<li>Ensure that a MAC address based on a container's IP address is\r\nre-generated when the container is stopped and restarted, in case the\r\ngenerated IP/MAC addresses have been reused. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47171\">moby/moby#47171</a></li>\r\n<li>Fix <code>host-gateway-ip</code> not working during build when not\r\nset through configuration. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47192\">moby/moby#47192</a></li>\r\n<li>Fix a bug that prevented a container from being renamed twice. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47196\">moby/moby#47196</a></li>\r\n<li>Fix an issue causing containers to have their short ID added to\r\ntheir network alias when inspecting them. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47182\">moby/moby#47182</a></li>\r\n<li>Fix an issue in detecting whether a remote build context is a Git\r\nrepository. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47136\">moby/moby#47136</a></li>\r\n<li>Fix an issue with layers order in OCI manifests. <a\r\nhref=\"https://redirect.github.com/moby/moby/issues/47150\">moby/moby#47150</a></li>\r\n<li>Fix volume mount error when passing an <code>addr</code> or\r\n<code>ip</code> mount option. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47185\">moby/moby#47185</a></li>\r\n<li>Improve error message related to extended attributes that can't be\r\nset due to improperly namespaced attribute names. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47178\">moby/moby#47178</a></li>\r\n<li>Swarm: Fixed <code>start_interval</code> not being passed to the\r\ncontainer config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47163\">moby/moby#47163</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Upgrade Compose to <code>2.24.2</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/981\">docker/docker-ce-packaging#981</a></li>\r\n</ul>\r\n<h2>v25.0.0</h2>\r\n<h2>25.0.0</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A25.0.0\">docker/cli,\r\n25.0.0 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A25.0.0\">moby/moby,\r\n25.0.0 milestone</a></li>\r\n<li>Deprecated and removed features, see <a\r\nhref=\"https://github.com/docker/cli/blob/v25.0.0/docs/deprecated.md\">Deprecated\r\nFeatures</a>.</li>\r\n<li>Changes to the Engine API, see <a\r\nhref=\"https://github.com/moby/moby/blob/v25.0.0/docs/api/version-history.md\">API\r\nversion history</a>.</li>\r\n</ul>\r\n<h3>New</h3>\r\n<ul>\r\n<li>Add OpenTelemetry tracing. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45652\">moby/moby#45652</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45579\">moby/moby#45579</a></li>\r\n<li>Add support for CDI devices under Linux. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45134\">moby/moby#45134</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4510\">docker/cli#4510</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46004\">moby/moby#46004</a></li>\r\n<li>Add an additional interval to be used by healthchecks during the\r\ncontainer start period. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/40894\">moby/moby#40894</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4405\">docker/cli#4405</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45965\">moby/moby#45965</a></li>\r\n<li>Add a <code>--log-format</code> flag to <code>dockerd</code> to\r\ncontrol the logging format: text (default) or JSON. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45737\">moby/moby#45737</a></li>\r\n<li>Add support for recursive read-only mounts. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45278\">moby/moby#45278</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46037\">moby/moby#46037</a></li>\r\n<li>Add support for filtering images based on timestamp with\r\n<code>docker image ls --filter=until=&lt;timestamp&gt;</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46577\">moby/moby#46577</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>API: Fix error message for invalid policies at\r\n<code>ValidateRestartPolicy</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46352\">moby/moby#46352</a></li>\r\n<li>API: Update <code>/info</code> endpoint to use singleflight. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45847\">moby/moby#45847</a></li>\r\n<li>Add an error message for when specifying a Dockerfile filename with\r\n<code>-f</code>, and also using <code>stdin</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4346\">docker/cli#4346</a></li>\r\n<li>Add support for <code>mac-address</code> and\r\n<code>link-local-ip</code> fields in <code>--network</code> long format.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4419\">docker/cli#4419</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/71fa3ab079ec13d17257f86fa92db8d7f24802f1\"><code>71fa3ab</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47196\">#47196</a>\r\nfrom akerouanton/25.0-fix-multiple-rename-error</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5295e88ceb662387a55a4e1a171c895433961040\"><code>5295e88</code></a>\r\ndaemon: rename: don't reload endpoint from datastore</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/6eef840b8afa2419ef98dd201bc490b8bc25afab\"><code>6eef840</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47191\">#47191</a>\r\nfrom vvoland/volume-cifs-resolve-optout-25</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/e2ab4718c805634e59ff0213a3abf8142095a653\"><code>e2ab471</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47182\">#47182</a>\r\nfrom akerouanton/25.0-fix-aliases-on-default-bridge</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/3de920a0b1025bf486a756f766ecf42b1487f07d\"><code>3de920a</code></a>\r\nvolume/local: Fix cifs url containing spaces</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a445aa95e56498e4c99d17f15521aab8fa6690eb\"><code>a445aa9</code></a>\r\nvolume/local: Add tests for parsing nfs/cifs mounts</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/cb77e48229a84f7a4ee9cddcc8725fd0f6a4e07f\"><code>cb77e48</code></a>\r\nvolume/local: Break early if <code>addr</code> was specified</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/e8801fbe26509544dc7d43bc46be94ce3add5dfc\"><code>e8801fb</code></a>\r\ndaemon: only add short cid to aliases for custom networks</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/613b6a12c175dbe8c2d7a184eb0ff236adc78d77\"><code>613b6a1</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47192\">#47192</a>\r\nfrom thaJeztah/25.0_backport_fix_gateway_ip</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1b6738369f90005e97ccfaf9df5f6f5a76f7c356\"><code>1b67383</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47189\">#47189</a>\r\nfrom vvoland/c8d-prefer-default-platform-snapshot-25</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.7...v25.0.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.7+incompatible&new-version=25.0.1+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T15:50:02-05:00",
          "tree_id": "f56dd4570b1a541829075e53745080f85be5434e",
          "url": "https://github.com/runfinch/finch/commit/b16f6aeb31473ce2e49550827d7a1974fd719e0d"
        },
        "date": 1706651916163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42870153114,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3264,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1362817024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1932296,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40732,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28484136026,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4344,
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
            "value": 28.48,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16805888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1293200,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 27164,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 520808679,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.215,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.31,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5207,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -15018,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33661,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 546,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "889abf8d7b8fa795790e509cbc00886dedce5af6",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.30.0 to 1.31.1 (#768)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.30.0 to 1.31.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.31.1</h2>\r\n<h2>1.31.1</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Inverted arguments order of FailureMessage of BeComparableToMatcher\r\n[e0dd999]</li>\r\n<li>Update test in case keeping msg is desired [ad1a367]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Show how to import the format sub package [24e958d]</li>\r\n<li>tidy up go.sum [26661b8]</li>\r\n<li>bump dependencies [bde8f7a]</li>\r\n</ul>\r\n<h2>v1.31.0</h2>\r\n<h2>1.31.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Async assertions include context cancellation cause if present\r\n[121c37f]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump minimum go version [dee1e3c]</li>\r\n<li>docs: fix typo in example usage &quot;occured&quot; -&gt;\r\n&quot;occurred&quot; [49005fe]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/714\">#714</a>)\r\n[f1c8757]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/715\">#715</a>)\r\n[9836e76]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.13.0 to 2.13.2 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/713\">#713</a>)\r\n[54726f0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/711\">#711</a>)\r\n[df97ecc]</li>\r\n<li>docs: fix <code>HaveExactElement</code> typo (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/712\">#712</a>)\r\n[a672c86]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.31.1</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Inverted arguments order of FailureMessage of BeComparableToMatcher\r\n[e0dd999]</li>\r\n<li>Update test in case keeping msg is desired [ad1a367]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Show how to import the format sub package [24e958d]</li>\r\n<li>tidy up go.sum [26661b8]</li>\r\n<li>bump dependencies [bde8f7a]</li>\r\n</ul>\r\n<h2>1.31.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Async assertions include context cancellation cause if present\r\n[121c37f]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump minimum go version [dee1e3c]</li>\r\n<li>docs: fix typo in example usage &quot;occured&quot; -&gt;\r\n&quot;occurred&quot; [49005fe]</li>\r\n<li>Bump actions/setup-go from 4 to 5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/714\">#714</a>)\r\n[f1c8757]</li>\r\n<li>Bump github/codeql-action from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/715\">#715</a>)\r\n[9836e76]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.13.0 to 2.13.2 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/713\">#713</a>)\r\n[54726f0]</li>\r\n<li>Bump golang.org/x/net from 0.17.0 to 0.19.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/711\">#711</a>)\r\n[df97ecc]</li>\r\n<li>docs: fix <code>HaveExactElement</code> typo (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/712\">#712</a>)\r\n[a672c86]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/762b171852113d80d8fc360558cccbccdc46af70\"><code>762b171</code></a>\r\nv1.31.1</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/26661b8d34c7d8205844de07a3ec5637a595bef6\"><code>26661b8</code></a>\r\ntidy up go.sum</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/bde8f7a2c07ccfc535b2d9082e7dcaa1fbca91c5\"><code>bde8f7a</code></a>\r\nbump dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/24e958d368b1e67070bded6ddd1a108d70698b14\"><code>24e958d</code></a>\r\nShow how to import the format sub package</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/ad1a367ab5b86a7abad96a75ac25f1383fa97e69\"><code>ad1a367</code></a>\r\nUpdate test in case keeping msg is desired</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/e0dd999861372e3b7838b6719258eee5fd16276a\"><code>e0dd999</code></a>\r\nInverted arguments order of FailureMessage of BeComparableToMatcher</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/ba8bba2272bbf185a144b2681b5ed1f72d7f04f7\"><code>ba8bba2</code></a>\r\nv1.31.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/121c37f100b97f1d2c3f68c436f92bd7df4a120a\"><code>121c37f</code></a>\r\nAsync assertions include context cancellation cause if present</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/dee1e3cc5e375dedf8360bf3d673a433ef04b948\"><code>dee1e3c</code></a>\r\nBump minimum go version</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/49005fe1960542f223c64b1af4e7544d34746a01\"><code>49005fe</code></a>\r\ndocs: fix typo in example usage &quot;occured&quot; -&gt;\r\n&quot;occurred&quot;</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.30.0...v1.31.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.30.0&new-version=1.31.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>",
          "timestamp": "2024-01-30T15:50:50-05:00",
          "tree_id": "948fdf8d9e55a95a8353303a071ea3153ec70b04",
          "url": "https://github.com/runfinch/finch/commit/889abf8d7b8fa795790e509cbc00886dedce5af6"
        },
        "date": 1706652042519,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42767257288,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4012,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1334697984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1928248,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40647,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 497237031,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8916,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.71,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4972,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32642,
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
          "id": "01e2764e952369e05fc4c7f2c8ac3e9152098918",
          "message": "chore(main): release 1.1.0 (#748)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n## [1.1.0](https://github.com/runfinch/finch/compare/v1.0.1...v1.1.0)\r\n(2024-01-31)\r\n\r\n\r\n### Build System or External Dependencies\r\n\r\n* **deps:** Bump github.com/aws/aws-sdk-go-v2 from 1.24.0 to 1.24.1\r\n([#749](https://github.com/runfinch/finch/issues/749))\r\n([c3ae967](https://github.com/runfinch/finch/commit/c3ae96794165b4ea696bb94856d40ff91767ed1b))\r\n* **deps:** Bump github.com/containerd/containerd from 1.7.10 to 1.7.11\r\n([#742](https://github.com/runfinch/finch/issues/742))\r\n([7d1e250](https://github.com/runfinch/finch/commit/7d1e25068a503a8b4ea7dd3f349ff4020168a6fb))\r\n* **deps:** Bump github.com/docker/docker from 24.0.7+incompatible to\r\n25.0.1+incompatible\r\n([#772](https://github.com/runfinch/finch/issues/772))\r\n([b16f6ae](https://github.com/runfinch/finch/commit/b16f6aeb31473ce2e49550827d7a1974fd719e0d))\r\n* **deps:** Bump github.com/lima-vm/lima from 0.19.0 to 0.20.0\r\n([#769](https://github.com/runfinch/finch/issues/769))\r\n([7f0c86e](https://github.com/runfinch/finch/commit/7f0c86e208a2d6faf3a93ed72887a7211fb9aa9f))\r\n* **deps:** Bump github.com/onsi/ginkgo/v2 from 2.13.2 to 2.14.0\r\n([#758](https://github.com/runfinch/finch/issues/758))\r\n([7d3a7c8](https://github.com/runfinch/finch/commit/7d3a7c84b02d70edad7947573f77dada22332f41))\r\n* **deps:** Bump github.com/onsi/gomega from 1.30.0 to 1.31.1\r\n([#768](https://github.com/runfinch/finch/issues/768))\r\n([889abf8](https://github.com/runfinch/finch/commit/889abf8d7b8fa795790e509cbc00886dedce5af6))\r\n* **deps:** Bump github.com/runfinch/common-tests from 0.7.11 to 0.7.12\r\n([#761](https://github.com/runfinch/finch/issues/761))\r\n([bb17a96](https://github.com/runfinch/finch/commit/bb17a96b58b85c42fdc6fbd093209ce1ab900707))\r\n* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.11 to 3.23.12\r\n([#744](https://github.com/runfinch/finch/issues/744))\r\n([eb55877](https://github.com/runfinch/finch/commit/eb55877a330d4c45eb210a19188f54032d7f8274))\r\n* **deps:** Bump golang.org/x/crypto from 0.16.0 to 0.18.0\r\n([#751](https://github.com/runfinch/finch/issues/751))\r\n([fc434ac](https://github.com/runfinch/finch/commit/fc434ac4f288bb1d2eeef3c2e2bcb186e8aa5278))\r\n* **deps:** Bump golang.org/x/image from\r\n0.0.0-20210220032944-ac19c3e999fb to 0.10.0\r\n([#752](https://github.com/runfinch/finch/issues/752))\r\n([9a08b45](https://github.com/runfinch/finch/commit/9a08b45466cc58326df05d94dfe91edd07158759))\r\n* **deps:** Bump golang.org/x/tools from 0.16.0 to 0.16.1\r\n([#734](https://github.com/runfinch/finch/issues/734))\r\n([efecfca](https://github.com/runfinch/finch/commit/efecfcae8922f47581a4575125acbe375a706b11))\r\n* **deps:** Bump golang.org/x/tools from 0.16.1 to 0.17.0\r\n([#757](https://github.com/runfinch/finch/issues/757))\r\n([89623da](https://github.com/runfinch/finch/commit/89623dab53f0128c1616c66a7361a5ce3df847c3))\r\n* **deps:** Bump submodules and dependencies\r\n([#733](https://github.com/runfinch/finch/issues/733))\r\n([8b2d8cd](https://github.com/runfinch/finch/commit/8b2d8cddc7fc63264c7f5bf1be2bd4417a92aaeb))\r\n\r\n\r\n### Experimental\r\n\r\n* make finch work on windows with wsl2\r\n([#649](https://github.com/runfinch/finch/issues/649))\r\n([31cdc41](https://github.com/runfinch/finch/commit/31cdc411d29758bae54a0b3fdb37be2777bd9fdc))\r\n\r\n\r\n### Features\r\n\r\n* upgrade Windows support to \"feature\"\r\n([#778](https://github.com/runfinch/finch/issues/778))\r\n([63894d1](https://github.com/runfinch/finch/commit/63894d12f3ab9d2c02700779e42182d06019a85f))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* properly reload persistent snapshotter data and restart services\r\n([#767](https://github.com/runfinch/finch/issues/767))\r\n([700cb92](https://github.com/runfinch/finch/commit/700cb92da72510b47498c48f188c50806382a291))\r\n* temporarily switch to our own nerdctl-full bundle with patched runc\r\nand buildkit ([#783](https://github.com/runfinch/finch/issues/783))\r\n([f677e2e](https://github.com/runfinch/finch/commit/f677e2e03c7ee94e18ea990c1723f41bac660698))\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-31T15:45:04-08:00",
          "tree_id": "916c8523051affffe832d2309016562300f348f9",
          "url": "https://github.com/runfinch/finch/commit/01e2764e952369e05fc4c7f2c8ac3e9152098918"
        },
        "date": 1706744930122,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43493928409,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.376,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1385709568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1956456,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41304,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29952586229,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3741,
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
            "value": 29.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16621568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1349728,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28476,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 474888258,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7842,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.49,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4748,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -17749,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 31765,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 503,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "598b723443e9c8a2aec2ed3004f6a176a2fdccfe",
          "message": "ci: fix release workflow typos (#784)\n\nIssue #, if available:\r\nhttps://github.com/runfinch/finch/actions/runs/7733913260\r\n\r\n*Description of changes:*\r\n- Seems like a typo in the release workflow. Since it just ran for the\r\nfirst time, we only just found it\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-31T18:54:47-05:00",
          "tree_id": "99eea99e83576db7778a0ed2a11fc5b0d27d4f95",
          "url": "https://github.com/runfinch/finch/commit/598b723443e9c8a2aec2ed3004f6a176a2fdccfe"
        },
        "date": 1706746717119,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42884186084,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.372,
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
            "value": 42.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1242533888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1932848,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40750,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 33696445116,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4391,
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
            "value": 33.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 191205376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1504400,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 31978,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 487814727,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8181,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.24,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4878,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 395946,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32445,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 518,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "4889527dae6494509fce0b3fefc4ac890d113f11",
          "message": "build(deps): Bump submodules and dependencies (#762)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: pendo324 <pendo324@users.noreply.github.com>",
          "timestamp": "2024-02-01T13:28:12-05:00",
          "tree_id": "02fba22c3a6dce2339bbb1ee0c0e543202f8e483",
          "url": "https://github.com/runfinch/finch/commit/4889527dae6494509fce0b3fefc4ac890d113f11"
        },
        "date": 1706813479269,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 40901230214,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.328,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 40.9,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1327816704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1848776,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 38854,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30722403109,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3692,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.72,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33492992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1377000,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29103,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 510201930,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.2234,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.7,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5101,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32954,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "52fb8b2fe5fb4523076a4bfbd2da8861df120adf",
          "message": "chore(main): release 1.1.1 (#790)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n## [1.1.1](https://github.com/runfinch/finch/compare/v1.1.0...v1.1.1)\r\n(2024-02-01)\r\n\r\n\r\n### Build System or External Dependencies\r\n\r\n* **deps:** Bump submodules and dependencies\r\n([#762](https://github.com/runfinch/finch/issues/762))\r\n([4889527](https://github.com/runfinch/finch/commit/4889527dae6494509fce0b3fefc4ac890d113f11))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* add force to cni cleanup on boot service\r\n([#785](https://github.com/runfinch/finch/issues/785))\r\n([9b2438b](https://github.com/runfinch/finch/commit/9b2438b5827706b134bb791a78643af37854b377))\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-01T10:59:11-08:00",
          "tree_id": "69154dc95e4bb27f6176af1cb37decb5f643e7ed",
          "url": "https://github.com/runfinch/finch/commit/52fb8b2fe5fb4523076a4bfbd2da8861df120adf"
        },
        "date": 1706814157089,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42322145380,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3903,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1214214144,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1911216,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40255,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30132945512,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3871,
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
            "value": 30.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 129986560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1357176,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28633,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 542068712,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7677,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.7,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.542,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34480,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 567,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "ec77f1abe9c00ddd9cd84ed665204c2c5df4c40b",
          "message": "build(deps): Bump submodules and dependencies (#795)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: pendo324 <pendo324@users.noreply.github.com>",
          "timestamp": "2024-02-09T19:15:01-05:00",
          "tree_id": "f371539fab3307f690f64b95b2f3c6e8d2890adb",
          "url": "https://github.com/runfinch/finch/commit/ec77f1abe9c00ddd9cd84ed665204c2c5df4c40b"
        },
        "date": 1707524344855,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42373289226,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3527,
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
            "value": 42.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1208262656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1912656,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40306,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30224506693,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3535,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 203280384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1361120,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28727,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 485452241,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.108,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.89,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4854,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32069,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 516,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "d7613012551bd47c26476a993a35856aab91511c",
          "message": "build(deps): Bump github.com/docker/docker from 25.0.1+incompatible to 25.0.3+incompatible (#799)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n25.0.1+incompatible to 25.0.3+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v25.0.3</h2>\r\n<h2>25.0.3</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A25.0.3\">docker/cli,\r\n25.0.3 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A25.0.3\">moby/moby,\r\n25.0.3 milestone</a></li>\r\n</ul>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>[25.0 backport] pkg/ioutils: Make subsequent Close attempts noop <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47222\">moby/moby#47222</a></li>\r\n<li>[25.0 backport] Fix HasResource inverted boolean error - vendor\r\nswarmkit v2.0.0-20240125134710-dcda100a8261 <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47225\">moby/moby#47225</a></li>\r\n<li>[25.0 backport] gha: update actions to account for node 16\r\ndeprecation <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47291\">moby/moby#47291</a></li>\r\n<li>[25.0 backport] docs: remove dead links from api verison history <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47296\">moby/moby#47296</a></li>\r\n<li>[25.0 backport] Assert temp output directory is not an empty string\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47298\">moby/moby#47298</a></li>\r\n<li>[25.0 backport] api: Document <code>version</code> in\r\n<code>/build</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47295\">moby/moby#47295</a></li>\r\n<li>[25.0 backport] De-flake TestSwarmClusterRotateUnlockKey <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47201\">moby/moby#47201</a></li>\r\n<li>[25.0 backport] Add internal n/w bridge to firewalld docker zone <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47303\">moby/moby#47303</a></li>\r\n<li>[25.0 backport] Only restore a configured MAC addr on restart. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47304\">moby/moby#47304</a></li>\r\n<li>[25.0 backport] Revert &quot;daemon: automatically set network\r\nEnableIPv6 if needed&quot; <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47310\">moby/moby#47310</a></li>\r\n<li>[25.0 backport] libnet: bridge: ignore EINVAL when configuring\r\nbridge MTU <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47311\">moby/moby#47311</a></li>\r\n<li>[25.0 backport] logger/journald: fix tailing logs with systemd 255\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47243\">moby/moby#47243</a></li>\r\n<li>[25.0 backport] add more //go:build directives to prevent\r\ndowngrading to go1.16 language <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47220\">moby/moby#47220</a></li>\r\n<li>[25.0 backport] libcontainerd/supervisor: fix data race <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47313\">moby/moby#47313</a></li>\r\n<li>[25.0 backport] plugins: Fix panic when fetching by digest <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47323\">moby/moby#47323</a></li>\r\n<li>[25.0 backport] Dockerfile: update docker-cli to v25.0.2, docker\r\ncompose v2.24.5 <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47316\">moby/moby#47316</a></li>\r\n<li>[25.0 backport] image/save: Fix untagged images not present in\r\nindex.json <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47294\">moby/moby#47294</a></li>\r\n<li>[25.0 backport] Dockerfile: update RootlessKit to v2.0.1 <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47334\">moby/moby#47334</a></li>\r\n<li>[25.0 backport] image/cache: Ignore Build and Revision on Windows <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47337\">moby/moby#47337</a></li>\r\n<li>[25.0 backport] profiles/seccomp: add syscalls for kernel v5.17 -\r\nv6.6, match containerd's profile <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47344\">moby/moby#47344</a></li>\r\n<li>[25.0 backport] c8d: Use the same logic to get the present images <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47348\">moby/moby#47348</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/moby/moby/compare/v25.0.2...v25.0.3\">https://github.com/moby/moby/compare/v25.0.2...v25.0.3</a></p>\r\n<h2>v25.0.2</h2>\r\n<h2>25.0.2</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A25.0.2\">docker/cli,\r\n25.0.2 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A25.0.2\">moby/moby,\r\n25.0.2 milestone</a></li>\r\n</ul>\r\n<h3>Security</h3>\r\n<p>This release contains security fixes for the following CVEs\r\naffecting Docker Engine and its components.</p>\r\n<table>\r\n<thead>\r\n<tr>\r\n<th>CVE</th>\r\n<th>Component</th>\r\n<th>Fix version</th>\r\n<th>Severity</th>\r\n</tr>\r\n</thead>\r\n</table>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f417435e5f6216828dec57958c490c4f8bae4f98\"><code>f417435</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47348\">#47348</a>\r\nfrom rumpl/25.0_backport-history-config</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/acd023d42ba9bdb3b728683a5d87b84ed4e9dcbe\"><code>acd023d</code></a>\r\nc8d: Use the same logic to get the present images</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7a075cacf9ed0c08560e7ae014e4e90e8ef7ffed\"><code>7a075ca</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47344\">#47344</a>\r\nfrom thaJeztah/25.0_backport_seccomp_updates</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/aff7177ee7b3bad919f49e51a67ab5c83469f963\"><code>aff7177</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47337\">#47337</a>\r\nfrom vvoland/cache-fix-older-windows-25</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ed7c26339e6b74491d6005d7c48914b43e2b46d9\"><code>ed7c263</code></a>\r\nseccomp: add futex_wake syscall (kernel v6.7, libseccomp v2.5.5)</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/74e3b4fb2ed21978c0a986796c56e94f1939b36e\"><code>74e3b4f</code></a>\r\nseccomp: add futex_wait syscall (kernel v6.7, libseccomp v2.5.5)</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/4cc0416534cb7c0662ee6956d87a8f690e5df526\"><code>4cc0416</code></a>\r\nseccomp: add futex_requeue syscall (kernel v6.7, libseccomp v2.5.5)</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f9f9e7ff9aeafd4a89017f8a668079ad57b0076e\"><code>f9f9e7f</code></a>\r\nseccomp: add map_shadow_stack syscall (kernel v6.6, libseccomp\r\nv2.5.5)</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5fb4eb941d20a2401bc9f7a53a030a4aa07075e1\"><code>5fb4eb9</code></a>\r\nseccomp: add fchmodat2 syscall (kernel v6.6, libseccomp v2.5.5)</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/67e9aa6d4de47eea44c488b58a9ab23a8ca1d6a4\"><code>67e9aa6</code></a>\r\nseccomp: add cachestat syscall (kernel v6.5, libseccomp v2.5.5)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v25.0.1...v25.0.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=25.0.1+incompatible&new-version=25.0.3+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:44:20-05:00",
          "tree_id": "d8fefd242db0c6654d4616c0f12f3743a15384ee",
          "url": "https://github.com/runfinch/finch/commit/d7613012551bd47c26476a993a35856aab91511c"
        },
        "date": 1707760082941,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43566206680,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3296,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 38.46,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.57,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1181036544,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1961152,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41413,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 35952236997,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3049,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 35.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 299958272,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1593192,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 33997,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 493599887,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9824,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.25,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4935,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1365,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32552,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 520,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "37737036ed40851fb536b5536be3c6e84e8e68c1",
          "message": "ci(deps): Bump actions/upload-artifact from 4.3.0 to 4.3.1 (#797)\n\nBumps\r\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\r\nfrom 4.3.0 to 4.3.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.3.1</h2>\r\n<ul>\r\n<li>Bump <code>@​actions/artifacts</code> to latest version to include\r\n<a href=\"https://redirect.github.com/actions/toolkit/pull/1648\">updated\r\nGHES host check</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/5d5d22a31266ced268874388b861e4b58bb5c2f3\"><code>5d5d22a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/515\">#515</a>\r\nfrom actions/eggyhead/update-artifact-v2.1.1</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/f1e993d9663a03508e7fc0370c744c4b963f0044\"><code>f1e993d</code></a>\r\nupdate artifact license</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/4881bfd3f27855c63733d8cfff17721cc0ad611f\"><code>4881bfd</code></a>\r\nupdating dist:</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/a30777e2653648a0a7bbd3efb5c96ef9131b96cc\"><code>a30777e</code></a>\r\n<a href=\"https://github.com/eggyhead\"><code>@​eggyhead</code></a></li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/3a8048248f2f288c271830f8ecf2a1c5d8eb0e9a\"><code>3a80482</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/511\">#511</a>\r\nfrom actions/robherley/migration-docs-typo</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/9d63e3f2f81d9dc4e13d83fc330408f8a94b79d1\"><code>9d63e3f</code></a>\r\nMerge branch 'main' into robherley/migration-docs-typo</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/dfa1ab292d2fdd78d056187f11c568c16ab53de9\"><code>dfa1ab2</code></a>\r\nfix typo with v3 artifact downloads in migration guide</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/d00351bf698398c17253d21cf8f90e57a344e14b\"><code>d00351b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/509\">#509</a>\r\nfrom markmssd/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/actions/upload-artifact/commit/707f5a7b71e0fb01c5df1e16e9679a3292606ef2\"><code>707f5a7</code></a>\r\nUpdate limitation of <code>10</code> artifacts upload to\r\n<code>500</code></li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/upload-artifact/compare/26f96dfa697d77e81fd5907df203aa23a56210a8...5d5d22a31266ced268874388b861e4b58bb5c2f3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4.3.0&new-version=4.3.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:45:32-05:00",
          "tree_id": "c67fe459cd29446f7c7f147abd5c5f811dd45027",
          "url": "https://github.com/runfinch/finch/commit/37737036ed40851fb536b5536be3c6e84e8e68c1"
        },
        "date": 1707760153984,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 40820193365,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3453,
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
            "value": 40.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1394155520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1847040,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 38809,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30102117748,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3733,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33476608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1356304,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28613,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 497366097,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8536,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.58,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4973,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32738,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 525,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "cb52b215e1acb9db75a85891711580baa9efa51f",
          "message": "ci(deps): Bump actions/download-artifact from 4.1.1 to 4.1.2 (#796)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 4.1.1 to 4.1.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.2</h2>\r\n<ul>\r\n<li>Bump <code>@​actions/artifacts</code> to latest version to include\r\n<a href=\"https://redirect.github.com/actions/toolkit/pull/1648\">updated\r\nGHES host check</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/eaceaf801fd36c7dee90939fad912460b18a1ffe\"><code>eaceaf8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/291\">#291</a>\r\nfrom actions/eggyhead/update-artifact-v2.1.1</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/81eafdc926c95ab3a46553696557fe28c599a41a\"><code>81eafdc</code></a>\r\nupdate artifact license</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/9ac5cad9e2799348da3b2da75c8fbfa73ab3011c\"><code>9ac5cad</code></a>\r\nupdating artifact dependency to version 2.1.1</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/3ad8411bbdac537922aa8fb779989d55b1df4a4e\"><code>3ad8411</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/287\">#287</a>\r\nfrom actions/robherley/sync-migration-docs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/1de464352cdcac2b5838c0c1bb78bb3424a51953\"><code>1de4643</code></a>\r\nSync migration docs with upload-artifact</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/bb3fa7fd35ab8113a980912eb9f59b846d14e3ff\"><code>bb3fa7f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/275\">#275</a>\r\nfrom actions/robherley/better-log-msgs</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/a244de5a621ac562efb2450e88968f4ad7c5a877\"><code>a244de5</code></a>\r\nncc</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/355659bff273563439cd7fd7dfd81595a30e1f33\"><code>355659b</code></a>\r\nclarify log messages when using pattern/merge-multiple params</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/6b208ae046db98c579e8a3aa621ab581ff575935...eaceaf801fd36c7dee90939fad912460b18a1ffe\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4.1.1&new-version=4.1.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:46:09-05:00",
          "tree_id": "b1b8fa1b4fff339ed2ef4bffdc2fbd55cfc68020",
          "url": "https://github.com/runfinch/finch/commit/cb52b215e1acb9db75a85891711580baa9efa51f"
        },
        "date": 1707760292582,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42680330239,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2994,
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
            "value": 42.68,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1271255040,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1922024,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40528,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30694893602,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4157,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.69,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 58683392,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1378080,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29119,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 526369026,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5109,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.51,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5263,
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
            "value": 33973,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 556,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "26da6107281f82edcb60f93556a8455b2f42f3ff",
          "message": "ci(deps): Bump benchmark-action/github-action-benchmark from 1.19.2 to 1.19.3 (#793)\n\nBumps\r\n[benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)\r\nfrom 1.19.2 to 1.19.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases\">benchmark-action/github-action-benchmark's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.19.3</h2>\r\n<ul>\r\n<li><strong>fix</strong> ratio is NaN when the previous value is 0. Now,\r\nprint 1 when both values are 0 and <code>+-∞</code> when divisor is 0\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/222\">#222</a>)</li>\r\n<li><strong>fix</strong> action hangs in some cases for go fiber\r\nbenchmarks (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/225\">#225</a>)</li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.2...v1.19.3\">https://github.com/benchmark-action/github-action-benchmark/compare/v1.19.2...v1.19.3</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md\">benchmark-action/github-action-benchmark's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>Unreleased</h2>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.3\">v1.19.3</a>\r\n- 02 Feb 2024</h1>\r\n<ul>\r\n<li><strong>fix</strong> ratio is NaN when previous value is 0. Now,\r\nprint 1 when both values are 0 and <code>+-∞</code> when divisor is 0\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/222\">#222</a>)</li>\r\n<li><strong>fix</strong> action hangs in some cases for go fiber\r\nbenchmarks (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/225\">#225</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.2\">v1.19.2</a>\r\n- 26 Jan 2024</h1>\r\n<ul>\r\n<li><strong>fix</strong> markdown rendering for summary is broken (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/218\">#218</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.1\">v1.19.1</a>\r\n- 25 Jan 2024</h1>\r\n<ul>\r\n<li><strong>fix</strong> improve flaky CI runs (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/215\">#215</a>)</li>\r\n<li><strong>fix</strong> write with retry fails with the separate\r\nrepository (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/216\">#216</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.19.0\">v1.19.0</a>\r\n- 25 Jan 2024</h1>\r\n<ul>\r\n<li><strong>docs</strong> Add description for skip-fetch-gh-pages (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/180\">#180</a>)</li>\r\n<li><strong>fix</strong> Mismatch input in action.yml (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/191\">#191</a>)</li>\r\n<li><strong>fix</strong> Update Manifest.toml to fix julia test failure\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/210\">#210</a>)</li>\r\n<li><strong>chore</strong> update to node 20 (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/208\">#208</a>)</li>\r\n<li><strong>chore</strong> update actions/* (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/212\">#212</a>)</li>\r\n<li><strong>fix</strong> summary-always and gh-repository don't work\r\ntogether (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/214\">#214</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.18.0\">v1.18.0</a>\r\n- 07 Jul 2023</h1>\r\n<ul>\r\n<li><strong>feat</strong> getServerUrl refers to the GITHUB_SERVER_URL\r\nenvironment variable (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/169\">#169</a>)</li>\r\n<li><strong>feat</strong> extract multiple metrics from Golang\r\nbenchmarks (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/177\">#177</a>)</li>\r\n<li><strong>fix</strong> getCommitFromGitHubAPIRequest to refer to\r\nGITHUB_API_URL (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/171\">#171</a>)</li>\r\n<li><strong>chore</strong> Remove unreachable code from extract.ts (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/153\">#153</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.17.0\">v1.17.0</a>\r\n- 26 Apr 2023</h1>\r\n<ul>\r\n<li><strong>feat</strong> support for JMH parameters (as separate\r\ncharts) (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/161\">#161</a>)</li>\r\n<li><strong>feat</strong> enable user to specify the ref being tested\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/163\">#163</a>)</li>\r\n<li><strong>feat</strong> allow more characters in Golang bench outputs\r\n(<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/131\">#131</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.16.2\">v1.16.2</a>\r\n- 08 Feb 2023</h1>\r\n<ul>\r\n<li><strong>Fix</strong> use commit.id over commit object (<a\r\nhref=\"https://redirect.github.com/benchmark-action/github-action-benchmark/issues/155\">#155</a>)</li>\r\n</ul>\r\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\r\n<h1><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/releases/tag/v1.16.1\">v1.16.1</a>\r\n- 06 Feb 2023</h1>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/commit/cc9ac13ce81036c9b67fcfe2cb95ca366684b9ea\"><code>cc9ac13</code></a>\r\nv1.19.3</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/benchmark-action/github-action-benchmark/compare/315072f079db10e96004ffb95b9b7263bf3a547e...cc9ac13ce81036c9b67fcfe2cb95ca366684b9ea\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=benchmark-action/github-action-benchmark&package-manager=github_actions&previous-version=1.19.2&new-version=1.19.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:46:52-05:00",
          "tree_id": "cf99b6ed19d6860ce029294d45e766942e034c8e",
          "url": "https://github.com/runfinch/finch/commit/26da6107281f82edcb60f93556a8455b2f42f3ff"
        },
        "date": 1707760356842,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42959514769,
            "unit": "ns/op\t         0.3318 %cpu_avg/op\t        46.67 %cpu_peak/op\t        42.96 cpu_seconds/op\t1333080064 disk_bytes/op\t 1936112 B/op\t   40827 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42959514769,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3318,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1333080064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1936112,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40827,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30192913289,
            "unit": "ns/op\t         0.3434 %cpu_avg/op\t        33.33 %cpu_peak/op\t        30.19 cpu_seconds/op\t  16609280 disk_bytes/op\t 1356800 B/op\t   28638 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30192913289,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3434,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.19,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16609280,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1356800,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28638,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 508051335,
            "unit": "ns/op\t         0.5467 %cpu_avg/op\t        20.63 %cpu_peak/op\t         0.5080 cpu_seconds/op\t         0 disk_bytes/op\t   33424 B/op\t     538 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508051335,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5467,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.63,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.508,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33424,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 538,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "0047a87e01a20ad7cea8defec0133ff2bcb47e42",
          "message": "ci(deps): Bump nick-fields/retry from 2.9.0 to 3.0.0 (#786)\n\nBumps [nick-fields/retry](https://github.com/nick-fields/retry) from\r\n2.9.0 to 3.0.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/nick-fields/retry/releases\">nick-fields/retry's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Upgrade to node 20</h2>\r\n<p>Upgrades action to node 20 to fix warnings</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/nick-fields/retry/commit/7152eba30c6575329ac0576536151aca5a72780e\"><code>7152eba</code></a>\r\nUpgrade to Node 20 (<a\r\nhref=\"https://redirect.github.com/nick-fields/retry/issues/126\">#126</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/nick-fields/retry/compare/14672906e672a08bd6eeb15720e9ed3ce869cdd4...7152eba30c6575329ac0576536151aca5a72780e\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=nick-fields/retry&package-manager=github_actions&previous-version=2.9.0&new-version=3.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:47:19-05:00",
          "tree_id": "184ecced8f1ab350d6b27d379cb814860eba7c9c",
          "url": "https://github.com/runfinch/finch/commit/0047a87e01a20ad7cea8defec0133ff2bcb47e42"
        },
        "date": 1707760503906,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42538169131,
            "unit": "ns/op\t         0.3151 %cpu_avg/op\t        30.77 %cpu_peak/op\t        42.54 cpu_seconds/op\t1258860544 disk_bytes/op\t 1918144 B/op\t   40434 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42538169131,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3151,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1258860544,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1918144,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40434,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29858738650,
            "unit": "ns/op\t         0.4039 %cpu_avg/op\t        35.71 %cpu_peak/op\t        29.86 cpu_seconds/op\t 159432704 disk_bytes/op\t 1345368 B/op\t   28382 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29858738650,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4039,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.86,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 159432704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1345368,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28382,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 481477812,
            "unit": "ns/op\t         1.126 %cpu_avg/op\t        16.56 %cpu_peak/op\t         0.4814 cpu_seconds/op\t      4096 disk_bytes/op\t   31909 B/op\t     509 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 481477812,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.126,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.56,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4814,
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
            "value": 31909,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 509,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "cb3d76fb8ee2743a3ca4ead52eddd9dc075ec07f",
          "message": "ci(deps): Bump peter-evans/create-pull-request from 5.0.2 to 6.0.0 (#781)\n\nBumps\r\n[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nfrom 5.0.2 to 6.0.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/releases\">peter-evans/create-pull-request's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Create Pull Request v6.0.0</h2>\r\n<h2>Behaviour changes</h2>\r\n<ul>\r\n<li>The default values for <code>author</code> and\r\n<code>committer</code> have changed. See &quot;What's new&quot; below\r\nfor details. If you are overriding the default values you will not be\r\naffected by this change.</li>\r\n<li>On completion, the action now removes the temporary git remote\r\nconfiguration it adds when using <code>push-to-fork</code>. This should\r\nnot affect you unless you were using the temporary configuration for\r\nsome other purpose after the action completes.</li>\r\n</ul>\r\n<h2>What's new</h2>\r\n<ul>\r\n<li>Updated runtime to Node.js 20\r\n<ul>\r\n<li>The action now requires a minimum version of <a\r\nhref=\"https://github.com/actions/runner/releases/tag/v2.308.0\">v2.308.0</a>\r\nfor the Actions runner. Update self-hosted runners to v2.308.0 or later\r\nto ensure compatibility.</li>\r\n</ul>\r\n</li>\r\n<li>The default value for <code>author</code> has been changed to\r\n<code>${{ github.actor }} &lt;${{ github.actor_id }}+${{ github.actor\r\n}}@users.noreply.github.com&gt;</code>. The change adds the <code>${{\r\ngithub.actor_id }}+</code> prefix to the email address to align with\r\nGitHub's standard format for the author email address.</li>\r\n<li>The default value for <code>committer</code> has been changed to\r\n<code>github-actions[bot]\r\n&lt;41898282+github-actions[bot]@users.noreply.github.com&gt;</code>.\r\nThis is to align with the default GitHub Actions bot user account.</li>\r\n<li>Adds input <code>git-token</code>, the <a\r\nhref=\"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token\">Personal\r\nAccess Token (PAT)</a> that the action will use for git operations. This\r\ninput defaults to the value of <code>token</code>. Use this input if you\r\nwould like the action to use a different token for git operations than\r\nthe one used for the GitHub API.</li>\r\n<li><code>push-to-fork</code> now supports pushing to sibling\r\nrepositories in the same network.</li>\r\n<li>Previously, when using <code>push-to-fork</code>, the action did not\r\nremove temporary git remote configuration it adds during execution. This\r\nhas been fixed and the configuration is now removed when the action\r\ncompletes.</li>\r\n<li>If the pull request body is truncated due to exceeding the maximum\r\nlength, the action will now suffix the body with the message\r\n&quot;...<em>[Pull request body truncated]</em>&quot; to indicate that\r\nthe body has been truncated.</li>\r\n<li>The action now uses <code>--unshallow</code> only when necessary,\r\nrather than as a default argument of <code>git fetch</code>. This should\r\nimprove performance, particularly for large git repositories with\r\nextensive commit history.</li>\r\n<li>The action can now be executed on one GitHub server and create pull\r\nrequests on a <em>different</em> GitHub server. Server products include\r\nGitHub hosted (github.com), GitHub Enterprise Server (GHES), and GitHub\r\nEnterprise Cloud (GHEC). For example, the action can be executed on\r\nGitHub hosted and create pull requests on a GHES or GHEC instance.</li>\r\n</ul>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update distribution by <a\r\nhref=\"https://github.com/actions-bot\"><code>@​actions-bot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2086\">peter-evans/create-pull-request#2086</a></li>\r\n<li>fix crazy-max/ghaction-import-gp parameters by <a\r\nhref=\"https://github.com/fharper\"><code>@​fharper</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2177\">peter-evans/create-pull-request#2177</a></li>\r\n<li>Update distribution by <a\r\nhref=\"https://github.com/actions-bot\"><code>@​actions-bot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2364\">peter-evans/create-pull-request#2364</a></li>\r\n<li>Use checkout v4 by <a\r\nhref=\"https://github.com/okuramasafumi\"><code>@​okuramasafumi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2521\">peter-evans/create-pull-request#2521</a></li>\r\n<li>Note about <code>delete-branch</code> by <a\r\nhref=\"https://github.com/dezren39\"><code>@​dezren39</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2631\">peter-evans/create-pull-request#2631</a></li>\r\n<li>98 dependency updates by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/fharper\"><code>@​fharper</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2177\">peter-evans/create-pull-request#2177</a></li>\r\n<li><a\r\nhref=\"https://github.com/okuramasafumi\"><code>@​okuramasafumi</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2521\">peter-evans/create-pull-request#2521</a></li>\r\n<li><a href=\"https://github.com/dezren39\"><code>@​dezren39</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2631\">peter-evans/create-pull-request#2631</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v5.0.2...v6.0.0\">https://github.com/peter-evans/create-pull-request/compare/v5.0.2...v6.0.0</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/b1ddad2c994a25fbc81a28b3ec0e368bb2021c50\"><code>b1ddad2</code></a>\r\nfeat: v6 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2717\">#2717</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/bb809027fda03cc267431a7d36a88148eb9f3846\"><code>bb80902</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.8 to 18.19.10\r\n(<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2712\">#2712</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/e0037d470cdeb1c8133acfba89af08639bb69eb3\"><code>e0037d4</code></a>\r\nbuild(deps): bump peter-evans/create-or-update-comment from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2702\">#2702</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/94b1f99e3a73880074d0e669c3b69d376cc8ceae\"><code>94b1f99</code></a>\r\nbuild(deps): bump peter-evans/find-comment from 2 to 3 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2703\">#2703</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/69c27eaf4a14a67b5362a51e681f83d3d5e0f96b\"><code>69c27ea</code></a>\r\nbuild(deps-dev): bump ts-jest from 29.1.1 to 29.1.2 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2685\">#2685</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/7ea722a0f6286a45eb3005280d83575a74bc8fef\"><code>7ea722a</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.2 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2684\">#2684</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/5ee839affd4c87811108724370a2819a40e2e5d3\"><code>5ee839a</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.7 to 18.19.8\r\n(<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2683\">#2683</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/60fc256c678e6ed78d0d42e09675c9beba09cb94\"><code>60fc256</code></a>\r\nbuild(deps-dev): bump eslint-plugin-prettier from 5.1.2 to 5.1.3 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2660\">#2660</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/0c677233614c017442253060c74fd2cb7ff349fc\"><code>0c67723</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.5 to 18.19.7\r\n(<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2661\">#2661</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/4e288e851b95bd1362e281a255094fcc47ada675\"><code>4e288e8</code></a>\r\nbuild(deps-dev): bump prettier from 3.1.1 to 3.2.2 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2659\">#2659</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/153407881ec5c347639a548ade7d8ad1d6740e38...b1ddad2c994a25fbc81a28b3ec0e368bb2021c50\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=peter-evans/create-pull-request&package-manager=github_actions&previous-version=5.0.2&new-version=6.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:48:41-05:00",
          "tree_id": "a84db02298f05f5c276da5a18eb0af5aae740b5d",
          "url": "https://github.com/runfinch/finch/commit/cb3d76fb8ee2743a3ca4ead52eddd9dc075ec07f"
        },
        "date": 1707761910707,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41629606179,
            "unit": "ns/op\t         0.3254 %cpu_avg/op\t        27.27 %cpu_peak/op\t        41.63 cpu_seconds/op\t1371738112 disk_bytes/op\t 1882416 B/op\t   39610 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41629606179,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3254,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 41.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1371738112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1882416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39610,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30310463451,
            "unit": "ns/op\t         0.3997 %cpu_avg/op\t        35.71 %cpu_peak/op\t        30.31 cpu_seconds/op\t  98590720 disk_bytes/op\t 1361912 B/op\t   28750 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30310463451,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3997,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.31,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 98590720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1361912,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28750,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 507602613,
            "unit": "ns/op\t         0.4575 %cpu_avg/op\t        16.08 %cpu_peak/op\t         0.5075 cpu_seconds/op\t      6144 disk_bytes/op\t   33528 B/op\t     539 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 507602613,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4575,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.08,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5075,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33528,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "2e616ff18d68931f0da81a04045960f035568322",
          "message": "build(deps): Bump github.com/goccy/go-yaml from 1.11.2 to 1.11.3 (#780)\n\nBumps [github.com/goccy/go-yaml](https://github.com/goccy/go-yaml) from\r\n1.11.2 to 1.11.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/goccy/go-yaml/releases\">github.com/goccy/go-yaml's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>1.11.3</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>fix: remove any trailing empty lines if the block scalar has strip\r\nindicator by <a\r\nhref=\"https://github.com/zoncoen\"><code>@​zoncoen</code></a> in <a\r\nhref=\"https://redirect.github.com/goccy/go-yaml/pull/421\">goccy/go-yaml#421</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/goccy/go-yaml/compare/v1.11.2...v1.11.3\">https://github.com/goccy/go-yaml/compare/v1.11.2...v1.11.3</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/goccy/go-yaml/commit/31fe1baacec127337140701face2e64a356075fd\"><code>31fe1ba</code></a>\r\nfix: remove any trailing empty lines if the block scalar has strip\r\nindicator ...</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/goccy/go-yaml/compare/v1.11.2...v1.11.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/goccy/go-yaml&package-manager=go_modules&previous-version=1.11.2&new-version=1.11.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T12:49:22-05:00",
          "tree_id": "a8833f70159d090e8c0c7ffda15257fb4e43ce67",
          "url": "https://github.com/runfinch/finch/commit/2e616ff18d68931f0da81a04045960f035568322"
        },
        "date": 1707762000561,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41009472792,
            "unit": "ns/op\t         0.3637 %cpu_avg/op\t        28.57 %cpu_peak/op\t        41.01 cpu_seconds/op\t1436397568 disk_bytes/op\t 1853712 B/op\t   38984 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41009472792,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3637,
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
            "value": 41.01,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1436397568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1853712,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 38984,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30393402908,
            "unit": "ns/op\t         0.3614 %cpu_avg/op\t        30.77 %cpu_peak/op\t        30.39 cpu_seconds/op\t  16830464 disk_bytes/op\t 1365976 B/op\t   28844 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30393402908,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3614,
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
            "value": 30.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16830464,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1365976,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28844,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 485425624,
            "unit": "ns/op\t         0.6879 %cpu_avg/op\t        12.70 %cpu_peak/op\t         0.4854 cpu_seconds/op\t    103765 disk_bytes/op\t   32594 B/op\t     518 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 485425624,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6879,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.7,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4854,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 103765,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32594,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 518,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bfe4845bc8ea0f43c382b217b8613da3a3e7247",
          "message": "chore: upgrade to go v1.22 (#802)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Upgrade `go.mod` and run `go mod tidy`\r\n- Remove unnecessary `brew install go` since we are already using\r\n`actions/setup-go` and brew may be outdated\r\n\r\n*Testing done:*\r\n- Built finch locally\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-12T17:14:31-05:00",
          "tree_id": "6406d08a1e34306dd8a52c449bbdf5a6cc3b0e11",
          "url": "https://github.com/runfinch/finch/commit/1bfe4845bc8ea0f43c382b217b8613da3a3e7247"
        },
        "date": 1707776308467,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41494662489,
            "unit": "ns/op\t         0.7425 %cpu_avg/op\t       100.0 %cpu_peak/op\t        41.49 cpu_seconds/op\t1331011584 disk_bytes/op\t 1886280 B/op\t   39677 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41494662489,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.7425,
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
            "value": 41.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1331011584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1886280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39677,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 34365087846,
            "unit": "ns/op\t         0.3563 %cpu_avg/op\t        35.71 %cpu_peak/op\t        34.37 cpu_seconds/op\t  84037632 disk_bytes/op\t 1528648 B/op\t   32522 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 34365087846,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3563,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 34.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 84037632,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1528648,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 32522,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 493522971,
            "unit": "ns/op\t         0.9865 %cpu_avg/op\t        31.11 %cpu_peak/op\t         0.4935 cpu_seconds/op\t    -17749 disk_bytes/op\t   32914 B/op\t     519 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 493522971,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9865,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 31.11,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4935,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -17749,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32914,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 519,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b585814a6ea2af111a48ae91f41535443d926c73",
          "message": "ci: make tests more reliable by splitting and bumping common-tests (#811)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- split release tests\r\n- we've seen increased pass rate after similar changes on the regular\r\ne2e test side\r\n- Also added retries, since this is an async workflow that we don't care\r\nhow long it takes\r\n- bump common-tests\r\n- there's a fix for a common e2e test failure in the new version. was\r\nwaiting for dependabot but it hasn't hit yet, so just bundled it with\r\nthis\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-13T18:09:13-05:00",
          "tree_id": "210dae10918b52276ffa99124f22361a4e2c78e7",
          "url": "https://github.com/runfinch/finch/commit/b585814a6ea2af111a48ae91f41535443d926c73"
        },
        "date": 1707865977158,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41074541122,
            "unit": "ns/op\t         0.3728 %cpu_avg/op\t        42.86 %cpu_peak/op\t        41.07 cpu_seconds/op\t1226063872 disk_bytes/op\t 1858376 B/op\t   39067 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41074541122,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3728,
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
            "value": 41.07,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1226063872,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1858376,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39067,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 35887350128,
            "unit": "ns/op\t         0.3180 %cpu_avg/op\t        35.71 %cpu_peak/op\t        35.89 cpu_seconds/op\t 274849792 disk_bytes/op\t 1590416 B/op\t   33922 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 35887350128,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.318,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 35.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 274849792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1590416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 33922,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 549710742,
            "unit": "ns/op\t         1.246 %cpu_avg/op\t        19.87 %cpu_peak/op\t         0.5496 cpu_seconds/op\t      2048 disk_bytes/op\t   35904 B/op\t     577 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 549710742,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.246,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.87,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5496,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 35904,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 577,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "3fbc87ce7e6a07a789674a52fb79f968db267951",
          "message": "build(deps): Bump golang.org/x/crypto from 0.18.0 to 0.19.0 (#806)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.18.0 to 0.19.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/405cb3bdea78b1b48ee79096733841247a944de0\"><code>405cb3b</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/913d3ae7415ace5edad6750b7c9192ac7518e9df\"><code>913d3ae</code></a>\r\nx509roots/fallback: update bundle</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.18.0...v0.19.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.18.0&new-version=0.19.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-13T18:28:17-05:00",
          "tree_id": "afc69a40a892c2b5a578bab88f2c6ceb51345191",
          "url": "https://github.com/runfinch/finch/commit/3fbc87ce7e6a07a789674a52fb79f968db267951"
        },
        "date": 1707868449154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 43884794666,
            "unit": "ns/op\t         0.3085 %cpu_avg/op\t        40.00 %cpu_peak/op\t        43.88 cpu_seconds/op\t1242099712 disk_bytes/op\t 1975312 B/op\t   41699 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43884794666,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3085,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1242099712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1975312,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41699,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 31469628908,
            "unit": "ns/op\t         0.3974 %cpu_avg/op\t        38.46 %cpu_peak/op\t        31.47 cpu_seconds/op\t 276713472 disk_bytes/op\t 1411152 B/op\t   29855 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31469628908,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3974,
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
            "value": 31.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 276713472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1411152,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29855,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 493186923,
            "unit": "ns/op\t         1.029 %cpu_avg/op\t        16.32 %cpu_peak/op\t         0.4931 cpu_seconds/op\t         0 disk_bytes/op\t   33258 B/op\t     523 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 493186923,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.029,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.32,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4931,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33258,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 523,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3522e60577fd70b1f69afd016b09b1fcd6955bc8",
          "message": "chore: remove custom nerdctl-full archives (#804)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Remove custom containerd archives since Lima is now using patched\r\nversions of runc and buildkit\r\n\r\n*Testing done:*\r\n- Tested locally\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-14T12:45:23-05:00",
          "tree_id": "a236bfc8e759305090dfad851d295f344c18dff5",
          "url": "https://github.com/runfinch/finch/commit/3522e60577fd70b1f69afd016b09b1fcd6955bc8"
        },
        "date": 1707932936555,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44070760073,
            "unit": "ns/op\t         0.3106 %cpu_avg/op\t        33.33 %cpu_peak/op\t        44.07 cpu_seconds/op\t1226665984 disk_bytes/op\t 1980240 B/op\t   41832 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44070760073,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3106,
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
            "value": 44.07,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1226665984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1980240,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41832,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29941237222,
            "unit": "ns/op\t         0.3664 %cpu_avg/op\t        35.29 %cpu_peak/op\t        29.94 cpu_seconds/op\t  72970240 disk_bytes/op\t 1350184 B/op\t   28482 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29941237222,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3664,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 35.29,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 72970240,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1350184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28482,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 510415366,
            "unit": "ns/op\t         0.5165 %cpu_avg/op\t        13.53 %cpu_peak/op\t         0.5104 cpu_seconds/op\t      4096 disk_bytes/op\t   34480 B/op\t     539 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 510415366,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5165,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.53,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5104,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34480,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 539,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec20046481553ff4318912115ca8f5181f3af201",
          "message": "ci: attempt to reduce flakes and log more info on failure (#813)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- remove previously added FlakeAttempts and add back a longer timeout\r\nsince this test actually can't be re-run straightforwardly\r\n- try to log more data on failure (may have to move it to a different\r\nblock)\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-14T12:57:00-05:00",
          "tree_id": "735d346f3aef3c3ce21f17991d63ff91032bd307",
          "url": "https://github.com/runfinch/finch/commit/ec20046481553ff4318912115ca8f5181f3af201"
        },
        "date": 1707933669356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42631400878,
            "unit": "ns/op\t         0.6126 %cpu_avg/op\t       100.0 %cpu_peak/op\t        42.63 cpu_seconds/op\t1403158528 disk_bytes/op\t 1930632 B/op\t   40694 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42631400878,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.6126,
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
            "value": 42.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1403158528,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1930632,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40694,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29821406706,
            "unit": "ns/op\t         0.3624 %cpu_avg/op\t        36.36 %cpu_peak/op\t        29.82 cpu_seconds/op\t  69201920 disk_bytes/op\t 1341432 B/op\t   28296 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29821406706,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3624,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 36.36,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 69201920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1341432,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28296,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 525702472,
            "unit": "ns/op\t         0.7723 %cpu_avg/op\t        15.00 %cpu_peak/op\t         0.5256 cpu_seconds/op\t         0 disk_bytes/op\t   34980 B/op\t     553 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 525702472,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7723,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5256,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34980,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 553,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb3051e60d80aabce550377696d4251c9a9b0eec",
          "message": "revert: \"always force stop when using Virtualization.framework\" (#370)\n\nThis reverts commit c521f1f65d406094c653b7a78d0009285b9fc627.\r\n\r\nIssue #, if available: After #368 is merged, the change to always force\r\nstop the VM is no longer necessary, since the upstream issue mentioned\r\nin #350 has been fixed in the new version of Lima.\r\n\r\n*Description of changes:* Undo the changes in #350\r\n\r\n*Testing done:*\r\n- local testing\r\n- unit tests\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nRefs: c521f1f\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-14T15:54:48-05:00",
          "tree_id": "b680e996e371c0cdb60c3792c4abc5c580ab5bfd",
          "url": "https://github.com/runfinch/finch/commit/cb3051e60d80aabce550377696d4251c9a9b0eec"
        },
        "date": 1707944435622,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42182636501,
            "unit": "ns/op\t         0.3420 %cpu_avg/op\t        30.77 %cpu_peak/op\t        42.18 cpu_seconds/op\t1415135232 disk_bytes/op\t 1905560 B/op\t   40110 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42182636501,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.342,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.18,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1415135232,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1905560,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40110,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30438242438,
            "unit": "ns/op\t         0.3469 %cpu_avg/op\t        33.33 %cpu_peak/op\t        30.44 cpu_seconds/op\t  33611776 disk_bytes/op\t 1367088 B/op\t   28855 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30438242438,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3469,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.44,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33611776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1367088,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28855,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 510949566,
            "unit": "ns/op\t         1.291 %cpu_avg/op\t        23.21 %cpu_peak/op\t         0.5109 cpu_seconds/op\t     75776 disk_bytes/op\t   33896 B/op\t     537 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 510949566,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.291,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.21,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5109,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 75776,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33896,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 537,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6188a2cd216a41ba6c45d1a00e1a2014c6598d4e",
          "message": "ci: fix release workflows (#815)\n\nIssue #, if available: \r\n-\r\nhttps://github.com/runfinch/finch/actions/runs/7898818699/job/21557140881#step:15:50\r\n-\r\nhttps://github.com/runfinch/finch/actions/runs/7898798501/job/21557606364#step:12:6625\r\n\r\n\r\n*Description of changes:*\r\n- Accidentally removed the \"installed\" flag from our e2e tests that\r\nvalidate installed versions of Finch, this fixes that\r\n\r\n\r\n*Testing done:*\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-14T17:28:45-05:00",
          "tree_id": "2e7b692da06bafae3e2876399de630f4f7a4e874",
          "url": "https://github.com/runfinch/finch/commit/6188a2cd216a41ba6c45d1a00e1a2014c6598d4e"
        },
        "date": 1707949937747,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42833631806,
            "unit": "ns/op\t         0.3517 %cpu_avg/op\t        46.67 %cpu_peak/op\t        42.83 cpu_seconds/op\t1387741184 disk_bytes/op\t 1928160 B/op\t   40661 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42833631806,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3517,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.83,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1387741184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1928160,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40661,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30544047764,
            "unit": "ns/op\t         0.3332 %cpu_avg/op\t        33.33 %cpu_peak/op\t        30.54 cpu_seconds/op\t  33533952 disk_bytes/op\t 1373360 B/op\t   28993 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30544047764,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3332,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33533952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1373360,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28993,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 521515481,
            "unit": "ns/op\t         0.6467 %cpu_avg/op\t        18.41 %cpu_peak/op\t         0.5215 cpu_seconds/op\t         0 disk_bytes/op\t   34112 B/op\t     546 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 521515481,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6467,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.41,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5215,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34112,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 546,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44946173+haytok@users.noreply.github.com",
            "name": "Hayato Kiwata",
            "username": "haytok"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13de2b99fcd6f952beda9f75e6f3660974a815d0",
          "message": "fix: Correct typo in type name of struct (NerdctlClientOuput) (#743)\n\nIssue #, if available: N/A\r\n\r\n*Description of changes:* Details are described in commit title and diff\r\nof the codes.\r\n\r\n*Testing done:* Yes\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Hayato Kiwata <haytok@amazon.co.jp>",
          "timestamp": "2024-02-15T16:50:40-08:00",
          "tree_id": "c2c04c1cbecd31558811c32e03e815b82bb5a21a",
          "url": "https://github.com/runfinch/finch/commit/13de2b99fcd6f952beda9f75e6f3660974a815d0"
        },
        "date": 1708045858919,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41457421192,
            "unit": "ns/op\t         0.2951 %cpu_avg/op\t        25.00 %cpu_peak/op\t        41.46 cpu_seconds/op\t1437827072 disk_bytes/op\t 1873240 B/op\t   39417 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41457421192,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2951,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 41.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1437827072,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1873240,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39417,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29499549655,
            "unit": "ns/op\t         0.3829 %cpu_avg/op\t        33.33 %cpu_peak/op\t        29.50 cpu_seconds/op\t  33648640 disk_bytes/op\t 1330248 B/op\t   28029 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29499549655,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3829,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33648640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1330248,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28029,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 520232918,
            "unit": "ns/op\t         0.4247 %cpu_avg/op\t        15.00 %cpu_peak/op\t         0.5202 cpu_seconds/op\t         0 disk_bytes/op\t   34548 B/op\t     552 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 520232918,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4247,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5202,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34548,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "d222a347632f9898ed223a122c97d3a973bde3a5",
          "message": "fix: Env variable CONTAINERD_SNAPSHOTTER cleared on overlayfs and ref… (#816)\n\nEnv variable CONTAINERD_SNAPSHOTTER cleared on overlayfs and refactoring\r\nlima config files.\r\n\r\nIssue #, if available:\r\n\r\nTesting done:\r\n\r\n    unit test\r\n    Add soci and check pull and push operation work with soci.\r\n    Add soci and check build works for soci\r\nAdd overlayfs and check it clears soci configs and sets everything to\r\ndefault.\r\n\r\n    [x ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Shubharanshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2024-02-16T09:57:39-08:00",
          "tree_id": "80560f537d934af74165e5a0d0a75ce2f9aadacf",
          "url": "https://github.com/runfinch/finch/commit/d222a347632f9898ed223a122c97d3a973bde3a5"
        },
        "date": 1708106482858,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 43871518463,
            "unit": "ns/op\t         0.2747 %cpu_avg/op\t        33.33 %cpu_peak/op\t        43.87 cpu_seconds/op\t1331249152 disk_bytes/op\t 1973584 B/op\t   41686 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43871518463,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2747,
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
            "value": 43.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1331249152,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1973584,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41686,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29782344051,
            "unit": "ns/op\t         0.3655 %cpu_avg/op\t        37.50 %cpu_peak/op\t        29.78 cpu_seconds/op\t  16707584 disk_bytes/op\t 1342232 B/op\t   28296 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29782344051,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3655,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16707584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1342232,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28296,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 521898158,
            "unit": "ns/op\t         1.110 %cpu_avg/op\t        20.63 %cpu_peak/op\t         0.5218 cpu_seconds/op\t         0 disk_bytes/op\t   33832 B/op\t     547 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 521898158,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.11,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.63,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5218,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33832,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 547,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "0bf9148a6ce88dde413679cc9a3702a5d398d544",
          "message": "build(deps): Bump submodules and dependencies (#805)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\n---------\r\n\r\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nCo-authored-by: ginglis13 <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-19T11:31:00-08:00",
          "tree_id": "43a5971e13759d848c4b710c4e6459434c5984d0",
          "url": "https://github.com/runfinch/finch/commit/0bf9148a6ce88dde413679cc9a3702a5d398d544"
        },
        "date": 1708371306320,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45700260755,
            "unit": "ns/op\t         0.3228 %cpu_avg/op\t        33.33 %cpu_peak/op\t        45.70 cpu_seconds/op\t1236213760 disk_bytes/op\t 2049520 B/op\t   43414 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45700260755,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3228,
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
            "value": 45.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1236213760,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2049520,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43414,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36029272038,
            "unit": "ns/op\t         0.2830 %cpu_avg/op\t        35.71 %cpu_peak/op\t        36.03 cpu_seconds/op\t 190767104 disk_bytes/op\t 1598488 B/op\t   34120 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36029272038,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.283,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.03,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 190767104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1598488,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34120,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 521887556,
            "unit": "ns/op\t         0.6934 %cpu_avg/op\t        15.38 %cpu_peak/op\t         0.5218 cpu_seconds/op\t         0 disk_bytes/op\t   33672 B/op\t     547 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 521887556,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6934,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5218,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33672,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 547,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a96788bbce5e9a6af805650a1c21d1c60e04fa68",
          "message": "fix: stop Finch on uninstall (#818)\n\nIssue #, if available: Fixes #794\r\n\r\n*Description of changes:*\r\n- The uninstall script runs on upgrade, and this makes the uninstall\r\nscript stop/remove Finch's VM\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-19T14:42:11-05:00",
          "tree_id": "e8123e2108fc4c24640262709748cdcc317d040e",
          "url": "https://github.com/runfinch/finch/commit/a96788bbce5e9a6af805650a1c21d1c60e04fa68"
        },
        "date": 1708371963543,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 43726252565,
            "unit": "ns/op\t         0.3746 %cpu_avg/op\t        50.00 %cpu_peak/op\t        43.73 cpu_seconds/op\t1422061568 disk_bytes/op\t 1966960 B/op\t   41542 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43726252565,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3746,
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
            "value": 43.73,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1422061568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1966960,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41542,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30523966088,
            "unit": "ns/op\t         0.3880 %cpu_avg/op\t        45.45 %cpu_peak/op\t        30.52 cpu_seconds/op\t  16711680 disk_bytes/op\t 1372992 B/op\t   29005 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30523966088,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.388,
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
            "value": 30.52,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16711680,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1372992,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29005,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 515722002,
            "unit": "ns/op\t         0.7969 %cpu_avg/op\t        24.04 %cpu_peak/op\t         0.5157 cpu_seconds/op\t      6144 disk_bytes/op\t   33708 B/op\t     543 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 515722002,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7969,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.04,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5157,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33708,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 543,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f236609429534bab3057971e6126cf9b3ff47fc",
          "message": "fix: msi release tests cleanup (#819)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Replace `timeout` with `Start-Sleep` (timeout wasn't working)\r\n- Also cleanup the persistent data volume\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-19T14:42:19-05:00",
          "tree_id": "435a8a6203eea4b843da776e725550ec5f4138de",
          "url": "https://github.com/runfinch/finch/commit/0f236609429534bab3057971e6126cf9b3ff47fc"
        },
        "date": 1708371975106,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45357103559,
            "unit": "ns/op\t         0.2890 %cpu_avg/op\t        30.77 %cpu_peak/op\t        45.36 cpu_seconds/op\t1254834176 disk_bytes/op\t 2032608 B/op\t   43027 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45357103559,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.289,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 45.36,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1254834176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2032608,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43027,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 33735667918,
            "unit": "ns/op\t         0.2842 %cpu_avg/op\t        35.71 %cpu_peak/op\t        33.74 cpu_seconds/op\t 132034560 disk_bytes/op\t 1502880 B/op\t   31946 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 33735667918,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2842,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 33.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 132034560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1502880,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 31946,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 518872664,
            "unit": "ns/op\t         0.5474 %cpu_avg/op\t        13.56 %cpu_peak/op\t         0.5188 cpu_seconds/op\t         0 disk_bytes/op\t   33708 B/op\t     543 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 518872664,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5474,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.56,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5188,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33708,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 543,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "7323751937900df76b217736acc51d77b9cff3d9",
          "message": "build(deps): Bump golang.org/x/tools from 0.17.0 to 0.18.0 (#807)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.17.0\r\nto 0.18.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c5643e9baf7fed6936d70e3abf925f86fa895ca1\"><code>c5643e9</code></a>\r\ngopls/internal/server: fix two bugs related to dynamic\r\nconfiguration</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/50b4f1b124a3a03ca655a70817a9b95eedab863d\"><code>50b4f1b</code></a>\r\ngopls/internal/golang: close open file</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f0ef3c690241cae5119135077dee723e50c1278d\"><code>f0ef3c6</code></a>\r\ngopls: update x/telemetry dependency to fix crash</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/8cf0a8e204a2438da431f503635abed925cbfb79\"><code>8cf0a8e</code></a>\r\ngopls: record that v0.15 will be the last to support go1.18</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/730dc3c170c3e54f0dc78e72a0943f7cd43bb425\"><code>730dc3c</code></a>\r\ngopls/internal/settings: add a hidden option to disable zero config</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/95f04f4ae85908c11fcb0f0cdb7d0e14ca318fe3\"><code>95f04f4</code></a>\r\ngopls/internal/golang: add resolve support for inline refactorings</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/9619683231abea86b02c3e2af49a1f5ee9fc5d1a\"><code>9619683</code></a>\r\ngopls/internal/cache: treat local replaces as workspace modules</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/a5af84e3f3e3a6f2652789eeba70253d6ea8cb4c\"><code>a5af84e</code></a>\r\ngopls/internal/cache: check views on any on-disk change to go.mod\r\nfiles</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/a7407facde3f3a9b2736a7306823549d2c24efae\"><code>a7407fa</code></a>\r\ngopls: update telemetry</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/314368ddf001d9629fdf2df9fce2b209f8890925\"><code>314368d</code></a>\r\ngo/analysis/passes/deepequalerrors: audit for types.Alias safety</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.17.0...v0.18.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.17.0&new-version=0.18.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T14:42:45-05:00",
          "tree_id": "eaaa939a403eac8a781bda1420cef660c37817c9",
          "url": "https://github.com/runfinch/finch/commit/7323751937900df76b217736acc51d77b9cff3d9"
        },
        "date": 1708372182057,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45092505146,
            "unit": "ns/op\t         0.3415 %cpu_avg/op\t        42.86 %cpu_peak/op\t        45.09 cpu_seconds/op\t1381163008 disk_bytes/op\t 2024368 B/op\t   42842 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45092505146,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3415,
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
            "value": 45.09,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1381163008,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2024368,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42842,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36305970054,
            "unit": "ns/op\t         0.2974 %cpu_avg/op\t        35.71 %cpu_peak/op\t        36.31 cpu_seconds/op\t  16728064 disk_bytes/op\t 1651064 B/op\t   34375 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36305970054,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2974,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.31,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16728064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1651064,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34375,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 513953317,
            "unit": "ns/op\t         0.6483 %cpu_avg/op\t        21.03 %cpu_peak/op\t         0.5139 cpu_seconds/op\t         0 disk_bytes/op\t   33444 B/op\t     542 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 513953317,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6483,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.03,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5139,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33444,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 542,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "47fe4f2d2cb070b94f97b316adee23a64c9c836a",
          "message": "ci(deps): Bump aws-actions/configure-aws-credentials from 4.0.1 to 4.0.2 (#809)\n\nBumps\r\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\r\nfrom 4.0.1 to 4.0.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.2</h2>\r\n<p>See the <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">changelog</a>\r\nfor details about the changes included in this release.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h1>Changelog</h1>\r\n<p>All notable changes to this project will be documented in this file.\r\nSee <a\r\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\r\nfor commit guidelines.</p>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.0.1...v4.0.2\">4.0.2</a>\r\n(2024-02-09)</h2>\r\n<ul>\r\n<li>Revert 4.0.1 to remove warning</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.0.0...v4.0.1\">4.0.1</a>\r\n(2023-10-03)</h2>\r\n<h3>Documentation</h3>\r\n<ul>\r\n<li>Throw a warning when customers use long-term credentials.</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v3.0.2...v4.0.0\">4.0.0</a>\r\n(2023-09-11)</h2>\r\n<ul>\r\n<li>Upgraded runtime to <code>node20</code> from\r\n<code>node16</code></li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v3.0.1...v3.0.2\">3.0.2</a>\r\n(2023-09-07)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>fixes <a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/817\">#817</a>\r\n<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/819\">#819</a>:\r\nvalidation logic throwing unwanted errors <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d78f55b1db65186cb251a8504ae9527af06fc5fd\">d78f55b</a></li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v3.0.0...v3.0.1\">3.0.1</a>\r\n(2023-08-24)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Can configure <code>special-characters-workaround</code> to keep\r\nretrying credentials if the returned\r\ncredentials have special characters (Fixes <a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/599\">#599</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Fixes <a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/792\">#792</a>:\r\nAction fails when intending to use existing credentials</li>\r\n<li>Minor typo fix from <a\r\nhref=\"https://github.com/ubaid-ansari21\"><code>@​ubaid-ansari21</code></a></li>\r\n</ul>\r\n<h3>Changes to existing functionality</h3>\r\n<ul>\r\n<li>Special characters are now allowed in returned credential variables\r\nunless you configure the\r\n<code>special-characters-workaround</code> option</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v2.2.0...v3.0.0\">3.0.0</a>\r\n(2023-08-21)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Can configure <code>max-retries</code> and\r\n<code>disable-retry</code> to modify retry functionality when the assume\r\nrole call fails</li>\r\n<li>Set returned credentials as step outputs with\r\n<code>output-credentials</code></li>\r\n<li>Clear AWS related environment variables at the start of the action\r\nwith <code>unset-current-credentials</code></li>\r\n<li>Unique role identifier is now printed in the workflow logs</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Can't use credentials if they contain a special character</li>\r\n<li>Retry functionality added when generating the JWT fails</li>\r\n<li>Can now use <code>webIdentityTokenFile</code> option</li>\r\n<li>Branch name validation too strict</li>\r\n<li>JS SDK v2 deprecation warning in workflow logs</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e3dd6a429d7300a6a4c196c26e071d42e0343502\"><code>e3dd6a4</code></a>\r\nchore: Bump <code>@​types/jest</code> from 29.5.11 to 29.5.12 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1000\">#1000</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c6c400fca46e6f0033dbdbac29d28db993b641dc\"><code>c6c400f</code></a>\r\nchore: Bump <code>@​types/node</code> from 20.11.5 to 20.11.16 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/999\">#999</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c38ab417a361cbb7fa5bbab690a9356fda258f53\"><code>c38ab41</code></a>\r\nchore: Bump prettier from 3.2.4 to 3.2.5 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/998\">#998</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2071ebe8a6b933b1341860457c7a33eb206dfb9a\"><code>2071ebe</code></a>\r\nchore: Bump <code>@​types/node</code> from 20.11.3 to 20.11.5 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/986\">#986</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/44112af7fc384b8b0a44e750998777ceac864b86\"><code>44112af</code></a>\r\nchore: Update dist</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/492c455782c0e7f83ae23aa2c3f8043cc93bf8ea\"><code>492c455</code></a>\r\nchore: Bump <code>@​aws-sdk/client-sts</code> from 3.490.0 to 3.496.0\r\n(<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/982\">#982</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/13e074e8f2e2f7c8cae9515694d0ff8ead9ed044\"><code>13e074e</code></a>\r\nchore: Update dist</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5a676ce81e95cf6f41600bf05514c1a11daa0335\"><code>5a676ce</code></a>\r\nchore: Bump <code>@​smithy/property-provider</code> from 2.0.17 to 2.1.1\r\n(<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/985\">#985</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e43a6967540faf6422502463f13b4b8fef4dc0ab\"><code>e43a696</code></a>\r\nchore: Bump ts-jest from 29.1.1 to 29.1.2 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/983\">#983</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/eb98af56d55414d792b03da02b885834bbc725ba\"><code>eb98af5</code></a>\r\nchore: Bump prettier from 3.2.2 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/981\">#981</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/010d0da01d0b5a38af31e9c3470dbfdabdecca3a...e3dd6a429d7300a6a4c196c26e071d42e0343502\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=4.0.1&new-version=4.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T14:44:26-05:00",
          "tree_id": "2d20b95832873b849f2699a6cedcc1e3f4a32192",
          "url": "https://github.com/runfinch/finch/commit/47fe4f2d2cb070b94f97b316adee23a64c9c836a"
        },
        "date": 1708372191457,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 42382685756,
            "unit": "ns/op\t         0.4289 %cpu_avg/op\t        33.33 %cpu_peak/op\t        42.38 cpu_seconds/op\t1263943680 disk_bytes/op\t 1913280 B/op\t   40307 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42382685756,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4289,
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
            "value": 42.38,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1263943680,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1913280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40307,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29881209388,
            "unit": "ns/op\t         0.3659 %cpu_avg/op\t        38.46 %cpu_peak/op\t        29.88 cpu_seconds/op\t  20836352 disk_bytes/op\t 1346576 B/op\t   28401 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29881209388,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3659,
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
            "value": 29.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 20836352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1346576,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28401,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 525721308,
            "unit": "ns/op\t         0.4744 %cpu_avg/op\t        15.00 %cpu_peak/op\t         0.5256 cpu_seconds/op\t         0 disk_bytes/op\t   33612 B/op\t     551 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 525721308,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4744,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5256,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33612,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 551,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "2fefca5bafe5814ac1279d521f188f185e0e246e",
          "message": "ci(deps): Bump golangci/golangci-lint-action from 3.7.0 to 4.0.0 (#808)\n\nBumps\r\n[golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action)\r\nfrom 3.7.0 to 4.0.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golangci/golangci-lint-action/releases\">golangci/golangci-lint-action's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>Documentation</h3>\r\n<ul>\r\n<li>docs: update examples by <a\r\nhref=\"https://github.com/KunalSin9h\"><code>@​KunalSin9h</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/826\">golangci/golangci-lint-action#826</a></li>\r\n<li>docs: update section about GitHub Annotations by <a\r\nhref=\"https://github.com/JustinDFuller\"><code>@​JustinDFuller</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/931\">golangci/golangci-lint-action#931</a></li>\r\n</ul>\r\n<h3>Dependencies</h3>\r\n<ul>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.3.0 to 6.4.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/829\">golangci/golangci-lint-action#829</a></li>\r\n<li>build(deps-dev): bump eslint-plugin-import from 2.28.0 to 2.28.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/830\">golangci/golangci-lint-action#830</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.0 to 20.5.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/827\">golangci/golangci-lint-action#827</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.3.0 to 6.4.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/831\">golangci/golangci-lint-action#831</a></li>\r\n<li>build(deps-dev): bump prettier from 3.0.1 to 3.0.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/828\">golangci/golangci-lint-action#828</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.1 to 20.5.7 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/833\">golangci/golangci-lint-action#833</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.4.0 to 6.4.1 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/834\">golangci/golangci-lint-action#834</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.4.0 to 6.4.1 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/835\">golangci/golangci-lint-action#835</a></li>\r\n<li>build(deps-dev): bump eslint from 8.47.0 to 8.48.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/837\">golangci/golangci-lint-action#837</a></li>\r\n<li>build(deps-dev): bump typescript from 5.1.6 to 5.2.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/836\">golangci/golangci-lint-action#836</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.0 to 7.5.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/838\">golangci/golangci-lint-action#838</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.4.1 to 6.5.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/839\">golangci/golangci-lint-action#839</a></li>\r\n<li>build(deps-dev): bump prettier from 3.0.2 to 3.0.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/842\">golangci/golangci-lint-action#842</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.4.1 to 6.5.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/840\">golangci/golangci-lint-action#840</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.7 to 20.5.9 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/841\">golangci/golangci-lint-action#841</a></li>\r\n<li>chore: bump to use node20 runtime, actions/checkout to v4 by <a\r\nhref=\"https://github.com/chenrui333\"><code>@​chenrui333</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/843\">golangci/golangci-lint-action#843</a></li>\r\n<li>build(deps): bump actions/checkout from 3 to 4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/845\">golangci/golangci-lint-action#845</a></li>\r\n<li>build(deps-dev): bump eslint from 8.48.0 to 8.49.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/846\">golangci/golangci-lint-action#846</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.9 to 20.6.0 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/847\">golangci/golangci-lint-action#847</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.5.0 to 6.6.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/848\">golangci/golangci-lint-action#848</a></li>\r\n<li>build(deps-dev): bump <code>@​vercel/ncc</code> from 0.36.1 to\r\n0.38.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/850\">golangci/golangci-lint-action#850</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.5.0 to 6.6.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/849\">golangci/golangci-lint-action#849</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.1 to 7.5.2 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/853\">golangci/golangci-lint-action#853</a></li>\r\n<li>build(deps): bump <code>@​types/tmp</code> from 0.2.3 to 0.2.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/854\">golangci/golangci-lint-action#854</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.6.0 to 6.7.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/855\">golangci/golangci-lint-action#855</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.0 to 20.6.2 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/857\">golangci/golangci-lint-action#857</a></li>\r\n<li>build(deps): bump <code>@​actions/core</code> from 1.10.0 to 1.10.1\r\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/856\">golangci/golangci-lint-action#856</a></li>\r\n<li>build(deps-dev): bump eslint from 8.49.0 to 8.50.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/859\">golangci/golangci-lint-action#859</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.2 to 20.6.5 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/860\">golangci/golangci-lint-action#860</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.6.0 to 6.7.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/861\">golangci/golangci-lint-action#861</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.0 to 6.7.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/862\">golangci/golangci-lint-action#862</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.2 to 7.5.3 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/864\">golangci/golangci-lint-action#864</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.2 to 6.7.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/865\">golangci/golangci-lint-action#865</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.5 to 20.8.0 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/867\">golangci/golangci-lint-action#867</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.2 to 6.7.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/866\">golangci/golangci-lint-action#866</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.3 to 6.7.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/868\">golangci/golangci-lint-action#868</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.8.0 to 20.8.3 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/869\">golangci/golangci-lint-action#869</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.3 to 6.7.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/870\">golangci/golangci-lint-action#870</a></li>\r\n<li>build(deps-dev): bump eslint from 8.50.0 to 8.51.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/871\">golangci/golangci-lint-action#871</a></li>\r\n<li>build(deps): bump <code>@​actions/http-client</code> from 2.1.1 to\r\n2.2.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/872\">golangci/golangci-lint-action#872</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.4 to 6.7.5 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/874\">golangci/golangci-lint-action#874</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.8.3 to 20.8.6 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/875\">golangci/golangci-lint-action#875</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/3cfe3a4abbb849e10058ce4af15d205b6da42804\"><code>3cfe3a4</code></a>\r\nbuild(deps): bump <code>@​actions/cache</code> from 3.2.3 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/963\">#963</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/cbc59cf0d18a8aa6b4806cab8d5a6ad3622f57fe\"><code>cbc59cf</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.4 to 3.2.5 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/960\">#960</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/459a04b021b544b77372de9a6e429e0d3c136fac\"><code>459a04b</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.19.1 to 6.20.0 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/e2315b67db0fd76598007338449373a42c572b25\"><code>e2315b6</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.19.1 to 6.20.0 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/961\">#961</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/d6173a45d0441c7db097b6014862dde0ddc9b579\"><code>d6173a4</code></a>\r\nbuild(deps): bump <code>@​types/node</code> from 20.11.10 to 20.11.16\r\n(<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/962\">#962</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/0e8f5bf773dd8000d6aeb01936f3090976982f33\"><code>0e8f5bf</code></a>\r\nbuild(deps): bump <code>@​types/node</code> from 20.11.5 to 20.11.10 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/958\">#958</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/349d20632dbaed38f0a492cc991152e3d351e854\"><code>349d206</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.19.0 to 6.19.1 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/2221aee28499deb9551e403a0d876df4b0e70067\"><code>2221aee</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.18.1 to 6.19.1 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/954\">#954</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/3b44ae5b24a084588d4051d37ccb95e8a709a9a3\"><code>3b44ae5</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.18.1 to 6.19.0 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/323b871bbc74bdc20959d979cb52c68910b77f37\"><code>323b871</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.2 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/950\">#950</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golangci/golangci-lint-action/compare/3a919529898de77ec3da873e3063ca4b10e7f5cc...3cfe3a4abbb849e10058ce4af15d205b6da42804\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golangci/golangci-lint-action&package-manager=github_actions&previous-version=3.7.0&new-version=4.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T18:47:36-05:00",
          "tree_id": "cab881f036b0b8fbcbb2d588258b1ed55c650cd2",
          "url": "https://github.com/runfinch/finch/commit/2fefca5bafe5814ac1279d521f188f185e0e246e"
        },
        "date": 1708386674792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44782879104,
            "unit": "ns/op\t         0.3036 %cpu_avg/op\t        30.77 %cpu_peak/op\t        44.78 cpu_seconds/op\t1295089664 disk_bytes/op\t 2009760 B/op\t   42513 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44782879104,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3036,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1295089664,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2009760,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42513,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 33633839999,
            "unit": "ns/op\t         0.4056 %cpu_avg/op\t        43.75 %cpu_peak/op\t        33.63 cpu_seconds/op\t  16805888 disk_bytes/op\t 1497888 B/op\t   31850 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 33633839999,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4056,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 43.75,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 33.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16805888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1497888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 31850,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 519095458,
            "unit": "ns/op\t         0.6420 %cpu_avg/op\t        25.55 %cpu_peak/op\t         0.5190 cpu_seconds/op\t         0 disk_bytes/op\t   33624 B/op\t     547 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 519095458,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.642,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 25.55,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.519,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33624,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 547,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "6ca0f7ff007f88ad37eb02b2c9437042a7350f37",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.29.1 to 0.29.2 (#820)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.29.1 to 0.29.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.29.1...v0.29.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.29.1&new-version=0.29.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T19:05:27-05:00",
          "tree_id": "1ab43088104642afe7edcc86312ed59962db168b",
          "url": "https://github.com/runfinch/finch/commit/6ca0f7ff007f88ad37eb02b2c9437042a7350f37"
        },
        "date": 1708387765086,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 43963412461,
            "unit": "ns/op\t         0.2808 %cpu_avg/op\t        44.44 %cpu_peak/op\t        43.96 cpu_seconds/op\t1245982720 disk_bytes/op\t 1979416 B/op\t   41792 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43963412461,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2808,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1245982720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1979416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41792,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36201258498,
            "unit": "ns/op\t         0.2849 %cpu_avg/op\t        42.86 %cpu_peak/op\t        36.20 cpu_seconds/op\t 102596608 disk_bytes/op\t 1643928 B/op\t   34240 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36201258498,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2849,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 102596608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1643928,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34240,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 500342826,
            "unit": "ns/op\t         0.6687 %cpu_avg/op\t        17.69 %cpu_peak/op\t         0.5003 cpu_seconds/op\t         0 disk_bytes/op\t   32512 B/op\t     526 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 500342826,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6687,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.69,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5003,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32512,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 526,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ace37eaf48fca613f692e7a08b182d268fc60555",
          "message": "fix(windows-installer): uninstall script behavior (#822)\n\nIssue #, if available:\r\n- After my recent changes to the uninstall script (which were aimed at\r\nmaking sure Lima was not running and the WSL2 instance was stopped), I\r\ntested the new installer, and it still had weird behavior. I noticed\r\nthat the script would exit immediately if the Lima stop command failed,\r\nso I added the `&` separators. After that, I noticed that the WSL\r\ncommands would fail immediately. This was because the commands were\r\nbeing executed as a Local install user, instead of the target user.\r\nChanging `Impersonate` to `yes` should resolve that issue\r\n([docs](https://wixtoolset.org/docs/v3/xsd/wix/customaction/)).\r\n\r\n_Description of changes:_\r\n- Ensure that all commands execute by separating them with & instead of\r\nletting failures stop the script\r\n- Ensure script runs in the user's context by setting `Impersonate` to\r\n`yes`\r\n\r\n*Testing done:*\r\n- Local testing\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-20T13:56:09-05:00",
          "tree_id": "2234b78bc074ae60929e8e07f3b9f4a20344a5a4",
          "url": "https://github.com/runfinch/finch/commit/ace37eaf48fca613f692e7a08b182d268fc60555"
        },
        "date": 1708455593666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45445462465,
            "unit": "ns/op\t         0.3367 %cpu_avg/op\t        35.71 %cpu_peak/op\t        45.45 cpu_seconds/op\t1287675904 disk_bytes/op\t 2039088 B/op\t   43177 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45445462465,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3367,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 45.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1287675904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2039088,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43177,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36296204891,
            "unit": "ns/op\t         0.3116 %cpu_avg/op\t        37.50 %cpu_peak/op\t        36.30 cpu_seconds/op\t 184516608 disk_bytes/op\t 1649208 B/op\t   34360 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36296204891,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3116,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 37.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 184516608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1649208,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34360,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 516802346,
            "unit": "ns/op\t         0.9678 %cpu_avg/op\t        21.54 %cpu_peak/op\t         0.5167 cpu_seconds/op\t         0 disk_bytes/op\t   33684 B/op\t     543 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 516802346,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9678,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.54,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5167,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33684,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 543,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f64835d6b7d473eda434cbb932d3c049cac6a5d5",
          "message": "fix(windows-installer): ignore FilesInUse/Restart dialogue (#823)\n\nIssue #, if available:\r\n- When upgrading Finch, if the VM is still running, an important looking\r\nscreen mentioning \"Files in use\" will pop up, and prompt the user to\r\nhave Finch try to delete these files, or ignore them. The default\r\nbehavior of these options doesn't actually do anything in our case.\r\nLuckily, stopping Finch's VM and making sure its removed (which is done\r\nin the uninstall script) should take care of this for us instead. This\r\nchange just removes the extra unnecessary step for users since it may be\r\nconfusing.\r\n\r\n*Description of changes:*\r\n- Suppress the \"Files in use\" dialogue since it's confusing and not\r\nuseful\r\n\r\n*Testing done:*\r\n- Simulated upgrades and uninstalls on my test machine\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-20T15:54:05-05:00",
          "tree_id": "0dd7c132e845da8f552e609b9742570ed104c7cf",
          "url": "https://github.com/runfinch/finch/commit/f64835d6b7d473eda434cbb932d3c049cac6a5d5"
        },
        "date": 1708463485070,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44079508436,
            "unit": "ns/op\t         0.3217 %cpu_avg/op\t        31.25 %cpu_peak/op\t        44.08 cpu_seconds/op\t1387978752 disk_bytes/op\t 1981712 B/op\t   41871 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44079508436,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3217,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 31.25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.08,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1387978752,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1981712,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41871,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 34152264839,
            "unit": "ns/op\t         0.3501 %cpu_avg/op\t        46.67 %cpu_peak/op\t        34.15 cpu_seconds/op\t  25141248 disk_bytes/op\t 1523184 B/op\t   32394 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 34152264839,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3501,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 34.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 25141248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1523184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 32394,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 531061566,
            "unit": "ns/op\t         1.251 %cpu_avg/op\t        25.00 %cpu_peak/op\t         0.5310 cpu_seconds/op\t      2048 disk_bytes/op\t   34208 B/op\t     558 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 531061566,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.251,
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
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.531,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34208,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 558,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fccfa1dd5773242039254e067dcde0cd9fd4fe5e",
          "message": "fix(windows-installer): add new cleanup script on install (#824)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Add new script that runs upon installation to cleanup any dangling\r\nFinch VM\r\n- This is needed because earlier versions of Finch's Windows installer\r\ndon't clean up properly on uninstall / reinstall\r\n- Even with this change, user's will be prompted to stop limactl on\r\nreinstall if Finch is running. Regardless of which action they choose,\r\nthe install script will cleanup any dangling VMs.\r\n\r\n*Testing done:*\r\n- Tested locally\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-20T17:03:10-05:00",
          "tree_id": "10364c330d12d6c0a9b39774af7df416e5755d2a",
          "url": "https://github.com/runfinch/finch/commit/fccfa1dd5773242039254e067dcde0cd9fd4fe5e"
        },
        "date": 1708467709231,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 41885182170,
            "unit": "ns/op\t         0.3310 %cpu_avg/op\t        44.44 %cpu_peak/op\t        41.89 cpu_seconds/op\t1272893440 disk_bytes/op\t 1889920 B/op\t   39809 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41885182170,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.331,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 44.44,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 41.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1272893440,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1889920,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39809,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30614423682,
            "unit": "ns/op\t         0.3239 %cpu_avg/op\t        27.27 %cpu_peak/op\t        30.61 cpu_seconds/op\t  17809408 disk_bytes/op\t 1375272 B/op\t   29063 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30614423682,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3239,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.61,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17809408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1375272,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29063,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 509377164,
            "unit": "ns/op\t         0.4671 %cpu_avg/op\t        14.04 %cpu_peak/op\t         0.5093 cpu_seconds/op\t         0 disk_bytes/op\t   33253 B/op\t     536 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 509377164,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4671,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.04,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5093,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33253,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "0f0c824f23f3057b9dca2a61ef8aabe0eeb73a5b",
          "message": "chore(main): release 1.1.2 (#803)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n## [1.1.2](https://github.com/runfinch/finch/compare/v1.1.1...v1.1.2)\r\n(2024-02-20)\r\n\r\n\r\n### Build System or External Dependencies\r\n\r\n* **deps:** Bump github.com/docker/docker from 25.0.1+incompatible to\r\n25.0.3+incompatible\r\n([#799](https://github.com/runfinch/finch/issues/799))\r\n([d761301](https://github.com/runfinch/finch/commit/d7613012551bd47c26476a993a35856aab91511c))\r\n* **deps:** Bump github.com/goccy/go-yaml from 1.11.2 to 1.11.3\r\n([#780](https://github.com/runfinch/finch/issues/780))\r\n([2e616ff](https://github.com/runfinch/finch/commit/2e616ff18d68931f0da81a04045960f035568322))\r\n* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.12 to 3.24.1\r\n([#787](https://github.com/runfinch/finch/issues/787))\r\n([55f6d92](https://github.com/runfinch/finch/commit/55f6d929949c1f776a63b93ea4a4446cc821e74a))\r\n* **deps:** Bump golang.org/x/crypto from 0.18.0 to 0.19.0\r\n([#806](https://github.com/runfinch/finch/issues/806))\r\n([3fbc87c](https://github.com/runfinch/finch/commit/3fbc87ce7e6a07a789674a52fb79f968db267951))\r\n* **deps:** Bump golang.org/x/tools from 0.17.0 to 0.18.0\r\n([#807](https://github.com/runfinch/finch/issues/807))\r\n([7323751](https://github.com/runfinch/finch/commit/7323751937900df76b217736acc51d77b9cff3d9))\r\n* **deps:** Bump k8s.io/apimachinery from 0.29.1 to 0.29.2\r\n([#820](https://github.com/runfinch/finch/issues/820))\r\n([6ca0f7f](https://github.com/runfinch/finch/commit/6ca0f7ff007f88ad37eb02b2c9437042a7350f37))\r\n* **deps:** Bump submodules and dependencies\r\n([#795](https://github.com/runfinch/finch/issues/795))\r\n([ec77f1a](https://github.com/runfinch/finch/commit/ec77f1abe9c00ddd9cd84ed665204c2c5df4c40b))\r\n* **deps:** Bump submodules and dependencies\r\n([#805](https://github.com/runfinch/finch/issues/805))\r\n([0bf9148](https://github.com/runfinch/finch/commit/0bf9148a6ce88dde413679cc9a3702a5d398d544))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Correct typo in type name of struct (NerdctlClientOuput)\r\n([#743](https://github.com/runfinch/finch/issues/743))\r\n([13de2b9](https://github.com/runfinch/finch/commit/13de2b99fcd6f952beda9f75e6f3660974a815d0))\r\n* Env variable CONTAINERD_SNAPSHOTTER cleared on overlayfs and ref…\r\n([#816](https://github.com/runfinch/finch/issues/816))\r\n([d222a34](https://github.com/runfinch/finch/commit/d222a347632f9898ed223a122c97d3a973bde3a5))\r\n* msi release tests cleanup\r\n([#819](https://github.com/runfinch/finch/issues/819))\r\n([0f23660](https://github.com/runfinch/finch/commit/0f236609429534bab3057971e6126cf9b3ff47fc))\r\n* stop Finch on uninstall\r\n([#818](https://github.com/runfinch/finch/issues/818))\r\n([a96788b](https://github.com/runfinch/finch/commit/a96788bbce5e9a6af805650a1c21d1c60e04fa68))\r\n* **windows-installer:** add new cleanup script on install\r\n([#824](https://github.com/runfinch/finch/issues/824))\r\n([fccfa1d](https://github.com/runfinch/finch/commit/fccfa1dd5773242039254e067dcde0cd9fd4fe5e))\r\n* **windows-installer:** ignore FilesInUse/Restart dialogue\r\n([#823](https://github.com/runfinch/finch/issues/823))\r\n([f64835d](https://github.com/runfinch/finch/commit/f64835d6b7d473eda434cbb932d3c049cac6a5d5))\r\n* **windows-installer:** uninstall script behavior\r\n([#822](https://github.com/runfinch/finch/issues/822))\r\n([ace37ea](https://github.com/runfinch/finch/commit/ace37eaf48fca613f692e7a08b182d268fc60555))\r\n\r\n\r\n### Reverts\r\n\r\n* \"always force stop when using Virtualization.framework\"\r\n([#370](https://github.com/runfinch/finch/issues/370))\r\n([cb3051e](https://github.com/runfinch/finch/commit/cb3051e60d80aabce550377696d4251c9a9b0eec))\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-21T10:11:51-08:00",
          "tree_id": "40008d27e9b2606af1117419d9bf60d27a42b3dd",
          "url": "https://github.com/runfinch/finch/commit/0f0c824f23f3057b9dca2a61ef8aabe0eeb73a5b"
        },
        "date": 1708539335893,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 43423722060,
            "unit": "ns/op\t         0.3709 %cpu_avg/op\t        36.36 %cpu_peak/op\t        43.42 cpu_seconds/op\t1355431936 disk_bytes/op\t 1954624 B/op\t   41257 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43423722060,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3709,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 43.42,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1355431936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1954624,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41257,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30087544337,
            "unit": "ns/op\t         0.3962 %cpu_avg/op\t        33.33 %cpu_peak/op\t        30.09 cpu_seconds/op\t  18915328 disk_bytes/op\t 1354288 B/op\t   28578 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30087544337,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3962,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.09,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 18915328,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1354288,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28578,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 521461024,
            "unit": "ns/op\t         0.4824 %cpu_avg/op\t        14.93 %cpu_peak/op\t         0.5214 cpu_seconds/op\t         0 disk_bytes/op\t   34284 B/op\t     552 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 521461024,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4824,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.93,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5214,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34284,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mharwani@amazon.com",
            "name": "Mrudul Harwani",
            "username": "mharwani"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e20a7253df75e89bf2ba1c195ce68a6bd1ff63a6",
          "message": "ci: release-homebrew workflow updated to remove the --force option in… (#828)\n\n… PR bump\r\n\r\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nThe latest release of Homebrew does not allow forcing multiple PRs\r\n(https://github.com/Homebrew/brew/pull/16664). This causes the\r\n`release-homebrew` workflow to fail as it uses the `--force` option in\r\n`bump-cask-pr` command which is disabled as of brew version 4.2.9. This\r\nPR removes the `--force` flag to fix the workflow step.\r\n\r\nRecent Homebrew workflow failure:\r\nhttps://github.com/runfinch/finch/actions/runs/7997204281/job/21841199683\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Mrudul Harwani <mharwani@amazon.com>",
          "timestamp": "2024-02-22T09:02:32-08:00",
          "tree_id": "d889340e70104d01fc84c537e59b3c738e31cf5c",
          "url": "https://github.com/runfinch/finch/commit/e20a7253df75e89bf2ba1c195ce68a6bd1ff63a6"
        },
        "date": 1708621574816,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45485254118,
            "unit": "ns/op\t         0.3335 %cpu_avg/op\t        52.94 %cpu_peak/op\t        45.49 cpu_seconds/op\t1420406784 disk_bytes/op\t 2042240 B/op\t   43241 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45485254118,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3335,
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
            "value": 45.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1420406784,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2042240,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43241,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36124201480,
            "unit": "ns/op\t         0.2954 %cpu_avg/op\t        41.18 %cpu_peak/op\t        36.12 cpu_seconds/op\t  23040000 disk_bytes/op\t 1641000 B/op\t   34177 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36124201480,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2954,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 41.18,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 23040000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1641000,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34177,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 513866294,
            "unit": "ns/op\t         0.6377 %cpu_avg/op\t        12.69 %cpu_peak/op\t         0.5138 cpu_seconds/op\t         0 disk_bytes/op\t   33420 B/op\t     542 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 513866294,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6377,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.69,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5138,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33420,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 542,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pendo324@users.noreply.github.com",
            "name": "Justin",
            "username": "pendo324"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22875751324666cb68f6ef928b9960b8fb9ede08",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.13 to 0.7.14 (#834)\n\nIssue #, if available:\r\nHoping this fixes the last few flaky tests on Windows (see:\r\nhttps://github.com/runfinch/finch/actions/runs/8028176583/job/22044404059?pr=830)\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-27T19:18:56-05:00",
          "tree_id": "8b9c17ec62407503992b7497b100564d59c65200",
          "url": "https://github.com/runfinch/finch/commit/22875751324666cb68f6ef928b9960b8fb9ede08"
        },
        "date": 1709079762572,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 46113298965,
            "unit": "ns/op\t         0.3062 %cpu_avg/op\t        33.33 %cpu_peak/op\t        46.11 cpu_seconds/op\t1325408256 disk_bytes/op\t 2064224 B/op\t   43754 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 46113298965,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3062,
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
            "value": 46.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1325408256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2064224,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43754,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 35842202511,
            "unit": "ns/op\t         0.2857 %cpu_avg/op\t        28.57 %cpu_peak/op\t        35.84 cpu_seconds/op\t  65093632 disk_bytes/op\t 1590424 B/op\t   33930 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 35842202511,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2857,
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
            "value": 35.84,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 65093632,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1590424,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 33930,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 514540077,
            "unit": "ns/op\t         0.9190 %cpu_avg/op\t        18.82 %cpu_peak/op\t         0.5145 cpu_seconds/op\t         0 disk_bytes/op\t   33404 B/op\t     541 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 514540077,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.919,
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
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5145,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33404,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 541,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "4cad1d4ed30bc10d1d22ffb89943b2102f64c265",
          "message": "ci(deps): Bump actions/download-artifact from 4.1.2 to 4.1.3 (#832)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 4.1.2 to 4.1.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.3</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update release-new-action-version.yml by <a\r\nhref=\"https://github.com/konradpabjan\"><code>@​konradpabjan</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/292\">actions/download-artifact#292</a></li>\r\n<li>Update toolkit dependency with updated unzip logic by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/299\">actions/download-artifact#299</a></li>\r\n<li>Update <code>@​actions/artifact</code> by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/303\">actions/download-artifact#303</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/299\">actions/download-artifact#299</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v4...v4.1.3\">https://github.com/actions/download-artifact/compare/v4...v4.1.3</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/87c55149d96e628cc2ef7e6fc2aab372015aec85\"><code>87c5514</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/303\">#303</a>\r\nfrom bethanyj28/main</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/47f9ce604fdcae5583e5ef84048eeb7ef2893652\"><code>47f9ce6</code></a>\r\nupdate <code>@​actions/artifact</code></li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/127824d34cb0da7dc3cb064a37ae280b7c09aca6\"><code>127824d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/299\">#299</a>\r\nfrom bethanyj28/main</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6dd49bff0a6150b47d41011c034b762053acaf6f\"><code>6dd49bf</code></a>\r\nlicensed only artifact</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/f71c0e3da3bb6b4fcc53196b9ac75ee981db5bc6\"><code>f71c0e3</code></a>\r\nRevert &quot;licensed&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7c63dfde29f42bb9cb0f61b67e54c91106a6586e\"><code>7c63dfd</code></a>\r\nlicensed</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/67d37cd34678091933f0a88cd1bb026171ea20d2\"><code>67d37cd</code></a>\r\nUpdate toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/348754975ef0295bfa2c111cba996120cfdf8a5d\"><code>3487549</code></a>\r\nUpdate release-new-action-version.yml (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/292\">#292</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/eaceaf801fd36c7dee90939fad912460b18a1ffe...87c55149d96e628cc2ef7e6fc2aab372015aec85\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4.1.2&new-version=4.1.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T11:07:34-05:00",
          "tree_id": "5df6cae1a0a6067dce925f8437e244802aaed577",
          "url": "https://github.com/runfinch/finch/commit/4cad1d4ed30bc10d1d22ffb89943b2102f64c265"
        },
        "date": 1709136682764,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45005465314,
            "unit": "ns/op\t         0.3001 %cpu_avg/op\t        28.57 %cpu_peak/op\t        45.01 cpu_seconds/op\t1425829888 disk_bytes/op\t 2022480 B/op\t   42788 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45005465314,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3001,
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
            "value": 45.01,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1425829888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2022480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42788,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 36124826174,
            "unit": "ns/op\t         0.2843 %cpu_avg/op\t        28.57 %cpu_peak/op\t        36.12 cpu_seconds/op\t  33648640 disk_bytes/op\t 1601736 B/op\t   34174 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36124826174,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2843,
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
            "value": 36.12,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33648640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1601736,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34174,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 508411502,
            "unit": "ns/op\t         0.8329 %cpu_avg/op\t        19.05 %cpu_peak/op\t         0.5084 cpu_seconds/op\t      2048 disk_bytes/op\t   33272 B/op\t     537 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508411502,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8329,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.05,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5084,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2048,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33272,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 537,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "123a65976fecf00d2f5c522150f0c36f648da6c9",
          "message": "ci(deps): Bump peter-evans/create-pull-request from 6.0.0 to 6.0.1 (#836)\n\nBumps\r\n[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nfrom 6.0.0 to 6.0.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/releases\">peter-evans/create-pull-request's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Create Pull Request v6.0.1</h2>\r\n<p>⚙️ Fixes <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2790\">an\r\nissue</a> where updating a pull request leads to the error <code>Cannot\r\nread properties of undefined (reading 'number')</code>. This was likely\r\ncaused by GitHub fixing a long standing bug with an API endpoint,\r\nresulting in a breaking change.</p>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>build(deps-dev): bump <code>@​types/jest</code> from 29.5.11 to\r\n29.5.12 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2730\">peter-evans/create-pull-request#2730</a></li>\r\n<li>build(deps-dev): bump prettier from 3.2.4 to 3.2.5 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2731\">peter-evans/create-pull-request#2731</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.10 to\r\n18.19.14 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2732\">peter-evans/create-pull-request#2732</a></li>\r\n<li>build(deps): bump peter-evans/slash-command-dispatch from 3 to 4 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2748\">peter-evans/create-pull-request#2748</a></li>\r\n<li>build(deps): bump peter-evans/create-pull-request from 5 to 6 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2747\">peter-evans/create-pull-request#2747</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.14 to\r\n18.19.15 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2759\">peter-evans/create-pull-request#2759</a></li>\r\n<li>build(deps-dev): bump eslint-plugin-jest from 27.6.3 to 27.9.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2769\">peter-evans/create-pull-request#2769</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.15 to\r\n18.19.17 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2768\">peter-evans/create-pull-request#2768</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.17 to\r\n18.19.18 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2780\">peter-evans/create-pull-request#2780</a></li>\r\n<li>build(deps-dev): bump eslint from 8.56.0 to 8.57.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2781\">peter-evans/create-pull-request#2781</a></li>\r\n<li>fix: list pulls using the correct head format by <a\r\nhref=\"https://github.com/peter-evans\"><code>@​peter-evans</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2792\">peter-evans/create-pull-request#2792</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v6.0.0...v6.0.1\">https://github.com/peter-evans/create-pull-request/compare/v6.0.0...v6.0.1</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/a4f52f8033a6168103c2538976c07b467e8163bc\"><code>a4f52f8</code></a>\r\nfix: list pulls using the correct head format (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2792\">#2792</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/853c071bcf61c8762f57e59c1576d97418f495ad\"><code>853c071</code></a>\r\nbuild(deps-dev): bump eslint from 8.56.0 to 8.57.0 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2781\">#2781</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/d2c126edc79e6a215930e9a6adc95b7686b84f78\"><code>d2c126e</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.17 to\r\n18.19.18 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2780\">#2780</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/43d39c683601267cd565ea6bd727a4e92aa00852\"><code>43d39c6</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.15 to\r\n18.19.17 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2768\">#2768</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/5a9d206da2b6452cd63eb84e2e5116ff3213e8cb\"><code>5a9d206</code></a>\r\nbuild(deps-dev): bump eslint-plugin-jest from 27.6.3 to 27.9.0 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2769\">#2769</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/e0743ed96cb63913cf4be3cd1f5492df2ae1c6a4\"><code>e0743ed</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.14 to\r\n18.19.15 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2759\">#2759</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/e1529cb8abb50dd7240e4276b5c4e705d97be7e7\"><code>e1529cb</code></a>\r\nbuild(deps): bump peter-evans/create-pull-request from 5 to 6 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2747\">#2747</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/aad52e87e709ba797765001128cf194c946a457b\"><code>aad52e8</code></a>\r\nbuild(deps): bump peter-evans/slash-command-dispatch from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2748\">#2748</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/a64ebdd73452502a4dd07379ce8f3640dcc0d987\"><code>a64ebdd</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.10 to\r\n18.19.14 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2732\">#2732</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/51b40aff5f23f35e5211017631b0bc1d2746beab\"><code>51b40af</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.4 to 3.2.5 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2731\">#2731</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/b1ddad2c994a25fbc81a28b3ec0e368bb2021c50...a4f52f8033a6168103c2538976c07b467e8163bc\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=peter-evans/create-pull-request&package-manager=github_actions&previous-version=6.0.0&new-version=6.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:04:59-05:00",
          "tree_id": "ddb0b60ea64948b8ffa2cb2396d96dad14b8cb0f",
          "url": "https://github.com/runfinch/finch/commit/123a65976fecf00d2f5c522150f0c36f648da6c9"
        },
        "date": 1709140892128,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44064760509,
            "unit": "ns/op\t         0.3486 %cpu_avg/op\t        30.00 %cpu_peak/op\t        44.06 cpu_seconds/op\t1341714432 disk_bytes/op\t 1981800 B/op\t   41876 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44064760509,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3486,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1341714432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1981800,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41876,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 35690239549,
            "unit": "ns/op\t         0.3006 %cpu_avg/op\t        35.29 %cpu_peak/op\t        35.69 cpu_seconds/op\t  17895424 disk_bytes/op\t 1581280 B/op\t   33740 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 35690239549,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3006,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 35.29,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 35.69,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17895424,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1581280,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 33740,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 515957874,
            "unit": "ns/op\t         0.7550 %cpu_avg/op\t        18.41 %cpu_peak/op\t         0.5159 cpu_seconds/op\t         0 disk_bytes/op\t   33772 B/op\t     543 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 515957874,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.755,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.41,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5159,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33772,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 543,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "1ed1474fa7eaca97e32a7641da76ca96e5d300d1",
          "message": "build(deps): Bump golang.org/x/crypto from 0.19.0 to 0.20.0 (#833)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.19.0 to 0.20.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0aab8d07aefab378c763e8f36aa007544a862aa9\"><code>0aab8d0</code></a>\r\nall: update go.mod x/net dependency</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/5bead598a0d4042616ba0daf31d8398ff6c06eaf\"><code>5bead59</code></a>\r\nocsp: don't use iota for externally defined constants</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/1a865804d5a867febcb0162512f4e5d947ba641e\"><code>1a86580</code></a>\r\nx/crypto/internal/poly1305: improve sum_ppc64le.s</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/1c981e6f81fc4d43487d6ad84d6b499fa55099e8\"><code>1c981e6</code></a>\r\nssh/test: don't use DSA keys in integrations tests, update test RSA\r\nkey</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/62c9f1799c91aef0744179032e30fda3761e79f7\"><code>62c9f17</code></a>\r\nx509roots/nss: manually exclude a confusingly constrained root</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.19.0...v0.20.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.19.0&new-version=0.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:05:32-05:00",
          "tree_id": "e80c48345900e80fcba02ac82dec94118ad272c1",
          "url": "https://github.com/runfinch/finch/commit/1ed1474fa7eaca97e32a7641da76ca96e5d300d1"
        },
        "date": 1709141159973,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44715185299,
            "unit": "ns/op\t         0.3087 %cpu_avg/op\t        28.57 %cpu_peak/op\t        44.72 cpu_seconds/op\t1448034304 disk_bytes/op\t 2008576 B/op\t   42480 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44715185299,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3087,
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
            "value": 44.72,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1448034304,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2008576,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42480,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 671539280,
            "unit": "ns/op\t         0.6953 %cpu_avg/op\t        21.54 %cpu_peak/op\t         0.6715 cpu_seconds/op\t         0 disk_bytes/op\t   40504 B/op\t     696 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 671539280,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6953,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.54,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.6715,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 40504,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 696,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "distinct": false,
          "id": "9eb80975c7490394d5af082b2738dda7d3090fe1",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.25.0 to 1.25.2 (#831)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.25.0 to 1.25.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/7095341032d4a2b1fe04aa5e96e254321169e114\"><code>7095341</code></a>\r\nRelease 2024-02-23</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/bcf04e6e66831a0fde59d0060af9a1d71158c9d5\"><code>bcf04e6</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/ca190b054e7a07bcde270356ffe0ad06fd722ccc\"><code>ca190b0</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/6397a6448e500f7386d005ad2fc3a822f3eaf380\"><code>6397a64</code></a>\r\nmove common middleware stack ops to service client modules (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2516\">#2516</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e9b00e26a17fcdb0b01772ad19fc6f733abac749\"><code>e9b00e2</code></a>\r\nRelease 2024-02-22</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0cfc53e095ae2e97185c6f594d1725320f152304\"><code>0cfc53e</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/92d6c194cfde05280d8836ef7b56c36fd7fd926d\"><code>92d6c19</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/18adb3114cc789def28fac1b718657d33443ed5c\"><code>18adb31</code></a>\r\nadd middleware snapshot tests (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2513\">#2513</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/7888f0e10eb7ef5db0b67a8a27bb8eeee984257b\"><code>7888f0e</code></a>\r\nRelease 2024-02-21</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/4a9cd1dd63c4532e0afe4e5314750bf08f1ae68b\"><code>4a9cd1d</code></a>\r\nRegenerated Clients</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.25.0...v1.25.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.25.0&new-version=1.25.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:06:00-05:00",
          "tree_id": "6608c1aa44d246f9a76be96aa4816132777a440c",
          "url": "https://github.com/runfinch/finch/commit/9eb80975c7490394d5af082b2738dda7d3090fe1"
        },
        "date": 1709141169733,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 45206891277,
            "unit": "ns/op\t         0.3751 %cpu_avg/op\t        30.77 %cpu_peak/op\t        45.21 cpu_seconds/op\t1426866176 disk_bytes/op\t 2027848 B/op\t   42917 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45206891277,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3751,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 30.77,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 45.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1426866176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2027848,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42917,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 29710982833,
            "unit": "ns/op\t         0.3374 %cpu_avg/op\t        31.25 %cpu_peak/op\t        29.71 cpu_seconds/op\t  16674816 disk_bytes/op\t 1341616 B/op\t   28276 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29710982833,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3374,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 31.25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 29.71,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16674816,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1341616,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28276,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 513146192,
            "unit": "ns/op\t         0.9588 %cpu_avg/op\t        24.29 %cpu_peak/op\t         0.5131 cpu_seconds/op\t      6144 disk_bytes/op\t   34088 B/op\t     545 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 513146192,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9588,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.29,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5131,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6144,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34088,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 545,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "d2612aa7683e93213e0ba5f9e082afb343ddcaf2",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.24.1 to 3.24.2 (#838)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.24.1 to 3.24.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.24.2</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>add support for OpenBSD/riscv64 by <a\r\nhref=\"https://github.com/jmatthew\"><code>@​jmatthew</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1594\">shirou/gopsutil#1594</a></li>\r\n<li>[ci]: add macos-13 and macos-14 on GitHub Action by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1599\">shirou/gopsutil#1599</a></li>\r\n</ul>\r\n<h3>Documentation</h3>\r\n<ul>\r\n<li>cwd for windows is supported by <a\r\nhref=\"https://github.com/vlnaum\"><code>@​vlnaum</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1597\">shirou/gopsutil#1597</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/jmatthew\"><code>@​jmatthew</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1594\">shirou/gopsutil#1594</a></li>\r\n<li><a href=\"https://github.com/vlnaum\"><code>@​vlnaum</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1597\">shirou/gopsutil#1597</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2\">https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/e767a0f0f85ae67f68c76d6a29c537ff71392f88\"><code>e767a0f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1599\">#1599</a>\r\nfrom shirou/feat/add_macos_on_github_action_test</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/53fb8caad4bf683e50b5ee73e6bb1fbaafafd314\"><code>53fb8ca</code></a>\r\n[darwin][ci]: skip frequency check on GitHub Action</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/25c3f409bd30649a00cfdf52a65b267522fb2bc5\"><code>25c3f40</code></a>\r\n[ci]: add macos-13 and macos-14 on GitHub Action</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/146bae2a4787c7841a7fc2d706b1415e47898dd2\"><code>146bae2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1597\">#1597</a>\r\nfrom vlnaum/cwd_windows</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d3057c252fe2c12f0b2f62a597d47dddeadcb6e7\"><code>d3057c2</code></a>\r\ncwd support windows doc</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8aeaf163abb6216e52f56bbba4919f6dbc4fd894\"><code>8aeaf16</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1594\">#1594</a>\r\nfrom jmatthew/openbsd-riscv64</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/cbbb2402fedb359c35cf71013f3c8e8768a736da\"><code>cbbb240</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1595\">#1595</a>\r\nfrom shirou/dependabot/github_actions/golangci/golan...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d0037dd62b71f9f239b56858c8e72d65ff831c7a\"><code>d0037dd</code></a>\r\nchore(deps): bump golangci/golangci-lint-action from 3.7.0 to 4.0.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/6ccc60519ec242820e0b2dddb0fae18376363ad3\"><code>6ccc605</code></a>\r\nupdate list OpenBSD arch list</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/27ffa28a0d97df0fde4df6982597d85c06859d78\"><code>27ffa28</code></a>\r\nadd support for OpenBSD/riscv64</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.24.1&new-version=3.24.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-01T16:37:47-05:00",
          "tree_id": "1e3088e0a6fc6a8d2ac9fc85e90f5807b0864516",
          "url": "https://github.com/runfinch/finch/commit/d2612aa7683e93213e0ba5f9e082afb343ddcaf2"
        },
        "date": 1709330556066,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44667580762,
            "unit": "ns/op\t         0.3865 %cpu_avg/op\t        41.67 %cpu_peak/op\t        44.67 cpu_seconds/op\t1390665728 disk_bytes/op\t 2005672 B/op\t   42427 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44667580762,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3865,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 41.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.67,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1390665728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2005672,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42427,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 33429761579,
            "unit": "ns/op\t         0.3830 %cpu_avg/op\t        35.71 %cpu_peak/op\t        33.43 cpu_seconds/op\t  16867328 disk_bytes/op\t 1490336 B/op\t   31670 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 33429761579,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.383,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 33.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16867328,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1490336,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 31670,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 527271059,
            "unit": "ns/op\t         0.5677 %cpu_avg/op\t        17.69 %cpu_peak/op\t         0.5272 cpu_seconds/op\t     34816 disk_bytes/op\t   33860 B/op\t     552 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 527271059,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5677,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.69,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5272,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 34816,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33860,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 552,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
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
          "id": "9f0953d260c806b4b243472ddce14284b2051a3e",
          "message": "build(deps): Bump github.com/stretchr/testify from 1.8.4 to 1.9.0 (#839)\n\nBumps [github.com/stretchr/testify](https://github.com/stretchr/testify)\r\nfrom 1.8.4 to 1.9.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/stretchr/testify/releases\">github.com/stretchr/testify's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.9.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Fix Go modules version by <a\r\nhref=\"https://github.com/SuperQ\"><code>@​SuperQ</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1394\">stretchr/testify#1394</a></li>\r\n<li>Document that require is not safe to call in created goroutines by\r\n<a\r\nhref=\"https://github.com/programmer04\"><code>@​programmer04</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1392\">stretchr/testify#1392</a></li>\r\n<li>Remove myself from MAINTAINERS.md by <a\r\nhref=\"https://github.com/mvdkleijn\"><code>@​mvdkleijn</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1367\">stretchr/testify#1367</a></li>\r\n<li>Correct spelling/grammar by <a\r\nhref=\"https://github.com/echarrod\"><code>@​echarrod</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1389\">stretchr/testify#1389</a></li>\r\n<li>docs: Update URLs in README by <a\r\nhref=\"https://github.com/davidjb\"><code>@​davidjb</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1349\">stretchr/testify#1349</a></li>\r\n<li>Update mockery link to Github Pages in README by <a\r\nhref=\"https://github.com/LandonTClipp\"><code>@​LandonTClipp</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1346\">stretchr/testify#1346</a></li>\r\n<li>docs: Fix typos in tests and comments by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1410\">stretchr/testify#1410</a></li>\r\n<li>CI: tests from go1.17 by <a\r\nhref=\"https://github.com/SuperQ\"><code>@​SuperQ</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1409\">stretchr/testify#1409</a></li>\r\n<li>Fix adding ? when no values passed by <a\r\nhref=\"https://github.com/lesichkovm\"><code>@​lesichkovm</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1320\">stretchr/testify#1320</a></li>\r\n<li>codegen: use standard header for generated files by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1406\">stretchr/testify#1406</a></li>\r\n<li>mock: AssertExpectations log reason only on failure by <a\r\nhref=\"https://github.com/hikyaru-suzuki\"><code>@​hikyaru-suzuki</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1360\">stretchr/testify#1360</a></li>\r\n<li>assert: fix flaky TestNeverTrue by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1417\">stretchr/testify#1417</a></li>\r\n<li>README: fix typos &quot;set up&quot; vs &quot;setup&quot; by <a\r\nhref=\"https://github.com/ossan-dev\"><code>@​ossan-dev</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1428\">stretchr/testify#1428</a></li>\r\n<li>mock: move regexp compilation outside of <code>Called</code> by <a\r\nhref=\"https://github.com/aud10slave\"><code>@​aud10slave</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/631\">stretchr/testify#631</a></li>\r\n<li>assert: refactor internal func getLen() by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1445\">stretchr/testify#1445</a></li>\r\n<li>mock: deprecate type AnythingOfTypeArgument (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1434\">#1434</a>)\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1441\">stretchr/testify#1441</a></li>\r\n<li>Remove no longer needed assert.canConvert by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1470\">stretchr/testify#1470</a></li>\r\n<li>assert: ObjectsAreEqual: use time.Equal for time.Time types by <a\r\nhref=\"https://github.com/tscales\"><code>@​tscales</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1464\">stretchr/testify#1464</a></li>\r\n<li>Bump actions/checkout from 3 to 4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1466\">stretchr/testify#1466</a></li>\r\n<li>Bump actions/setup-go from 3.2.0 to 4.1.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1451\">stretchr/testify#1451</a></li>\r\n<li>fix: make EventuallyWithT concurrency safe by <a\r\nhref=\"https://github.com/czeslavo\"><code>@​czeslavo</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1395\">stretchr/testify#1395</a></li>\r\n<li>assert: fix httpCode and HTTPBody occur panic when http.Handler read\r\nBody by <a href=\"https://github.com/hidu\"><code>@​hidu</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1484\">stretchr/testify#1484</a></li>\r\n<li>assert.EqualExportedValues: fix handling of arrays by <a\r\nhref=\"https://github.com/zrbecker\"><code>@​zrbecker</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1473\">stretchr/testify#1473</a></li>\r\n<li>.github: use latest Go versions by <a\r\nhref=\"https://github.com/kevinburkesegment\"><code>@​kevinburkesegment</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1489\">stretchr/testify#1489</a></li>\r\n<li>assert: Deprecate EqualExportedValues by <a\r\nhref=\"https://github.com/HaraldNordgren\"><code>@​HaraldNordgren</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1488\">stretchr/testify#1488</a></li>\r\n<li>suite: refactor test assertions by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1474\">stretchr/testify#1474</a></li>\r\n<li>suite: fix SetupSubTest and TearDownSubTest execution order by <a\r\nhref=\"https://github.com/linusbarth\"><code>@​linusbarth</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1471\">stretchr/testify#1471</a></li>\r\n<li>docs: Fix deprecation comments for http package by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1335\">stretchr/testify#1335</a></li>\r\n<li>Add map support doc comments to Subset and NotSubset by <a\r\nhref=\"https://github.com/jedevc\"><code>@​jedevc</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1306\">stretchr/testify#1306</a></li>\r\n<li>TestErrorIs/TestNotErrorIs: check error message contents by <a\r\nhref=\"https://github.com/craig65535\"><code>@​craig65535</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1435\">stretchr/testify#1435</a></li>\r\n<li>suite: fix subtest names (fix <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1501\">#1501</a>)\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1504\">stretchr/testify#1504</a></li>\r\n<li>assert: improve unsafe.Pointer tests by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1505\">stretchr/testify#1505</a></li>\r\n<li>assert: simplify isNil implementation by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1506\">stretchr/testify#1506</a></li>\r\n<li>assert.InEpsilonSlice: fix expected/actual order and other\r\nimprovements by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1483\">stretchr/testify#1483</a></li>\r\n<li>Fix dependency cycle with objx <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1292\">#1292</a>\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1453\">stretchr/testify#1453</a></li>\r\n<li>mock: refactor TestIsArgsEqual by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1444\">stretchr/testify#1444</a></li>\r\n<li>mock: optimize argument matching checks by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1416\">stretchr/testify#1416</a></li>\r\n<li>assert: fix TestEventuallyTimeout by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1412\">stretchr/testify#1412</a></li>\r\n<li>CI: add go 1.21 in GitHub Actions by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1450\">stretchr/testify#1450</a></li>\r\n<li>suite: fix recoverAndFailOnPanic to report test failure at the right\r\nlocation by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1502\">stretchr/testify#1502</a></li>\r\n<li>Update maintainers by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1533\">stretchr/testify#1533</a></li>\r\n<li>assert: Fix EqualValues to handle overflow/underflow by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1531\">stretchr/testify#1531</a></li>\r\n<li>assert: better formatting for Len() error by <a\r\nhref=\"https://github.com/kevinburkesegment\"><code>@​kevinburkesegment</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1485\">stretchr/testify#1485</a></li>\r\n<li>Ensure AssertExpectations does not fail in skipped tests by <a\r\nhref=\"https://github.com/ianrose14\"><code>@​ianrose14</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1331\">stretchr/testify#1331</a></li>\r\n<li>suite: fix deadlock in suite.Require()/Assert() by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1535\">stretchr/testify#1535</a></li>\r\n<li>Revert &quot;assert: ObjectsAreEqual: use time.Equal for time.Time\r\ntype&quot; by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1537\">stretchr/testify#1537</a></li>\r\n<li>[chore] Add issue templates by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1538\">stretchr/testify#1538</a></li>\r\n<li>Update the build status badge by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1540\">stretchr/testify#1540</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/bb548d0473d4e1c9b7bbfd6602c7bf12f7a84dd2\"><code>bb548d0</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1552\">#1552</a>\r\nfrom stretchr/dependabot/go_modules/github.com/stret...</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/814075f391adffd2bf2b5110a74c51827ba132c4\"><code>814075f</code></a>\r\nbuild(deps): bump github.com/stretchr/objx from 0.5.1 to 0.5.2</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/e0456122451b1839c8d58d32df6364e4d0f0a709\"><code>e045612</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1339\">#1339</a>\r\nfrom bogdandrutu/uintptr</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/5b6926d686d412518f50e888b9ae9b938355e011\"><code>5b6926d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1385\">#1385</a>\r\nfrom hslatman/not-implements</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/9f97d67703eff02136d487e6c907e76fdea31a8b\"><code>9f97d67</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1550\">#1550</a>\r\nfrom stretchr/release-notes</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/bcb0d3fe49ff300fb78288cc144bc61a881f58ec\"><code>bcb0d3f</code></a>\r\nInclude the auto-release notes in releases</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/fb770f8238261aa22f8e0c56f18168ccb90f4a09\"><code>fb770f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1247\">#1247</a>\r\nfrom ccoVeille/typos</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/85d8bb6eea715dcbbb68f7c87b50e1956e20f892\"><code>85d8bb6</code></a>\r\nfix typos in comments, tests and github templates</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/e2741fa4e9bf2fdfe3ed48d976a7eeebe76c5009\"><code>e2741fa</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1548\">#1548</a>\r\nfrom arjunmahishi/msgAndArgs</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/6e59f20c0d3883d2bdc589a9e48374ea30601851\"><code>6e59f20</code></a>\r\nhttp_assertions: assert that the msgAndArgs actually works in tests</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/stretchr/testify/compare/v1.8.4...v1.9.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/stretchr/testify&package-manager=go_modules&previous-version=1.8.4&new-version=1.9.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T11:11:22-05:00",
          "tree_id": "c4dede5619f23322e5ca83bcb6bcd50f6e91a772",
          "url": "https://github.com/runfinch/finch/commit/9f0953d260c806b4b243472ddce14284b2051a3e"
        },
        "date": 1709571671489,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 44876179946,
            "unit": "ns/op\t         0.3587 %cpu_avg/op\t        33.33 %cpu_peak/op\t        44.88 cpu_seconds/op\t1354739712 disk_bytes/op\t 2017352 B/op\t   42645 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44876179946,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3587,
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
            "value": 44.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1354739712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2017352,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42645,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 33548609925,
            "unit": "ns/op\t         0.3298 %cpu_avg/op\t        35.71 %cpu_peak/op\t        33.55 cpu_seconds/op\t  16809984 disk_bytes/op\t 1494736 B/op\t   31761 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 33548609925,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3298,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 33.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16809984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1494736,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 31761,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 535485630,
            "unit": "ns/op\t         0.7910 %cpu_avg/op\t        15.38 %cpu_peak/op\t         0.5354 cpu_seconds/op\t    110592 disk_bytes/op\t   34500 B/op\t     562 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 535485630,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.791,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.38,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5354,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 110592,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 34500,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 562,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          }
        ]
      }
    ]
  }
}