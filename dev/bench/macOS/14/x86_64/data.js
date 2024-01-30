window.BENCHMARK_DATA = {
  "lastUpdate": 1706647754338,
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
      }
    ]
  }
}