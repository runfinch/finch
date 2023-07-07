window.BENCHMARK_DATA = {
  "lastUpdate": 1688140182435,
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
      "date": 1682705729568,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 109376839334,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.2969",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "72.73",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "109.4",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2584264704",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "4910336",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "103171",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24293431542,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4778",
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
          "value": "24.29",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-81920",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1081120",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "23024",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 345829930,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "2.255",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "25.15",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3458",
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
          "value": "24989",
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
          "value": 1233779833,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.1423",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "16.36",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.234",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3510272",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "62792",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1207",
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
      "date": 1683137450556,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 67652219792,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3621",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "75.86",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "67.65",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2593181696",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "3018152",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "64139",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24123134125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4010",
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
          "value": "24.12",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "765952",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1074240",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22854",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 353210361,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.5562",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "12.96",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3531",
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
          "value": "25448",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "380",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1284005208,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.2257",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "15.97",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.284",
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
          "value": "65392",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1258",
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
      "date": 1683137936209,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 69564421625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3631",
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
          "value": "69.56",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2582257664",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "3088344",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "65702",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23983311875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3401",
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
          "value": "23.98",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-86016",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1067520",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22706",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 341161180,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.3957",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "12.17",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3411",
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
          "value": "24669",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "366",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1287326750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3423",
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
          "value": "1.287",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20320256",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "64976",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1257",
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
      "date": 1683143312867,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 69502275292,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3440",
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
          "value": "69.50",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2570919936",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "3091152",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "65779",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24002939959,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.5108",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "79.31",
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
          "value": "-110592",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1068320",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22710",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 349883847,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7339",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "18.65",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3498",
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
          "value": "25045",
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
          "value": 1272775250,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.1379",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "16.41",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.273",
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
          "value": "64648",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1248",
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
      "date": 1684271018577,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 57283590625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4241",
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
          "value": "57.28",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2526556160",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2588784",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "54370",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23862550875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4067",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "83.87",
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
          "value": "-36864",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1059288",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22517",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 349742597,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.5787",
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
          "value": "0.3497",
          "unit": "cpu_seconds/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "139264",
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
          "value": "377",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1509731416,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.5939",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "20.78",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.510",
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
          "value": "77000",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1469",
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
      "date": 1684340881791,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 57892176750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4697",
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
          "value": "57.89",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2447372288",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2608240",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "54817",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23902704500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4103",
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
          "value": "23.90",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "16928768",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1065416",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22658",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 376517403,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.118",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "25.04",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3764",
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
          "value": "26829",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "400",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1343703833,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.176",
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
          "value": "1.344",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20402176",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "67896",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1308",
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
      "date": 1684368404832,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 150492818125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.1990",
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
          "value": "150.5",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2536288256",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "6734448",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "141590",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23892339458,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4646",
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
          "value": "23.89",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-40960",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1065544",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22639",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 365686403,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.3470",
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
          "value": "0.3656",
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
          "value": "26256",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "389",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1302579459,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.9140",
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
          "value": "1.303",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20369408",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "66272",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1278",
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
      "date": 1684371492909,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 104200542500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.2689",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "73.33",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "104.2",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2538692608",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "4692608",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "98247",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 26944161209,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4205",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "75.00",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "26.94",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-53248",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1187824",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "25444",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 373913573,
          "unit": "ns/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.8965",
          "unit": "%cpu_avg/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "13.75",
          "unit": "%cpu_peak/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3738",
          "unit": "cpu_seconds/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "0",
          "unit": "disk_bytes/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "26920",
          "unit": "B/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "402",
          "unit": "allocs/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1286797375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.7705",
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
          "value": "1.287",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20369408",
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
          "value": "1267",
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
      "date": 1684775531370,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58584894625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.6121",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "54.55",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.58",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2327040000",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2638728",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55491",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23996039917,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4782",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "81.82",
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
          "value": "147456",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1068512",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22713",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 350279181,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.8477",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "16.93",
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
          "value": "25466",
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
          "value": 1326397042,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.4287",
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
          "value": "1.326",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "67904",
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
        "id": "0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb",
        "message": "build(deps): Bump github.com/sirupsen/logrus from 1.9.1 to 1.9.2 (#408)\n\nBumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus)\r\nfrom 1.9.1 to 1.9.2.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/sirupsen/logrus/commit/352781de903c9dc639752a3ac08148132746e180\"><code>352781d</code></a>\r\nRevert &quot;Merge pull request <a\r\nhref=\"https://redirect.github.com/sirupsen/logrus/issues/1376\">#1376</a>\r\nfrom ozfive/master&quot;</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/sirupsen/logrus/compare/v1.9.1...v1.9.2\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/sirupsen/logrus&package-manager=go_modules&previous-version=1.9.1&new-version=1.9.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
        "timestamp": "2023-05-22T10:08:34-07:00",
        "tree_id": "f2d2b81654b4af29a2aed139fba3d507787ce928",
        "url": "https://github.com/runfinch/finch/commit/0ff477ab32e2c427bbc800b6ae65efc72b5ed1eb"
      },
      "date": 1684775763451,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 59933345541,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3749",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "76.67",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "59.93",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2534596608",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2693200",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56742",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24068522125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3100",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "30.00",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "24.07",
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
          "value": "1071808",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22806",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 365542375,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.4005",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "14.17",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3655",
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
          "value": "26064",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "389",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1382051208,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6553",
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
          "value": "1.382",
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
          "value": "68832",
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
        "id": "80513c7785a6da4ae09d9c871acaf180f5d68f2c",
        "message": "build(deps): Bump github.com/onsi/gomega from 1.27.6 to 1.27.7 (#409)\n\nBumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from\r\n1.27.6 to 1.27.7.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/releases\">github.com/onsi/gomega's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v1.27.7</h2>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/gomega/blob/master/CHANGELOG.md\">github.com/onsi/gomega's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>1.27.7</h2>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>fix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)\r\n[57054d5]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>update gitignore [05c1bc6]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)\r\n[7cadcf6]</li>\r\n<li>Bump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)\r\n[b524839]</li>\r\n<li>Bump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)\r\n[5f44694]</li>\r\n<li>Bump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)\r\n[05dc99a]</li>\r\n<li>Bump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)\r\n[3a033d1]</li>\r\n<li>Replace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)\r\n[a19238f]</li>\r\n<li>Bump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)\r\n[29ed041]</li>\r\n<li>Bump actions/setup-go from 3 to 4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/651\">#651</a>)\r\n[11b2080]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/99a29d5128d6fd87bad628e94d1cf92e82dc2b32\"><code>99a29d5</code></a>\r\nv1.27.7</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05c1bc6dc318e2c5db2a2e3f9977252bb2602d8b\"><code>05c1bc6</code></a>\r\nupdate gitignore</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/57054d54add42b5aa5c499d4a5b3667a02f61ec1\"><code>57054d5</code></a>\r\nfix: gcustom.MakeMatcher accepts nil as actual value (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/666\">#666</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/7cadcf6e3a21ed4daa9f4d1630913c0dcdb23e73\"><code>7cadcf6</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.4 to 2.9.5 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/663\">#663</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/b524839842edb61a50d8ab189c99179afe452c79\"><code>b524839</code></a>\r\nBump golang.org/x/net from 0.9.0 to 0.10.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/662\">#662</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/5f446942faf33eb8e4a398866b1bd094a1285de5\"><code>5f44694</code></a>\r\nBump github.com/onsi/ginkgo/v2 from 2.9.2 to 2.9.4 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/661\">#661</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/05dc99a168f129346fed13bda9967a7a4b352476\"><code>05dc99a</code></a>\r\nBump commonmarker from 0.23.8 to 0.23.9 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/657\">#657</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/3a033d10833c60711a0de2eb3903532b8e78b27f\"><code>3a033d1</code></a>\r\nBump nokogiri from 1.14.1 to 1.14.3 in /docs (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/658\">#658</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/a19238f64f7f7c8bcec2bb6bc9acb6ffe7485a58\"><code>a19238f</code></a>\r\nReplace deprecated NewGomegaWithT with NewWithT (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/659\">#659</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/gomega/commit/29ed04126e68341d11b71d9052d4845ea07629aa\"><code>29ed041</code></a>\r\nBump golang.org/x/net from 0.8.0 to 0.9.0 (<a\r\nhref=\"https://redirect.github.com/onsi/gomega/issues/656\">#656</a>)</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/onsi/gomega/compare/v1.27.6...v1.27.7\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/gomega&package-manager=go_modules&previous-version=1.27.6&new-version=1.27.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
        "timestamp": "2023-05-22T10:08:53-07:00",
        "tree_id": "e2fcfcda12bb1ccd87c7073b3933f3ac027af425",
        "url": "https://github.com/runfinch/finch/commit/80513c7785a6da4ae09d9c871acaf180f5d68f2c"
      },
      "date": 1684775992424,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58445375125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4268",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "74.19",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.45",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2534572032",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2630480",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55325",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23888015458,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4226",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "75.86",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.89",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-81920",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1065184",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22645",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 360987236,
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
          "value": "16.90",
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
          "value": "25912",
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
          "value": 1435855209,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.8191",
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
          "value": "1.436",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "73952",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1399",
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
      "date": 1684777961658,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 59189453084,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.5385",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "83.33",
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
          "value": "2560315392",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2667232",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56133",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23866387334,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4528",
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
          "value": "23.87",
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
          "value": "1062912",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22594",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 383717430,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7195",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "20.83",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3837",
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
          "value": "27112",
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
          "value": 1392290292,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.248",
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
          "value": "1.392",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20418560",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "71808",
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
        "id": "b83cc21e6082eeff076e035dfb4cad152fb5508c",
        "message": "ci: Finch .pkg installer builder (#416)\n\n**Description of changes:**\r\n\r\n- This PR contains the Finch .pkg builder tool.\r\n- The .pkg builder tool can be used by GitHub action to generate and\r\nnotarize macOS .pkg installer.\r\n- The old update to S3 workflow is extended with the functionality to\r\nbuild Finch, build .pkg and test .pkg. It can be used as a scheduled job\r\nfor nightly main branch build as well to detect release issue earlier\r\nbesides cut a new release.\r\n- The old release installer workflow(test installer) is removed because\r\nits scope is moved to the integrated workflow.\r\n\r\nThis is an initial tool check in, Readme and integrated workflow to\r\nchain existing workflows to upload installer to release and publish to\r\nHomebrew will come later.\r\n\r\n**Testing done:**\r\nHave tested the updated workflow and tool on this branch, and can\r\nsuccessfully generate final installer and test it.\r\nAction test ref:\r\nhttps://github.com/runfinch/finch/actions/runs/5077161329\r\n<img width=\"1043\" alt=\"Screenshot 2023-05-24 at 11 17 16 PM\"\r\nsrc=\"https://github.com/runfinch/finch/assets/113378398/a75ab5cf-d4f0-46ac-b02a-319101aae21d\">\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
        "timestamp": "2023-05-26T10:40:35-07:00",
        "tree_id": "f4ee320ee326400884c15fa51a6485739e2ed39b",
        "url": "https://github.com/runfinch/finch/commit/b83cc21e6082eeff076e035dfb4cad152fb5508c"
      },
      "date": 1685123087853,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60497675833,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4498",
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
          "value": "60.50",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2549493760",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2719616",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57360",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24076488250,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3799",
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
          "value": "24.08",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-69632",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1074688",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22856",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 369974323,
          "unit": "ns/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.033",
          "unit": "%cpu_avg/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "15.42",
          "unit": "%cpu_peak/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3699",
          "unit": "cpu_seconds/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "4096",
          "unit": "disk_bytes/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "26386",
          "unit": "B/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "393",
          "unit": "allocs/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1382122083,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.7556",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "46.15",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.382",
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
      "date": 1685135676234,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58235488416,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3539",
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
          "value": "58.24",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2539855872",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2629448",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55291",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24044756334,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3689",
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
          "value": "1064960",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1071448",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22795",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352734625,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.6700",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "8.466",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3527",
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
          "value": "25346",
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
          "value": 1603358500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.2830",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "15.29",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.603",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "80992",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1559",
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
      "date": 1685142471616,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60445500208,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.5098",
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
          "value": "60.45",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2549485568",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2716864",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57287",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23953767625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4160",
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
          "value": "364544",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066104",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22665",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 364310944,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.2778",
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
          "value": "0.3642",
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
          "value": "25824",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "389",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1316421583,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.024",
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
          "value": "1.316",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20402176",
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
      "date": 1685144060833,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60827582042,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4192",
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
          "value": "60.83",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2463260672",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2734632",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57697",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23983460834,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4778",
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
          "value": "23.98",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "397312",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1071016",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22754",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352366708,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.209",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "16.93",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3523",
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
          "value": "25341",
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
          "value": 1393570708,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.9706",
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
          "value": "3641344",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "71856",
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
        "id": "f67ff9668457057514a351819cdc75fb8c6b2d46",
        "message": "ci: Add release automation action (#424)\n\n*Description of changes:*\r\nThis PR added a new passive action subscribe to main branch new tag\r\ncreation.\r\nNew tag creation means Finch has a new release, the new workflow will\r\ntrigger build pkg, upload pkg and homebrew release on the latest tag.\r\n\r\n*Testing done:*\r\nThis is a new action and has cross branch/tag involved, needs some\r\nexperiment on main branch after check in.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
        "timestamp": "2023-05-29T11:41:28-07:00",
        "tree_id": "4e53e8ed0bd63d943da86e7680d75e44738efbcb",
        "url": "https://github.com/runfinch/finch/commit/f67ff9668457057514a351819cdc75fb8c6b2d46"
      },
      "date": 1685385936628,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58086831958,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4109",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "77.42",
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
          "value": "2559356928",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2618896",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55047",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23974785750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4805",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "55.56",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.97",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "110592",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1068024",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22705",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 350877403,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.286",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "20.83",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3508",
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
          "value": "25472",
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
          "value": 1382681458,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.9243",
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
          "value": "1.383",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "72160",
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
        "id": "c4c23a95a139a21cc7208071e3c3b688389f6071",
        "message": "ci: Upload dependency source code along with the installers (#426)\n\n*Description of changes:*\r\nCurrently we need to upload the dependency source code manually.\r\nMake this along with the installer upload.\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
        "timestamp": "2023-05-29T18:22:38-07:00",
        "tree_id": "e65c4af30a6b25e4a09ab3d7849c3b667d9212b8",
        "url": "https://github.com/runfinch/finch/commit/c4c23a95a139a21cc7208071e3c3b688389f6071"
      },
      "date": 1685410006261,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58160629583,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4460",
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
          "value": "58.16",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2555277312",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2623840",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55161",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23993709958,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4244",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "54.55",
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
          "value": "-36864",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1068904",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22736",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 389470403,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.9169",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "17.41",
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
          "value": "27218",
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
          "value": 1372505667,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.432",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "85.71",
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
          "value": "20385792",
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
        "id": "d933d11373c4c9a94137dfad78a8542d2c7be327",
        "message": "ci: Integrate existing workflows into release-automation (#430)\n\n*Description of changes:*\r\nReuse existing workflows to release-automation.\r\nAdded input param to reuse workflow.\r\nRollout only build & test installer as initial.\r\n\r\n*Testing done:*\r\nHave tested the action in this branch\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\n---------\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
        "timestamp": "2023-05-30T16:44:42-07:00",
        "tree_id": "87f62fce80fd69e8450d0621c833ac32529c621e",
        "url": "https://github.com/runfinch/finch/commit/d933d11373c4c9a94137dfad78a8542d2c7be327"
      },
      "date": 1685490527543,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60424135250,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4092",
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
          "value": "60.42",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2541797376",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2712984",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57189",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23942760000,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4236",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "83.33",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.94",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "475136",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066040",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22663",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 343516819,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7783",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "13.10",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3435",
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
          "value": "25317",
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
          "value": 1323526500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.5398",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "16.05",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.323",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
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
        "id": "d08952e8b257a74d6d6a6f9da8949d3fd748ab23",
        "message": "ci: Integrate the other workflows into release-automation (#431)\n\n*Description of changes:*\r\nEnabled the rest workflow for release automation.\r\nCheck in before next release after it is validated.\r\nAfter this PR is checked in, release-please PR merge will automatically\r\ntrigger installer build, test, upload installers and dependency source\r\ncode to release and cut Homebrew PR.\r\n\r\n*Testing done:*\r\nWait next release\r\n\r\n\r\n- [X] I've reviewed the guidance in CONTRIBUTING.md\r\n\r\n\r\n#### License Acceptance\r\n\r\nBy submitting this pull request, I confirm that my contribution is made\r\nunder the terms of the Apache 2.0 license.\r\n\r\nSigned-off-by: Kevin Li <cnkevin@amazon.com>",
        "timestamp": "2023-05-31T09:55:51-07:00",
        "tree_id": "0d7b69664ef0d583147c2b84c591c63f802cdf43",
        "url": "https://github.com/runfinch/finch/commit/d08952e8b257a74d6d6a6f9da8949d3fd748ab23"
      },
      "date": 1685552409273,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 64000806417,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3944",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "80.00",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "64.00",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2570571776",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2864384",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "60628",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24004957333,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4239",
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
          "value": "-73728",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1068296",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22699",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 338035722,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.9106",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "17.41",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3380",
          "unit": "cpu_seconds/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "1365",
          "unit": "disk_bytes/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "24608",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "362",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1472173500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3162",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "15.69",
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
          "value": "3624960",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "75792",
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
      "date": 1685554014744,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 87142543167,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3439",
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
          "value": "87.14",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2562846720",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "3893736",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "82297",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23916208500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3212",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "75.00",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.92",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "16740352",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066424",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22653",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 344664472,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.176",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "13.70",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3446",
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
          "value": "25178",
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
          "value": 1432082041,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3115",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "15.75",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.432",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20410368",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "73920",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1399",
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
      "date": 1685567776862,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60752686833,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4609",
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
          "value": "60.75",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2545029120",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2727768",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57539",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23963708625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3698",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "36.36",
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
          "value": "-32768",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066744",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22678",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 335519917,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.454",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "23.89",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3355",
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
          "value": "24413",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "358",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1395882959,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.447",
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
          "value": "1.396",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20402176",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "72168",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1368",
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
      "date": 1685573492842,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60223110917,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3976",
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
          "value": "60.22",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2561814528",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2703112",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56957",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23942669166,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3113",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "86.11",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.94",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "-77824",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066608",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22672",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352158875,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.257",
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
          "value": "25472",
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
          "value": 1422143333,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6647",
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
          "value": "1.422",
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
          "value": "73480",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1389",
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
      "date": 1685656418329,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58834885375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.5602",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "83.33",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.83",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1985929216",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2653072",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55846",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24013196417,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4365",
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
          "value": "24.01",
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
          "value": "1069952",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22753",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 347656153,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.9497",
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
          "value": "0.3476",
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
          "value": "25325",
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
          "value": 1555816000,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6151",
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
          "value": "1.556",
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
          "value": "77936",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1498",
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
      "date": 1685664758992,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 62292406500,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4920",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "82.76",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "62.29",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2842189824",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2793232",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "59024",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24054246458,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4095",
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
          "value": "24.05",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "36864",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1072776",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22803",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 365775264,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.3846",
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
          "value": "0.3657",
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
          "value": "26256",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "390",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1469184125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.5555",
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
          "value": "1.469",
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
          "value": "74824",
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
      "date": 1685667298767,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 60517807125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4173",
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
          "value": "60.52",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "2203906048",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2722776",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "57431",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24103269792,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3754",
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
          "value": "24.10",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "17182720",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1070224",
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
          "value": 347204375,
          "unit": "ns/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.117",
          "unit": "%cpu_avg/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "15.83",
          "unit": "%cpu_peak/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3471",
          "unit": "cpu_seconds/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "0",
          "unit": "disk_bytes/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "25160",
          "unit": "B/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "370",
          "unit": "allocs/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1418246792,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3990",
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
          "value": "1.418",
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
          "value": "73048",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1388",
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
      "date": 1685667521916,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 56693100125,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4240",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "64.71",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "56.69",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1974378496",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2556992",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "53657",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24047270625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3590",
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
          "value": "24.05",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "200704",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1069528",
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
          "value": 360024959,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.3540",
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
          "value": "0.3599",
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
          "value": "25562",
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
          "value": 1457617750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6192",
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
          "value": "1.458",
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
          "value": "75672",
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
      "date": 1685668718136,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58062300916,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4372",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "83.33",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.06",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1947766784",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2619728",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55073",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24126786959,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3860",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "30.77",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "24.13",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "139264",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1074704",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22866",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 351399431,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.218",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "23.38",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3513",
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
          "value": "25178",
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
          "value": 1402068250,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6067",
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
          "value": "1.402",
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
          "value": "72216",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1368",
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
      "date": 1685728729805,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 56582531834,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4819",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "70.97",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "56.58",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1970208768",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2550328",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "53502",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23935883834,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4342",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "46.15",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.94",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "819200",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1064560",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22645",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 346135833,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.3667",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "12.17",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3461",
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
          "value": "25317",
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
          "value": 1478864083,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.7616",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "27.27",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.479",
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
          "value": "75488",
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
      "date": 1685728765718,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 53682288083,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4698",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "72.73",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "53.68",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1957236736",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2380480",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "50949",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23962921750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4522",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "36.36",
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
          "value": "-950272",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066736",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22677",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 410573375,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7773",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "29.49",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.4105",
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
          "value": "28533",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "436",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1412059333,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.108",
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
          "value": "1.412",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3604480",
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
        "id": "8635294bcb22207bfdaa3f96756f93ba580ff6e2",
        "message": "build(deps): Bump github.com/shirou/gopsutil/v3 from 3.23.4 to 3.23.5 (#437)\n\nBumps\r\n[github.com/shirou/gopsutil/v3](https://github.com/shirou/gopsutil) from\r\n3.23.4 to 3.23.5.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/32e8a92ad6ba363a9cbc05ea9e284c11c723efe3\"><code>32e8a92</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1475\">#1475</a>\r\nfrom shirou/feature/fix_potential_leak_on_common_sleep</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/3e789a459a881bc31b8f24435fe02013818466ee\"><code>3e789a4</code></a>\r\n[common]: fix potential leak on Sleep.</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/03ae19bea8ddab95f5f373d14f9f7a91ebc293b2\"><code>03ae19b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1472\">#1472</a>\r\nfrom powersj/fix/writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/194e6e2edc1530a9f4f73d58d1094af865b3120e\"><code>194e6e2</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1467\">#1467</a>\r\nfrom shirou/dependabot/go_modules/github.com/yusufpa...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/553769014163e842a64c5714480a0439ee4fa1b2\"><code>5537690</code></a>\r\nchore(deps): bump github.com/yusufpapurcu/wmi from 1.2.2 to 1.2.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/1983d2b90843b90f1f6958bbb5f741f511201f90\"><code>1983d2b</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1468\">#1468</a>\r\nfrom shirou/dependabot/go_modules/github.com/stretch...</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/d71f0022a12a981442e245cfb8d962e9c00ff8b6\"><code>d71f002</code></a>\r\nfix(mem): Correct capitalization of linux writeback</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/fd69d68f44b6d9c2054497a8f37ac51f5bcefaa3\"><code>fd69d68</code></a>\r\nchore(deps): bump github.com/stretchr/testify from 1.8.2 to 1.8.3</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/7c610c50377c48e230fd092e65e656b03b97b069\"><code>7c610c5</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/shirou/gopsutil/issues/1462\">#1462</a>\r\nfrom cuishuang/master</li>\r\n<li><a\r\nhref=\"https://github.com/shirou/gopsutil/commit/9aa4e7a744bb35916461100865e7774a76f4053c\"><code>9aa4e7a</code></a>\r\nfix some comments</li>\r\n<li>Additional commits viewable in <a\r\nhref=\"https://github.com/shirou/gopsutil/compare/v3.23.4...v3.23.5\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/shirou/gopsutil/v3&package-manager=go_modules&previous-version=3.23.4&new-version=3.23.5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
        "timestamp": "2023-06-02T10:55:58-07:00",
        "tree_id": "69bedd1390c4851caf133cb4b095e3d019c0450c",
        "url": "https://github.com/runfinch/finch/commit/8635294bcb22207bfdaa3f96756f93ba580ff6e2"
      },
      "date": 1685728959564,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 55525409792,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4954",
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
          "value": "55.53",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1977688064",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2515248",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "52698",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24038603375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4411",
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
          "value": "24.04",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "827392",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1069560",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22755",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 377668764,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.5615",
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
          "value": "0.3776",
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
          "value": "26669",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "400",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1393964625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.100",
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
          "value": "1.394",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20959232",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "72568",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1361",
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
      "date": 1685732833337,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 59572202625,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.3798",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "58.82",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "59.57",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1969381376",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2674688",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56341",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23913320708,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3644",
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
          "value": "23.91",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "16814080",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1063128",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22598",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 338048889,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.734",
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
          "value": "0.3380",
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
          "value": "24765",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "363",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1388564333,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3290",
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
          "value": "1.389",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "72144",
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
      "date": 1685740305305,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58388853041,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4145",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "81.82",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.39",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1970294784",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2623816",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55166",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24024297708,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3617",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "83.33",
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
          "value": "-905216",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1072520",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22800",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352861695,
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
          "value": "16.67",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3528",
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
          "value": "25173",
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
          "value": 1512062708,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.5462",
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
          "value": "1.512",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3641344",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "76584",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1468",
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
      "date": 1685763857454,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58515352917,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4901",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "100.0",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "58.52",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1966522368",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2630544",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55319",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24015349833,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3984",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "36.36",
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
          "value": "1060864",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1069648",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22748",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 371074708,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.8590",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "12.82",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3710",
          "unit": "cpu_seconds/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "-1365",
          "unit": "disk_bytes/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "26205",
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
          "value": 1468305791,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.029",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "30.77",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.468",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "75112",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1426",
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
      "date": 1685989144192,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 58831576834,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4394",
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
          "value": "58.83",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1933512704",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2653056",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "55831",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24094143166,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3633",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "36.36",
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
          "value": "126976",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1070360",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22755",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352178208,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7732",
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
          "value": "25397",
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
          "value": 1376137000,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.6324",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "15.86",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.376",
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
          "value": "69344",
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
        "id": "a415e3ef7b2741853bf352b915c4100c77600619",
        "message": "build(deps): Bump github.com/onsi/ginkgo/v2 from 2.9.7 to 2.10.0 (#449)\n\nBumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from\r\n2.9.7 to 2.10.0.\r\n<details>\r\n<summary>Release notes</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/releases\">github.com/onsi/ginkgo/v2's\r\nreleases</a>.</em></p>\r\n<blockquote>\r\n<h2>v2.10.0</h2>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Changelog</summary>\r\n<p><em>Sourced from <a\r\nhref=\"https://github.com/onsi/ginkgo/blob/master/CHANGELOG.md\">github.com/onsi/ginkgo/v2's\r\nchangelog</a>.</em></p>\r\n<blockquote>\r\n<h2>2.10.0</h2>\r\n<h3>Features</h3>\r\n<ul>\r\n<li>feat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)\r\n[a782a77]\r\nadds a new --tags flag to ginkgo generate</li>\r\n</ul>\r\n<h3>Fixes</h3>\r\n<ul>\r\n<li>Fix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)\r\n[548d78e]</li>\r\n</ul>\r\n<h3>Maintenance</h3>\r\n<ul>\r\n<li>Bump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)\r\n[2b76a5e]</li>\r\n</ul>\r\n</blockquote>\r\n</details>\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/edf2c70bdd2d9541a8e66d1835032127ad4c5d14\"><code>edf2c70</code></a>\r\nv2.10.0</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/a782a77ba8a8ddfd763e2f08b741339facc04006\"><code>a782a77</code></a>\r\nfeat(ginkgo/generators): add --tags flag (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1216\">#1216</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/548d78e6eaea8bd55316cbec418b6dba297b73ee\"><code>548d78e</code></a>\r\nFix broken link of MIGRATING_TO_V2.md (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1217\">#1217</a>)</li>\r\n<li><a\r\nhref=\"https://github.com/onsi/ginkgo/commit/2b76a5ec3a018f9c7451f4ed9d0350e21248a637\"><code>2b76a5e</code></a>\r\nBump golang.org/x/tools from 0.9.1 to 0.9.3 (<a\r\nhref=\"https://redirect.github.com/onsi/ginkgo/issues/1215\">#1215</a>)</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/onsi/ginkgo/compare/v2.9.7...v2.10.0\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=github.com/onsi/ginkgo/v2&package-manager=go_modules&previous-version=2.9.7&new-version=2.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
        "timestamp": "2023-06-08T12:05:08-07:00",
        "tree_id": "7d0426eaf21e581716ccaa1d2220d852432ff817",
        "url": "https://github.com/runfinch/finch/commit/a415e3ef7b2741853bf352b915c4100c77600619"
      },
      "date": 1686251355805,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 56522643750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4248",
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
          "value": "56.52",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1974063104",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2545456",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "53393",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24132778250,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4629",
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
          "value": "24.13",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "18223104",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1072432",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22812",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 336749305,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.327",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "26.85",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3367",
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
          "value": "24648",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "364",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1303412709,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3423",
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
          "value": "1.303",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "15163392",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "66168",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1268",
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
      "date": 1686591269933,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 56992669709,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4852",
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
          "value": "56.99",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1971453952",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2577024",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "54088",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24011717750,
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
          "value": "40.00",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "24.01",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "16384",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1066000",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22669",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 365736791,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.4695",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "11.43",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3657",
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
          "value": "26005",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "389",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1492483875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.7751",
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
          "value": "1.492",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "20402176",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "76992",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1460",
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
      "date": 1686678886770,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 56515338000,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4973",
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
          "value": "56.52",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1972568064",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2548000",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "53441",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24146751375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3953",
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
          "value": "24.15",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "1081344",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1074312",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22840",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 379490625,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.242",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "21.01",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3794",
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
          "value": "26906",
          "unit": "B/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "403",
          "unit": "allocs/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1423261750,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "1.034",
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
          "value": "1.423",
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
          "value": "73096",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1388",
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
      "date": 1686937531226,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 57612230417,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4093",
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
          "value": "57.61",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1986293760",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2602424",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "54680",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24094082292,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4623",
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
          "value": "24.09",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "17649664",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1075880",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22871",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 352437500,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.2216",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "7.407",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3524",
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
          "value": "25802",
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
          "value": 1302175208,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.1852",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "22.41",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.302",
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
          "value": "65752",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1267",
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
      "date": 1687892792915,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 59873770291,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4560",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "82.35",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "59.87",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1978720256",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2688152",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56630",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23973235375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3933",
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
          "value": "23.97",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "65536",
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
          "value": "22659",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 349245500,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.012",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "15.00",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3492",
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
          "value": "25256",
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
          "value": 1427052542,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3994",
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
          "value": "1.427",
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
          "value": "73984",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1400",
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
      "date": 1688076590437,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 59452658792,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.4025",
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
          "value": "59.45",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1973895168",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "2677272",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "56385",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23934815375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.4682",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "83.33",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - cpu_seconds/op",
          "value": "23.93",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "17145856",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1064256",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22622",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 397271854,
          "unit": "ns/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "1.255",
          "unit": "%cpu_avg/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "23.05",
          "unit": "%cpu_peak/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3972",
          "unit": "cpu_seconds/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - disk_bytes/op",
          "value": "0",
          "unit": "disk_bytes/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - B/op",
          "value": "27648",
          "unit": "B/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - allocs/op",
          "value": "421",
          "unit": "allocs/op",
          "extra": "4 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - ns/op",
          "value": 1292407291,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.2149",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "14.90",
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
          "value": "3592192",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "65736",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1267",
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
      "date": 1688080785299,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 123703164875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.2715",
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
          "value": "123.7",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1987235840",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "5489080",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "116304",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 24054021083,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3690",
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
          "value": "24.05",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - disk_bytes/op",
          "value": "1069056",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1067720",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22708",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 351214459,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.7177",
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
          "value": "0.3512",
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
          "value": "25776",
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
          "value": 1352368375,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.3078",
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
          "value": "1.352",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - disk_bytes/op",
          "value": "3608576",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - B/op",
          "value": "67952",
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
        "id": "d6746a447e10bed6c13d197c8d693b27e02ac3aa",
        "message": "build(deps): Bump k8s.io/apimachinery from 0.27.2 to 0.27.3 (#454)\n\nBumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery)\r\nfrom 0.27.2 to 0.27.3.\r\n<details>\r\n<summary>Commits</summary>\r\n<ul>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/38152d47d7866fcd1c1287f34cdc2f92fd78a5f2\"><code>38152d4</code></a>\r\nMerge pull request <a\r\nhref=\"https://redirect.github.com/kubernetes/apimachinery/issues/118553\">#118553</a>\r\nfrom puerco/bump-1.27-go1.20.5</li>\r\n<li><a\r\nhref=\"https://github.com/kubernetes/apimachinery/commit/2bd872f9613b7fe77e000706a4875ca13afd4a75\"><code>2bd872f</code></a>\r\nupdate-vendor: update vendored go.sums</li>\r\n<li>See full diff in <a\r\nhref=\"https://github.com/kubernetes/apimachinery/compare/v0.27.2...v0.27.3\">compare\r\nview</a></li>\r\n</ul>\r\n</details>\r\n<br />\r\n\r\n\r\n[![Dependabot compatibility\r\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=k8s.io/apimachinery&package-manager=go_modules&previous-version=0.27.2&new-version=0.27.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\r\n\r\nDependabot will resolve any conflicts with this PR as long as you don't\r\nalter it yourself. You can also trigger a rebase manually by commenting\r\n`@dependabot rebase`.\r\n\r\n[//]: # (dependabot-automerge-start)\r\n[//]: # (dependabot-automerge-end)\r\n\r\n---\r\n\r\n<details>\r\n<summary>Dependabot commands and options</summary>\r\n<br />\r\n\r\nYou can trigger Dependabot actions by commenting on this PR:\r\n- `@dependabot rebase` will rebase this PR\r\n- `@dependabot recreate` will recreate this PR, overwriting any edits\r\nthat have been made to it\r\n- `@dependabot merge` will merge this PR after your CI passes on it\r\n- `@dependabot squash and merge` will squash and merge this PR after\r\nyour CI passes on it\r\n- `@dependabot cancel merge` will cancel a previously requested merge\r\nand block automerging\r\n- `@dependabot reopen` will reopen this PR if it is closed\r\n- `@dependabot close` will close this PR and stop Dependabot recreating\r\nit. You can achieve the same result by closing it manually\r\n- `@dependabot ignore this major version` will close this PR and stop\r\nDependabot creating any more for this major version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this minor version` will close this PR and stop\r\nDependabot creating any more for this minor version (unless you reopen\r\nthe PR or upgrade to it yourself)\r\n- `@dependabot ignore this dependency` will close this PR and stop\r\nDependabot creating any more for this dependency (unless you reopen the\r\nPR or upgrade to it yourself)\r\n\r\n\r\n</details>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
        "timestamp": "2023-06-30T08:44:53-07:00",
        "tree_id": "c4ed21f0d0322c401c302f18655c952447d551ad",
        "url": "https://github.com/runfinch/finch/commit/d6746a447e10bed6c13d197c8d693b27e02ac3aa"
      },
      "date": 1688140181709,
      "tool": "go",
      "benches": [
        {
          "name": "BenchmarkAll/BenchmarkVMInit - ns/op",
          "value": 109783419791,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_avg/op",
          "value": "0.2562",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - %cpu_peak/op",
          "value": "73.53",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - cpu_seconds/op",
          "value": "109.8",
          "unit": "cpu_seconds/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - disk_bytes/op",
          "value": "1987923968",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - B/op",
          "value": "4927528",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMInit - allocs/op",
          "value": "103539",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - ns/op",
          "value": 23816873875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_avg/op",
          "value": "0.3982",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - %cpu_peak/op",
          "value": "36.36",
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
          "value": "1073152",
          "unit": "disk_bytes/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - B/op",
          "value": "1061672",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkVMStart - allocs/op",
          "value": "22560",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - ns/op",
          "value": 350664250,
          "unit": "ns/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_avg/op",
          "value": "0.6646",
          "unit": "%cpu_avg/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - %cpu_peak/op",
          "value": "13.26",
          "unit": "%cpu_peak/op",
          "extra": "3 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkContainerRun - cpu_seconds/op",
          "value": "0.3506",
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
          "value": "25605",
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
          "value": 1492144875,
          "unit": "ns/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_avg/op",
          "value": "0.4876",
          "unit": "%cpu_avg/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - %cpu_peak/op",
          "value": "21.28",
          "unit": "%cpu_peak/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - cpu_seconds/op",
          "value": "1.492",
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
          "value": "76176",
          "unit": "B/op",
          "extra": "1 times\n8 procs"
        },
        {
          "name": "BenchmarkAll/BenchmarkImageBuild - allocs/op",
          "value": "1458",
          "unit": "allocs/op",
          "extra": "1 times\n8 procs"
        }
      ]
    }
  ]
}
}