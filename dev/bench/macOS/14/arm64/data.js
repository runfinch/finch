window.BENCHMARK_DATA = {
  "lastUpdate": 1707949911807,
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
        "date": 1701972787355,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63503717792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8626,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 63.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1267236864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2829688,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 59839,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24111476583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6812,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 34320384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22887,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 248199075,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.292,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.67,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2481,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21532,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 279,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1701991393892,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32702513375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9622,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 71.43,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 956637184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1461208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30985,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24152926125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.186,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94330880,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22942,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 247542383,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.379,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.5,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2475,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3276,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21539,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 280,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1701998569720,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33753175291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5823,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1160425472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1506408,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32008,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24195523834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7283,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 138543104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081000,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22986,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 258675010,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.14,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2586,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22020,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1702080895947,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33503488500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9217,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1250029568,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1494472,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31755,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24063255042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.035,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 99651584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22841,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251407614,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.241,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.37,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2514,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21598,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1702323990120,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34744438583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.862,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1099976704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1547912,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32958,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24634576958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.026,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.63,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 239210496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1099520,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23402,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 253302594,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.832,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.95,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2533,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21604,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1702575856862,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32556049833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4945,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.56,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1167482880,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1456752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30873,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24542226417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6766,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 78675968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1096064,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23306,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260908475,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.222,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.44,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2609,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21830,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 291,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1702576558527,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35624570542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4076,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1167388672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1582928,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33753,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24603302583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.661,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 259604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1096496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23348,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251944208,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.645,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.58,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2519,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21722,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1702576586977,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35002197041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5697,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1284370432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1557696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33152,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 252167312,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7705,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.66,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2521,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21898,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1702586055975,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33791764125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9031,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1164005376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1508680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32060,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24003988917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.229,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 157319168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071848,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22795,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 241077567,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.317,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.24,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.241,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21035,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 273,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1703187092949,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34615417459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4964,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1223364608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1541024,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32795,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24162501541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7369,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33681408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22953,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 245990417,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7852,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2459,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3276,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21294,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 277,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1704306934703,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35789458917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5207,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1414963200,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1588640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33876,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24502213167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7469,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33460224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1092976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23253,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260087334,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.989,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.15,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.26,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21774,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 287,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1704903774179,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32593988709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5539,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1180200960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1457760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30910,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25132799375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5839,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 90345472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1117640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23822,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 243725116,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.658,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.67,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2437,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21225,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 275,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1704923249888,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34774595708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9774,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1233928192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1546656,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32932,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24132541584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.144,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94429184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1077696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22928,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 239744667,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7913,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.25,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2397,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21193,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 272,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1704999108784,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32551502417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5423,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1110888448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1455568,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30854,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24095099042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6469,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.09,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 190865408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075960,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22860,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251470312,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.977,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.96,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2514,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21510,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1705006943115,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38231193750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9183,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 38.23,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1162293248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1732512,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36229,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24048292375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.048,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33792000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1073120,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22811,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257836292,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.887,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 24.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2578,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22010,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 289,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1705010073876,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35774126250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9359,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 70,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1219858432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1590528,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33908,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24132908542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.122,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 58.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33488896,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1075960,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22895,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 239230475,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.396,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.5,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2392,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21136,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 271,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705010255620,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32696430542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9302,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.7,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1128161280,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1463168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31033,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24263350750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.248,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 58654720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1082624,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23028,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 241975450,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.04,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.07,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2419,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21284,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 273,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705010434943,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32332854083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.021,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1297747968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1448272,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30694,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24284091583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.074,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 54894592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1083016,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23025,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 252770850,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.96,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.46,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2527,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21728,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705015740402,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 39545201208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.6509,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 39.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 830312448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1787672,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 37457,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24114241292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6427,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 36638720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076144,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22879,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 250606492,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7193,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.49,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2505,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21643,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705086503150,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37284210958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5296,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1142194176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1694688,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35356,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24142871250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6626,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33497088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079360,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22941,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251753688,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.625,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.83,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2517,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1024,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21786,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1705092585415,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37934759916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.007,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1203789824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1720840,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35940,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24023729500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.1,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16797696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1073136,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22812,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 266741542,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.977,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.51,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2667,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22330,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 298,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1705426070783,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36169898958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.468,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1361764352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1645896,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34245,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24139712459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6713,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125833216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1080024,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22943,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 262124942,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.623,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.24,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2621,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22088,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705426128530,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33036070750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5095,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1138266112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1476872,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31348,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24173625500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6805,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 57851904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079888,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22942,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 253816771,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.311,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2538,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3670016,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21776,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1705622920139,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35954265083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8333,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1120280576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1598792,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34094,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25173067875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.117,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 278839296,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1121368,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23901,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251771742,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.191,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.39,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2517,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21475,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1705936912896,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34246286833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.7239,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1124954112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1527536,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32471,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25173413709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.833,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 25.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 140398592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1121424,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23895,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 272849584,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.257,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.83,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2728,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22674,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 304,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706546778937,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34802290416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4934,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1236979712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1549040,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32977,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24102179959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5587,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 136134656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076360,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22876,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257528458,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.789,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2575,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22014,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 289,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706547510069,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 39875362292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5228,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 39.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1301446656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1801128,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 37770,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24223509291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5633,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 109060096,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081816,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23001,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 256388240,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.004,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.93,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2563,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21782,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 287,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706635453349,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37598087750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5715,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1443590144,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1708704,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35638,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24164966625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6533,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33501184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1080168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22953,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 267533812,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.197,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.15,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2675,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22330,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 298,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706647722154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34754589334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9416,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 62.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1304211456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1549112,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32973,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24061145625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.063,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125767680,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1074856,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22859,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251365760,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.955,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.52,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2513,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 12288,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21766,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706651076205,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36112165584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8882,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1245167616,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1646320,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34252,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24172539792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9929,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 109191168,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081120,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22979,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257461992,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.15,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.08,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2574,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22067,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 288,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1706651263508,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37002545416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8429,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1243750400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1682712,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35075,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24114750375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.124,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 62.5,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125853696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1077184,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22909,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251663658,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 3.299,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.98,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2516,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21568,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
          "id": "f677e2e03c7ee94e18ea990c1723f41bac660698",
          "message": "fix: temporarily switch to our own nerdctl-full bundle with patched runc and buildkit (#783)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Temporarily deviate from nerdctl's default nerdctl-full bundle in\r\norder to patch runc and buildkit (for more info\r\n[see](https://snyk.io/blog/leaky-vessels-docker-runc-container-breakout-vulnerabilities/))\r\n\r\n*Testing done:*\r\n- Verified new versions locally\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-01-31T18:43:03-05:00",
          "tree_id": "30ecc3b558e9b7cf8063d8d88b593cc19a5b4c8b",
          "url": "https://github.com/runfinch/finch/commit/f677e2e03c7ee94e18ea990c1723f41bac660698"
        },
        "date": 1706744767378,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36730596000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9503,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.73,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1254318080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1672976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34849,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24188797708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.066,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.19,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 29474816,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1080280,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22969,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 256472532,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.647,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.13,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2564,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21990,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 288,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706744909897,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36999549125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9679,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1200300032,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1682168,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35065,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24334723583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.01,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 81588224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1086728,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23124,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257903258,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.571,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.6,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2579,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4915,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21982,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1706746198256,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36980708208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.026,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.98,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1261387776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1679912,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35031,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24172413125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9771,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 136228864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1078800,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22934,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 265487883,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.627,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 25.89,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2654,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 9830,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22297,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 296,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1706812990340,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37332449458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5178,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 70,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1207496704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1696480,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35388,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20432221750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3858,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17313792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 922304,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19389,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 256392219,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7971,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.72,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2563,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21982,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 288,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1706814136833,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33482093875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4242,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.48,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1222553600,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1494416,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31731,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24242990291,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5315,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 167710720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079864,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22968,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 249660483,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4183,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 9.419,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2496,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2457,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21800,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1707524322580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33053760792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8641,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 77.78,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1022693376,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1476096,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31320,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26345583125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.668,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 26.35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 100352000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1165752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24907,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 262467750,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9798,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.59,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2624,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1024,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21780,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 290,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707760052176,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34353236792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4231,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1213820928,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1531264,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32560,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 22822204208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5655,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 22.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 56569856,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1020088,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 21594,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251314084,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5285,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.88,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2513,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21482,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 282,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707760142420,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35782889958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4959,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1154097152,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1589160,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33899,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24262224083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5734,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 46.15,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 43962368,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22986,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 256310615,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5395,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 6.25,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2563,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21670,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 287,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707760237315,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33353206666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4832,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1146630144,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1488728,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31619,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24135064417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4932,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 44064768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1074560,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22853,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251924062,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8767,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.91,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2519,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21666,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707760334985,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36215022000,
            "unit": "ns/op\t         0.4380 %cpu_avg/op\t        42.86 %cpu_peak/op\t        36.21 cpu_seconds/op\t1242583040 disk_bytes/op\t 1649232 B/op\t   34327 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36215022000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.438,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 42.86,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1242583040,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1649232,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34327,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24252336209,
            "unit": "ns/op\t         0.4481 %cpu_avg/op\t        45.45 %cpu_peak/op\t        24.25 cpu_seconds/op\t  51347456 disk_bytes/op\t 1078944 B/op\t   22935 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24252336209,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4481,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 51347456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1078944,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22935,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 265426167,
            "unit": "ns/op\t         1.582 %cpu_avg/op\t        12.50 %cpu_peak/op\t         0.2654 cpu_seconds/op\t         0 disk_bytes/op\t   22004 B/op\t     295 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 265426167,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.582,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2654,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22004,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707760419384,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 33472368292,
            "unit": "ns/op\t         0.5282 %cpu_avg/op\t        44.44 %cpu_peak/op\t        33.47 cpu_seconds/op\t1262604288 disk_bytes/op\t 1492672 B/op\t   31704 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33472368292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5282,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1262604288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1492672,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31704,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20374154709,
            "unit": "ns/op\t         0.5207 %cpu_avg/op\t        44.44 %cpu_peak/op\t        20.37 cpu_seconds/op\t  77619200 disk_bytes/op\t  919920 B/op\t   19332 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20374154709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5207,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 77619200,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 919920,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19332,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 254194083,
            "unit": "ns/op\t         1.117 %cpu_avg/op\t        16.97 %cpu_peak/op\t         0.2541 cpu_seconds/op\t      4096 disk_bytes/op\t   21682 B/op\t     285 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 254194083,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.117,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.97,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2541,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21682,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707761316980,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 32936003792,
            "unit": "ns/op\t         0.3797 %cpu_avg/op\t        33.33 %cpu_peak/op\t        32.94 cpu_seconds/op\t1224212480 disk_bytes/op\t 1470616 B/op\t   31210 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32936003792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3797,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1224212480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1470616,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31210,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 23042835208,
            "unit": "ns/op\t         0.4396 %cpu_avg/op\t        40.00 %cpu_peak/op\t        23.04 cpu_seconds/op\t  58667008 disk_bytes/op\t 1029632 B/op\t   21826 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23042835208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4396,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 23.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 58667008,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1029632,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 21826,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 252028433,
            "unit": "ns/op\t         1.556 %cpu_avg/op\t        11.71 %cpu_peak/op\t         0.2520 cpu_seconds/op\t      6553 disk_bytes/op\t   21478 B/op\t     283 allocs/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 252028433,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.556,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.71,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.252,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 6553,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21478,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 283,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1707761502595,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 35813303458,
            "unit": "ns/op\t         0.5408 %cpu_avg/op\t        55.56 %cpu_peak/op\t        35.81 cpu_seconds/op\t1365856256 disk_bytes/op\t 1589256 B/op\t   33901 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35813303458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5408,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 35.81,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1365856256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1589256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33901,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 22773200041,
            "unit": "ns/op\t         0.5400 %cpu_avg/op\t        37.50 %cpu_peak/op\t        22.77 cpu_seconds/op\t  55738368 disk_bytes/op\t 1017808 B/op\t   21566 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 22773200041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.54,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 22.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 55738368,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1017808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 21566,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 251174708,
            "unit": "ns/op\t         1.693 %cpu_avg/op\t        12.50 %cpu_peak/op\t         0.2511 cpu_seconds/op\t      2048 disk_bytes/op\t   21790 B/op\t     284 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251174708,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.693,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2511,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 2048,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21790,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 284,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707776283062,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37221389041,
            "unit": "ns/op\t         1.332 %cpu_avg/op\t        80.00 %cpu_peak/op\t        37.22 cpu_seconds/op\t1266032640 disk_bytes/op\t 1689256 B/op\t   35222 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37221389041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 1.332,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1266032640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1689256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35222,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20934008500,
            "unit": "ns/op\t         0.7139 %cpu_avg/op\t        40.00 %cpu_peak/op\t        20.93 cpu_seconds/op\t -29573120 disk_bytes/op\t  944704 B/op\t   19869 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20934008500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7139,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -29573120,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 944704,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19869,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 254113271,
            "unit": "ns/op\t         1.463 %cpu_avg/op\t        13.75 %cpu_peak/op\t         0.2541 cpu_seconds/op\t         0 disk_bytes/op\t   22184 B/op\t     285 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 254113271,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.463,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2541,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22184,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 285,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707865958890,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36800826000,
            "unit": "ns/op\t         0.8463 %cpu_avg/op\t        58.33 %cpu_peak/op\t        36.80 cpu_seconds/op\t1246384128 disk_bytes/op\t 1671528 B/op\t   34831 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36800826000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8463,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1246384128,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1671528,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34831,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 19992199542,
            "unit": "ns/op\t         1.033 %cpu_avg/op\t        50.00 %cpu_peak/op\t        19.99 cpu_seconds/op\t  17244160 disk_bytes/op\t  904664 B/op\t   18971 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 19992199542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.033,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 19.99,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17244160,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 904664,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 18971,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 246665550,
            "unit": "ns/op\t         1.885 %cpu_avg/op\t        18.89 %cpu_peak/op\t         0.2466 cpu_seconds/op\t      3276 disk_bytes/op\t   22225 B/op\t     278 allocs/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 246665550,
            "unit": "ns/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.885,
            "unit": "%cpu_avg/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.89,
            "unit": "%cpu_peak/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2466,
            "unit": "cpu_seconds/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3276,
            "unit": "disk_bytes/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22225,
            "unit": "B/op",
            "extra": "5 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 278,
            "unit": "allocs/op",
            "extra": "5 times\n8 procs"
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
        "date": 1707868190348,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36052119041,
            "unit": "ns/op\t         0.3990 %cpu_avg/op\t        37.50 %cpu_peak/op\t        36.05 cpu_seconds/op\t1173594112 disk_bytes/op\t 1603208 B/op\t   34185 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36052119041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.399,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1173594112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1603208,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34185,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24244404625,
            "unit": "ns/op\t         0.4575 %cpu_avg/op\t        40.00 %cpu_peak/op\t        24.24 cpu_seconds/op\t  37781504 disk_bytes/op\t 1079696 B/op\t   22951 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24244404625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4575,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 37781504,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22951,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 276628948,
            "unit": "ns/op\t         0.5695 %cpu_avg/op\t        11.64 %cpu_peak/op\t         0.2766 cpu_seconds/op\t      8192 disk_bytes/op\t   23436 B/op\t     307 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 276628948,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5695,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.64,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2766,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 8192,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 23436,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 307,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707932909959,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36197266459,
            "unit": "ns/op\t         0.5116 %cpu_avg/op\t        50.00 %cpu_peak/op\t        36.20 cpu_seconds/op\t1213620224 disk_bytes/op\t 1649416 B/op\t   34307 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36197266459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5116,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 36.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1213620224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1649416,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34307,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20394318417,
            "unit": "ns/op\t         0.5908 %cpu_avg/op\t        37.50 %cpu_peak/op\t        20.39 cpu_seconds/op\t  26710016 disk_bytes/op\t  920936 B/op\t   19338 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20394318417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5908,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 26710016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 920936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19338,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 263378906,
            "unit": "ns/op\t         1.682 %cpu_avg/op\t        13.75 %cpu_peak/op\t         0.2633 cpu_seconds/op\t      4096 disk_bytes/op\t   22702 B/op\t     293 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 263378906,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.682,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.75,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2633,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22702,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 293,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707933622385,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 32262699958,
            "unit": "ns/op\t         0.5367 %cpu_avg/op\t        44.44 %cpu_peak/op\t        32.26 cpu_seconds/op\t1216856064 disk_bytes/op\t 1444216 B/op\t   30595 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32262699958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5367,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1216856064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1444216,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30595,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26677023791,
            "unit": "ns/op\t         0.5103 %cpu_avg/op\t        50.00 %cpu_peak/op\t        26.68 cpu_seconds/op\t 171900928 disk_bytes/op\t 1180384 B/op\t   25231 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26677023791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5103,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 26.68,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 171900928,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1180384,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25231,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 266267323,
            "unit": "ns/op\t         1.205 %cpu_avg/op\t        14.58 %cpu_peak/op\t         0.2662 cpu_seconds/op\t      8192 disk_bytes/op\t   23056 B/op\t     297 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 266267323,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.205,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.58,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2662,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 8192,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 23056,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 297,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707944275050,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 33363632334,
            "unit": "ns/op\t         0.9890 %cpu_avg/op\t        55.56 %cpu_peak/op\t        33.36 cpu_seconds/op\t1093058560 disk_bytes/op\t 1490800 B/op\t   31640 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33363632334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.989,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.36,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1093058560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1490800,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31640,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 22834490625,
            "unit": "ns/op\t         0.8950 %cpu_avg/op\t        50.00 %cpu_peak/op\t        22.83 cpu_seconds/op\t 156614656 disk_bytes/op\t 1021488 B/op\t   21627 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 22834490625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.895,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 22.83,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 156614656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1021488,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 21627,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 254051916,
            "unit": "ns/op\t         1.978 %cpu_avg/op\t        20.02 %cpu_peak/op\t         0.2540 cpu_seconds/op\t      4096 disk_bytes/op\t   22684 B/op\t     288 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 254051916,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.978,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.02,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.254,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4096,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22684,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 288,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
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
        "date": 1707949910774,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 34742849833,
            "unit": "ns/op\t         0.9044 %cpu_avg/op\t        88.89 %cpu_peak/op\t        34.74 cpu_seconds/op\t1143721984 disk_bytes/op\t 1547496 B/op\t   32924 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34742849833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9044,
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
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 34.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1143721984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1547496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32924,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24162771750,
            "unit": "ns/op\t         0.9679 %cpu_avg/op\t       100.0 %cpu_peak/op\t        24.16 cpu_seconds/op\t 149131264 disk_bytes/op\t 1076968 B/op\t   22882 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24162771750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9679,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 100,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.16,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 149131264,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1076968,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22882,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 264788406,
            "unit": "ns/op\t         2.896 %cpu_avg/op\t        20.20 %cpu_peak/op\t         0.2647 cpu_seconds/op\t      8192 disk_bytes/op\t   22852 B/op\t     295 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 264788406,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.896,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.2,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2647,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 8192,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22852,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 295,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      }
    ]
  }
}