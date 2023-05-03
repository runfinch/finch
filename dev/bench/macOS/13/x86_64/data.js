window.BENCHMARK_DATA = {
  "lastUpdate": 1683149941943,
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
        "date": 1682705687492,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 145956039733,
            "unit": "ns/op\t         0.1693 %cpu_avg/op\t        31.25 %cpu_peak/op\t       146.0 cpu_seconds/op\t2689368064 disk_bytes/op\t 6512816 B/op\t  136505 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26075758351,
            "unit": "ns/op\t         0.3229 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.08 cpu_seconds/op\t   -147456 disk_bytes/op\t 1159904 B/op\t   24824 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 451866602,
            "unit": "ns/op\t         0.2714 %cpu_avg/op\t         7.475 %cpu_peak/op\t         0.4518 cpu_seconds/op\t         0 disk_bytes/op\t   30024 B/op\t     480 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1640780970,
            "unit": "ns/op\t         0.3672 %cpu_avg/op\t        33.33 %cpu_peak/op\t         1.641 cpu_seconds/op\t   8646656 disk_bytes/op\t   83280 B/op\t    1619 allocs/op",
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
        "date": 1683137445236,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 90523762545,
            "unit": "ns/op\t         0.2652 %cpu_avg/op\t        30.77 %cpu_peak/op\t        90.52 cpu_seconds/op\t2686717952 disk_bytes/op\t 4029864 B/op\t   85361 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26185573417,
            "unit": "ns/op\t         0.3681 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.19 cpu_seconds/op\t    110592 disk_bytes/op\t 1167816 B/op\t   24989 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 471227440,
            "unit": "ns/op\t         0.6873 %cpu_avg/op\t         9.890 %cpu_peak/op\t         0.4712 cpu_seconds/op\t      4096 disk_bytes/op\t   31157 B/op\t     504 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1593999057,
            "unit": "ns/op\t         0.3004 %cpu_avg/op\t        20.00 %cpu_peak/op\t         1.594 cpu_seconds/op\t   3592192 disk_bytes/op\t   81104 B/op\t    1578 allocs/op",
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
        "date": 1683137962624,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 106564302394,
            "unit": "ns/op\t         0.2620 %cpu_avg/op\t        43.75 %cpu_peak/op\t       106.6 cpu_seconds/op\t2693222400 disk_bytes/op\t 4778976 B/op\t  100191 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26057563087,
            "unit": "ns/op\t         0.3935 %cpu_avg/op\t        33.33 %cpu_peak/op\t        26.06 cpu_seconds/op\t   -143360 disk_bytes/op\t 1159560 B/op\t   24799 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 463548375,
            "unit": "ns/op\t         0.5119 %cpu_avg/op\t        11.62 %cpu_peak/op\t         0.4635 cpu_seconds/op\t         0 disk_bytes/op\t   30584 B/op\t     494 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1731889015,
            "unit": "ns/op\t         0.3453 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.732 cpu_seconds/op\t   3547136 disk_bytes/op\t   88096 B/op\t    1720 allocs/op",
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
        "date": 1683149941166,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 86742972313,
            "unit": "ns/op\t         0.4030 %cpu_avg/op\t       100.0 %cpu_peak/op\t        86.74 cpu_seconds/op\t2760146944 disk_bytes/op\t 3886792 B/op\t   82091 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26395345481,
            "unit": "ns/op\t         0.3120 %cpu_avg/op\t        33.33 %cpu_peak/op\t        26.40 cpu_seconds/op\t    974848 disk_bytes/op\t 1173256 B/op\t   25117 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 468576981,
            "unit": "ns/op\t         1.026 %cpu_avg/op\t        19.11 %cpu_peak/op\t         0.4685 cpu_seconds/op\t      1365 disk_bytes/op\t   30485 B/op\t     496 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1633432833,
            "unit": "ns/op\t         0.8592 %cpu_avg/op\t        25.00 %cpu_peak/op\t         1.633 cpu_seconds/op\t   3555328 disk_bytes/op\t   82864 B/op\t    1618 allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      }
    ]
  }
}