window.BENCHMARK_DATA = {
  "lastUpdate": 1693499497052,
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
        "date": 1682705660738,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 91255409465,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2698",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "91.26",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2682449920",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "4057504",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "85998",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26132336795,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3783",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "31.25",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.13",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "512000",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1163328",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24892",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 451716536,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4689",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "7.509",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4516",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "4096",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30037",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "483",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1740483594,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2702",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.740",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3526656",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88080",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1720",
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
          "id": "76b31c0c453935f22588523f65888e103581cd89",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.3 to 3.23.4 (#389)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.3 to 3.23.4.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.4</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>cpu</h3>\r\n<ul>\r\n<li>ci(lint): correct gci linter by <a\r\nhref=\"https://github.com/mmorel-35\"><code>@​mmorel-35</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1443\">shirou/gopsutil#1443</a></li>\r\n</ul>\r\n<h3>process</h3>\r\n<ul>\r\n<li>refactor(process): compare error with <code>errors.Is</code> by <a\r\nhref=\"https://github.com/Juneezee\"><code>@​Juneezee</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1453\">shirou/gopsutil#1453</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>Add github SBOM Generator by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1447\">shirou/gopsutil#1447</a></li>\r\n<li>Add Security Policy by <a\r\nhref=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1450\">shirou/gopsutil#1450</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1450\">shirou/gopsutil#1450</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4\">https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/db89d12010909c1e89e9c964834ac9954d0fe786\"><code>db89d12</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1453\">#1453</a>\r\nfrom Juneezee/refactor/errors.Is</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/0439039205d2c471a0c69ebdfa33a378a7c95bee\"><code>0439039</code></a>\r\nrefactor(process): compare error with <code>errors.Is</code></li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/17fac7cbbaa1b063b32cd546dc134c61e51ecd3d\"><code>17fac7c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1450\">#1450</a>\r\nfrom gabibguti/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/2d2db8fee9d7870450586fd8f4a6754dbd1a3c73\"><code>2d2db8f</code></a>\r\nCreate SECURITY.md</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/10f213c448609a6ea9ff3acce5634e7da8b7d334\"><code>10f213c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1448\">#1448</a>\r\nfrom shirou/dependabot/github_actions/actions/upload...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d6ee47e5dc435944895c2aa4425f5df9af2d42f7\"><code>d6ee47e</code></a>\r\nchore(deps): bump actions/upload-artifact from 3.1.0 to 3.1.2</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/cf428f8c7251cccd3f918ac920946325630f5ff5\"><code>cf428f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1443\">#1443</a>\r\nfrom mmorel-35/linter</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/755bcab7b93f533d272510e8c063af15aad6abb5\"><code>755bcab</code></a>\r\nUpdate branch of sbom_generator.yml</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/21a646bd82f17464e572c66723c23a29da596e3c\"><code>21a646b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1447\">#1447</a>\r\nfrom shirou/feature/add_sbom_github_actions</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/bcf3fe925c880cd4e8dbd3db29b1c60ecae09e9c\"><code>bcf3fe9</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1445\">#1445</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.3...v3.23.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.3&new-version=3.23.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T14:04:07-04:00",
          "tree_id": "f741032f7d876d262db9b5af37cdc5bbea24e279",
          "url": "https://github.com/runfinch/finch/commit/76b31c0c453935f22588523f65888e103581cd89"
        },
        "date": 1683137504233,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 83434578606,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2697",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "83.43",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2696257536",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3742400",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "78828",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26006867487,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3548",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.01",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "2736128",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1157200",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24748",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 429929844,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.289",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "20.00",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4299",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "29005",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "459",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1583605176,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4564",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.584",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20365312",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "81480",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1571",
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
          "id": "710299445ed287c67114b277be7bd2a29715956b",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.3 (#390)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.2 to 2.9.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.9.3</h2>\r\n<h2>2.9.3</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Add RenderTimeline to GinkgoT() [c0c77b6]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>update Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a>\r\n[227c662]</li>\r\n<li>add newlines to GinkgoLogr (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1170\">#1170</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1171\">#1171</a>)\r\n[0de0e7c]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)\r\n[8b925ab]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)\r\n[e3795a4]</li>\r\n<li>Bump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)\r\n[b453793]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)\r\n[73ed75b]</li>\r\n<li>Bump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)\r\n[0a2bc64]</li>\r\n<li>Bump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)\r\n[f41c557]</li>\r\n<li>Bump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)\r\n[8e423e5]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.9.3</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Add RenderTimeline to GinkgoT() [c0c77b6]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>update Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a>\r\n[227c662]</li>\r\n<li>add newlines to GinkgoLogr (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1170\">#1170</a>)\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1171\">#1171</a>)\r\n[0de0e7c]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)\r\n[8b925ab]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)\r\n[e3795a4]</li>\r\n<li>Bump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)\r\n[b453793]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)\r\n[73ed75b]</li>\r\n<li>Bump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)\r\n[0a2bc64]</li>\r\n<li>Bump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)\r\n[f41c557]</li>\r\n<li>Bump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)\r\n[8e423e5]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/7a8249ea52743eee1a5cf127a1959c2169b029c8\"><code>7a8249e</code></a>\r\nv2.9.3</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/c0c77b692d00eaa5e93d18b1e6ff837ff10a7c33\"><code>c0c77b6</code></a>\r\nAdd RenderTimeline to GinkgoT()</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8b925abe6639e4bfd62b9defc35c5da41da08d6a\"><code>8b925ab</code></a>\r\nBump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1183\">#1183</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/e3795a44abfdf52cfa671bfa545eac23bfcbf435\"><code>e3795a4</code></a>\r\nBump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1184\">#1184</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/b453793b607ade42b5f4192ea53cd6a4244a73ff\"><code>b453793</code></a>\r\nBump golang.org/x/tools from 0.7.0 to 0.8.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1182\">#1182</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/73ed75b9f74756a058df23dc31b39bcc463de0cb\"><code>73ed75b</code></a>\r\nBump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1164\">#1164</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0a2bc6438f77c5eb598c0e2c3162cf8e010f54b5\"><code>0a2bc64</code></a>\r\nBump github.com/onsi/gomega from 1.27.4 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1173\">#1173</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/f41c557d462194fe704bd919af62badeb416a2c7\"><code>f41c557</code></a>\r\nBump github.com/go-logr/logr from 1.2.3 to 1.2.4 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1174\">#1174</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8e423e5e15be0b26c9e3d9ca2a9a05e513814c7d\"><code>8e423e5</code></a>\r\nBump golang.org/x/sys from 0.6.0 to 0.7.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1179\">#1179</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/227c662e819019ad42d3b6f3144cba3caa65023d\"><code>227c662</code></a>\r\nupdqte Measure deprecation message. fixes <a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1176\">#1176</a></li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.2...v2.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.2&new-version=2.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T14:13:23-04:00",
          "tree_id": "5e835791535734dd48321218c7346d8ad9ec9c0b",
          "url": "https://github.com/runfinch/finch/commit/710299445ed287c67114b277be7bd2a29715956b"
        },
        "date": 1683138010469,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80754922366,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2755",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.75",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2702020608",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3627928",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76233",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26992789978,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3391",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "41.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.99",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-10420224",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1198016",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25670",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 452201559,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5555",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.84",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4521",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30410",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "484",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1601655731,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.6963",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.602",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3600384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "81848",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1591",
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
          "id": "3e0581cc0f86efcd9ce7b7dc8c9384fb1e6af785",
          "message": "build(deps): Bump github.com/docker/docker from 23.0.3+incompatible to 23.0.5+incompatible (#382)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n23.0.3+incompatible to 23.0.5+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v23.0.5</h2>\r\n<h2>23.0.5</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/milestone/79?closed=1\">docker/cli,\r\n23.0.5 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/milestone/118?closed=1\">moby/moby,\r\n23.0.5 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Add the <code>--all</code> / <code>-a</code> option when pruning\r\nvolumes. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4229\">docker/cli#4229</a></li>\r\n<li>Add <code>--format=json</code> for <code>docker info</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4230\">docker/cli#4320</a></li>\r\n<li>Fix log loss with the AWSLogs log driver. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45350\">moby/moby#45350</a></li>\r\n<li>Fix a regression introduced in v23.0.4 where dockerd would refuse to\r\nstart if the fixed-cidr config parameter is provided but not bip. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45403\">moby/moby#45403</a></li>\r\n<li>Fix a panic in libnetwork during daemon start <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45376\">moby/moby#45376</a></li>\r\n<li>Fix &quot;tag&quot; event not being sent when an image is built with\r\n<code>buildx</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45410\">moby/moby#45410</a></li>\r\n</ul>\r\n<h3>Packaging Updates</h3>\r\n<ul>\r\n<li>Upgrade Compose to <code>2.17.3</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/883\">docker/docker-ce-packaging#883</a></li>\r\n</ul>\r\n<h2>v23.0.4</h2>\r\n<h2>23.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/milestone/77?closed=1\">docker/cli,\r\n23.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/milestone/117?closed=1\">moby/moby,\r\n23.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a performance regression in Docker CLI 23.0.0 <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4141\">docker/cli#4141</a>.</li>\r\n<li>Fix progress indicator on <code>docker cp</code> not functioning as\r\nintended <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4157\">docker/cli#4157</a>.</li>\r\n<li>Fix shell completion for <code>docker compose --file</code> <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4177\">docker/cli#4177</a>.</li>\r\n<li>Fix an error caused by incorrect handling of\r\n&quot;default-address-pools&quot; in <code>daemon.json</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45246\">moby/moby#45246</a>.</li>\r\n</ul>\r\n<h3>Packaging Updates</h3>\r\n<ul>\r\n<li>Fix missing packages for CentOS 9 Stream.</li>\r\n<li>Upgrade Go to <code>1.19.8</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/878\">docker/docker-ce-packaging#878</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4164\">docker/cli#4164</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45277\">moby/moby#45277</a>,\r\nwhich contains fixes for <a\r\nhref=\"https://github.com/advisories/GHSA-fp86-2355-v99r\">CVE-2023-24537</a>,\r\n<a\r\nhref=\"https://github.com/advisories/GHSA-v4m2-x4rp-hv22\">CVE-2023-24538</a>,\r\n<a\r\nhref=\"https://github.com/advisories/GHSA-8v5j-pwr7-w5f8\">CVE-2023-24534</a>,\r\nand <a\r\nhref=\"https://github.com/advisories/GHSA-9f7g-gqwh-jpf5\">CVE-2023-24536</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/94d3ad69cc598b5a8eb8a643d6999375953512e8\"><code>94d3ad6</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45410\">#45410</a>\r\nfrom rumpl/23.0_backport-fix-buildx-tag-events</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/933a9f83b7cda9d1fc49319a24a4b87f4aa1909c\"><code>933a9f8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45407\">#45407</a>\r\nfrom thaJeztah/23.0_backport_vendor_runc_1.1.5</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/fe0a414613e9033df12ff3bccb61204d8facc9e8\"><code>fe0a414</code></a>\r\nUse the image service instead of the reference store for tagging</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1b1230eaaf00f9a78bd7e1a624b1d8b95db356df\"><code>1b1230e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45375\">#45375</a>\r\nfrom thaJeztah/23.0_backport_bump_swarmkit</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1b263035af5004a440ecb6fea7225d6068073765\"><code>1b26303</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45374\">#45374</a>\r\nfrom thaJeztah/23.0_backport_stfu_grpc</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/682542fd081646d1587720481ac5a4ea55b75337\"><code>682542f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45373\">#45373</a>\r\nfrom thaJeztah/23.0_backport_assorted_test_and_pack...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/40ec0eb9fe21d5fe8a9e98c8aa26e49a442f6036\"><code>40ec0eb</code></a>\r\nvendor: github.com/opencontainers/runc v1.1.5</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9af6762d34a0b47006472b319803d85834e216fd\"><code>9af6762</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45403\">#45403</a>\r\nfrom akerouanton/23.0-cherrypick-2d31697</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0b6449a4772f01118cf7ba9645d737fc94e773e1\"><code>0b6449a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45376\">#45376</a>\r\nfrom thaJeztah/23.0_backport_delete_network_more_at...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/227d3f39a354caaf5252f7a29d78aad92e8bfba2\"><code>227d3f3</code></a>\r\ndaemon: set docker0 subpool as the IPAM pool</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v23.0.3...v23.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=23.0.3+incompatible&new-version=23.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-03T15:41:11-04:00",
          "tree_id": "1c20d3fd2834f22310254aa23e661742782dcfd8",
          "url": "https://github.com/runfinch/finch/commit/3e0581cc0f86efcd9ce7b7dc8c9384fb1e6af785"
        },
        "date": 1683143351312,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 122272685835,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2234",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "122.3",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2684911616",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "5425872",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "114878",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26001654777,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3715",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1159968",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24795",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 451961459,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4811",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.97",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4519",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "29965",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "480",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1649193359,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2683",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.649",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3600384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "83384",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1629",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1684271091425,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80141305207,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2935",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.14",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2664083456",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3601648",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75648",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28848313184,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3679",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "46.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "28.85",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1300448",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "27388",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 462562354,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.034",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.62",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4625",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30349",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "492",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1767866725,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2440",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "14.29",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.768",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88968",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1749",
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
          "id": "06d86b2bc348db9f0d8d02678faee556719b883d",
          "message": "build(deps): Bump submodules (#402)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-05-17T16:24:01Z",
          "tree_id": "288eddf483f6ff89d0e83c6e089da366bce0295d",
          "url": "https://github.com/runfinch/finch/commit/06d86b2bc348db9f0d8d02678faee556719b883d"
        },
        "date": 1684340948075,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77722208248,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2990",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "77.72",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2564583424",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3503248",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73464",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26327482250,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3765",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.33",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-102400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1170776",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25046",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 466144249,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5329",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "8.159",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4661",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30624",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "496",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1773759790,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4025",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.774",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20398080",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88992",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1758",
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
          "id": "05b6b2e7364036a3d30b67ad409f55526cc59ffe",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.0 to 1.9.1 (#405)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.0 to 1.9.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/b30aa27cf4df89e9b96c68c063486c3162f71aef\"><code>b30aa27</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1339\">#1339</a>\r\nfrom xieyuschen/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/6acd903758687c4a3db3c11701e6c414fcf1c1f7\"><code>6acd903</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/105e63f86c7de9d7aab379fdd6721a3476009eaf\"><code>105e63f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1\">#1</a> from\r\nashmckenzie/ashmckenzie/fix-writer-scanner</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/c052ba6a076b368de89029949f68b3b8ccd8e058\"><code>c052ba6</code></a>\r\nScan text in 64KB chunks</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/e59b167d75f32c4d0db65a2dc6d5f0c4dd548653\"><code>e59b167</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1372\">#1372</a>\r\nfrom tommyblue/syslog_different_loglevels</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/766cfece3701d0b1737681ffb5e6e40b628b664d\"><code>766cfec</code></a>\r\nThis commit fixes a potential denial of service vulnerability in\r\nlogrus.Write...</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/70234da9c319016474284324265b694b2471c903\"><code>70234da</code></a>\r\nAdd instructions to use different log levels for local and syslog</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/a448f8228b920021d792e0767626068db5f0e38d\"><code>a448f82</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1362\">#1362</a>\r\nfrom FrancoisWagner/fix-data-race-in-hooks-test-pkg</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/ff07b25fdf830fffcf67b64674799b11941542ac\"><code>ff07b25</code></a>\r\nFix data race in hooks.test package</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/d8787af86c754a82be345e40365ae76436aa8c2c\"><code>d8787af</code></a>\r\nUse text when shows the logrus output</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.0...v1.9.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.0&new-version=1.9.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-17T16:59:12-07:00",
          "tree_id": "4200288d7d0b7a0007ed4d8c2a30b6f3c39a38dc",
          "url": "https://github.com/runfinch/finch/commit/05b6b2e7364036a3d30b67ad409f55526cc59ffe"
        },
        "date": 1684368471697,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 187808826186,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.1479",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "78.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "187.8",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2673029120",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "8376808",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "174913",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29312804066,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3021",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "29.31",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "151552",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1319968",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "27829",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 499825203,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.9568",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "21.28",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4997",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "20480",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31954",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "526",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1872207642,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.1247",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "13.23",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.872",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3629056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "93672",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1852",
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
          "id": "25aa324ca324248cf2093af23f205af1b5ae276f",
          "message": "build(deps): Bump github.com/docker/docker from 23.0.6+incompatible to 24.0.0+incompatible (#406)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n23.0.6+incompatible to 24.0.0+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.0</h2>\r\n<h2>24.0.0</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.0\">docker/cli,\r\n24.0.0 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.0\">moby/moby,\r\n24.0.0 milestone</a></li>\r\n</ul>\r\n<h3>New</h3>\r\n<ul>\r\n<li>Introduce experimental support for containerd as the content store\r\n(replacing the existing storage drivers). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43735\">moby/moby#43735</a>,\r\n<a\r\nhref=\"https://github.com/moby/moby/pulls?q=is%3Apr+is%3Amerged+milestone%3A24.0.0+-label%3Aprocess%2Fcherry-picked+label%3Acontainerd-integration+\">other\r\nmoby/moby pull requests</a></li>\r\n<li>The <code>--host</code> CLI flag now supports a path component in a\r\n<code>ssh://</code> host address, allowing use of an alternate socket\r\npath without configuration on the remote host. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4073\">docker/cli#4073</a></li>\r\n<li>The <code>docker info</code> CLI command now reports a version and\r\nplatform field. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4180\">docker/cli#4180</a></li>\r\n<li>Introduce the daemon flag <code>--default-network-opt</code> to\r\nconfigure options for newly created networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43197\">moby/moby#43197</a></li>\r\n<li>Restrict access to <code>AF_VSOCK</code> in the\r\n<code>socket(2)</code> family of syscalls in the default seccomp\r\nprofile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44562\">moby/moby#44562</a></li>\r\n<li>Introduce support for setting OCI runtime annotations on containers.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4156\">docker/cli#45025</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45025\">moby/moby#45025</a></li>\r\n<li>Alternative runtimes can now be configured in\r\n<code>daemon.json</code>, enabling runtime names to be aliased and\r\noptions to be passed. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45032\">moby/moby#45032</a></li>\r\n<li>The <code>docker-init</code> binary will now be discovered in\r\nFHS-compliant libexec directories, in addition to the <code>PATH</code>.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45198\">moby/moby#45198</a></li>\r\n<li>API: Surface the daemon-level <code>--no-new-privileges</code> in\r\n<code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45320\">moby/moby#45320</a></li>\r\n</ul>\r\n<h3>Removed</h3>\r\n<ul>\r\n<li><code>docker info</code> no longer reports\r\n<code>IndexServiceAddress</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4204\">docker/cli#4204</a></li>\r\n<li>libnetwork: Remove fallback code for obsolete kernel versions. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44684\">moby/moby#44684</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44802\">moby/moby#44802</a></li>\r\n<li>libnetwork: Remove unused code related to classic Swarm. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44965\">moby/moby#44965</a></li>\r\n<li>libnetwork: Remove usage of the <code>xt_u32</code> kernel module\r\nfrom encrypted Swarm overlay networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45281\">moby/moby#45281</a></li>\r\n<li>Remove support for buildkit's deprecated <code>buildinfo</code> in\r\nfavor of standard provenance attestations. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45097\">moby/moby#45097</a></li>\r\n<li>Remove the deprecated AUFS and legacy <code>overlay</code> storage\r\ndrivers. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45342\">moby/moby#45342</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45359\">moby/moby#</a></li>\r\n<li>Remove the deprecated <code>overlay2.override_kernel_check</code>\r\nstorage driver option. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45368\">moby/moby#45368</a></li>\r\n<li>Remove workarounds for obsolete versions of\r\n<code>apparmor_parser</code> from the AppArmor profiles. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45500\">moby/moby#45500</a></li>\r\n<li>API: <code>GET /images/json</code> no longer represents empty\r\nRepoTags and RepoDigests\r\nas<code>&lt;none&gt;:&lt;none&gt;</code>/<code>&lt;none&gt;@&lt;none&gt;</code>.\r\nEmpty arrays are be returned instead on API &gt;= 1.43. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45068\">moby/moby#45068</a></li>\r\n</ul>\r\n<h3>Deprecated</h3>\r\n<ul>\r\n<li>Deprecate the <code>--oom-score-adjust</code> daemon option. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45315\">moby/moby#45315</a></li>\r\n<li>API: Deprecate the <code>VirtualSize</code> field in <code>GET\r\n/images/json</code> and <code>GET /images/{id}/json</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45346\">moby/moby#45346</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>The <code>docker stack</code> command no longer validates the\r\n<code>build</code> section of Compose files. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4214\">docker/cli#4214</a></li>\r\n<li>Fix lingering healthcheck processes after timeout is reached. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/43739\">moby/moby#43739</a></li>\r\n<li>Reduce the overhead of container startup when using the\r\n<code>overlay2</code> storage driver. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44285\">moby/moby#44285</a></li>\r\n<li>API: Handle multiple <code>before=</code> and <code>since=</code>\r\nfilters in <code>GET /images</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44503\">moby/moby#44503</a></li>\r\n<li>Fix numerous bugs in the embedded DNS resolver implementation used\r\nby user-defined networks. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/44664\">moby/moby#44664</a></li>\r\n<li>Add <code>execDuration</code> field to the map of event attributes.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45494\">moby/moby#45494</a></li>\r\n<li>Swarm-level networks can now be created with the Windows\r\n<code>internal</code>, <code>l2bridge</code>, and <code>nat</code>\r\ndrivers. <a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3121\">moby/swarmkit#3121</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45291\">moby/moby#45291</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Update Go to <code>1.20.4</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4253\">docker/cli#4253</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45456\">moby/moby#45456</a></li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1331b8c39a601c77d678f3e03f3f39cb07aa5f76\"><code>1331b8c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45537\">#45537</a>\r\nfrom thaJeztah/24.0_backport_containerd_binary_1.7.1</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/907f037141b41d0a96daa379fd2cbd0b0eee7569\"><code>907f037</code></a>\r\nupdate containerd binary to v1.7.1</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a5b597ea51348f5f922fdd2167cba8f57c6961f3\"><code>a5b597e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45531\">#45531</a>\r\nfrom rumpl/24.0_backport_fix-empty-auth-pull</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/8bbfa3274109a240952c08a2263d0cd256a27311\"><code>8bbfa32</code></a>\r\nc8d: The authorizer needs to be set even if AuthConfig is empty</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/807e415260380b55af87ef50d72abcef9466e43b\"><code>807e415</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45526\">#45526</a>\r\nfrom laurazard/backport-classic-builder</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/8587a1c617dae69474e8e3847d5fd799de156da6\"><code>8587a1c</code></a>\r\nc8d/builder: implement cache</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9717369913214e9fbf1d656af24092d65a1e0102\"><code>9717369</code></a>\r\nc8d: implement classic builder</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ed0c147c8ffd969487ecc1afb74832f8aa4e798e\"><code>ed0c147</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45523\">#45523</a>\r\nfrom thaJeztah/24.0_backport_cleanup_reexec_inits</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/90be9ab80267fbed15503c9030b864151f73503c\"><code>90be9ab</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45525\">#45525</a>\r\nfrom thaJeztah/24.0_backport_c8d_authconfig_default</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d73f7031e0cb866fae12e582a6846114303a10fa\"><code>d73f703</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45521\">#45521</a>\r\nfrom thaJeztah/24.0_backport_vendor_distribution_v2...</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v23.0.6...v24.0.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=23.0.6+incompatible&new-version=24.0.0+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-18T00:52:53Z",
          "tree_id": "e165710972d7cc4dd1908083cdd88af9c0f12942",
          "url": "https://github.com/runfinch/finch/commit/25aa324ca324248cf2093af23f205af1b5ae276f"
        },
        "date": 1684371571910,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 124215024224,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.1885",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "124.2",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2671398912",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "5493936",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "116372",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 29373271417,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3890",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "29.37",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "28672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1322680",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "27868",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 466587877,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3464",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "6.886",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4665",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30762",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "496",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1854135702,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2766",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.854",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "92568",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1829",
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
          "id": "e6cbd2c5dba8af5cab9ea8a37a33c580ee4edef9",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.1 to 0.27.2 (#407)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.1 to 0.27.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/756e2227bf3a486098f504af1a0ffb736ad16f4c\"><code>756e222</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/117298\">#117298</a><code>pohly/automated-cherry-pick-of-#117238</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/b1123d27117a0cfa49488c017ddb1b740ef6115a\"><code>b1123d2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/117708\">#117708</a><code>Jefftree/automated-cherry-pick-of-#117705</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/4074a29ff45a9599f061f04efa3d830f8cb5974d\"><code>4074a29</code></a>\r\nUpdate kube-openapi to fix race</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/cc852ec7867b3cff959730c6f6ab023f137d481f\"><code>cc852ec</code></a>\r\napi: encode NamespacedName with lower case in JSON</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.1...v0.27.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.1&new-version=0.27.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:14-07:00",
          "tree_id": "4995bf341e0dfa88b02d82d9034a40802015304b",
          "url": "https://github.com/runfinch/finch/commit/e6cbd2c5dba8af5cab9ea8a37a33c580ee4edef9"
        },
        "date": 1684775601704,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 76784140186,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3044",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "76.78",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2678050816",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3462912",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "72547",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26125207519,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3810",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "46.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.13",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1163736",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24883",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 479107485,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.9229",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "17.54",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4790",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "2730",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30930",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "506",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1615983504,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.7202",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "31.25",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.616",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "13737984",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "82824",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1609",
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
          "id": "0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.1 to 1.9.2 (#408)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.1 to 1.9.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/352781de903c9dc639752a3ac08148132746e180\"><code>352781d</code></a>\r\nRevert &quot;Merge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.1...v1.9.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.1&new-version=1.9.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:34-07:00",
          "tree_id": "f2d2b81654b4af29a2aed139fba3d507787ce928",
          "url": "https://github.com/runfinch/finch/commit/0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb"
        },
        "date": 1684775901025,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 76657389397,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2867",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "46.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "76.66",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2661773312",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3463352",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "72494",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27003244138,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3393",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "27.00",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1073152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1199920",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25691",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 454271019,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4322",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.91",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4542",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30090",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "483",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1644413704,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.7709",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "27.27",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.644",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "83704",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1629",
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
          "id": "80513c7785a6da4ae09d9c871acaf180f5d68f2c",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (#409)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.6 to 1.27.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.7</h2>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/99a29d5128d6fd87bad628e94d1cf92e82dc2b32\"><code>99a29d5</code></a>\r\nv1.27.7</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05c1bc6dc318e2c5db2a2e3f9977252bb2602d8b\"><code>05c1bc6</code></a>\r\nupdate gitignore</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/57054d54add42b5aa5c499d4a5b3667a02f61ec1\"><code>57054d5</code></a>\r\nfix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/7cadcf6e3a21ed4daa9f4d1630913c0dcdb23e73\"><code>7cadcf6</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/b524839842edb61a50d8ab189c99179afe452c79\"><code>b524839</code></a>\r\nBump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/5f446942faf33eb8e4a398866b1bd094a1285de5\"><code>5f44694</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05dc99a168f129346fed13bda9967a7a4b352476\"><code>05dc99a</code></a>\r\nBump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/3a033d10833c60711a0de2eb3903532b8e78b27f\"><code>3a033d1</code></a>\r\nBump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/a19238f64f7f7c8bcec2bb6bc9acb6ffe7485a58\"><code>a19238f</code></a>\r\nReplace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/29ed04126e68341d11b71d9052d4845ea07629aa\"><code>29ed041</code></a>\r\nBump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.6...v1.27.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.6&new-version=1.27.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T10:08:53-07:00",
          "tree_id": "e2fcfcda12bb1ccd87c7073b3933f3ac027af425",
          "url": "https://github.com/runfinch/finch/commit/80513c7785a6da4ae09d9c871acaf180f5d68f2c"
        },
        "date": 1684776268160,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77847727826,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3001",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "26.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "77.85",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2682880000",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3510528",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73569",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26491678463,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3022",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "26.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.49",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1177592",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25210",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 539397436,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.7973",
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.83",
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5392",
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "34024",
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "567",
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1897820816,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3804",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "18.18",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.898",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "93928",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1869",
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
          "id": "bb1cab229c787752615eb00e74f240c4a4e0e23d",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.0+incompatible to 24.0.1+incompatible (#413)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.0+incompatible to 24.0.1+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.1</h2>\r\n<h2>24.0.1</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.1\">docker/cli,\r\n24.0.1 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.1\">moby/moby,\r\n24.0.1 milestone</a></li>\r\n</ul>\r\n<h3>Removed</h3>\r\n<ul>\r\n<li>Remove CLI completions for storage drivers removed in the 24.0 major\r\nrelease. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4302\">docker/cli#4302</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix an issue where DNS query NXDOMAIN replies from external servers\r\nwere forwarded to the client as SERVFAIL. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45573\">moby/moby#45573</a></li>\r\n<li>Fix an issue where <code>docker pull --platform</code> would report\r\n<code>No such image</code> regarding another tag pointing to the same\r\nimage. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45562\">moby/moby#45562</a></li>\r\n<li>Fix an issue where insecure registry configuration would be\r\nforgotten during config reload. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45571\">moby/moby#45571</a></li>\r\n<li>containerd-storage: Fix an issue where images which have no layers\r\nwould not be listed in <code>docker images -a</code> <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45588\">moby/moby#45588</a></li>\r\n<li>API: Fix an issue where <code>GET /images/{id}/json</code> would\r\nreturn <code>null</code> instead of empty <code>RepoTags</code> and\r\n<code>RepoDigests</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45564\">moby/moby#45564</a></li>\r\n<li>API: Fix an issue where <code>POST /commit</code> did not accept an\r\nempty request body. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45568\">moby/moby#45568</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Upgrade Compose to <code>v2.18.1</code>. <a\r\nhref=\"hhttps://redirect.github.com/docker/docker-ce-packaging/pull/896\">docker/docker-ce-packaging#896</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/463850e59e8af1258cad649ec6836d5e88d16fec\"><code>463850e</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45588\">#45588</a>\r\nfrom vvoland/c8d-layerless-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/47a3dad256e9ec6f4a2494cabc189ae709265d6c\"><code>47a3dad</code></a>\r\nc8d/list: Show layerless images</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a0bc3ebae4396b0ad8a3b057146b264764c621e8\"><code>a0bc3eb</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45571\">#45571</a>\r\nfrom thaJeztah/24.0_backport_fix_insecure_registrie...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/922b6aa672880fa05989453dff0f0084d318e286\"><code>922b6aa</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45568\">#45568</a>\r\nfrom corhere/backport-24.0/fix-empty-container-decode</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0e605cf9721094566c7d3680868b784ac60bf81c\"><code>0e605cf</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45573\">#45573</a>\r\nfrom thaJeztah/24.0_backport_fix_dns_servfail</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/878c41791be3cc8274e340d5fb459fb5bc607791\"><code>878c417</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45560\">#45560</a>\r\nfrom crazy-max/24.0_backport_fix-worker-id</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/654e80abc2a3b6b6fff557a360a4ad7218aa7baa\"><code>654e80a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45570\">#45570</a>\r\nfrom crazy-max/24.0_backport_ci-bin-image-distribute</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0869b089e4b1633ac8c9c805b9293030a8782664\"><code>0869b08</code></a>\r\nlibnetwork: just forward the external DNS response</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/3467ba6451e38c449aa8bd1c1c8f186e7f6f6ead\"><code>3467ba6</code></a>\r\nreorder load funcs to match newServiceConfig()'s order</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f9b886c01b36e605ff822f18e9f924cae94ae415\"><code>f9b886c</code></a>\r\nadd mirror to daemon reload test for insecure registries</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.0...v24.0.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.0+incompatible&new-version=24.0.1+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-22T17:48:50Z",
          "tree_id": "92f651eed9097478240daebf4cbf33ab7a695969",
          "url": "https://github.com/runfinch/finch/commit/bb1cab229c787752615eb00e74f240c4a4e0e23d"
        },
        "date": 1684778048926,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78814068645,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2900",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "78.81",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2671955968",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3552416",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "74531",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26193892885,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3422",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "86016",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1164848",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24924",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 458107989,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5107",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.27",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4580",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30488",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "487",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1692006167,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4404",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.692",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3633152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "85904",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1679",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685123147000,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80815974229,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3142",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.82",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2657595392",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3627016",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76212",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26215981608,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3804",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "31.25",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.22",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "49152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1165576",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24936",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 454812879,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.2120",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "9.022",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4547",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30317",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "486",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1791474025,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3043",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.791",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "89448",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1768",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685135735533,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77593156758,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2886",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "77.59",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2671185920",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3491832",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73213",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25859983942,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4467",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "25.86",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "28086272",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1150936",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24596",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 464246695,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4002",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "9.091",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4642",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30338",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "492",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1890756652,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5868",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.891",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "93832",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1868",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685142597112,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80208039766,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3279",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "53.85",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.21",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2669309952",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3604168",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75741",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26553762850,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3295",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "36.36",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.55",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16805888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1180800",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25268",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 517685120,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.2687",
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "13.25",
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5176",
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "32888",
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "546",
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1810866498,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3984",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "14.29",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.811",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "90760",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1789",
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
          "id": "ac18046e70efc0e1e9fe11a30457f6f945df2a23",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.6.5 to 0.7.0 (#420)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.6.5 to 0.7.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.0</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">0.7.0</a>\r\n(2023-05-26)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\">22a7f7e</a>)</li>\r\n<li>verify the result of finch inspect has State.Status and State.Error\r\n(<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\">b761a7a</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.2 to\r\n2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\">0bd0901</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.5 to\r\n1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\">72120b5</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.6 to\r\n1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\">590a984</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">0.7.0</a>\r\n(2023-05-26)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\">22a7f7e</a>)</li>\r\n<li>verify the result of finch inspect has State.Status and State.Error\r\n(<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\">b761a7a</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.2 to\r\n2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\">0bd0901</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.5 to\r\n1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\">72120b5</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.6 to\r\n1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\">590a984</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.3...v0.6.4\">0.6.4</a>\r\n(2023-04-06)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>better handling of concurrent http servers (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/57\">#57</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0ae6182b53beffdc279ffc1df7d539fe8205fd56\">0ae6182</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.2...v0.6.3\">0.6.3</a>\r\n(2023-03-27)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.2 to\r\n1.27.4 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/48\">#48</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/f113e7b2f65a66982773079a30dee06dd5e6e326\">f113e7b</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.4 to\r\n1.27.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/52\">#52</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/bd056e7d947a2432611ca923585422c399c56395\">bd056e7</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.1...v0.6.2\">0.6.2</a>\r\n(2023-03-16)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Fix tests to match nerdctl 1.2.1 outputs (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/50\">#50</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/3d9b4f4794d8df965dd2d611b2bed59aabff7dc2\">3d9b4f4</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.8.3 to\r\n2.8.4 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/41\">#41</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a9476c13bc4febd40a4f98cc8e6f8eebc04cfb5e\">a9476c1</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.1 to\r\n1.27.2 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/40\">#40</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/e8fc71a9c94afe2084bfdb129de5f5828adfa8b8\">e8fc71a</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.0...v0.6.1\">0.6.1</a>\r\n(2023-02-28)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>Switch from <code>nc -l</code> to <code>nginx</code> in <code>run\r\n-p/--publish</code> test (<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/7a6a6c36d11796b2048d90353f06d25013b132a8\">7a6a6c3</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/afbbd971ea407fdb723fafb93314bcb94de70c27\"><code>afbbd97</code></a>\r\nchore(main): release 0.7.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/63\">#63</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/22a7f7e7bd917e443aa47aaa9eaa5dac03a5a10b\"><code>22a7f7e</code></a>\r\nfeat: Tests for bind mounts (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/66\">#66</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/590a9845b46218c1c8d669a5e5a9269dfc86a232\"><code>590a984</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/65\">#65</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/b761a7ab19fe15e0d0bf34441fad1248ac6b3e83\"><code>b761a7a</code></a>\r\nfeat: verify the result of finch inspect has State.Status and\r\nState.Error (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/64\">#64</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/72120b57b4c70945df307a1aea80d609e7c27a95\"><code>72120b5</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.5 to 1.27.6 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/54\">#54</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/0bd090128548cdeb8cf381c8c53b2177fe009ab6\"><code>0bd0901</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/62\">#62</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/882cd1e5ba373a0eda1362f7370474b6720e6c75\"><code>882cd1e</code></a>\r\ntest: Functional test for PS command (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/17\">#17</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.6.5...v0.7.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.6.5&new-version=0.7.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-26T16:30:20-07:00",
          "tree_id": "5e6cfb42519bed0dde2505d4b43e33fd56d4cb40",
          "url": "https://github.com/runfinch/finch/commit/ac18046e70efc0e1e9fe11a30457f6f945df2a23"
        },
        "date": 1685144132219,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79869230608,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3213",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.87",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2670006272",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3589656",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75414",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26491240742,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.2868",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "23.08",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.49",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16769024",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1178664",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25223",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 480739117,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6369",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.36",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4807",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31360",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "510",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1693770930,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4645",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "18.18",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.694",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3608576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "86000",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1680",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685386132776,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80178762675,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3163",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.18",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2664640512",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3602384",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75680",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26337855655,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3749",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.34",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "17866752",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1171168",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25052",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 502469927,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3950",
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.54",
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5024",
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "32044",
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "531",
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1693710261,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4779",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.694",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20402176",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "85488",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1678",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685410068154,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79903916918,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2994",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "37.50",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.90",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2681700352",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3592384",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75445",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26335826070,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3629",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.34",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "98304",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1169640",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25031",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508135250,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3741",
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.45",
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5081",
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "32680",
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "537",
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1733008321,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2354",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.733",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "87680",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1719",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685490655795,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79493523844,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2791",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.49",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2662977536",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3572376",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "74999",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28731197735,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.2760",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "28.73",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "94208",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1293096",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "27217",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 515357166,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8282",
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "17.69",
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5152",
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "33208",
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "548",
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1843118015,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2251",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "12.47",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.843",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20402176",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "92480",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1820",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685552466003,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77934401474,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3095",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "77.93",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2681393152",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3515440",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73661",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 28632920043,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3255",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "28.63",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16936960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1290944",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "27169",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 484070460,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6080",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "19.27",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4840",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31730",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "514",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1747796128,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3947",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.748",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88712",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1732",
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
          "id": "6a67f0cfb0a3a1da438779f4faa04048f25d7dde",
          "message": "build(deps): Bump github.com/lima-vm/lima from 0.15.1 to 0.16.0 (#428)\n\nBumps [github.com/lima-vm/lima](https://github.com/lima-vm/lima) from\r\n0.15.1 to 0.16.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/lima-vm/lima/releases\">github.com/lima-vm/lima's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.16.0</h2>\r\n<p>This release adds an experimental support for the <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/docs/network.md#lima-user-v2-network\"><code>user-v2</code></a>\r\nnetwork driver: <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/examples/experimental/net-user-v2.yaml\"><code>limactl\r\nstart template://experimental/net-user-v2</code></a>.\r\nThe <code>user-v2</code> network driver enables VM-to-VM networking\r\nwithout the root privilege on the host.\r\nThis should be useful for simulating multi-node Kubernetes clusters on a\r\nlaptop.</p>\r\n<p>This release also fixes a relatively minor vulnerability <a\r\nhref=\"https://github.com/lima-vm/lima/security/advisories/GHSA-f7qw-jj9c-rpq9\">CVE-2023-32684</a>.\r\nThis vulnerability is very <em>unlikely</em> to be exploitable as long\r\nas you are using the official templates of Lima.</p>\r\n<h2>Changes</h2>\r\n<ul>\r\n<li><code>limactl</code> CLI:\r\n<ul>\r\n<li>(Experimental) Add <code>limactl snapshot\r\n(apply|create|delete|list)</code> commands (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1054\">#1054</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n<li>Escape only the value of env variables in <code>limactl shell</code>\r\n(<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1501\">#1501</a>,\r\nthanks to <a\r\nhref=\"https://github.com/sam-berning\"><code>@​sam-berning</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>YAML:\r\n<ul>\r\n<li>Add &quot;dependency&quot; provisioning mode (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1105\">#1105</a>,\r\nthanks to <a\r\nhref=\"https://github.com/pendo324\"><code>@​pendo324</code></a>)</li>\r\n<li>(Experimental) Add <code>.audio.device</code> (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1527\">#1527</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1532\">#1532</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1561\">#1561</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1589\">#1589</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a> <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>Documents:\r\n<ul>\r\n<li>Install man pages (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1521\">#1521</a>,\r\nthanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>Network:\r\n<ul>\r\n<li>(Experimental) Add <a\r\nhref=\"https://github.com/lima-vm/lima/blob/v0.16.0/docs/network.md#lima-user-v2-network\"><code>user-v2</code></a>\r\nnetwork driver to enable VM-to-VM networking without root (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1383\">#1383</a>,\r\nthanks to <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a>)</li>\r\n</ul>\r\n</li>\r\n<li>nerdctl:\r\n<ul>\r\n<li>Update from v1.3.1 to <a\r\nhref=\"https://github.com/containerd/nerdctl/releases/tag/v1.4.0\">v1.4.0</a>\r\n(<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1559\">#1559</a>)</li>\r\n</ul>\r\n</li>\r\n<li>Templates:\r\n<ul>\r\n<li>AlmaLinux: update to 9.2 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n<li>Alpine: update to 3.18 and fix Rosetta support (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1560\">#1560</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1580\">#1580</a>,\r\nthanks to <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a>)</li>\r\n<li>Arch Linux: update to 20230515.150700 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n<li>Fedora: update to 38 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1502\">#1502</a>,\r\nthanks to <a\r\nhref=\"https://github.com/cpach\"><code>@​cpach</code></a>)</li>\r\n<li>Nomad: update to v0.9.4 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1552\">#1552</a>)</li>\r\n<li>Rocky Linux: update to 9.2 and 8.8 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>,\r\n<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1591\">#1591</a>)</li>\r\n<li>Ubuntu: update to 23.04 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1550\">#1550</a>)</li>\r\n</ul>\r\n</li>\r\n<li>Misc:\r\n<ul>\r\n<li>Improve disk efficiency (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1411\">#1411</a>)\r\nfor caches (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1544\">#1544</a>)</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p>Full changes: <a\r\nhref=\"https://github.com/lima-vm/lima/milestone/34?closed=1\">https://github.com/lima-vm/lima/milestone/34?closed=1</a>\r\nThanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a> <a\r\nhref=\"https://github.com/balajiv113\"><code>@​balajiv113</code></a> <a\r\nhref=\"https://github.com/bumpsoo063\"><code>@​bumpsoo063</code></a> <a\r\nhref=\"https://github.com/cpach\"><code>@​cpach</code></a> <a\r\nhref=\"https://github.com/jandubois\"><code>@​jandubois</code></a> <a\r\nhref=\"https://github.com/pendo324\"><code>@​pendo324</code></a> <a\r\nhref=\"https://github.com/sam-berning\"><code>@​sam-berning</code></a></p>\r\n<h2>Usage</h2>\r\n<pre lang=\"console\"><code>[macOS]$ limactl start\r\n...\r\nINFO[0029] READY. Run `lima` to open the shell.\r\n<p>[macOS]$ lima uname\r\nLinux\r\n</code></pre></p>\r\n<hr />\r\n<p>The binaries were built automatically on GitHub Actions.\r\nThe build log is available for 90 days: <a\r\nhref=\"https://github.com/lima-vm/lima/actions/runs/5118006806\">https://github.com/lima-vm/lima/actions/runs/5118006806</a></p>\r\n<p>The sha256sum of the SHA256SUMS file itself is\r\n<code>2062c42688128dca55331fc1a8f4841cbf41ed9dd11867d48decdf6880afde87</code>\r\n.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/01dbd4d9cabe692afa4517be3995771f0ebb38a5\"><code>01dbd4d</code></a>\r\nMerge pull request from GHSA-f7qw-jj9c-rpq9</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bc1bdb89d98aed2b82d21b95e02eade506513d78\"><code>bc1bdb8</code></a>\r\nProhibit using a differential disk as a base disk</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bfa5bab99c667a2816a04abaa5105fc81335d318\"><code>bfa5bab</code></a>\r\nqemu: explicitly pass the basedisk format to QEMU</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/efe1c47b2a0d5dce2134c6e9dacf0b3fd9b4056a\"><code>efe1c47</code></a>\r\npkg/qemu/imgutil: add Info fields</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/3dbc08cbd0d2b7ef60f475a515e63974a9dff370\"><code>3dbc08c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1592\">#1592</a>\r\nfrom afbjorklund/man-prefix</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/703d69fb6db5214950e27956af8be5d2e84aac3a\"><code>703d69f</code></a>\r\nRemove the build directories from the manpages</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/e7aa4ff90cb76564709a16bb11e7198c06a58242\"><code>e7aa4ff</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1591\">#1591</a>\r\nfrom AkihiroSuda/dev</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/b9ea96482b1d65b3851b1c9fe2a6ad40551170b7\"><code>b9ea964</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1590\">#1590</a>\r\nfrom balajiv113/usernet-default</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/5656d1ad50c4516bc12079dcaa9b47402d56c6ab\"><code>5656d1a</code></a>\r\ntemplates: update Rocky Linux to 8.8</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/5c0955dbcc541ab63db3d2f5402ce955b20551c1\"><code>5c0955d</code></a>\r\ntemplates: update CentOS Stream 9 to 20230523.0</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/lima-vm/lima/compare/v0.15.1...v0.16.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/lima-vm/lima&package-manager=go_modules&previous-version=0.15.1&new-version=0.16.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-31T10:22:24-07:00",
          "tree_id": "556e3a36fb0bb31a7a51202de5d9db3ef55c2b48",
          "url": "https://github.com/runfinch/finch/commit/6a67f0cfb0a3a1da438779f4faa04048f25d7dde"
        },
        "date": 1685554070476,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79617614731,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2754",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.62",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2682560512",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3580944",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75180",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26213130677,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3183",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.21",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-102400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1165480",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24926",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 463688033,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4314",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "12.27",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4636",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30536",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "493",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1781458076,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2986",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "18.18",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.781",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20402176",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "89464",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1768",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685567264070,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 77876782681,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2753",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "77.88",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2671923200",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3509408",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73551",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 25963721460,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3416",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "26.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "25.96",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-10551296",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1155192",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "24697",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 455281564,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3829",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.61",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4552",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30056",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "486",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1791768219,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.1455",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "15.38",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.792",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "89880",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1769",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685573623844,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80331198986,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3036",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "69.23",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.33",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2673315840",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3611760",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75862",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26337086305,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3334",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.34",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1171208",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25060",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 501394994,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.7511",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "20.31",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.5013",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "1365",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "32373",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "530",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1910429807,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.3744",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.910",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "94416",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1879",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685656550145,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80510117087,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3141",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "42.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.51",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2635149312",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3617136",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76004",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 26410238223,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3498",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "26.41",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "4096",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1174352",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25132",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 489150627,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4759",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "13.73",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4891",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31498",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "516",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1832854423,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5745",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.833",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "91632",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1818",
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
          "id": "e9551b50010deb43ad26dcd3671ec2f246e84ed6",
          "message": "build(deps): Bump submodules (#439)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-06-01T17:08:31-07:00",
          "tree_id": "1d44ab428cafa8801c73cf50dbe39a71ea5aa9bb",
          "url": "https://github.com/runfinch/finch/commit/e9551b50010deb43ad26dcd3671ec2f246e84ed6"
        },
        "date": 1685664821961,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 80915994020,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3032",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "80.92",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2677755904",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3634432",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76398",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 27326653349,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3428",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "27.33",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1003520",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1237272",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "25956",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 455895228,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5632",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "9.573",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4558",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30194",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "486",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 2213099881,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4222",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "20.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "2.213",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3608576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "107600",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "2179",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685667360047,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 75128585781,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3622",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "53.85",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "75.13",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2108375040",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3325728",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "71095",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30154886070,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3376",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "31.25",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.15",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "9310208",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1358920",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28684",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 460320297,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5775",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.93",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4603",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "4096",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30197",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "489",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1602281487,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2455",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "27.27",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.602",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "81528",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1588",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685667663587,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79006283656,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3308",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "92.86",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.01",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2117160960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3557408",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "74691",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30237830988,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3828",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.24",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "139264",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1362784",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28771",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 460594416,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.179",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "20.20",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4605",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30616",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "493",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1832305129,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.8468",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.832",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3768320",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "91664",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1818",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685669391212,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 83211224242,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2873",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "83.21",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2365468672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3735000",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "78718",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36376382890,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3257",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "36.38",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "20480",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1652056",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "34416",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 459450908,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6651",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4594",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30704",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "491",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1773797747,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4832",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "29.41",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.774",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "89424",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1759",
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
          "id": "f6f8aeb40fa0b2cfaa807c98eb3576ca262d75aa",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.1+incompatible to 24.0.2+incompatible (#419)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.1+incompatible to 24.0.2+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.2</h2>\r\n<h2>24.0.2</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.2\">docker/cli,\r\n24.0.2 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.2\">moby/moby,\r\n24.0.2 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a panic during build when referencing locally tagged images. <a\r\nhref=\"https://redirect.github.com/moby/buildkit/pull/3899\">moby/buildkit#3899</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45582\">moby/moby#45582</a></li>\r\n<li>Fix builds potentially failing with <code>exit code:\r\n4294967295</code> when performing many concurrent build stages. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45620\">moby/moby#45620</a></li>\r\n<li>Fix DNS resolution on Windows ignoring <code>etc/hosts</code>\r\n(<code>%WINDIR%\\System32\\Drivers\\etc\\hosts</code>), including resolution\r\nof <code>localhost</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45562\">moby/moby#45562</a></li>\r\n<li>Apply a workaround for a containerd bug that causes concurrent\r\n<code>docker exec</code> commands to take significantly longer than\r\nexpected. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45625\">moby/moby#45625</a></li>\r\n<li>containerd image store: Fix an issue where the image\r\n<code>Created</code> field would contain an incorrect value. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45623\">moby/moby#45623</a></li>\r\n<li>containerd image store: Adjust the output of image pull progress so\r\nthat the output has the same format regardless of whether the containerd\r\nimage store is enabled. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45602\">moby/moby#45602</a></li>\r\n<li>containerd image store: Switching between the default and containerd\r\nimage store now requires a daemon restart. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45616\">moby/moby#45616</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/659604f9ee60f147020bdd444b26e4b5c636dc28\"><code>659604f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45625\">#45625</a>\r\nfrom thaJeztah/24.0_backport_serialize_exec_starts_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/6660133ffb91a3b754fe4ad16b87523dbc8493c8\"><code>6660133</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45582\">#45582</a>\r\nfrom thaJeztah/24.0_backport_vendor_buildkit_0.11.7...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/67b3563d096d21e45b92cbd1ecc2ce4bc72eab36\"><code>67b3563</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45623\">#45623</a>\r\nfrom vvoland/c8d-inspect-created-time-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7a4ea198032957918ffb4359d1b621b8cfd82201\"><code>7a4ea19</code></a>\r\nlibcontainerd: work around exec start bug in c8d</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/ae6e9333c00dd6bfa674fde77399650841803821\"><code>ae6e933</code></a>\r\nvendor: github.com/moby/buildkit\r\nv0.11.7-0.20230525183624-798ad6b0ce9f</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/0d9acd24fe3a4d45b602f896d091a3855057d31d\"><code>0d9acd2</code></a>\r\nc8d/inspect: Fill <code>Created</code> time if available</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/37bc6397044d5a937929cbe94bf80a9d0b42ab2f\"><code>37bc639</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45620\">#45620</a>\r\nfrom thaJeztah/24.0_backport_update_go_runc_v1.1.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/04eccf81654771f187cd7fdf34b3b12553e4e028\"><code>04eccf8</code></a>\r\nvendor: github.com/containerd/go-runc v1.1.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/24722779ffc5e4de697bea0606a9b92fa8111d2e\"><code>2472277</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45616\">#45616</a>\r\nfrom thaJeztah/24.0_backport_lock_in_snapshotter_se...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/9d8acb7bd1dfc45ac5522e843c81f7653bbd9c0c\"><code>9d8acb7</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45612\">#45612</a>\r\nfrom vvoland/dangling-image-repotagsdigests-test-24</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.1...v24.0.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.1+incompatible&new-version=24.0.2+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:55:29-07:00",
          "tree_id": "1f2fcfedd0b5d03454c8a1dc8a59bb02d77cc8bd",
          "url": "https://github.com/runfinch/finch/commit/f6f8aeb40fa0b2cfaa807c98eb3576ca262d75aa"
        },
        "date": 1685728838478,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78772244427,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3156",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "40.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "78.77",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2111815680",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3551568",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "74524",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30251312425,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3680",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "29.41",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.25",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1360600",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28732",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 454956347,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4858",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.11",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4548",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30037",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "483",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1690051191,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4911",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "27.27",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.690",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "85448",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1669",
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
          "id": "8635294bcb22207bfdaa3f96756f93ba580ff6e2",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.4 to 3.23.5 (#437)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.4 to 3.23.5.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/32e8a92ad6ba363a9cbc05ea9e284c11c723efe3\"><code>32e8a92</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1475\">#1475</a>\r\nfrom shirou/feature/fix_potential_leak_on_common_sleep</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/3e789a459a881bc31b8f24435fe02013818466ee\"><code>3e789a4</code></a>\r\n[common]: fix potential leak on Sleep.</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/03ae19bea8ddab95f5f373d14f9f7a91ebc293b2\"><code>03ae19b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1472\">#1472</a>\r\nfrom powersj/fix/writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/194e6e2edc1530a9f4f73d58d1094af865b3120e\"><code>194e6e2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1467\">#1467</a>\r\nfrom shirou/dependabot/go_modules/github.com/yusufpa...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/553769014163e842a64c5714480a0439ee4fa1b2\"><code>5537690</code></a>\r\nchore(deps): bump github.com/yusufpapurcu/wmi from 1.2.2 to 1.2.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/1983d2b90843b90f1f6958bbb5f741f511201f90\"><code>1983d2b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1468\">#1468</a>\r\nfrom shirou/dependabot/go_modules/github.com/stretch...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d71f0022a12a981442e245cfb8d962e9c00ff8b6\"><code>d71f002</code></a>\r\nfix(mem): Correct capitalization of linux writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/fd69d68f44b6d9c2054497a8f37ac51f5bcefaa3\"><code>fd69d68</code></a>\r\nchore(deps): bump github.com/stretchr/testify from 1.8.2 to 1.8.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/7c610c50377c48e230fd092e65e656b03b97b069\"><code>7c610c5</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1462\">#1462</a>\r\nfrom cuishuang/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9aa4e7a744bb35916461100865e7774a76f4053c\"><code>9aa4e7a</code></a>\r\nfix some comments</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.4...v3.23.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.4&new-version=3.23.5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:55:58-07:00",
          "tree_id": "69bedd1390c4851caf133cb4b095e3d019c0450c",
          "url": "https://github.com/runfinch/finch/commit/8635294bcb22207bfdaa3f96756f93ba580ff6e2"
        },
        "date": 1685729127879,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 84140983731,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2662",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "84.14",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2115358720",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3765624",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "79393",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30606702354,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3564",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.61",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "15269888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1377824",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "29128",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 491115306,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8067",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.62",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4910",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31504",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "516",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1812201475,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2600",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "14.29",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.812",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "90328",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1788",
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
          "id": "b192874e2b1c5de1c2148813760cbe65e15d7553",
          "message": "build(deps): Bump golang.org/x/tools from 0.9.1 to 0.9.3 (#443)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.9.1\r\nto 0.9.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.9.3</h2>\r\n<p><em>Move fast and fix things...</em><code>golang/go#54395</code></p>\r\n<p>As always, thank you for filing issues!</p>\r\n<h2>gopls/v0.9.2</h2>\r\n<p>This release contains many bug fixes, particularly related to\r\nproblems that would require restarting gopls.</p>\r\n<p><strong>Note about network usage</strong>: among these fixes was a\r\nchange to allow network usage when reloading the workspace. Reloading\r\noccurs when a <code>go.mod</code>, <code>go.sum</code>, or\r\n<code>go.work</code> file changes on disk. In the past, gopls would only\r\nallow network during the first workspace load. This resulted in\r\nconfusing behavior when, for example, a new dependency is added to a\r\n<code>go.mod</code> file and gopls could not load it, but loading\r\nsucceeded on restart. See <a\r\nhref=\"https://go.dev/issues/54069\">#54069</a> for more details.</p>\r\n<h2>Configuration changes</h2>\r\n<h3>directoryFilters at arbitrary depth</h3>\r\n<p>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#directoryfilters-string\"><code>&quot;directoryFilters&quot;</code></a>\r\nsetting now supports excluding directories at arbitrary depth, using the\r\n<code>**</code> operator. (note that for v0.9.2, the default value for\r\nthis setting is still <code>[&quot;-node_modules]&quot;</code>. In the\r\nnext release, this will change to\r\n<code>[&quot;-**/node_modules&quot;]</code>).</p>\r\n<h2>Bug fixes and Performance improvements...</h2>\r\n<p>This release contains the following notable bug fixes / performance\r\nimprovements:</p>\r\n<ul>\r\n<li><strong>Additional change optimization</strong> - Following up on\r\nthe work to optimize change processing from the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.9.0\">v0.9.0\r\nrelease</a>, this release contains additional optimizations that result\r\nin around 50% faster change processing (measured via edits in the\r\nKubernetes repo).</li>\r\n<li><strong>Fix for a long-standing memory leak</strong> - <a\r\nhref=\"https://go.dev/issues/53780\">#53780</a> fixed a long-standing bug\r\nthat caused gopls to hold on to its initial state, gradually leaking\r\nmemory as state changed during the editing session.</li>\r\n<li><strong>Fewer restarts</strong> - This release contains many fixes\r\nfor cache-invalidation bugs that would cause gopls to get confused and\r\nrequire restarting. Additionally, see the note at top about enabling the\r\nnetwork when reloading the workspace. We believe we are close to our\r\ngoal that restarting gopls should never be required to fix workspace\r\nerrors. If you encounter such a bug, please file an issue!</li>\r\n</ul>\r\n<p>A full list of all issues fixed can be found in the <a\r\nhref=\"https://github.com/golang/go/milestone/274?closed=1\">gopls/v0.9.2\r\nmilestone</a>.\r\nTo report a new problem, please file a new issue at <a\r\nhref=\"https://go.dev/issues/new\">https://go.dev/issues/new</a>.</p>\r\n<h2>Thank you to our contributors!</h2>\r\n<p>Thank you for your contribution, <a\r\nhref=\"https://github.com/alandonovan\"><code>@​alandonovan</code></a>, <a\r\nhref=\"https://github.com/antoineco\"><code>@​antoineco</code></a>, <a\r\nhref=\"https://github.com/dle8\"><code>@​dle8</code></a>, <a\r\nhref=\"https://github.com/euroelessar\"><code>@​euroelessar</code></a>, <a\r\nhref=\"https://github.com/findleyr\"><code>@​findleyr</code></a>, <a\r\nhref=\"https://github.com/hyangah\"><code>@​hyangah</code></a>, <a\r\nhref=\"https://github.com/jamalc\"><code>@​jamalc</code></a>, <a\r\nhref=\"https://github.com/mssdvd\"><code>@​mssdvd</code></a>, <a\r\nhref=\"https://github.com/pjweinbgo\"><code>@​pjweinbgo</code></a>, <a\r\nhref=\"https://github.com/rentziass\"><code>@​rentziass</code></a>, and <a\r\nhref=\"https://github.com/suzmue\"><code>@​suzmue</code></a>!</p>\r\n<h2>What's next</h2>\r\n<p>The next planned gopls release is <a\r\nhref=\"https://github.com/golang/go/milestone/278\">v0.10.0</a>. We’re\r\nexcited about features and improvements on the horizon, for example:</p>\r\n<ul>\r\n<li>Package renaming (<a\r\nhref=\"https://go.dev/issues/41567\">#41567</a>)</li>\r\n<li>More accurate static-analysis (<a\r\nhref=\"https://go.dev/issues/48738\">#48738</a>)</li>\r\n<li>Improved support for the new 1.19 doc comment format (<a\r\nhref=\"https://go.dev/issues/54260\">#54260</a>)</li>\r\n<li>Making it easier to work with <code>go.work</code> files (many\r\nissues, for example <a href=\"https://go.dev/issues/53880\">#53880</a> or\r\n<a href=\"https://go.dev/issues/54261\">#54261</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0dda7d614e545bb93966bb1410269b3cd1e65e1d\"><code>0dda7d6</code></a>\r\ngo/pointer: remove replace directive</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/98f1b4dee82ca3ded542b3c37a62f58f0eb744b7\"><code>98f1b4d</code></a>\r\ngopls/internal/lsp/cache: check number of orphaned files after\r\nfiltering</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/a260315e300ac46cc74b461bb418e4a800ee55bf\"><code>a260315</code></a>\r\ngo/pointer: create submodule</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/96844c3594b1a5b71b689f4d38697c012e093011\"><code>96844c3</code></a>\r\ncmd/{guru,callgraph}: stop using go/pointer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/cd694d8db4f10068e4fe38fe7aa1aa8bda65b88b\"><code>cd694d8</code></a>\r\ngo/packages: include\r\n&quot;unsafe&quot;.GoFiles=[&quot;unsafe.go&quot;]</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/33c741de78259c8c12df7103f7a6caf8dd9c6181\"><code>33c741d</code></a>\r\ngopls/internal/lsp: add min/max builtin</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/933c7ccb15451459ca4fe53c041a4108f4859d91\"><code>933c7cc</code></a>\r\ninternal/lsp/source: use exact match in import highlighting</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5974258e689a4f8a93448a0d181737afa4506e3f\"><code>5974258</code></a>\r\ngopls/internal/lsp: clear vuln diagnostics on config changes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f3faea1982c3b87f69b407fc0add0e10c591b9dc\"><code>f3faea1</code></a>\r\ngo/packages: pass -pgo=off on go1.21 and later</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5f74ec7da5f5b84a3d05750000a35e486c0edece\"><code>5f74ec7</code></a>\r\ninternal/lsp/debug: add links to profiles and GC</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.9.1...v0.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.9.1&new-version=0.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T10:54:58-07:00",
          "tree_id": "1c3e5ba43d97b43b11ab5af8f10989057ca03a11",
          "url": "https://github.com/runfinch/finch/commit/b192874e2b1c5de1c2148813760cbe65e15d7553"
        },
        "date": 1685731091890,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78116010877,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3150",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "31.25",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "78.12",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2110771200",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3525984",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73919",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30182653618,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3385",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "36.36",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.18",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "1130496",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1357424",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28686",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 462228666,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.4644",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "9.890",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4622",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30509",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "493",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1762075305,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2850",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.762",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "8327168",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "89672",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1753",
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
          "id": "0a381f17ea2602bc3b19f9b2101da9e3a589f6d3",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (#432)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.5 to 2.9.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.9.7</h2>\r\n<h2>2.9.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix race when multiple defercleanups are called in goroutines\r\n[07fc3a0]</li>\r\n</ul>\r\n<h2>v2.9.6</h2>\r\n<h2>2.9.6</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)\r\n[0ac65de]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)\r\n[3e39231]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.9.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix race when multiple defercleanups are called in goroutines\r\n[07fc3a0]</li>\r\n</ul>\r\n<h2>2.9.6</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)\r\n[0ac65de]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)\r\n[3e39231]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/913e9e59827a331526f32f01439cb66083b51ec4\"><code>913e9e5</code></a>\r\nv2.9.7</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/07fc3a024fe632ffdced3ec39a8ec1db222b6225\"><code>07fc3a0</code></a>\r\nfix race when multiple defercleanups are called in goroutines</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/96206239b0a7146bd24463359d7bdd9c665d3583\"><code>9620623</code></a>\r\nv2.9.6</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8ba8b229c37e0cf299f1acb2a3b9d23ec569da4f\"><code>8ba8b22</code></a>\r\nensure report directory tests work when run in parallel</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0ac65de7efb8c5c240f6b2f79ab15b4f4c443b35\"><code>0ac65de</code></a>\r\nfix: create parent directory before report files (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1212\">#1212</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4c2ae233f9e3c9de1982f8b33272c0675fd547c4\"><code>4c2ae23</code></a>\r\nFix return value in index.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1208\">#1208</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/3e39231dee937854d166b210e0542798da58aa09\"><code>3e39231</code></a>\r\nBump github.com/onsi/gomega from 1.27.6 to 1.27.7 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1202\">#1202</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.5...v2.9.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.5&new-version=2.9.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T12:03:20-07:00",
          "tree_id": "c1136794cddf05c4b049eb5ff3f0d828045c9e18",
          "url": "https://github.com/runfinch/finch/commit/0a381f17ea2602bc3b19f9b2101da9e3a589f6d3"
        },
        "date": 1685732915392,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81371069278,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2865",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.37",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2128130048",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3658592",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76927",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30142829537,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3231",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.14",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1356904",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28653",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 465772448,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6825",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.18",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4657",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30912",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "498",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1766951634,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4789",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.767",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88968",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1752",
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
          "id": "0f7750ebeee01108a9f6a6fcfe0c7f5f044bc336",
          "message": "build(deps): Bump github.com/stretchr/testify from 1.8.2 to 1.8.4 (#429)\n\nBumps [github.com/stretchr/testify](https://github.com/stretchr/testify)\r\nfrom 1.8.2 to 1.8.4.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/f97607b89807936ac4ff96748d766cf4b9711f78\"><code>f97607b</code></a>\r\nCreate GitHub release when new release tag is pushed (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1354\">#1354</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/4c93d8f201cb46ed50de949ee65804f944b570f8\"><code>4c93d8f</code></a>\r\nEqualExportedValues: Handle nested pointer, slice and map fields (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1379\">#1379</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/4b2f4d2bcff3848b6a4e63d462da6ce3c21e9c78\"><code>4b2f4d2</code></a>\r\nadd EventuallyWithT assertion (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1264\">#1264</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/b3106d772c7aa439743e1a3f4de81149e323cf70\"><code>b3106d7</code></a>\r\nallow testing for functional options (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1023\">#1023</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/437071b948cd89bdbaaf43a41f19fbe1a0945f6f\"><code>437071b</code></a>\r\nassert: fix error message formatting for NotContains (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1362\">#1362</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/stretchr/testify/commit/c5fc9d6b6b21ea89be8480c0dc35e2977ab988f6\"><code>c5fc9d6</code></a>\r\nCompare public elements of struct (<a\r\nhref=\"https://redirect.github.com/stretchr/testify/issues/1309\">#1309</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/stretchr/testify/compare/v1.8.2...v1.8.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/stretchr/testify&package-manager=go_modules&previous-version=1.8.2&new-version=1.8.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-02T14:07:49-07:00",
          "tree_id": "6315646cec92c8216dfe2441c6ffe9eaf37346ad",
          "url": "https://github.com/runfinch/finch/commit/0f7750ebeee01108a9f6a6fcfe0c7f5f044bc336"
        },
        "date": 1685740383104,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 78186096777,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2962",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "46.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "78.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2112491520",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3524960",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "73923",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30209162422,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3688",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.21",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1357848",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28669",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 452817353,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3230",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "13.51",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4527",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30032",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "483",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1811282804,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.05635",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "9.748",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.811",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "90632",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1792",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1685762018031,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 79510629853,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3612",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "57.14",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "79.51",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2119712768",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3580200",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "75173",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30285023660,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3454",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.28",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1361960",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28781",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 457090063,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.1655",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "7.021",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4570",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "4096",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30608",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "492",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1800832289,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.09917",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "9.365",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.801",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3608576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "90176",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1781",
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
          "id": "18236774d971065dec28d1db204e1f697d418a9b",
          "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.2 to 1.9.3 (#446)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.2 to 1.9.3.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/d40e25cd45ed9c6b2b66e6b97573a0413e4c23bd\"><code>d40e25c</code></a>\r\nfix panic in Writer</li>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/f9291a534cac1466d26414fd9e326381cd64ecef\"><code>f9291a5</code></a>\r\nRevert &quot;Revert &quot;Merge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master&quot;&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.2...v1.9.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.2&new-version=1.9.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-05T11:15:01-07:00",
          "tree_id": "70db57c1775154e572df0c514794b3324c7001f6",
          "url": "https://github.com/runfinch/finch/commit/18236774d971065dec28d1db204e1f697d418a9b"
        },
        "date": 1685989218513,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81747169608,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2831",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.75",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2118422528",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3671520",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "77253",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30220206706,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3359",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.22",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "20480",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1360960",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28754",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 460731775,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5679",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.65",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4606",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30773",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "492",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1844783511,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5196",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.845",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20402176",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "91664",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1818",
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
          "id": "a415e3ef7b2741853bf352b915c4100c77600619",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (#449)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.7 to 2.10.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.10.0</h2>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/edf2c70bdd2d9541a8e66d1835032127ad4c5d14\"><code>edf2c70</code></a>\r\nv2.10.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/a782a77ba8a8ddfd763e2f08b741339facc04006\"><code>a782a77</code></a>\r\nfeat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/548d78e6eaea8bd55316cbec418b6dba297b73ee\"><code>548d78e</code></a>\r\nFix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/2b76a5ec3a018f9c7451f4ed9d0350e21248a637\"><code>2b76a5e</code></a>\r\nBump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.7...v2.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.7&new-version=2.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-08T12:05:08-07:00",
          "tree_id": "7d0426eaf21e581716ccaa1d2220d852432ff817",
          "url": "https://github.com/runfinch/finch/commit/a415e3ef7b2741853bf352b915c4100c77600619"
        },
        "date": 1686251432958,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81273940326,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2730",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.27",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2122547200",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3651808",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76783",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30220504793,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3363",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "35.71",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.22",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-167936",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1359488",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28728",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 462941166,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6239",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "11.79",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4629",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30490",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "490",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1733022464,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4185",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "18.75",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.733",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "8028160",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "87656",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1728",
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
          "id": "96fc8d09a051b2ead932e6eef064624b1a842b66",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (#448)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.7 to 1.27.8.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.8</h2>\r\n<h2>1.27.8</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>HaveExactElement should not call FailureMessage if a submatcher\r\nreturned an error [096f392]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)\r\n[8884bee]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.8</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>HaveExactElement should not call FailureMessage if a submatcher\r\nreturned an error [096f392]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)\r\n[8884bee]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/492512ff860f2a449e265ffde21c2e4dfec1d116\"><code>492512f</code></a>\r\nv1.27.8</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/096f3925a4dba582508d4019fa118ef8cc1ee0a7\"><code>096f392</code></a>\r\nHaveExactElement should not call FailureMessage if a submatcher returned\r\nan e...</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/8884bee393a8348465d7a475382367827f21677c\"><code>8884bee</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.9.7 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/669\">#669</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.7...v1.27.8\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.7&new-version=1.27.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-12T10:30:23-07:00",
          "tree_id": "10f049c03ae10bc0244c31448d03f26a23429098",
          "url": "https://github.com/runfinch/finch/commit/96fc8d09a051b2ead932e6eef064624b1a842b66"
        },
        "date": 1686591350873,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81322200629,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3443",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "50.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.32",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2129481728",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3654288",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76840",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30194693836,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3698",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "28.57",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1359624",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28700",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 482218536,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.9473",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.93",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4821",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31546",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "512",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1739793799,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4596",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "16.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.740",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3624960",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "87704",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1729",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1686678988796,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81174092142,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2982",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.17",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2122047488",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3645832",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "76691",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30328325172,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3389",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.33",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16793600",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1364360",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28828",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 493650694,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "1.089",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "18.80",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4936",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "5461",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31528",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "519",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1752151835,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.5077",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "21.43",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.752",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "20389888",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88104",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1729",
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
          "id": "fef6e772c28429ef14068702c1dfd8e9fec2dea1",
          "message": "build(deps): Bump golang.org/x/crypto from 0.9.0 to 0.10.0 (#451)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from 0.9.0\r\nto 0.10.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/8e447d8cc585b0089d1938b8747264783295e65f\"><code>8e447d8</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/22c99979527e39b0c665cb2ed3c91e30739b69e6\"><code>22c9997</code></a>\r\ngo.mod: tell x repo tagging to ignore dep on net</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/d0b316056be80e452fdae998581d0a807b8df0a8\"><code>d0b3160</code></a>\r\nx509roots: add new module</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/16222386f4de802a3c27c1714b0bcc28c0fd5397\"><code>1622238</code></a>\r\nAdd support for &quot;<a\r\nhref=\"mailto:hmac-sha2-512-etm@openssh.com\">hmac-sha2-512-etm@openssh.com</a>&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.9.0...v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.9.0&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-16T10:41:24-07:00",
          "tree_id": "b3101d1bb452fb552751813bab329f79af64f4ab",
          "url": "https://github.com/runfinch/finch/commit/fef6e772c28429ef14068702c1dfd8e9fec2dea1"
        },
        "date": 1686937601637,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 81921212151,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2804",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "81.92",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2127917056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3673904",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "77351",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30123733634,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3150",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.77",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.12",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "24576",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1353752",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28588",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 484382245,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8655",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "15.55",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4843",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "43690",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31320",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "513",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1865211795,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.1202",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "12.91",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.865",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "8323072",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "93688",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1853",
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
          "id": "f7e091670fb2ac5377423e72f98aa8be33aa41c8",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (#456)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.10.0 to 2.11.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.11.0</h2>\r\n<h2>2.11.0</h2>\r\n<p>In prior versions of Ginkgo specs the CLI filter flags (e.g.\r\n<code>--focus</code>, <code>--label-filter</code>) would\r\n<em>override</em> any programmatic focus. This behavior has proved\r\nsurprising and confusing in at least the following ways:</p>\r\n<ul>\r\n<li>users cannot combine programmatic filters and CLI filters to more\r\nefficiently select subsets of tests</li>\r\n<li>CLI filters can override programmatic focus on CI systems resulting\r\nin an exit code of 0 despite the presence of (incorrectly!) committed\r\nfocused specs.</li>\r\n</ul>\r\n<p>Going forward Ginkgo will AND all programmatic and CLI filters.\r\nMoreover, the presence of any programmatic focused tests will always\r\nresult in a non-zero exit code.</p>\r\n<p>This change is technically a change in Ginkgo's external contract and\r\nmay require some users to make changes to successfully adopt.\r\nSpecifically: it's possible some users were intentionally using CLI\r\nfilters to override programmatic focus. If this is you please open an\r\nissue so we can explore solutions to the underlying problem you are\r\ntrying to solve.</p>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Programmatic focus is no longer overwrriten by CLI filters\r\n[d6bba86]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)\r\n[4a70a38]</li>\r\n<li>Bump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)\r\n[97eda4d]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.11.0</h2>\r\n<p>In prior versions of Ginkgo specs the CLI filter flags (e.g.\r\n<code>--focus</code>, <code>--label-filter</code>) would\r\n<em>override</em> any programmatic focus. This behavior has proved\r\nsurprising and confusing in at least the following ways:</p>\r\n<ul>\r\n<li>users cannot combine programmatic filters and CLI filters to more\r\nefficiently select subsets of tests</li>\r\n<li>CLI filters can override programmatic focus on CI systems resulting\r\nin an exit code of 0 despite the presence of (incorrectly!) committed\r\nfocused specs.</li>\r\n</ul>\r\n<p>Going forward Ginkgo will AND all programmatic and CLI filters.\r\nMoreover, the presence of any programmatic focused tests will always\r\nresult in a non-zero exit code.</p>\r\n<p>This change is technically a change in Ginkgo's external contract and\r\nmay require some users to make changes to successfully adopt.\r\nSpecifically: it's possible some users were intentionally using CLI\r\nfilters to override programmatic focus. If this is you please open an\r\nissue so we can explore solutions to the underlying problem you are\r\ntrying to solve.</p>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Programmatic focus is no longer overwrriten by CLI filters\r\n[d6bba86]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)\r\n[4a70a38]</li>\r\n<li>Bump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)\r\n[97eda4d]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/5c32b2a6408b866b04774abad81eca2274f4fb5b\"><code>5c32b2a</code></a>\r\nv2.11.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/d6bba86e67d4973f786752a070f69b7732601caa\"><code>d6bba86</code></a>\r\nProgrammatic focus is no longer overwrriten by CLI filters</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/4a70a38d78ea5f2bca038945b4e49442fb93c7a3\"><code>4a70a38</code></a>\r\nBump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1218\">#1218</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/97eda4d083fd88e17b9f1c947a24cf0ac5864dce\"><code>97eda4d</code></a>\r\nBump golang.org/x/sys from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1219\">#1219</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.10.0...v2.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.10.0&new-version=2.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-27T11:58:39-07:00",
          "tree_id": "38d4500d4339a269988a2d4b9bfda964b2951484",
          "url": "https://github.com/runfinch/finch/commit/f7e091670fb2ac5377423e72f98aa8be33aa41c8"
        },
        "date": 1687892953713,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 240497057235,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2484",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "100.0",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "240.5",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2329104384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "10776224",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "224358",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30185227284,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3814",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.19",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-102400",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1357152",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28667",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 434798406,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.3775",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "8.159",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4347",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "29762",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "466",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1846595948,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.2957",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "20.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.847",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3620864",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "92424",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1828",
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
          "id": "e321f1dc607626a7f65b33e0a0f503d8c856b1f2",
          "message": "build(deps): Bump golang.org/x/tools from 0.9.3 to 0.10.0 (#455)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.9.3\r\nto 0.10.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.10.0</h2>\r\n<p>This release contains initial support for standalone packages and\r\npackage renaming. Please see below for more details.</p>\r\n<p>We are also changing our release policy to better align with\r\nsemver.</p>\r\n<h2>Support changes</h2>\r\n<p>This version of gopls contains changes to our release policy,\r\ndeprecates support for some older Go versions, and deprecates support\r\nfor several experimental features.</p>\r\n<h3>New release policy</h3>\r\n<p>As described in <a\r\nhref=\"https://redirect.github.com/golang/go/issues/55267\">golang/go#55267</a>,\r\nwe are tightening our release policy to better follow semver, increase\r\nstability, and reduce release-related toil. Significant new features\r\nwill only be introduced in <code>*.*.0</code> patch versions, and\r\nsubsequent patch releases will consist only of bugfixes. For example,\r\nthis version (v0.10.0) introduces several new features, described below.\r\nSubsequent v0.10.* releases will contain only bugfixes.</p>\r\n<h3>Final support for Go 1.13-1.15</h3>\r\n<p>Consistent with the above release policy and our stated <a\r\nhref=\"https://github.com/golang/tools/tree/master/gopls#supported-go-versions-and-build-systems\">support\r\nwindow</a>, the <code>v0.10.*</code> minor version will be the final set\r\nof releases to support being used with Go 1.13-1.15. See <a\r\nhref=\"https://redirect.github.com/golang/go/issues/52982\">golang/go#52982</a>\r\nfor details.</p>\r\n<p>Gopls will pop up a warning if it resolves a version of the\r\n<code>go</code> command that is older than 1.16. Starting with\r\ngopls@v0.11.0, gopls will cease to function when used with a\r\n<code>go</code> command with a version older than 1.16.</p>\r\n<h3>Deprecated experimental features</h3>\r\n<p>The following experimental features are deprecated, and will be\r\nremoved in gopls@v0.11.0:</p>\r\n<ul>\r\n\r\n<li><strong>experimentalWorkspaceModule</strong><code>golang/go#52897</code><code>go.work</code>\r\nfiles. See our <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/workspace.md#go-workspaces-go-118\">documentation</a>\r\nfor information on how to use <code>go.work</code> files to work on\r\nmultiple modules.</li>\r\n\r\n<li><strong>experimentalWatchedFileDelay</strong><code>golang/go#55268</code><code>workspace/didChangeWatchedFiles</code>\r\nnotifications.</li>\r\n\r\n<li><strong>experimentalUseInvalidMetadata</strong><code>golang/go#54180</code></li>\r\n</ul>\r\n<h2>New Features</h2>\r\n<h3>Support for &quot;standalone packages&quot;</h3>\r\n<p>Gopls now recognizes certain files as &quot;standalone main\r\npackages&quot;, meaning they should be interpreted as main packages\r\nconsisting of a single file. To do this, gopls looks for packages named\r\n<code>main</code> containing a single build constraint that matches one\r\nof the tags configured by the new <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#standalonetags-string\"><code>standaloneTags</code></a>\r\nsetting.</p>\r\n<p>This enables cross references and other features when working in a\r\nfile such as the example below that contains a <code>//go:build\r\nignore</code> build constraint.</p>\r\n<p><img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197039428-72d78300-cbea-4abe-a408-e171991094b8.png\"\r\nalt=\"image\" /></p>\r\n<h3>(preview) Support for package renaming</h3>\r\n<p><code>golang/go#41567</code><a\r\nhref=\"https://redirect.github.com/golang/go/issues/56184\">golang/go#56184</a>.</p>\r\n<p>To rename a package, initiate a rename request on the package clause\r\nof a file in the package:\r\n<img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197041786-bf9e617c-9961-46ae-b21a-c240a18a3014.png\"\r\nalt=\"image\" /></p>\r\n<p>When this renaming is applied, gopls will adjust other package files\r\naccordingly, rename the package directory, and update import paths\r\nreferencing the current package or any nested package in the renamed\r\ndirectory.\r\n<img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/197042160-e034e38d-3cd3-4c62-b912-747d8dc2f4ff.png\"\r\nalt=\"image\" /></p>\r\n<h3>Method information in hover</h3>\r\n<p>Hovering over a type now shows a summary of its methods.</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/7261b3269227f2c7636f7d4316ed3dd5122d17ff\"><code>7261b32</code></a>\r\ngopls/internal/regtest: fix goimports on windows when using\r\nvendoring</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/41e4e565498859435a2ad44a71cf6701a6afb585\"><code>41e4e56</code></a>\r\ngopls/internal/lsp/source/completion: ensuring completion\r\ncompleteness</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ac2946029ad3806349fa00546449da9f59320e89\"><code>ac29460</code></a>\r\ngo/ssa: fix bug in writeSignature on external functions</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3b62e7e25641fc2dabe915a738906d0779724bf1\"><code>3b62e7e</code></a>\r\ngo/ssa: use core type within (*builder).receiver</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f394d451f85a030254df453bf84a450b228c4250\"><code>f394d45</code></a>\r\ngopls/internal/lsp/cache: compute xrefs and methodsets\r\nasynchronously</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/27dbf85279a5e6e906a8c1b5cc5b73e8229a8efa\"><code>27dbf85</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c6c983054920f47ed9e5ba1b55a7a5934dd8bf53\"><code>c6c9830</code></a>\r\ngo/types/objectpath: memoize scope lookup in objectpath.Encoder</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/0245e1dfc6b09a30ad018bdcdadef4961067cfd4\"><code>0245e1d</code></a>\r\ngopls/internal/regtest/codelens: set GOWORK=off for go mod vendor</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/85be8882c905a9b24abcec8363e48a14ad5cd4e2\"><code>85be888</code></a>\r\ngo/analysis/passes/defers: add analyser for defer mistake</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c43232f868439dcfd25d98501dafa5e695cd1d35\"><code>c43232f</code></a>\r\ncmd/digraph: improve examples using go list, mod</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.9.3...v0.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.9.3&new-version=0.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-29T18:05:02-04:00",
          "tree_id": "15d367907740e52ecdec13591f1472991cc10c5e",
          "url": "https://github.com/runfinch/finch/commit/e321f1dc607626a7f65b33e0a0f503d8c856b1f2"
        },
        "date": 1688076632159,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 87214897444,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.3202",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "87.21",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2140299264",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3897912",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "82338",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30216009313,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.2886",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "27.27",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.22",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "86016",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1358744",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28695",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 474079733,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.5509",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "9.117",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4740",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "4096",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31386",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "503",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1692623134,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.4661",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "25.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.693",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3600384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "86240",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1679",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1688080737895,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 85158688852,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2927",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "45.45",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "85.16",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2126159872",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3808592",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "80385",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30132955947,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.3447",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "30.00",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.13",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "16384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1355192",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28605",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 473794334,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.6263",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "14.39",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4737",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "31224",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "501",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1744901221,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.05631",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "9.404",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.745",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3612672",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "88008",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1728",
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
          "id": "d6746a447e10bed6c13d197c8d693b27e02ac3aa",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.2 to 0.27.3 (#454)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.2 to 0.27.3.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/38152d47d7866fcd1c1287f34cdc2f92fd78a5f2\"><code>38152d4</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118553\">#118553</a>\r\nfrom puerco/bump-1.27-go1.20.5</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/2bd872f9613b7fe77e000706a4875ca13afd4a75\"><code>2bd872f</code></a>\r\nupdate-vendor: update vendored go.sums</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.2...v0.27.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.2&new-version=0.27.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T08:44:53-07:00",
          "tree_id": "c4ed21f0d0322c401c302f18655c952447d551ad",
          "url": "https://github.com/runfinch/finch/commit/d6746a447e10bed6c13d197c8d693b27e02ac3aa"
        },
        "date": 1688140217943,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 87424131287,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": "0.2694",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
            "value": "38.46",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": "87.42",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": "2091024384",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": "3904968",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": "82561",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30160902727,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": "0.4213",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": "41.67",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": "30.16",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": "-45056",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": "1357232",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": "28653",
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 457631993,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": "0.8444",
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": "16.03",
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": "0.4575",
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": "0",
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": "30512",
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": "489",
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1695769438,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": "0.6171",
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": "33.33",
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": "1.696",
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": "3616768",
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": "86648",
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": "1684",
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
          "id": "dc5a3e7240d4af6b63874e239bc77bed04d2a0a6",
          "message": "build(deps): Bump golang.org/x/crypto from 0.10.0 to 0.11.0 (#465)\n\nBumps [golang.org/x/crypto](https://github.com/golang/crypto) from\r\n0.10.0 to 0.11.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/e98487292dcad4efaa6033b245ee014f90d177a2\"><code>e984872</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/183630ada7e00d6d4743f43479b7d4ea51de715e\"><code>183630a</code></a>\r\nx509roots: generate a stable sort, for real this time</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/a9e447dde7f8f364232efb5072e3ff89b24308da\"><code>a9e447d</code></a>\r\nx509roots/fallback: add //go:build go1.20 to bundle.go</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/64c3993f5c824fe7febbf8561179da523a4e98ea\"><code>64c3993</code></a>\r\nssh: add hmac-sha2-512</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/5fe8145acacf736d52576b87b17c416731e0c4a8\"><code>5fe8145</code></a>\r\nx509roots: remove list hash and generation date, change ordering</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/043e94c17aa993f4d1026a2f692b8980e7740df2\"><code>043e94c</code></a>\r\nx509roots: fix generate script argument checking</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0d502d7cd64920c6d2cce3950ead89a5c4eb5e69\"><code>0d502d7</code></a>\r\nx509roots: use &quot;generate&quot; build tag</li>\r\n<li><a\r\nhref=\"https://github.com/golang/crypto/commit/0ff60057bbafb685e9f9a97af5261f484f8283d1\"><code>0ff6005</code></a>\r\nssh/test: set a timeout and WaitDelay on sshd subcommands</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/crypto/compare/v0.10.0...v0.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/crypto&package-manager=go_modules&previous-version=0.10.0&new-version=0.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-10T08:42:04-07:00",
          "tree_id": "4830414402544c976dae36207220d7d22e28ff6e",
          "url": "https://github.com/runfinch/finch/commit/dc5a3e7240d4af6b63874e239bc77bed04d2a0a6"
        },
        "date": 1689004168454,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 134271577339,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2391,
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
            "value": 134.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2148417536,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 6067560,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 126392,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30239396294,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4092,
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
            "value": 30.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -159744,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1360184,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28742,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 456359768,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3963,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 8.236,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4563,
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
            "value": 30360,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 486,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1686155507,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4833,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 28.57,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.686,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3616768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 85352,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1668,
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
          "id": "43a672011fd47830073b8cc7427f82c6f1c3e5bd",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.5 to 3.23.6 (#464)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.5 to 3.23.6.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.6</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<ul>\r\n<li>allow to pass context values to override environment variables by <a\r\nhref=\"https://github.com/atoulme\"><code>@​atoulme</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1439\">shirou/gopsutil#1439</a></li>\r\n</ul>\r\n<p>Starting with this release, directory specifications that were\r\npreviously passed by environment variables such as\r\n<code>HOST_PROC</code> can also be passed by context. Conventional\r\nenvironment variables can still be used.</p>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>add(README): add passing context value document by <a\r\nhref=\"https://github.com/shirou\"><code>@​shirou</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1478\">shirou/gopsutil#1478</a></li>\r\n<li>Reference actions by commit SHA by <a\r\nhref=\"https://github.com/gabibguti\"><code>@​gabibguti</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1480\">shirou/gopsutil#1480</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6\">https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/f08589cdac9026b9377aa3f9e6ad4e66cde0fe4f\"><code>f08589c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1487\">#1487</a>\r\nfrom shirou/dependabot/github_actions/actions/labele...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/3a5aa800b7f43865b42af8128693de22bf13e2b1\"><code>3a5aa80</code></a>\r\nchore(deps): bump actions/labeler from 4.1.0 to 4.2.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/fb83fb22d68f468adf2a01a9ed4963e7d980cfd7\"><code>fb83fb2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1483\">#1483</a>\r\nfrom shirou/dependabot/github_actions/golangci/golan...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/88f1b71f94c2ba0ff3d5b4c5d25ff8bc88eadbec\"><code>88f1b71</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1482\">#1482</a>\r\nfrom shirou/dependabot/github_actions/actions/checko...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8ea31540042b37bdfd885e7ef0ec253721695730\"><code>8ea3154</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1484\">#1484</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/ddec0d359d1f2ca95b820fcb20f3256366ad7a74\"><code>ddec0d3</code></a>\r\nchore(deps): bump golang.org/x/sys from 0.8.0 to 0.9.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/e50406fccab8008b8276f94c1b234287d0e2a154\"><code>e50406f</code></a>\r\nchore(deps): bump golangci/golangci-lint-action from 3.5.0 to 3.6.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/4eccb7db0ec0a828d1081a6386410b34334dcafc\"><code>4eccb7d</code></a>\r\nchore(deps): bump actions/checkout from 3.5.2 to 3.5.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/efe7a95f412c5598cb4e44467849e46627f86cad\"><code>efe7a95</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1480\">#1480</a>\r\nfrom gabibguti/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/147902f4cb2c5a29e761934431402c2fdbeb6161\"><code>147902f</code></a>\r\nRef actions by commit SHA in test.yml</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.5...v3.23.6\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.5&new-version=3.23.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-13T18:55:00-07:00",
          "tree_id": "7d1283ed56481045f90e3cb606c4f4688c02be04",
          "url": "https://github.com/runfinch/finch/commit/43a672011fd47830073b8cc7427f82c6f1c3e5bd"
        },
        "date": 1689300053905,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82331956741,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2968,
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
            "value": 82.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2133540864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3699024,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 77838,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30263022161,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3264,
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
            "value": 30.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 24576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1362800,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28776,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 458208039,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4504,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.32,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4581,
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
            "value": 30488,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 487,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1650576016,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4307,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 28.57,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.651,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 84048,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1638,
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
          "id": "ad37f4fbce72a6f479620461127e8fe494d47cad",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible (#469)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.2+incompatible to 24.0.4+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.4</h2>\r\n<h2>24.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.4\">docker/cli,\r\n24.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.4\">moby/moby,\r\n24.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a regression introduced during 24.0.3 that causes a panic during\r\nlive-restore of containers with bind mounts. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45903\">moby/moby#45903</a></li>\r\n</ul>\r\n<h2>v24.0.3</h2>\r\n<h2>24.0.3</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.3\">docker/cli,\r\n24.0.3 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.3\">moby/moby,\r\n24.0.3 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>containerd image store: Fix an issue where multi-platform images\r\nthat did not include a manifest for the default platform could not be\r\ninteracted with. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45849\">moby/moby#45849</a></li>\r\n<li>containerd image store: Fix specious attempts to cache <code>FROM\r\nscratch</code> in container builds. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45822\">moby/moby#45822</a></li>\r\n<li>containerd image store: Fix <code>docker cp</code> with snapshotters\r\nthat cannot mount the same content multiple times. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45780\">moby/moby#45780</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45786\">moby/moby#45786</a></li>\r\n<li>containerd image store: Fix builds with <code>type=image</code> not\r\nbeing correctly unpacked/stored. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45692\">moby/moby#45692</a></li>\r\n<li>containerd image store: Fix incorrectly attempting to unpack\r\npseudo-images (including attestations) in <code>docker load</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45688\">moby/moby#45688</a></li>\r\n<li>containerd image store: Correctly set the user agent, and include\r\nadditional information like the snapshotter when interacting with\r\nregistries. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45671\">moby/moby#45671</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45684\">moby/moby#45684</a></li>\r\n<li>containerd image store: Fix a failure to unpack already-pulled\r\ncontent after switching between snapshotters. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45678\">moby/moby#45678</a></li>\r\n<li>containerd image store: Fix images that have been re-tagged or with\r\nall tags removed being pruned while still in use. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45857\">moby/moby#45857</a></li>\r\n<li>Fix a Swarm CSI issue where the Topology field was not propagated\r\ninto NodeCSIInfo. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45810\">moby/moby#45810</a></li>\r\n<li>Fix failures to add new Swarm managers caused by a very large raft\r\nlog. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45703\">moby/moby#45703</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3122\">moby/swarmkit#3122</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3128\">moby/swarmkit#3128</a></li>\r\n<li><code>name_to_handle_at(2)</code> is now always allowed in the\r\ndefault seccomp profile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45833\">moby/moby#45833</a></li>\r\n<li>Fix an issue that prevented encrypted Swarm overlay networks from\r\nworking on ports other than the default (4789). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45637\">moby/moby#45637</a></li>\r\n<li>Fix a failure to restore mount reference-counts during live-restore.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45824\">moby/moby#45824</a></li>\r\n<li>Fix various networking-related failures during live-restore. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45658\">moby/moby#45658</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45659\">moby/moby#45659</a></li>\r\n<li>Fix running containers restoring with a zero (successful) exit\r\nstatus when the daemon is unexpectedly terminated. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45801\">moby/moby#45801</a></li>\r\n<li>Fix a potential panic while executing healthcheck probes. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45798\">moby/moby#45798</a></li>\r\n<li>Fix a panic caused by a race condition in container exec start. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45794\">moby/moby#45794</a></li>\r\n<li>Fix an exception caused by attaching a terminal to an exec with a\r\nnon-existant command. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45643\">moby/moby#45643</a></li>\r\n<li>Fix <code>host-gateway</code> with BuildKit by passing the IP as a\r\nlabel (also requires <a\r\nhref=\"https://redirect.github.com/docker/buildx/pull/1894\">docker/buildx#1894</a>).\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45790\">moby/moby#45790</a></li>\r\n<li>Fix an issue where <code>POST /containers/{id}/stop</code> would\r\nforcefully terminate the container when the request was canceled,\r\ninstead of waiting until the specified timeout for a 'graceful' stop. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45774\">moby/moby#45774</a></li>\r\n<li>Fix an issue where <code>docker cp -a</code> from the root\r\n(<code>/</code>) directory would fail. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45748\">moby/moby#45748</a></li>\r\n<li>Improve compatibility with non-runc container runtimes by more\r\ncorrectly setting resource constraint parameters in the OCI config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45746\">moby/moby#45746</a></li>\r\n<li>Fix an issue caused by overlapping subuid/subgid ranges in certain\r\nconfigurations (e.g. LDAP) in rootless mode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45747\">moby/moby#45747</a>,\r\n<a\r\nhref=\"https://redirect.github.com/rootless-containers/rootlesskit/pull/369\">rootless-containers/rootlesskit#369</a></li>\r\n<li>Greatly reduce CPU and memory usage while populating the Debug\r\nsection of <code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45856\">moby/moby#45856</a></li>\r\n<li>Fix an issue where debug information was not correctly printed\r\nduring <code>docker info</code> when only the client is in debug mode.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4393\">docker/cli#4393</a></li>\r\n<li>Fix issues related to hung connections when connecting to hosts over\r\na SSH connection. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4395\">docker/cli#4395</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/4ffc61430bbe6d3d405bdf357b766bf303ff3cc5\"><code>4ffc614</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45903\">#45903</a>\r\nfrom thaJeztah/24.0_backport_fix_volume_npe</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d3893b58ff9dc2fd1f25e41e6e6766694632787e\"><code>d3893b5</code></a>\r\ndaemon: daemon.prepareMountPoints(): fix panic if mount is not a\r\nvolume</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1d9c8619cded4657af1529779c5771127e8ad0e7\"><code>1d9c861</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45860\">#45860</a>\r\nfrom thaJeztah/24.0_backport_update_cgroups</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/64f79562fb6f00cee512fc613921389b01f32f6f\"><code>64f7956</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45869\">#45869</a>\r\nfrom thaJeztah/24.0_backport_docs_plugin_disable_fo...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/05cf8e8130d50a7d538d0439d6331df9f0154166\"><code>05cf8e8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45867\">#45867</a>\r\nfrom thaJeztah/24.0_backport_api_remove_deprecated_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5892aae60fe4ef681720606afed51e67fc2a7f86\"><code>5892aae</code></a>\r\ndocs: api v1.28 - v1.40: add missing &quot;force&quot; query arg on\r\nplugin disable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7adb590e162da0974b32741e499d0973d3c9255d\"><code>7adb590</code></a>\r\ndocs: api v1.41: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b5aacf8161c99dcd6e04304b14846db7c5094951\"><code>b5aacf8</code></a>\r\ndocs: api v1.42: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b732cfd3928e5efb4bdd36154503a9d1a1f42c69\"><code>b732cfd</code></a>\r\ndocs: api v1.43: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/50fb65f0f534d85c9e8aed1ee3fefadfbc1d5eda\"><code>50fb65f</code></a>\r\ndocs: api: amend changelog for API 1.28 for &quot;force&quot;\r\noption</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.2...v24.0.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.2+incompatible&new-version=24.0.4+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-13T18:55:36-07:00",
          "tree_id": "6bde15c27d80e689b6d93c31ea550326e57a835c",
          "url": "https://github.com/runfinch/finch/commit/ad37f4fbce72a6f479620461127e8fe494d47cad"
        },
        "date": 1689300078256,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 85550336794,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3011,
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
            "value": 85.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2133352448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3826032,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 80763,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30273035334,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3353,
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
            "value": 30.27,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 28672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1361472,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28752,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 438468287,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6763,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.43,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4384,
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
            "value": 29528,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 466,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1655855103,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1841,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.656,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20389888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 85192,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1652,
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
          "id": "a8b32f9674f93cfe54686a2e29b4cf6ca4534939",
          "message": "build(deps): Bump golang.org/x/tools from 0.10.0 to 0.11.0 (#466)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.10.0\r\nto 0.11.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.11.0</h2>\r\n<p>This is a small release containing new integrations of vulnerability\r\nanalysis.</p>\r\n<p>Vulnerability analysis for go.mod files can be enabled by configuring\r\nthe <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;</code></a>\r\nsetting to <code>&quot;Imports&quot;</code>. For more information on\r\nvulnerability management, see the <a\r\nhref=\"https://go.dev/blog/vuln\">Vulnerability Management for Go</a> blog\r\npost.</p>\r\n<h2>Support changes</h2>\r\n<p>This release removes support for the\r\n<code>&quot;experimentalUseInvalidMetadata&quot;</code> setting, as\r\ndescribed in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0</a>\r\nrelease. Other settings slated for deprecation in that release remain\r\ntemporarily supported, but will be removed in v0.12.0.</p>\r\n<h2>New Features</h2>\r\n<h3>Analyzing dependencies for vulnerabilities</h3>\r\n<p>This release offers two different options for detecting\r\nvulnerabilities in dependencies. Both are backed by the Go vulnerability\r\ndatabase (<a href=\"https://vuln.go.dev\">https://vuln.go.dev</a>) and\r\ncomplement each other.</p>\r\n<ul>\r\n<li>Imports-based scanning, enabled by the <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;:\r\n&quot;Imports&quot;</code></a> setting, reports vulnerabilities by\r\nscanning the set of packages imported in the workspace. This is fast,\r\nbut may report more false positives.</li>\r\n<li>Integration of the <a\r\nhref=\"https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck\">golang.org/x/vuln/cmd/govulncheck</a>\r\ncommand-line tool performs a more precise analysis based on-call graph\r\nreachability, with fewer false positives. Because it is slower to\r\ncompute, it must be manually triggered by using &quot;Run govulncheck to\r\nverify&quot; code actions or the <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#run-govulncheck\"><code>&quot;codelenses.run_govulncheck&quot;</code></a>\r\ncode lens on <code>go.mod</code> files.</li>\r\n</ul>\r\n<p><a\r\nhref=\"https://user-images.githubusercontent.com/4999471/206977512-a821107d-9ffb-4456-9b27-6a6a4f900ba6.mp4\">https://user-images.githubusercontent.com/4999471/206977512-a821107d-9ffb-4456-9b27-6a6a4f900ba6.mp4</a></p>\r\n<!-- raw HTML omitted -->\r\n<h3>Additional checks for the <code>loopclosure</code> analyzer</h3>\r\n<p>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/analyzers.md#loopclosure\"><code>loopclosure</code></a>\r\nanalyzer, which reports problematic references from a nested function to\r\na variable of an enclosing loop, has been improved to catch more cases.\r\nIn particular, it now reports when subtests <a\r\nhref=\"https://pkg.go.dev/testing#T.Parallel\">run in parallel</a> with\r\nthe loop, a mistake that often results in all but the final test case\r\nbeing skipped.</p>\r\n<p><img\r\nsrc=\"https://user-images.githubusercontent.com/57144380/206764370-7fc3c464-af04-4e4e-bb10-a6a0a89a99e3.png\"\r\nalt=\"image\" /></p>\r\n<h2>Configuration changes</h2>\r\n<ul>\r\n<li>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#vulncheck-enum\"><code>&quot;vulncheck&quot;</code></a>\r\nsetting controls vulnerability analysis based on the Go vulnerability\r\ndatabase. If set to <code>&quot;Imports&quot;</code>, gopls will compute\r\ndiagnostics related to vulnerabilities in dependencies, and will present\r\nthem in go.mod files.</li>\r\n<li>The <a\r\nhref=\"https://github.com/golang/tools/blob/master/gopls/doc/settings.md#run-govulncheck\"><code>&quot;codelenses.run_govulncheck&quot;</code></a>\r\nsetting controls the presence of code lenses that run the <a\r\nhref=\"https://pkg.go.dev/golang.org/x/vuln/cmd/govulncheck\">govulncheck</a>\r\ncommand, which takes longer but produces more accurate vulnerability\r\nreporting based on call-graph reachability.</li>\r\n</ul>\r\n<h2>Bug fixes</h2>\r\n<p>This version of gopls includes fixes to several bugs, notably:</p>\r\n<ul>\r\n<li><code>golang/go#57053</code></li>\r\n<li><code>golang/go#55837</code><a\r\nhref=\"https://redirect.github.com/golang/go/issues/56450\">golang/go#56450</a>).</li>\r\n<li><code>golang/go#54816</code></li>\r\n</ul>\r\n<p>A full list of all issues fixed can be found in the <a\r\nhref=\"https://github.com/golang/go/milestone/293?closed=1\">gopls/v0.11.0</a>\r\nmilestone.\r\nTo report a new problem, please file a new issue at <a\r\nhref=\"https://go.dev/issues/new\">https://go.dev/issues/new</a>.</p>\r\n<h2>Thank you to our contributors</h2>\r\n<p><a href=\"https://github.com/Arsen6331\"><code>@​Arsen6331</code></a>,\r\n<a href=\"https://github.com/SN9NV\"><code>@​SN9NV</code></a>, <a\r\nhref=\"https://github.com/adonovan\"><code>@​adonovan</code></a>, <a\r\nhref=\"https://github.com/bcmills\"><code>@​bcmills</code></a>, <a\r\nhref=\"https://github.com/dle8\"><code>@​dle8</code></a>, <a\r\nhref=\"https://github.com/findleyr\"><code>@​findleyr</code></a>, <a\r\nhref=\"https://github.com/hyangah\"><code>@​hyangah</code></a>, <a\r\nhref=\"https://github.com/pjweinbgo\"><code>@​pjweinbgo</code></a>, <a\r\nhref=\"https://github.com/suzmue\"><code>@​suzmue</code></a></p>\r\n<h2>gopls/v0.10.1</h2>\r\n<p>This release contains a fix for <a\r\nhref=\"https://redirect.github.com/golang/go/issues/56505\">golang/go#56505</a>:\r\na new crash during method completion on variables of type\r\n<code>*error</code>.</p>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/675bf3c243d60cbba429fad9924e520e8a86074f\"><code>675bf3c</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/ad52c1ca35fb661c53eedbdee5f3b0e3c33e54e1\"><code>ad52c1c</code></a>\r\ngo/ssa/interp: support conversions to slices of named bytes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/14ec3c023fa0003b489ce1abe0484924ea5276f8\"><code>14ec3c0</code></a>\r\ngopls/doc/contributing.md: document error handling strategies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c4953641676aa4639fcbd2ca825c43cedeaa9e8c\"><code>c495364</code></a>\r\ngo/packages/gopackages: document -mode flag</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/87ad891fe35467be3d692a3f37fef9fb5cb08dcd\"><code>87ad891</code></a>\r\ngopls/internal/lsp/source/typerefs: move test into _test.go</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/27fd94e099b2bbd4c660f0b140af121af9a943c8\"><code>27fd94e</code></a>\r\ninternal/fastwalk: doc formatting fixes (including godoc links)</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/d362be0cdb73ca5215ecaaf1514120c6b8b955e9\"><code>d362be0</code></a>\r\ngopls/internal/lsp/filecache: reduce GC frequency</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/969078be460fb5efe195a1d4c69e3701298e9a21\"><code>969078b</code></a>\r\nRevert &quot;go/analysis: add Sizes that matches gc size\r\ncomputations&quot;</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5aa6acb96f843a0257c5c1c0e52753bcd18b77b3\"><code>5aa6acb</code></a>\r\ngo/analysis: add Sizes that matches gc size computations</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5a89a3bf267ef12790327b8692c88654845bc78d\"><code>5a89a3b</code></a>\r\ngo/vcs: delete</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.10.0...v0.11.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.10.0&new-version=0.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-14T15:50:37-07:00",
          "tree_id": "976964a963201430f1f9e281d27408733c636e12",
          "url": "https://github.com/runfinch/finch/commit/a8b32f9674f93cfe54686a2e29b4cf6ca4534939"
        },
        "date": 1689375392605,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 85294377699,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2995,
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
            "value": 85.29,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2128523264,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3818136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 80540,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30104153937,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3215,
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
            "value": 30.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 147456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1354976,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28612,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 507333024,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5293,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.37,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5073,
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
            "value": 32768,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 536,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1988462301,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3628,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.988,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3616768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 98144,
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
        "date": 1689634960313,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 82945534599,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3452,
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
            "value": 82.95,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2078621696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3720856,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 78341,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30316624510,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3775,
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
            "value": 30.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -102400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1363464,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28800,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 510152584,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8929,
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
            "value": 0.51,
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
            "value": 32832,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 537,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1825607644,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.172,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.55,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.826,
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
            "value": 91520,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1799,
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
          "id": "7b330d3e2bd4cc623f46762c8e3b120ddc18f3b0",
          "message": "build(deps): Bump lima version (#476)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>",
          "timestamp": "2023-07-18T09:50:20-07:00",
          "tree_id": "84e65eb661e398fae1a28d14e5ef0779e11a6d04",
          "url": "https://github.com/runfinch/finch/commit/7b330d3e2bd4cc623f46762c8e3b120ddc18f3b0"
        },
        "date": 1689699426107,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 84210992651,
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
            "value": 31.25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 84.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2131361792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3773912,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 79531,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30249109897,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3382,
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
            "value": 30.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -106496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1363072,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28796,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 476991006,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5282,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.66,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4769,
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
            "value": 31533,
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
            "value": 1903533920,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.295,
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
            "value": 1.904,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3616768,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 94608,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1878,
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
          "id": "54c03bbfba132d797b0efa1171ce3fdc6eb8af9e",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.0 to 0.7.1 (#477)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.7.0 to 0.7.1.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.1</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">0.7.1</a>\r\n(2023-06-27)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\">88f732f</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.10.0 to\r\n2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\">45e9414</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.5 to\r\n2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\">a6ad55d</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.7 to\r\n1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\">6c72750</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">0.7.1</a>\r\n(2023-06-27)</h2>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\">88f732f</a>)</li>\r\n</ul>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.10.0 to\r\n2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\">45e9414</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.9.5 to\r\n2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\">a6ad55d</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.7 to\r\n1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\">6c72750</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/2755cb270a1af545e3832b53240339c36884894d\"><code>2755cb2</code></a>\r\nchore(main): release 0.7.1 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/70\">#70</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/45e9414dba27581a286784e16ff0ab54301220b2\"><code>45e9414</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/71\">#71</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/88f732f12979b0064b852812db4b48affedf5e4c\"><code>88f732f</code></a>\r\nfix: add retry to assert containers do not exist for compose down (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/73\">#73</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/6c7275007bf34fb6ddecc4013c16f1d79ff6d1d0\"><code>6c72750</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.7 to 1.27.8 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/68\">#68</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/a6ad55dd08ee0d3316f51891a795e4f4f5dc9dcd\"><code>a6ad55d</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.9.5 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/69\">#69</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.0...v0.7.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.7.0&new-version=0.7.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-18T09:49:56-07:00",
          "tree_id": "bd79c617cf20d13eadaebdd1cba7aa72c68b62ff",
          "url": "https://github.com/runfinch/finch/commit/54c03bbfba132d797b0efa1171ce3fdc6eb8af9e"
        },
        "date": 1689699438450,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 84373737598,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3073,
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
            "value": 84.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2132877312,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3782128,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 79720,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30263111872,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3019,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": -106496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1360880,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28735,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 529948948,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6224,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.19,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5298,
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
            "value": 34080,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 557,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1698469341,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2067,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.96,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.698,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3538944,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 86264,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1688,
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
          "id": "15d2a4bf8cfd3956a2f8bb4878bfb86827b4e77d",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.2+incompatible to 24.0.4+incompatible (#481)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.2+incompatible to 24.0.4+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.4</h2>\r\n<h2>24.0.4</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.4\">docker/cli,\r\n24.0.4 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.4\">moby/moby,\r\n24.0.4 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>Fix a regression introduced during 24.0.3 that causes a panic during\r\nlive-restore of containers with bind mounts. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45903\">moby/moby#45903</a></li>\r\n</ul>\r\n<h2>v24.0.3</h2>\r\n<h2>24.0.3</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.3\">docker/cli,\r\n24.0.3 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.3\">moby/moby,\r\n24.0.3 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>containerd image store: Fix an issue where multi-platform images\r\nthat did not include a manifest for the default platform could not be\r\ninteracted with. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45849\">moby/moby#45849</a></li>\r\n<li>containerd image store: Fix specious attempts to cache <code>FROM\r\nscratch</code> in container builds. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45822\">moby/moby#45822</a></li>\r\n<li>containerd image store: Fix <code>docker cp</code> with snapshotters\r\nthat cannot mount the same content multiple times. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45780\">moby/moby#45780</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45786\">moby/moby#45786</a></li>\r\n<li>containerd image store: Fix builds with <code>type=image</code> not\r\nbeing correctly unpacked/stored. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45692\">moby/moby#45692</a></li>\r\n<li>containerd image store: Fix incorrectly attempting to unpack\r\npseudo-images (including attestations) in <code>docker load</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45688\">moby/moby#45688</a></li>\r\n<li>containerd image store: Correctly set the user agent, and include\r\nadditional information like the snapshotter when interacting with\r\nregistries. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45671\">moby/moby#45671</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45684\">moby/moby#45684</a></li>\r\n<li>containerd image store: Fix a failure to unpack already-pulled\r\ncontent after switching between snapshotters. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45678\">moby/moby#45678</a></li>\r\n<li>containerd image store: Fix images that have been re-tagged or with\r\nall tags removed being pruned while still in use. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45857\">moby/moby#45857</a></li>\r\n<li>Fix a Swarm CSI issue where the Topology field was not propagated\r\ninto NodeCSIInfo. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45810\">moby/moby#45810</a></li>\r\n<li>Fix failures to add new Swarm managers caused by a very large raft\r\nlog. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45703\">moby/moby#45703</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3122\">moby/swarmkit#3122</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/swarmkit/pull/3128\">moby/swarmkit#3128</a></li>\r\n<li><code>name_to_handle_at(2)</code> is now always allowed in the\r\ndefault seccomp profile. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45833\">moby/moby#45833</a></li>\r\n<li>Fix an issue that prevented encrypted Swarm overlay networks from\r\nworking on ports other than the default (4789). <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45637\">moby/moby#45637</a></li>\r\n<li>Fix a failure to restore mount reference-counts during live-restore.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45824\">moby/moby#45824</a></li>\r\n<li>Fix various networking-related failures during live-restore. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45658\">moby/moby#45658</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45659\">moby/moby#45659</a></li>\r\n<li>Fix running containers restoring with a zero (successful) exit\r\nstatus when the daemon is unexpectedly terminated. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45801\">moby/moby#45801</a></li>\r\n<li>Fix a potential panic while executing healthcheck probes. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45798\">moby/moby#45798</a></li>\r\n<li>Fix a panic caused by a race condition in container exec start. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45794\">moby/moby#45794</a></li>\r\n<li>Fix an exception caused by attaching a terminal to an exec with a\r\nnon-existant command. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45643\">moby/moby#45643</a></li>\r\n<li>Fix <code>host-gateway</code> with BuildKit by passing the IP as a\r\nlabel (also requires <a\r\nhref=\"https://redirect.github.com/docker/buildx/pull/1894\">docker/buildx#1894</a>).\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45790\">moby/moby#45790</a></li>\r\n<li>Fix an issue where <code>POST /containers/{id}/stop</code> would\r\nforcefully terminate the container when the request was canceled,\r\ninstead of waiting until the specified timeout for a 'graceful' stop. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45774\">moby/moby#45774</a></li>\r\n<li>Fix an issue where <code>docker cp -a</code> from the root\r\n(<code>/</code>) directory would fail. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45748\">moby/moby#45748</a></li>\r\n<li>Improve compatibility with non-runc container runtimes by more\r\ncorrectly setting resource constraint parameters in the OCI config. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45746\">moby/moby#45746</a></li>\r\n<li>Fix an issue caused by overlapping subuid/subgid ranges in certain\r\nconfigurations (e.g. LDAP) in rootless mode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45747\">moby/moby#45747</a>,\r\n<a\r\nhref=\"https://redirect.github.com/rootless-containers/rootlesskit/pull/369\">rootless-containers/rootlesskit#369</a></li>\r\n<li>Greatly reduce CPU and memory usage while populating the Debug\r\nsection of <code>GET /info</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45856\">moby/moby#45856</a></li>\r\n<li>Fix an issue where debug information was not correctly printed\r\nduring <code>docker info</code> when only the client is in debug mode.\r\n<a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4393\">docker/cli#4393</a></li>\r\n<li>Fix issues related to hung connections when connecting to hosts over\r\na SSH connection. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4395\">docker/cli#4395</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/4ffc61430bbe6d3d405bdf357b766bf303ff3cc5\"><code>4ffc614</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45903\">#45903</a>\r\nfrom thaJeztah/24.0_backport_fix_volume_npe</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/d3893b58ff9dc2fd1f25e41e6e6766694632787e\"><code>d3893b5</code></a>\r\ndaemon: daemon.prepareMountPoints(): fix panic if mount is not a\r\nvolume</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/1d9c8619cded4657af1529779c5771127e8ad0e7\"><code>1d9c861</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45860\">#45860</a>\r\nfrom thaJeztah/24.0_backport_update_cgroups</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/64f79562fb6f00cee512fc613921389b01f32f6f\"><code>64f7956</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45869\">#45869</a>\r\nfrom thaJeztah/24.0_backport_docs_plugin_disable_fo...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/05cf8e8130d50a7d538d0439d6331df9f0154166\"><code>05cf8e8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/45867\">#45867</a>\r\nfrom thaJeztah/24.0_backport_api_remove_deprecated_...</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5892aae60fe4ef681720606afed51e67fc2a7f86\"><code>5892aae</code></a>\r\ndocs: api v1.28 - v1.40: add missing &quot;force&quot; query arg on\r\nplugin disable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/7adb590e162da0974b32741e499d0973d3c9255d\"><code>7adb590</code></a>\r\ndocs: api v1.41: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b5aacf8161c99dcd6e04304b14846db7c5094951\"><code>b5aacf8</code></a>\r\ndocs: api v1.42: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/b732cfd3928e5efb4bdd36154503a9d1a1f42c69\"><code>b732cfd</code></a>\r\ndocs: api v1.43: add missing &quot;force&quot; query arg on plugin\r\ndisable</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/50fb65f0f534d85c9e8aed1ee3fefadfbc1d5eda\"><code>50fb65f</code></a>\r\ndocs: api: amend changelog for API 1.28 for &quot;force&quot;\r\noption</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.2...v24.0.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.2+incompatible&new-version=24.0.4+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-18T10:10:21-07:00",
          "tree_id": "92cd3602b4ca5ebffdb46d913608652056035198",
          "url": "https://github.com/runfinch/finch/commit/15d2a4bf8cfd3956a2f8bb4878bfb86827b4e77d"
        },
        "date": 1689700570580,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 87239536587,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.287,
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
            "value": 87.24,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 2130583552,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 3898448,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 82390,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30248496057,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3456,
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
            "value": 30.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 53248,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1363136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28793,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 530485441,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3869,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 12.64,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5304,
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
            "value": 33589,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 556,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1892264901,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.122,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.61,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.892,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20385792,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 94792,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1871,
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
          "id": "92f2494f17bde67b785ccf444ac6525b7a856a6c",
          "message": "build(deps): Bump submodules (#482)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: vsiravar <vsiravar@users.noreply.github.com>\r\nCo-authored-by: Justin <pendo324@users.noreply.github.com>",
          "timestamp": "2023-07-18T12:02:37-07:00",
          "tree_id": "33482a6b69021e2f2627fe62783404ea3c7dacf6",
          "url": "https://github.com/runfinch/finch/commit/92f2494f17bde67b785ccf444ac6525b7a856a6c"
        },
        "date": 1689707171441,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45134838513,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3207,
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
            "value": 45.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1232044032,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2021320,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42802,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36591567520,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3256,
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
            "value": 36.59,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 215871488,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1663696,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34685,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 506832150,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.007,
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
            "value": 0.5068,
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
            "value": 33184,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 538,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1750672374,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4499,
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
            "value": 1.751,
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
            "value": 88920,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1731,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1689868040000,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45015154583,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3203,
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
            "value": 45.02,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1358639104,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2015848,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42671,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36488994629,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3109,
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
            "value": 36.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 155684864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1656248,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34510,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 502697853,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3746,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.65,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5026,
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
            "value": 33012,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 535,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1826054226,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.4173,
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
            "value": 1.826,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3665920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 92392,
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
          "id": "e9e8617b07301848dc1f6c3afa18643d212d024e",
          "message": "build(deps): Bump github.com/docker/cli from 24.0.4+incompatible to 24.0.5+incompatible (#495)\n\nBumps [github.com/docker/cli](https://github.com/docker/cli) from\r\n24.0.4+incompatible to 24.0.5+incompatible.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/ced099660009713e0e845eeb754e6050dbaa45d0\"><code>ced0996</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4450\">#4450</a> from\r\nvvoland/fix-issue-4414-Danial-Gharib-24</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/1ee40e2c7416f1267d36be84322ff072b5365d3f\"><code>1ee40e2</code></a>\r\nconfigfile: Initialize nil AuthConfigs</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/40cc1d8eae5f430d2884e7dc8f14873a3145c8bd\"><code>40cc1d8</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4445\">#4445</a> from\r\nthaJeztah/24.0_backport_buildx_0.11.2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/3c2278afae86e059adf45405586e50e79cbfb0f2\"><code>3c2278a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4443\">#4443</a> from\r\nthaJeztah/24.0_update_engine2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/3bd6d6902e1094b21e7768f4485572afc8aa447f\"><code>3bd6d69</code></a>\r\nDockerfile: update buildx to v0.11.2</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/05bf7fbcc8b2be43bb70f38a60c72a84d0bdbb2b\"><code>05bf7fb</code></a>\r\nvendor: github.com/docker/docker\r\nv24.0.5-0.20230718221249-d4a26c153000</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/c6d7c0bb215494a7a037a5bb4977927d8ab59c0e\"><code>c6d7c0b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4438\">#4438</a> from\r\nthaJeztah/24.0_update_engine</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/dd08d4404412828661ee323f4855f14de2fb764e\"><code>dd08d44</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4425\">#4425</a> from\r\nthaJeztah/24.0_backport_credential-store-improv...</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/809975d8bdb9c1ed02940884721913671163f78b\"><code>809975d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/cli/issues/4423\">#4423</a> from\r\nthaJeztah/24.0_backport_dont-ignore-volume-pars...</li>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/commit/8b5023dd2eb69e41c6768008e3719d791a056069\"><code>8b5023d</code></a>\r\nvendor: github.com/docker/docker\r\nv24.0.5-0.20230717072055-8443a06149b5</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/cli/compare/v24.0.4...v24.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/cli&package-manager=go_modules&previous-version=24.0.4+incompatible&new-version=24.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T13:59:28-07:00",
          "tree_id": "7789a606771c71f94101d78541f46b861bdf3693",
          "url": "https://github.com/runfinch/finch/commit/e9e8617b07301848dc1f6c3afa18643d212d024e"
        },
        "date": 1690232766855,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41367459006,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3539,
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
            "value": 41.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1195323392,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1869616,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39341,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36469583498,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2473,
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
            "value": 36.47,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 153530368,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1654200,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34481,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 500598640,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.006,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.81,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5005,
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
            "value": 32340,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 531,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1653312263,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1424,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 13.09,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.653,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 84480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1639,
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
          "id": "444bbc0779dbe22207fec471389810e398c1cf50",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.3 to 0.27.4 (#487)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.3 to 0.27.4.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/f46cb694b153a0acc6b6ea8cd51c6db75536a4f4\"><code>f46cb69</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119262\">#119262</a><code>HirazawaUi/automated-cherry-pick-of-#119229</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/51f34a4cfe56b2efe248ad5afb3e6b4ddd2670da\"><code>51f34a4</code></a>\r\nFix the converts an empty string to nil.</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/bf8aa17148b8001db4ca2f98e0f31561383913f2\"><code>bf8aa17</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118855\">#118855</a><code>aojea/automated-cherry-pick-of-#118686</code></li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/5e3923ed1be2bbc8fcea8786e8b9c3669627d962\"><code>5e3923e</code></a>\r\nalways execute condition for wait.PollUntilContextTimeout with\r\nimmediate=true</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.3...v0.27.4\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.3&new-version=0.27.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T13:59:12-07:00",
          "tree_id": "d031285393cc6aaf1e89f4a9fbb7628eeb0ca6ab",
          "url": "https://github.com/runfinch/finch/commit/444bbc0779dbe22207fec471389810e398c1cf50"
        },
        "date": 1690232968825,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44961239788,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3173,
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
            "value": 44.96,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1293762560,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2014432,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42632,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30213509458,
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
            "value": 33.33,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 50356224,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1359656,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28710,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 475052178,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6638,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.72,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.475,
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
            "value": 31104,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 502,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1631047776,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5129,
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
            "value": 1.631,
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
            "value": 83784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1622,
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
          "id": "d08d102d05a350a8b8e586c42ef83d51495cf4f9",
          "message": "build(deps): Bump github.com/onsi/gomega from 1.27.8 to 1.27.10 (#496)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.8 to 1.27.10.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.10</h2>\r\n<h2>1.27.10</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)\r\n[bdc7803]</li>\r\n</ul>\r\n<h2>v1.27.9</h2>\r\n<h2>1.27.9</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Prevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)\r\n[3b31fc3]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)\r\n[360849b]</li>\r\n<li>chore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)\r\n[86f3659]</li>\r\n<li>Bump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)\r\n[642ead0]</li>\r\n<li>chore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)\r\n[ceb9ca6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)\r\n[a2087d8]</li>\r\n<li>docs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)\r\n[fc9a89f]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/671\">#671</a>)\r\n[9076019]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.10</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)\r\n[bdc7803]</li>\r\n</ul>\r\n<h2>1.27.9</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Prevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)\r\n[3b31fc3]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)\r\n[360849b]</li>\r\n<li>chore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)\r\n[86f3659]</li>\r\n<li>Bump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)\r\n[642ead0]</li>\r\n<li>chore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)\r\n[ceb9ca6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)\r\n[a2087d8]</li>\r\n<li>docs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)\r\n[fc9a89f]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/671\">#671</a>)\r\n[9076019]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/9cbf7b0019d4d489d668583b0d7a6ac889ee2bc8\"><code>9cbf7b0</code></a>\r\nv1.27.10</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/bdc7803e66e0db777db09edea3bb6e85df8c9d6d\"><code>bdc7803</code></a>\r\nfix: go 1.21 adding goroutine ID to creator+location (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/685\">#685</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/66bcd9de8fa08e35002e61e673c37d38a96fcd45\"><code>66bcd9d</code></a>\r\nv1.27.9</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/3b31fc3875132cf36ce6e058180932da829fafec\"><code>3b31fc3</code></a>\r\nPrevent nil-dereference in format.Object for boxed nil error (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/681\">#681</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/360849b5eeaa51d7324a9f8485e951a35b952ed8\"><code>360849b</code></a>\r\nBump golang.org/x/net from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/679\">#679</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/86f3659f49faa273ed5f93a0b2cf5affee4bd068\"><code>86f3659</code></a>\r\nchore: use String() instead of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/678\">#678</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/642ead0c6d5354f23dc9f0e52cebe5729c7c435d\"><code>642ead0</code></a>\r\nBump golang.org/x/net from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/674\">#674</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/ceb9ca6a1cfa690c19c7b778b0fe76edc4e28b6c\"><code>ceb9ca6</code></a>\r\nchore: unnecessary use of fmt.Sprintf (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/677\">#677</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/a2087d8d97ab9af4ccd9fcea75ca6660bb595663\"><code>a2087d8</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.10.0 to 2.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/675\">#675</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/fc9a89ffe7d842fb0389f42c034194075ed38ef0\"><code>fc9a89f</code></a>\r\ndocs: fix ContainSubstring references (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/673\">#673</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.8...v1.27.10\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.8&new-version=1.27.10)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T15:39:03-07:00",
          "tree_id": "2b314ff158f50b5563436a8d120e83d031cd58e3",
          "url": "https://github.com/runfinch/finch/commit/d08d102d05a350a8b8e586c42ef83d51495cf4f9"
        },
        "date": 1690238545021,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45169166992,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3164,
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
            "value": 45.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1344155648,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2024200,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42844,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30249889657,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3421,
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
            "value": 30.25,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 152997888,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1360880,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28743,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 539798423,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6033,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.9,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5397,
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
            "value": 33834,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 563,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1692292873,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.7942,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 27.27,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.692,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 20393984,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 86448,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1681,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1690241263100,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45168121130,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3142,
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
            "value": 45.17,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1367339008,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2022784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42824,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30179674842,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3777,
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
            "value": 30.18,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 126996480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1357120,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28669,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 468888081,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4291,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.01,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4688,
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
            "value": 31096,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 499,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1734712495,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.702,
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
            "value": 1.735,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3620864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 87584,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1718,
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
          "id": "6f1afbb69554148efd8eea938278bcc5104ab050",
          "message": "build(deps): Bump github.com/docker/docker from 24.0.4+incompatible to 24.0.5+incompatible (#497)\n\nBumps [github.com/docker/docker](https://github.com/docker/docker) from\r\n24.0.4+incompatible to 24.0.5+incompatible.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/docker/docker/releases\">github.com/docker/docker's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v24.0.5</h2>\r\n<h2>24.0.5</h2>\r\n<p>For a full list of pull requests and changes in this release, refer\r\nto the relevant GitHub milestones:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A24.0.5\">docker/cli,\r\n24.0.5 milestone</a></li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A24.0.5\">moby/moby,\r\n24.0.5 milestone</a></li>\r\n</ul>\r\n<h3>Bug fixes and enhancements</h3>\r\n<ul>\r\n<li>The Go client now avoids using UNIX socket paths in the HTTP\r\n<code>Host:</code> header, in order to be compatible with changes\r\nintroduced in <code>go1.20.6</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45962\">moby/moby#45962</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45990\">moby/moby#45990</a></li>\r\n<li>containerd storage backend: Fix <code>Variant</code> not being\r\nincluded in <code>docker image inspect</code> and <code>GET\r\n/images/{name}/json</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46025\">moby/moby#46025</a></li>\r\n<li>containerd storage backend: Prevent potential garbage collection of\r\ncontent during image export. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46021\">moby/moby#46021</a></li>\r\n<li>containerd storage backend: Prevent duplicate digest entries in\r\n<code>RepoDigests</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46014\">moby/moby#46014</a></li>\r\n<li>containerd storage backend: Fix operations taking place against the\r\nincorrect tag when working with an image referenced by tag and digest.\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46013\">moby/moby#46013</a></li>\r\n<li>containerd storage backend: Fix a panic caused by\r\n<code>EXPOSE</code> when building containers with the legacy builder. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45921\">moby/moby#45921</a></li>\r\n<li>Fix a regression causing unintuitive errors to be returned when\r\nattempting to create an <code>overlay</code> network on a non-Swarm\r\nnode. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45974\">moby/moby#45974</a></li>\r\n<li>Properly report errors parsing volume specifications from the\r\ncommand line. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4423\">docker/cli#4423</a></li>\r\n<li>Fix a panic caused when <code>auths: null</code> is found in the CLI\r\nconfig file. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4450\">docker/cli#4450</a></li>\r\n</ul>\r\n<h3>Packaging updates</h3>\r\n<ul>\r\n<li>Use init scripts as provided by in moby/moby\r\n<code>contrib/init</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/914\">docker/docker-ce-packaging#914</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/926\">docker/docker-ce-packaging#926</a></li>\r\n<li>Drop Upstart from <code>contrib/init</code>. <a\r\nhref=\"https://redirect.github.com/moby/moby/pull/46044\">moby/moby#46044</a></li>\r\n<li>Upgrade Go to <code>go1.20.6</code>. <a\r\nhref=\"https://redirect.github.com/docker/cli/pull/4428\">docker/cli#4428</a>,\r\n<a\r\nhref=\"https://redirect.github.com/moby/moby/pull/45970\">moby/moby#45970</a>,\r\n<a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/921\">docker/docker-ce-packaging#921</a></li>\r\n<li>Upgrade Compose to <code>v2.20.2</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/924\">docker/docker-ce-packaging#924</a></li>\r\n<li>Upgrade buildx to <code>v0.11.2</code>. <a\r\nhref=\"https://redirect.github.com/docker/docker-ce-packaging/pull/922\">docker/docker-ce-packaging#922</a></li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/a61e2b4c9c5f7c241aeb37f389b4444aee26bea4\"><code>a61e2b4</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46044\">#46044</a>\r\nfrom neersighted/init_cleanup_24.0</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/eede7f09c7d03cdcfdf89853e7483b5c4d51d5c8\"><code>eede7f0</code></a>\r\nRemove Upstart scripts</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/907f83860382cf2edb2d39fc9766e714cdabaf35\"><code>907f838</code></a>\r\nRemove Upstart and cgroups bits from Debian sysvinit script</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/52c92be4c5f94cdb93f775099d42c0ee6b66ccc7\"><code>52c92be</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46029\">#46029</a>\r\nfrom thaJeztah/24.0_backport_bump_runc_binary_1.1.8</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/f022632503d1e58e8008ba38397f0bdea36376f5\"><code>f022632</code></a>\r\nDockerfile: update runc binary to v1.1.8</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/bd41493132904ccc60df5cf655f06c14144f47c0\"><code>bd41493</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46023\">#46023</a>\r\nfrom thaJeztah/24.0_backport_bump_buildx</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/5164e5f6d68f8d895399594b27accbaabbeec8d9\"><code>5164e5f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46025\">#46025</a>\r\nfrom vvoland/c8d-inspect-variant-24</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/2b2a72cc65722b1b3f446420f1a7cfa37d7c746e\"><code>2b2a72c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/docker/docker/issues/46021\">#46021</a>\r\nfrom thaJeztah/24.0_backport_c8d-image-save-lease</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/98a6422cbcb0ba92e4bc62ff01825008fdc9979e\"><code>98a6422</code></a>\r\nc8d/inspect: Include platform Variant</li>\r\n<li><a\r\nhref=\"https://github.com/moby/moby/commit/aab94fb3404923ebc5c421e2b869e1d26c53fb91\"><code>aab94fb</code></a>\r\nDockerfile: update buildx to v0.11.2</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/docker/docker/compare/v24.0.4...v24.0.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/docker/docker&package-manager=go_modules&previous-version=24.0.4+incompatible&new-version=24.0.5+incompatible)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-24T17:27:59-07:00",
          "tree_id": "b703a38d51e81b07d0290ba10340002fe9c4ae27",
          "url": "https://github.com/runfinch/finch/commit/6f1afbb69554148efd8eea938278bcc5104ab050"
        },
        "date": 1690245083458,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44767474967,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3277,
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
            "value": 44.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1366904832,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2008976,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42494,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30199213943,
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
            "value": 38.46,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 77352960,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1358768,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28708,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 500317037,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6526,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.01,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5002,
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
            "value": 32269,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 526,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1729338994,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.229,
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
            "value": 1.729,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3608576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 87144,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1708,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1690247077261,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 46368210244,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3041,
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
            "value": 46.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1231728640,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2075928,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 44004,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 31994198283,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3031,
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
            "value": 31.99,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 92160000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1432088,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 30350,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 497229384,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6557,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.17,
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
            "value": 32117,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 523,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1727687090,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.7043,
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
            "value": 1.728,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 87112,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1708,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1690306012823,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43305306152,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3596,
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
            "value": 43.31,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1337683968,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1947608,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41118,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30141337591,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3615,
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
            "value": 30.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 117354496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1357384,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28656,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 498265760,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6817,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.93,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4982,
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
            "value": 32125,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 526,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1773699286,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.1312,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 12.97,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.774,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3620864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 88888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1748,
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
          "id": "e826bcff385946bb6629db8935d3aa912befb5bb",
          "message": "build(deps): Bump golang.org/x/tools from 0.11.0 to 0.11.1 (#509)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.11.0\r\nto 0.11.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/c16d0be617945651bc69957c71a95eab34e4994c\"><code>c16d0be</code></a>\r\ncmd/gonew: add new tool for starting a module by copying one</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/304e203aec2f01b5d279aeb91e4b191524f99ae5\"><code>304e203</code></a>\r\ninternal/edit: copy cmd/internal/edit</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/82861e0385a62eddb77541a9ebb0cc9fd9a53389\"><code>82861e0</code></a>\r\ngopls/internal/lsp/source: reinstate equalOrigin for references\r\ncheck</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/1561060c98f9376d002b792330e31239df635502\"><code>1561060</code></a>\r\ngopls/internal/lsp/source: fix incorrect 'origin' logic for named\r\ntypes</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/fe58b07b84cecebfbeee9434860b09cb353b03c5\"><code>fe58b07</code></a>\r\ngopls/internal/lsp/source: fix renaming of type parameters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3a3c16941ee28ac5c2913ea3fbe4bbc293236735\"><code>3a3c169</code></a>\r\ngopls/internal/lsp/source: refresh embeddirective analyzer docs</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/03562de2546b298a797f4c85f240145e229b63e5\"><code>03562de</code></a>\r\nrefactor/satisfy/find: composite lits may have type parameter type</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/bacac14996a49a5a3033fb09bb344f8beed596ee\"><code>bacac14</code></a>\r\ngopls/internal/lsp/source: Add SuggestedFix for embeddirective\r\nAnalyzer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/38606b3e25eb72862f76be310866a530f298892c\"><code>38606b3</code></a>\r\ngopls/internal/lsp/cache: keep analysis progress reports on one\r\nline</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e8cdaf46de4db18885846748405a3c397c4bd1d2\"><code>e8cdaf4</code></a>\r\ngopls/internal/lsp/cache: fast-path for type-checking active\r\npackages</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.11.0...v0.11.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.11.0&new-version=0.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-07-31T16:19:18-07:00",
          "tree_id": "81fd48c9b5812cfd9082bb41e2561056b9cfcee7",
          "url": "https://github.com/runfinch/finch/commit/e826bcff385946bb6629db8935d3aa912befb5bb"
        },
        "date": 1690845776637,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 48762723676,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3153,
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
            "value": 48.76,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1374310400,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2171792,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 46211,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30201207361,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3468,
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
            "value": 30.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 100704256,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1359608,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28699,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 464658272,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5134,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 15.54,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4646,
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
            "value": 30914,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 494,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1742003734,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5042,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.742,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 87992,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1728,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1690925303176,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 47278017629,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2853,
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
            "value": 47.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1315069952,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2110976,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 44802,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30792485797,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3174,
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
            "value": 30.79,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 195465216,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1381736,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29220,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 491018146,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9044,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 19.7,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.491,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 31402,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 31976,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 520,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1710253966,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.2715,
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
            "value": 1.71,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3604480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 87144,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1700,
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
          "id": "83bd718be67ddba624e8218034c91bf399e2cccd",
          "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.6 to 3.23.7 (#513)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.6 to 3.23.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/shirou/gopsutil/releases\">github.com/shirou/gopsutil/v3's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3.23.7</h2>\r\n<!-- raw HTML omitted -->\r\n<h2>What's Changed</h2>\r\n<h3>process</h3>\r\n<ul>\r\n<li>[process][posix] Realign process.Name() with python psutil to return\r\nsame value on python3 scripts processes by <a\r\nhref=\"https://github.com/Lomanic\"><code>@​Lomanic</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1488\">shirou/gopsutil#1488</a></li>\r\n</ul>\r\n<h3>Other Changes</h3>\r\n<ul>\r\n<li>cpu_percent and memory_percent Readme by <a\r\nhref=\"https://github.com/elfranne\"><code>@​elfranne</code></a> in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1486\">shirou/gopsutil#1486</a></li>\r\n</ul>\r\n<h2>New Contributors</h2>\r\n<ul>\r\n<li><a href=\"https://github.com/elfranne\"><code>@​elfranne</code></a>\r\nmade their first contribution in <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/pull/1486\">shirou/gopsutil#1486</a></li>\r\n</ul>\r\n<p><strong>Full Changelog</strong>: <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7\">https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7</a></p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/0b4d681d64427449cd2e2ba8fdc8302d0af5e9cc\"><code>0b4d681</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1488\">#1488</a>\r\nfrom Lomanic/issue1485</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/c43eaea6a71b0092b3be18dcb1bbf7b7751d1274\"><code>c43eaea</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1492\">#1492</a>\r\nfrom shirou/dependabot/github_actions/actions/labele...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9421df869961523986b749508cebe46ab743e4b5\"><code>9421df8</code></a>\r\nchore(deps): bump actions/labeler from 4.2.0 to 4.3.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/8b96d2e9e28705f00067e1c7ae9be0cf9fc003eb\"><code>8b96d2e</code></a>\r\n[process][posix] Realign process.Name() with python psutil to return\r\nsame val...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/5081a3dcf981f51b5346883a2e8a9ca909c38def\"><code>5081a3d</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1486\">#1486</a>\r\nfrom elfranne/patch-1</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/042e63609b4e22a95b6201d48c874b62a976d133\"><code>042e636</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1489\">#1489</a>\r\nfrom shirou/dependabot/go_modules/golang.org/x/sys-0...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/99c67a47e2ea59704a073f1efdf7f9ba00f67776\"><code>99c67a4</code></a>\r\nchore(deps): bump golang.org/x/sys from 0.9.0 to 0.10.0</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/c0f3eb1dfb9058724390a759d0d7b7cc2149bb69\"><code>c0f3eb1</code></a>\r\n[process] Remove all noisy and useless Test_AllProcesses_X tests</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/b41de48761c2349a6562f4cb95dc08b97818b428\"><code>b41de48</code></a>\r\ncpu_percent and memory_percent update</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.6...v3.23.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.6&new-version=3.23.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-02T11:41:27-07:00",
          "tree_id": "8e2ef020af51ded2b2a80461fb328cdd18ed9aaf",
          "url": "https://github.com/runfinch/finch/commit/83bd718be67ddba624e8218034c91bf399e2cccd"
        },
        "date": 1691001910754,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42276390886,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2812,
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
            "value": 42.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1403363328,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1905040,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40155,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30153907343,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3344,
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
            "value": 30.15,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 75644928,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1358144,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28675,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 506533458,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4796,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5065,
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
            "value": 32620,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1734231836,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3623,
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
            "value": 1.734,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3600384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 88424,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1729,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1691104341311,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44801630532,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3534,
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
            "value": 44.8,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1303117824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2009448,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42522,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30179615237,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3593,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 26.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.18,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 124149760,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1358584,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28687,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 477245769,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6237,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.5,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4772,
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
            "value": 31738,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 508,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1645864606,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5604,
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
            "value": 1.646,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3600384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 84480,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1639,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1691172038173,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44566113786,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3684,
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
            "value": 44.57,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1321136128,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1999720,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42290,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30127330317,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3166,
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
            "value": 30.13,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 44052480,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1354672,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28610,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 483053253,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.006,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.84,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.483,
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
            "value": 31781,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 510,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1814538207,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.317,
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
            "value": 1.815,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3600384,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 91920,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1800,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1691173384512,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42095141341,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2788,
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
            "value": 42.1,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1328971776,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1900328,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40028,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36561572519,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3145,
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
            "value": 36.56,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 234901504,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1657896,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34563,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 471605797,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.3637,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.84,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4715,
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
            "value": 31189,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 501,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1674319714,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.8862,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
            "value": 29.41,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.674,
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
            "value": 85056,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1659,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
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
        "date": 1691177092548,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42046878510,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3467,
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
            "value": 42.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1299447808,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1898504,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39996,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30218556720,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2976,
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
            "value": 30.22,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 115740672,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1360256,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28718,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 465969383,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.453,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.68,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4659,
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
            "value": 30664,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 492,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1764544876,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.5239,
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
            "value": 1.765,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3620864,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 88920,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1748,
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
          "id": "1b3ad94f9477eb3f8d33cbea90880f78ca403ff7",
          "message": "build(deps): Bump submodules and dependencies (#521)",
          "timestamp": "2023-08-08T19:57:32-07:00",
          "tree_id": "1e56bbb83d102954285e211cd121089320d731a9",
          "url": "https://github.com/runfinch/finch/commit/1b3ad94f9477eb3f8d33cbea90880f78ca403ff7"
        },
        "date": 1691550055207,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42014301700,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3598,
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
            "value": 42.01,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1301303296,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1895936,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39955,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30259387619,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2987,
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
            "value": 30.26,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 119554048,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1362160,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28772,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 494876950,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8127,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.45,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4948,
            "unit": "cpu_seconds/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 5592405,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 32394,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 523,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
            "value": 1743627894,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
            "value": 0.3434,
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
            "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
            "value": 1.744,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
            "value": 3641344,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
            "value": 88024,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
            "value": 1728,
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
          "id": "fca182877ca616257527f6186dd1e88b2919feeb",
          "message": "fix: Restart buildkit after containerd when provisioning (#461)\n\nIssue #, if available: Fixes #412 \r\n\r\n*Description of changes:*\r\n- Previously, only containerd was restarted after configuring it to use\r\nthe data on the persistent disk. This changes the UUID of the server\r\nworker. BuildKit also needs to be restarted to use the proper UUID. See\r\nissue for why this is important.\r\n\r\n*Testing done:*\r\n- Local testing\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Justin Alvarez <alvajus@amazon.com>",
          "timestamp": "2023-08-10T18:37:18-04:00",
          "tree_id": "1c9fe5cf29e57aade114fdf950226050912e8d5c",
          "url": "https://github.com/runfinch/finch/commit/fca182877ca616257527f6186dd1e88b2919feeb"
        },
        "date": 1691707241353,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 46300431871,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2918,
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
            "value": 46.3,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1409626112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2069768,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43894,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36416986862,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2732,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 26.67,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.42,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16744448,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1653568,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34458,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 549741127,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5671,
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
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5497,
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
            "value": 34432,
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
        "date": 1691793029520,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 43195100690,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3614,
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
            "value": 43.2,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1317490688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1946648,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41076,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30271754920,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.346,
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
            "value": 30.27,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 70668288,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1361672,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28767,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 501554643,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.9648,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.33,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5015,
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
            "value": 32812,
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
        "date": 1691797204252,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45041716815,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3356,
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
            "value": 45.04,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1501265920,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2020800,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42780,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36608012235,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3253,
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
            "value": 36.61,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 33501184,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1661632,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34653,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 480680586,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.4773,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 11.94,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4806,
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
            "value": 31525,
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
          "id": "09d6514bfba31a898e3b3407964113f21fb6b244",
          "message": "build(deps): Bump golang.org/x/tools from 0.11.1 to 0.12.0 (#523)\n\nBumps [golang.org/x/tools](https://github.com/golang/tools) from 0.11.1\r\nto 0.12.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/golang/tools/releases\">golang.org/x/tools's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>gopls/v0.12.0</h2>\r\n<p>This release contains a major rewrite of the way gopls computes and\r\nstores package information, with the goal of reducing memory usage and\r\nallowing gopls to scale to larger repositories. This change can also\r\nsignificantly reduce startup time when workspaces are reopened, as gopls\r\nnow uses a file-based cache to persist data across sessions. With these\r\noptimizations, gopls is finally able to <a\r\nhref=\"https://go.dev/issues/48738\">fully analyze dependencies</a> using\r\nthe <a\r\nhref=\"https://pkg.go.dev/golang.org/x/tools/go/analysis\">golang.org/x/tools/go/analysis</a>\r\nframework, resulting in improved accuracy for analysis diagnostics.</p>\r\n<p>You can install this release with <code>go install</code>:</p>\r\n<pre><code>go install golang.org/x/tools/gopls@v0.12.0\r\n</code></pre>\r\n<h1>Support changes</h1>\r\n<p>As gopls matures, we're trying to simplify its configuration so that\r\ngopls Just Works in more scenarios, and so that we have fewer\r\nconfiguration combinations to test. This means that we will be gradually\r\ndeprecating settings that affect the core behavior of gopls.</p>\r\n<h2>Removed experimental configuration options</h2>\r\n<p>As announced in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0\r\nrelease notes</a>, this release removes support for the\r\n<code>experimentalWorkspaceModule</code> and\r\n<code>experimentalWatchedFileDelay</code> settings. The\r\n<code>experimentalPackageCacheKey</code> setting is also removed, as it\r\nis irrelevant in the new design.</p>\r\n<p>The <code>experimentalWorkspaceModule</code> setting in particular\r\nmay still be in use by some users. This setting has been superseded by\r\nbuilt-in support for multi-module workspaces in the <code>go</code>\r\ncommand, via <a href=\"https://go.dev/doc/tutorial/workspaces\">Go\r\nworkspaces</a>. To get the equivalent behavior in gopls@v0.12.0, please\r\ncreate a <code>go.work</code> file in your workspace using all desired\r\nmodules. To use all modules in your workspace, run:</p>\r\n<pre><code>go work use -r .\r\n</code></pre>\r\n<h2>Dropped support for Go 1.13-1.15, deprecated support for Go\r\n1.16-1.17</h2>\r\n<p>As announced in the <a\r\nhref=\"https://github.com/golang/tools/releases/tag/gopls%2Fv0.10.0\">v0.10.0\r\nrelease notes</a>, this release drops support for Go 1.13-1.15, and in\r\nfact does not build with these Go versions.</p>\r\n<p>Additionally, <code>gopls@v0.12.x</code> will be the final sequence\r\nof versions supporting Go 1.16-1.17, and therefore displays a\r\ndeprecation notice when used with these Go versions.</p>\r\n<h2>Supported operating systems</h2>\r\n<p>Given that our users are almost entirely on Linux, Windows, or\r\nDarwin, we are discussing narrowing our support to focus on those\r\noperating systems, in <a\r\nhref=\"https://redirect.github.com/golang/go/issues/59981\">golang/go#59981</a>.</p>\r\n<h1>Performance improvements</h1>\r\n<p>The banner feature of this release is an internal redesign that\r\nsignificantly improves the way gopls scales in larger codebases.\r\nPerformance, particularly memory usage, has <a\r\nhref=\"https://redirect.github.com/golang/go/issues/36943\">long</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/37790\">been</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/43968\">a</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/44981\">pain</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/45363\">point</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/45457\">for</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/46897\">our</a> <a\r\nhref=\"https://redirect.github.com/golang/go/issues/47855\">users</a>.</p>\r\n<h2>Reduced memory usage</h2>\r\n<p>Previous releases of gopls held typed syntax trees for all packages,\r\nin memory, all the time. With this release, these large data structures\r\nare ephemeral: as soon as they are constructed, an index of information\r\nderived from them is saved persistently to a file-based cache, and the\r\ndata structures are recycled. The index for each package includes the\r\nlocations of declaring and referring identifiers; the set of exported\r\ndeclarations and their types; the method sets of each interface; and any\r\ndiagnostics and facts (see below) produced during analysis. The index\r\nholds all the information needed to serve global-scope LSP queries such\r\nas “references”, “implementations”, and so on.</p>\r\n<p>Moving package information to a file-based cache greatly reduces the\r\namount of RAM gopls uses, by almost an order of magnitude in larger\r\nprojects. The table below shows the reductions in steady-state memory\r\nusage for three open-source Go repositories.</p>\r\n<table>\r\n<thead>\r\n<tr>\r\n<th>Project</th>\r\n<th>Packages</th>\r\n<th>In-use bytes v0.11.0</th>\r\n<th>v0.12.0</th>\r\n<th>Change</th>\r\n</tr>\r\n</thead>\r\n<tbody>\r\n<tr>\r\n<td>gopls</td>\r\n<td>405</td>\r\n<td>497MB</td>\r\n<td>232MB</td>\r\n<td>-53%</td>\r\n</tr>\r\n<tr>\r\n<td>kubernetes</td>\r\n<td>3137</td>\r\n<td>3090MB</td>\r\n<td>832MB</td>\r\n<td>-73%</td>\r\n</tr>\r\n<tr>\r\n<td>google-cloud-go + submods</td>\r\n<td>7657</td>\r\n<td>5039MB</td>\r\n<td>863MB</td>\r\n<td>-83%</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/229f8486be036a365bbcaf1172d01d089ea59965\"><code>229f848</code></a>\r\ngopls/internal/lsp/source: enable new defers analyzer</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2dc7ebab284bdfe6bb7ae8b77c3cccb0049e13ce\"><code>2dc7eba</code></a>\r\ngo/analysis: use parser.SkipObjectResolution</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/f91c023a9b093f57e379f719591d5e3725e07600\"><code>f91c023</code></a>\r\ngo.mod: update golang.org/x dependencies</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/e0783a89e9a456f9b64aa66717db398a20e7921d\"><code>e0783a8</code></a>\r\ninternal/gcimporter: remove bug report on objectpath failure</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/75f6f9c0b004228b5a2a6f4c6a7a9719321e29bd\"><code>75f6f9c</code></a>\r\ngopls/internal/bug: add gopls/bug telemetry counter</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/4b271f9c7195c9e700572e4ea43cf1121b12e6ee\"><code>4b271f9</code></a>\r\ngopls: add gopls/client telemetry counters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/d0b18e25a0aba0090de3d8b744fb001bf16763cf\"><code>d0b18e2</code></a>\r\ngo/analysis/passes/copylock: fix infinite recursion</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/5b4d4266651c799fcd0de7475fcaf3afd7512a58\"><code>5b4d426</code></a>\r\ngopls/internal/hooks: clean language version before passing to\r\ngofumpt</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/2160c5f15ff7f02edd7dce655540bb17619ca99b\"><code>2160c5f</code></a>\r\ngopls/internal/lsp/analysis: fix stubmethods with variadic\r\nparameters</li>\r\n<li><a\r\nhref=\"https://github.com/golang/tools/commit/3d20bbe0fb2f6c3c3b340ce4d0bbcd1ad880071c\"><code>3d20bbe</code></a>\r\ninternal/gcimporter: add a missing return if objectpath fails</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/golang/tools/compare/v0.11.1...v0.12.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang.org/x/tools&package-manager=go_modules&previous-version=0.11.1&new-version=0.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-14T00:05:40-07:00",
          "tree_id": "222892789e552d49b242f7b33a401133628757af",
          "url": "https://github.com/runfinch/finch/commit/09d6514bfba31a898e3b3407964113f21fb6b244"
        },
        "date": 1691996969640,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44343926743,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3213,
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
            "value": 44.34,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1412390912,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1992264,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42119,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30182765313,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3237,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 25,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 30.18,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16654336,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1360320,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28708,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508396557,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7704,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20.22,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5083,
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
            "value": 32602,
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
          "id": "c97d2e93edaf139c3960620ec00454f856a8daee",
          "message": "fix: Mount /var/folders to finch vm (#525)\n\nIssue #, if available:\r\nhttps://github.com/runfinch/finch/issues/297\r\n\r\n*Description of changes:*\r\nMount /var/folders into finch vm automatically to improve compatibility\r\nwith docker.\r\n\r\nDocker mount directories\r\n<img width=\"567\" alt=\"image\"\r\nsrc=\"https://github.com/runfinch/finch/assets/69735799/61e561f9-6ac7-4610-9a88-aa044794ce00\">\r\n\r\n\r\n*Testing done:*\r\nYes\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Vishwas Siravara <siravara@amazon.com>",
          "timestamp": "2023-08-14T09:52:31-07:00",
          "tree_id": "399e12b0fe8400f2cf1574db4f286e287026b5f2",
          "url": "https://github.com/runfinch/finch/commit/c97d2e93edaf139c3960620ec00454f856a8daee"
        },
        "date": 1692032850076,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45424660594,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3139,
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
            "value": 45.42,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1284390912,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2034536,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43088,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30463007804,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3907,
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
            "value": 30.46,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 203362304,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1370344,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28963,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 491856432,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8895,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 14.36,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4918,
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
            "value": 31970,
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
        "date": 1692078218308,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45213941244,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.336,
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
            "value": 45.21,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1355264000,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2028888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42942,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30322971503,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3776,
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
            "value": 30.32,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 73842688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1364888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28829,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 511307974,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8749,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.59,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5112,
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
            "value": 540,
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
          "id": "8df84cf8c54bd772c28a83df918c251a540c881a",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.27.4 to 0.28.0 (#535)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.4 to 0.28.0.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/4b14f804a0babdcc58e695d72f77ad29f536511e\"><code>4b14f80</code></a>\r\nMerge remote-tracking branch 'origin/master' into release-1.28</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/76764948c9f530e81c219a8005755388374bd585\"><code>7676494</code></a>\r\n.*: bump golang.org/x/net to v0.13.0</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/5cb236977966cfc829e3b94b57fa69b44e0a95bc\"><code>5cb2369</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118204\">#118204</a>\r\nfrom sttts/sttts-openapi-v2-parameter-refs</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/03c97687112f8fe7d074f230a6d61454082e1760\"><code>03c9768</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119312\">#119312</a>\r\nfrom pacoxu/prometheus/common-v0.44</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/8803846f7993cf450d10631e6c243fd392333ece\"><code>8803846</code></a>\r\nupgrade prometheus common to v0.44.0</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/7924d2c227463c9cac89e58952a7ddbcc2a2bc36\"><code>7924d2c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119330\">#119330</a>\r\nfrom bertinatto/fix-conn-reuse-test</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/b86b23a71c20d10096643a98ac9c9e3f722b4179\"><code>b86b23a</code></a>\r\nProactively bump golang.org/x/net to v0.12.0</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/c9b3b3a37189129d0d80b894dc5d393ade9d3b79\"><code>c9b3b3a</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119154\">#119154</a>\r\nfrom aimuz/fix-119152</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/ddd02633a10573b82a3e1a5a1386c19dc5dca2c8\"><code>ddd0263</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/119229\">#119229</a>\r\nfrom HirazawaUi/fix-convert-slice</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/f3f45bf7f39c30fd239a6b0728c437fe48c15d81\"><code>f3f45bf</code></a>\r\nFix the converts an empty string to nil.</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.4...v0.28.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.4&new-version=0.28.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-16T11:31:28-07:00",
          "tree_id": "0c8249c9e0ea92e66d56b23b9ac4d5108ec54f9a",
          "url": "https://github.com/runfinch/finch/commit/8df84cf8c54bd772c28a83df918c251a540c881a"
        },
        "date": 1692210888960,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44858074178,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.2909,
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
            "value": 44.86,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1381965824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2012032,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42569,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30401485026,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.348,
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
            "value": 30.4,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16797696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1369512,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28932,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 519337566,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7982,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.72,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5193,
            "unit": "cpu_seconds/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
            "value": 73728,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33640,
            "unit": "B/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 548,
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
          "id": "6e33d159e2f522784860bc60ceea897a98d1fe5f",
          "message": "build(deps): Bump github.com/lima-vm/lima from 0.16.0 to 0.17.2 (#531)\n\nBumps [github.com/lima-vm/lima](https://github.com/lima-vm/lima) from\r\n0.16.0 to 0.17.2.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/lima-vm/lima/releases\">github.com/lima-vm/lima's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.17.2</h2>\r\n<p>On macOS hosts, Lima now asks the user to sign the QEMU binary with\r\nthe <code>com.apple.security.hypervisor</code> entitlement if the binary\r\nis not properly signed:</p>\r\n<pre lang=\"console\"><code>$ limactl start\r\nINFO[0000] Using the existing instance &quot;default&quot;        \r\nWARN[0000] QEMU binary &quot;/usr/local/bin/qemu-system-x86_64&quot; is\r\nnot properly signed with the &quot;com.apple.security.hypervisor&quot;\r\nentitlement error=&quot;failed to run [codesign --verify\r\n/usr/local/bin/qemu-system-x86_64]: exit status 1\r\n(out=\\&quot;/usr/local/bin/qemu-system-x86_64: invalid signature (code\r\nor signature have been modified)\\\\nIn architecture:\r\nx86_64\\\\n\\&quot;)&quot;\r\n? Try to sign &quot;/usr/local/bin/qemu-system-x86_64&quot; with the\r\n&quot;com.apple.security.hypervisor&quot; entitlement? (Y/n)\r\n...\r\n</code></pre>\r\n<p>Choose <code>Y</code> to sign the binary.</p>\r\n<p>This signing is usually not needed on users' side.\r\nHowever, the Homebrew bottle of QEMU <strong>v8.0.4</strong> needs this\r\nsigning due to a temporary issue of Homebrew's build infrastructure:</p>\r\n<ul>\r\n<li><a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1742\">lima-vm/lima#1742</a></li>\r\n</ul>\r\n<p>The Homebrew bottle of QEMU v8.0.3 is not affected by this issue.</p>\r\n<h2>Changes</h2>\r\n<p>QEMU:</p>\r\n<ul>\r\n<li>Ask to sign QEMU binary when the binary is not properly signed (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1743\">#1743</a>)</li>\r\n</ul>\r\n<p>Full changes: <a\r\nhref=\"https://github.com/lima-vm/lima/milestone/37?closed=1\">https://github.com/lima-vm/lima/milestone/37?closed=1</a>\r\nThanks to <a\r\nhref=\"https://github.com/afbjorklund\"><code>@​afbjorklund</code></a></p>\r\n<h2>Usage</h2>\r\n<pre lang=\"console\"><code>[macOS]$ limactl create\r\n[macOS]$ limactl start\r\n...\r\nINFO[0029] READY. Run `lima` to open the shell.\r\n<p>[macOS]$ lima uname\r\nLinux\r\n</code></pre></p>\r\n<hr />\r\n<p>The binaries were built automatically on GitHub Actions.\r\nThe build log is available for 90 days: <a\r\nhref=\"https://github.com/lima-vm/lima/actions/runs/5851291166\">https://github.com/lima-vm/lima/actions/runs/5851291166</a></p>\r\n<p>The sha256sum of the SHA256SUMS file itself is\r\n<code>006f022e19d2b03869c33ee30be694217937d8c774af7b9714e2d7659da31aa5</code>\r\n.</p>\r\n<h2>v0.17.1</h2>\r\n<p>This release fixes incompatibility with Go 1.21 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1729\">#1729</a>).</p>\r\n<h2>Changes</h2>\r\n<p>Misc:</p>\r\n<ul>\r\n<li>Support Go 1.21 (<a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1729\">#1729</a>)</li>\r\n</ul>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/bee0502854e2d2eb6e42389fcc5775cdcee78f44\"><code>bee0502</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1743\">#1743</a>\r\nfrom AkihiroSuda/sign-qemu-binary</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/c0b48a933726a41ab3e0002bbcba48c30224f64c\"><code>c0b48a9</code></a>\r\nqemu: ask to sign QEMU binary when the binary is not properly\r\nsigned</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/18c029b0d38a354fc9c163ef47b31d05fc997a90\"><code>18c029b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1745\">#1745</a>\r\nfrom afbjorklund/kernel-arch</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/46d0e828650d58b31125e6459122eea034ccd22e\"><code>46d0e82</code></a>\r\nValidate arch against image not default</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/495271c275ed55b0ee1981cb18bfeef2df06d6ab\"><code>495271c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1740\">#1740</a>\r\nfrom AkihiroSuda/dns-descriptive-debug-log</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/fa053a3d7c439b5f363eb49df0ea123d628bd33e\"><code>fa053a3</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1735\">#1735</a>\r\nfrom afbjorklund/limayaml-os-linux</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/9cc6044c4fd3cfcb164c320d66587afdd093d2ce\"><code>9cc6044</code></a>\r\ndns: make a debug message more descriptive</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/d41c316cf06cf1c5d92b668be3d57464e68e302c\"><code>d41c316</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1733\">#1733</a>\r\nfrom AkihiroSuda/go-mod-20230812</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/31e8bbce1af2244b4f97a04b1adc31a22e34467e\"><code>31e8bbc</code></a>\r\ngo.mod: k8s.io/* v0.27.4</li>\r\n<li><a\r\nhref=\"https://github.com/lima-vm/lima/commit/27b4e787189428ff9724a9244ba0ed0c441d2454\"><code>27b4e78</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/lima-vm/lima/issues/1725\">#1725</a>\r\nfrom afbjorklund/reverse-remove</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/lima-vm/lima/compare/v0.16.0...v0.17.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/lima-vm/lima&package-manager=go_modules&previous-version=0.16.0&new-version=0.17.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-16T11:32:29-07:00",
          "tree_id": "fb21b66a61d53d28b618176266def5c5fe3201e1",
          "url": "https://github.com/runfinch/finch/commit/6e33d159e2f522784860bc60ceea897a98d1fe5f"
        },
        "date": 1692210966907,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 41333565662,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3405,
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
            "value": 41.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1396629504,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1866648,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 39268,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30437438733,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3907,
            "unit": "%cpu_avg/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
            "value": 58.82,
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
            "value": 16838656,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1368848,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28933,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 514900157,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5045,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 10.26,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5148,
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
            "value": 33133,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 540,
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
          "id": "09b38467333e5e59eadb76cd5f4612768cde5289",
          "message": "build(deps): Bump github.com/pkg/sftp from 1.13.5 to 1.13.6 (#530)\n\nBumps [github.com/pkg/sftp](https://github.com/pkg/sftp) from 1.13.5 to\r\n1.13.6.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/pkg/sftp/releases\">github.com/pkg/sftp's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.13.6</h2>\r\n<p><a href=\"https://redirect.github.com/pkg/sftp/issues/499\">GH-499</a>\r\nwriteToSequential: improve tests for write errors\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/513\">GH-513</a>\r\nMore context for EOF during client setup\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/516\">GH-516</a>\r\nRealPathFileLister: allow to return an error\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/525\">GH-525</a>\r\nDocument the weirdness of the reversal of arguments to SSH_FXP_SYMLINK\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/526\">GH-526</a>\r\nrequest server: handle relative symlinks\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/528\">GH-528</a> Add\r\nsupport for working directory in Server\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/533\">GH-533</a> CI:\r\nadd CIFuzz integration\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/537\">GH-537</a>\r\nStop ReadFromWithConcurrency sending more data than it needs to\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/545\">GH-545</a>\r\nrefactor sshfx encoding, fix link rot, go fmt\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/553\">GH-553</a>\r\nMarshal extended attribute data if FileInfo supports it\r\n<a href=\"https://redirect.github.com/pkg/sftp/issues/554\">GH-554</a>\r\nProperly handle io.EOF error conditions when reading</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/669003cef43b4ef0da0894493b012ba9c3d7e313\"><code>669003c</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/pkg/sftp/issues/554\">#554</a> from\r\ndsnet/master</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/e9377c8373b34dca1f9655b2444adf52bcd32cb6\"><code>e9377c8</code></a>\r\nProperly handle io.EOF error conditions when reading</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/ec1c8caca60e03e3816cadfaad20a0fd384a2a5e\"><code>ec1c8ca</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/pkg/sftp/issues/553\">#553</a> from\r\npeterverraedt/marshal-extended</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/c632ce6285b74e776d5dcfaec897a2a97f93d5bd\"><code>c632ce6</code></a>\r\nMarshal extended data if file info supports it</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/72a484f090c5495d4df60aea1ad4cccf714e409c\"><code>72a484f</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/pkg/sftp/issues/550\">#550</a> from\r\ntanishqsinghal7/ts-deleteallresources</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/78e49babba678130c2decdd8acbe97f74e0e8c89\"><code>78e49ba</code></a>\r\nCheck</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/d17dfb25ab87b8561c67800921d0f29d0af5db4f\"><code>d17dfb2</code></a>\r\nResolve Comments</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/f96a7bef9516f481f86400e4799772eec83adf37\"><code>f96a7be</code></a>\r\nHandling error &amp; Test func with working tree</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/628da3e1184de6ca545657fc87e5f247ef2ac1c8\"><code>628da3e</code></a>\r\nAdding Tests to test the func &amp; resolving comment</li>\r\n<li><a\r\nhref=\"https://github.com/pkg/sftp/commit/0ac5f90dbb2b2fe79d663b0a3a7f04dca13c196b\"><code>0ac5f90</code></a>\r\nImplemented Delete All Resources Function</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/pkg/sftp/compare/v1.13.5...v1.13.6\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/pkg/sftp&package-manager=go_modules&previous-version=1.13.5&new-version=1.13.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-16T11:32:48-07:00",
          "tree_id": "b984af9c4e1c26e7640d3db742a0167249989417",
          "url": "https://github.com/runfinch/finch/commit/09b38467333e5e59eadb76cd5f4612768cde5289"
        },
        "date": 1692211080141,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44282198800,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3626,
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
            "value": 44.28,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1371955200,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1991080,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42091,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30325729559,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3246,
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
            "value": 30.33,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16748544,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1365864,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28839,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 506909636,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7947,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 13.47,
            "unit": "%cpu_peak/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5068,
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
            "value": 32532,
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
          "id": "bbdd782ced688b676e279295def8dcce6da017f9",
          "message": "ci: Update homebrew cask new dir (#536)\n\nIssue #, if available:\r\nHomebrew cask now partion its formulas by sub-folder, e.g., finch is\r\nuder ./Cask/f/finch.rb instead of ./Cask/finch.rb\r\nThis is a regression from homebrew cask which breaks our homebrew\r\nrelease automation.\r\n\r\n*Description of changes:*\r\nThis pr updated the path in all places to unblock 0.8.0 release.\r\n\r\n*Testing done:*\r\nWill exercise the updated action after the PR checked in\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
          "timestamp": "2023-08-16T16:18:18-07:00",
          "tree_id": "698828cf3dfcb6a3bde5b49ff497dd40cee7c9b3",
          "url": "https://github.com/runfinch/finch/commit/bbdd782ced688b676e279295def8dcce6da017f9"
        },
        "date": 1692228098299,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 42505469437,
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
            "value": 53.85,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 42.51,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1442549760,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1918304,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 40439,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30432943852,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3511,
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
            "value": 30.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16789504,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1371136,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28963,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 490299964,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.105,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 23.81,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4902,
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
            "value": 31970,
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
          "id": "6ea1499c1320545ba4efe8a7820dcf0998e28782",
          "message": "fix: enables bridge-nf-call-iptables by default (#539)\n\nIssue #, if available: https://github.com/runfinch/finch/issues/538\r\n\r\n*Description of changes:*\r\n\r\nEnables `net.bridge.bridge-nf-call-iptables` by default in `sysctl`.\r\nThis will [send packets in a bridge network to iptables for\r\nprocessing](https://wiki.libvirt.org/Net.bridge.bridge-nf-call_and_sysctl.conf.html).\r\n\r\nThis will also fix the warning on `finch info`:\r\n```\r\nWARNING: bridge-nf-call-iptables is disabled\r\nWARNING: bridge-nf-call-ip6tables is disabled\r\n```\r\n\r\n*Testing done:*\r\n\r\n1. `finch info`\r\n1. Inspected `/etc/sysctl.d/99-lima.conf` to ensure all of the expected\r\nfields are there\r\n1. Reproduced https://github.com/runfinch/finch/issues/538 against my\r\nlocal Finch, and it succeeded.\r\n\r\n**To discuss:** is it worth creating a new sysctl config file instead of\r\nappending to `/etc/sysctl.d/99-lima.conf`?\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Sam Berning <bernings@amazon.com>",
          "timestamp": "2023-08-23T10:51:00-07:00",
          "tree_id": "d07298fdc7b350b5fe38acfc0bdc85380d67abb2",
          "url": "https://github.com/runfinch/finch/commit/6ea1499c1320545ba4efe8a7820dcf0998e28782"
        },
        "date": 1692813269874,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45144961437,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3326,
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
            "value": 45.14,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1330184192,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2026808,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42891,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30545832665,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3907,
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
            "value": 30.55,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 82325504,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1374416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29050,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 481417088,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.802,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.68,
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
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 31520,
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
          "id": "2759049d61b1830cf1fcc9a5590154ded933f87e",
          "message": "ci(deps): Bump aws-actions/configure-aws-credentials from 2 to 3 (#541)\n\nBumps\r\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\r\nfrom 2 to 3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v3</h2>\r\n<p>This tag tracks the latest v3.x.x release</p>\r\n<h2>v3.0.0</h2>\r\n<p>See the <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/v3.0.0/CHANGELOG.md\">changelog</a>\r\nfor details about the changes included in this release.</p>\r\n<h2>v2.2.0</h2>\r\n<p>See the <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/v2.2.0/CHANGELOG.md\">changelog</a>\r\nfor details about the changes included in this release.</p>\r\n<h2>v2.1.0</h2>\r\n<p>See the <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/v2.1.0/CHANGELOG.md\">changelog</a>\r\nfor details about the changes included in this release.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v2.1.0...v2.2.0\">2.2.0</a>\r\n(2023-05-31)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li><code>inline-session-policy</code> prop enables assuming a role with\r\ninline session policies (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d00f6c6f41fde02a9fd0d469040be6ed0df69e73\">d00f6c6</a>)</li>\r\n<li><code>managed-session-policies</code> prop enables assuming a role\r\nwith managed policy arns (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d00f6c6f41fde02a9fd0d469040be6ed0df69e73\">d00f6c6</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v2.0.0...v2.1.0\">2.1.0</a>\r\n(2023-05-31)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li><code>role-chaining</code> prop enables role chaining use case (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6fbd316fd15f52c3d9f68e7aa06eae4f5699a518\">6fbd316</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.7.0...v2.0.0\">2.0.0</a>\r\n(2023-03-06)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Version bump to use Node 16 by default.</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.6.1...v1.7.0\">1.7.0</a>\r\n(2022-08-03)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Allow audience to be explicitly specified (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/2f8dfd0ed43d880f85b57f0c8727b497af2037de\">2f8dfd0</a>)</li>\r\n</ul>\r\n<h3><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.6.0...v1.6.1\">1.6.1</a>\r\n(2022-01-18)</h3>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>OIDC Parallel Requests error (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/133757e9b829f4ef44c8e99e3f272879b45fc9c5\">133757e</a>)</li>\r\n<li>Strict Mode Deprecation (<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4c5e1c60ccfc95d0e48bf1bc95fc707a94aa2c60\">4c5e1c6</a>)</li>\r\n</ul>\r\n<h2><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.5.11...v1.6.0\">1.6.0</a>\r\n(2021-11-23)</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>Add the ability to use a web identity token file (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/240\">#240</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8053174404968575ac1dd102dcb1109d2fe6d9ea\">8053174</a>)</li>\r\n<li>added OIDC (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/262\">#262</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/b8c74de753fbcb4868bf2011fb2e15826ce973af\">b8c74de</a>),\r\ncloses <a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/267\">#267</a></li>\r\n<li>upgraded to new GH OIDC API (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/284\">#284</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/036a4a1ddf2c0e7a782dca6e083c6c53e5d90321\">036a4a1</a>)</li>\r\n</ul>\r\n<h3>Bug Fixes</h3>\r\n<ul>\r\n<li>reverting update to use new API (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/274\">#274</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a78fcb01f76c8c5c3b05ab82718a6f7919fc0269\">a78fcb0</a>),\r\ncloses <a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/270\">#270</a></li>\r\n<li>typo &quot;charcters&quot; in README.md (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/241\">#241</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c48e1b578416f3457ccf757c47385df5c054d23f\">c48e1b5</a>)</li>\r\n<li>Updated token retrieval to use new API (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/270\">#270</a>)\r\n(<a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/20ce4e5ba1de2e753d034b5415075a8767d64d4d\">20ce4e5</a>)</li>\r\n</ul>\r\n<h3><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.5.10...v1.5.11\">1.5.11</a>\r\n(2021-07-19)</h3>\r\n<h3><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v1.5.9...v1.5.10\">1.5.10</a>\r\n(2021-06-01)</h3>\r\n<!-- raw HTML omitted -->\r\n</blockquote>\r\n<p>... (truncated)</p>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/ef93a73b1313f148011965ef7361f667f371f58b\"><code>ef93a73</code></a>\r\nV3 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/791\">#791</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/131c7b6fd10c0d7f36e1e49650b241d91ee327b9\"><code>131c7b6</code></a>\r\nchore: Bump jest from 29.6.2 to 29.6.3 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/786\">#786</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6334b403ebf4af8bddda86d46ba899570ddd1043\"><code>6334b40</code></a>\r\nchore: Bump aws-sdk from 2.1436.0 to 2.1441.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/787\">#787</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/360ea313a73f8d3b7839fb5db64aecf801ad5fda\"><code>360ea31</code></a>\r\nchore: Bump aws-sdk from 2.1431.0 to 2.1436.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/783\">#783</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/de93b00c9f538bf2000deda62b2da850b2c737e9\"><code>de93b00</code></a>\r\nchore: Bump eslint from 8.46.0 to 8.47.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/784\">#784</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/746d33e7c1cc7b6e40a836b0f2ef033136aa6b2a\"><code>746d33e</code></a>\r\nchore: Bump aws-sdk from 2.1426.0 to 2.1431.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/782\">#782</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/706fc9ae3ddc432f1b3de583922ba05d3b484cae\"><code>706fc9a</code></a>\r\nchore: Bump eslint from 8.45.0 to 8.46.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/780\">#780</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9918371ad58bc793ab867692ad2935b2ee847bde\"><code>9918371</code></a>\r\nchore: Bump aws-sdk from 2.1421.0 to 2.1426.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/781\">#781</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/345462ab9e5090ddc595fc179952ed2fb03c74b7\"><code>345462a</code></a>\r\nchore: Bump jest from 29.6.1 to 29.6.2 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/779\">#779</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/80a7a6c2a2309f1aaa0ea3c8689a33b1647a4421\"><code>80a7a6c</code></a>\r\nchore: Bump aws-sdk from 2.1416.0 to 2.1421.0 (<a\r\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/778\">#778</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v2...v3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=2&new-version=3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-25T11:41:05-07:00",
          "tree_id": "4a07c7cf277737811dd55c4f26e5dc5f39379d54",
          "url": "https://github.com/runfinch/finch/commit/2759049d61b1830cf1fcc9a5590154ded933f87e"
        },
        "date": 1692989074073,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44433158020,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3279,
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
            "value": 44.43,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1284603904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1995952,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42207,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30534469009,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3877,
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
            "value": 30.53,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 195579904,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1374328,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 29052,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 486025752,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 1.146,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 16.68,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.486,
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
            "value": 31592,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 513,
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
          "id": "85364818e9f5a9ca1993fa7a3fc8ce775e002a42",
          "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.11.0 to 2.12.0 (#542)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.11.0 to 2.12.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.12.0</h2>\r\n<h2>2.12.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat: allow MustPassRepeatedly decorator to be set at suite level\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1266\">#1266</a>)\r\n[05de518]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix-errors-in-readme (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1244\">#1244</a>)\r\n[27c2f5d]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<p>Various chores/dependency bumps.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.12.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat: allow MustPassRepeatedly decorator to be set at suite level\r\n(<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1266\">#1266</a>)\r\n[05de518]</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix-errors-in-readme (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1244\">#1244</a>)\r\n[27c2f5d]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<p>Various chores/dependency bumps.</p>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/2d6991a4e7a26aa149c8348f72c7fc73bcd4c28c\"><code>2d6991a</code></a>\r\nv2.12.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/05de518c14f861af3fee25d177d25d4920f8c37b\"><code>05de518</code></a>\r\nfeat: allow MustPassRepeatedly decorator to be set at suite level (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1266\">#1266</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/d696c7b753a2107ccbe5ddbabaab256539a2d1fb\"><code>d696c7b</code></a>\r\nBump golang.org/x/tools from 0.11.0 to 0.12.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1253\">#1253</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/d47bbc982d4944da79b5710ff2466957746e4237\"><code>d47bbc9</code></a>\r\nBump commonmarker from 0.23.9 to 0.23.10 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1256\">#1256</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/ce78ac9dc66ca4bbe2ca17fd2b0589e51ff02e83\"><code>ce78ac9</code></a>\r\nchore: update test matrix for Go 1.21 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1255\">#1255</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0ba1a35ac0d08e382caf723c4a9d2f350da66edf\"><code>0ba1a35</code></a>\r\nBump golang.org/x/net from 0.12.0 to 0.14.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1251\">#1251</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/0776d132abead76ec7657e636bf02ab649fd40d9\"><code>0776d13</code></a>\r\nBump golang.org/x/sys from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1252\">#1252</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/27c2f5d6b2cbdf6ee87cffd6c746466f28787edf\"><code>27c2f5d</code></a>\r\nfix-errors-in-readme (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1244\">#1244</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/8f2740a33751ae6e7a0a5b02357e68aec8b787e8\"><code>8f2740a</code></a>\r\nBump github.com/onsi/gomega from 1.27.8 to 1.27.10 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1241\">#1241</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/a0d57ac22cad3d0678054d5f16ad86261e1f21f7\"><code>a0d57ac</code></a>\r\nBump golang.org/x/tools from 0.10.0 to 0.11.0 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1235\">#1235</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.11.0...v2.12.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.11.0&new-version=2.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-25T11:41:33-07:00",
          "tree_id": "92370beda4de43d28502743ab37709256dbd3eab",
          "url": "https://github.com/runfinch/finch/commit/85364818e9f5a9ca1993fa7a3fc8ce775e002a42"
        },
        "date": 1692989106536,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44046537662,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3307,
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
            "value": 44.05,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1413746688,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1980200,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 41847,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36623386414,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3328,
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
            "value": 36.62,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 16920576,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1661928,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34642,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 514552231,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7091,
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
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5145,
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
            "value": 33420,
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
          "id": "675f76fa6d8874587c09237faeb82d9f96c14adb",
          "message": "build(deps): Bump k8s.io/apimachinery from 0.28.0 to 0.28.1 (#543)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.28.0 to 0.28.1.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.28.0...v0.28.1\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.28.0&new-version=0.28.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-25T11:43:02-07:00",
          "tree_id": "595e30bd693f3bd723096672a0eb8fad1da997a4",
          "url": "https://github.com/runfinch/finch/commit/675f76fa6d8874587c09237faeb82d9f96c14adb"
        },
        "date": 1692989279717,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45193695586,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3073,
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
            "value": 45.19,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1352810496,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2027168,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42915,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36771870984,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.2733,
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
            "value": 36.77,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 174166016,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1668176,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34784,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 505513282,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.8066,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 22.99,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.5054,
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
            "value": 32418,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 532,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "5f105d84da0049064286bc6888e80870cd7fb994",
          "message": "chore: update Fedora reference from 37 to 38 in images URL comment (#545)\n\nIssue #, if available:\r\nN/A\r\n\r\n*Description of changes:*\r\nUpdate the Fedora image URL in makefile to reference Fedora 38\r\n\r\n*Testing done:*\r\nN/A\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Austin Vazquez <macedonv@amazon.com>",
          "timestamp": "2023-08-28T11:57:24-07:00",
          "tree_id": "d01e0f3dfa7c2a4feab7b6b6701420881d9ebfc9",
          "url": "https://github.com/runfinch/finch/commit/5f105d84da0049064286bc6888e80870cd7fb994"
        },
        "date": 1693249251872,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 45489819068,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3103,
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
            "value": 45.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1312333824,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2038064,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 43163,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36660576616,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3021,
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
            "value": 36.66,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 228552704,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1661880,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34669,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508835881,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.5355,
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
            "value": 0.5088,
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
            "value": 32984,
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
          "id": "a054ef3aa028b2c50fca93631a7b547b9c535f2e",
          "message": "build(deps): Bump github.com/runfinch/common-tests from 0.7.2 to 0.7.3 (#548)\n\nBumps\r\n[github.com/runfinch/common-tests](https://github.com/runfinch/common-tests)\r\nfrom 0.7.2 to 0.7.3.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/releases\">github.com/runfinch/common-tests's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v0.7.3</h2>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.2...v0.7.3\">0.7.3</a>\r\n(2023-08-25)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.11.0 to\r\n2.12.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/78\">#78</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/7bae5c16524336711c8258ab27c59c54ebf399cd\">7bae5c1</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.8 to\r\n1.27.10 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/74\">#74</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/f0f6fa1a053db57b741068b208d463cb729a274f\">f0f6fa1</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/runfinch/common-tests/blob/main/CHANGELOG.md\">github.com/runfinch/common-tests's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2><a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.2...v0.7.3\">0.7.3</a>\r\n(2023-08-25)</h2>\r\n<h3>Build System or External Dependencies</h3>\r\n<ul>\r\n<li><strong>deps:</strong> bump github.com/onsi/ginkgo/v2 from 2.11.0 to\r\n2.12.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/78\">#78</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/7bae5c16524336711c8258ab27c59c54ebf399cd\">7bae5c1</a>)</li>\r\n<li><strong>deps:</strong> bump github.com/onsi/gomega from 1.27.8 to\r\n1.27.10 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/74\">#74</a>)\r\n(<a\r\nhref=\"https://github.com/runfinch/common-tests/commit/f0f6fa1a053db57b741068b208d463cb729a274f\">f0f6fa1</a>)</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/8ee0756ba80fb525df1064256916c1c14df513f8\"><code>8ee0756</code></a>\r\nchore(main): release 0.7.3 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/77\">#77</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/7bae5c16524336711c8258ab27c59c54ebf399cd\"><code>7bae5c1</code></a>\r\nbuild(deps): bump github.com/onsi/ginkgo/v2 from 2.11.0 to 2.12.0 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/78\">#78</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/runfinch/common-tests/commit/f0f6fa1a053db57b741068b208d463cb729a274f\"><code>f0f6fa1</code></a>\r\nbuild(deps): bump github.com/onsi/gomega from 1.27.8 to 1.27.10 (<a\r\nhref=\"https://redirect.github.com/runfinch/common-tests/issues/74\">#74</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/runfinch/common-tests/compare/v0.7.2...v0.7.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/runfinch/common-tests&package-manager=go_modules&previous-version=0.7.2&new-version=0.7.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot show <dependency name> ignore conditions` will show all\r\nof the ignore conditions of the specified dependency\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-29T15:32:51-07:00",
          "tree_id": "48d90be1ad239ffe25db744f245f376a1abed6d9",
          "url": "https://github.com/runfinch/finch/commit/a054ef3aa028b2c50fca93631a7b547b9c535f2e"
        },
        "date": 1693348568755,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44937270552,
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
            "value": 35.71,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
            "value": 44.94,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1275437056,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2017984,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42696,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30449657665,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.3497,
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
            "value": 30.45,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 183898112,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1371888,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28972,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 508502968,
            "unit": "ns/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6096,
            "unit": "%cpu_avg/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 20,
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
            "value": 0,
            "unit": "disk_bytes/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
            "value": 33336,
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
          "id": "94b74978e135fbf6375fe1a21ce4b64b77db5ee7",
          "message": "build(deps): Bump submodules and dependencies (#544)\n\nAutomated changes by\r\n[create-pull-request](https://github.com/peter-evans/create-pull-request)\r\nGitHub action\r\n\r\nSigned-off-by: GitHub <noreply@github.com>\r\nCo-authored-by: ginglis13 <ginglis13@users.noreply.github.com>",
          "timestamp": "2023-08-29T15:33:03-07:00",
          "tree_id": "15d740acefaa775b4561c698ecfd7419e1a7a491",
          "url": "https://github.com/runfinch/finch/commit/94b74978e135fbf6375fe1a21ce4b64b77db5ee7"
        },
        "date": 1693348593206,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44822162303,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.298,
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
            "value": 44.82,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1330323456,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 2007784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42475,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 30367112411,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
            "value": 0.4022,
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
            "value": 30.37,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 94793728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1366784,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 28861,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 480379580,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.7381,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 18.17,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4803,
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
            "value": 31576,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 510,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
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
          "id": "b7f9e9ac4fcb4bb04a9fbfbceafef13f74b492fb",
          "message": "ci: add ShellCheck to CI (#458)\n\nIssue #, if available:\r\nN/A\r\n\r\n*Description of changes:*\r\nAdds ShellCheck, a bash scripting linter, to CI as a non-critical step\r\nand resolves some of the trivial warnings/issues found by the tool.\r\nAnother round of fixes is needed for some of the non-trivial\r\nwarnings/issues.\r\n\r\n*Testing done:*\r\n\r\n\r\n\r\n- [x] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Austin Vazquez <macedonv@amazon.com>",
          "timestamp": "2023-08-31T09:28:02-07:00",
          "tree_id": "c0ec09feea5982ac6c51ea54acdc6a29a86ee183",
          "url": "https://github.com/runfinch/finch/commit/b7f9e9ac4fcb4bb04a9fbfbceafef13f74b492fb"
        },
        "date": 1693499496185,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
            "value": 44487699737,
            "unit": "ns/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
            "value": 0.3565,
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
            "value": 44.49,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
            "value": 1373597696,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - B/op",
            "value": 1998896,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
            "value": 42254,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
            "value": 36830142451,
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
            "value": 40,
            "unit": "%cpu_peak/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
            "value": 36.83,
            "unit": "cpu_seconds/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
            "value": 132169728,
            "unit": "disk_bytes/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - B/op",
            "value": 1670416,
            "unit": "B/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
            "value": 34829,
            "unit": "allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
            "value": 484603867,
            "unit": "ns/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
            "value": 0.6517,
            "unit": "%cpu_avg/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
            "value": 17.77,
            "unit": "%cpu_peak/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
            "value": 0.4845,
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
            "value": 31608,
            "unit": "B/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
            "value": 513,
            "unit": "allocs/op",
            "extra": "3 times\n12 procs"
          }
        ]
      }
    ]
  }
}