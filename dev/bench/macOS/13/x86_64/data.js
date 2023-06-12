window.BENCHMARK_DATA = {
  "lastUpdate": 1686591244348,
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
        "date": 1684271120292,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77511239745,
            "unit": "ns/op\t         0.2631 %cpu_avg/op\t        30.77 %cpu_peak/op\t        77.51 cpu_seconds/op\t2667061248 disk_bytes/op\t 3492360 B/op\t   73163 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26461073591,
            "unit": "ns/op\t         0.3338 %cpu_avg/op\t        35.71 %cpu_peak/op\t        26.46 cpu_seconds/op\t  16809984 disk_bytes/op\t 1177128 B/op\t   25214 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 462949485,
            "unit": "ns/op\t         0.6317 %cpu_avg/op\t        13.46 %cpu_peak/op\t         0.4629 cpu_seconds/op\t     43690 disk_bytes/op\t   30330 B/op\t     490 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1619110035,
            "unit": "ns/op\t         0.2828 %cpu_avg/op\t        26.67 %cpu_peak/op\t         1.619 cpu_seconds/op\t   3629056 disk_bytes/op\t   82408 B/op\t    1608 allocs/op",
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
        "date": 1684340939563,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76734595288,
            "unit": "ns/op\t         0.3309 %cpu_avg/op\t        88.89 %cpu_peak/op\t        76.73 cpu_seconds/op\t2664726528 disk_bytes/op\t 3457832 B/op\t   72417 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26843850385,
            "unit": "ns/op\t         0.3533 %cpu_avg/op\t        35.71 %cpu_peak/op\t        26.84 cpu_seconds/op\t   -106496 disk_bytes/op\t 1191792 B/op\t   25521 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 478470499,
            "unit": "ns/op\t         0.6975 %cpu_avg/op\t        17.15 %cpu_peak/op\t         0.4784 cpu_seconds/op\t         0 disk_bytes/op\t   30976 B/op\t     503 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1807805626,
            "unit": "ns/op\t         0.5643 %cpu_avg/op\t        20.00 %cpu_peak/op\t         1.808 cpu_seconds/op\t  20406272 disk_bytes/op\t   91376 B/op\t    1793 allocs/op",
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
        "date": 1684368476737,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 137888201091,
            "unit": "ns/op\t         0.1969 %cpu_avg/op\t        35.71 %cpu_peak/op\t       137.9 cpu_seconds/op\t2644529152 disk_bytes/op\t 6174024 B/op\t  128886 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26381647968,
            "unit": "ns/op\t         0.3176 %cpu_avg/op\t        25.00 %cpu_peak/op\t        26.38 cpu_seconds/op\t    102400 disk_bytes/op\t 1172376 B/op\t   25073 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 526424504,
            "unit": "ns/op\t         0.4227 %cpu_avg/op\t        13.87 %cpu_peak/op\t         0.5264 cpu_seconds/op\t         0 disk_bytes/op\t   33172 B/op\t     552 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1787999513,
            "unit": "ns/op\t         0.3965 %cpu_avg/op\t        16.67 %cpu_peak/op\t         1.788 cpu_seconds/op\t   3629056 disk_bytes/op\t   90280 B/op\t    1773 allocs/op",
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
        "date": 1684371560792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 104681339582,
            "unit": "ns/op\t         0.2113 %cpu_avg/op\t        33.33 %cpu_peak/op\t       104.7 cpu_seconds/op\t2655481856 disk_bytes/op\t 4695704 B/op\t   98253 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26345254477,
            "unit": "ns/op\t         0.3211 %cpu_avg/op\t        19.54 %cpu_peak/op\t        26.35 cpu_seconds/op\t   4202496 disk_bytes/op\t 1174544 B/op\t   25124 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 578748290,
            "unit": "ns/op\t         0.9325 %cpu_avg/op\t        18.41 %cpu_peak/op\t         0.5787 cpu_seconds/op\t         0 disk_bytes/op\t   35308 B/op\t     601 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1933453752,
            "unit": "ns/op\t         0.09713 %cpu_avg/op\t         9.091 %cpu_peak/op\t         1.933 cpu_seconds/op\t   3567616 disk_bytes/op\t   95624 B/op\t    1909 allocs/op",
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
        "date": 1684775578833,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77263463421,
            "unit": "ns/op\t         0.2886 %cpu_avg/op\t        40.00 %cpu_peak/op\t        77.26 cpu_seconds/op\t2668273664 disk_bytes/op\t 3488240 B/op\t   73001 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 27841693717,
            "unit": "ns/op\t         0.3497 %cpu_avg/op\t        38.46 %cpu_peak/op\t        27.84 cpu_seconds/op\t  17739776 disk_bytes/op\t 1260448 B/op\t   26487 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 491168626,
            "unit": "ns/op\t         0.8486 %cpu_avg/op\t        21.97 %cpu_peak/op\t         0.4911 cpu_seconds/op\t      2730 disk_bytes/op\t   31661 B/op\t     519 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1701851158,
            "unit": "ns/op\t         1.105 %cpu_avg/op\t        38.46 %cpu_peak/op\t         1.702 cpu_seconds/op\t   3559424 disk_bytes/op\t   85928 B/op\t    1688 allocs/op",
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
        "date": 1684776486254,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78228630888,
            "unit": "ns/op\t         0.2719 %cpu_avg/op\t        28.57 %cpu_peak/op\t        78.23 cpu_seconds/op\t2680717312 disk_bytes/op\t 3526936 B/op\t   73928 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26871386138,
            "unit": "ns/op\t         0.3345 %cpu_avg/op\t        21.43 %cpu_peak/op\t        26.87 cpu_seconds/op\t     40960 disk_bytes/op\t 1193568 B/op\t   25562 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 468242428,
            "unit": "ns/op\t         0.5090 %cpu_avg/op\t        10.68 %cpu_peak/op\t         0.4682 cpu_seconds/op\t     19114 disk_bytes/op\t   30682 B/op\t     497 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1695125276,
            "unit": "ns/op\t         0.1910 %cpu_avg/op\t        21.43 %cpu_peak/op\t         1.695 cpu_seconds/op\t   3620864 disk_bytes/op\t   85912 B/op\t    1688 allocs/op",
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
        "date": 1684778026372,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76729243059,
            "unit": "ns/op\t         0.3143 %cpu_avg/op\t        46.15 %cpu_peak/op\t        76.73 cpu_seconds/op\t2675884032 disk_bytes/op\t 3464288 B/op\t   72516 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26330355245,
            "unit": "ns/op\t         0.3585 %cpu_avg/op\t        33.33 %cpu_peak/op\t        26.33 cpu_seconds/op\t    102400 disk_bytes/op\t 1171040 B/op\t   25054 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 473085259,
            "unit": "ns/op\t         1.250 %cpu_avg/op\t        20.48 %cpu_peak/op\t         0.4730 cpu_seconds/op\t         0 disk_bytes/op\t   30778 B/op\t     502 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1731201518,
            "unit": "ns/op\t         0.7438 %cpu_avg/op\t        30.77 %cpu_peak/op\t         1.731 cpu_seconds/op\t   3620864 disk_bytes/op\t   86824 B/op\t    1708 allocs/op",
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
        "date": 1685123203259,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80157484526,
            "unit": "ns/op\t         0.3338 %cpu_avg/op\t        38.46 %cpu_peak/op\t        80.16 cpu_seconds/op\t2268446720 disk_bytes/op\t 3608384 B/op\t   75799 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26614761896,
            "unit": "ns/op\t         0.3859 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.61 cpu_seconds/op\t  16805888 disk_bytes/op\t 1185024 B/op\t   25377 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 479760416,
            "unit": "ns/op\t         0.3827 %cpu_avg/op\t        13.20 %cpu_peak/op\t         0.4797 cpu_seconds/op\t         0 disk_bytes/op\t   31197 B/op\t     506 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1744725310,
            "unit": "ns/op\t         0.4556 %cpu_avg/op\t        21.43 %cpu_peak/op\t         1.745 cpu_seconds/op\t  20402176 disk_bytes/op\t   88824 B/op\t    1734 allocs/op",
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
        "date": 1685135791222,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77201471699,
            "unit": "ns/op\t         0.3065 %cpu_avg/op\t        38.46 %cpu_peak/op\t        77.20 cpu_seconds/op\t2679218176 disk_bytes/op\t 3481416 B/op\t   72923 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26368098065,
            "unit": "ns/op\t         0.3973 %cpu_avg/op\t        35.71 %cpu_peak/op\t        26.37 cpu_seconds/op\t     36864 disk_bytes/op\t 1173992 B/op\t   25120 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 501939818,
            "unit": "ns/op\t         0.8292 %cpu_avg/op\t        20.19 %cpu_peak/op\t         0.5019 cpu_seconds/op\t         0 disk_bytes/op\t   32252 B/op\t     532 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1724326521,
            "unit": "ns/op\t         0.2015 %cpu_avg/op\t        12.50 %cpu_peak/op\t         1.724 cpu_seconds/op\t   3629056 disk_bytes/op\t   87256 B/op\t    1709 allocs/op",
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
        "date": 1685142590789,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 80360429874,
            "unit": "ns/op\t         0.2816 %cpu_avg/op\t        30.77 %cpu_peak/op\t        80.36 cpu_seconds/op\t2650001408 disk_bytes/op\t 3612344 B/op\t   75887 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26855717512,
            "unit": "ns/op\t         0.3419 %cpu_avg/op\t        26.67 %cpu_peak/op\t        26.86 cpu_seconds/op\t     28672 disk_bytes/op\t 1192432 B/op\t   25554 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 504544594,
            "unit": "ns/op\t         0.4616 %cpu_avg/op\t        16.03 %cpu_peak/op\t         0.5045 cpu_seconds/op\t         0 disk_bytes/op\t   32444 B/op\t     532 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1806292441,
            "unit": "ns/op\t         0.5455 %cpu_avg/op\t        20.00 %cpu_peak/op\t         1.806 cpu_seconds/op\t   3624960 disk_bytes/op\t   90328 B/op\t    1788 allocs/op",
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
        "date": 1685144112499,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77726591352,
            "unit": "ns/op\t         0.2917 %cpu_avg/op\t        28.57 %cpu_peak/op\t        77.73 cpu_seconds/op\t2669608960 disk_bytes/op\t 3504608 B/op\t   73494 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26929415690,
            "unit": "ns/op\t         0.3521 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.93 cpu_seconds/op\t    -28672 disk_bytes/op\t 1195176 B/op\t   25617 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 477516041,
            "unit": "ns/op\t         0.6160 %cpu_avg/op\t        18.49 %cpu_peak/op\t         0.4774 cpu_seconds/op\t         0 disk_bytes/op\t   31208 B/op\t     506 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1681717540,
            "unit": "ns/op\t         0.6273 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.682 cpu_seconds/op\t  20414464 disk_bytes/op\t   85032 B/op\t    1668 allocs/op",
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
        "date": 1685386102986,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78250137148,
            "unit": "ns/op\t         0.2865 %cpu_avg/op\t        36.36 %cpu_peak/op\t        78.25 cpu_seconds/op\t2684968960 disk_bytes/op\t 3528248 B/op\t   73975 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26619154297,
            "unit": "ns/op\t         0.4386 %cpu_avg/op\t        42.86 %cpu_peak/op\t        26.62 cpu_seconds/op\t   1138688 disk_bytes/op\t 1182560 B/op\t   25314 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 520641097,
            "unit": "ns/op\t         0.5463 %cpu_avg/op\t        18.11 %cpu_peak/op\t         0.5206 cpu_seconds/op\t         0 disk_bytes/op\t   33096 B/op\t     547 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1875628007,
            "unit": "ns/op\t         0.2033 %cpu_avg/op\t        15.38 %cpu_peak/op\t         1.876 cpu_seconds/op\t   3629056 disk_bytes/op\t   93728 B/op\t    1861 allocs/op",
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
        "date": 1685410103662,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77932675739,
            "unit": "ns/op\t         0.3058 %cpu_avg/op\t        30.77 %cpu_peak/op\t        77.93 cpu_seconds/op\t2683281408 disk_bytes/op\t 3513632 B/op\t   73683 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26150804535,
            "unit": "ns/op\t         0.3211 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.15 cpu_seconds/op\t     36864 disk_bytes/op\t 1164296 B/op\t   24903 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 527084720,
            "unit": "ns/op\t         0.5721 %cpu_avg/op\t        16.52 %cpu_peak/op\t         0.5270 cpu_seconds/op\t         0 disk_bytes/op\t   33364 B/op\t     552 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1658174189,
            "unit": "ns/op\t         0.3819 %cpu_avg/op\t        16.67 %cpu_peak/op\t         1.658 cpu_seconds/op\t   3629056 disk_bytes/op\t   84720 B/op\t    1651 allocs/op",
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
        "date": 1685490615250,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76979623777,
            "unit": "ns/op\t         0.3234 %cpu_avg/op\t        38.89 %cpu_peak/op\t        76.98 cpu_seconds/op\t2683699200 disk_bytes/op\t 3469352 B/op\t   72691 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26452550708,
            "unit": "ns/op\t         0.3286 %cpu_avg/op\t        41.67 %cpu_peak/op\t        26.45 cpu_seconds/op\t     90112 disk_bytes/op\t 1176456 B/op\t   25180 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 516074637,
            "unit": "ns/op\t         0.7464 %cpu_avg/op\t        21.59 %cpu_peak/op\t         0.5160 cpu_seconds/op\t     47104 disk_bytes/op\t   32460 B/op\t     541 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1782602319,
            "unit": "ns/op\t         0.5921 %cpu_avg/op\t        31.25 %cpu_peak/op\t         1.783 cpu_seconds/op\t   3600384 disk_bytes/op\t   89680 B/op\t    1771 allocs/op",
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
        "date": 1685552495407,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78324785526,
            "unit": "ns/op\t         0.3137 %cpu_avg/op\t        41.67 %cpu_peak/op\t        78.32 cpu_seconds/op\t2658701312 disk_bytes/op\t 3532272 B/op\t   74053 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26657102915,
            "unit": "ns/op\t         0.3101 %cpu_avg/op\t        33.33 %cpu_peak/op\t        26.66 cpu_seconds/op\t    139264 disk_bytes/op\t 1186720 B/op\t   25427 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 477613540,
            "unit": "ns/op\t         0.9761 %cpu_avg/op\t        18.42 %cpu_peak/op\t         0.4775 cpu_seconds/op\t         0 disk_bytes/op\t   31058 B/op\t     506 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1889095678,
            "unit": "ns/op\t         0.7712 %cpu_avg/op\t        35.29 %cpu_peak/op\t         1.889 cpu_seconds/op\t  20406272 disk_bytes/op\t   93616 B/op\t    1860 allocs/op",
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
        "date": 1685554216428,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81847441246,
            "unit": "ns/op\t         0.2686 %cpu_avg/op\t        28.57 %cpu_peak/op\t        81.85 cpu_seconds/op\t2669928448 disk_bytes/op\t 3678312 B/op\t   77374 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26280967481,
            "unit": "ns/op\t         0.3480 %cpu_avg/op\t        37.50 %cpu_peak/op\t        26.28 cpu_seconds/op\t     32768 disk_bytes/op\t 1168840 B/op\t   25002 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 479745787,
            "unit": "ns/op\t         0.4807 %cpu_avg/op\t        10.32 %cpu_peak/op\t         0.4797 cpu_seconds/op\t         0 disk_bytes/op\t   31104 B/op\t     509 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1791586539,
            "unit": "ns/op\t         0.6189 %cpu_avg/op\t        30.77 %cpu_peak/op\t         1.792 cpu_seconds/op\t   3633152 disk_bytes/op\t   89888 B/op\t    1778 allocs/op",
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
        "date": 1685567286882,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78044753025,
            "unit": "ns/op\t         0.3035 %cpu_avg/op\t        31.25 %cpu_peak/op\t        78.04 cpu_seconds/op\t2666549248 disk_bytes/op\t 3517384 B/op\t   73739 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26983411150,
            "unit": "ns/op\t         0.3540 %cpu_avg/op\t        42.86 %cpu_peak/op\t        26.98 cpu_seconds/op\t    -32768 disk_bytes/op\t 1196848 B/op\t   25649 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 505365942,
            "unit": "ns/op\t         0.8109 %cpu_avg/op\t        18.13 %cpu_peak/op\t         0.5053 cpu_seconds/op\t      6144 disk_bytes/op\t   32436 B/op\t     532 allocs/op",
            "extra": "2 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1863525755,
            "unit": "ns/op\t         0.6374 %cpu_avg/op\t        21.43 %cpu_peak/op\t         1.863 cpu_seconds/op\t  20389888 disk_bytes/op\t   94008 B/op\t    1852 allocs/op",
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
        "date": 1685573511055,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 77140821372,
            "unit": "ns/op\t         0.3337 %cpu_avg/op\t        35.71 %cpu_peak/op\t        77.14 cpu_seconds/op\t2675421184 disk_bytes/op\t 3483472 B/op\t   72941 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26283970946,
            "unit": "ns/op\t         0.2714 %cpu_avg/op\t        25.00 %cpu_peak/op\t        26.28 cpu_seconds/op\t -10625024 disk_bytes/op\t 1170376 B/op\t   25044 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 487330437,
            "unit": "ns/op\t         0.3330 %cpu_avg/op\t        12.73 %cpu_peak/op\t         0.4873 cpu_seconds/op\t         0 disk_bytes/op\t   31509 B/op\t     516 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1727172541,
            "unit": "ns/op\t         0.4462 %cpu_avg/op\t        16.67 %cpu_peak/op\t         1.727 cpu_seconds/op\t   3624960 disk_bytes/op\t   87264 B/op\t    1718 allocs/op",
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
        "date": 1685656573379,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76864045711,
            "unit": "ns/op\t         0.3269 %cpu_avg/op\t        41.18 %cpu_peak/op\t        76.86 cpu_seconds/op\t2673594368 disk_bytes/op\t 3467664 B/op\t   72611 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 26739927994,
            "unit": "ns/op\t         0.3784 %cpu_avg/op\t        28.57 %cpu_peak/op\t        26.74 cpu_seconds/op\t  16871424 disk_bytes/op\t 1186744 B/op\t   25409 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 512560363,
            "unit": "ns/op\t         0.8765 %cpu_avg/op\t        17.40 %cpu_peak/op\t         0.5125 cpu_seconds/op\t      4096 disk_bytes/op\t   32848 B/op\t     543 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1731290173,
            "unit": "ns/op\t         0.6568 %cpu_avg/op\t        28.57 %cpu_peak/op\t         1.731 cpu_seconds/op\t   3612672 disk_bytes/op\t   87280 B/op\t    1719 allocs/op",
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
        "date": 1685670267683,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78267552314,
            "unit": "ns/op\t         0.3261 %cpu_avg/op\t        37.50 %cpu_peak/op\t        78.27 cpu_seconds/op\t2101211136 disk_bytes/op\t 3532168 B/op\t   74047 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30483133652,
            "unit": "ns/op\t         0.3536 %cpu_avg/op\t        35.71 %cpu_peak/op\t        30.48 cpu_seconds/op\t     32768 disk_bytes/op\t 1370944 B/op\t   28960 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 470445160,
            "unit": "ns/op\t         0.8998 %cpu_avg/op\t        20.14 %cpu_peak/op\t         0.4704 cpu_seconds/op\t         0 disk_bytes/op\t   30909 B/op\t     500 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1799879464,
            "unit": "ns/op\t         0.2226 %cpu_avg/op\t        16.67 %cpu_peak/op\t         1.800 cpu_seconds/op\t   3633152 disk_bytes/op\t   90720 B/op\t    1780 allocs/op",
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
        "date": 1685670575384,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78221066768,
            "unit": "ns/op\t         0.2869 %cpu_avg/op\t        27.27 %cpu_peak/op\t        78.22 cpu_seconds/op\t2112815104 disk_bytes/op\t 3528224 B/op\t   73977 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30371159426,
            "unit": "ns/op\t         0.2692 %cpu_avg/op\t        30.77 %cpu_peak/op\t        30.37 cpu_seconds/op\t    -40960 disk_bytes/op\t 1365080 B/op\t   28844 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 471977039,
            "unit": "ns/op\t         0.3055 %cpu_avg/op\t         9.921 %cpu_peak/op\t         0.4719 cpu_seconds/op\t         0 disk_bytes/op\t   31168 B/op\t     504 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1718767994,
            "unit": "ns/op\t         0.3893 %cpu_avg/op\t        14.29 %cpu_peak/op\t         1.719 cpu_seconds/op\t   3629056 disk_bytes/op\t   87928 B/op\t    1713 allocs/op",
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
        "date": 1685683445150,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76435270695,
            "unit": "ns/op\t         0.3282 %cpu_avg/op\t        31.25 %cpu_peak/op\t        76.44 cpu_seconds/op\t2116497408 disk_bytes/op\t 3456792 B/op\t   72365 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30391865146,
            "unit": "ns/op\t         0.2756 %cpu_avg/op\t        26.67 %cpu_peak/op\t        30.39 cpu_seconds/op\t     28672 disk_bytes/op\t 1367800 B/op\t   28907 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 486775001,
            "unit": "ns/op\t         0.7570 %cpu_avg/op\t        15.73 %cpu_peak/op\t         0.4867 cpu_seconds/op\t      4096 disk_bytes/op\t   31426 B/op\t     513 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1915190850,
            "unit": "ns/op\t         0.1935 %cpu_avg/op\t        11.68 %cpu_peak/op\t         1.915 cpu_seconds/op\t  20455424 disk_bytes/op\t   94792 B/op\t    1888 allocs/op",
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
        "date": 1685728769600,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 76458188672,
            "unit": "ns/op\t         0.3118 %cpu_avg/op\t        33.33 %cpu_peak/op\t        76.46 cpu_seconds/op\t2098446336 disk_bytes/op\t 3457168 B/op\t   72364 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30371618658,
            "unit": "ns/op\t         0.3756 %cpu_avg/op\t        35.71 %cpu_peak/op\t        30.37 cpu_seconds/op\t     28672 disk_bytes/op\t 1367312 B/op\t   28884 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 483959404,
            "unit": "ns/op\t         0.7614 %cpu_avg/op\t        13.83 %cpu_peak/op\t         0.4839 cpu_seconds/op\t         0 disk_bytes/op\t   31490 B/op\t     513 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1861247694,
            "unit": "ns/op\t         0.4836 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.861 cpu_seconds/op\t   3612672 disk_bytes/op\t   93040 B/op\t    1840 allocs/op",
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
        "date": 1685728826014,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78473698338,
            "unit": "ns/op\t         0.3786 %cpu_avg/op\t        33.33 %cpu_peak/op\t        78.47 cpu_seconds/op\t2116689920 disk_bytes/op\t 3539336 B/op\t   74218 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30391433233,
            "unit": "ns/op\t         0.3260 %cpu_avg/op\t        28.57 %cpu_peak/op\t        30.39 cpu_seconds/op\t    -98304 disk_bytes/op\t 1366808 B/op\t   28882 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 475449385,
            "unit": "ns/op\t         0.6895 %cpu_avg/op\t        14.36 %cpu_peak/op\t         0.4754 cpu_seconds/op\t         0 disk_bytes/op\t   31154 B/op\t     504 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1816480685,
            "unit": "ns/op\t         0.3897 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.816 cpu_seconds/op\t   3624960 disk_bytes/op\t   91200 B/op\t    1799 allocs/op",
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
        "date": 1685735233130,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78772510543,
            "unit": "ns/op\t         0.2916 %cpu_avg/op\t        33.33 %cpu_peak/op\t        78.77 cpu_seconds/op\t2106068992 disk_bytes/op\t 3547496 B/op\t   74420 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30430170173,
            "unit": "ns/op\t         0.3645 %cpu_avg/op\t        36.36 %cpu_peak/op\t        30.43 cpu_seconds/op\t     98304 disk_bytes/op\t 1367552 B/op\t   28908 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 464135025,
            "unit": "ns/op\t         0.6372 %cpu_avg/op\t        18.11 %cpu_peak/op\t         0.4641 cpu_seconds/op\t         0 disk_bytes/op\t   30546 B/op\t     493 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1818250783,
            "unit": "ns/op\t         0.2647 %cpu_avg/op\t        18.75 %cpu_peak/op\t         1.818 cpu_seconds/op\t  20406272 disk_bytes/op\t   91888 B/op\t    1803 allocs/op",
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
        "date": 1685740329438,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79242620077,
            "unit": "ns/op\t         0.2779 %cpu_avg/op\t        33.33 %cpu_peak/op\t        79.24 cpu_seconds/op\t2115403776 disk_bytes/op\t 3573768 B/op\t   74964 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30377176948,
            "unit": "ns/op\t         0.3363 %cpu_avg/op\t        38.46 %cpu_peak/op\t        30.38 cpu_seconds/op\t   1208320 disk_bytes/op\t 1366376 B/op\t   28872 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 489812188,
            "unit": "ns/op\t         0.6355 %cpu_avg/op\t        19.26 %cpu_peak/op\t         0.4897 cpu_seconds/op\t         0 disk_bytes/op\t   31376 B/op\t     516 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1693800981,
            "unit": "ns/op\t         0.2330 %cpu_avg/op\t        12.49 %cpu_peak/op\t         1.694 cpu_seconds/op\t  20398080 disk_bytes/op\t   85904 B/op\t    1679 allocs/op",
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
        "date": 1685761963333,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 79638975345,
            "unit": "ns/op\t         0.3352 %cpu_avg/op\t       100.0 %cpu_peak/op\t        79.64 cpu_seconds/op\t2114957312 disk_bytes/op\t 3584912 B/op\t   75250 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30334246670,
            "unit": "ns/op\t         0.3818 %cpu_avg/op\t        42.86 %cpu_peak/op\t        30.33 cpu_seconds/op\t     32768 disk_bytes/op\t 1365440 B/op\t   28852 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 485822536,
            "unit": "ns/op\t         0.7284 %cpu_avg/op\t        18.92 %cpu_peak/op\t         0.4858 cpu_seconds/op\t         0 disk_bytes/op\t   31586 B/op\t     514 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1776112039,
            "unit": "ns/op\t         0.5964 %cpu_avg/op\t        27.78 %cpu_peak/op\t         1.776 cpu_seconds/op\t   3624960 disk_bytes/op\t   89008 B/op\t    1758 allocs/op",
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
        "date": 1685989145866,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81423658348,
            "unit": "ns/op\t         0.2942 %cpu_avg/op\t        35.71 %cpu_peak/op\t        81.42 cpu_seconds/op\t2114338816 disk_bytes/op\t 3659728 B/op\t   76971 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30308447837,
            "unit": "ns/op\t         0.3519 %cpu_avg/op\t        25.00 %cpu_peak/op\t        30.31 cpu_seconds/op\t  16736256 disk_bytes/op\t 1362144 B/op\t   28788 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 466280268,
            "unit": "ns/op\t         0.6222 %cpu_avg/op\t        10.26 %cpu_peak/op\t         0.4662 cpu_seconds/op\t         0 disk_bytes/op\t   30762 B/op\t     496 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1727063874,
            "unit": "ns/op\t         0.3898 %cpu_avg/op\t        21.43 %cpu_peak/op\t         1.727 cpu_seconds/op\t   3620864 disk_bytes/op\t   87864 B/op\t    1713 allocs/op",
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
        "date": 1686251348017,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 81338848612,
            "unit": "ns/op\t         0.2844 %cpu_avg/op\t        30.77 %cpu_peak/op\t        81.34 cpu_seconds/op\t2123223040 disk_bytes/op\t 3654704 B/op\t   76850 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30255206353,
            "unit": "ns/op\t         0.3782 %cpu_avg/op\t        36.36 %cpu_peak/op\t        30.26 cpu_seconds/op\t    -81920 disk_bytes/op\t 1359712 B/op\t   28744 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 479679550,
            "unit": "ns/op\t         0.7601 %cpu_avg/op\t        19.83 %cpu_peak/op\t         0.4796 cpu_seconds/op\t         0 disk_bytes/op\t   31349 B/op\t     510 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1875398435,
            "unit": "ns/op\t         0.4162 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.875 cpu_seconds/op\t   3629056 disk_bytes/op\t   92984 B/op\t    1849 allocs/op",
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
        "date": 1686591243417,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkAll/BenchmarkVMInit",
            "value": 78505406675,
            "unit": "ns/op\t         0.2727 %cpu_avg/op\t        30.00 %cpu_peak/op\t        78.51 cpu_seconds/op\t2118123520 disk_bytes/op\t 3540328 B/op\t   74272 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkVMStart",
            "value": 30455694746,
            "unit": "ns/op\t         0.3357 %cpu_avg/op\t        26.67 %cpu_peak/op\t        30.46 cpu_seconds/op\t    -28672 disk_bytes/op\t 1368368 B/op\t   28933 allocs/op",
            "extra": "1 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkContainerRun",
            "value": 488785889,
            "unit": "ns/op\t         0.7984 %cpu_avg/op\t        19.28 %cpu_peak/op\t         0.4887 cpu_seconds/op\t         0 disk_bytes/op\t   31370 B/op\t     516 allocs/op",
            "extra": "3 times\n12 procs"
          },
          {
            "name": "BenchmarkAll/BenchmarkImageBuild",
            "value": 1876639624,
            "unit": "ns/op\t         0.4241 %cpu_avg/op\t        23.08 %cpu_peak/op\t         1.877 cpu_seconds/op\t   3616768 disk_bytes/op\t   93808 B/op\t    1859 allocs/op",
            "extra": "1 times\n12 procs"
          }
        ]
      }
    ]
  }
}