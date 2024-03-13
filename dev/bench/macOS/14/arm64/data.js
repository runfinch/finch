window.BENCHMARK_DATA = {
  "lastUpdate": 1710356133076,
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
        "date": 1708106461831,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36796843750,
            "unit": "ns/op\t         0.4092 %cpu_avg/op\t        45.45 %cpu_peak/op\t        36.80 cpu_seconds/op\t1212719104 disk_bytes/op\t 1671800 B/op\t   34841 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36796843750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4092,
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
            "value": 36.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1212719104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1671800,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34841,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24275397459,
            "unit": "ns/op\t         0.4256 %cpu_avg/op\t        44.44 %cpu_peak/op\t        24.28 cpu_seconds/op\t 135966720 disk_bytes/op\t 1080392 B/op\t   22984 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24275397459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4256,
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
            "value": 24.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 135966720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1080392,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22984,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 280127417,
            "unit": "ns/op\t         2.286 %cpu_avg/op\t        17.71 %cpu_peak/op\t         0.2801 cpu_seconds/op\t      4096 disk_bytes/op\t   22702 B/op\t     308 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 280127417,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.286,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.71,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2801,
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
            "value": 308,
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
          "id": "0bf9148a6ce88dde413679cc9a3702a5d398d544",
          "message": "build(deps): Bump submodules and dependencies (#805)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\n---------\r\n\r\nSigned-off-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>\r\nCo-authored-by: ginglis13 <43075615+ginglis13@users.noreply.github.com>\r\nCo-authored-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-19T11:31:00-08:00",
          "tree_id": "43a5971e13759d848c4b710c4e6459434c5984d0",
          "url": "https://github.com/runfinch/finch/commit/0bf9148a6ce88dde413679cc9a3702a5d398d544"
        },
        "date": 1708371309182,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38129821542,
            "unit": "ns/op\t         0.4513 %cpu_avg/op\t        37.50 %cpu_peak/op\t        38.13 cpu_seconds/op\t1375858688 disk_bytes/op\t 1728344 B/op\t   36109 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38129821542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4513,
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
            "value": 38.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1375858688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1728344,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36109,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24282686333,
            "unit": "ns/op\t         0.4195 %cpu_avg/op\t        36.36 %cpu_peak/op\t        24.28 cpu_seconds/op\t  68718592 disk_bytes/op\t 1081096 B/op\t   22991 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24282686333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4195,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 68718592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081096,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22991,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 259787365,
            "unit": "ns/op\t         0.5589 %cpu_avg/op\t        10.29 %cpu_peak/op\t         0.2597 cpu_seconds/op\t      4096 disk_bytes/op\t   21940 B/op\t     290 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 259787365,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5589,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.29,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2597,
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
            "value": 21940,
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
        "date": 1708371945215,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 33293525083,
            "unit": "ns/op\t         0.5635 %cpu_avg/op\t        66.67 %cpu_peak/op\t        33.29 cpu_seconds/op\t1182720000 disk_bytes/op\t 1487048 B/op\t   31568 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33293525083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5635,
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
            "value": 33.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1182720000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1487048,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31568,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27612369208,
            "unit": "ns/op\t         0.5007 %cpu_avg/op\t        50.00 %cpu_peak/op\t        27.61 cpu_seconds/op\t 167948288 disk_bytes/op\t 1245928 B/op\t   26107 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27612369208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5007,
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
            "value": 27.61,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 167948288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1245928,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26107,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 268569000,
            "unit": "ns/op\t         1.814 %cpu_avg/op\t        14.93 %cpu_peak/op\t         0.2685 cpu_seconds/op\t         0 disk_bytes/op\t   22342 B/op\t     298 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 268569000,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.814,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.93,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2685,
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
            "value": 22342,
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
        "date": 1708371957378,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36722022292,
            "unit": "ns/op\t         0.4123 %cpu_avg/op\t        33.33 %cpu_peak/op\t        36.72 cpu_seconds/op\t1186648064 disk_bytes/op\t 1670480 B/op\t   34813 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36722022292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4123,
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
            "value": 36.72,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1186648064,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1670480,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34813,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 23762232042,
            "unit": "ns/op\t         0.4843 %cpu_avg/op\t        50.00 %cpu_peak/op\t        23.76 cpu_seconds/op\t 137736192 disk_bytes/op\t 1059792 B/op\t   22507 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23762232042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4843,
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
            "value": 23.76,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 137736192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1059792,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22507,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 263252177,
            "unit": "ns/op\t         1.380 %cpu_avg/op\t        13.07 %cpu_peak/op\t         0.2632 cpu_seconds/op\t         0 disk_bytes/op\t   22002 B/op\t     293 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 263252177,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.38,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.07,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2632,
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
            "value": 22002,
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
        "date": 1708372166677,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37453132875,
            "unit": "ns/op\t         0.4824 %cpu_avg/op\t        45.45 %cpu_peak/op\t        37.45 cpu_seconds/op\t1113894912 disk_bytes/op\t 1699808 B/op\t   35476 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37453132875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4824,
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
            "value": 37.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1113894912,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1699808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35476,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24372930125,
            "unit": "ns/op\t         0.3899 %cpu_avg/op\t        40.00 %cpu_peak/op\t        24.37 cpu_seconds/op\t  16805888 disk_bytes/op\t 1085576 B/op\t   23092 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24372930125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3899,
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
            "value": 24.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16805888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1085576,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23092,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 266248646,
            "unit": "ns/op\t         1.529 %cpu_avg/op\t        17.71 %cpu_peak/op\t         0.2662 cpu_seconds/op\t   2621440 disk_bytes/op\t   22238 B/op\t     297 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 266248646,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.529,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.71,
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
            "value": 2621440,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22238,
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
          "id": "55f6d929949c1f776a63b93ea4a4446cc821e74a",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.12 to 3.24.1 (#787)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.12 to 3.24.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.24.1</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>Compatibility Notice</h2>\r\n<p>We don't think <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1585\">#1585</a>\r\nwill affect compatibility about <code>PlatformVersion</code> in\r\n<code>host.Info()</code>, but maybe it will.</p>\r\n<h2>What's Changed</h2>\r\n<h3>disk</h3>\r\n<ul>\r\n<li>[linux][disk]: fix Rdev cast by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1575\">shirou/gopsutil#1575</a></li>\r\n</ul>\r\n<h3>host</h3>\r\n<ul>\r\n<li>[host]: add EnableBootTimeCache function by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1579\">shirou/gopsutil#1579</a></li>\r\n<li>ensure host platform are files and have contents by <a\r\nhref=\"https://github.com/brycekahle\"><code>@​brycekahle</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1584\">shirou/gopsutil#1584</a></li>\r\n</ul>\r\n<h3>process</h3>\r\n<ul>\r\n<li>Windows, read all PIDs if there are more than 1024 PIDs. by <a\r\nhref=\"https://github.com/jnewmano\"><code>@​jnewmano</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1580\">shirou/gopsutil#1580</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>use VERSION_ID from os-release by <a\r\nhref=\"https://github.com/brycekahle\"><code>@​brycekahle</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1585\">shirou/gopsutil#1585</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/jnewmano\"><code>@​jnewmano</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1580\">shirou/gopsutil#1580</a></li>\r\n<li><a\r\nhref=\"https://github.com/brycekahle\"><code>@​brycekahle</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1584\">shirou/gopsutil#1584</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.12...v3.24.1\">https://github.com/shirou/gopsutil/compare/v3.23.12...v3.24.1</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/65b5fa32b9430e1969b688f837bf7467f2a03fac\"><code>65b5fa3</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1587\">#1587</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/22413975af47bca4d01c9db47b160857a12db23c\"><code>2241397</code></a>\r\nchore(deps): bump actions/upload-artifact from 4.2.0 to 4.3.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9de1a429b9896686721a09bc8ecc2e2c5ce1df85\"><code>9de1a42</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1585\">#1585</a>\r\nfrom DataDog/bryce.kahle/os-release-version-id</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9b6f82813aee254a1f685d96db419637816790e2\"><code>9b6f828</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1584\">#1584</a>\r\nfrom DataDog/bryce.kahle/host-platform</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/dc01f63e855ac55459b6155164bdb3f81fc9e5f3\"><code>dc01f63</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1583\">#1583</a>\r\nfrom shirou/dependabot/github_actions/actions/cache-...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/e912ebde7a433da3956ccd6056cc8df669b26763\"><code>e912ebd</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1580\">#1580</a>\r\nfrom jnewmano/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/b86b36a290ebdc3fc132874f161914277250209e\"><code>b86b36a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1586\">#1586</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/61758d5e3cca7cad12a6f9e567c331c9ede0f72a\"><code>61758d5</code></a>\r\nchore(deps): bump actions/upload-artifact from 4.1.0 to 4.2.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d753f78612a0af2d3359375e71f70f337023471a\"><code>d753f78</code></a>\r\nuse VERSION_ID from os-release</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/b0d976c49b50f2d73621222c1adbf7da3563528f\"><code>b0d976c</code></a>\r\nensure host platform are files and have contents</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.12...v3.24.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.12&new-version=3.24.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T17:39:21-05:00",
          "tree_id": "b74585ee0e12bfd85ce91d009af856c79f769ea4",
          "url": "https://github.com/runfinch/finch/commit/55f6d929949c1f776a63b93ea4a4446cc821e74a"
        },
        "date": 1708382571358,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 35751171042,
            "unit": "ns/op\t         0.8921 %cpu_avg/op\t        70.00 %cpu_peak/op\t        35.75 cpu_seconds/op\t1190313984 disk_bytes/op\t 1587080 B/op\t   33852 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35751171042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8921,
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
            "value": 35.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1190313984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1587080,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33852,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27543282959,
            "unit": "ns/op\t         0.9668 %cpu_avg/op\t        71.43 %cpu_peak/op\t        27.54 cpu_seconds/op\t 142610432 disk_bytes/op\t 1241592 B/op\t   26023 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27543282959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9668,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.54,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 142610432,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1241592,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 26023,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 258680219,
            "unit": "ns/op\t         3.386 %cpu_avg/op\t        22.22 %cpu_peak/op\t         0.2586 cpu_seconds/op\t     38912 disk_bytes/op\t   21788 B/op\t     290 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 258680219,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 3.386,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.22,
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
            "value": 38912,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21788,
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
          "id": "2fefca5bafe5814ac1279d521f188f185e0e246e",
          "message": "ci(deps): Bump golangci/golangci-lint-action from 3.7.0 to 4.0.0 (#808)\n\nBumps\r\n[golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action)\r\nfrom 3.7.0 to 4.0.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golangci/golangci-lint-action/releases\">golangci/golangci-lint-action's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.0.0</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>Documentation</h3>\r\n<ul>\r\n<li>docs: update examples by <a\r\nhref=\"https://github.com/KunalSin9h\"><code>@​KunalSin9h</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/826\">golangci/golangci-lint-action#826</a></li>\r\n<li>docs: update section about GitHub Annotations by <a\r\nhref=\"https://github.com/JustinDFuller\"><code>@​JustinDFuller</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/931\">golangci/golangci-lint-action#931</a></li>\r\n</ul>\r\n<h3>Dependencies</h3>\r\n<ul>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.3.0 to 6.4.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/829\">golangci/golangci-lint-action#829</a></li>\r\n<li>build(deps-dev): bump eslint-plugin-import from 2.28.0 to 2.28.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/830\">golangci/golangci-lint-action#830</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.0 to 20.5.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/827\">golangci/golangci-lint-action#827</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.3.0 to 6.4.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/831\">golangci/golangci-lint-action#831</a></li>\r\n<li>build(deps-dev): bump prettier from 3.0.1 to 3.0.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/828\">golangci/golangci-lint-action#828</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.1 to 20.5.7 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/833\">golangci/golangci-lint-action#833</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.4.0 to 6.4.1 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/834\">golangci/golangci-lint-action#834</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.4.0 to 6.4.1 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/835\">golangci/golangci-lint-action#835</a></li>\r\n<li>build(deps-dev): bump eslint from 8.47.0 to 8.48.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/837\">golangci/golangci-lint-action#837</a></li>\r\n<li>build(deps-dev): bump typescript from 5.1.6 to 5.2.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/836\">golangci/golangci-lint-action#836</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.0 to 7.5.1 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/838\">golangci/golangci-lint-action#838</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.4.1 to 6.5.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/839\">golangci/golangci-lint-action#839</a></li>\r\n<li>build(deps-dev): bump prettier from 3.0.2 to 3.0.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/842\">golangci/golangci-lint-action#842</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.4.1 to 6.5.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/840\">golangci/golangci-lint-action#840</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.7 to 20.5.9 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/841\">golangci/golangci-lint-action#841</a></li>\r\n<li>chore: bump to use node20 runtime, actions/checkout to v4 by <a\r\nhref=\"https://github.com/chenrui333\"><code>@​chenrui333</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/843\">golangci/golangci-lint-action#843</a></li>\r\n<li>build(deps): bump actions/checkout from 3 to 4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/845\">golangci/golangci-lint-action#845</a></li>\r\n<li>build(deps-dev): bump eslint from 8.48.0 to 8.49.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/846\">golangci/golangci-lint-action#846</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.5.9 to 20.6.0 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/847\">golangci/golangci-lint-action#847</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.5.0 to 6.6.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/848\">golangci/golangci-lint-action#848</a></li>\r\n<li>build(deps-dev): bump <code>@​vercel/ncc</code> from 0.36.1 to\r\n0.38.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/850\">golangci/golangci-lint-action#850</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.5.0 to 6.6.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/849\">golangci/golangci-lint-action#849</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.1 to 7.5.2 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/853\">golangci/golangci-lint-action#853</a></li>\r\n<li>build(deps): bump <code>@​types/tmp</code> from 0.2.3 to 0.2.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/854\">golangci/golangci-lint-action#854</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.6.0 to 6.7.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/855\">golangci/golangci-lint-action#855</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.0 to 20.6.2 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/857\">golangci/golangci-lint-action#857</a></li>\r\n<li>build(deps): bump <code>@​actions/core</code> from 1.10.0 to 1.10.1\r\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/856\">golangci/golangci-lint-action#856</a></li>\r\n<li>build(deps-dev): bump eslint from 8.49.0 to 8.50.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/859\">golangci/golangci-lint-action#859</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.2 to 20.6.5 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/860\">golangci/golangci-lint-action#860</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.6.0 to 6.7.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/861\">golangci/golangci-lint-action#861</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.0 to 6.7.2 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/862\">golangci/golangci-lint-action#862</a></li>\r\n<li>build(deps): bump <code>@​types/semver</code> from 7.5.2 to 7.5.3 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/864\">golangci/golangci-lint-action#864</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.2 to 6.7.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/865\">golangci/golangci-lint-action#865</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.6.5 to 20.8.0 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/867\">golangci/golangci-lint-action#867</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.2 to 6.7.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/866\">golangci/golangci-lint-action#866</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.3 to 6.7.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/868\">golangci/golangci-lint-action#868</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.8.0 to 20.8.3 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/869\">golangci/golangci-lint-action#869</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.7.3 to 6.7.4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/870\">golangci/golangci-lint-action#870</a></li>\r\n<li>build(deps-dev): bump eslint from 8.50.0 to 8.51.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/871\">golangci/golangci-lint-action#871</a></li>\r\n<li>build(deps): bump <code>@​actions/http-client</code> from 2.1.1 to\r\n2.2.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/872\">golangci/golangci-lint-action#872</a></li>\r\n<li>build(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.7.4 to 6.7.5 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/874\">golangci/golangci-lint-action#874</a></li>\r\n<li>build(deps): bump <code>@​types/node</code> from 20.8.3 to 20.8.6 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/pull/875\">golangci/golangci-lint-action#875</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/3cfe3a4abbb849e10058ce4af15d205b6da42804\"><code>3cfe3a4</code></a>\r\nbuild(deps): bump <code>@​actions/cache</code> from 3.2.3 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/963\">#963</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/cbc59cf0d18a8aa6b4806cab8d5a6ad3622f57fe\"><code>cbc59cf</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.4 to 3.2.5 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/960\">#960</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/459a04b021b544b77372de9a6e429e0d3c136fac\"><code>459a04b</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.19.1 to 6.20.0 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/e2315b67db0fd76598007338449373a42c572b25\"><code>e2315b6</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.19.1 to 6.20.0 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/961\">#961</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/d6173a45d0441c7db097b6014862dde0ddc9b579\"><code>d6173a4</code></a>\r\nbuild(deps): bump <code>@​types/node</code> from 20.11.10 to 20.11.16\r\n(<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/962\">#962</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/0e8f5bf773dd8000d6aeb01936f3090976982f33\"><code>0e8f5bf</code></a>\r\nbuild(deps): bump <code>@​types/node</code> from 20.11.5 to 20.11.10 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/958\">#958</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/349d20632dbaed38f0a492cc991152e3d351e854\"><code>349d206</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.19.0 to 6.19.1 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/2221aee28499deb9551e403a0d876df4b0e70067\"><code>2221aee</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/parser</code> from\r\n6.18.1 to 6.19.1 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/954\">#954</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/3b44ae5b24a084588d4051d37ccb95e8a709a9a3\"><code>3b44ae5</code></a>\r\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code>\r\nfrom 6.18.1 to 6.19.0 ...</li>\r\n<li><a\r\nhref=\"https://github.com/golangci/golangci-lint-action/commit/323b871bbc74bdc20959d979cb52c68910b77f37\"><code>323b871</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.2 to 3.2.4 (<a\r\nhref=\"https://redirect.github.com/golangci/golangci-lint-action/issues/950\">#950</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golangci/golangci-lint-action/compare/3a919529898de77ec3da873e3063ca4b10e7f5cc...3cfe3a4abbb849e10058ce4af15d205b6da42804\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golangci/golangci-lint-action&package-manager=github_actions&previous-version=3.7.0&new-version=4.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T18:47:36-05:00",
          "tree_id": "cab881f036b0b8fbcbb2d588258b1ed55c650cd2",
          "url": "https://github.com/runfinch/finch/commit/2fefca5bafe5814ac1279d521f188f185e0e246e"
        },
        "date": 1708386660260,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 35988912167,
            "unit": "ns/op\t         0.7710 %cpu_avg/op\t        44.44 %cpu_peak/op\t        35.99 cpu_seconds/op\t1218613248 disk_bytes/op\t 1597760 B/op\t   34081 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35988912167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.771,
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
            "value": 35.99,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1218613248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1597760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34081,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 23763241500,
            "unit": "ns/op\t         0.7828 %cpu_avg/op\t        50.00 %cpu_peak/op\t        23.76 cpu_seconds/op\t 138326016 disk_bytes/op\t 1061368 B/op\t   22538 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23763241500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.7828,
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
            "value": 23.76,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 138326016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1061368,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22538,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 251107490,
            "unit": "ns/op\t         2.913 %cpu_avg/op\t        18.33 %cpu_peak/op\t         0.2511 cpu_seconds/op\t      8192 disk_bytes/op\t   21618 B/op\t     283 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 251107490,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.913,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.33,
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
            "value": 8192,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21618,
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
          "id": "6ca0f7ff007f88ad37eb02b2c9437042a7350f37",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.29.1 to 0.29.2 (#820)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.29.1 to 0.29.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.29.1...v0.29.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.29.1&new-version=0.29.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-19T19:05:27-05:00",
          "tree_id": "1ab43088104642afe7edcc86312ed59962db168b",
          "url": "https://github.com/runfinch/finch/commit/6ca0f7ff007f88ad37eb02b2c9437042a7350f37"
        },
        "date": 1708387754856,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 35843268125,
            "unit": "ns/op\t         0.8892 %cpu_avg/op\t        60.00 %cpu_peak/op\t        35.84 cpu_seconds/op\t1217732608 disk_bytes/op\t 1591760 B/op\t   33955 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35843268125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8892,
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
            "value": 35.84,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1217732608,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1591760,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33955,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20643627084,
            "unit": "ns/op\t         0.8866 %cpu_avg/op\t        71.43 %cpu_peak/op\t        20.64 cpu_seconds/op\t  15835136 disk_bytes/op\t  931424 B/op\t   19609 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20643627084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.8866,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.64,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 15835136,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 931424,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19609,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 260478270,
            "unit": "ns/op\t         3.434 %cpu_avg/op\t        22.08 %cpu_peak/op\t         0.2604 cpu_seconds/op\t      4096 disk_bytes/op\t   22108 B/op\t     291 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260478270,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 3.434,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.08,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2604,
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
            "value": 22108,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 291,
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
          "id": "ace37eaf48fca613f692e7a08b182d268fc60555",
          "message": "fix(windows-installer): uninstall script behavior (#822)\n\nIssue #, if available:\r\n- After my recent changes to the uninstall script (which were aimed at\r\nmaking sure Lima was not running and the WSL2 instance was stopped), I\r\ntested the new installer, and it still had weird behavior. I noticed\r\nthat the script would exit immediately if the Lima stop command failed,\r\nso I added the `&` separators. After that, I noticed that the WSL\r\ncommands would fail immediately. This was because the commands were\r\nbeing executed as a Local install user, instead of the target user.\r\nChanging `Impersonate` to `yes` should resolve that issue\r\n([docs](https://wixtoolset.org/docs/v3/xsd/wix/customaction/)).\r\n\r\n_Description of changes:_\r\n- Ensure that all commands execute by separating them with & instead of\r\nletting failures stop the script\r\n- Ensure script runs in the user's context by setting `Impersonate` to\r\n`yes`\r\n\r\n*Testing done:*\r\n- Local testing\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-20T13:56:09-05:00",
          "tree_id": "2234b78bc074ae60929e8e07f3b9f4a20344a5a4",
          "url": "https://github.com/runfinch/finch/commit/ace37eaf48fca613f692e7a08b182d268fc60555"
        },
        "date": 1708455588085,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 39003387500,
            "unit": "ns/op\t         0.4078 %cpu_avg/op\t        44.44 %cpu_peak/op\t        39.00 cpu_seconds/op\t1255706624 disk_bytes/op\t 1763768 B/op\t   36923 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 39003387500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4078,
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
            "value": 39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1255706624,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1763768,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36923,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24262860250,
            "unit": "ns/op\t         0.3803 %cpu_avg/op\t        33.33 %cpu_peak/op\t        24.26 cpu_seconds/op\t 148430848 disk_bytes/op\t 1079968 B/op\t   22970 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24262860250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3803,
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
            "value": 24.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 148430848,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079968,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22970,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 268473906,
            "unit": "ns/op\t         0.6255 %cpu_avg/op\t        10.42 %cpu_peak/op\t         0.2684 cpu_seconds/op\t      8192 disk_bytes/op\t   22450 B/op\t     298 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 268473906,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6255,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.42,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2684,
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
            "value": 22450,
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
        "date": 1708463226665,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36061639000,
            "unit": "ns/op\t         0.9304 %cpu_avg/op\t        60.00 %cpu_peak/op\t        36.06 cpu_seconds/op\t1255403520 disk_bytes/op\t 1642648 B/op\t   34189 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36061639000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9304,
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
            "value": 36.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1255403520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1642648,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34189,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24495875875,
            "unit": "ns/op\t         0.8673 %cpu_avg/op\t        66.67 %cpu_peak/op\t        24.50 cpu_seconds/op\t  32800768 disk_bytes/op\t 1089056 B/op\t   23160 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24495875875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.8673,
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
            "value": 24.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 32800768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1089056,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23160,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 280829770,
            "unit": "ns/op\t         0.8371 %cpu_avg/op\t        20.09 %cpu_peak/op\t         0.2808 cpu_seconds/op\t      3072 disk_bytes/op\t   22896 B/op\t     311 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 280829770,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8371,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.09,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2808,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3072,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22896,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 311,
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
          "id": "fccfa1dd5773242039254e067dcde0cd9fd4fe5e",
          "message": "fix(windows-installer): add new cleanup script on install (#824)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n- Add new script that runs upon installation to cleanup any dangling\r\nFinch VM\r\n- This is needed because earlier versions of Finch's Windows installer\r\ndon't clean up properly on uninstall / reinstall\r\n- Even with this change, user's will be prompted to stop limactl on\r\nreinstall if Finch is running. Regardless of which action they choose,\r\nthe install script will cleanup any dangling VMs.\r\n\r\n*Testing done:*\r\n- Tested locally\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-20T17:03:10-05:00",
          "tree_id": "10364c330d12d6c0a9b39774af7df416e5755d2a",
          "url": "https://github.com/runfinch/finch/commit/fccfa1dd5773242039254e067dcde0cd9fd4fe5e"
        },
        "date": 1708467313492,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 33681413625,
            "unit": "ns/op\t         0.8488 %cpu_avg/op\t        50.00 %cpu_peak/op\t        33.68 cpu_seconds/op\t1148731392 disk_bytes/op\t 1504176 B/op\t   31954 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33681413625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8488,
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
            "value": 33.68,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1148731392,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1504176,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31954,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 23512164292,
            "unit": "ns/op\t         0.9031 %cpu_avg/op\t        62.50 %cpu_peak/op\t        23.51 cpu_seconds/op\t 157511680 disk_bytes/op\t 1047664 B/op\t   22234 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23512164292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9031,
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
            "value": 23.51,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 157511680,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1047664,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22234,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 262311458,
            "unit": "ns/op\t         3.342 %cpu_avg/op\t        20.42 %cpu_peak/op\t         0.2623 cpu_seconds/op\t         0 disk_bytes/op\t   22130 B/op\t     294 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 262311458,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 3.342,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.42,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2623,
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
            "value": 22130,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 294,
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
          "id": "0f0c824f23f3057b9dca2a61ef8aabe0eeb73a5b",
          "message": "chore(main): release 1.1.2 (#803)\n\n:robot: I have created a release *beep* *boop*\r\n---\r\n\r\n\r\n## [1.1.2](https://github.com/runfinch/finch/compare/v1.1.1...v1.1.2)\r\n(2024-02-20)\r\n\r\n\r\n### Build System or External Dependencies\r\n\r\n* **deps:** Bump github.com/docker/docker from 25.0.1+incompatible to\r\n25.0.3+incompatible\r\n([#799](https://github.com/runfinch/finch/issues/799))\r\n([d761301](https://github.com/runfinch/finch/commit/d7613012551bd47c26476a993a35856aab91511c))\r\n* **deps:** Bump github.com/goccy/go-yaml from 1.11.2 to 1.11.3\r\n([#780](https://github.com/runfinch/finch/issues/780))\r\n([2e616ff](https://github.com/runfinch/finch/commit/2e616ff18d68931f0da81a04045960f035568322))\r\n* **deps:** Bump github.com/shirou/gopsutil/v3 from 3.23.12 to 3.24.1\r\n([#787](https://github.com/runfinch/finch/issues/787))\r\n([55f6d92](https://github.com/runfinch/finch/commit/55f6d929949c1f776a63b93ea4a4446cc821e74a))\r\n* **deps:** Bump golang.org/x/crypto from 0.18.0 to 0.19.0\r\n([#806](https://github.com/runfinch/finch/issues/806))\r\n([3fbc87c](https://github.com/runfinch/finch/commit/3fbc87ce7e6a07a789674a52fb79f968db267951))\r\n* **deps:** Bump golang.org/x/tools from 0.17.0 to 0.18.0\r\n([#807](https://github.com/runfinch/finch/issues/807))\r\n([7323751](https://github.com/runfinch/finch/commit/7323751937900df76b217736acc51d77b9cff3d9))\r\n* **deps:** Bump k8s.io/apimachinery from 0.29.1 to 0.29.2\r\n([#820](https://github.com/runfinch/finch/issues/820))\r\n([6ca0f7f](https://github.com/runfinch/finch/commit/6ca0f7ff007f88ad37eb02b2c9437042a7350f37))\r\n* **deps:** Bump submodules and dependencies\r\n([#795](https://github.com/runfinch/finch/issues/795))\r\n([ec77f1a](https://github.com/runfinch/finch/commit/ec77f1abe9c00ddd9cd84ed665204c2c5df4c40b))\r\n* **deps:** Bump submodules and dependencies\r\n([#805](https://github.com/runfinch/finch/issues/805))\r\n([0bf9148](https://github.com/runfinch/finch/commit/0bf9148a6ce88dde413679cc9a3702a5d398d544))\r\n\r\n\r\n### Bug Fixes\r\n\r\n* Correct typo in type name of struct (NerdctlClientOuput)\r\n([#743](https://github.com/runfinch/finch/issues/743))\r\n([13de2b9](https://github.com/runfinch/finch/commit/13de2b99fcd6f952beda9f75e6f3660974a815d0))\r\n* Env variable CONTAINERD_SNAPSHOTTER cleared on overlayfs and ref…\r\n([#816](https://github.com/runfinch/finch/issues/816))\r\n([d222a34](https://github.com/runfinch/finch/commit/d222a347632f9898ed223a122c97d3a973bde3a5))\r\n* msi release tests cleanup\r\n([#819](https://github.com/runfinch/finch/issues/819))\r\n([0f23660](https://github.com/runfinch/finch/commit/0f236609429534bab3057971e6126cf9b3ff47fc))\r\n* stop Finch on uninstall\r\n([#818](https://github.com/runfinch/finch/issues/818))\r\n([a96788b](https://github.com/runfinch/finch/commit/a96788bbce5e9a6af805650a1c21d1c60e04fa68))\r\n* **windows-installer:** add new cleanup script on install\r\n([#824](https://github.com/runfinch/finch/issues/824))\r\n([fccfa1d](https://github.com/runfinch/finch/commit/fccfa1dd5773242039254e067dcde0cd9fd4fe5e))\r\n* **windows-installer:** ignore FilesInUse/Restart dialogue\r\n([#823](https://github.com/runfinch/finch/issues/823))\r\n([f64835d](https://github.com/runfinch/finch/commit/f64835d6b7d473eda434cbb932d3c049cac6a5d5))\r\n* **windows-installer:** uninstall script behavior\r\n([#822](https://github.com/runfinch/finch/issues/822))\r\n([ace37ea](https://github.com/runfinch/finch/commit/ace37eaf48fca613f692e7a08b182d268fc60555))\r\n\r\n\r\n### Reverts\r\n\r\n* \"always force stop when using Virtualization.framework\"\r\n([#370](https://github.com/runfinch/finch/issues/370))\r\n([cb3051e](https://github.com/runfinch/finch/commit/cb3051e60d80aabce550377696d4251c9a9b0eec))\r\n\r\n---\r\nThis PR was generated with [Release\r\nPlease](https://github.com/googleapis/release-please). See\r\n[documentation](https://github.com/googleapis/release-please#release-please).\r\n\r\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-21T10:11:51-08:00",
          "tree_id": "40008d27e9b2606af1117419d9bf60d27a42b3dd",
          "url": "https://github.com/runfinch/finch/commit/0f0c824f23f3057b9dca2a61ef8aabe0eeb73a5b"
        },
        "date": 1708539326621,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37504012791,
            "unit": "ns/op\t         0.4768 %cpu_avg/op\t        50.00 %cpu_peak/op\t        37.50 cpu_seconds/op\t1429524480 disk_bytes/op\t 1699864 B/op\t   35478 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37504012791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4768,
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
            "value": 37.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1429524480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1699864,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35478,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20474416208,
            "unit": "ns/op\t         0.5644 %cpu_avg/op\t        70.00 %cpu_peak/op\t        20.47 cpu_seconds/op\t  17620992 disk_bytes/op\t  924584 B/op\t   19424 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20474416208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5644,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 70,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 20.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17620992,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 924584,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19424,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 256212584,
            "unit": "ns/op\t         1.299 %cpu_avg/op\t        16.50 %cpu_peak/op\t         0.2562 cpu_seconds/op\t         0 disk_bytes/op\t   21782 B/op\t     287 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 256212584,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.299,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2562,
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
        "date": 1708621571027,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37680860334,
            "unit": "ns/op\t         0.4494 %cpu_avg/op\t        75.00 %cpu_peak/op\t        37.68 cpu_seconds/op\t1429721088 disk_bytes/op\t 1710320 B/op\t   35711 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37680860334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4494,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 75,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 37.68,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1429721088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1710320,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35711,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 25519727417,
            "unit": "ns/op\t         0.3697 %cpu_avg/op\t        37.50 %cpu_peak/op\t        25.52 cpu_seconds/op\t  32751616 disk_bytes/op\t 1132264 B/op\t   24145 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25519727417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3697,
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
            "value": 25.52,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 32751616,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1132264,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24145,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 260746427,
            "unit": "ns/op\t         1.667 %cpu_avg/op\t        19.44 %cpu_peak/op\t         0.2607 cpu_seconds/op\t      8192 disk_bytes/op\t   22230 B/op\t     293 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 260746427,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.667,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.44,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2607,
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
            "value": 22230,
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
          "id": "22875751324666cb68f6ef928b9960b8fb9ede08",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.13 to 0.7.14 (#834)\n\nIssue #, if available:\r\nHoping this fixes the last few flaky tests on Windows (see:\r\nhttps://github.com/runfinch/finch/actions/runs/8028176583/job/22044404059?pr=830)\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2024-02-27T19:18:56-05:00",
          "tree_id": "8b9c17ec62407503992b7497b100564d59c65200",
          "url": "https://github.com/runfinch/finch/commit/22875751324666cb68f6ef928b9960b8fb9ede08"
        },
        "date": 1709079733497,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 32497246083,
            "unit": "ns/op\t         0.9945 %cpu_avg/op\t        60.00 %cpu_peak/op\t        32.50 cpu_seconds/op\t1332457472 disk_bytes/op\t 1453728 B/op\t   30822 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32497246083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.9945,
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
            "value": 32.5,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1332457472,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1453728,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30822,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20574735916,
            "unit": "ns/op\t         1.092 %cpu_avg/op\t        66.67 %cpu_peak/op\t        20.57 cpu_seconds/op\t  43986944 disk_bytes/op\t  928536 B/op\t   19537 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20574735916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.092,
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
            "value": 20.57,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 43986944,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 928536,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19537,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 275098250,
            "unit": "ns/op\t         3.604 %cpu_avg/op\t        23.61 %cpu_peak/op\t         0.2751 cpu_seconds/op\t      3072 disk_bytes/op\t   22712 B/op\t     306 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 275098250,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 3.604,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.61,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2751,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 3072,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 22712,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 306,
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
          "id": "4cad1d4ed30bc10d1d22ffb89943b2102f64c265",
          "message": "ci(deps): Bump actions/download-artifact from 4.1.2 to 4.1.3 (#832)\n\nBumps\r\n[actions/download-artifact](https://github.com/actions/download-artifact)\r\nfrom 4.1.2 to 4.1.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.3</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Update release-new-action-version.yml by <a\r\nhref=\"https://github.com/konradpabjan\"><code>@​konradpabjan</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/292\">actions/download-artifact#292</a></li>\r\n<li>Update toolkit dependency with updated unzip logic by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/299\">actions/download-artifact#299</a></li>\r\n<li>Update <code>@​actions/artifact</code> by <a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/303\">actions/download-artifact#303</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/pull/299\">actions/download-artifact#299</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/download-artifact/compare/v4...v4.1.3\">https://github.com/actions/download-artifact/compare/v4...v4.1.3</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/87c55149d96e628cc2ef7e6fc2aab372015aec85\"><code>87c5514</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/303\">#303</a>\r\nfrom bethanyj28/main</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/47f9ce604fdcae5583e5ef84048eeb7ef2893652\"><code>47f9ce6</code></a>\r\nupdate <code>@​actions/artifact</code></li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/127824d34cb0da7dc3cb064a37ae280b7c09aca6\"><code>127824d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/299\">#299</a>\r\nfrom bethanyj28/main</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/6dd49bff0a6150b47d41011c034b762053acaf6f\"><code>6dd49bf</code></a>\r\nlicensed only artifact</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/f71c0e3da3bb6b4fcc53196b9ac75ee981db5bc6\"><code>f71c0e3</code></a>\r\nRevert &quot;licensed&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/7c63dfde29f42bb9cb0f61b67e54c91106a6586e\"><code>7c63dfd</code></a>\r\nlicensed</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/67d37cd34678091933f0a88cd1bb026171ea20d2\"><code>67d37cd</code></a>\r\nUpdate toolkit</li>\r\n<li><a\r\nhref=\"https://github.com/actions/download-artifact/commit/348754975ef0295bfa2c111cba996120cfdf8a5d\"><code>3487549</code></a>\r\nUpdate release-new-action-version.yml (<a\r\nhref=\"https://redirect.github.com/actions/download-artifact/issues/292\">#292</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/download-artifact/compare/eaceaf801fd36c7dee90939fad912460b18a1ffe...87c55149d96e628cc2ef7e6fc2aab372015aec85\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4.1.2&new-version=4.1.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T11:07:34-05:00",
          "tree_id": "5df6cae1a0a6067dce925f8437e244802aaed577",
          "url": "https://github.com/runfinch/finch/commit/4cad1d4ed30bc10d1d22ffb89943b2102f64c265"
        },
        "date": 1709136658710,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36461511250,
            "unit": "ns/op\t         0.5076 %cpu_avg/op\t        66.67 %cpu_peak/op\t        36.46 cpu_seconds/op\t1228161024 disk_bytes/op\t 1660000 B/op\t   34551 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36461511250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5076,
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
            "value": 36.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1228161024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1660000,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34551,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20424740708,
            "unit": "ns/op\t         0.4813 %cpu_avg/op\t        33.33 %cpu_peak/op\t        20.42 cpu_seconds/op\t  17395712 disk_bytes/op\t  921664 B/op\t   19367 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20424740708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4813,
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
            "value": 20.42,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17395712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 921664,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19367,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 272081364,
            "unit": "ns/op\t         1.505 %cpu_avg/op\t        16.25 %cpu_peak/op\t         0.2720 cpu_seconds/op\t      8192 disk_bytes/op\t   22732 B/op\t     302 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 272081364,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.505,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.25,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.272,
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
            "value": 22732,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 302,
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
          "id": "123a65976fecf00d2f5c522150f0c36f648da6c9",
          "message": "ci(deps): Bump peter-evans/create-pull-request from 6.0.0 to 6.0.1 (#836)\n\nBumps\r\n[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nfrom 6.0.0 to 6.0.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/releases\">peter-evans/create-pull-request's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Create Pull Request v6.0.1</h2>\r\n<p>⚙️ Fixes <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2790\">an\r\nissue</a> where updating a pull request leads to the error <code>Cannot\r\nread properties of undefined (reading 'number')</code>. This was likely\r\ncaused by GitHub fixing a long standing bug with an API endpoint,\r\nresulting in a breaking change.</p>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>build(deps-dev): bump <code>@​types/jest</code> from 29.5.11 to\r\n29.5.12 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2730\">peter-evans/create-pull-request#2730</a></li>\r\n<li>build(deps-dev): bump prettier from 3.2.4 to 3.2.5 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2731\">peter-evans/create-pull-request#2731</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.10 to\r\n18.19.14 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2732\">peter-evans/create-pull-request#2732</a></li>\r\n<li>build(deps): bump peter-evans/slash-command-dispatch from 3 to 4 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2748\">peter-evans/create-pull-request#2748</a></li>\r\n<li>build(deps): bump peter-evans/create-pull-request from 5 to 6 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2747\">peter-evans/create-pull-request#2747</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.14 to\r\n18.19.15 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2759\">peter-evans/create-pull-request#2759</a></li>\r\n<li>build(deps-dev): bump eslint-plugin-jest from 27.6.3 to 27.9.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2769\">peter-evans/create-pull-request#2769</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.15 to\r\n18.19.17 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2768\">peter-evans/create-pull-request#2768</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.17 to\r\n18.19.18 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2780\">peter-evans/create-pull-request#2780</a></li>\r\n<li>build(deps-dev): bump eslint from 8.56.0 to 8.57.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2781\">peter-evans/create-pull-request#2781</a></li>\r\n<li>fix: list pulls using the correct head format by <a\r\nhref=\"https://github.com/peter-evans\"><code>@​peter-evans</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2792\">peter-evans/create-pull-request#2792</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v6.0.0...v6.0.1\">https://github.com/peter-evans/create-pull-request/compare/v6.0.0...v6.0.1</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/a4f52f8033a6168103c2538976c07b467e8163bc\"><code>a4f52f8</code></a>\r\nfix: list pulls using the correct head format (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2792\">#2792</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/853c071bcf61c8762f57e59c1576d97418f495ad\"><code>853c071</code></a>\r\nbuild(deps-dev): bump eslint from 8.56.0 to 8.57.0 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2781\">#2781</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/d2c126edc79e6a215930e9a6adc95b7686b84f78\"><code>d2c126e</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.17 to\r\n18.19.18 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2780\">#2780</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/43d39c683601267cd565ea6bd727a4e92aa00852\"><code>43d39c6</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.15 to\r\n18.19.17 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2768\">#2768</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/5a9d206da2b6452cd63eb84e2e5116ff3213e8cb\"><code>5a9d206</code></a>\r\nbuild(deps-dev): bump eslint-plugin-jest from 27.6.3 to 27.9.0 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2769\">#2769</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/e0743ed96cb63913cf4be3cd1f5492df2ae1c6a4\"><code>e0743ed</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.14 to\r\n18.19.15 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2759\">#2759</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/e1529cb8abb50dd7240e4276b5c4e705d97be7e7\"><code>e1529cb</code></a>\r\nbuild(deps): bump peter-evans/create-pull-request from 5 to 6 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2747\">#2747</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/aad52e87e709ba797765001128cf194c946a457b\"><code>aad52e8</code></a>\r\nbuild(deps): bump peter-evans/slash-command-dispatch from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2748\">#2748</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/a64ebdd73452502a4dd07379ce8f3640dcc0d987\"><code>a64ebdd</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.10 to\r\n18.19.14 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2732\">#2732</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/51b40aff5f23f35e5211017631b0bc1d2746beab\"><code>51b40af</code></a>\r\nbuild(deps-dev): bump prettier from 3.2.4 to 3.2.5 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2731\">#2731</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/b1ddad2c994a25fbc81a28b3ec0e368bb2021c50...a4f52f8033a6168103c2538976c07b467e8163bc\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=peter-evans/create-pull-request&package-manager=github_actions&previous-version=6.0.0&new-version=6.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:04:59-05:00",
          "tree_id": "ddb0b60ea64948b8ffa2cb2396d96dad14b8cb0f",
          "url": "https://github.com/runfinch/finch/commit/123a65976fecf00d2f5c522150f0c36f648da6c9"
        },
        "date": 1709140623506,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37582124959,
            "unit": "ns/op\t         0.4018 %cpu_avg/op\t        40.00 %cpu_peak/op\t        37.58 cpu_seconds/op\t1177198592 disk_bytes/op\t 1706752 B/op\t   35619 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37582124959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4018,
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
            "value": 37.58,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1177198592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1706752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35619,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 22993346417,
            "unit": "ns/op\t         0.4607 %cpu_avg/op\t        33.33 %cpu_peak/op\t        22.99 cpu_seconds/op\t  41828352 disk_bytes/op\t 1026992 B/op\t   21766 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 22993346417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4607,
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
            "value": 22.99,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 41828352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1026992,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 21766,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 264186573,
            "unit": "ns/op\t         0.9198 %cpu_avg/op\t        11.81 %cpu_peak/op\t         0.2641 cpu_seconds/op\t         0 disk_bytes/op\t   22048 B/op\t     295 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 264186573,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9198,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.81,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2641,
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
            "value": 22048,
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
          "id": "1ed1474fa7eaca97e32a7641da76ca96e5d300d1",
          "message": "build(deps): Bump golang.org/x/crypto from 0.19.0 to 0.20.0 (#833)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.19.0 to 0.20.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0aab8d07aefab378c763e8f36aa007544a862aa9\"><code>0aab8d0</code></a>\r\nall: update go.mod x/net dependency</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/5bead598a0d4042616ba0daf31d8398ff6c06eaf\"><code>5bead59</code></a>\r\nocsp: don't use iota for externally defined constants</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/1a865804d5a867febcb0162512f4e5d947ba641e\"><code>1a86580</code></a>\r\nx/crypto/internal/poly1305: improve sum_ppc64le.s</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/1c981e6f81fc4d43487d6ad84d6b499fa55099e8\"><code>1c981e6</code></a>\r\nssh/test: don't use DSA keys in integrations tests, update test RSA\r\nkey</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/62c9f1799c91aef0744179032e30fda3761e79f7\"><code>62c9f17</code></a>\r\nx509roots/nss: manually exclude a confusingly constrained root</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.19.0...v0.20.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.19.0&new-version=0.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:05:32-05:00",
          "tree_id": "e80c48345900e80fcba02ac82dec94118ad272c1",
          "url": "https://github.com/runfinch/finch/commit/1ed1474fa7eaca97e32a7641da76ca96e5d300d1"
        },
        "date": 1709140827193,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 34344894375,
            "unit": "ns/op\t         0.4783 %cpu_avg/op\t        50.00 %cpu_peak/op\t        34.34 cpu_seconds/op\t1093382144 disk_bytes/op\t 1529936 B/op\t   32552 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34344894375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4783,
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
            "value": 34.34,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1093382144,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1529936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32552,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26446287833,
            "unit": "ns/op\t         0.4329 %cpu_avg/op\t        37.50 %cpu_peak/op\t        26.45 cpu_seconds/op\t 172625920 disk_bytes/op\t 1170056 B/op\t   25018 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26446287833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4329,
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
            "value": 26.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 172625920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1170056,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25018,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 273488084,
            "unit": "ns/op\t         2.183 %cpu_avg/op\t        18.33 %cpu_peak/op\t         0.2734 cpu_seconds/op\t         0 disk_bytes/op\t   22566 B/op\t     303 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 273488084,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.183,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.33,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2734,
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
            "value": 22566,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 303,
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
          "distinct": false,
          "id": "9eb80975c7490394d5af082b2738dda7d3090fe1",
          "message": "build(deps): Bump github.com/aws/aws-sdk-go-v2 from 1.25.0 to 1.25.2 (#831)\n\nBumps\r\n[github.com/aws/aws-sdk-go-v2](https://github.com/aws/aws-sdk-go-v2)\r\nfrom 1.25.0 to 1.25.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/7095341032d4a2b1fe04aa5e96e254321169e114\"><code>7095341</code></a>\r\nRelease 2024-02-23</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/bcf04e6e66831a0fde59d0060af9a1d71158c9d5\"><code>bcf04e6</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/ca190b054e7a07bcde270356ffe0ad06fd722ccc\"><code>ca190b0</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/6397a6448e500f7386d005ad2fc3a822f3eaf380\"><code>6397a64</code></a>\r\nmove common middleware stack ops to service client modules (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2516\">#2516</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/e9b00e26a17fcdb0b01772ad19fc6f733abac749\"><code>e9b00e2</code></a>\r\nRelease 2024-02-22</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/0cfc53e095ae2e97185c6f594d1725320f152304\"><code>0cfc53e</code></a>\r\nRegenerated Clients</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/92d6c194cfde05280d8836ef7b56c36fd7fd926d\"><code>92d6c19</code></a>\r\nUpdate API model</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/18adb3114cc789def28fac1b718657d33443ed5c\"><code>18adb31</code></a>\r\nadd middleware snapshot tests (<a\r\nhref=\"https://redirect.github.com/aws/aws-sdk-go-v2/issues/2513\">#2513</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/7888f0e10eb7ef5db0b67a8a27bb8eeee984257b\"><code>7888f0e</code></a>\r\nRelease 2024-02-21</li>\r\n<li><a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/commit/4a9cd1dd63c4532e0afe4e5314750bf08f1ae68b\"><code>4a9cd1d</code></a>\r\nRegenerated Clients</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws/aws-sdk-go-v2/compare/v1.25.0...v1.25.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/aws/aws-sdk-go-v2&package-manager=go_modules&previous-version=1.25.0&new-version=1.25.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-28T12:06:00-05:00",
          "tree_id": "6608c1aa44d246f9a76be96aa4816132777a440c",
          "url": "https://github.com/runfinch/finch/commit/9eb80975c7490394d5af082b2738dda7d3090fe1"
        },
        "date": 1709141030365,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36532252709,
            "unit": "ns/op\t         0.4641 %cpu_avg/op\t        66.67 %cpu_peak/op\t        36.53 cpu_seconds/op\t1207697408 disk_bytes/op\t 1662960 B/op\t   34633 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36532252709,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4641,
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
            "value": 36.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1207697408,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1662960,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34633,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24385674375,
            "unit": "ns/op\t         0.5013 %cpu_avg/op\t        44.44 %cpu_peak/op\t        24.39 cpu_seconds/op\t  94187520 disk_bytes/op\t 1084632 B/op\t   23076 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24385674375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5013,
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
            "value": 24.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94187520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1084632,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23076,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 268892666,
            "unit": "ns/op\t         1.123 %cpu_avg/op\t        14.58 %cpu_peak/op\t         0.2688 cpu_seconds/op\t         0 disk_bytes/op\t   22346 B/op\t     298 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 268892666,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.123,
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
            "value": 0.2688,
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
            "value": 22346,
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
          "id": "d2612aa7683e93213e0ba5f9e082afb343ddcaf2",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.24.1 to 3.24.2 (#838)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.24.1 to 3.24.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.24.2</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>add support for OpenBSD/riscv64 by <a\r\nhref=\"https://github.com/jmatthew\"><code>@​jmatthew</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1594\">shirou/gopsutil#1594</a></li>\r\n<li>[ci]: add macos-13 and macos-14 on GitHub Action by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1599\">shirou/gopsutil#1599</a></li>\r\n</ul>\r\n<h3>Documentation</h3>\r\n<ul>\r\n<li>cwd for windows is supported by <a\r\nhref=\"https://github.com/vlnaum\"><code>@​vlnaum</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1597\">shirou/gopsutil#1597</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/jmatthew\"><code>@​jmatthew</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1594\">shirou/gopsutil#1594</a></li>\r\n<li><a href=\"https://github.com/vlnaum\"><code>@​vlnaum</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1597\">shirou/gopsutil#1597</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2\">https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/e767a0f0f85ae67f68c76d6a29c537ff71392f88\"><code>e767a0f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1599\">#1599</a>\r\nfrom shirou/feat/add_macos_on_github_action_test</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/53fb8caad4bf683e50b5ee73e6bb1fbaafafd314\"><code>53fb8ca</code></a>\r\n[darwin][ci]: skip frequency check on GitHub Action</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/25c3f409bd30649a00cfdf52a65b267522fb2bc5\"><code>25c3f40</code></a>\r\n[ci]: add macos-13 and macos-14 on GitHub Action</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/146bae2a4787c7841a7fc2d706b1415e47898dd2\"><code>146bae2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1597\">#1597</a>\r\nfrom vlnaum/cwd_windows</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d3057c252fe2c12f0b2f62a597d47dddeadcb6e7\"><code>d3057c2</code></a>\r\ncwd support windows doc</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8aeaf163abb6216e52f56bbba4919f6dbc4fd894\"><code>8aeaf16</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1594\">#1594</a>\r\nfrom jmatthew/openbsd-riscv64</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/cbbb2402fedb359c35cf71013f3c8e8768a736da\"><code>cbbb240</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1595\">#1595</a>\r\nfrom shirou/dependabot/github_actions/golangci/golan...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d0037dd62b71f9f239b56858c8e72d65ff831c7a\"><code>d0037dd</code></a>\r\nchore(deps): bump golangci/golangci-lint-action from 3.7.0 to 4.0.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/6ccc60519ec242820e0b2dddb0fae18376363ad3\"><code>6ccc605</code></a>\r\nupdate list OpenBSD arch list</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/27ffa28a0d97df0fde4df6982597d85c06859d78\"><code>27ffa28</code></a>\r\nadd support for OpenBSD/riscv64</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.24.1...v3.24.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.24.1&new-version=3.24.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-01T16:37:47-05:00",
          "tree_id": "1e3088e0a6fc6a8d2ac9fc85e90f5807b0864516",
          "url": "https://github.com/runfinch/finch/commit/d2612aa7683e93213e0ba5f9e082afb343ddcaf2"
        },
        "date": 1709330108263,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37754295917,
            "unit": "ns/op\t         0.8894 %cpu_avg/op\t        77.78 %cpu_peak/op\t        37.75 cpu_seconds/op\t1177341952 disk_bytes/op\t 1713032 B/op\t   35784 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37754295917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8894,
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
            "value": 37.75,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1177341952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1713032,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35784,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20434004500,
            "unit": "ns/op\t         0.9223 %cpu_avg/op\t        57.14 %cpu_peak/op\t        20.43 cpu_seconds/op\t  16642048 disk_bytes/op\t  925288 B/op\t   19430 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20434004500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.9223,
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
            "value": 20.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16642048,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 925288,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19430,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 261593625,
            "unit": "ns/op\t         2.568 %cpu_avg/op\t        19.38 %cpu_peak/op\t         0.2615 cpu_seconds/op\t      4096 disk_bytes/op\t   22226 B/op\t     294 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 261593625,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.568,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.38,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2615,
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
            "value": 22226,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 294,
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
          "id": "9f0953d260c806b4b243472ddce14284b2051a3e",
          "message": "build(deps): Bump github.com/stretchr/testify from 1.8.4 to 1.9.0 (#839)\n\nBumps [github.com/stretchr/testify](https://github.com/stretchr/testify)\r\nfrom 1.8.4 to 1.9.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/stretchr/testify/releases\">github.com/stretchr/testify's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.9.0</h2>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Fix Go modules version by <a\r\nhref=\"https://github.com/SuperQ\"><code>@​SuperQ</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1394\">stretchr/testify#1394</a></li>\r\n<li>Document that require is not safe to call in created goroutines by\r\n<a\r\nhref=\"https://github.com/programmer04\"><code>@​programmer04</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1392\">stretchr/testify#1392</a></li>\r\n<li>Remove myself from MAINTAINERS.md by <a\r\nhref=\"https://github.com/mvdkleijn\"><code>@​mvdkleijn</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1367\">stretchr/testify#1367</a></li>\r\n<li>Correct spelling/grammar by <a\r\nhref=\"https://github.com/echarrod\"><code>@​echarrod</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1389\">stretchr/testify#1389</a></li>\r\n<li>docs: Update URLs in README by <a\r\nhref=\"https://github.com/davidjb\"><code>@​davidjb</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1349\">stretchr/testify#1349</a></li>\r\n<li>Update mockery link to Github Pages in README by <a\r\nhref=\"https://github.com/LandonTClipp\"><code>@​LandonTClipp</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1346\">stretchr/testify#1346</a></li>\r\n<li>docs: Fix typos in tests and comments by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1410\">stretchr/testify#1410</a></li>\r\n<li>CI: tests from go1.17 by <a\r\nhref=\"https://github.com/SuperQ\"><code>@​SuperQ</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1409\">stretchr/testify#1409</a></li>\r\n<li>Fix adding ? when no values passed by <a\r\nhref=\"https://github.com/lesichkovm\"><code>@​lesichkovm</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1320\">stretchr/testify#1320</a></li>\r\n<li>codegen: use standard header for generated files by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1406\">stretchr/testify#1406</a></li>\r\n<li>mock: AssertExpectations log reason only on failure by <a\r\nhref=\"https://github.com/hikyaru-suzuki\"><code>@​hikyaru-suzuki</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1360\">stretchr/testify#1360</a></li>\r\n<li>assert: fix flaky TestNeverTrue by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1417\">stretchr/testify#1417</a></li>\r\n<li>README: fix typos &quot;set up&quot; vs &quot;setup&quot; by <a\r\nhref=\"https://github.com/ossan-dev\"><code>@​ossan-dev</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1428\">stretchr/testify#1428</a></li>\r\n<li>mock: move regexp compilation outside of <code>Called</code> by <a\r\nhref=\"https://github.com/aud10slave\"><code>@​aud10slave</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/631\">stretchr/testify#631</a></li>\r\n<li>assert: refactor internal func getLen() by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1445\">stretchr/testify#1445</a></li>\r\n<li>mock: deprecate type AnythingOfTypeArgument (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1434\">#1434</a>)\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1441\">stretchr/testify#1441</a></li>\r\n<li>Remove no longer needed assert.canConvert by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1470\">stretchr/testify#1470</a></li>\r\n<li>assert: ObjectsAreEqual: use time.Equal for time.Time types by <a\r\nhref=\"https://github.com/tscales\"><code>@​tscales</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1464\">stretchr/testify#1464</a></li>\r\n<li>Bump actions/checkout from 3 to 4 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1466\">stretchr/testify#1466</a></li>\r\n<li>Bump actions/setup-go from 3.2.0 to 4.1.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1451\">stretchr/testify#1451</a></li>\r\n<li>fix: make EventuallyWithT concurrency safe by <a\r\nhref=\"https://github.com/czeslavo\"><code>@​czeslavo</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1395\">stretchr/testify#1395</a></li>\r\n<li>assert: fix httpCode and HTTPBody occur panic when http.Handler read\r\nBody by <a href=\"https://github.com/hidu\"><code>@​hidu</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1484\">stretchr/testify#1484</a></li>\r\n<li>assert.EqualExportedValues: fix handling of arrays by <a\r\nhref=\"https://github.com/zrbecker\"><code>@​zrbecker</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1473\">stretchr/testify#1473</a></li>\r\n<li>.github: use latest Go versions by <a\r\nhref=\"https://github.com/kevinburkesegment\"><code>@​kevinburkesegment</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1489\">stretchr/testify#1489</a></li>\r\n<li>assert: Deprecate EqualExportedValues by <a\r\nhref=\"https://github.com/HaraldNordgren\"><code>@​HaraldNordgren</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1488\">stretchr/testify#1488</a></li>\r\n<li>suite: refactor test assertions by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1474\">stretchr/testify#1474</a></li>\r\n<li>suite: fix SetupSubTest and TearDownSubTest execution order by <a\r\nhref=\"https://github.com/linusbarth\"><code>@​linusbarth</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1471\">stretchr/testify#1471</a></li>\r\n<li>docs: Fix deprecation comments for http package by <a\r\nhref=\"https://github.com/alexandear\"><code>@​alexandear</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1335\">stretchr/testify#1335</a></li>\r\n<li>Add map support doc comments to Subset and NotSubset by <a\r\nhref=\"https://github.com/jedevc\"><code>@​jedevc</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1306\">stretchr/testify#1306</a></li>\r\n<li>TestErrorIs/TestNotErrorIs: check error message contents by <a\r\nhref=\"https://github.com/craig65535\"><code>@​craig65535</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1435\">stretchr/testify#1435</a></li>\r\n<li>suite: fix subtest names (fix <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1501\">#1501</a>)\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1504\">stretchr/testify#1504</a></li>\r\n<li>assert: improve unsafe.Pointer tests by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1505\">stretchr/testify#1505</a></li>\r\n<li>assert: simplify isNil implementation by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1506\">stretchr/testify#1506</a></li>\r\n<li>assert.InEpsilonSlice: fix expected/actual order and other\r\nimprovements by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1483\">stretchr/testify#1483</a></li>\r\n<li>Fix dependency cycle with objx <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1292\">#1292</a>\r\nby <a href=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1453\">stretchr/testify#1453</a></li>\r\n<li>mock: refactor TestIsArgsEqual by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1444\">stretchr/testify#1444</a></li>\r\n<li>mock: optimize argument matching checks by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1416\">stretchr/testify#1416</a></li>\r\n<li>assert: fix TestEventuallyTimeout by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1412\">stretchr/testify#1412</a></li>\r\n<li>CI: add go 1.21 in GitHub Actions by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1450\">stretchr/testify#1450</a></li>\r\n<li>suite: fix recoverAndFailOnPanic to report test failure at the right\r\nlocation by <a\r\nhref=\"https://github.com/dolmen\"><code>@​dolmen</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1502\">stretchr/testify#1502</a></li>\r\n<li>Update maintainers by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1533\">stretchr/testify#1533</a></li>\r\n<li>assert: Fix EqualValues to handle overflow/underflow by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1531\">stretchr/testify#1531</a></li>\r\n<li>assert: better formatting for Len() error by <a\r\nhref=\"https://github.com/kevinburkesegment\"><code>@​kevinburkesegment</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1485\">stretchr/testify#1485</a></li>\r\n<li>Ensure AssertExpectations does not fail in skipped tests by <a\r\nhref=\"https://github.com/ianrose14\"><code>@​ianrose14</code></a> in <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1331\">stretchr/testify#1331</a></li>\r\n<li>suite: fix deadlock in suite.Require()/Assert() by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1535\">stretchr/testify#1535</a></li>\r\n<li>Revert &quot;assert: ObjectsAreEqual: use time.Equal for time.Time\r\ntype&quot; by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1537\">stretchr/testify#1537</a></li>\r\n<li>[chore] Add issue templates by <a\r\nhref=\"https://github.com/arjunmahishi\"><code>@​arjunmahishi</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1538\">stretchr/testify#1538</a></li>\r\n<li>Update the build status badge by <a\r\nhref=\"https://github.com/brackendawson\"><code>@​brackendawson</code></a>\r\nin <a\r\nhref=\"https://redirect.github.com/stretchr/testify/pull/1540\">stretchr/testify#1540</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/bb548d0473d4e1c9b7bbfd6602c7bf12f7a84dd2\"><code>bb548d0</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1552\">#1552</a>\r\nfrom stretchr/dependabot/go_modules/github.com/stret...</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/814075f391adffd2bf2b5110a74c51827ba132c4\"><code>814075f</code></a>\r\nbuild(deps): bump github.com/stretchr/objx from 0.5.1 to 0.5.2</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/e0456122451b1839c8d58d32df6364e4d0f0a709\"><code>e045612</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1339\">#1339</a>\r\nfrom bogdandrutu/uintptr</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/5b6926d686d412518f50e888b9ae9b938355e011\"><code>5b6926d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1385\">#1385</a>\r\nfrom hslatman/not-implements</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/9f97d67703eff02136d487e6c907e76fdea31a8b\"><code>9f97d67</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1550\">#1550</a>\r\nfrom stretchr/release-notes</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/bcb0d3fe49ff300fb78288cc144bc61a881f58ec\"><code>bcb0d3f</code></a>\r\nInclude the auto-release notes in releases</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/fb770f8238261aa22f8e0c56f18168ccb90f4a09\"><code>fb770f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1247\">#1247</a>\r\nfrom ccoVeille/typos</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/85d8bb6eea715dcbbb68f7c87b50e1956e20f892\"><code>85d8bb6</code></a>\r\nfix typos in comments, tests and github templates</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/e2741fa4e9bf2fdfe3ed48d976a7eeebe76c5009\"><code>e2741fa</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1548\">#1548</a>\r\nfrom arjunmahishi/msgAndArgs</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/6e59f20c0d3883d2bdc589a9e48374ea30601851\"><code>6e59f20</code></a>\r\nhttp_assertions: assert that the msgAndArgs actually works in tests</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/stretchr/testify/compare/v1.8.4...v1.9.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/stretchr/testify&package-manager=go_modules&previous-version=1.8.4&new-version=1.9.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T11:11:22-05:00",
          "tree_id": "c4dede5619f23322e5ca83bcb6bcd50f6e91a772",
          "url": "https://github.com/runfinch/finch/commit/9f0953d260c806b4b243472ddce14284b2051a3e"
        },
        "date": 1709571357940,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38743421166,
            "unit": "ns/op\t         0.4189 %cpu_avg/op\t        45.45 %cpu_peak/op\t        38.74 cpu_seconds/op\t1145266176 disk_bytes/op\t 1752976 B/op\t   36663 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38743421166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4189,
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
            "value": 38.74,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1145266176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1752976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36663,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24295056750,
            "unit": "ns/op\t         0.3509 %cpu_avg/op\t        30.00 %cpu_peak/op\t        24.29 cpu_seconds/op\t  72351744 disk_bytes/op\t 1081528 B/op\t   23009 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24295056750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3509,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 72351744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081528,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23009,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 258968479,
            "unit": "ns/op\t         2.374 %cpu_avg/op\t        15.48 %cpu_peak/op\t         0.2589 cpu_seconds/op\t         0 disk_bytes/op\t   21892 B/op\t     290 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 258968479,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.374,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.48,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2589,
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
            "value": 21892,
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
          "id": "c2363b18dc9531d81898dbbce131d13205e40017",
          "message": "fix: Reset disks and force remove vm after suite execution (#846)\n\nIssue #, if available:\r\n\r\n*Description of changes: Force remove vm and clean disks. This gives a\r\nchance to recover from builkit failures caused by non-existent uuid\r\nfiles\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Shubharanshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2024-03-11T11:28:01-07:00",
          "tree_id": "f0a98ead07596d14712c35907baffeb488d3b4f8",
          "url": "https://github.com/runfinch/finch/commit/c2363b18dc9531d81898dbbce131d13205e40017"
        },
        "date": 1710181937065,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 36482909250,
            "unit": "ns/op\t         0.5112 %cpu_avg/op\t        33.33 %cpu_peak/op\t        36.48 cpu_seconds/op\t1217241088 disk_bytes/op\t 1661840 B/op\t   34598 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36482909250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5112,
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
            "value": 36.48,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1217241088,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1661840,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34598,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24283212958,
            "unit": "ns/op\t         0.3951 %cpu_avg/op\t        37.50 %cpu_peak/op\t        24.28 cpu_seconds/op\t 185729024 disk_bytes/op\t 1081384 B/op\t   22999 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24283212958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3951,
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
            "value": 24.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 185729024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1081384,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22999,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 257096458,
            "unit": "ns/op\t         1.634 %cpu_avg/op\t        11.81 %cpu_peak/op\t         0.2570 cpu_seconds/op\t         0 disk_bytes/op\t   21798 B/op\t     287 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 257096458,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.634,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.81,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.257,
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
            "value": 21798,
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
          "id": "55e12788be10046394f617ec744e634049ec81c4",
          "message": "chore: Update common-test version (#850)\n\nIssue #, if available:\r\n\r\n*Description of changes:* chore: Update common-test version\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [ ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Shubharanshu Mahapatra <shubhum@amazon.com>",
          "timestamp": "2024-03-12T12:04:03-04:00",
          "tree_id": "c7f465c22aeb6249279bebda3d0be89682fbea20",
          "url": "https://github.com/runfinch/finch/commit/55e12788be10046394f617ec744e634049ec81c4"
        },
        "date": 1710259660314,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38152762833,
            "unit": "ns/op\t         0.4474 %cpu_avg/op\t        44.44 %cpu_peak/op\t        38.15 cpu_seconds/op\t1328979968 disk_bytes/op\t 1728752 B/op\t   36141 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38152762833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4474,
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
            "value": 38.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1328979968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1728752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36141,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20462289542,
            "unit": "ns/op\t         0.5660 %cpu_avg/op\t        42.86 %cpu_peak/op\t        20.46 cpu_seconds/op\t  39247872 disk_bytes/op\t  921424 B/op\t   19385 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20462289542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.566,
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
            "value": 20.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 39247872,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 921424,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19385,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 272383042,
            "unit": "ns/op\t         1.066 %cpu_avg/op\t        13.39 %cpu_peak/op\t         0.2723 cpu_seconds/op\t      4096 disk_bytes/op\t   22722 B/op\t     303 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 272383042,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.066,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.39,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2723,
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
            "value": 22722,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 303,
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
          "id": "b7ef6f2a946b1a813dd5846e4ea8726a1442b332",
          "message": "build(deps): Bump golang.org/x/crypto from 0.20.0 to 0.21.0 (#843)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.20.0 to 0.21.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/7067223927c4e3f3bb91a5c6e0d2aae83df74e7a\"><code>7067223</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0d2316b26734542fda0a2df69f586b811740edf4\"><code>0d2316b</code></a>\r\nssh/test: work around for TestCiphers failures on macOS</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.20.0...v0.21.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.20.0&new-version=0.21.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-12T10:36:27-07:00",
          "tree_id": "a80ece8f5116bbdf4295f02886488353449b1ac5",
          "url": "https://github.com/runfinch/finch/commit/b7ef6f2a946b1a813dd5846e4ea8726a1442b332"
        },
        "date": 1710266756669,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37733765417,
            "unit": "ns/op\t         0.4640 %cpu_avg/op\t        50.00 %cpu_peak/op\t        37.73 cpu_seconds/op\t1195057152 disk_bytes/op\t 1710768 B/op\t   35730 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37733765417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.464,
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
            "value": 37.73,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1195057152,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1710768,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35730,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24231424000,
            "unit": "ns/op\t         0.4703 %cpu_avg/op\t        41.67 %cpu_peak/op\t        24.23 cpu_seconds/op\t 113455104 disk_bytes/op\t 1079152 B/op\t   22936 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24231424000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4703,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.23,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 113455104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1079152,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22936,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 254960562,
            "unit": "ns/op\t         1.910 %cpu_avg/op\t        17.61 %cpu_peak/op\t         0.2549 cpu_seconds/op\t      8192 disk_bytes/op\t   21816 B/op\t     285 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 254960562,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.91,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.61,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2549,
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
            "value": 21816,
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
          "id": "8e044217f97b9fe8b4557e5770eb2b383768c413",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.15.0 to 2.16.0 (#842)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.15.0 to 2.16.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.16.0</h2>\r\n<h2>2.16.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>add SpecContext to reporting nodes</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>merge coverages instead of combining them (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1329\">#1329</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1340\">#1340</a>)\r\n[23f0cc5]</li>\r\n<li>core_dsl: disable Getwd() with environment variable (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1357\">#1357</a>)\r\n[cd418b7]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>docs/index.md: Typo [2cebe8d]</li>\r\n<li>fix docs [06de431]</li>\r\n<li>chore: test with Go 1.22 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1352\">#1352</a>)\r\n[898cba9]</li>\r\n<li>Bump golang.org/x/tools from 0.16.1 to 0.17.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1336\">#1336</a>)\r\n[17ae120]</li>\r\n<li>Bump golang.org/x/sys from 0.15.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1327\">#1327</a>)\r\n[5a179ed]</li>\r\n<li>Bump github.com/go-logr/logr from 1.3.0 to 1.4.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1321\">#1321</a>)\r\n[a1e6b69]</li>\r\n<li>Bump github-pages and jekyll-feed in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1351\">#1351</a>)\r\n[d52951d]</li>\r\n<li>Fix docs for handling failures in goroutines (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1339\">#1339</a>)\r\n[4471b2e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.16.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>add SpecContext to reporting nodes</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>merge coverages instead of combining them (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1329\">#1329</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1340\">#1340</a>)\r\n[23f0cc5]</li>\r\n<li>core_dsl: disable Getwd() with environment variable (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1357\">#1357</a>)\r\n[cd418b7]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>docs/index.md: Typo [2cebe8d]</li>\r\n<li>fix docs [06de431]</li>\r\n<li>chore: test with Go 1.22 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1352\">#1352</a>)\r\n[898cba9]</li>\r\n<li>Bump golang.org/x/tools from 0.16.1 to 0.17.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1336\">#1336</a>)\r\n[17ae120]</li>\r\n<li>Bump golang.org/x/sys from 0.15.0 to 0.16.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1327\">#1327</a>)\r\n[5a179ed]</li>\r\n<li>Bump github.com/go-logr/logr from 1.3.0 to 1.4.1 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1321\">#1321</a>)\r\n[a1e6b69]</li>\r\n<li>Bump github-pages and jekyll-feed in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1351\">#1351</a>)\r\n[d52951d]</li>\r\n<li>Fix docs for handling failures in goroutines (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1339\">#1339</a>)\r\n[4471b2e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/a181ee22f50186b1be81d3d3011a6841518782d2\"><code>a181ee2</code></a>\r\nv2.16.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/2cebe8d4def1a24d5df12819defbc980a0fcaea2\"><code>2cebe8d</code></a>\r\ndocs/index.md: Typo</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/881efde71ccc44d0d2ebc02f3641941e143a1c1d\"><code>881efde</code></a>\r\nupdate documentation to reflect changes to reporting nodes</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/c4e219ff5f317e6f0b78e30c2554088ee3ea2f92\"><code>c4e219f</code></a>\r\nadd SpecContext to other reporting nodes and update tests</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/06de43198fea28d265ee93530424252028f30181\"><code>06de431</code></a>\r\nfix docs</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/372d26a2c9cfda920b52f6230cdd2d94f1cdec2e\"><code>372d26a</code></a>\r\nupdate docs</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/fd929c6e27e6b53886f2d76525c97f9f130cb560\"><code>fd929c6</code></a>\r\nupdate test description</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/fed9402d63e0871b76dc390a18e3fa23d8428e92\"><code>fed9402</code></a>\r\nupdate documentation.</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/5ff9d7fafb94f34fa83fbbc29132d1ef60890e19\"><code>5ff9d7f</code></a>\r\nAdd SpecContext to ReportAfterSuite callback body.</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/9c771cd687800da7a9a6c65c0e447127e6a90548\"><code>9c771cd</code></a>\r\nAdd SpecContext to ReportAfterSuite callback body.</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.15.0...v2.16.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.15.0&new-version=2.16.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-12T10:38:01-07:00",
          "tree_id": "6ad1fe2727188d083c3f644b70fbf07b5e59b1d8",
          "url": "https://github.com/runfinch/finch/commit/8e044217f97b9fe8b4557e5770eb2b383768c413"
        },
        "date": 1710266900425,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 35505390417,
            "unit": "ns/op\t         0.4752 %cpu_avg/op\t        53.85 %cpu_peak/op\t        35.51 cpu_seconds/op\t1093570560 disk_bytes/op\t 1579680 B/op\t   33682 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35505390417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4752,
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
            "value": 35.51,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1093570560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1579680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33682,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24441140625,
            "unit": "ns/op\t         0.5762 %cpu_avg/op\t        45.45 %cpu_peak/op\t        24.44 cpu_seconds/op\t 144932864 disk_bytes/op\t 1089120 B/op\t   23171 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24441140625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5762,
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
            "value": 24.44,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 144932864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1089120,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23171,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 275559802,
            "unit": "ns/op\t         1.828 %cpu_avg/op\t        20.74 %cpu_peak/op\t         0.2755 cpu_seconds/op\t      4096 disk_bytes/op\t   22680 B/op\t     305 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 275559802,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.828,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.74,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2755,
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
            "value": 22680,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 305,
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
          "id": "c63656063476314ecd16e23697b4cdb3a88cf197",
          "message": "ci(deps): Bump google-github-actions/release-please-action from 4.0.2 to 4.1.0 (#852)\n\nBumps\r\n[google-github-actions/release-please-action](https://github.com/google-github-actions/release-please-action)\r\nfrom 4.0.2 to 4.1.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/google-github-actions/release-please-action/releases\">google-github-actions/release-please-action's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.0</h2>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.3...v4.1.0\">4.1.0</a>\r\n(2024-03-11)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>add <code>changelog-host</code> input to <code>action.yml</code> (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/948\">#948</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/863b06fd1cd7f36c1d74d697ddebe3cf5be4c6b0\">863b06f</a>)</li>\r\n</ul>\r\n<h2>v4.0.3</h2>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.2...v4.0.3\">4.0.3</a>\r\n(2024-03-11)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>bump release-please from 16.5.0 to 16.10.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/953\">#953</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/d7e88e0fd9e1a56d1075f610183d571f8347ff9b\">d7e88e0</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/google-github-actions/release-please-action/blob/main/CHANGELOG.md\">google-github-actions/release-please-action's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h1>Changelog</h1>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.3...v4.1.0\">4.1.0</a>\r\n(2024-03-11)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>add <code>changelog-host</code> input to <code>action.yml</code> (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/948\">#948</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/863b06fd1cd7f36c1d74d697ddebe3cf5be4c6b0\">863b06f</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.2...v4.0.3\">4.0.3</a>\r\n(2024-03-11)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>bump release-please from 16.5.0 to 16.10.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/953\">#953</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/d7e88e0fd9e1a56d1075f610183d571f8347ff9b\">d7e88e0</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.1...v4.0.2\">4.0.2</a>\r\n(2023-12-18)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>bump release-please from 16.4.0 to 16.5.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/905\">#905</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/df719633a752e335dfde3e62e037315a25ecf6fc\">df71963</a>)</li>\r\n<li>log release-please version (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/910\">#910</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/2a496d1db5f8860ae46f6066f5dcb73490a99d02\">2a496d1</a>),\r\ncloses <a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/325\">#325</a></li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v4.0.0...v4.0.1\">4.0.1</a>\r\n(2023-12-07)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>bump release-please from 16.3.1 to 16.4.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/897\">#897</a>)\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/2463dad9b20163a40708db720b9fde34c2a2ab0e\">2463dad</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/v3.7.13...v4.0.0\">4.0.0</a>\r\n(2023-12-01)</h2>\r\n<h3>⚠ BREAKING CHANGES</h3>\r\n<ul>\r\n<li>remove most configuration options in favor of manifest configuration\r\nto configure the release-please-action</li>\r\n<li>rewrite in typescript</li>\r\n<li>remove command option in favor of setting <code>release-type</code>\r\nand\r\n<code>skip-github-release</code>/<code>skip-github-pull-request</code></li>\r\n<li>run on node20</li>\r\n<li><strong>deps:</strong> upgrade release-please to v16</li>\r\n<li>v4 release</li>\r\n</ul>\r\n<h3>Features</h3>\r\n<ul>\r\n<li><strong>deps:</strong> upgrade release-please to v16 (<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/9cf05a09b133475347f729dc7d17b023081cc8d3\">9cf05a0</a>)</li>\r\n<li>remove command option in favor of setting <code>release-type</code>\r\nand\r\n<code>skip-github-release</code>/<code>skip-github-pull-request</code>\r\n(<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/9cf05a09b133475347f729dc7d17b023081cc8d3\">9cf05a0</a>)</li>\r\n<li>remove most configuration options in favor of manifest configuration\r\nto configure the release-please-action (<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/9cf05a09b133475347f729dc7d17b023081cc8d3\">9cf05a0</a>)</li>\r\n<li>run on node20 (<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/9cf05a09b133475347f729dc7d17b023081cc8d3\">9cf05a0</a>)</li>\r\n<li>v4 release (<a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/9cf05a09b133475347f729dc7d17b023081cc8d3\">9cf05a0</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/a37ac6e4f6449ce8b3f7607e4d97d0146028dc0b\"><code>a37ac6e</code></a>\r\nchore(main): release 4.1.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/957\">#957</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/733a6d752f7032c519e5e9c677b7bf840e3d1f54\"><code>733a6d7</code></a>\r\nchore: build dist (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/956\">#956</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/863b06fd1cd7f36c1d74d697ddebe3cf5be4c6b0\"><code>863b06f</code></a>\r\nfeat: add <code>changelog-host</code> input to <code>action.yml</code>\r\n(<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/948\">#948</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/078b9b8dda7799db29972b379561ff8e19b08e82\"><code>078b9b8</code></a>\r\nchore(main): release 4.0.3 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/955\">#955</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/4862c13f8c18f1bd9a9d243214c033d402c31d42\"><code>4862c13</code></a>\r\nchore: build dist (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/954\">#954</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/google-github-actions/release-please-action/commit/d7e88e0fd9e1a56d1075f610183d571f8347ff9b\"><code>d7e88e0</code></a>\r\nfix: bump release-please from 16.5.0 to 16.10.0 (<a\r\nhref=\"https://redirect.github.com/google-github-actions/release-please-action/issues/953\">#953</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/google-github-actions/release-please-action/compare/cc61a07e2da466bebbc19b3a7dd01d6aecb20d1e...a37ac6e4f6449ce8b3f7607e4d97d0146028dc0b\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=google-github-actions/release-please-action&package-manager=github_actions&previous-version=4.0.2&new-version=4.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-12T16:01:56-04:00",
          "tree_id": "ae5465824a47ec4e021fa3eb1b1ce1b4cefa6757",
          "url": "https://github.com/runfinch/finch/commit/c63656063476314ecd16e23697b4cdb3a88cf197"
        },
        "date": 1710273934528,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37522905375,
            "unit": "ns/op\t         0.8969 %cpu_avg/op\t        62.50 %cpu_peak/op\t        37.52 cpu_seconds/op\t1218981888 disk_bytes/op\t 1703784 B/op\t   35567 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37522905375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.8969,
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
            "value": 37.52,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1218981888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1703784,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35567,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24333240000,
            "unit": "ns/op\t         1.007 %cpu_avg/op\t        66.67 %cpu_peak/op\t        24.33 cpu_seconds/op\t  85889024 disk_bytes/op\t 1083696 B/op\t   23035 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24333240000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 1.007,
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
            "value": 24.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 85889024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1083696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23035,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 268227042,
            "unit": "ns/op\t         2.389 %cpu_avg/op\t        19.64 %cpu_peak/op\t         0.2682 cpu_seconds/op\t      1024 disk_bytes/op\t   22670 B/op\t     299 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 268227042,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.389,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.64,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2682,
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
            "value": 22670,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 299,
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
          "id": "58c63b3dad9564bf8bae74258c3059b8bbe78a2c",
          "message": "ci(deps): Bump peter-evans/create-pull-request from 6.0.1 to 6.0.2 (#853)\n\nBumps\r\n[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nfrom 6.0.1 to 6.0.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/releases\">peter-evans/create-pull-request's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>Create Pull Request v6.0.2</h2>\r\n<p>⚡ Improves performance in some cases where the action rebases changes\r\non to the specified <code>base</code>.</p>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>build(deps-dev): bump eslint-plugin-github from 4.10.1 to 4.10.2 by\r\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2797\">peter-evans/create-pull-request#2797</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.18 to\r\n18.19.21 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2798\">peter-evans/create-pull-request#2798</a></li>\r\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.21 to\r\n18.19.23 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2811\">peter-evans/create-pull-request#2811</a></li>\r\n<li>perf: shallow fetch the actual base when rebasing from working base\r\nby <a\r\nhref=\"https://github.com/peter-evans\"><code>@​peter-evans</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2816\">peter-evans/create-pull-request#2816</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/webmonarch\"><code>@​webmonarch</code></a> made\r\ntheir first contribution in <a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/2816\">peter-evans/create-pull-request#2816</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v6.0.1...v6.0.2\">https://github.com/peter-evans/create-pull-request/compare/v6.0.1...v6.0.2</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/70a41aba780001da0a30141984ae2a0c95d8704e\"><code>70a41ab</code></a>\r\nperf: shallow fetch the actual base when rebasing from working base (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2816\">#2816</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/57a101480a00db37082a7c7d3348bf2075d3a6e8\"><code>57a1014</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.21 to\r\n18.19.23 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2811\">#2811</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/b3a2c5d525a1eb75e75c781e45a1bf3bfc23bdc6\"><code>b3a2c5d</code></a>\r\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.18 to\r\n18.19.21 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2798\">#2798</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/02c7da59e880d01b07e68afd0370a3399f08b42a\"><code>02c7da5</code></a>\r\nbuild(deps-dev): bump eslint-plugin-github from 4.10.1 to 4.10.2 (<a\r\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/2797\">#2797</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/peter-evans/create-pull-request/commit/bac6da8071ada152cce76cfbd24b54b7190ad799\"><code>bac6da8</code></a>\r\ndocs: update description of delete-branch</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/peter-evans/create-pull-request/compare/a4f52f8033a6168103c2538976c07b467e8163bc...70a41aba780001da0a30141984ae2a0c95d8704e\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=peter-evans/create-pull-request&package-manager=github_actions&previous-version=6.0.1&new-version=6.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T09:21:30-07:00",
          "tree_id": "ad7471e26ddd23b2329b65605afcfe782ff93dfe",
          "url": "https://github.com/runfinch/finch/commit/58c63b3dad9564bf8bae74258c3059b8bbe78a2c"
        },
        "date": 1710347107626,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 37763872416,
            "unit": "ns/op\t         0.3730 %cpu_avg/op\t        40.00 %cpu_peak/op\t        37.76 cpu_seconds/op\t1431183360 disk_bytes/op\t 1713160 B/op\t   35771 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37763872416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.373,
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
            "value": 37.76,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1431183360,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1713160,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35771,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 20113225708,
            "unit": "ns/op\t         0.6314 %cpu_avg/op\t        42.86 %cpu_peak/op\t        20.11 cpu_seconds/op\t  16809984 disk_bytes/op\t  908648 B/op\t   19079 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 20113225708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.6314,
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
            "value": 20.11,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16809984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 908648,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 19079,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 276611781,
            "unit": "ns/op\t         1.387 %cpu_avg/op\t        13.75 %cpu_peak/op\t         0.2765 cpu_seconds/op\t         0 disk_bytes/op\t   22628 B/op\t     306 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 276611781,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.387,
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
            "value": 0.2765,
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
            "value": 22628,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 306,
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
          "id": "b30fc48d234eda8d3c1192a5c8b96165ed08cfd9",
          "message": "ci(deps): Bump actions/checkout from 4.1.1 to 4.1.2 (#851)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4.1.1\r\nto 4.1.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v4.1.2</h2>\r\n<p>We are investigating the following issue with this release and have\r\nrolled-back the <code>v4</code> tag to point to <code>v4.1.1</code></p>\r\n<ul>\r\n<li><code>sparse-checkout</code> is not available on git versions prior\r\nto 2.27.0 (see <a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1651\">actions/checkout#1651</a>)</li>\r\n</ul>\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>Fix: Disable sparse checkout whenever <code>sparse-checkout</code>\r\noption is not present <a\r\nhref=\"https://github.com/dscho\"><code>@​dscho</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1598\">actions/checkout#1598</a></li>\r\n<li>Bump tough-cookie from 4.0.0 to 4.1.3 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1406\">actions/checkout#1406</a></li>\r\n<li>Bump <code>@​babel/traverse</code> from 7.20.5 to 7.24.0 by <a\r\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1642\">actions/checkout#1642</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/jww3\"><code>@​jww3</code></a> made their\r\nfirst contribution in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1616\">actions/checkout#1616</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/actions/checkout/compare/v4.1.1...v4.1.2\">https://github.com/actions/checkout/compare/v4.1.1...v4.1.2</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h1>Changelog</h1>\r\n<h2>v4.1.2</h2>\r\n<ul>\r\n<li>Fix: Disable sparse checkout whenever <code>sparse-checkout</code>\r\noption is not present <a\r\nhref=\"https://github.com/dscho\"><code>@​dscho</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1598\">actions/checkout#1598</a></li>\r\n</ul>\r\n<h2>v4.1.1</h2>\r\n<ul>\r\n<li>Correct link to GitHub Docs by <a\r\nhref=\"https://github.com/peterbe\"><code>@​peterbe</code></a> in <a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1511\">actions/checkout#1511</a></li>\r\n<li>Link to release page from what's new section by <a\r\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\r\n<a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1514\">actions/checkout#1514</a></li>\r\n</ul>\r\n<h2>v4.1.0</h2>\r\n<ul>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1396\">Add\r\nsupport for partial checkout filters</a></li>\r\n</ul>\r\n<h2>v4.0.0</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1067\">Support\r\nfetching without the --progress option</a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1436\">Update to\r\nnode20</a></li>\r\n</ul>\r\n<h2>v3.6.0</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1377\">Fix: Mark\r\ntest scripts with Bash'isms to be run via Bash</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/579\">Add\r\noption to fetch tags even if fetch-depth &gt; 0</a></li>\r\n</ul>\r\n<h2>v3.5.3</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1196\">Fix:\r\nCheckout fail in self-hosted runners when faulty submodule are\r\nchecked-in</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1287\">Fix\r\ntypos found by codespell</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1369\">Add\r\nsupport for sparse checkouts</a></li>\r\n</ul>\r\n<h2>v3.5.2</h2>\r\n<ul>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1289\">Fix\r\napi endpoint for GHES</a></li>\r\n</ul>\r\n<h2>v3.5.1</h2>\r\n<ul>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1246\">Fix\r\nslow checkout on Windows</a></li>\r\n</ul>\r\n<h2>v3.5.0</h2>\r\n<ul>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1237\">Add\r\nnew public key for known_hosts</a></li>\r\n</ul>\r\n<h2>v3.4.0</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1209\">Upgrade\r\ncodeql actions to v2</a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1210\">Upgrade\r\ndependencies</a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1225\">Upgrade\r\n<code>@​actions/io</code></a></li>\r\n</ul>\r\n<h2>v3.3.0</h2>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1045\">Implement\r\nbranch list using callbacks from exec function</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1050\">Add\r\nin explicit reference to private checkout options</a></li>\r\n<li>[Fix comment typos (that got added in <a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/770\">#770</a>)](<a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1057\">actions/checkout#1057</a>)</li>\r\n</ul>\r\n<h2>v3.2.0</h2>\r\n<ul>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/942\">Add\r\nGitHub Action to perform release</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/967\">Fix\r\nstatus badge</a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1002\">Replace\r\ndatadog/squid with ubuntu/squid Docker image</a></li>\r\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/964\">Wrap\r\npipeline commands for submoduleForeach in quotes</a></li>\r\n<li><a\r\nhref=\"https://redirect.github.com/actions/checkout/pull/1029\">Update\r\n<code>@​actions/io</code> to 1.1.2</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/9bb56186c3b09b4f86b1c65136769dd318469633\"><code>9bb5618</code></a>\r\nPrep for release of v4.1.2 (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1649\">#1649</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/8eb1f6a495037164bea451156472f35fdd6bafc0\"><code>8eb1f6a</code></a>\r\nBump <code>@​babel/traverse</code> from 7.20.5 to 7.24.0 (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1642\">#1642</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/556e4c3cb0b8b54b734286d5439adadcb0a8cb92\"><code>556e4c3</code></a>\r\nBump tough-cookie from 4.0.0 to 4.1.3 (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1406\">#1406</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/b32f140b0c872d58512e0a66172253c302617b90\"><code>b32f140</code></a>\r\nWarn on attempts to publish <code>test-ubuntu-git</code> from non-main\r\nbranch. (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1623\">#1623</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/2650dbd060003e3b5ae211e4358852f336b682a7\"><code>2650dbd</code></a>\r\nGive <code>test-ubuntu-git</code> its own <code>README</code> (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1620\">#1620</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/aadec899646c8e0f34c52d9219c2faac36626b55\"><code>aadec89</code></a>\r\nExplicitly disable sparse checkout unless asked for (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1598\">#1598</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/df0bcddf6d6823307c716b56a7ef9c3b25078874\"><code>df0bcdd</code></a>\r\nRefine workflow for generating <code>test-ubuntu-git</code> (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1617\">#1617</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/actions/checkout/commit/473055ba18d6d2da209cd46110aadb9275e3194e\"><code>473055b</code></a>\r\nCreate <code>test-ubuntu-git</code> Docker Container for Proxy Tests (<a\r\nhref=\"https://redirect.github.com/actions/checkout/issues/1616\">#1616</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/actions/checkout/compare/b4ffde65f46336ab88eb53be808477a3936bae11...9bb56186c3b09b4f86b1c65136769dd318469633\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4.1.1&new-version=4.1.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T09:24:46-07:00",
          "tree_id": "42a572e663cdc4f3be0b0053b027d6e61b69f202",
          "url": "https://github.com/runfinch/finch/commit/b30fc48d234eda8d3c1192a5c8b96165ed08cfd9"
        },
        "date": 1710347312714,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38712208834,
            "unit": "ns/op\t         0.4930 %cpu_avg/op\t        44.44 %cpu_peak/op\t        38.71 cpu_seconds/op\t1301159936 disk_bytes/op\t 1752632 B/op\t   36670 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38712208834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.493,
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
            "value": 38.71,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1301159936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1752632,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36670,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24404266875,
            "unit": "ns/op\t         0.4606 %cpu_avg/op\t        62.50 %cpu_peak/op\t        24.40 cpu_seconds/op\t  87715840 disk_bytes/op\t 1084616 B/op\t   23094 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24404266875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4606,
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
            "value": 24.4,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 87715840,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1084616,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23094,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 267865125,
            "unit": "ns/op\t         1.226 %cpu_avg/op\t        18.33 %cpu_peak/op\t         0.2678 cpu_seconds/op\t         0 disk_bytes/op\t   22118 B/op\t     297 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 267865125,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.226,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.33,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2678,
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
            "value": 22118,
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
          "id": "a9c9fc19cfc1b5327ae47ac571e2614762a6b351",
          "message": "ci(deps): Bump softprops/action-gh-release from 1 to 2 (#848)\n\nBumps\r\n[softprops/action-gh-release](https://github.com/softprops/action-gh-release)\r\nfrom 1 to 2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/softprops/action-gh-release/releases\">softprops/action-gh-release's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.0.0</h2>\r\n<ul>\r\n<li>update actions.yml declaration to node20 to address warnings</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md\">softprops/action-gh-release's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.0.4 (unreleased)</h2>\r\n<h2>2.0.3</h2>\r\n<ul>\r\n<li>Declare <code>make_latest</code> as an input field in\r\n<code>action.yml</code> <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/419\">#419</a></li>\r\n</ul>\r\n<h2>2.0.2</h2>\r\n<ul>\r\n<li>Revisit approach to <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/384\">#384</a>\r\nmaking unresolved pattern failures opt-in <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/417\">#417</a></li>\r\n</ul>\r\n<h2>2.0.1</h2>\r\n<ul>\r\n<li>Add support for make_latest property <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/304\">#304</a>\r\nvia <a\r\nhref=\"https://github.com/samueljseay\"><code>@​samueljseay</code></a></li>\r\n<li>Fail run if files setting contains invalid patterns <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/384\">#384</a>\r\nvia <a\r\nhref=\"https://github.com/rpdelaney\"><code>@​rpdelaney</code></a></li>\r\n<li>Add support for proxy env variables (don't use node-fetch) <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/386/\">#386</a>\r\nvia <a\r\nhref=\"https://github.com/timor-raiman\"><code>@​timor-raiman</code></a></li>\r\n<li>Suppress confusing warning when input_files is empty <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/389\">#389</a>\r\nvia <a href=\"https://github.com/Drowze\"><code>@​Drowze</code></a></li>\r\n</ul>\r\n<h2>2.0.0</h2>\r\n<ul>\r\n<li><code>2.0.0</code>!? this release corrects a disjunction between git\r\ntag versions used in the marketplace and versions list this file.\r\nPrevious versions should have really been 1.*. Going forward this should\r\nbe better aligned.</li>\r\n<li>Upgrade action.yml declaration to node20 to address\r\ndeprecations</li>\r\n</ul>\r\n<h2>0.1.15</h2>\r\n<ul>\r\n<li>Upgrade to action.yml declaration to node16 to address\r\ndeprecations</li>\r\n<li>Upgrade dependencies</li>\r\n<li>Add <code>asset</code> output as a JSON array containing information\r\nabout the uploaded assets</li>\r\n</ul>\r\n<h2>0.1.14</h2>\r\n<ul>\r\n<li>provides an new workflow input option\r\n<code>generate_release_notes</code> which when set to true will\r\nautomatically generate release notes for you based on GitHub activity <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/179\">#179</a>.\r\nPlease see the <a\r\nhref=\"https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes\">GitHub\r\ndocs for this feature</a> for more information</li>\r\n</ul>\r\n<h2>0.1.13</h2>\r\n<ul>\r\n<li>fix issue with multiple runs concatenating release bodies <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/145\">#145</a></li>\r\n</ul>\r\n<h2>0.1.12</h2>\r\n<ul>\r\n<li>fix bug leading to empty strings subsituted for inputs users don't\r\nprovide breaking api calls <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/144\">#144</a></li>\r\n</ul>\r\n<h2>0.1.11</h2>\r\n<ul>\r\n<li>better error message on release create failed <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/143\">#143</a></li>\r\n</ul>\r\n<h2>0.1.10</h2>\r\n<ul>\r\n<li>fixed error message formatting for file uploads</li>\r\n</ul>\r\n<h2>0.1.9</h2>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/3198ee18f814cdf787321b4a32a26ddbf37acc52\"><code>3198ee1</code></a>\r\nprep release</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/7ee8e0638151a48bb421b567d7d53a07cb158121\"><code>7ee8e06</code></a>\r\ndeclare an update docs for make_latest input (<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/issues/419\">#419</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/d99959edae48b5ffffd7b00da66dcdb0a33a52ee\"><code>d99959e</code></a>\r\nprep release</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/0e39c679e8bac647fe5ad41070fe2295b0393d58\"><code>0e39c67</code></a>\r\nmake pattern error opt in (<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/issues/417\">#417</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/20e085ccc73308c2c8e43ab8da4f8d7ecbb94d4e\"><code>20e085c</code></a>\r\nkick off 2.0.1 release</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/9f5c4d39bc56b5ed07f92f260dd05d33000058a6\"><code>9f5c4d3</code></a>\r\nupdate changelog</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/0bea76b22707a1871a52b97e07c80657071adb76\"><code>0bea76b</code></a>\r\nAdd support for make_latest property (<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/issues/304\">#304</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/762fe13dfbc8921c36ebb81da5626a394a6a5b95\"><code>762fe13</code></a>\r\ntypo in changelog</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/c0f2569fb90b35a0e2b043535a5778f437ec86ea\"><code>c0f2569</code></a>\r\nremove unused script</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/5743e060246b253faba6cb8e051511b63e7639c9\"><code>5743e06</code></a>\r\nupdate changelog</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/softprops/action-gh-release/compare/de2c0eb89ae2a093876385947365aca7b0e5f844...3198ee18f814cdf787321b4a32a26ddbf37acc52\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=softprops/action-gh-release&package-manager=github_actions&previous-version=1&new-version=2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T09:26:39-07:00",
          "tree_id": "bc2ee8975f498997a308ccf181d6be35226fb15d",
          "url": "https://github.com/runfinch/finch/commit/a9c9fc19cfc1b5327ae47ac571e2614762a6b351"
        },
        "date": 1710347422525,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38302110708,
            "unit": "ns/op\t         0.4514 %cpu_avg/op\t        45.45 %cpu_peak/op\t        38.30 cpu_seconds/op\t1258987520 disk_bytes/op\t 1734840 B/op\t   36264 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38302110708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4514,
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
            "value": 38.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1258987520,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1734840,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36264,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24327623917,
            "unit": "ns/op\t         0.5158 %cpu_avg/op\t        50.00 %cpu_peak/op\t        24.33 cpu_seconds/op\t  35647488 disk_bytes/op\t 1083344 B/op\t   23035 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24327623917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5158,
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
            "value": 24.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 35647488,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1083344,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23035,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 253621948,
            "unit": "ns/op\t         1.396 %cpu_avg/op\t        13.75 %cpu_peak/op\t         0.2536 cpu_seconds/op\t      4096 disk_bytes/op\t   21680 B/op\t     285 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 253621948,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.396,
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
            "value": 0.2536,
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
            "value": 21680,
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
          "id": "769ae321828eb5842943a2bf503297543551bdfe",
          "message": "build(deps): Bump github.com/docker/docker from 25.0.3+incompatible to 25.0.4+incompatible (#845)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n25.0.3+incompatible to 25.0.4+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v25.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A25.0.4\">docker/cli,\r\n25.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A25.0.4\">moby/moby,\r\n25.0.4 milestone</a></li>\r\n<li>Deprecated and removed features, see <a\r\nhref=\"https://github.com/docker/cli/blob/v25.0.4/docs/deprecated.md\">Deprecated\r\nFeatures</a>.</li>\r\n<li>Changes to the Engine API, see <a\r\nhref=\"https://github.com/moby/moby/blob/v25.0.4/docs/api/version-history.md\">API\r\nversion history</a>.</li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Restore DNS names for containers in the default &quot;nat&quot;\r\nnetwork on Windows. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47490\">moby/moby#47490</a></li>\r\n<li>Fix <code>docker start</code> failing when used with\r\n<code>--checkpoint</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47466\">moby/moby#47466</a></li>\r\n<li>Don't enforce new validation rules for existing swarm networks <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47482\">moby/moby#47482</a></li>\r\n<li>Restore IP connectivity between the host and containers on an\r\ninternal bridge network. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47481\">moby/moby#47481</a></li>\r\n<li>Fix a regression introduced in v25.0 that prevented the classic\r\nbuilder from ADDing a tar archive with xattrs created on a non-Linux OS\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47483\">moby/moby#47483</a></li>\r\n<li>containerd image store: Fix image pull not emitting <code>Pulling fs\r\nlayer</code> status <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47484\">moby/moby#47484</a></li>\r\n</ul>\r\n<h3>API</h3>\r\n<ul>\r\n<li>To preserve backwards compatibility, read-only mounts are not\r\nrecursive by default when using older clients (API version &lt; v1.44).\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47393\">moby/moby#47393</a></li>\r\n<li><code>GET /images/{id}/json</code> omits the <code>Created</code>\r\nfield (previously it was <code>0001-01-01T00:00:00Z</code>) if the\r\n<code>Created</code> field is missing from the image config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47451\">moby/moby#47451</a></li>\r\n<li>Populate a missing <code>Created</code> field in <code>GET\r\n/images/{id}/json</code> with <code>0001-01-01T00:00:00Z</code> for API\r\nversion &lt;= 1.43. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47387\">moby/moby#47387</a></li>\r\n<li>Fix a regression that caused API socket connection failures to\r\nreport an API version negotiation failure instead. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47470\">moby/moby#47470</a></li>\r\n<li>Preserve supplied endpoint configuration in a container-create API\r\nrequest, when a container-wide MAC address is specified, but\r\n<code>NetworkMode</code> name-or-id is not the same as the name-or-id\r\nused in <code>NetworkSettings.Networks</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47510\">moby/moby#47510</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Upgrade Go runtime to <a\r\nhref=\"https://go.dev/doc/devel/release#go1.21.8\">1.21.8</a>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47503\">moby/moby#47503</a></li>\r\n<li>Upgrade RootlessKit to <a\r\nhref=\"https://github.com/rootless-containers/rootlesskit/releases/tag/v2.0.2\">v2.0.2</a>.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/47508\">moby/moby#47508</a></li>\r\n<li>Upgrade Compose to <a\r\nhref=\"https://github.com/docker/compose/releases/tag/v2.24.7\">v2.24.7</a>.\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/998\">docker/docker-ce-packaging#998</a></li>\r\n<li>Upgrade Buildx to <a\r\nhref=\"https://github.com/docker/buildx/releases/tag/v0.13.0\">v0.13.0</a>.\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/997\">docker/docker-ce-packaging#997</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/moby/moby/compare/v25.0.3...v25.0.4\">https://github.com/moby/moby/compare/v25.0.3...v25.0.4</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/061aa95809be396a6b5542618d8a34b02a21ff77\"><code>061aa95</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47513\">#47513</a>\r\nfrom vvoland/v25.0-47498</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d0d85f6438af71ddd15d0441ec219daba192d4e5\"><code>d0d85f6</code></a>\r\ndaemon: overlay2: remove world writable permission from the lower\r\nfile</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5d6679345c8a9eed569d358857c0b974031c26e5\"><code>5d66793</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47508\">#47508</a>\r\nfrom vvoland/v25.0-47504</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ef1fa235cde1c2fdeeb26f9c6309421a3b23b846\"><code>ef1fa23</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47510\">#47510</a>\r\nfrom akerouanton/25.0-47441_mac_addr_config_migration</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0451b287dc4bef2fe95ebc7628bb89e3f8b00fb3\"><code>0451b28</code></a>\r\nDon't create endpoint config for MAC addr config migration</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d27fe2558dcede92e30a7c4db0e779248d9b2c58\"><code>d27fe25</code></a>\r\ndockerd-rootless-setuptool.sh: check RootlessKit functionality</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/77de535364e099a75ba5a1fe5a7e1ca6b2a3dad3\"><code>77de535</code></a>\r\nDockerfile: update RootlessKit to v2.0.2</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9e526bc3943c9db4cc3ffc27586ecfba82e7d581\"><code>9e526bc</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47503\">#47503</a>\r\nfrom vvoland/v25.0-47502</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/2d347024d1ab2dea0a70a927fe6a6dd49e93b33d\"><code>2d34702</code></a>\r\nupdate to go1.21.8</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/51e876cd964c4bb1f0a7c1bc24ecab9321b3ff1c\"><code>51e876c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/47493\">#47493</a>\r\nfrom akerouanton/25.0-47370_windows_natnw_dns_test</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v25.0.3...v25.0.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=25.0.3+incompatible&new-version=25.0.4+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T09:27:23-07:00",
          "tree_id": "6ce8d7e213ccaebdee4e378f3bb653857e8c26ac",
          "url": "https://github.com/runfinch/finch/commit/769ae321828eb5842943a2bf503297543551bdfe"
        },
        "date": 1710347532219,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38385054750,
            "unit": "ns/op\t         0.4237 %cpu_avg/op\t        45.45 %cpu_peak/op\t        38.39 cpu_seconds/op\t1287798784 disk_bytes/op\t 1741112 B/op\t   36393 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38385054750,
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
            "value": 45.45,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 38.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1287798784,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1741112,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36393,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24314042166,
            "unit": "ns/op\t         0.3878 %cpu_avg/op\t        63.64 %cpu_peak/op\t        24.31 cpu_seconds/op\t 180097024 disk_bytes/op\t 1082496 B/op\t   23022 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24314042166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3878,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 63.64,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.31,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 180097024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1082496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23022,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 278433156,
            "unit": "ns/op\t         0.3461 %cpu_avg/op\t         8.854 %cpu_peak/op\t         0.2784 cpu_seconds/op\t      4096 disk_bytes/op\t   22562 B/op\t     307 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 278433156,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3461,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.854,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2784,
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
            "value": 22562,
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
          "id": "f8883b2535e9fb655eaf86f0765e4f46d5d83b0a",
          "message": "build(deps): Bump golang.org/x/tools from 0.18.0 to 0.19.0 (#844)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.18.0\r\nto 0.19.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/7656c4c657688cae30795365d2a5f30d6f18be7f\"><code>7656c4c</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5bf7d005299769e9d476813f09efd2a4296d5fe9\"><code>5bf7d00</code></a>\r\ncmd/callgraph: add 'posn' template helper</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/283fce21c13672b609664a88e2575aaae16a7ddb\"><code>283fce2</code></a>\r\nx/tools: drop go1.18 support</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/7f348c7a4c28c9162056530f6be369bb179e05a5\"><code>7f348c7</code></a>\r\ninternal/versions: updates the meaning of FileVersions.</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/38b0e9bfdba8d4762d50481319449a59e0a8adb6\"><code>38b0e9b</code></a>\r\nx/tools: add explicit Unalias operations</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/a6c03c86fe37d3a870a08c8814c242a6a4105726\"><code>a6c03c8</code></a>\r\nx/tools: update telemetry import (new Start API)</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/1f7dbdf01abbd56f7fb4ac2c61ea25ff673633af\"><code>1f7dbdf</code></a>\r\ngopls/internal/cache: add debug assertions for bug report</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/4d4e8028747180d2fc1cdcef0b7de569666c5984\"><code>4d4e802</code></a>\r\ngopls/doc: address additional comments on workspace.md</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/abe5874e805f7fe006ae6b906b3d08bbdedd23af\"><code>abe5874</code></a>\r\ngopls/internal/analysis: add fill switch cases code action</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/fc70354354e63fa88b8cba95d89e3115bdd717dd\"><code>fc70354</code></a>\r\ngopls/internal/test: add test for NPE in control flow highlighting</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.18.0...v0.19.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.18.0&new-version=0.19.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T09:28:26-07:00",
          "tree_id": "a7502bc081199241cd35b36a7c46541b041ccfb9",
          "url": "https://github.com/runfinch/finch/commit/f8883b2535e9fb655eaf86f0765e4f46d5d83b0a"
        },
        "date": 1710347646061,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 38592486875,
            "unit": "ns/op\t         0.4248 %cpu_avg/op\t        62.50 %cpu_peak/op\t        38.59 cpu_seconds/op\t1286168576 disk_bytes/op\t 1747792 B/op\t   36567 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38592486875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4248,
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
            "value": 38.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1286168576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1747792,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36567,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27444723541,
            "unit": "ns/op\t         0.4885 %cpu_avg/op\t        60.00 %cpu_peak/op\t        27.44 cpu_seconds/op\t 124903424 disk_bytes/op\t 1239632 B/op\t   25962 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27444723541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4885,
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
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 27.44,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 124903424,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1239632,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 25962,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 254251000,
            "unit": "ns/op\t         1.332 %cpu_avg/op\t        13.86 %cpu_peak/op\t         0.2542 cpu_seconds/op\t   -185344 disk_bytes/op\t   21940 B/op\t     287 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 254251000,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.332,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.86,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2542,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -185344,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 21940,
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
          "id": "fbd83511f7bf8cd0c8e39322ff59fd0a783aa803",
          "message": "ci(deps): Bump softprops/action-gh-release from 2.0.3 to 2.0.4 (#854)\n\nBumps\r\n[softprops/action-gh-release](https://github.com/softprops/action-gh-release)\r\nfrom 2.0.3 to 2.0.4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/softprops/action-gh-release/releases\">softprops/action-gh-release's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.0.4</h2>\r\n<ul>\r\n<li>Minor follow up to <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/417\">#417</a>.\r\n<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/425\">#425</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/softprops/action-gh-release/blob/master/CHANGELOG.md\">softprops/action-gh-release's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.0.4</h2>\r\n<ul>\r\n<li>Minor follow up to <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/417\">#417</a>.\r\n<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/425\">#425</a></li>\r\n</ul>\r\n<h2>2.0.3</h2>\r\n<ul>\r\n<li>Declare <code>make_latest</code> as an input field in\r\n<code>action.yml</code> <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/419\">#419</a></li>\r\n</ul>\r\n<h2>2.0.2</h2>\r\n<ul>\r\n<li>Revisit approach to <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/384\">#384</a>\r\nmaking unresolved pattern failures opt-in <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/417\">#417</a></li>\r\n</ul>\r\n<h2>2.0.1</h2>\r\n<ul>\r\n<li>Add support for make_latest property <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/304\">#304</a>\r\nvia <a\r\nhref=\"https://github.com/samueljseay\"><code>@​samueljseay</code></a></li>\r\n<li>Fail run if files setting contains invalid patterns <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/384\">#384</a>\r\nvia <a\r\nhref=\"https://github.com/rpdelaney\"><code>@​rpdelaney</code></a></li>\r\n<li>Add support for proxy env variables (don't use node-fetch) <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/386/\">#386</a>\r\nvia <a\r\nhref=\"https://github.com/timor-raiman\"><code>@​timor-raiman</code></a></li>\r\n<li>Suppress confusing warning when input_files is empty <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/389\">#389</a>\r\nvia <a href=\"https://github.com/Drowze\"><code>@​Drowze</code></a></li>\r\n</ul>\r\n<h2>2.0.0</h2>\r\n<ul>\r\n<li><code>2.0.0</code>!? this release corrects a disjunction between git\r\ntag versions used in the marketplace and versions list this file.\r\nPrevious versions should have really been 1.*. Going forward this should\r\nbe better aligned.</li>\r\n<li>Upgrade action.yml declaration to node20 to address\r\ndeprecations</li>\r\n</ul>\r\n<h2>0.1.15</h2>\r\n<ul>\r\n<li>Upgrade to action.yml declaration to node16 to address\r\ndeprecations</li>\r\n<li>Upgrade dependencies</li>\r\n<li>Add <code>asset</code> output as a JSON array containing information\r\nabout the uploaded assets</li>\r\n</ul>\r\n<h2>0.1.14</h2>\r\n<ul>\r\n<li>provides an new workflow input option\r\n<code>generate_release_notes</code> which when set to true will\r\nautomatically generate release notes for you based on GitHub activity <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/179\">#179</a>.\r\nPlease see the <a\r\nhref=\"https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes\">GitHub\r\ndocs for this feature</a> for more information</li>\r\n</ul>\r\n<h2>0.1.13</h2>\r\n<ul>\r\n<li>fix issue with multiple runs concatenating release bodies <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/145\">#145</a></li>\r\n</ul>\r\n<h2>0.1.12</h2>\r\n<ul>\r\n<li>fix bug leading to empty strings subsituted for inputs users don't\r\nprovide breaking api calls <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/144\">#144</a></li>\r\n</ul>\r\n<h2>0.1.11</h2>\r\n<ul>\r\n<li>better error message on release create failed <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/pull/143\">#143</a></li>\r\n</ul>\r\n<h2>0.1.10</h2>\r\n<ul>\r\n<li>fixed error message formatting for file uploads</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/9d7c94cfd0a1f3ed45544c887983e9fa900f0564\"><code>9d7c94c</code></a>\r\nbuild</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/6ffed59e5547e6594ba7b3e49883af40801fa1df\"><code>6ffed59</code></a>\r\nfollowup to <a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/issues/417\">#417</a>\r\n(<a\r\nhref=\"https://redirect.github.com/softprops/action-gh-release/issues/425\">#425</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/softprops/action-gh-release/commit/1ce812a7bd7fa6c191ed3334eeace31579a98f25\"><code>1ce812a</code></a>\r\npackage script for updating git tag</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/softprops/action-gh-release/compare/3198ee18f814cdf787321b4a32a26ddbf37acc52...9d7c94cfd0a1f3ed45544c887983e9fa900f0564\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=softprops/action-gh-release&package-manager=github_actions&previous-version=2.0.3&new-version=2.0.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-13T11:01:13-07:00",
          "tree_id": "4555e08b1355ef0aaa6c7094c96d7cc68ac4726c",
          "url": "https://github.com/runfinch/finch/commit/fbd83511f7bf8cd0c8e39322ff59fd0a783aa803"
        },
        "date": 1710356131730,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 39706621416,
            "unit": "ns/op\t         0.4487 %cpu_avg/op\t        55.56 %cpu_peak/op\t        39.71 cpu_seconds/op\t1158856704 disk_bytes/op\t 1793064 B/op\t   37585 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 39706621416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4487,
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
            "value": 39.71,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1158856704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1793064,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 37585,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 24213276792,
            "unit": "ns/op\t         0.4995 %cpu_avg/op\t        37.50 %cpu_peak/op\t        24.21 cpu_seconds/op\t 146898944 disk_bytes/op\t 1077248 B/op\t   22910 allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24213276792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4995,
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
            "value": 24.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 146898944,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1077248,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22910,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 264431594,
            "unit": "ns/op\t         1.820 %cpu_avg/op\t        16.19 %cpu_peak/op\t         0.2644 cpu_seconds/op\t      4096 disk_bytes/op\t   22376 B/op\t     297 allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 264431594,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.82,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.19,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.2644,
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
            "value": 22376,
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
      }
    ]
  }
}