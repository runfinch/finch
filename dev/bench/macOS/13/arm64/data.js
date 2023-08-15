window.BENCHMARK_DATA = {
  "lastUpdate": 1692078181820,
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
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 71582241583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4146",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "71.58",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2587455488",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3174808",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "67696",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27115681958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4361",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "27.12",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "733184",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1198032",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25669",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 370115208,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.086",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "19.44",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3701",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26080",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "393",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1354717334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.7051",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.355",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3526656",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68168",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1328",
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
          "id": "76b31c0c453935f22588523f65888e103581cd89",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.3 to 3.23.4 (#389)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.3 to 3.23.4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.4</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>ci(lint): correct gci linter by <a\r\nhref=\"https://github.com/mmorel-35\"><code>@​mmorel-35</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1443\">shirou/gopsutil#1443</a></li>\r\n</ul>\r\n<h3>process</h3>\r\n<ul>\r\n<li>refactor(process): compare error with <code>errors.Is</code> by <a\r\nhref=\"https://github.com/Juneezee\"><code>@​Juneezee</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1453\">shirou/gopsutil#1453</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>Add github SBOM Generator by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1447\">shirou/gopsutil#1447</a></li>\r\n<li>Add Security Policy by <a\r\nhref=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1450\">shirou/gopsutil#1450</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1450\">shirou/gopsutil#1450</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4\">https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/db89d12010909c1e89e9c964834ac9954d0fe786\"><code>db89d12</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1453\">#1453</a>\r\nfrom Juneezee/refactor/errors.Is</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/0439039205d2c471a0c69ebdfa33a378a7c95bee\"><code>0439039</code></a>\r\nrefactor(process): compare error with <code>errors.Is</code></li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/17fac7cbbaa1b063b32cd546dc134c61e51ecd3d\"><code>17fac7c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1450\">#1450</a>\r\nfrom gabibguti/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/2d2db8fee9d7870450586fd8f4a6754dbd1a3c73\"><code>2d2db8f</code></a>\r\nCreate SECURITY.md</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/10f213c448609a6ea9ff3acce5634e7da8b7d334\"><code>10f213c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1448\">#1448</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d6ee47e5dc435944895c2aa4425f5df9af2d42f7\"><code>d6ee47e</code></a>\r\nchore(deps): bump actions/upload-artifact from 3.1.0 to 3.1.2</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/cf428f8c7251cccd3f918ac920946325630f5ff5\"><code>cf428f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1443\">#1443</a>\r\nfrom mmorel-35/linter</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/755bcab7b93f533d272510e8c063af15aad6abb5\"><code>755bcab</code></a>\r\nUpdate branch of sbom_generator.yml</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/21a646bd82f17464e572c66723c23a29da596e3c\"><code>21a646b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1447\">#1447</a>\r\nfrom shirou/feature/add_sbom_github_actions</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/bcf3fe925c880cd4e8dbd3db29b1c60ecae09e9c\"><code>bcf3fe9</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1445\">#1445</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.3&new-version=3.23.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T14:04:07-04:00",
          "tree_id": "f741032f7d876d262db9b5af37cdc5bbea24e279",
          "url": "https://github.com/runfinch/finch/commit/76b31c0c453935f22588523f65888e103581cd89"
        },
        "date": 1683137425436,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 71382328000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4381",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "71.38",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2586419200",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3174312",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "67673",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23947762083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5122",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.95",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "25554944",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1063584",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22626",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 357500167,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.465",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "17.86",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3574",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25482",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "383",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1353868292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.7753",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.354",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20307968",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68984",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1330",
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
          "id": "710299445ed287c67114b277be7bd2a29715956b",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.3 (#390)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.2 to 2.9.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.9.3</h2>\r\n<h2>2.9.3</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Add RenderTimeline to GinkgoT() [c0c77b6]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>update Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a>\r\n[227c662]</li>\r\n<li>add newlines to GinkgoLogr (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1170\">#1170</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1171\">#1171</a>)\r\n[0de0e7c]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)\r\n[8b925ab]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)\r\n[e3795a4]</li>\r\n<li>Bump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)\r\n[b453793]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)\r\n[73ed75b]</li>\r\n<li>Bump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)\r\n[0a2bc64]</li>\r\n<li>Bump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)\r\n[f41c557]</li>\r\n<li>Bump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)\r\n[8e423e5]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.9.3</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Add RenderTimeline to GinkgoT() [c0c77b6]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>update Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a>\r\n[227c662]</li>\r\n<li>add newlines to GinkgoLogr (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1170\">#1170</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1171\">#1171</a>)\r\n[0de0e7c]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)\r\n[8b925ab]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)\r\n[e3795a4]</li>\r\n<li>Bump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)\r\n[b453793]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)\r\n[73ed75b]</li>\r\n<li>Bump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)\r\n[0a2bc64]</li>\r\n<li>Bump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)\r\n[f41c557]</li>\r\n<li>Bump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)\r\n[8e423e5]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/7a8249ea52743eee1a5cf127a1959c2169b029c8\"><code>7a8249e</code></a>\r\nv2.9.3</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/c0c77b692d00eaa5e93d18b1e6ff837ff10a7c33\"><code>c0c77b6</code></a>\r\nAdd RenderTimeline to GinkgoT()</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8b925abe6639e4bfd62b9defc35c5da41da08d6a\"><code>8b925ab</code></a>\r\nBump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/e3795a44abfdf52cfa671bfa545eac23bfcbf435\"><code>e3795a4</code></a>\r\nBump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/b453793b607ade42b5f4192ea53cd6a4244a73ff\"><code>b453793</code></a>\r\nBump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/73ed75b9f74756a058df23dc31b39bcc463de0cb\"><code>73ed75b</code></a>\r\nBump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0a2bc6438f77c5eb598c0e2c3162cf8e010f54b5\"><code>0a2bc64</code></a>\r\nBump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/f41c557d462194fe704bd919af62badeb416a2c7\"><code>f41c557</code></a>\r\nBump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8e423e5e15be0b26c9e3d9ca2a9a05e513814c7d\"><code>8e423e5</code></a>\r\nBump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/227c662e819019ad42d3b6f3144cba3caa65023d\"><code>227c662</code></a>\r\nupdqte Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a></li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.2...v2.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.2&new-version=2.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T14:13:23-04:00",
          "tree_id": "5e835791535734dd48321218c7346d8ad9ec9c0b",
          "url": "https://github.com/runfinch/finch/commit/710299445ed287c67114b277be7bd2a29715956b"
        },
        "date": 1683137907781,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 66393193541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4296",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "58.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "66.39",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2615177216",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2963680",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "62888",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23964867375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5141",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.96",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1286144",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1067792",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22709",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 379624653,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.255",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.52",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3796",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26754",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "407",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1322227459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5695",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.322",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3530752",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67328",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1299",
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
          "id": "3e0581cc0f86efcd9ce7b7dc8c9384fb1e6af785",
          "message": "build(deps): Bump github.com/docker/docker from 23.0.3+incompatible to 23.0.5+incompatible (#382)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n23.0.3+incompatible to 23.0.5+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v23.0.5</h2>\r\n<h2>23.0.5</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/milestone/79?closed=1\">docker/cli,\r\n23.0.5 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/milestone/118?closed=1\">moby/moby,\r\n23.0.5 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Add the <code>--all</code> / <code>-a</code> option when pruning\r\nvolumes. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4229\">docker/cli#4229</a></li>\r\n<li>Add <code>--format=json</code> for <code>docker info</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4230\">docker/cli#4320</a></li>\r\n<li>Fix log loss with the AWSLogs log driver. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45350\">moby/moby#45350</a></li>\r\n<li>Fix a regression introduced in v23.0.4 where dockerd would refuse to\r\nstart if the fixed-cidr config parameter is provided but not bip. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45403\">moby/moby#45403</a></li>\r\n<li>Fix a panic in libnetwork during daemon start <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45376\">moby/moby#45376</a></li>\r\n<li>Fix &quot;tag&quot; event not being sent when an image is built with\r\n<code>buildx</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45410\">moby/moby#45410</a></li>\r\n</ul>\r\n<h3>Packaging Updates</h3>\r\n<ul>\r\n<li>Upgrade Compose to <code>2.17.3</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/883\">docker/docker-ce-packaging#883</a></li>\r\n</ul>\r\n<h2>v23.0.4</h2>\r\n<h2>23.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/milestone/77?closed=1\">docker/cli,\r\n23.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/milestone/117?closed=1\">moby/moby,\r\n23.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a performance regression in Docker CLI 23.0.0 <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4141\">docker/cli#4141</a>.</li>\r\n<li>Fix progress indicator on <code>docker cp</code> not functioning as\r\nintended <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4157\">docker/cli#4157</a>.</li>\r\n<li>Fix shell completion for <code>docker compose --file</code> <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4177\">docker/cli#4177</a>.</li>\r\n<li>Fix an error caused by incorrect handling of\r\n&quot;default-address-pools&quot; in <code>daemon.json</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45246\">moby/moby#45246</a>.</li>\r\n</ul>\r\n<h3>Packaging Updates</h3>\r\n<ul>\r\n<li>Fix missing packages for CentOS 9 Stream.</li>\r\n<li>Upgrade Go to <code>1.19.8</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/878\">docker/docker-ce-packaging#878</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4164\">docker/cli#4164</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45277\">moby/moby#45277</a>,\r\nwhich contains fixes for <a\r\nhref=\"https://github.com/advisories/GHSA-fp86-2355-v99r\">CVE-2023-24537</a>,\r\n<a\r\nhref=\"https://github.com/advisories/GHSA-v4m2-x4rp-hv22\">CVE-2023-24538</a>,\r\n<a\r\nhref=\"https://github.com/advisories/GHSA-8v5j-pwr7-w5f8\">CVE-2023-24534</a>,\r\nand <a\r\nhref=\"https://github.com/advisories/GHSA-9f7g-gqwh-jpf5\">CVE-2023-24536</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/94d3ad69cc598b5a8eb8a643d6999375953512e8\"><code>94d3ad6</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45410\">#45410</a>\r\nfrom rumpl/23.0_backport-fix-buildx-tag-events</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/933a9f83b7cda9d1fc49319a24a4b87f4aa1909c\"><code>933a9f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45407\">#45407</a>\r\nfrom thaJeztah/23.0_backport_vendor_runc_1.1.5</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/fe0a414613e9033df12ff3bccb61204d8facc9e8\"><code>fe0a414</code></a>\r\nUse the image service instead of the reference store for tagging</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1b1230eaaf00f9a78bd7e1a624b1d8b95db356df\"><code>1b1230e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45375\">#45375</a>\r\nfrom thaJeztah/23.0_backport_bump_swarmkit</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1b263035af5004a440ecb6fea7225d6068073765\"><code>1b26303</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45374\">#45374</a>\r\nfrom thaJeztah/23.0_backport_stfu_grpc</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/682542fd081646d1587720481ac5a4ea55b75337\"><code>682542f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45373\">#45373</a>\r\nfrom thaJeztah/23.0_backport_assorted_test_and_pack...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/40ec0eb9fe21d5fe8a9e98c8aa26e49a442f6036\"><code>40ec0eb</code></a>\r\nvendor: github.com/opencontainers/runc v1.1.5</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9af6762d34a0b47006472b319803d85834e216fd\"><code>9af6762</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45403\">#45403</a>\r\nfrom akerouanton/23.0-cherrypick-2d31697</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0b6449a4772f01118cf7ba9645d737fc94e773e1\"><code>0b6449a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45376\">#45376</a>\r\nfrom thaJeztah/23.0_backport_delete_network_more_at...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/227d3f39a354caaf5252f7a29d78aad92e8bfba2\"><code>227d3f3</code></a>\r\ndaemon: set docker0 subpool as the IPAM pool</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v23.0.3...v23.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=23.0.3+incompatible&new-version=23.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T15:41:11-04:00",
          "tree_id": "1c20d3fd2834f22310254aa23e661742782dcfd8",
          "url": "https://github.com/runfinch/finch/commit/3e0581cc0f86efcd9ce7b7dc8c9384fb1e6af785"
        },
        "date": 1683143193424,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 99472525916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4035",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "99.47",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2539454464",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "4494792",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "93727",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27342219167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4816",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "27.34",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "872448",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1234792",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25874",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372034972,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.413",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "20.66",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3720",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "6306474",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26586",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "398",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1298690666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9748",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "54.55",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.299",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3547136",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "65752",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1271",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
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
          "id": "cc679ef266c7da49e9339d69130f242d8285bc96",
          "message": "ci: remove setup-go and explicitly set shell in benchmark (#401)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nFix the workflow failure happened recently.\r\nhttps://github.com/runfinch/finch/actions/runs/4920343212/jobs/8789029862\r\n\r\n*Testing done:*\r\nIn feature branch.\r\n\r\n\r\n- [ X ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Ziwen Ning <ningziwe@amazon.com>",
          "timestamp": "2023-05-16T13:59:41-07:00",
          "tree_id": "ce9148fa0e13ad776e232868257642729f8bf853",
          "url": "https://github.com/runfinch/finch/commit/cc679ef266c7da49e9339d69130f242d8285bc96"
        },
        "date": 1684271038983,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 60938075750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4824",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "60.94",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2509930496",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2738240",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "57767",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24052628167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5687",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.05",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-15908864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069120",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22745",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372893125,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8285",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.18",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3728",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26821",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "398",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1379727083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.6775",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.380",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3592192",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71288",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1348",
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
          "id": "06d86b2bc348db9f0d8d02678faee556719b883d",
          "message": "build(deps): Bump submodules (#402)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-05-17T16:24:01Z",
          "tree_id": "288eddf483f6ff89d0e83c6e089da366bce0295d",
          "url": "https://github.com/runfinch/finch/commit/06d86b2bc348db9f0d8d02678faee556719b883d"
        },
        "date": 1684340898109,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 61902854333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4362",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "63.64",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "61.90",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2538090496",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2780200",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "58700",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24044588666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4177",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.04",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-57344",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1070544",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22764",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 350766139,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.7794",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.19",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3507",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25552",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "377",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1332116125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3799",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.332",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20385792",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68384",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1304",
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
          "id": "05b6b2e7364036a3d30b67ad409f55526cc59ffe",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 (#405)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.0 to 1.9.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/b30aa27cf4df89e9b96c68c063486c3162f71aef\"><code>b30aa27</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1339\">#1339</a>\r\nfrom xieyuschen/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/6acd903758687c4a3db3c11701e6c414fcf1c1f7\"><code>6acd903</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/105e63f86c7de9d7aab379fdd6721a3476009eaf\"><code>105e63f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1\">#1</a> from\r\nashmckenzie/ashmckenzie/fix-writer-scanner</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/c052ba6a076b368de89029949f68b3b8ccd8e058\"><code>c052ba6</code></a>\r\nScan text in 64KB chunks</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/e59b167d75f32c4d0db65a2dc6d5f0c4dd548653\"><code>e59b167</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1372\">#1372</a>\r\nfrom tommyblue/syslog_different_loglevels</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/766cfece3701d0b1737681ffb5e6e40b628b664d\"><code>766cfec</code></a>\r\nThis commit fixes a potential denial of service vulnerability in\r\nlogrus.Write...</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/70234da9c319016474284324265b694b2471c903\"><code>70234da</code></a>\r\nAdd instructions to use different log levels for local and syslog</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/a448f8228b920021d792e0767626068db5f0e38d\"><code>a448f82</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1362\">#1362</a>\r\nfrom FrancoisWagner/fix-data-race-in-hooks-test-pkg</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/ff07b25fdf830fffcf67b64674799b11941542ac\"><code>ff07b25</code></a>\r\nFix data race in hooks.test package</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/d8787af86c754a82be345e40365ae76436aa8c2c\"><code>d8787af</code></a>\r\nUse text when shows the logrus output</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.0...v1.9.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.0&new-version=1.9.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-17T16:59:12-07:00",
          "tree_id": "4200288d7d0b7a0007ed4d8c2a30b6f3c39a38dc",
          "url": "https://github.com/runfinch/finch/commit/05b6b2e7364036a3d30b67ad409f55526cc59ffe"
        },
        "date": 1684368470605,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 180893819750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2240",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "57.14",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "180.9",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2550149120",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "8156320",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "169974",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24064461500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3533",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.06",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-32768",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1068584",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22719",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 337115709,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.160",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "19.44",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3371",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "24426",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "361",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1406490458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4333",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.406",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "72640",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1378",
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
          "id": "25aa324ca324248cf2093af23f205af1b5ae276f",
          "message": "build(deps): Bump github.com/docker/docker from 23.0.6+incompatible to 24.0.0+incompatible (#406)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n23.0.6+incompatible to 24.0.0+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.0</h2>\r\n<h2>24.0.0</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.0\">docker/cli,\r\n24.0.0 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.0\">moby/moby,\r\n24.0.0 milestone</a></li>\r\n</ul>\r\n<h3>New</h3>\r\n<ul>\r\n<li>Introduce experimental support for containerd as the content store\r\n(replacing the existing storage drivers). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43735\">moby/moby#43735</a>,\r\n<a\r\nhref=\"https://github.com/moby/moby/pulls?q=is%3Apr+is%3Amerged+milestone%3A24.0.0+-label%3Aprocess%2Fcherry-picked+label%3Acontainerd-integration+\">other\r\nmoby/moby pull requests</a></li>\r\n<li>The <code>--host</code> CLI flag now supports a path component in a\r\n<code>ssh://</code> host address, allowing use of an alternate socket\r\npath without configuration on the remote host. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4073\">docker/cli#4073</a></li>\r\n<li>The <code>docker info</code> CLI command now reports a version and\r\nplatform field. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4180\">docker/cli#4180</a></li>\r\n<li>Introduce the daemon flag <code>--default-network-opt</code> to\r\nconfigure options for newly created networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43197\">moby/moby#43197</a></li>\r\n<li>Restrict access to <code>AF_VSOCK</code> in the\r\n<code>socket(2)</code> family of syscalls in the default seccomp\r\nprofile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44562\">moby/moby#44562</a></li>\r\n<li>Introduce support for setting OCI runtime annotations on containers.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4156\">docker/cli#45025</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45025\">moby/moby#45025</a></li>\r\n<li>Alternative runtimes can now be configured in\r\n<code>daemon.json</code>, enabling runtime names to be aliased and\r\noptions to be passed. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45032\">moby/moby#45032</a></li>\r\n<li>The <code>docker-init</code> binary will now be discovered in\r\nFHS-compliant libexec directories, in addition to the <code>PATH</code>.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45198\">moby/moby#45198</a></li>\r\n<li>API: Surface the daemon-level <code>--no-new-privileges</code> in\r\n<code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45320\">moby/moby#45320</a></li>\r\n</ul>\r\n<h3>Removed</h3>\r\n<ul>\r\n<li><code>docker info</code> no longer reports\r\n<code>IndexServiceAddress</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4204\">docker/cli#4204</a></li>\r\n<li>libnetwork: Remove fallback code for obsolete kernel versions. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44684\">moby/moby#44684</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44802\">moby/moby#44802</a></li>\r\n<li>libnetwork: Remove unused code related to classic Swarm. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44965\">moby/moby#44965</a></li>\r\n<li>libnetwork: Remove usage of the <code>xt_u32</code> kernel module\r\nfrom encrypted Swarm overlay networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45281\">moby/moby#45281</a></li>\r\n<li>Remove support for buildkit's deprecated <code>buildinfo</code> in\r\nfavor of standard provenance attestations. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45097\">moby/moby#45097</a></li>\r\n<li>Remove the deprecated AUFS and legacy <code>overlay</code> storage\r\ndrivers. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45342\">moby/moby#45342</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45359\">moby/moby#</a></li>\r\n<li>Remove the deprecated <code>overlay2.override_kernel_check</code>\r\nstorage driver option. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45368\">moby/moby#45368</a></li>\r\n<li>Remove workarounds for obsolete versions of\r\n<code>apparmor_parser</code> from the AppArmor profiles. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45500\">moby/moby#45500</a></li>\r\n<li>API: <code>GET /images/json</code> no longer represents empty\r\nRepoTags and RepoDigests\r\nas<code>&lt;none&gt;:&lt;none&gt;</code>/<code>&lt;none&gt;@&lt;none&gt;</code>.\r\nEmpty arrays are be returned instead on API &gt;= 1.43. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45068\">moby/moby#45068</a></li>\r\n</ul>\r\n<h3>Deprecated</h3>\r\n<ul>\r\n<li>Deprecate the <code>--oom-score-adjust</code> daemon option. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45315\">moby/moby#45315</a></li>\r\n<li>API: Deprecate the <code>VirtualSize</code> field in <code>GET\r\n/images/json</code> and <code>GET /images/{id}/json</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45346\">moby/moby#45346</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>The <code>docker stack</code> command no longer validates the\r\n<code>build</code> section of Compose files. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4214\">docker/cli#4214</a></li>\r\n<li>Fix lingering healthcheck processes after timeout is reached. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43739\">moby/moby#43739</a></li>\r\n<li>Reduce the overhead of container startup when using the\r\n<code>overlay2</code> storage driver. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44285\">moby/moby#44285</a></li>\r\n<li>API: Handle multiple <code>before=</code> and <code>since=</code>\r\nfilters in <code>GET /images</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44503\">moby/moby#44503</a></li>\r\n<li>Fix numerous bugs in the embedded DNS resolver implementation used\r\nby user-defined networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44664\">moby/moby#44664</a></li>\r\n<li>Add <code>execDuration</code> field to the map of event attributes.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45494\">moby/moby#45494</a></li>\r\n<li>Swarm-level networks can now be created with the Windows\r\n<code>internal</code>, <code>l2bridge</code>, and <code>nat</code>\r\ndrivers. <a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3121\">moby/swarmkit#3121</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45291\">moby/moby#45291</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Update Go to <code>1.20.4</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4253\">docker/cli#4253</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45456\">moby/moby#45456</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1331b8c39a601c77d678f3e03f3f39cb07aa5f76\"><code>1331b8c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45537\">#45537</a>\r\nfrom thaJeztah/24.0_backport_containerd_binary_1.7.1</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/907f037141b41d0a96daa379fd2cbd0b0eee7569\"><code>907f037</code></a>\r\nupdate containerd binary to v1.7.1</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a5b597ea51348f5f922fdd2167cba8f57c6961f3\"><code>a5b597e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45531\">#45531</a>\r\nfrom rumpl/24.0_backport_fix-empty-auth-pull</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/8bbfa3274109a240952c08a2263d0cd256a27311\"><code>8bbfa32</code></a>\r\nc8d: The authorizer needs to be set even if AuthConfig is empty</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/807e415260380b55af87ef50d72abcef9466e43b\"><code>807e415</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45526\">#45526</a>\r\nfrom laurazard/backport-classic-builder</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/8587a1c617dae69474e8e3847d5fd799de156da6\"><code>8587a1c</code></a>\r\nc8d/builder: implement cache</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9717369913214e9fbf1d656af24092d65a1e0102\"><code>9717369</code></a>\r\nc8d: implement classic builder</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ed0c147c8ffd969487ecc1afb74832f8aa4e798e\"><code>ed0c147</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45523\">#45523</a>\r\nfrom thaJeztah/24.0_backport_cleanup_reexec_inits</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/90be9ab80267fbed15503c9030b864151f73503c\"><code>90be9ab</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45525\">#45525</a>\r\nfrom thaJeztah/24.0_backport_c8d_authconfig_default</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d73f7031e0cb866fae12e582a6846114303a10fa\"><code>d73f703</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45521\">#45521</a>\r\nfrom thaJeztah/24.0_backport_vendor_distribution_v2...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v23.0.6...v24.0.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=23.0.6+incompatible&new-version=24.0.0+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-18T00:52:53Z",
          "tree_id": "e165710972d7cc4dd1908083cdd88af9c0f12942",
          "url": "https://github.com/runfinch/finch/commit/25aa324ca324248cf2093af23f205af1b5ae276f"
        },
        "date": 1684371450786,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 86104120833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3338",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "57.14",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "86.10",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2517471232",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3841320",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "81140",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24054235917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5103",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.05",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-28672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069480",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22742",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 347545958,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.620",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "21.67",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3475",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25309",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "373",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1378863500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.062",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.379",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3661824",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "72592",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1360",
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
          "id": "e6cbd2c5dba8af5cab9ea8a37a33c580ee4edef9",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.1 to 0.27.2 (#407)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.1 to 0.27.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/756e2227bf3a486098f504af1a0ffb736ad16f4c\"><code>756e222</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/117298\">#117298</a><code>pohly/automated-cherry-pick-of-#117238</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/b1123d27117a0cfa49488c017ddb1b740ef6115a\"><code>b1123d2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/117708\">#117708</a><code>Jefftree/automated-cherry-pick-of-#117705</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/4074a29ff45a9599f061f04efa3d830f8cb5974d\"><code>4074a29</code></a>\r\nUpdate kube-openapi to fix race</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/cc852ec7867b3cff959730c6f6ab023f137d481f\"><code>cc852ec</code></a>\r\napi: encode NamespacedName with lower case in JSON</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.1...v0.27.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.1&new-version=0.27.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:14-07:00",
          "tree_id": "4995bf341e0dfa88b02d82d9034a40802015304b",
          "url": "https://github.com/runfinch/finch/commit/e6cbd2c5dba8af5cab9ea8a37a33c580ee4edef9"
        },
        "date": 1684775581516,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 65102236375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4893",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "65.10",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2512056320",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2905680",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "61582",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25482304125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4793",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "25.48",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-8192",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1131160",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24135",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 369071028,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.1122",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "3.704",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3690",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26402",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "393",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1312303250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9644",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "36.36",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.312",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "66160",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1277",
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
          "id": "0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.1 to 1.9.2 (#408)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.1 to 1.9.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/352781de903c9dc639752a3ac08148132746e180\"><code>352781d</code></a>\r\nRevert &quot;Merge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.1...v1.9.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.1&new-version=1.9.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:34-07:00",
          "tree_id": "f2d2b81654b4af29a2aed139fba3d507787ce928",
          "url": "https://github.com/runfinch/finch/commit/0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb"
        },
        "date": 1684775853786,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62832548000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4479",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "53.85",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "62.83",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2535944192",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2811848",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59435",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24917876875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4061",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "41.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.92",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "32768",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1105472",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "23553",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 376179125,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.9786",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "24.77",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3761",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26552",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "399",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1435575375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8930",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.436",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "74344",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1409",
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
          "id": "80513c7785a6da4ae09d9c871acaf180f5d68f2c",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (#409)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.6 to 1.27.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.7</h2>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/99a29d5128d6fd87bad628e94d1cf92e82dc2b32\"><code>99a29d5</code></a>\r\nv1.27.7</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05c1bc6dc318e2c5db2a2e3f9977252bb2602d8b\"><code>05c1bc6</code></a>\r\nupdate gitignore</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/57054d54add42b5aa5c499d4a5b3667a02f61ec1\"><code>57054d5</code></a>\r\nfix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/7cadcf6e3a21ed4daa9f4d1630913c0dcdb23e73\"><code>7cadcf6</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/b524839842edb61a50d8ab189c99179afe452c79\"><code>b524839</code></a>\r\nBump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/5f446942faf33eb8e4a398866b1bd094a1285de5\"><code>5f44694</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05dc99a168f129346fed13bda9967a7a4b352476\"><code>05dc99a</code></a>\r\nBump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/3a033d10833c60711a0de2eb3903532b8e78b27f\"><code>3a033d1</code></a>\r\nBump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/a19238f64f7f7c8bcec2bb6bc9acb6ffe7485a58\"><code>a19238f</code></a>\r\nReplace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/29ed04126e68341d11b71d9052d4845ea07629aa\"><code>29ed041</code></a>\r\nBump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.6...v1.27.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.6&new-version=1.27.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:53-07:00",
          "tree_id": "e2fcfcda12bb1ccd87c7073b3933f3ac027af425",
          "url": "https://github.com/runfinch/finch/commit/80513c7785a6da4ae09d9c871acaf180f5d68f2c"
        },
        "date": 1684776127164,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 64072702916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4488",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "64.07",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2538119168",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2872128",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "60802",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25247371042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4278",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "25.25",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "102400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1121880",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "23936",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 410213555,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.797",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "30.56",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4102",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "28586",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "437",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1388379792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.235",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.388",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3579904",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71320",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1348",
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
          "id": "bb1cab229c787752615eb00e74f240c4a4e0e23d",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.0+incompatible to 24.0.1+incompatible (#413)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.0+incompatible to 24.0.1+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.1</h2>\r\n<h2>24.0.1</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.1\">docker/cli,\r\n24.0.1 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.1\">moby/moby,\r\n24.0.1 milestone</a></li>\r\n</ul>\r\n<h3>Removed</h3>\r\n<ul>\r\n<li>Remove CLI completions for storage drivers removed in the 24.0 major\r\nrelease. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4302\">docker/cli#4302</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix an issue where DNS query NXDOMAIN replies from external servers\r\nwere forwarded to the client as SERVFAIL. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45573\">moby/moby#45573</a></li>\r\n<li>Fix an issue where <code>docker pull --platform</code> would report\r\n<code>No such image</code> regarding another tag pointing to the same\r\nimage. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45562\">moby/moby#45562</a></li>\r\n<li>Fix an issue where insecure registry configuration would be\r\nforgotten during config reload. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45571\">moby/moby#45571</a></li>\r\n<li>containerd-storage: Fix an issue where images which have no layers\r\nwould not be listed in <code>docker images -a</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45588\">moby/moby#45588</a></li>\r\n<li>API: Fix an issue where <code>GET /images/{id}/json</code> would\r\nreturn <code>null</code> instead of empty <code>RepoTags</code> and\r\n<code>RepoDigests</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45564\">moby/moby#45564</a></li>\r\n<li>API: Fix an issue where <code>POST /commit</code> did not accept an\r\nempty request body. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45568\">moby/moby#45568</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Upgrade Compose to <code>v2.18.1</code>. <a\r\nhref=\"hhttps://redirect.github.com/docker/docker-ce-packaging/pull/896\">docker/docker-ce-packaging#896</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/463850e59e8af1258cad649ec6836d5e88d16fec\"><code>463850e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45588\">#45588</a>\r\nfrom vvoland/c8d-layerless-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/47a3dad256e9ec6f4a2494cabc189ae709265d6c\"><code>47a3dad</code></a>\r\nc8d/list: Show layerless images</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a0bc3ebae4396b0ad8a3b057146b264764c621e8\"><code>a0bc3eb</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45571\">#45571</a>\r\nfrom thaJeztah/24.0_backport_fix_insecure_registrie...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/922b6aa672880fa05989453dff0f0084d318e286\"><code>922b6aa</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45568\">#45568</a>\r\nfrom corhere/backport-24.0/fix-empty-container-decode</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0e605cf9721094566c7d3680868b784ac60bf81c\"><code>0e605cf</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45573\">#45573</a>\r\nfrom thaJeztah/24.0_backport_fix_dns_servfail</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/878c41791be3cc8274e340d5fb459fb5bc607791\"><code>878c417</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45560\">#45560</a>\r\nfrom crazy-max/24.0_backport_fix-worker-id</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/654e80abc2a3b6b6fff557a360a4ad7218aa7baa\"><code>654e80a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45570\">#45570</a>\r\nfrom crazy-max/24.0_backport_ci-bin-image-distribute</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0869b089e4b1633ac8c9c805b9293030a8782664\"><code>0869b08</code></a>\r\nlibnetwork: just forward the external DNS response</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/3467ba6451e38c449aa8bd1c1c8f186e7f6f6ead\"><code>3467ba6</code></a>\r\nreorder load funcs to match newServiceConfig()'s order</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f9b886c01b36e605ff822f18e9f924cae94ae415\"><code>f9b886c</code></a>\r\nadd mirror to daemon reload test for insecure registries</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.0...v24.0.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.0+incompatible&new-version=24.0.1+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T17:48:50Z",
          "tree_id": "92f651eed9097478240daebf4cbf33ab7a695969",
          "url": "https://github.com/runfinch/finch/commit/bb1cab229c787752615eb00e74f240c4a4e0e23d"
        },
        "date": 1684778010598,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 66175046958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4271",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "62.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "66.17",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2476941312",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2958312",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "62769",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24043387000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4011",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.04",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-28241920",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1071472",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22789",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372383778,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8292",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.50",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3723",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26378",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "396",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1363868542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8620",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.364",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "69248",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1338",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "b83cc21e6082eeff076e035dfb4cad152fb5508c",
          "message": "ci: Finch .pkg installer builder (#416)\n\n**Description of changes:**\r\n\r\n- This PR contains the Finch .pkg builder tool.\r\n- The .pkg builder tool can be used by GitHub action to generate and\r\nnotarize macOS .pkg installer.\r\n- The old update to S3 workflow is extended with the functionality to\r\nbuild Finch, build .pkg and test .pkg. It can be used as a scheduled job\r\nfor nightly main branch build as well to detect release issue earlier\r\nbesides cut a new release.\r\n- The old release installer workflow(test installer) is removed because\r\nits scope is moved to the integrated workflow.\r\n\r\nThis is an initial tool check in, Readme and integrated workflow to\r\nchain existing workflows to upload installer to release and publish to\r\nHomebrew will come later.\r\n\r\n**Testing done:**\r\nHave tested the updated workflow and tool on this branch, and can\r\nsuccessfully generate final installer and test it.\r\nAction test ref:\r\nhttps://github.com/runfinch/finch/actions/runs/5077161329\r\n<img width=\"1043\" alt=\"Screenshot 2023-05-24 at 11 17 16 PM\"\r\nsrc=\"https://github.com/runfinch/finch/assets/113378398/a75ab5cf-d4f0-46ac-b02a-319101aae21d\">\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-26T10:40:35-07:00",
          "tree_id": "f4ee320ee326400884c15fa51a6485739e2ed39b",
          "url": "https://github.com/runfinch/finch/commit/b83cc21e6082eeff076e035dfb4cad152fb5508c"
        },
        "date": 1685123080313,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62002138916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4386",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "62.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2434990080",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2783248",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "58785",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23875910708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4210",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.88",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "11087872",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1063976",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22618",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 356385737,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.7036",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.81",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3563",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25797",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "382",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1482135708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.198",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.482",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3629056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "75728",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1449",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
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
          "id": "6a8ca1a559dada6ed320c9454fbc3229446a0a40",
          "message": "fix: sort volume args in DOCKER_COMPAT mode (#417)\n\nIssue #, if available:\r\nhttps://github.com/runfinch/finch/issues/418\r\n\r\n*Description of changes:*\r\nSort volume args in DOCKER_COMPAT mode\r\n\r\n*Testing done:*\r\nUnit tests and new e2e tests.\r\nhttps://github.com/runfinch/common-tests/pull/66\r\n\r\n\r\n- [ X ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Ziwen Ning <ningziwe@amazon.com>",
          "timestamp": "2023-05-26T21:10:30Z",
          "tree_id": "7d92a6ddbd268a0ecf2c8acb172cadc75b283dc2",
          "url": "https://github.com/runfinch/finch/commit/6a8ca1a559dada6ed320c9454fbc3229446a0a40"
        },
        "date": 1685135678685,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 61109075166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.5363",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "61.11",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2531868672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2739688",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "57794",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23822496458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4148",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "29.99",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.82",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "25346048",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1062800",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22585",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 350237528,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.100",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.76",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3502",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25189",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "375",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1324873542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4685",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "20.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.325",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20406272",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67056",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1297",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "0bcdd18b12b889931d3b7928eedf76c1ec9fac5a",
          "message": "ci: Rename action and set up nightly build (#421)\n\n*Description of changes:*\r\nRename the action.\r\nSet up the installer build and test every day at 9 am UTC (2 am PDT) to\r\nvalidate latest main branch.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-26T16:03:45-07:00",
          "tree_id": "ab82ce6b1d2aa83593bb648181463b6fe7840863",
          "url": "https://github.com/runfinch/finch/commit/0bcdd18b12b889931d3b7928eedf76c1ec9fac5a"
        },
        "date": 1685142468148,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58189551041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4748",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2534551552",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2616344",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55010",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23904738791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4035",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.90",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "737280",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1065064",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22643",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 388213541,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5318",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.33",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3882",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "27282",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "413",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1304016458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4994",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.304",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3596288",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "66616",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1279",
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
          "id": "ac18046e70efc0e1e9fe11a30457f6f945df2a23",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.6.5 to 0.7.0 (#420)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.6.5 to 0.7.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.0</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">0.7.0</a>\r\n(2023-05-26)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\">22a7f7e</a>)</li>\r\n<li>verify the result of finch inspect has State.Status and State.Error\r\n(<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\">b761a7a</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.2 to\r\n2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\">0bd0901</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.5 to\r\n1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\">72120b5</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.6 to\r\n1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\">590a984</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">0.7.0</a>\r\n(2023-05-26)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\">22a7f7e</a>)</li>\r\n<li>verify the result of finch inspect has State.Status and State.Error\r\n(<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\">b761a7a</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.2 to\r\n2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\">0bd0901</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.5 to\r\n1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\">72120b5</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.6 to\r\n1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\">590a984</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.3...v0.6.4\">0.6.4</a>\r\n(2023-04-06)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>better handling of concurrent http servers (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/57\">#57</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0ae6182b53beffdc279ffc1df7d539fe8205fd56\">0ae6182</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.2...v0.6.3\">0.6.3</a>\r\n(2023-03-27)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.2 to\r\n1.27.4 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/48\">#48</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/f113e7b2f65a66982773079a30dee06dd5e6e326\">f113e7b</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.4 to\r\n1.27.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/52\">#52</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/bd056e7d947a2432611ca923585422c399c56395\">bd056e7</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.1...v0.6.2\">0.6.2</a>\r\n(2023-03-16)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Fix tests to match nerdctl 1.2.1 outputs (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/50\">#50</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/3d9b4f4794d8df965dd2d611b2bed59aabff7dc2\">3d9b4f4</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.8.3 to\r\n2.8.4 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/41\">#41</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a9476c13bc4febd40a4f98cc8e6f8eebc04cfb5e\">a9476c1</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.1 to\r\n1.27.2 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/40\">#40</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/e8fc71a9c94afe2084bfdb129de5f5828adfa8b8\">e8fc71a</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.0...v0.6.1\">0.6.1</a>\r\n(2023-02-28)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Switch from <code>nc -l</code> to <code>nginx</code> in <code>run\r\n-p/--publish</code> test (<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/7a6a6c36d11796b2048d90353f06d25013b132a8\">7a6a6c3</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/afbbd971ea407fdb723fafb93314bcb94de70c27\"><code>afbbd97</code></a>\r\nchore(main): release 0.7.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/63\">#63</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\"><code>22a7f7e</code></a>\r\nfeat: Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\"><code>590a984</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\"><code>b761a7a</code></a>\r\nfeat: verify the result of finch inspect has State.Status and\r\nState.Error (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\"><code>72120b5</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.5 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\"><code>0bd0901</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/882cd1e5ba373a0eda1362f7370474b6720e6c75\"><code>882cd1e</code></a>\r\ntest: Functional test for PS command (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/17\">#17</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.6.5&new-version=0.7.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T16:30:20-07:00",
          "tree_id": "5e6cfb42519bed0dde2505d4b43e33fd56d4cb40",
          "url": "https://github.com/runfinch/finch/commit/ac18046e70efc0e1e9fe11a30457f6f945df2a23"
        },
        "date": 1685144063322,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 60622561542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4602",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "71.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "60.62",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2549374976",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2722432",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "57398",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23975648375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4158",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.98",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16027648",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1068520",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22725",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 360948361,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8981",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.10",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3609",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25816",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "386",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1312138792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3660",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.10",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.312",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "-4567040",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67656",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1291",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "f67ff9668457057514a351819cdc75fb8c6b2d46",
          "message": "ci: Add release automation action (#424)\n\n*Description of changes:*\r\nThis PR added a new passive action subscribe to main branch new tag\r\ncreation.\r\nNew tag creation means Finch has a new release, the new workflow will\r\ntrigger build pkg, upload pkg and homebrew release on the latest tag.\r\n\r\n*Testing done:*\r\nThis is a new action and has cross branch/tag involved, needs some\r\nexperiment on main branch after check in.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-29T11:41:28-07:00",
          "tree_id": "4e53e8ed0bd63d943da86e7680d75e44738efbcb",
          "url": "https://github.com/runfinch/finch/commit/f67ff9668457057514a351819cdc75fb8c6b2d46"
        },
        "date": 1685385929759,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 59222706583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3855",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "62.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "59.22",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2543312896",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2656888",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55926",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23862741625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5184",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.86",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "32006144",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1064240",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22629",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 359128139,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.339",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "21.67",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3591",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25626",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "382",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1292237416,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.1373",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.47",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.292",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "65464",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1259",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "c4c23a95a139a21cc7208071e3c3b688389f6071",
          "message": "ci: Upload dependency source code along with the installers (#426)\n\n*Description of changes:*\r\nCurrently we need to upload the dependency source code manually.\r\nMake this along with the installer upload.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-29T18:22:38-07:00",
          "tree_id": "e65c4af30a6b25e4a09ab3d7849c3b667d9212b8",
          "url": "https://github.com/runfinch/finch/commit/c4c23a95a139a21cc7208071e3c3b688389f6071"
        },
        "date": 1685410004376,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 61964372834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4134",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "61.96",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2531565568",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2778680",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "58676",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24002455958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4373",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-73728",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1067312",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22685",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 343225264,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6481",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.57",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3432",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5592405",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25186",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "372",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1328667167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8924",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.329",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3596288",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67920",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1299",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "d933d11373c4c9a94137dfad78a8542d2c7be327",
          "message": "ci: Integrate existing workflows into release-automation (#430)\n\n*Description of changes:*\r\nReuse existing workflows to release-automation.\r\nAdded input param to reuse workflow.\r\nRollout only build & test installer as initial.\r\n\r\n*Testing done:*\r\nHave tested the action in this branch\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-30T16:44:42-07:00",
          "tree_id": "87f62fce80fd69e8450d0621c833ac32529c621e",
          "url": "https://github.com/runfinch/finch/commit/d933d11373c4c9a94137dfad78a8542d2c7be327"
        },
        "date": 1685490523568,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 59423656750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4761",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "85.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "59.42",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2530586624",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2676424",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "56362",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23873176834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3975",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.87",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "458752",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1063416",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22590",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 352180403,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.346",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.76",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3521",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25461",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "376",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1396065958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5610",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.396",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71760",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1358",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "d08952e8b257a74d6d6a6f9da8949d3fd748ab23",
          "message": "ci: Integrate the other workflows into release-automation (#431)\n\n*Description of changes:*\r\nEnabled the rest workflow for release automation.\r\nCheck in before next release after it is validated.\r\nAfter this PR is checked in, release-please PR merge will automatically\r\ntrigger installer build, test, upload installers and dependency source\r\ncode to release and cut Homebrew PR.\r\n\r\n*Testing done:*\r\nWait next release\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-31T09:55:51-07:00",
          "tree_id": "0d7b69664ef0d583147c2b84c591c63f802cdf43",
          "url": "https://github.com/runfinch/finch/commit/d08952e8b257a74d6d6a6f9da8949d3fd748ab23"
        },
        "date": 1685552406730,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63012348000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4615",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "55.56",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "63.01",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2534215680",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2819536",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59623",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27240375250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4598",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "27.24",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "4427776",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1229600",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25748",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 373338278,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.081",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "17.78",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3733",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26709",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "397",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1472416667,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9267",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.472",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "74808",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1428",
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
          "id": "6a67f0cfb0a3a1da438779f4faa04048f25d7dde",
          "message": "build(deps): Bump github.com/lima-vm/lima from 0.15.1 to 0.16.0 (#428)\n\nBumps [github.com/lima-vm/lima](https://github.com/lima-vm/lima) from\r\n0.15.1 to 0.16.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/lima-vm/lima/releases\">github.com/lima-vm/lima's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.16.0</h2>\r\n<p>This release adds an experimental support for the <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/docs/network.md#lima-user-v2-network\"><code>user-v2</code></a>\r\nnetwork driver: <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/examples/experimental/net-user-v2.yaml\"><code>limactl\r\nstart template://experimental/net-user-v2</code></a>.\r\nThe <code>user-v2</code> network driver enables VM-to-VM networking\r\nwithout the root privilege on the host.\r\nThis should be useful for simulating multi-node Kubernetes clusters on a\r\nlaptop.</p>\r\n<p>This release also fixes a relatively minor vulnerability <a\r\nhref=\"https://github.com/lima-vm/lima/security/advisories/GHSA-f7qw-jj9c-rpq9\">CVE-2023-32684</a>.\r\nThis vulnerability is very <em>unlikely</em> to be exploitable as long\r\nas you are using the official templates of Lima.</p>\r\n<h2>Changes</h2>\r\n<ul>\r\n<li><code>limactl</code> CLI:\r\n<ul>\r\n<li>(Experimental) Add <code>limactl snapshot\r\n(apply|create|delete|list)</code> commands (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1054\">#1054</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n<li>Escape only the value of env variables in <code>limactl shell</code>\r\n(<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1501\">#1501</a>,\r\nthanks to <a\r\nhref=\"https://github.com/sam-berning\"><code>@​sam-berning</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>YAML:\r\n<ul>\r\n<li>Add &quot;dependency&quot; provisioning mode (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1105\">#1105</a>,\r\nthanks to <a\r\nhref=\"https://github.com/pendo324\"><code>@​pendo324</code></a>)</li>\r\n<li>(Experimental) Add <code>.audio.device</code> (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1527\">#1527</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1532\">#1532</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1561\">#1561</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1589\">#1589</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a> <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>Documents:\r\n<ul>\r\n<li>Install man pages (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1521\">#1521</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>Network:\r\n<ul>\r\n<li>(Experimental) Add <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/docs/network.md#lima-user-v2-network\"><code>user-v2</code></a>\r\nnetwork driver to enable VM-to-VM networking without root (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1383\">#1383</a>,\r\nthanks to <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>nerdctl:\r\n<ul>\r\n<li>Update from v1.3.1 to <a\r\nhref=\"https://github.com/containerd/nerdctl/releases/tag/v1.4.0\">v1.4.0</a>\r\n(<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1559\">#1559</a>)</li>\r\n</ul>\r\n</li>\r\n<li>Templates:\r\n<ul>\r\n<li>AlmaLinux: update to 9.2 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n<li>Alpine: update to 3.18 and fix Rosetta support (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1560\">#1560</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1580\">#1580</a>,\r\nthanks to <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a>)</li>\r\n<li>Arch Linux: update to 20230515.150700 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n<li>Fedora: update to 38 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1502\">#1502</a>,\r\nthanks to <a\r\nhref=\"https://github.com/cpach\"><code>@​cpach</code></a>)</li>\r\n<li>Nomad: update to v0.9.4 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1552\">#1552</a>)</li>\r\n<li>Rocky Linux: update to 9.2 and 8.8 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1591\">#1591</a>)</li>\r\n<li>Ubuntu: update to 23.04 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n</ul>\r\n</li>\r\n<li>Misc:\r\n<ul>\r\n<li>Improve disk efficiency (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1411\">#1411</a>)\r\nfor caches (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1544\">#1544</a>)</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>Full changes: <a\r\nhref=\"https://github.com/lima-vm/lima/milestone/34?closed=1\">https://github.com/lima-vm/lima/milestone/34?closed=1</a>\r\nThanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a> <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a> <a\r\nhref=\"https://github.com/bumpsoo063\"><code>@​bumpsoo063</code></a> <a\r\nhref=\"https://github.com/cpach\"><code>@​cpach</code></a> <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a> <a\r\nhref=\"https://github.com/pendo324\"><code>@​pendo324</code></a> <a\r\nhref=\"https://github.com/sam-berning\"><code>@​sam-berning</code></a></p>\r\n<h2>Usage</h2>\r\n<pre lang=\"console\"><code>[macOS]$ limactl start\r\n...\r\nINFO[0029] READY. Run `lima` to open the shell.\r\n<p>[macOS]$ lima uname\r\nLinux\r\n</code></pre></p>\r\n<hr />\r\n<p>The binaries were built automatically on GitHub Actions.\r\nThe build log is available for 90 days: <a\r\nhref=\"https://github.com/lima-vm/lima/actions/runs/5118006806\">https://github.com/lima-vm/lima/actions/runs/5118006806</a></p>\r\n<p>The sha256sum of the SHA256SUMS file itself is\r\n<code>2062c42688128dca55331fc1a8f4841cbf41ed9dd11867d48decdf6880afde87</code>\r\n.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/01dbd4d9cabe692afa4517be3995771f0ebb38a5\"><code>01dbd4d</code></a>\r\nMerge pull request from GHSA-f7qw-jj9c-rpq9</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bc1bdb89d98aed2b82d21b95e02eade506513d78\"><code>bc1bdb8</code></a>\r\nProhibit using a differential disk as a base disk</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bfa5bab99c667a2816a04abaa5105fc81335d318\"><code>bfa5bab</code></a>\r\nqemu: explicitly pass the basedisk format to QEMU</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/efe1c47b2a0d5dce2134c6e9dacf0b3fd9b4056a\"><code>efe1c47</code></a>\r\npkg/qemu/imgutil: add Info fields</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/3dbc08cbd0d2b7ef60f475a515e63974a9dff370\"><code>3dbc08c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1592\">#1592</a>\r\nfrom afbjorklund/man-prefix</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/703d69fb6db5214950e27956af8be5d2e84aac3a\"><code>703d69f</code></a>\r\nRemove the build directories from the manpages</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/e7aa4ff90cb76564709a16bb11e7198c06a58242\"><code>e7aa4ff</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1591\">#1591</a>\r\nfrom AkihiroSuda/dev</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/b9ea96482b1d65b3851b1c9fe2a6ad40551170b7\"><code>b9ea964</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1590\">#1590</a>\r\nfrom balajiv113/usernet-default</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/5656d1ad50c4516bc12079dcaa9b47402d56c6ab\"><code>5656d1a</code></a>\r\ntemplates: update Rocky Linux to 8.8</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/5c0955dbcc541ab63db3d2f5402ce955b20551c1\"><code>5c0955d</code></a>\r\ntemplates: update CentOS Stream 9 to 20230523.0</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/lima-vm/lima/compare/v0.15.1...v0.16.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/lima-vm/lima&package-manager=go_modules&previous-version=0.15.1&new-version=0.16.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-31T10:22:24-07:00",
          "tree_id": "556e3a36fb0bb31a7a51202de5d9db3ef55c2b48",
          "url": "https://github.com/runfinch/finch/commit/6a67f0cfb0a3a1da438779f4faa04048f25d7dde"
        },
        "date": 1685554077983,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 70264795958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3997",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "71.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "70.26",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2539876352",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3120376",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "66457",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23954638333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4083",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "62.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.95",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "741376",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1068896",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22721",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372378916,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.636",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "27.61",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3723",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26384",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "396",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1377558917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.115",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.378",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71272",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1348",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "7ba69ce25b7100c8cbc36066abcb6b6a7f0632e9",
          "message": "ci: Manually update submodule and add cleanup (#434)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n- Add clean up in ci for finch version command\r\n- Add submodule updates to finch core\r\n\r\n*Testing done:*\r\n\r\nYes\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-05-31T14:02:33-07:00",
          "tree_id": "c0224254ae7d46efe2947ff93511a51659565aaa",
          "url": "https://github.com/runfinch/finch/commit/7ba69ce25b7100c8cbc36066abcb6b6a7f0632e9"
        },
        "date": 1685567199347,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63763963667,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3759",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "88.89",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "63.76",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2554966016",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2847616",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "60267",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23913614208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4998",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "60.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.91",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-28672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1062776",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22583",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 362507306,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8517",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.33",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3624",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "13653",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26426",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "388",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1393565083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5869",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.394",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "73016",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1370",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "1c09471be3b9d214e4a4ef805980588f6e322b68",
          "message": "ci: Add git clean before build and test (#435)\n\n*Description of changes:*\r\nIt append .modified postfix when build or test.\r\nAdd git clean to remove the dirty state.\r\nAdd git status to log when it happens\r\n\r\n*Testing done:*\r\nTODO with this current run.\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-05-31T15:47:26-07:00",
          "tree_id": "d93daef2907cf471ae341cb360413598172833f1",
          "url": "https://github.com/runfinch/finch/commit/1c09471be3b9d214e4a4ef805980588f6e322b68"
        },
        "date": 1685573494810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 61959578833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4169",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "61.96",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2540748800",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2775776",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "58628",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24942337917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3478",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.94",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "3649536",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1107400",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "23611",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 360831653,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6250",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "10.00",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3608",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25992",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "386",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1388015916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5876",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.388",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20385792",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "72176",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1359",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "975c4ee42c1529673a51382c62c4096dc663f80a",
          "message": "fix: Stop lima process in postinstall and uninstall (#438)\n\n*Description of changes:*\r\nUnstopped lima process can prevent new installation and finch vm init\r\nsuccessfully.\r\nAdd kill limactl to post-installation and uninstall script to fix the\r\nissue.\r\n\r\n*Testing done:*\r\nTested locally.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-06-01T14:49:30-07:00",
          "tree_id": "3aac93a3e14d71a61ea11cc9f58d98df0cd2d549",
          "url": "https://github.com/runfinch/finch/commit/975c4ee42c1529673a51382c62c4096dc663f80a"
        },
        "date": 1685656413592,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63110303167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4526",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "60.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "63.11",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2536759296",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2823640",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59698",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23903201084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5218",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.90",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "4452352",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1064312",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22621",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 352293570,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.328",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "23.61",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3522",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25200",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "375",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1369190084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2321",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.08",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.369",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68416",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1328",
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
          "id": "e9551b50010deb43ad26dcd3671ec2f246e84ed6",
          "message": "build(deps): Bump submodules (#439)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-06-01T17:08:31-07:00",
          "tree_id": "1d44ab428cafa8801c73cf50dbe39a71ea5aa9bb",
          "url": "https://github.com/runfinch/finch/commit/e9551b50010deb43ad26dcd3671ec2f246e84ed6"
        },
        "date": 1685666518162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63629323000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4108",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "63.64",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "63.63",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2536259584",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2843712",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "60167",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23881799625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3939",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.88",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1065560",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22660",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 356840806,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "2.543",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3568",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25640",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "379",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1357839084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.6649",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.358",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "69064",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1331",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "7660d08f4e9e93468d0495aeafa2cf2de302227e",
          "message": "ci: Preserve link when copy from build (#441)\n\n*Description of changes:*\r\nAdd 'p' flag to preserve original symbolic link when copying the build\r\nartifact\r\n\r\n*Testing done:*\r\nTested locally\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.",
          "timestamp": "2023-06-01T17:53:28-07:00",
          "tree_id": "4fdbf68f34050cd3f3b5126a3b4960af6cf63267",
          "url": "https://github.com/runfinch/finch/commit/7660d08f4e9e93468d0495aeafa2cf2de302227e"
        },
        "date": 1685669540666,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 63425315334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4150",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "63.43",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1961365504",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2834072",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59945",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23992429875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4683",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.99",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "2035712",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069640",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22740",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 345730597,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.598",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3457",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "24917",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "369",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1474023750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9861",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.474",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3596288",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "75704",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1440",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "0aa4c5cc36c4d44e431a8c13004607990bdb2bf4",
          "message": "ci: Update lima download url (#440)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nLIMA_URL in `finch` is stale\r\nhttps://github.com/runfinch/finch/blob/main/Makefile#L38. Keeping it\r\nconsistent with finch-core.\r\n*Testing done:*\r\n\r\nLocally. \r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-06-01T17:50:59-07:00",
          "tree_id": "92182604e47f2ec0133a0b2a79ec61950bc73185",
          "url": "https://github.com/runfinch/finch/commit/0aa4c5cc36c4d44e431a8c13004607990bdb2bf4"
        },
        "date": 1685669541642,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58254449125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4543",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.25",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1967153152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2624560",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55189",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24103065958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4281",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.10",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "19660800",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1072416",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22807",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 368869778,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.131",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "21.65",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3688",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "27306",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26253",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "393",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1390187417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9979",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.390",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "13881344",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71872",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1359",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "5f626bd8b7a021c95595aade5b34d7076968b88b",
          "message": "ci: Change -rp to capital (#442)\n\n*Description of changes:*\r\nChange p to capital case\r\n\r\n*Testing done:*\r\nTested with the runner\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.",
          "timestamp": "2023-06-01T18:10:52-07:00",
          "tree_id": "3738d19bf5c514ac962bb1ff576dcedec89e59b8",
          "url": "https://github.com/runfinch/finch/commit/5f626bd8b7a021c95595aade5b34d7076968b88b"
        },
        "date": 1685671975402,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58943559292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4052",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "70.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.94",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1934385152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2647720",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55721",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24004892916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4692",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-290816",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1071256",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22786",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 368665333,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.1323",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "4.762",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3686",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26514",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "393",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1342566875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.445",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "55.56",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.343",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "69368",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1326",
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
          "id": "b192874e2b1c5de1c2148813760cbe65e15d7553",
          "message": "build(deps): Bump golang.org/x/tools from 0.9.1 to 0.9.3 (#443)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.9.1\r\nto 0.9.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.9.3</h2>\r\n<p><em>Move fast and fix things...</em><code>golang/go#54395</code></p>\r\n<p>As always, thank you for filing issues!</p>\r\n<h2>gopls/v0.9.2</h2>\r\n<p>This release contains many bug fixes, particularly related to\r\nproblems that would require restarting gopls.</p>\r\n<p><strong>Note about network usage</strong>: among these fixes was a\r\nchange to allow network usage when reloading the workspace. Reloading\r\noccurs when a <code>go.mod</code>, <code>go.sum</code>, or\r\n<code>go.work</code> file changes on disk. In the past, gopls would only\r\nallow network during the first workspace load. This resulted in\r\nconfusing behavior when, for example, a new dependency is added to a\r\n<code>go.mod</code> file and gopls could not load it, but loading\r\nsucceeded on restart. See <a\r\nhref=\"https://go.dev/issues/54069\">#54069</a> for more details.</p>\r\n<h2>Configuration changes</h2>\r\n<h3>directoryFilters at arbitrary depth</h3>\r\n<p>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#directoryfilters-string\"><code>&quot;directoryFilters&quot;</code></a>\r\nsetting now supports excluding directories at arbitrary depth, using the\r\n<code>**</code> operator. (note that for v0.9.2, the default value for\r\nthis setting is still <code>[&quot;-node_modules]&quot;</code>. In the\r\nnext release, this will change to\r\n<code>[&quot;-**/node_modules&quot;]</code>).</p>\r\n<h2>Bug fixes and Performance improvements...</h2>\r\n<p>This release contains the following notable bug fixes / performance\r\nimprovements:</p>\r\n<ul>\r\n<li><strong>Additional change optimization</strong> - Following up on\r\nthe work to optimize change processing from the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.9.0\">v0.9.0\r\nrelease</a>, this release contains additional optimizations that result\r\nin around 50% faster change processing (measured via edits in the\r\nKubernetes repo).</li>\r\n<li><strong>Fix for a long-standing memory leak</strong> - <a\r\nhref=\"https://go.dev/issues/53780\">#53780</a> fixed a long-standing bug\r\nthat caused gopls to hold on to its initial state, gradually leaking\r\nmemory as state changed during the editing session.</li>\r\n<li><strong>Fewer restarts</strong> - This release contains many fixes\r\nfor cache-invalidation bugs that would cause gopls to get confused and\r\nrequire restarting. Additionally, see the note at top about enabling the\r\nnetwork when reloading the workspace. We believe we are close to our\r\ngoal that restarting gopls should never be required to fix workspace\r\nerrors. If you encounter such a bug, please file an issue!</li>\r\n</ul>\r\n<p>A full list of all issues fixed can be found in the <a\r\nhref=\"https://github.com/golang/go/milestone/274?closed=1\">gopls/v0.9.2\r\nmilestone</a>.\r\nTo report a new problem, please file a new issue at <a\r\nhref=\"https://go.dev/issues/new\">https://go.dev/issues/new</a>.</p>\r\n<h2>Thank you to our contributors!</h2>\r\n<p>Thank you for your contribution, <a\r\nhref=\"https://github.com/alandonovan\"><code>@​alandonovan</code></a>, <a\r\nhref=\"https://github.com/antoineco\"><code>@​antoineco</code></a>, <a\r\nhref=\"https://github.com/dle8\"><code>@​dle8</code></a>, <a\r\nhref=\"https://github.com/euroelessar\"><code>@​euroelessar</code></a>, <a\r\nhref=\"https://github.com/findleyr\"><code>@​findleyr</code></a>, <a\r\nhref=\"https://github.com/hyangah\"><code>@​hyangah</code></a>, <a\r\nhref=\"https://github.com/jamalc\"><code>@​jamalc</code></a>, <a\r\nhref=\"https://github.com/mssdvd\"><code>@​mssdvd</code></a>, <a\r\nhref=\"https://github.com/pjweinbgo\"><code>@​pjweinbgo</code></a>, <a\r\nhref=\"https://github.com/rentziass\"><code>@​rentziass</code></a>, and <a\r\nhref=\"https://github.com/suzmue\"><code>@​suzmue</code></a>!</p>\r\n<h2>What's next</h2>\r\n<p>The next planned gopls release is <a\r\nhref=\"https://github.com/golang/go/milestone/278\">v0.10.0</a>. We’re\r\nexcited about features and improvements on the horizon, for example:</p>\r\n<ul>\r\n<li>Package renaming (<a\r\nhref=\"https://go.dev/issues/41567\">#41567</a>)</li>\r\n<li>More accurate static-analysis (<a\r\nhref=\"https://go.dev/issues/48738\">#48738</a>)</li>\r\n<li>Improved support for the new 1.19 doc comment format (<a\r\nhref=\"https://go.dev/issues/54260\">#54260</a>)</li>\r\n<li>Making it easier to work with <code>go.work</code> files (many\r\nissues, for example <a href=\"https://go.dev/issues/53880\">#53880</a> or\r\n<a href=\"https://go.dev/issues/54261\">#54261</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0dda7d614e545bb93966bb1410269b3cd1e65e1d\"><code>0dda7d6</code></a>\r\ngo/pointer: remove replace directive</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/98f1b4dee82ca3ded542b3c37a62f58f0eb744b7\"><code>98f1b4d</code></a>\r\ngopls/internal/lsp/cache: check number of orphaned files after\r\nfiltering</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/a260315e300ac46cc74b461bb418e4a800ee55bf\"><code>a260315</code></a>\r\ngo/pointer: create submodule</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/96844c3594b1a5b71b689f4d38697c012e093011\"><code>96844c3</code></a>\r\ncmd/{guru,callgraph}: stop using go/pointer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/cd694d8db4f10068e4fe38fe7aa1aa8bda65b88b\"><code>cd694d8</code></a>\r\ngo/packages: include\r\n&quot;unsafe&quot;.GoFiles=[&quot;unsafe.go&quot;]</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/33c741de78259c8c12df7103f7a6caf8dd9c6181\"><code>33c741d</code></a>\r\ngopls/internal/lsp: add min/max builtin</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/933c7ccb15451459ca4fe53c041a4108f4859d91\"><code>933c7cc</code></a>\r\ninternal/lsp/source: use exact match in import highlighting</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5974258e689a4f8a93448a0d181737afa4506e3f\"><code>5974258</code></a>\r\ngopls/internal/lsp: clear vuln diagnostics on config changes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f3faea1982c3b87f69b407fc0add0e10c591b9dc\"><code>f3faea1</code></a>\r\ngo/packages: pass -pgo=off on go1.21 and later</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5f74ec7da5f5b84a3d05750000a35e486c0edece\"><code>5f74ec7</code></a>\r\ninternal/lsp/debug: add links to profiles and GC</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.9.1...v0.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.9.1&new-version=0.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:54:58-07:00",
          "tree_id": "1c3e5ba43d97b43b11ab5af8f10989057ca03a11",
          "url": "https://github.com/runfinch/finch/commit/b192874e2b1c5de1c2148813760cbe65e15d7553"
        },
        "date": 1685728732154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58134125125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4850",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "66.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.13",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1956167680",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2624736",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55202",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24037016708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3405",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.04",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "229376",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1072240",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22796",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 358839680,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4867",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.74",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3588",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26064",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "383",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1331529333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.7573",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.332",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "66648",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1287",
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
          "id": "f6f8aeb40fa0b2cfaa807c98eb3576ca262d75aa",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.1+incompatible to 24.0.2+incompatible (#419)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.1+incompatible to 24.0.2+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.2</h2>\r\n<h2>24.0.2</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.2\">docker/cli,\r\n24.0.2 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.2\">moby/moby,\r\n24.0.2 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a panic during build when referencing locally tagged images. <a\r\nhref=\"https://redirect.github.com/moby/buildkit/pull/3899\">moby/buildkit#3899</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45582\">moby/moby#45582</a></li>\r\n<li>Fix builds potentially failing with <code>exit code:\r\n4294967295</code> when performing many concurrent build stages. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45620\">moby/moby#45620</a></li>\r\n<li>Fix DNS resolution on Windows ignoring <code>etc/hosts</code>\r\n(<code>%WINDIR%\\System32\\Drivers\\etc\\hosts</code>), including resolution\r\nof <code>localhost</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45562\">moby/moby#45562</a></li>\r\n<li>Apply a workaround for a containerd bug that causes concurrent\r\n<code>docker exec</code> commands to take significantly longer than\r\nexpected. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45625\">moby/moby#45625</a></li>\r\n<li>containerd image store: Fix an issue where the image\r\n<code>Created</code> field would contain an incorrect value. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45623\">moby/moby#45623</a></li>\r\n<li>containerd image store: Adjust the output of image pull progress so\r\nthat the output has the same format regardless of whether the containerd\r\nimage store is enabled. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45602\">moby/moby#45602</a></li>\r\n<li>containerd image store: Switching between the default and containerd\r\nimage store now requires a daemon restart. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45616\">moby/moby#45616</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/659604f9ee60f147020bdd444b26e4b5c636dc28\"><code>659604f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45625\">#45625</a>\r\nfrom thaJeztah/24.0_backport_serialize_exec_starts_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/6660133ffb91a3b754fe4ad16b87523dbc8493c8\"><code>6660133</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45582\">#45582</a>\r\nfrom thaJeztah/24.0_backport_vendor_buildkit_0.11.7...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/67b3563d096d21e45b92cbd1ecc2ce4bc72eab36\"><code>67b3563</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45623\">#45623</a>\r\nfrom vvoland/c8d-inspect-created-time-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7a4ea198032957918ffb4359d1b621b8cfd82201\"><code>7a4ea19</code></a>\r\nlibcontainerd: work around exec start bug in c8d</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ae6e9333c00dd6bfa674fde77399650841803821\"><code>ae6e933</code></a>\r\nvendor: github.com/moby/buildkit\r\nv0.11.7-0.20230525183624-798ad6b0ce9f</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0d9acd24fe3a4d45b602f896d091a3855057d31d\"><code>0d9acd2</code></a>\r\nc8d/inspect: Fill <code>Created</code> time if available</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/37bc6397044d5a937929cbe94bf80a9d0b42ab2f\"><code>37bc639</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45620\">#45620</a>\r\nfrom thaJeztah/24.0_backport_update_go_runc_v1.1.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/04eccf81654771f187cd7fdf34b3b12553e4e028\"><code>04eccf8</code></a>\r\nvendor: github.com/containerd/go-runc v1.1.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/24722779ffc5e4de697bea0606a9b92fa8111d2e\"><code>2472277</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45616\">#45616</a>\r\nfrom thaJeztah/24.0_backport_lock_in_snapshotter_se...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9d8acb7bd1dfc45ac5522e843c81f7653bbd9c0c\"><code>9d8acb7</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45612\">#45612</a>\r\nfrom vvoland/dangling-image-repotagsdigests-test-24</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.1...v24.0.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.1+incompatible&new-version=24.0.2+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:55:29-07:00",
          "tree_id": "1f2fcfedd0b5d03454c8a1dc8a59bb02d77cc8bd",
          "url": "https://github.com/runfinch/finch/commit/f6f8aeb40fa0b2cfaa807c98eb3576ca262d75aa"
        },
        "date": 1685728772825,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 56259239875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4040",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "75.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "56.26",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1953894400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2546304",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "53400",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24016903250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5053",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.02",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "253952",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069128",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22721",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 392414361,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.067",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "21.67",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3924",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "27408",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "416",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1439073542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.114",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.439",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "73552",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1398",
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
          "id": "8635294bcb22207bfdaa3f96756f93ba580ff6e2",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.4 to 3.23.5 (#437)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.4 to 3.23.5.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/32e8a92ad6ba363a9cbc05ea9e284c11c723efe3\"><code>32e8a92</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1475\">#1475</a>\r\nfrom shirou/feature/fix_potential_leak_on_common_sleep</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/3e789a459a881bc31b8f24435fe02013818466ee\"><code>3e789a4</code></a>\r\n[common]: fix potential leak on Sleep.</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/03ae19bea8ddab95f5f373d14f9f7a91ebc293b2\"><code>03ae19b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1472\">#1472</a>\r\nfrom powersj/fix/writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/194e6e2edc1530a9f4f73d58d1094af865b3120e\"><code>194e6e2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1467\">#1467</a>\r\nfrom shirou/dependabot/go_modules/github.com/yusufpa...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/553769014163e842a64c5714480a0439ee4fa1b2\"><code>5537690</code></a>\r\nchore(deps): bump github.com/yusufpapurcu/wmi from 1.2.2 to 1.2.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/1983d2b90843b90f1f6958bbb5f741f511201f90\"><code>1983d2b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1468\">#1468</a>\r\nfrom shirou/dependabot/go_modules/github.com/stretch...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d71f0022a12a981442e245cfb8d962e9c00ff8b6\"><code>d71f002</code></a>\r\nfix(mem): Correct capitalization of linux writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/fd69d68f44b6d9c2054497a8f37ac51f5bcefaa3\"><code>fd69d68</code></a>\r\nchore(deps): bump github.com/stretchr/testify from 1.8.2 to 1.8.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/7c610c50377c48e230fd092e65e656b03b97b069\"><code>7c610c5</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1462\">#1462</a>\r\nfrom cuishuang/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9aa4e7a744bb35916461100865e7774a76f4053c\"><code>9aa4e7a</code></a>\r\nfix some comments</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.4...v3.23.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.4&new-version=3.23.5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:55:58-07:00",
          "tree_id": "69bedd1390c4851caf133cb4b095e3d019c0450c",
          "url": "https://github.com/runfinch/finch/commit/8635294bcb22207bfdaa3f96756f93ba580ff6e2"
        },
        "date": 1685728964679,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 57394324750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.5612",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "62.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "57.39",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1973747712",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2590888",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "54424",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23992495166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4125",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.99",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-339968",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069472",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22733",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 389422570,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5817",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "13.94",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3894",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "27253",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "414",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1453115666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.190",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.453",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3629056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "74976",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1421",
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
          "id": "0a381f17ea2602bc3b19f9b2101da9e3a589f6d3",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (#432)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.5 to 2.9.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.9.7</h2>\r\n<h2>2.9.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix race when multiple defercleanups are called in goroutines\r\n[07fc3a0]</li>\r\n</ul>\r\n<h2>v2.9.6</h2>\r\n<h2>2.9.6</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)\r\n[0ac65de]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)\r\n[3e39231]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.9.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix race when multiple defercleanups are called in goroutines\r\n[07fc3a0]</li>\r\n</ul>\r\n<h2>2.9.6</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)\r\n[0ac65de]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)\r\n[3e39231]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/913e9e59827a331526f32f01439cb66083b51ec4\"><code>913e9e5</code></a>\r\nv2.9.7</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/07fc3a024fe632ffdced3ec39a8ec1db222b6225\"><code>07fc3a0</code></a>\r\nfix race when multiple defercleanups are called in goroutines</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/96206239b0a7146bd24463359d7bdd9c665d3583\"><code>9620623</code></a>\r\nv2.9.6</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8ba8b229c37e0cf299f1acb2a3b9d23ec569da4f\"><code>8ba8b22</code></a>\r\nensure report directory tests work when run in parallel</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0ac65de7efb8c5c240f6b2f79ab15b4f4c443b35\"><code>0ac65de</code></a>\r\nfix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4c2ae233f9e3c9de1982f8b33272c0675fd547c4\"><code>4c2ae23</code></a>\r\nFix return value in index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1208\">#1208</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/3e39231dee937854d166b210e0542798da58aa09\"><code>3e39231</code></a>\r\nBump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.5...v2.9.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.5&new-version=2.9.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T12:03:20-07:00",
          "tree_id": "c1136794cddf05c4b049eb5ff3f0d828045c9e18",
          "url": "https://github.com/runfinch/finch/commit/0a381f17ea2602bc3b19f9b2101da9e3a589f6d3"
        },
        "date": 1685733809970,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 56993507000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3851",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "56.99",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1973469184",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2570920",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "53959",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24001292541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5169",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "167936",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1070648",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22766",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 362383333,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.9090",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "19.05",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3623",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26352",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "392",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1366922042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4375",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.367",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68888",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1339",
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
          "id": "0f7750ebeee01108a9f6a6fcfe0c7f5f044bc336",
          "message": "build(deps): Bump github.com/stretchr/testify from 1.8.2 to 1.8.4 (#429)\n\nBumps [github.com/stretchr/testify](https://github.com/stretchr/testify)\r\nfrom 1.8.2 to 1.8.4.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/f97607b89807936ac4ff96748d766cf4b9711f78\"><code>f97607b</code></a>\r\nCreate GitHub release when new release tag is pushed (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1354\">#1354</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/4c93d8f201cb46ed50de949ee65804f944b570f8\"><code>4c93d8f</code></a>\r\nEqualExportedValues: Handle nested pointer, slice and map fields (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1379\">#1379</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/4b2f4d2bcff3848b6a4e63d462da6ce3c21e9c78\"><code>4b2f4d2</code></a>\r\nadd EventuallyWithT assertion (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1264\">#1264</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/b3106d772c7aa439743e1a3f4de81149e323cf70\"><code>b3106d7</code></a>\r\nallow testing for functional options (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1023\">#1023</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/437071b948cd89bdbaaf43a41f19fbe1a0945f6f\"><code>437071b</code></a>\r\nassert: fix error message formatting for NotContains (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1362\">#1362</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/c5fc9d6b6b21ea89be8480c0dc35e2977ab988f6\"><code>c5fc9d6</code></a>\r\nCompare public elements of struct (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1309\">#1309</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/stretchr/testify/compare/v1.8.2...v1.8.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/stretchr/testify&package-manager=go_modules&previous-version=1.8.2&new-version=1.8.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T14:07:49-07:00",
          "tree_id": "6315646cec92c8216dfe2441c6ffe9eaf37346ad",
          "url": "https://github.com/runfinch/finch/commit/0f7750ebeee01108a9f6a6fcfe0c7f5f044bc336"
        },
        "date": 1685740306678,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 57031538875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4392",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "57.03",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1935048704",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2570840",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "53985",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23990308292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4905",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "23.99",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-16384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1068760",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22722",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 352115306,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.032",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "24.07",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3521",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25877",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "378",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1553577959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.208",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.554",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "79768",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1525",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "da91f87369e5fde221b8edbac374954e71dae947",
          "message": "fix: Add cleanup script to Makefile (#444)\n\n*Description of changes:*\r\nRemove files under other directories besides _output, and kill running\r\nprocesses for network, lima and qemu.\r\n\r\n*Testing done:*\r\nTested locally\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-06-02T20:08:20-07:00",
          "tree_id": "030696b83e1faf45fa5355cc74459ba8273e20e2",
          "url": "https://github.com/runfinch/finch/commit/da91f87369e5fde221b8edbac374954e71dae947"
        },
        "date": 1685761932614,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58092269625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4816",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "57.14",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.09",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1961717760",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2619952",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55091",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23998801583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5525",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "122880",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1067208",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22684",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 347376875,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.347",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "20.63",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3473",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "25154",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "372",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1372047959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.780",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.372",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3629056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "68784",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1337",
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
          "id": "18236774d971065dec28d1db204e1f697d418a9b",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.2 to 1.9.3 (#446)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.2 to 1.9.3.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/d40e25cd45ed9c6b2b66e6b97573a0413e4c23bd\"><code>d40e25c</code></a>\r\nfix panic in Writer</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/f9291a534cac1466d26414fd9e326381cd64ecef\"><code>f9291a5</code></a>\r\nRevert &quot;Revert &quot;Merge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master&quot;&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.2...v1.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.2&new-version=1.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-05T11:15:01-07:00",
          "tree_id": "70db57c1775154e572df0c514794b3324c7001f6",
          "url": "https://github.com/runfinch/finch/commit/18236774d971065dec28d1db204e1f697d418a9b"
        },
        "date": 1685989139738,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62565040042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4151",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "62.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "62.56",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1576263680",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2803232",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59237",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25112187542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4992",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "25.11",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "20099072",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1113912",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "23744",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372674278,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.026",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.50",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3726",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "176128",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26821",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "398",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1376942333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8792",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.377",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71720",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1349",
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
          "id": "a415e3ef7b2741853bf352b915c4100c77600619",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (#449)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.7 to 2.10.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.10.0</h2>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/edf2c70bdd2d9541a8e66d1835032127ad4c5d14\"><code>edf2c70</code></a>\r\nv2.10.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/a782a77ba8a8ddfd763e2f08b741339facc04006\"><code>a782a77</code></a>\r\nfeat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/548d78e6eaea8bd55316cbec418b6dba297b73ee\"><code>548d78e</code></a>\r\nFix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/2b76a5ec3a018f9c7451f4ed9d0350e21248a637\"><code>2b76a5e</code></a>\r\nBump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.7...v2.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.7&new-version=2.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-08T12:05:08-07:00",
          "tree_id": "7d0426eaf21e581716ccaa1d2220d852432ff817",
          "url": "https://github.com/runfinch/finch/commit/a415e3ef7b2741853bf352b915c4100c77600619"
        },
        "date": 1686251347269,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 56854493708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4467",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "55.56",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "56.85",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1977962496",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2569656",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "53931",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24042810875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.5703",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.04",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1978368",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069816",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22739",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 380375195,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8102",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.28",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3803",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "27344",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "404",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1333188084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.6593",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.333",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67512",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1307",
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
          "id": "96fc8d09a051b2ead932e6eef064624b1a842b66",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (#448)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.7 to 1.27.8.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.8</h2>\r\n<h2>1.27.8</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>HaveExactElement should not call FailureMessage if a submatcher\r\nreturned an error [096f392]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)\r\n[8884bee]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.8</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>HaveExactElement should not call FailureMessage if a submatcher\r\nreturned an error [096f392]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)\r\n[8884bee]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/492512ff860f2a449e265ffde21c2e4dfec1d116\"><code>492512f</code></a>\r\nv1.27.8</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/096f3925a4dba582508d4019fa118ef8cc1ee0a7\"><code>096f392</code></a>\r\nHaveExactElement should not call FailureMessage if a submatcher returned\r\nan e...</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/8884bee393a8348465d7a475382367827f21677c\"><code>8884bee</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.7...v1.27.8\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.7&new-version=1.27.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-12T10:30:23-07:00",
          "tree_id": "10f049c03ae10bc0244c31448d03f26a23429098",
          "url": "https://github.com/runfinch/finch/commit/96fc8d09a051b2ead932e6eef064624b1a842b66"
        },
        "date": 1686591264735,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 59191317334,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4202",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "59.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1962905600",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2660080",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55994",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24033565542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4518",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.03",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "17158144",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069904",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22744",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 386023208,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.181",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "26.48",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3860",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "27205",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "410",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1474228750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.9267",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.474",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "75648",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1439",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113054166+sam-berning@users.noreply.github.com",
            "name": "Sam Berning",
            "username": "sam-berning"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f4b87c616a0329cb6c8ff27db003766ef0bba2c",
          "message": "test: mocks LimaUser to fix race condition in support bundle unit tests (#450)\n\nIssue #, if available: https://github.com/runfinch/finch/issues/447\r\n\r\n*Description of changes:*\r\n\r\nThere was a race condition in the unit tests for `support-bundle\r\ngenerate` caused by Lima's `osutil.LimaUser` not being thread-safe. I\r\ndon't think there's really a need to make it thread-safe, so I think\r\nit's easier to just wrap and mock it for the unit tests, which I've done\r\nhere.\r\n\r\n*Testing done:*\r\n\r\n```\r\nmake test-unit\r\n```\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Sam Berning <bernings@amazon.com>",
          "timestamp": "2023-06-13T10:50:41-07:00",
          "tree_id": "ae8b6aa66838b1b01fd822604932582730de8710",
          "url": "https://github.com/runfinch/finch/commit/9f4b87c616a0329cb6c8ff27db003766ef0bba2c"
        },
        "date": 1686678880155,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 58733504834,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.5438",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "55.56",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "58.73",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1974431744",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2648312",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "55716",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23995766833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3896",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "32043008",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1069056",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22741",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372189819,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.2451",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "8.333",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3721",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26725",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "397",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1444301458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5877",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "36.36",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.444",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3629056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "74952",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1412",
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
          "id": "fef6e772c28429ef14068702c1dfd8e9fec2dea1",
          "message": "build(deps): Bump golang.org/x/crypto from 0.9.0 to 0.10.0 (#451)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from 0.9.0\r\nto 0.10.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/8e447d8cc585b0089d1938b8747264783295e65f\"><code>8e447d8</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/22c99979527e39b0c665cb2ed3c91e30739b69e6\"><code>22c9997</code></a>\r\ngo.mod: tell x repo tagging to ignore dep on net</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/d0b316056be80e452fdae998581d0a807b8df0a8\"><code>d0b3160</code></a>\r\nx509roots: add new module</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/16222386f4de802a3c27c1714b0bcc28c0fd5397\"><code>1622238</code></a>\r\nAdd support for &quot;<a\r\nhref=\"mailto:hmac-sha2-512-etm@openssh.com\">hmac-sha2-512-etm@openssh.com</a>&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.9.0...v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.9.0&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-16T10:41:24-07:00",
          "tree_id": "b3101d1bb452fb552751813bab329f79af64f4ab",
          "url": "https://github.com/runfinch/finch/commit/fef6e772c28429ef14068702c1dfd8e9fec2dea1"
        },
        "date": 1686937522853,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 60372971250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4209",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "60.37",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1972834304",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2717376",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "57292",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24076345791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3645",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.08",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1753088",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1071304",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22769",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 361987208,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5497",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.07",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3619",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26178",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "387",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1316209958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8444",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.316",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20373504",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67248",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1291",
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
          "id": "f7e091670fb2ac5377423e72f98aa8be33aa41c8",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (#456)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.10.0 to 2.11.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.11.0</h2>\r\n<h2>2.11.0</h2>\r\n<p>In prior versions of Ginkgo specs the CLI filter flags (e.g.\r\n<code>--focus</code>, <code>--label-filter</code>) would\r\n<em>override</em> any programmatic focus. This behavior has proved\r\nsurprising and confusing in at least the following ways:</p>\r\n<ul>\r\n<li>users cannot combine programmatic filters and CLI filters to more\r\nefficiently select subsets of tests</li>\r\n<li>CLI filters can override programmatic focus on CI systems resulting\r\nin an exit code of 0 despite the presence of (incorrectly!) committed\r\nfocused specs.</li>\r\n</ul>\r\n<p>Going forward Ginkgo will AND all programmatic and CLI filters.\r\nMoreover, the presence of any programmatic focused tests will always\r\nresult in a non-zero exit code.</p>\r\n<p>This change is technically a change in Ginkgo's external contract and\r\nmay require some users to make changes to successfully adopt.\r\nSpecifically: it's possible some users were intentionally using CLI\r\nfilters to override programmatic focus. If this is you please open an\r\nissue so we can explore solutions to the underlying problem you are\r\ntrying to solve.</p>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Programmatic focus is no longer overwrriten by CLI filters\r\n[d6bba86]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)\r\n[4a70a38]</li>\r\n<li>Bump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)\r\n[97eda4d]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.11.0</h2>\r\n<p>In prior versions of Ginkgo specs the CLI filter flags (e.g.\r\n<code>--focus</code>, <code>--label-filter</code>) would\r\n<em>override</em> any programmatic focus. This behavior has proved\r\nsurprising and confusing in at least the following ways:</p>\r\n<ul>\r\n<li>users cannot combine programmatic filters and CLI filters to more\r\nefficiently select subsets of tests</li>\r\n<li>CLI filters can override programmatic focus on CI systems resulting\r\nin an exit code of 0 despite the presence of (incorrectly!) committed\r\nfocused specs.</li>\r\n</ul>\r\n<p>Going forward Ginkgo will AND all programmatic and CLI filters.\r\nMoreover, the presence of any programmatic focused tests will always\r\nresult in a non-zero exit code.</p>\r\n<p>This change is technically a change in Ginkgo's external contract and\r\nmay require some users to make changes to successfully adopt.\r\nSpecifically: it's possible some users were intentionally using CLI\r\nfilters to override programmatic focus. If this is you please open an\r\nissue so we can explore solutions to the underlying problem you are\r\ntrying to solve.</p>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Programmatic focus is no longer overwrriten by CLI filters\r\n[d6bba86]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)\r\n[4a70a38]</li>\r\n<li>Bump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)\r\n[97eda4d]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/5c32b2a6408b866b04774abad81eca2274f4fb5b\"><code>5c32b2a</code></a>\r\nv2.11.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/d6bba86e67d4973f786752a070f69b7732601caa\"><code>d6bba86</code></a>\r\nProgrammatic focus is no longer overwrriten by CLI filters</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4a70a38d78ea5f2bca038945b4e49442fb93c7a3\"><code>4a70a38</code></a>\r\nBump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/97eda4d083fd88e17b9f1c947a24cf0ac5864dce\"><code>97eda4d</code></a>\r\nBump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.10.0...v2.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.10.0&new-version=2.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-27T11:58:39-07:00",
          "tree_id": "38d4500d4339a269988a2d4b9bfda964b2951484",
          "url": "https://github.com/runfinch/finch/commit/f7e091670fb2ac5377423e72f98aa8be33aa41c8"
        },
        "date": 1687892819863,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 168203129750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2420",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "71.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "168.2",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1987342336",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "7445480",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "157749",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24052233750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4112",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "60.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.05",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "4464640",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1067864",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22717",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 375722014,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8186",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.50",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3757",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26530",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "399",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1347888083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.629",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.348",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "67920",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1317",
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
          "id": "e321f1dc607626a7f65b33e0a0f503d8c856b1f2",
          "message": "build(deps): Bump golang.org/x/tools from 0.9.3 to 0.10.0 (#455)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.9.3\r\nto 0.10.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.10.0</h2>\r\n<p>This release contains initial support for standalone packages and\r\npackage renaming. Please see below for more details.</p>\r\n<p>We are also changing our release policy to better align with\r\nsemver.</p>\r\n<h2>Support changes</h2>\r\n<p>This version of gopls contains changes to our release policy,\r\ndeprecates support for some older Go versions, and deprecates support\r\nfor several experimental features.</p>\r\n<h3>New release policy</h3>\r\n<p>As described in <a\r\nhref=\"https://redirect.github.com/golang/go/issues/55267\">golang/go#55267</a>,\r\nwe are tightening our release policy to better follow semver, increase\r\nstability, and reduce release-related toil. Significant new features\r\nwill only be introduced in <code>*.*.0</code> patch versions, and\r\nsubsequent patch releases will consist only of bugfixes. For example,\r\nthis version (v0.10.0) introduces several new features, described below.\r\nSubsequent v0.10.* releases will contain only bugfixes.</p>\r\n<h3>Final support for Go 1.13-1.15</h3>\r\n<p>Consistent with the above release policy and our stated <a\r\nhref=\"https://github.com/golang/tools/tree/master/gopls#supported-go-versions-and-build-systems\">support\r\nwindow</a>, the <code>v0.10.*</code> minor version will be the final set\r\nof releases to support being used with Go 1.13-1.15. See <a\r\nhref=\"https://redirect.github.com/golang/go/issues/52982\">golang/go#52982</a>\r\nfor details.</p>\r\n<p>Gopls will pop up a warning if it resolves a version of the\r\n<code>go</code> command that is older than 1.16. Starting with\r\ngopls@v0.11.0, gopls will cease to function when used with a\r\n<code>go</code> command with a version older than 1.16.</p>\r\n<h3>Deprecated experimental features</h3>\r\n<p>The following experimental features are deprecated, and will be\r\nremoved in gopls@v0.11.0:</p>\r\n<ul>\r\n\r\n<li><strong>experimentalWorkspaceModule</strong><code>golang/go#52897</code><code>go.work</code>\r\nfiles. See our <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/workspace.md#go-workspaces-go-118\">documentation</a>\r\nfor information on how to use <code>go.work</code> files to work on\r\nmultiple modules.</li>\r\n\r\n<li><strong>experimentalWatchedFileDelay</strong><code>golang/go#55268</code><code>workspace/didChangeWatchedFiles</code>\r\nnotifications.</li>\r\n\r\n<li><strong>experimentalUseInvalidMetadata</strong><code>golang/go#54180</code></li>\r\n</ul>\r\n<h2>New Features</h2>\r\n<h3>Support for &quot;standalone packages&quot;</h3>\r\n<p>Gopls now recognizes certain files as &quot;standalone main\r\npackages&quot;, meaning they should be interpreted as main packages\r\nconsisting of a single file. To do this, gopls looks for packages named\r\n<code>main</code> containing a single build constraint that matches one\r\nof the tags configured by the new <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#standalonetags-string\"><code>standaloneTags</code></a>\r\nsetting.</p>\r\n<p>This enables cross references and other features when working in a\r\nfile such as the example below that contains a <code>//go:build\r\nignore</code> build constraint.</p>\r\n<p><img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197039428-72d78300-cbea-4abe-a408-e171991094b8.png\"\r\nalt=\"image\" /></p>\r\n<h3>(preview) Support for package renaming</h3>\r\n<p><code>golang/go#41567</code><a\r\nhref=\"https://redirect.github.com/golang/go/issues/56184\">golang/go#56184</a>.</p>\r\n<p>To rename a package, initiate a rename request on the package clause\r\nof a file in the package:\r\n<img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197041786-bf9e617c-9961-46ae-b21a-c240a18a3014.png\"\r\nalt=\"image\" /></p>\r\n<p>When this renaming is applied, gopls will adjust other package files\r\naccordingly, rename the package directory, and update import paths\r\nreferencing the current package or any nested package in the renamed\r\ndirectory.\r\n<img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197042160-e034e38d-3cd3-4c62-b912-747d8dc2f4ff.png\"\r\nalt=\"image\" /></p>\r\n<h3>Method information in hover</h3>\r\n<p>Hovering over a type now shows a summary of its methods.</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/7261b3269227f2c7636f7d4316ed3dd5122d17ff\"><code>7261b32</code></a>\r\ngopls/internal/regtest: fix goimports on windows when using\r\nvendoring</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/41e4e565498859435a2ad44a71cf6701a6afb585\"><code>41e4e56</code></a>\r\ngopls/internal/lsp/source/completion: ensuring completion\r\ncompleteness</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ac2946029ad3806349fa00546449da9f59320e89\"><code>ac29460</code></a>\r\ngo/ssa: fix bug in writeSignature on external functions</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3b62e7e25641fc2dabe915a738906d0779724bf1\"><code>3b62e7e</code></a>\r\ngo/ssa: use core type within (*builder).receiver</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f394d451f85a030254df453bf84a450b228c4250\"><code>f394d45</code></a>\r\ngopls/internal/lsp/cache: compute xrefs and methodsets\r\nasynchronously</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/27dbf85279a5e6e906a8c1b5cc5b73e8229a8efa\"><code>27dbf85</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c6c983054920f47ed9e5ba1b55a7a5934dd8bf53\"><code>c6c9830</code></a>\r\ngo/types/objectpath: memoize scope lookup in objectpath.Encoder</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0245e1dfc6b09a30ad018bdcdadef4961067cfd4\"><code>0245e1d</code></a>\r\ngopls/internal/regtest/codelens: set GOWORK=off for go mod vendor</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/85be8882c905a9b24abcec8363e48a14ad5cd4e2\"><code>85be888</code></a>\r\ngo/analysis/passes/defers: add analyser for defer mistake</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c43232f868439dcfd25d98501dafa5e695cd1d35\"><code>c43232f</code></a>\r\ncmd/digraph: improve examples using go list, mod</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.9.3...v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.9.3&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T18:05:02-04:00",
          "tree_id": "15d367907740e52ecdec13591f1472991cc10c5e",
          "url": "https://github.com/runfinch/finch/commit/e321f1dc607626a7f65b33e0a0f503d8c856b1f2"
        },
        "date": 1688076585893,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 67288065500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.4231",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "75.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "67.29",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2008190976",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2993152",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "63555",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24093308042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3496",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.09",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-8192",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1071224",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22772",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 375161180,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.500",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "27.79",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3751",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26904",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "401",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1389256833,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "2.003",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.389",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3637248",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "71304",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1348",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55906459+austinvazquez@users.noreply.github.com",
            "name": "Austin Vazquez",
            "username": "austinvazquez"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4347ba7b6df08f4a7e6cb0ab5914753e81ea87f7",
          "message": "chore: Update Go linter to v1.53.3 and resolve errors (#459)\n\nIssue #, if available:\r\nN/A\r\n\r\n*Description of changes:*\r\nUpdates golangci-lint in CI to v1.53.3 release and resolves linting\r\nerrors for unused arguments.\r\n\r\n*Testing done:*\r\n```make lint```\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Austin Vazquez <macedonv@amazon.com>",
          "timestamp": "2023-06-29T19:13:36-04:00",
          "tree_id": "b8b267781610164eb5bd66888fce1a330bab334e",
          "url": "https://github.com/runfinch/finch/commit/4347ba7b6df08f4a7e6cb0ab5914753e81ea87f7"
        },
        "date": 1688081410260,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 62366678584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3892",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "57.14",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "62.37",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1974886400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "2798416",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "59134",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24172688666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3762",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.17",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "512000",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1076640",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22907",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 369407708,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6668",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "22.22",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3694",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26402",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "393",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1376652916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "1.316",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "44.44",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.377",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3596288",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "69264",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1338",
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
          "id": "d6746a447e10bed6c13d197c8d693b27e02ac3aa",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.2 to 0.27.3 (#454)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.2 to 0.27.3.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/38152d47d7866fcd1c1287f34cdc2f92fd78a5f2\"><code>38152d4</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118553\">#118553</a>\r\nfrom puerco/bump-1.27-go1.20.5</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/2bd872f9613b7fe77e000706a4875ca13afd4a75\"><code>2bd872f</code></a>\r\nupdate-vendor: update vendored go.sums</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.2...v0.27.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.2&new-version=0.27.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T08:44:53-07:00",
          "tree_id": "c4ed21f0d0322c401c302f18655c952447d551ad",
          "url": "https://github.com/runfinch/finch/commit/d6746a447e10bed6c13d197c8d693b27e02ac3aa"
        },
        "date": 1688140210942,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 128172267666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2707",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "60.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "128.2",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "1971294208",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "5676488",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "120519",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24261458458,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4763",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "24.26",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "2650112",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1080144",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "22985",
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 372515167,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.586",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "24.07",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.3725",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "26554",
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "396",
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1465650625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5514",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "20.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.466",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "75336",
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1430",
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
          "id": "dc5a3e7240d4af6b63874e239bc77bed04d2a0a6",
          "message": "build(deps): Bump golang.org/x/crypto from 0.10.0 to 0.11.0 (#465)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.10.0 to 0.11.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/e98487292dcad4efaa6033b245ee014f90d177a2\"><code>e984872</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/183630ada7e00d6d4743f43479b7d4ea51de715e\"><code>183630a</code></a>\r\nx509roots: generate a stable sort, for real this time</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/a9e447dde7f8f364232efb5072e3ff89b24308da\"><code>a9e447d</code></a>\r\nx509roots/fallback: add //go:build go1.20 to bundle.go</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/64c3993f5c824fe7febbf8561179da523a4e98ea\"><code>64c3993</code></a>\r\nssh: add hmac-sha2-512</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/5fe8145acacf736d52576b87b17c416731e0c4a8\"><code>5fe8145</code></a>\r\nx509roots: remove list hash and generation date, change ordering</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/043e94c17aa993f4d1026a2f692b8980e7740df2\"><code>043e94c</code></a>\r\nx509roots: fix generate script argument checking</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0d502d7cd64920c6d2cce3950ead89a5c4eb5e69\"><code>0d502d7</code></a>\r\nx509roots: use &quot;generate&quot; build tag</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0ff60057bbafb685e9f9a97af5261f484f8283d1\"><code>0ff6005</code></a>\r\nssh/test: set a timeout and WaitDelay on sshd subcommands</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.10.0...v0.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.10.0&new-version=0.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-10T08:42:04-07:00",
          "tree_id": "4830414402544c976dae36207220d7d22e28ff6e",
          "url": "https://github.com/runfinch/finch/commit/dc5a3e7240d4af6b63874e239bc77bed04d2a0a6"
        },
        "date": 1689006605723,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 64836453459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4085,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": 54.55,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 64.84,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1987502080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2895400,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 61344,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23924496250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4671,
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
            "value": 23.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 430080,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1063872,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22611,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 375681945,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5929,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.93,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3756,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -8962048,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26525,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 399,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1372410417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5962,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.372,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3596288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 68408,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1327,
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
          "id": "43a672011fd47830073b8cc7427f82c6f1c3e5bd",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.5 to 3.23.6 (#464)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.5 to 3.23.6.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.6</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>allow to pass context values to override environment variables by <a\r\nhref=\"https://github.com/atoulme\"><code>@​atoulme</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1439\">shirou/gopsutil#1439</a></li>\r\n</ul>\r\n<p>Starting with this release, directory specifications that were\r\npreviously passed by environment variables such as\r\n<code>HOST_PROC</code> can also be passed by context. Conventional\r\nenvironment variables can still be used.</p>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>add(README): add passing context value document by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1478\">shirou/gopsutil#1478</a></li>\r\n<li>Reference actions by commit SHA by <a\r\nhref=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1480\">shirou/gopsutil#1480</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6\">https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/f08589cdac9026b9377aa3f9e6ad4e66cde0fe4f\"><code>f08589c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1487\">#1487</a>\r\nfrom shirou/dependabot/github_actions/actions/labele...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/3a5aa800b7f43865b42af8128693de22bf13e2b1\"><code>3a5aa80</code></a>\r\nchore(deps): bump actions/labeler from 4.1.0 to 4.2.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/fb83fb22d68f468adf2a01a9ed4963e7d980cfd7\"><code>fb83fb2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1483\">#1483</a>\r\nfrom shirou/dependabot/github_actions/golangci/golan...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/88f1b71f94c2ba0ff3d5b4c5d25ff8bc88eadbec\"><code>88f1b71</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1482\">#1482</a>\r\nfrom shirou/dependabot/github_actions/actions/checko...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8ea31540042b37bdfd885e7ef0ec253721695730\"><code>8ea3154</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1484\">#1484</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/ddec0d359d1f2ca95b820fcb20f3256366ad7a74\"><code>ddec0d3</code></a>\r\nchore(deps): bump golang.org/x/sys from 0.8.0 to 0.9.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/e50406fccab8008b8276f94c1b234287d0e2a154\"><code>e50406f</code></a>\r\nchore(deps): bump golangci/golangci-lint-action from 3.5.0 to 3.6.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4eccb7db0ec0a828d1081a6386410b34334dcafc\"><code>4eccb7d</code></a>\r\nchore(deps): bump actions/checkout from 3.5.2 to 3.5.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/efe7a95f412c5598cb4e44467849e46627f86cad\"><code>efe7a95</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1480\">#1480</a>\r\nfrom gabibguti/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/147902f4cb2c5a29e761934431402c2fdbeb6161\"><code>147902f</code></a>\r\nRef actions by commit SHA in test.yml</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.5&new-version=3.23.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-13T18:55:00-07:00",
          "tree_id": "7d1283ed56481045f90e3cb606c4f4688c02be04",
          "url": "https://github.com/runfinch/finch/commit/43a672011fd47830073b8cc7427f82c6f1c3e5bd"
        },
        "date": 1689300019544,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 92474962375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.342,
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
            "value": 92.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1976614912,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 4112888,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 87262,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24033685708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3248,
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
            "value": 24.03,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 17854464,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1070144,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22753,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 366233111,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5091,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.1,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3662,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26261,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 389,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1332320250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.167,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.332,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3596288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1307,
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
          "id": "ad37f4fbce72a6f479620461127e8fe494d47cad",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible (#469)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.2+incompatible to 24.0.4+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.4</h2>\r\n<h2>24.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.4\">docker/cli,\r\n24.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.4\">moby/moby,\r\n24.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a regression introduced during 24.0.3 that causes a panic during\r\nlive-restore of containers with bind mounts. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45903\">moby/moby#45903</a></li>\r\n</ul>\r\n<h2>v24.0.3</h2>\r\n<h2>24.0.3</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.3\">docker/cli,\r\n24.0.3 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.3\">moby/moby,\r\n24.0.3 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>containerd image store: Fix an issue where multi-platform images\r\nthat did not include a manifest for the default platform could not be\r\ninteracted with. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45849\">moby/moby#45849</a></li>\r\n<li>containerd image store: Fix specious attempts to cache <code>FROM\r\nscratch</code> in container builds. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45822\">moby/moby#45822</a></li>\r\n<li>containerd image store: Fix <code>docker cp</code> with snapshotters\r\nthat cannot mount the same content multiple times. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45780\">moby/moby#45780</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45786\">moby/moby#45786</a></li>\r\n<li>containerd image store: Fix builds with <code>type=image</code> not\r\nbeing correctly unpacked/stored. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45692\">moby/moby#45692</a></li>\r\n<li>containerd image store: Fix incorrectly attempting to unpack\r\npseudo-images (including attestations) in <code>docker load</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45688\">moby/moby#45688</a></li>\r\n<li>containerd image store: Correctly set the user agent, and include\r\nadditional information like the snapshotter when interacting with\r\nregistries. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45671\">moby/moby#45671</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45684\">moby/moby#45684</a></li>\r\n<li>containerd image store: Fix a failure to unpack already-pulled\r\ncontent after switching between snapshotters. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45678\">moby/moby#45678</a></li>\r\n<li>containerd image store: Fix images that have been re-tagged or with\r\nall tags removed being pruned while still in use. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45857\">moby/moby#45857</a></li>\r\n<li>Fix a Swarm CSI issue where the Topology field was not propagated\r\ninto NodeCSIInfo. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45810\">moby/moby#45810</a></li>\r\n<li>Fix failures to add new Swarm managers caused by a very large raft\r\nlog. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45703\">moby/moby#45703</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3122\">moby/swarmkit#3122</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3128\">moby/swarmkit#3128</a></li>\r\n<li><code>name_to_handle_at(2)</code> is now always allowed in the\r\ndefault seccomp profile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45833\">moby/moby#45833</a></li>\r\n<li>Fix an issue that prevented encrypted Swarm overlay networks from\r\nworking on ports other than the default (4789). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45637\">moby/moby#45637</a></li>\r\n<li>Fix a failure to restore mount reference-counts during live-restore.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45824\">moby/moby#45824</a></li>\r\n<li>Fix various networking-related failures during live-restore. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45658\">moby/moby#45658</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45659\">moby/moby#45659</a></li>\r\n<li>Fix running containers restoring with a zero (successful) exit\r\nstatus when the daemon is unexpectedly terminated. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45801\">moby/moby#45801</a></li>\r\n<li>Fix a potential panic while executing healthcheck probes. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45798\">moby/moby#45798</a></li>\r\n<li>Fix a panic caused by a race condition in container exec start. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45794\">moby/moby#45794</a></li>\r\n<li>Fix an exception caused by attaching a terminal to an exec with a\r\nnon-existant command. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45643\">moby/moby#45643</a></li>\r\n<li>Fix <code>host-gateway</code> with BuildKit by passing the IP as a\r\nlabel (also requires <a\r\nhref=\"https://redirect.github.com/docker/buildx/pull/1894\">docker/buildx#1894</a>).\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45790\">moby/moby#45790</a></li>\r\n<li>Fix an issue where <code>POST /containers/{id}/stop</code> would\r\nforcefully terminate the container when the request was canceled,\r\ninstead of waiting until the specified timeout for a 'graceful' stop. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45774\">moby/moby#45774</a></li>\r\n<li>Fix an issue where <code>docker cp -a</code> from the root\r\n(<code>/</code>) directory would fail. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45748\">moby/moby#45748</a></li>\r\n<li>Improve compatibility with non-runc container runtimes by more\r\ncorrectly setting resource constraint parameters in the OCI config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45746\">moby/moby#45746</a></li>\r\n<li>Fix an issue caused by overlapping subuid/subgid ranges in certain\r\nconfigurations (e.g. LDAP) in rootless mode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45747\">moby/moby#45747</a>,\r\n<a\r\nhref=\"https://redirect.github.com/rootless-containers/rootlesskit/pull/369\">rootless-containers/rootlesskit#369</a></li>\r\n<li>Greatly reduce CPU and memory usage while populating the Debug\r\nsection of <code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45856\">moby/moby#45856</a></li>\r\n<li>Fix an issue where debug information was not correctly printed\r\nduring <code>docker info</code> when only the client is in debug mode.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4393\">docker/cli#4393</a></li>\r\n<li>Fix issues related to hung connections when connecting to hosts over\r\na SSH connection. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4395\">docker/cli#4395</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/4ffc61430bbe6d3d405bdf357b766bf303ff3cc5\"><code>4ffc614</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45903\">#45903</a>\r\nfrom thaJeztah/24.0_backport_fix_volume_npe</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d3893b58ff9dc2fd1f25e41e6e6766694632787e\"><code>d3893b5</code></a>\r\ndaemon: daemon.prepareMountPoints(): fix panic if mount is not a\r\nvolume</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1d9c8619cded4657af1529779c5771127e8ad0e7\"><code>1d9c861</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45860\">#45860</a>\r\nfrom thaJeztah/24.0_backport_update_cgroups</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/64f79562fb6f00cee512fc613921389b01f32f6f\"><code>64f7956</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45869\">#45869</a>\r\nfrom thaJeztah/24.0_backport_docs_plugin_disable_fo...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/05cf8e8130d50a7d538d0439d6331df9f0154166\"><code>05cf8e8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45867\">#45867</a>\r\nfrom thaJeztah/24.0_backport_api_remove_deprecated_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5892aae60fe4ef681720606afed51e67fc2a7f86\"><code>5892aae</code></a>\r\ndocs: api v1.28 - v1.40: add missing &quot;force&quot; query arg on\r\nplugin disable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7adb590e162da0974b32741e499d0973d3c9255d\"><code>7adb590</code></a>\r\ndocs: api v1.41: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b5aacf8161c99dcd6e04304b14846db7c5094951\"><code>b5aacf8</code></a>\r\ndocs: api v1.42: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b732cfd3928e5efb4bdd36154503a9d1a1f42c69\"><code>b732cfd</code></a>\r\ndocs: api v1.43: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/50fb65f0f534d85c9e8aed1ee3fefadfbc1d5eda\"><code>50fb65f</code></a>\r\ndocs: api: amend changelog for API 1.28 for &quot;force&quot;\r\noption</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.2...v24.0.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.2+incompatible&new-version=24.0.4+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-13T18:55:36-07:00",
          "tree_id": "6bde15c27d80e689b6d93c31ea550326e57a835c",
          "url": "https://github.com/runfinch/finch/commit/ad37f4fbce72a6f479620461127e8fe494d47cad"
        },
        "date": 1689300033518,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 60472648875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4003,
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
            "value": 60.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2010718208,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2714992,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 57229,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24004718875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.451,
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
            "value": 24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -28274688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1067336,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22688,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 352215611,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.479,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.74,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3522,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25397,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 376,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1353113125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.136,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 17.13,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.353,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3596288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67904,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1317,
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
          "id": "a8b32f9674f93cfe54686a2e29b4cf6ca4534939",
          "message": "build(deps): Bump golang.org/x/tools from 0.10.0 to 0.11.0 (#466)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.10.0\r\nto 0.11.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.11.0</h2>\r\n<p>This is a small release containing new integrations of vulnerability\r\nanalysis.</p>\r\n<p>Vulnerability analysis for go.mod files can be enabled by configuring\r\nthe <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;</code></a>\r\nsetting to <code>&quot;Imports&quot;</code>. For more information on\r\nvulnerability management, see the <a\r\nhref=\"https://go.dev/blog/vuln\">Vulnerability Management for Go</a> blog\r\npost.</p>\r\n<h2>Support changes</h2>\r\n<p>This release removes support for the\r\n<code>&quot;experimentalUseInvalidMetadata&quot;</code> setting, as\r\ndescribed in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0</a>\r\nrelease. Other settings slated for deprecation in that release remain\r\ntemporarily supported, but will be removed in v0.12.0.</p>\r\n<h2>New Features</h2>\r\n<h3>Analyzing dependencies for vulnerabilities</h3>\r\n<p>This release offers two different options for detecting\r\nvulnerabilities in dependencies. Both are backed by the Go vulnerability\r\ndatabase (<a href=\"https://vuln.go.dev\">https://vuln.go.dev</a>) and\r\ncomplement each other.</p>\r\n<ul>\r\n<li>Imports-based scanning, enabled by the <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;:\r\n&quot;Imports&quot;</code></a> setting, reports vulnerabilities by\r\nscanning the set of packages imported in the workspace. This is fast,\r\nbut may report more false positives.</li>\r\n<li>Integration of the <a\r\nhref=\"https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck\">golang.org/x/vuln/cmd/govulncheck</a>\r\ncommand-line tool performs a more precise analysis based on-call graph\r\nreachability, with fewer false positives. Because it is slower to\r\ncompute, it must be manually triggered by using &quot;Run govulncheck to\r\nverify&quot; code actions or the <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#run-govulncheck\"><code>&quot;codelenses.run_govulncheck&quot;</code></a>\r\ncode lens on <code>go.mod</code> files.</li>\r\n</ul>\r\n<p><a\r\nhref=\"https://user-images.githubusercontent.com/4999471/206977512-a821107d-9ffb-4456-9b27-6a6a4f900ba6.mp4\">https://user-images.githubusercontent.com/4999471/206977512-a821107d-9ffb-4456-9b27-6a6a4f900ba6.mp4</a></p>\r\n<!-- raw HTML omitted -->\r\n<h3>Additional checks for the <code>loopclosure</code> analyzer</h3>\r\n<p>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/analyzers.md#loopclosure\"><code>loopclosure</code></a>\r\nanalyzer, which reports problematic references from a nested function to\r\na variable of an enclosing loop, has been improved to catch more cases.\r\nIn particular, it now reports when subtests <a\r\nhref=\"https://pkg.go.dev/testing#T.Parallel\">run in parallel</a> with\r\nthe loop, a mistake that often results in all but the final test case\r\nbeing skipped.</p>\r\n<p><img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/206764370-7fc3c464-af04-4e4e-bb10-a6a0a89a99e3.png\"\r\nalt=\"image\" /></p>\r\n<h2>Configuration changes</h2>\r\n<ul>\r\n<li>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;</code></a>\r\nsetting controls vulnerability analysis based on the Go vulnerability\r\ndatabase. If set to <code>&quot;Imports&quot;</code>, gopls will compute\r\ndiagnostics related to vulnerabilities in dependencies, and will present\r\nthem in go.mod files.</li>\r\n<li>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#run-govulncheck\"><code>&quot;codelenses.run_govulncheck&quot;</code></a>\r\nsetting controls the presence of code lenses that run the <a\r\nhref=\"https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck\">govulncheck</a>\r\ncommand, which takes longer but produces more accurate vulnerability\r\nreporting based on call-graph reachability.</li>\r\n</ul>\r\n<h2>Bug fixes</h2>\r\n<p>This version of gopls includes fixes to several bugs, notably:</p>\r\n<ul>\r\n<li><code>golang/go#57053</code></li>\r\n<li><code>golang/go#55837</code><a\r\nhref=\"https://redirect.github.com/golang/go/issues/56450\">golang/go#56450</a>).</li>\r\n<li><code>golang/go#54816</code></li>\r\n</ul>\r\n<p>A full list of all issues fixed can be found in the <a\r\nhref=\"https://github.com/golang/go/milestone/293?closed=1\">gopls/v0.11.0</a>\r\nmilestone.\r\nTo report a new problem, please file a new issue at <a\r\nhref=\"https://go.dev/issues/new\">https://go.dev/issues/new</a>.</p>\r\n<h2>Thank you to our contributors</h2>\r\n<p><a href=\"https://github.com/Arsen6331\"><code>@​Arsen6331</code></a>,\r\n<a href=\"https://github.com/SN9NV\"><code>@​SN9NV</code></a>, <a\r\nhref=\"https://github.com/adonovan\"><code>@​adonovan</code></a>, <a\r\nhref=\"https://github.com/bcmills\"><code>@​bcmills</code></a>, <a\r\nhref=\"https://github.com/dle8\"><code>@​dle8</code></a>, <a\r\nhref=\"https://github.com/findleyr\"><code>@​findleyr</code></a>, <a\r\nhref=\"https://github.com/hyangah\"><code>@​hyangah</code></a>, <a\r\nhref=\"https://github.com/pjweinbgo\"><code>@​pjweinbgo</code></a>, <a\r\nhref=\"https://github.com/suzmue\"><code>@​suzmue</code></a></p>\r\n<h2>gopls/v0.10.1</h2>\r\n<p>This release contains a fix for <a\r\nhref=\"https://redirect.github.com/golang/go/issues/56505\">golang/go#56505</a>:\r\na new crash during method completion on variables of type\r\n<code>*error</code>.</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/675bf3c243d60cbba429fad9924e520e8a86074f\"><code>675bf3c</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ad52c1ca35fb661c53eedbdee5f3b0e3c33e54e1\"><code>ad52c1c</code></a>\r\ngo/ssa/interp: support conversions to slices of named bytes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/14ec3c023fa0003b489ce1abe0484924ea5276f8\"><code>14ec3c0</code></a>\r\ngopls/doc/contributing.md: document error handling strategies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c4953641676aa4639fcbd2ca825c43cedeaa9e8c\"><code>c495364</code></a>\r\ngo/packages/gopackages: document -mode flag</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/87ad891fe35467be3d692a3f37fef9fb5cb08dcd\"><code>87ad891</code></a>\r\ngopls/internal/lsp/source/typerefs: move test into _test.go</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/27fd94e099b2bbd4c660f0b140af121af9a943c8\"><code>27fd94e</code></a>\r\ninternal/fastwalk: doc formatting fixes (including godoc links)</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/d362be0cdb73ca5215ecaaf1514120c6b8b955e9\"><code>d362be0</code></a>\r\ngopls/internal/lsp/filecache: reduce GC frequency</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/969078be460fb5efe195a1d4c69e3701298e9a21\"><code>969078b</code></a>\r\nRevert &quot;go/analysis: add Sizes that matches gc size\r\ncomputations&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5aa6acb96f843a0257c5c1c0e52753bcd18b77b3\"><code>5aa6acb</code></a>\r\ngo/analysis: add Sizes that matches gc size computations</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5a89a3bf267ef12790327b8692c88654845bc78d\"><code>5a89a3b</code></a>\r\ngo/vcs: delete</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.10.0...v0.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.10.0&new-version=0.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-14T15:50:37-07:00",
          "tree_id": "976964a963201430f1f9e281d27408733c636e12",
          "url": "https://github.com/runfinch/finch/commit/a8b32f9674f93cfe54686a2e29b4cf6ca4534939"
        },
        "date": 1689375284628,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 64190449791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3936,
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
            "value": 64.19,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1957466112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2874280,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 60852,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24020423708,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5168,
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
            "value": 24.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24096768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1068296,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22719,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 351809125,
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
            "value": 16.88,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3518,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25184,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 375,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1392200125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.7199,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.392,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3612672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 72248,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1364,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64288350+kiryl1@users.noreply.github.com",
            "name": "kiryl1",
            "username": "kiryl1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3514b3dbe69e1bed3d40838af01ebec184f7413",
          "message": "feat: ECR credential integration into Finch  (#462)\n\nIssue #, if available: 116\r\n\r\n*Description of changes:*\r\nIntegrating ECR credential helper into Finch. \r\n\r\n**To Install the Credential Helper**\r\n- The ECR credential helper can be setup with minimal configuration by\r\nsetting the `creds_helpers` option in `finch.yaml` with the value `-\r\necr-login`.\r\n\r\n- Once the option has been set the credential helper will be installed\r\non either `finch vm init ` or `finch vm start`. The binary will be\r\ndownloaded on the host machine and a `config.json` will be created and\r\npopulated in the `~/.finch/` folder if it doesn't already exist. If it\r\nalready exists, the value of `credsStore` will be overwritten to\r\n`ecr-login` .\r\n\r\n**How to stop using the credential helper with Finch**\r\n- `config.json` needs to be either deleted, or the `credsStore`\r\nparameter needs to have the value `ecr-login ` removed. Additionally the\r\ncreds_helper option in the finch.yaml needs to be removed.\r\n\r\n- To fully remove the credential helper from the host machine, this can\r\nbe done by deleting it from the\r\n`~/.finch/cred-helpers` folder.\r\n\r\n\r\nThe credential helper will support credentials from both the aws\r\ncredentials file and those that are stored as environment variables.\r\n\r\n\r\n*Testing done:*\r\nAdded Unit Tests\r\nAdded Integration Test \r\n\r\n\r\n- [ x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: kiryl1 <kirylkul@gmail.com>",
          "timestamp": "2023-07-17T15:57:15-07:00",
          "tree_id": "5b666da6dd450aba0fe1dc739763ad3a261bb614",
          "url": "https://github.com/runfinch/finch/commit/d3514b3dbe69e1bed3d40838af01ebec184f7413"
        },
        "date": 1689634902808,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 68250455750,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3802,
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
            "value": 68.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1994272768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3033192,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 64454,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24339803666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3828,
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
            "value": 24.34,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 434176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1083416,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23058,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 369078167,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6074,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.05,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.369,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26237,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 392,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1346696166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5961,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.347,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3612672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 68456,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1328,
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
          "id": "54c03bbfba132d797b0efa1171ce3fdc6eb8af9e",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.0 to 0.7.1 (#477)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.7.0 to 0.7.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.1</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">0.7.1</a>\r\n(2023-06-27)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\">88f732f</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.10.0 to\r\n2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\">45e9414</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.5 to\r\n2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\">a6ad55d</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.7 to\r\n1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\">6c72750</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">0.7.1</a>\r\n(2023-06-27)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\">88f732f</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.10.0 to\r\n2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\">45e9414</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.5 to\r\n2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\">a6ad55d</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.7 to\r\n1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\">6c72750</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/2755cb270a1af545e3832b53240339c36884894d\"><code>2755cb2</code></a>\r\nchore(main): release 0.7.1 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/70\">#70</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\"><code>45e9414</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\"><code>88f732f</code></a>\r\nfix: add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\"><code>6c72750</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\"><code>a6ad55d</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.7.0&new-version=0.7.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-18T09:49:56-07:00",
          "tree_id": "bd79c617cf20d13eadaebdd1cba7aa72c68b62ff",
          "url": "https://github.com/runfinch/finch/commit/54c03bbfba132d797b0efa1171ce3fdc6eb8af9e"
        },
        "date": 1689699514474,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 59446169833,
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
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 59.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1991667712,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2675008,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 56341,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24021404333,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4143,
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
            "value": 24.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 901120,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1066496,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22684,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 383399486,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.044,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 29.05,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3833,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26893,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 407,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1302589208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.8509,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.303,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3579904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 66256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1278,
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
          "id": "7b330d3e2bd4cc623f46762c8e3b120ddc18f3b0",
          "message": "build(deps): Bump lima version (#476)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-07-18T09:50:20-07:00",
          "tree_id": "84e65eb661e398fae1a28d14e5ef0779e11a6d04",
          "url": "https://github.com/runfinch/finch/commit/7b330d3e2bd4cc623f46762c8e3b120ddc18f3b0"
        },
        "date": 1689699768411,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 69082277125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3691,
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
            "value": 69.08,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1959346176,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3074320,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 65406,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24052431792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3939,
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
            "value": 24.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -20480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1069232,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22721,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 368949972,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.069,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3689,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26442,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 394,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1363095167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.9636,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.363,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3596288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 68456,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1328,
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
          "id": "15d2a4bf8cfd3956a2f8bb4878bfb86827b4e77d",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible (#481)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.2+incompatible to 24.0.4+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.4</h2>\r\n<h2>24.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.4\">docker/cli,\r\n24.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.4\">moby/moby,\r\n24.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a regression introduced during 24.0.3 that causes a panic during\r\nlive-restore of containers with bind mounts. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45903\">moby/moby#45903</a></li>\r\n</ul>\r\n<h2>v24.0.3</h2>\r\n<h2>24.0.3</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.3\">docker/cli,\r\n24.0.3 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.3\">moby/moby,\r\n24.0.3 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>containerd image store: Fix an issue where multi-platform images\r\nthat did not include a manifest for the default platform could not be\r\ninteracted with. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45849\">moby/moby#45849</a></li>\r\n<li>containerd image store: Fix specious attempts to cache <code>FROM\r\nscratch</code> in container builds. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45822\">moby/moby#45822</a></li>\r\n<li>containerd image store: Fix <code>docker cp</code> with snapshotters\r\nthat cannot mount the same content multiple times. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45780\">moby/moby#45780</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45786\">moby/moby#45786</a></li>\r\n<li>containerd image store: Fix builds with <code>type=image</code> not\r\nbeing correctly unpacked/stored. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45692\">moby/moby#45692</a></li>\r\n<li>containerd image store: Fix incorrectly attempting to unpack\r\npseudo-images (including attestations) in <code>docker load</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45688\">moby/moby#45688</a></li>\r\n<li>containerd image store: Correctly set the user agent, and include\r\nadditional information like the snapshotter when interacting with\r\nregistries. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45671\">moby/moby#45671</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45684\">moby/moby#45684</a></li>\r\n<li>containerd image store: Fix a failure to unpack already-pulled\r\ncontent after switching between snapshotters. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45678\">moby/moby#45678</a></li>\r\n<li>containerd image store: Fix images that have been re-tagged or with\r\nall tags removed being pruned while still in use. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45857\">moby/moby#45857</a></li>\r\n<li>Fix a Swarm CSI issue where the Topology field was not propagated\r\ninto NodeCSIInfo. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45810\">moby/moby#45810</a></li>\r\n<li>Fix failures to add new Swarm managers caused by a very large raft\r\nlog. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45703\">moby/moby#45703</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3122\">moby/swarmkit#3122</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3128\">moby/swarmkit#3128</a></li>\r\n<li><code>name_to_handle_at(2)</code> is now always allowed in the\r\ndefault seccomp profile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45833\">moby/moby#45833</a></li>\r\n<li>Fix an issue that prevented encrypted Swarm overlay networks from\r\nworking on ports other than the default (4789). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45637\">moby/moby#45637</a></li>\r\n<li>Fix a failure to restore mount reference-counts during live-restore.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45824\">moby/moby#45824</a></li>\r\n<li>Fix various networking-related failures during live-restore. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45658\">moby/moby#45658</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45659\">moby/moby#45659</a></li>\r\n<li>Fix running containers restoring with a zero (successful) exit\r\nstatus when the daemon is unexpectedly terminated. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45801\">moby/moby#45801</a></li>\r\n<li>Fix a potential panic while executing healthcheck probes. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45798\">moby/moby#45798</a></li>\r\n<li>Fix a panic caused by a race condition in container exec start. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45794\">moby/moby#45794</a></li>\r\n<li>Fix an exception caused by attaching a terminal to an exec with a\r\nnon-existant command. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45643\">moby/moby#45643</a></li>\r\n<li>Fix <code>host-gateway</code> with BuildKit by passing the IP as a\r\nlabel (also requires <a\r\nhref=\"https://redirect.github.com/docker/buildx/pull/1894\">docker/buildx#1894</a>).\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45790\">moby/moby#45790</a></li>\r\n<li>Fix an issue where <code>POST /containers/{id}/stop</code> would\r\nforcefully terminate the container when the request was canceled,\r\ninstead of waiting until the specified timeout for a 'graceful' stop. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45774\">moby/moby#45774</a></li>\r\n<li>Fix an issue where <code>docker cp -a</code> from the root\r\n(<code>/</code>) directory would fail. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45748\">moby/moby#45748</a></li>\r\n<li>Improve compatibility with non-runc container runtimes by more\r\ncorrectly setting resource constraint parameters in the OCI config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45746\">moby/moby#45746</a></li>\r\n<li>Fix an issue caused by overlapping subuid/subgid ranges in certain\r\nconfigurations (e.g. LDAP) in rootless mode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45747\">moby/moby#45747</a>,\r\n<a\r\nhref=\"https://redirect.github.com/rootless-containers/rootlesskit/pull/369\">rootless-containers/rootlesskit#369</a></li>\r\n<li>Greatly reduce CPU and memory usage while populating the Debug\r\nsection of <code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45856\">moby/moby#45856</a></li>\r\n<li>Fix an issue where debug information was not correctly printed\r\nduring <code>docker info</code> when only the client is in debug mode.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4393\">docker/cli#4393</a></li>\r\n<li>Fix issues related to hung connections when connecting to hosts over\r\na SSH connection. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4395\">docker/cli#4395</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/4ffc61430bbe6d3d405bdf357b766bf303ff3cc5\"><code>4ffc614</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45903\">#45903</a>\r\nfrom thaJeztah/24.0_backport_fix_volume_npe</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d3893b58ff9dc2fd1f25e41e6e6766694632787e\"><code>d3893b5</code></a>\r\ndaemon: daemon.prepareMountPoints(): fix panic if mount is not a\r\nvolume</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1d9c8619cded4657af1529779c5771127e8ad0e7\"><code>1d9c861</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45860\">#45860</a>\r\nfrom thaJeztah/24.0_backport_update_cgroups</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/64f79562fb6f00cee512fc613921389b01f32f6f\"><code>64f7956</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45869\">#45869</a>\r\nfrom thaJeztah/24.0_backport_docs_plugin_disable_fo...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/05cf8e8130d50a7d538d0439d6331df9f0154166\"><code>05cf8e8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45867\">#45867</a>\r\nfrom thaJeztah/24.0_backport_api_remove_deprecated_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5892aae60fe4ef681720606afed51e67fc2a7f86\"><code>5892aae</code></a>\r\ndocs: api v1.28 - v1.40: add missing &quot;force&quot; query arg on\r\nplugin disable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7adb590e162da0974b32741e499d0973d3c9255d\"><code>7adb590</code></a>\r\ndocs: api v1.41: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b5aacf8161c99dcd6e04304b14846db7c5094951\"><code>b5aacf8</code></a>\r\ndocs: api v1.42: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b732cfd3928e5efb4bdd36154503a9d1a1f42c69\"><code>b732cfd</code></a>\r\ndocs: api v1.43: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/50fb65f0f534d85c9e8aed1ee3fefadfbc1d5eda\"><code>50fb65f</code></a>\r\ndocs: api: amend changelog for API 1.28 for &quot;force&quot;\r\noption</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.2...v24.0.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.2+incompatible&new-version=24.0.4+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-18T10:10:21-07:00",
          "tree_id": "92cd3602b4ca5ebffdb46d913608652056035198",
          "url": "https://github.com/runfinch/finch/commit/15d2a4bf8cfd3956a2f8bb4878bfb86827b4e77d"
        },
        "date": 1689700511549,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78454917500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.457,
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
            "value": 78.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1978122240,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3536568,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 74152,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24040480917,
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
            "value": 60,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 24.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -9908224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071328,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22789,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 376240278,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.023,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.91,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3762,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 26696,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 399,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1462650791,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6983,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.463,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 4669440,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 75216,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1420,
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
          "id": "92f2494f17bde67b785ccf444ac6525b7a856a6c",
          "message": "build(deps): Bump submodules (#482)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>",
          "timestamp": "2023-07-18T12:02:37-07:00",
          "tree_id": "33482a6b69021e2f2627fe62783404ea3c7dacf6",
          "url": "https://github.com/runfinch/finch/commit/92f2494f17bde67b785ccf444ac6525b7a856a6c"
        },
        "date": 1689707120282,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33876220125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4793,
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
            "value": 33.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1093742592,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1509992,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32105,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23787814375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4623,
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
            "value": 23.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 31490048,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1059648,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22527,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 314774521,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9846,
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
            "value": 0.3147,
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
            "value": 23664,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 341,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1402823000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.9667,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.403,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 72808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1371,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "219a4518d761a74714c47788e6a6ae4dd24ff752",
          "message": "ci: Add upload build to S3 action for cloud build (#486)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nAdd upload build to S3 action to allow cloud build without generating\r\npkg\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-07-20T08:43:47-07:00",
          "tree_id": "d506fe3b35f4f40efdc84583d70d9e11b0e65802",
          "url": "https://github.com/runfinch/finch/commit/219a4518d761a74714c47788e6a6ae4dd24ff752"
        },
        "date": 1689869721337,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35762254250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5253,
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
            "value": 35.76,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1157140480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1587608,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33862,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24922511500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4168,
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
            "value": 24.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 163860480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1105920,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23569,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 352968750,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.683,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3529,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -4082346,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25645,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 379,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1342399417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3351,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 18.61,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.342,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20422656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67920,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1317,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "947e9e9f86a40d4d53ad01bf81da0c5388a82308",
          "message": "ci: Add retry for release e2e tests (#490)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nUsed nick-fields/retry@v2 for e2e test retry to reduce manual effort in\r\nthe release and nightly build validation\r\n\r\n*Testing done:*\r\nTested with this branch\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-07-21T00:35:29Z",
          "tree_id": "ed9a5a9869a7302d8e67e161f52bd97a4f41f0ae",
          "url": "https://github.com/runfinch/finch/commit/947e9e9f86a40d4d53ad01bf81da0c5388a82308"
        },
        "date": 1689899891575,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35901895208,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3905,
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
            "value": 35.9,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1160003584,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1593656,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34011,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24003600542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5112,
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
            "value": 24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 98885632,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071408,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22765,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 342209583,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3178,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 9.524,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3421,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24882,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1343074292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3317,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.01,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.343,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3596288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 68432,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1319,
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
          "id": "e9e8617b07301848dc1f6c3afa18643d212d024e",
          "message": "build(deps): Bump github.com/docker/cli from 24.0.4+incompatible to 24.0.5+incompatible (#495)\n\nBumps [github.com/docker/cli](https://github.com/docker/cli) from\r\n24.0.4+incompatible to 24.0.5+incompatible.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/ced099660009713e0e845eeb754e6050dbaa45d0\"><code>ced0996</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4450\">#4450</a> from\r\nvvoland/fix-issue-4414-Danial-Gharib-24</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/1ee40e2c7416f1267d36be84322ff072b5365d3f\"><code>1ee40e2</code></a>\r\nconfigfile: Initialize nil AuthConfigs</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/40cc1d8eae5f430d2884e7dc8f14873a3145c8bd\"><code>40cc1d8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4445\">#4445</a> from\r\nthaJeztah/24.0_backport_buildx_0.11.2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/3c2278afae86e059adf45405586e50e79cbfb0f2\"><code>3c2278a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4443\">#4443</a> from\r\nthaJeztah/24.0_update_engine2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/3bd6d6902e1094b21e7768f4485572afc8aa447f\"><code>3bd6d69</code></a>\r\nDockerfile: update buildx to v0.11.2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/05bf7fbcc8b2be43bb70f38a60c72a84d0bdbb2b\"><code>05bf7fb</code></a>\r\nvendor: github.com/docker/docker\r\nv24.0.5-0.20230718221249-d4a26c153000</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/c6d7c0bb215494a7a037a5bb4977927d8ab59c0e\"><code>c6d7c0b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4438\">#4438</a> from\r\nthaJeztah/24.0_update_engine</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/dd08d4404412828661ee323f4855f14de2fb764e\"><code>dd08d44</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4425\">#4425</a> from\r\nthaJeztah/24.0_backport_credential-store-improv...</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/809975d8bdb9c1ed02940884721913671163f78b\"><code>809975d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4423\">#4423</a> from\r\nthaJeztah/24.0_backport_dont-ignore-volume-pars...</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/8b5023dd2eb69e41c6768008e3719d791a056069\"><code>8b5023d</code></a>\r\nvendor: github.com/docker/docker\r\nv24.0.5-0.20230717072055-8443a06149b5</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/cli/compare/v24.0.4...v24.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/cli&package-manager=go_modules&previous-version=24.0.4+incompatible&new-version=24.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T13:59:28-07:00",
          "tree_id": "7789a606771c71f94101d78541f46b861bdf3693",
          "url": "https://github.com/runfinch/finch/commit/e9e8617b07301848dc1f6c3afa18643d212d024e"
        },
        "date": 1690232716591,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36372244125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4898,
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
            "value": 36.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1131020288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1650728,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34382,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23863351250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.378,
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
            "value": 23.86,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 261242880,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1064224,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22628,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 323538208,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3644,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.11,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3235,
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
            "value": 24054,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 348,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1312812584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.991,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.313,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 66160,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1277,
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
          "id": "444bbc0779dbe22207fec471389810e398c1cf50",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.3 to 0.27.4 (#487)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.3 to 0.27.4.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/f46cb694b153a0acc6b6ea8cd51c6db75536a4f4\"><code>f46cb69</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119262\">#119262</a><code>HirazawaUi/automated-cherry-pick-of-#119229</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/51f34a4cfe56b2efe248ad5afb3e6b4ddd2670da\"><code>51f34a4</code></a>\r\nFix the converts an empty string to nil.</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/bf8aa17148b8001db4ca2f98e0f31561383913f2\"><code>bf8aa17</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118855\">#118855</a><code>aojea/automated-cherry-pick-of-#118686</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/5e3923ed1be2bbc8fcea8786e8b9c3669627d962\"><code>5e3923e</code></a>\r\nalways execute condition for wait.PollUntilContextTimeout with\r\nimmediate=true</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.3...v0.27.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.3&new-version=0.27.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T13:59:12-07:00",
          "tree_id": "d031285393cc6aaf1e89f4a9fbb7628eeb0ca6ab",
          "url": "https://github.com/runfinch/finch/commit/444bbc0779dbe22207fec471389810e398c1cf50"
        },
        "date": 1690235056825,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33215209209,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5145,
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
            "value": 33.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1068490752,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1483096,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31490,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24128891250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5224,
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
            "value": 91594752,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071256,
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
            "value": 346139500,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.58,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.87,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3461,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 5461,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25512,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 373,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1312738000,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1388,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 17.08,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.313,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3612672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67456,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1290,
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
          "id": "d08d102d05a350a8b8e586c42ef83d51495cf4f9",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.8 to 1.27.10 (#496)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.8 to 1.27.10.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.10</h2>\r\n<h2>1.27.10</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)\r\n[bdc7803]</li>\r\n</ul>\r\n<h2>v1.27.9</h2>\r\n<h2>1.27.9</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Prevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)\r\n[3b31fc3]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)\r\n[360849b]</li>\r\n<li>chore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)\r\n[86f3659]</li>\r\n<li>Bump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)\r\n[642ead0]</li>\r\n<li>chore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)\r\n[ceb9ca6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)\r\n[a2087d8]</li>\r\n<li>docs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)\r\n[fc9a89f]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/671\">#671</a>)\r\n[9076019]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.10</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)\r\n[bdc7803]</li>\r\n</ul>\r\n<h2>1.27.9</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Prevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)\r\n[3b31fc3]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)\r\n[360849b]</li>\r\n<li>chore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)\r\n[86f3659]</li>\r\n<li>Bump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)\r\n[642ead0]</li>\r\n<li>chore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)\r\n[ceb9ca6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)\r\n[a2087d8]</li>\r\n<li>docs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)\r\n[fc9a89f]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/671\">#671</a>)\r\n[9076019]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/9cbf7b0019d4d489d668583b0d7a6ac889ee2bc8\"><code>9cbf7b0</code></a>\r\nv1.27.10</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/bdc7803e66e0db777db09edea3bb6e85df8c9d6d\"><code>bdc7803</code></a>\r\nfix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/66bcd9de8fa08e35002e61e673c37d38a96fcd45\"><code>66bcd9d</code></a>\r\nv1.27.9</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/3b31fc3875132cf36ce6e058180932da829fafec\"><code>3b31fc3</code></a>\r\nPrevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/360849b5eeaa51d7324a9f8485e951a35b952ed8\"><code>360849b</code></a>\r\nBump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/86f3659f49faa273ed5f93a0b2cf5affee4bd068\"><code>86f3659</code></a>\r\nchore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/642ead0c6d5354f23dc9f0e52cebe5729c7c435d\"><code>642ead0</code></a>\r\nBump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/ceb9ca6a1cfa690c19c7b778b0fe76edc4e28b6c\"><code>ceb9ca6</code></a>\r\nchore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/a2087d8d97ab9af4ccd9fcea75ca6660bb595663\"><code>a2087d8</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/fc9a89ffe7d842fb0389f42c034194075ed38ef0\"><code>fc9a89f</code></a>\r\ndocs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.8...v1.27.10\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.8&new-version=1.27.10)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T15:39:03-07:00",
          "tree_id": "2b314ff158f50b5563436a8d120e83d031cd58e3",
          "url": "https://github.com/runfinch/finch/commit/d08d102d05a350a8b8e586c42ef83d51495cf4f9"
        },
        "date": 1690239346245,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33372155041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4933,
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
            "value": 33.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1058279424,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1486936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31598,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23877795959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.41,
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
            "value": 23.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 67375104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1065792,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22649,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 325326188,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6134,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 9.722,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3253,
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
            "value": 24016,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 351,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1282765500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.237,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.283,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3579904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 65424,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1258,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "e290e748213ee239b7cee129e5c759146f57b0a0",
          "message": "ci: Increase the test timeout due to retry (#500)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\nIncrease the test timeout to 3 hours because it can have at most 3\r\nretries.\r\nOne test run can currently take about 45 - 60 mins\r\n\r\n*Testing done:*\r\nTested via previous nightly build\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-07-24T23:24:20Z",
          "tree_id": "a3876483566a550c5af6675a6b3b26e11bea3afe",
          "url": "https://github.com/runfinch/finch/commit/e290e748213ee239b7cee129e5c759146f57b0a0"
        },
        "date": 1690241240592,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33931801084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5551,
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
            "value": 33.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1069854720,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1512376,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32170,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23972875917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3682,
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
            "value": 23.97,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 136347648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1066264,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22664,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 343842625,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.125,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.67,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3438,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25130,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 369,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1185810792,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2697,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 18.83,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.186,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20385792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 61448,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1168,
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
          "id": "6f1afbb69554148efd8eea938278bcc5104ab050",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.4+incompatible to 24.0.5+incompatible (#497)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.4+incompatible to 24.0.5+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.5</h2>\r\n<h2>24.0.5</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.5\">docker/cli,\r\n24.0.5 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.5\">moby/moby,\r\n24.0.5 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>The Go client now avoids using UNIX socket paths in the HTTP\r\n<code>Host:</code> header, in order to be compatible with changes\r\nintroduced in <code>go1.20.6</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45962\">moby/moby#45962</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45990\">moby/moby#45990</a></li>\r\n<li>containerd storage backend: Fix <code>Variant</code> not being\r\nincluded in <code>docker image inspect</code> and <code>GET\r\n/images/{name}/json</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46025\">moby/moby#46025</a></li>\r\n<li>containerd storage backend: Prevent potential garbage collection of\r\ncontent during image export. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46021\">moby/moby#46021</a></li>\r\n<li>containerd storage backend: Prevent duplicate digest entries in\r\n<code>RepoDigests</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46014\">moby/moby#46014</a></li>\r\n<li>containerd storage backend: Fix operations taking place against the\r\nincorrect tag when working with an image referenced by tag and digest.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46013\">moby/moby#46013</a></li>\r\n<li>containerd storage backend: Fix a panic caused by\r\n<code>EXPOSE</code> when building containers with the legacy builder. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45921\">moby/moby#45921</a></li>\r\n<li>Fix a regression causing unintuitive errors to be returned when\r\nattempting to create an <code>overlay</code> network on a non-Swarm\r\nnode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45974\">moby/moby#45974</a></li>\r\n<li>Properly report errors parsing volume specifications from the\r\ncommand line. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4423\">docker/cli#4423</a></li>\r\n<li>Fix a panic caused when <code>auths: null</code> is found in the CLI\r\nconfig file. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4450\">docker/cli#4450</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Use init scripts as provided by in moby/moby\r\n<code>contrib/init</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/914\">docker/docker-ce-packaging#914</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/926\">docker/docker-ce-packaging#926</a></li>\r\n<li>Drop Upstart from <code>contrib/init</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46044\">moby/moby#46044</a></li>\r\n<li>Upgrade Go to <code>go1.20.6</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4428\">docker/cli#4428</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45970\">moby/moby#45970</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/921\">docker/docker-ce-packaging#921</a></li>\r\n<li>Upgrade Compose to <code>v2.20.2</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/924\">docker/docker-ce-packaging#924</a></li>\r\n<li>Upgrade buildx to <code>v0.11.2</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/922\">docker/docker-ce-packaging#922</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a61e2b4c9c5f7c241aeb37f389b4444aee26bea4\"><code>a61e2b4</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46044\">#46044</a>\r\nfrom neersighted/init_cleanup_24.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/eede7f09c7d03cdcfdf89853e7483b5c4d51d5c8\"><code>eede7f0</code></a>\r\nRemove Upstart scripts</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/907f83860382cf2edb2d39fc9766e714cdabaf35\"><code>907f838</code></a>\r\nRemove Upstart and cgroups bits from Debian sysvinit script</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/52c92be4c5f94cdb93f775099d42c0ee6b66ccc7\"><code>52c92be</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46029\">#46029</a>\r\nfrom thaJeztah/24.0_backport_bump_runc_binary_1.1.8</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f022632503d1e58e8008ba38397f0bdea36376f5\"><code>f022632</code></a>\r\nDockerfile: update runc binary to v1.1.8</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/bd41493132904ccc60df5cf655f06c14144f47c0\"><code>bd41493</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46023\">#46023</a>\r\nfrom thaJeztah/24.0_backport_bump_buildx</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5164e5f6d68f8d895399594b27accbaabbeec8d9\"><code>5164e5f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46025\">#46025</a>\r\nfrom vvoland/c8d-inspect-variant-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/2b2a72cc65722b1b3f446420f1a7cfa37d7c746e\"><code>2b2a72c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46021\">#46021</a>\r\nfrom thaJeztah/24.0_backport_c8d-image-save-lease</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/98a6422cbcb0ba92e4bc62ff01825008fdc9979e\"><code>98a6422</code></a>\r\nc8d/inspect: Include platform Variant</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/aab94fb3404923ebc5c421e2b869e1d26c53fb91\"><code>aab94fb</code></a>\r\nDockerfile: update buildx to v0.11.2</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.4...v24.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.4+incompatible&new-version=24.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T17:27:59-07:00",
          "tree_id": "b703a38d51e81b07d0290ba10340002fe9c4ae27",
          "url": "https://github.com/runfinch/finch/commit/6f1afbb69554148efd8eea938278bcc5104ab050"
        },
        "date": 1690245167708,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 30986435875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5055,
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
            "value": 30.99,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1234280448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1390224,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 29385,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23912966916,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4855,
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
            "value": 23.91,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 210305024,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1064384,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22626,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 321023240,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6754,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.46,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.321,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": -8192,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 23840,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 345,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1415632666,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4993,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.416,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20385792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 74112,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1393,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "2ffa28f7ca02585598c6400a9561f32883612745",
          "message": "ci: Add codeowners file to finch (#501)\n\nIssue #, if available:\r\nN/A.\r\n*Description of changes:*\r\n- Add `CODEOWNERS` file to finch to ensure that [release-please\r\nPR](https://github.com/runfinch/finch/pull/483) which modifies`\r\nCHANGELOG.md` has to be reviewed and approved by a member of\r\n`@runfinch/dev-team` in order to kick off a finch release.\r\n- Ensures that any changes to `.github` directory requires approval from\r\n`@runfinch/dev-team`, i.e even modifications to `CODEOWNERS` would\r\nrequire an approval from the team.\r\n- Modifies `ci.yaml` to not run CI checks on `CODEOWNERS` file. \r\n\r\n\r\n*Testing done:*\r\nYes, on personal repo. \r\nSee code owners setting in\r\n[CODEOWNERS](https://github.com/vsiravar/github-actions-experiments/blob/main/.github/CODEOWNERS)\r\nand test [requesting review from code\r\nowner](https://github.com/vsiravar/github-actions-experiments/pull/22)\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-07-24T18:01:04-07:00",
          "tree_id": "5e4be45d740d233bfb96fc4a9d7253563b810f94",
          "url": "https://github.com/runfinch/finch/commit/2ffa28f7ca02585598c6400a9561f32883612745"
        },
        "date": 1690247039856,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 30874250083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4534,
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
            "value": 30.87,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1138855936,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1387352,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 29324,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23862339917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4623,
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
            "value": 23.86,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 93335552,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1063712,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22609,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 324825250,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6256,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.62,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3248,
            "unit": "cpu_seconds/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 268288,
            "unit": "disk_bytes/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24256,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 351,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1343926250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6211,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.344,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20439040,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67936,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1317,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "81d8b20d0253016bcfd49f72d763ec3aaa93b7af",
          "message": "ci: Add codeowner path to ci-docs.yaml file (#502)\n\nIssue #, if available:\r\nAdd codeowners file path to `ci-docs.yaml` to prevent CI from getting\r\nblocked.\r\n*Description of changes:*\r\nFixes: \r\n*Testing done:*\r\n\r\nN/A\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-07-25T10:23:26-07:00",
          "tree_id": "a094358c13f59cacdc7f659c3372cc9fc834c8fe",
          "url": "https://github.com/runfinch/finch/commit/81d8b20d0253016bcfd49f72d763ec3aaa93b7af"
        },
        "date": 1690305976410,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33393409917,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4054,
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
            "value": 33.39,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 994385920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1491184,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31672,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24027187167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4489,
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
            "value": 24.03,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 44077056,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1066608,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22675,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 315641271,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.184,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.17,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3156,
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
            "value": 23738,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 343,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1403341500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5402,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.403,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20377600,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 72680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1362,
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
          "id": "e826bcff385946bb6629db8935d3aa912befb5bb",
          "message": "build(deps): Bump golang.org/x/tools from 0.11.0 to 0.11.1 (#509)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.11.0\r\nto 0.11.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c16d0be617945651bc69957c71a95eab34e4994c\"><code>c16d0be</code></a>\r\ncmd/gonew: add new tool for starting a module by copying one</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/304e203aec2f01b5d279aeb91e4b191524f99ae5\"><code>304e203</code></a>\r\ninternal/edit: copy cmd/internal/edit</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/82861e0385a62eddb77541a9ebb0cc9fd9a53389\"><code>82861e0</code></a>\r\ngopls/internal/lsp/source: reinstate equalOrigin for references\r\ncheck</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/1561060c98f9376d002b792330e31239df635502\"><code>1561060</code></a>\r\ngopls/internal/lsp/source: fix incorrect 'origin' logic for named\r\ntypes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/fe58b07b84cecebfbeee9434860b09cb353b03c5\"><code>fe58b07</code></a>\r\ngopls/internal/lsp/source: fix renaming of type parameters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3a3c16941ee28ac5c2913ea3fbe4bbc293236735\"><code>3a3c169</code></a>\r\ngopls/internal/lsp/source: refresh embeddirective analyzer docs</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/03562de2546b298a797f4c85f240145e229b63e5\"><code>03562de</code></a>\r\nrefactor/satisfy/find: composite lits may have type parameter type</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bacac14996a49a5a3033fb09bb344f8beed596ee\"><code>bacac14</code></a>\r\ngopls/internal/lsp/source: Add SuggestedFix for embeddirective\r\nAnalyzer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/38606b3e25eb72862f76be310866a530f298892c\"><code>38606b3</code></a>\r\ngopls/internal/lsp/cache: keep analysis progress reports on one\r\nline</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e8cdaf46de4db18885846748405a3c397c4bd1d2\"><code>e8cdaf4</code></a>\r\ngopls/internal/lsp/cache: fast-path for type-checking active\r\npackages</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.11.0...v0.11.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.11.0&new-version=0.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-31T16:19:18-07:00",
          "tree_id": "81fd48c9b5812cfd9082bb41e2561056b9cfcee7",
          "url": "https://github.com/runfinch/finch/commit/e826bcff385946bb6629db8935d3aa912befb5bb"
        },
        "date": 1690845728642,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36532707166,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4326,
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
            "value": 36.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 950824960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1660784,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34604,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23924754459,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3185,
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
            "value": 23.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 67104768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1065520,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22639,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 347262208,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.96,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.95,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3472,
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
            "value": 25032,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 370,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1232444958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.24,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.232,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 63096,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1207,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e43d63b054103aa7e7c8dfab8fa4c02eb4f320e0",
          "message": "ci: remove duplicate actions, use finch-core (#511)\n\nfinch-core already defines scripts for updating some dependencies:\r\n\r\nhttps://github.com/runfinch/finch-core/blob/main/bin/update-deps.sh\r\n\r\n\r\nSince this repo takes finch-core as a submodule, some actions can be\r\nconsolidated to this one for dependency updates.\r\n\r\nCORE_URL is unused and that behavior is removed.\r\n\r\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-01T14:24:54-07:00",
          "tree_id": "5dd3ed01d18c3a3de2df8b7a4e18c884df3ed819",
          "url": "https://github.com/runfinch/finch/commit/e43d63b054103aa7e7c8dfab8fa4c02eb4f320e0"
        },
        "date": 1690925258022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32582263375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5002,
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
            "value": 32.58,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1048080384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1457128,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30894,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23882640250,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3882,
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
            "value": 23.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 115314688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1060080,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22532,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 334745903,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.66,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.33,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3347,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24866,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 359,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1344430417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1195,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 15.06,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.344,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 68288,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1320,
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
          "id": "83bd718be67ddba624e8218034c91bf399e2cccd",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.6 to 3.23.7 (#513)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.6 to 3.23.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.7</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>process</h3>\r\n<ul>\r\n<li>[process][posix] Realign process.Name() with python psutil to return\r\nsame value on python3 scripts processes by <a\r\nhref=\"https://github.com/Lomanic\"><code>@​Lomanic</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1488\">shirou/gopsutil#1488</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>cpu_percent and memory_percent Readme by <a\r\nhref=\"https://github.com/elfranne\"><code>@​elfranne</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1486\">shirou/gopsutil#1486</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/elfranne\"><code>@​elfranne</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1486\">shirou/gopsutil#1486</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7\">https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/0b4d681d64427449cd2e2ba8fdc8302d0af5e9cc\"><code>0b4d681</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1488\">#1488</a>\r\nfrom Lomanic/issue1485</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/c43eaea6a71b0092b3be18dcb1bbf7b7751d1274\"><code>c43eaea</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1492\">#1492</a>\r\nfrom shirou/dependabot/github_actions/actions/labele...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9421df869961523986b749508cebe46ab743e4b5\"><code>9421df8</code></a>\r\nchore(deps): bump actions/labeler from 4.2.0 to 4.3.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8b96d2e9e28705f00067e1c7ae9be0cf9fc003eb\"><code>8b96d2e</code></a>\r\n[process][posix] Realign process.Name() with python psutil to return\r\nsame val...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/5081a3dcf981f51b5346883a2e8a9ca909c38def\"><code>5081a3d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1486\">#1486</a>\r\nfrom elfranne/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/042e63609b4e22a95b6201d48c874b62a976d133\"><code>042e636</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1489\">#1489</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/99c67a47e2ea59704a073f1efdf7f9ba00f67776\"><code>99c67a4</code></a>\r\nchore(deps): bump golang.org/x/sys from 0.9.0 to 0.10.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/c0f3eb1dfb9058724390a759d0d7b7cc2149bb69\"><code>c0f3eb1</code></a>\r\n[process] Remove all noisy and useless Test_AllProcesses_X tests</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/b41de48761c2349a6562f4cb95dc08b97818b428\"><code>b41de48</code></a>\r\ncpu_percent and memory_percent update</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.6&new-version=3.23.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-02T11:41:27-07:00",
          "tree_id": "8e2ef020af51ded2b2a80461fb328cdd18ed9aaf",
          "url": "https://github.com/runfinch/finch/commit/83bd718be67ddba624e8218034c91bf399e2cccd"
        },
        "date": 1691001886389,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 38795694417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4002,
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
            "value": 38.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1166372864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1756640,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 36783,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25722830167,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4141,
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
            "value": 25.72,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 178487296,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1140656,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 24353,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 335278125,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 2.261,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 29.17,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3352,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24885,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 362,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1399502959,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3764,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.399,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 12197888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 72160,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1359,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6030965414e80e1f3c550e67097ce5f34aeff41",
          "message": "fix: quote recursive calls to make (#515)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n$(MAKE) is used for calling `make` recursively. On a Windows machine,\r\n`make` might be at some location containing a space or special\r\ncharacter, like `/c/Program Files (x86)/GnuWin32/bin/make` . Wrap in\r\nquotes as \"$(MAKE)\" to prevent errors.\r\n\r\n*Testing done:*\r\n\r\n`make` on Mac Apple Silicon and `make` on Windows EC2 instance.\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-03T16:08:57-07:00",
          "tree_id": "e1d644bb464acda604d6c2228b6db0196002197d",
          "url": "https://github.com/runfinch/finch/commit/d6030965414e80e1f3c550e67097ce5f34aeff41"
        },
        "date": 1691104304734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 34533308125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.5703,
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
            "value": 34.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 997367808,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1532808,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32630,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25052688292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3352,
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
            "value": 25.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125804544,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1112280,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23694,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 349600236,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4609,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3495,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4554752,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25925,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 377,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1433703292,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.6966,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.434,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 28778496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 74648,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1412,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b67452e012d5d00f2ff66e023b4672f7957fe625",
          "message": "fix: configure aws creds in sync submodules/deps action (#518)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n#511 removed the duplicate action in finch/finch-core for updating deps;\r\nhowever, now need AWS creds in this action for the dependency updates.\r\n\r\n*Testing done:*\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-04T10:57:13-07:00",
          "tree_id": "cf0e60db90457bc5d74db1a7d44b01a83bd9770a",
          "url": "https://github.com/runfinch/finch/commit/b67452e012d5d00f2ff66e023b4672f7957fe625"
        },
        "date": 1691173105998,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 32043237458,
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
            "value": 66.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 32.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1014718464,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1436288,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 30429,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23885092500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4737,
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
            "value": 23.88,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 89534464,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1065976,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22663,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 312414188,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6447,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.22,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3124,
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
            "value": 23616,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 338,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1337110583,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.4,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.337,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 67456,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1298,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b639eac14691caa99a6bfddd61be0b811a796d9",
          "message": "fix: give token write perms to sync-submodules (#519)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-04T11:19:23-07:00",
          "tree_id": "3c5bfd7c855f95946bd2ef97e5a685df11239c27",
          "url": "https://github.com/runfinch/finch/commit/8b639eac14691caa99a6bfddd61be0b811a796d9"
        },
        "date": 1691175490119,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33002238584,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4664,
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
            "value": 33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1037869056,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1472312,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31254,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24029258042,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5307,
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
            "value": 24.03,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 53112832,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1068256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22714,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 321475250,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8382,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.22,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3214,
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
            "value": 23914,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 347,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1292454083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 1.197,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.292,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3612672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 66136,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1268,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55b5235d50feb6557108c00cd8543d21f1fdf315",
          "message": "fix: give pull request write permissions to sync job (#520)\n\nIssue #, if available:\r\n\r\n*Description of changes:*\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [ ] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-04T12:21:34-07:00",
          "tree_id": "c78847ad950df9c77c01cf95c215af1b9b0982ba",
          "url": "https://github.com/runfinch/finch/commit/55b5235d50feb6557108c00cd8543d21f1fdf315"
        },
        "date": 1691178982934,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33934656209,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3403,
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
            "value": 33.93,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 995880960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1513832,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32195,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24938563625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5371,
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
            "value": 24.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 118730752,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1108256,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 23617,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 335672208,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7062,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.56,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3356,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 4199765,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24781,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1313135500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5034,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.313,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3579904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 66696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1288,
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
          "id": "1b3ad94f9477eb3f8d33cbea90880f78ca403ff7",
          "message": "build(deps): Bump submodules and dependencies (#521)",
          "timestamp": "2023-08-08T19:57:32-07:00",
          "tree_id": "1e56bbb83d102954285e211cd121089320d731a9",
          "url": "https://github.com/runfinch/finch/commit/1b3ad94f9477eb3f8d33cbea90880f78ca403ff7"
        },
        "date": 1691550019091,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36325171375,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.407,
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
            "value": 36.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1101131776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1646384,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34277,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24082213041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4663,
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
            "value": 24.08,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 93937664,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1074632,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22862,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 337986694,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.238,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.67,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3379,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 35498,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24752,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 363,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1292977958,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.638,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.293,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20422656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 66136,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1268,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
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
          "id": "fca182877ca616257527f6186dd1e88b2919feeb",
          "message": "fix: Restart buildkit after containerd when provisioning (#461)\n\nIssue #, if available: Fixes #412 \r\n\r\n*Description of changes:*\r\n- Previously, only containerd was restarted after configuring it to use\r\nthe data on the persistent disk. This changes the UUID of the server\r\nworker. BuildKit also needs to be restarted to use the proper UUID. See\r\nissue for why this is important.\r\n\r\n*Testing done:*\r\n- Local testing\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2023-08-10T18:37:18-04:00",
          "tree_id": "1c9fe5cf29e57aade114fdf950226050912e8d5c",
          "url": "https://github.com/runfinch/finch/commit/fca182877ca616257527f6186dd1e88b2919feeb"
        },
        "date": 1691707205386,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 37353536875,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4327,
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
            "value": 37.35,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1101111296,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1693352,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 35329,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23894037625,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4445,
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
            "value": 23.89,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 114982912,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1061728,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22563,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 325321624,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.027,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 21.5,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3253,
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
            "value": 24128,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 350,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "channinggaddy@gmail.com",
            "name": "Channing Gaddy",
            "username": "CodeChanning"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2e077b8f72dc8d8d833aedce31b3ad3f9f45eb4",
          "message": "feat: adding config option for SOCI installation on VM (#506)\n\n*Description of changes:*\r\nAdding snapshotter option in config file and integrating SOCI with Finch\r\n\r\n**Setting Snapshotters**\r\n- Users can set the snapshotters they'd like to use by listing them in\r\nthe config file as the ```snapshotters``` value.\r\n- All listed snapshotters will be installed if they are currently\r\nsupported with Finch. As of this PR the two that are supported are\r\nOverlayFS (the default snapshotter) and SOCI.\r\n- The first snapshotter listed will be made the default snapshotter\r\nused. Other snapshotters can be used by specifying when running commands\r\n(i.e. ```finch --snapshotter={exampleSnapshotter} pull ...```)\r\n\r\n*Example ```snapshotters``` setting in ```finch.yaml```:*\r\n```yaml\r\nsnapshotters:\r\n    -overlayfs\r\n    -soci\r\n```\r\n\r\nThis would install SOCI on the user's VM and allow for it to be used\r\nwhen specified in commands, but would keep OverlayFS as the default for\r\ncommands\r\n\r\n**To Install SOCI**\r\n\r\n- SOCI can be setup with minimal configuration by adding ```\"- soci\"```\r\nto the ```snapshotters``` list in ```finch.yaml``` .\r\n\r\n- Once the option has been set SOCI will be installed on either ```finch\r\nvm init``` or ```finch vm start```. The binary will be downloaded onto\r\nthe user's VM and the needed settings for SOCI containerd configuration\r\nwill be appended to ```etc/containerd/config.toml``` in the VM. If SOCI\r\nis the first snapshotter listed it will also be set as the default\r\nnerdctl snapshotter in the user's VM which would allow the user to pull\r\nimages with SOCI simply by doing ```finch pull ...``` .\r\n\r\n**To Stop Using SOCI by default**\r\n\r\n- ```\"- soci\"``` should be removed or not be the first snapshotter of\r\nthe ```snapshotters``` list in ```finch.yaml``` . The user can also make\r\nthe first snapshotter listed ```\"- overlayfs\"``` to revert back to the\r\noriginal default used by nerdctl/containerd.\r\n\r\n**Note:** removing a snapshotter from ```snapshotters``` list will not\r\nuninstall the snapshotter from the user's VM. In order to fully\r\nuninstall the snapshotter the user must shell into the VM and remove the\r\nbinaries from ```/usr/local/bin```.\r\n\r\nTesting done:\r\n\r\n[ x] I've reviewed the guidance in CONTRIBUTING.md\r\nLicense Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Channing Gaddy <chxgaddy@amazon.com>",
          "timestamp": "2023-08-11T15:27:07-07:00",
          "tree_id": "deda022a0c02b7511e1953726e720d117e4b524e",
          "url": "https://github.com/runfinch/finch/commit/a2e077b8f72dc8d8d833aedce31b3ad3f9f45eb4"
        },
        "date": 1691792992951,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33601572125,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4352,
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
            "value": 33.6,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1040982016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1499680,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31868,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23961632041,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4702,
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
            "value": 23.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 125796352,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1064752,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22630,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 341728028,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.545,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3417,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 1403562,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24712,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61672eb511c7702cf115514473f978de05acb461",
          "message": "chore: remove FINCH_DOCKER_COMPAT (#524)\n\nIssue #, if available:\r\n\r\nCloses #418 \r\n\r\n*Description of changes:*\r\n\r\nwith release of nerdctl v1.5 we can remove the FINCH_DOCKER_COMPAT\r\nenvironment variable used as a workaround for nested volume mount\r\nbehavior.\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-11T16:09:59-07:00",
          "tree_id": "088a4a2464ffe971654794f0de171626a166cce7",
          "url": "https://github.com/runfinch/finch/commit/61672eb511c7702cf115514473f978de05acb461"
        },
        "date": 1691802346122,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33455963083,
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
            "value": 57.14,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 33.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1102479360,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1493912,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 31727,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23900276083,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4019,
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
            "value": 23.9,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 75784192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1067048,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22671,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 337977136,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8471,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.62,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3379,
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
            "value": 24926,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 363,
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
          "id": "09d6514bfba31a898e3b3407964113f21fb6b244",
          "message": "build(deps): Bump golang.org/x/tools from 0.11.1 to 0.12.0 (#523)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.11.1\r\nto 0.12.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.12.0</h2>\r\n<p>This release contains a major rewrite of the way gopls computes and\r\nstores package information, with the goal of reducing memory usage and\r\nallowing gopls to scale to larger repositories. This change can also\r\nsignificantly reduce startup time when workspaces are reopened, as gopls\r\nnow uses a file-based cache to persist data across sessions. With these\r\noptimizations, gopls is finally able to <a\r\nhref=\"https://go.dev/issues/48738\">fully analyze dependencies</a> using\r\nthe <a\r\nhref=\"https://pkg.go.dev/golang.org/x/tools/go/analysis\">golang.org/x/tools/go/analysis</a>\r\nframework, resulting in improved accuracy for analysis diagnostics.</p>\r\n<p>You can install this release with <code>go install</code>:</p>\r\n<pre><code>go install golang.org/x/tools/gopls@v0.12.0\r\n</code></pre>\r\n<h1>Support changes</h1>\r\n<p>As gopls matures, we're trying to simplify its configuration so that\r\ngopls Just Works in more scenarios, and so that we have fewer\r\nconfiguration combinations to test. This means that we will be gradually\r\ndeprecating settings that affect the core behavior of gopls.</p>\r\n<h2>Removed experimental configuration options</h2>\r\n<p>As announced in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0\r\nrelease notes</a>, this release removes support for the\r\n<code>experimentalWorkspaceModule</code> and\r\n<code>experimentalWatchedFileDelay</code> settings. The\r\n<code>experimentalPackageCacheKey</code> setting is also removed, as it\r\nis irrelevant in the new design.</p>\r\n<p>The <code>experimentalWorkspaceModule</code> setting in particular\r\nmay still be in use by some users. This setting has been superseded by\r\nbuilt-in support for multi-module workspaces in the <code>go</code>\r\ncommand, via <a href=\"https://go.dev/doc/tutorial/workspaces\">Go\r\nworkspaces</a>. To get the equivalent behavior in gopls@v0.12.0, please\r\ncreate a <code>go.work</code> file in your workspace using all desired\r\nmodules. To use all modules in your workspace, run:</p>\r\n<pre><code>go work use -r .\r\n</code></pre>\r\n<h2>Dropped support for Go 1.13-1.15, deprecated support for Go\r\n1.16-1.17</h2>\r\n<p>As announced in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0\r\nrelease notes</a>, this release drops support for Go 1.13-1.15, and in\r\nfact does not build with these Go versions.</p>\r\n<p>Additionally, <code>gopls@v0.12.x</code> will be the final sequence\r\nof versions supporting Go 1.16-1.17, and therefore displays a\r\ndeprecation notice when used with these Go versions.</p>\r\n<h2>Supported operating systems</h2>\r\n<p>Given that our users are almost entirely on Linux, Windows, or\r\nDarwin, we are discussing narrowing our support to focus on those\r\noperating systems, in <a\r\nhref=\"https://redirect.github.com/golang/go/issues/59981\">golang/go#59981</a>.</p>\r\n<h1>Performance improvements</h1>\r\n<p>The banner feature of this release is an internal redesign that\r\nsignificantly improves the way gopls scales in larger codebases.\r\nPerformance, particularly memory usage, has <a\r\nhref=\"https://redirect.github.com/golang/go/issues/36943\">long</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/37790\">been</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/43968\">a</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/44981\">pain</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/45363\">point</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/45457\">for</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/46897\">our</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/47855\">users</a>.</p>\r\n<h2>Reduced memory usage</h2>\r\n<p>Previous releases of gopls held typed syntax trees for all packages,\r\nin memory, all the time. With this release, these large data structures\r\nare ephemeral: as soon as they are constructed, an index of information\r\nderived from them is saved persistently to a file-based cache, and the\r\ndata structures are recycled. The index for each package includes the\r\nlocations of declaring and referring identifiers; the set of exported\r\ndeclarations and their types; the method sets of each interface; and any\r\ndiagnostics and facts (see below) produced during analysis. The index\r\nholds all the information needed to serve global-scope LSP queries such\r\nas “references”, “implementations”, and so on.</p>\r\n<p>Moving package information to a file-based cache greatly reduces the\r\namount of RAM gopls uses, by almost an order of magnitude in larger\r\nprojects. The table below shows the reductions in steady-state memory\r\nusage for three open-source Go repositories.</p>\r\n<table>\r\n<thead>\r\n<tr>\r\n<th>Project</th>\r\n<th>Packages</th>\r\n<th>In-use bytes v0.11.0</th>\r\n<th>v0.12.0</th>\r\n<th>Change</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n<tr>\r\n<td>gopls</td>\r\n<td>405</td>\r\n<td>497MB</td>\r\n<td>232MB</td>\r\n<td>-53%</td>\r\n</tr>\r\n<tr>\r\n<td>kubernetes</td>\r\n<td>3137</td>\r\n<td>3090MB</td>\r\n<td>832MB</td>\r\n<td>-73%</td>\r\n</tr>\r\n<tr>\r\n<td>google-cloud-go + submods</td>\r\n<td>7657</td>\r\n<td>5039MB</td>\r\n<td>863MB</td>\r\n<td>-83%</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/229f8486be036a365bbcaf1172d01d089ea59965\"><code>229f848</code></a>\r\ngopls/internal/lsp/source: enable new defers analyzer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2dc7ebab284bdfe6bb7ae8b77c3cccb0049e13ce\"><code>2dc7eba</code></a>\r\ngo/analysis: use parser.SkipObjectResolution</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f91c023a9b093f57e379f719591d5e3725e07600\"><code>f91c023</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e0783a89e9a456f9b64aa66717db398a20e7921d\"><code>e0783a8</code></a>\r\ninternal/gcimporter: remove bug report on objectpath failure</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/75f6f9c0b004228b5a2a6f4c6a7a9719321e29bd\"><code>75f6f9c</code></a>\r\ngopls/internal/bug: add gopls/bug telemetry counter</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/4b271f9c7195c9e700572e4ea43cf1121b12e6ee\"><code>4b271f9</code></a>\r\ngopls: add gopls/client telemetry counters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/d0b18e25a0aba0090de3d8b744fb001bf16763cf\"><code>d0b18e2</code></a>\r\ngo/analysis/passes/copylock: fix infinite recursion</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5b4d4266651c799fcd0de7475fcaf3afd7512a58\"><code>5b4d426</code></a>\r\ngopls/internal/hooks: clean language version before passing to\r\ngofumpt</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2160c5f15ff7f02edd7dce655540bb17619ca99b\"><code>2160c5f</code></a>\r\ngopls/internal/lsp/analysis: fix stubmethods with variadic\r\nparameters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3d20bbe0fb2f6c3c3b340ce4d0bbcd1ad880071c\"><code>3d20bbe</code></a>\r\ninternal/gcimporter: add a missing return if objectpath fails</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.11.1...v0.12.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.11.1&new-version=0.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-14T00:05:40-07:00",
          "tree_id": "222892789e552d49b242f7b33a401133628757af",
          "url": "https://github.com/runfinch/finch/commit/09d6514bfba31a898e3b3407964113f21fb6b244"
        },
        "date": 1691996928292,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 35384847541,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.4846,
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
            "value": 35.38,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1068482560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1574024,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 33537,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 23915827084,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4341,
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
            "value": 23.92,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 54976512,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1063664,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22627,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 341337764,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4528,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.17,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3413,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 5461,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 24765,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 365,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
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
          "id": "c97d2e93edaf139c3960620ec00454f856a8daee",
          "message": "fix: Mount /var/folders to finch vm (#525)\n\nIssue #, if available:\r\nhttps://github.com/runfinch/finch/issues/297\r\n\r\n*Description of changes:*\r\nMount /var/folders into finch vm automatically to improve compatibility\r\nwith docker.\r\n\r\nDocker mount directories\r\n<img width=\"567\" alt=\"image\"\r\nsrc=\"https://github.com/runfinch/finch/assets/69735799/61e561f9-6ac7-4610-9a88-aa044794ce00\">\r\n\r\n\r\n*Testing done:*\r\nYes\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-08-14T09:52:31-07:00",
          "tree_id": "399e12b0fe8400f2cf1574db4f286e287026b5f2",
          "url": "https://github.com/runfinch/finch/commit/c97d2e93edaf139c3960620ec00454f856a8daee"
        },
        "date": 1692032851341,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 33783981500,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3813,
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
            "value": 33.78,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1070841856,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1505576,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 32001,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24021080542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.491,
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
            "value": 24.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 77914112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071112,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22777,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 328820177,
            "unit": "ns/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9486,
            "unit": "%cpu_avg/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.07,
            "unit": "%cpu_peak/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3288,
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
            "value": 24370,
            "unit": "B/op",
            "extra": "4 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 354,
            "unit": "allocs/op",
            "extra": "4 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43075615+ginglis13@users.noreply.github.com",
            "name": "Gavin Inglis",
            "username": "ginglis13"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b666590631235f6430d652d5c50f0047a120893",
          "message": "fix: option to use installed lima for SOCI e2e tests (#533)\n\nIssue #, if available:\r\n\r\nCloses #532 \r\n\r\n*Description of changes:*\r\n\r\nto verify SOCI snapshotter is working correctly, limactl is used to\r\nshell into the Finch VM and check that mounted snapshots match the\r\nexpected created by SOCI. In our nightly builds we test against an\r\ninstalled version of Finch, but the previous SOCI e2e tests did not\r\naccount for this. Now, branch on `installed` to determine which lima\r\npath to use.\r\n\r\n*Testing done:*\r\n\r\nFor testing, I uninstalled Finch, reinstalled from brew, and tested that\r\npathing matched the installation with `INSTALLED=true make test-e2e-vm`\r\nand some debug statements.\r\n\r\n`INSTALLED=false make test-e2e-vm` also still works.\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Gavin Inglis <giinglis@amazon.com>",
          "timestamp": "2023-08-14T22:40:16-07:00",
          "tree_id": "3a690c23dd19400e1e458d3a3191e1b088470a1a",
          "url": "https://github.com/runfinch/finch/commit/8b666590631235f6430d652d5c50f0047a120893"
        },
        "date": 1692078180856,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 36657572542,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3921,
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
            "value": 36.66,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1139212288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1660216,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 34581,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 24060008417,
            "unit": "ns/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.5597,
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
            "value": 24.06,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 109084672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1071696,
            "unit": "B/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 22794,
            "unit": "allocs/op",
            "extra": "1 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 341832514,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5913,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.52,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.3418,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 25234,
            "unit": "B/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 367,
            "unit": "allocs/op",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}