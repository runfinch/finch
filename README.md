<!-- markdownlint-disable first-line-h1 no-inline-html -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_White.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_Black.svg">
  <img alt="Finch logo" width=40% height=auto src="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_Black.svg">
</picture>

## Hello, Finch
<!-- markdownlint-restore -->

[![PkgGoDev](https://pkg.go.dev/badge/github.com/runfinch/finch)](https://pkg.go.dev/github.com/runfinch/finch)
[![Go Report Card](https://goreportcard.com/badge/github.com/runfinch/finch)](https://goreportcard.com/report/github.com/runfinch/finch)
[![CI](https://github.com/runfinch/finch/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/runfinch/finch/actions/workflows/ci.yaml)
[![Static Badge](https://img.shields.io/badge/Website-Benchmarks-blue)](https://runfinch.github.io/finch/dev/bench/)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/runfinch/finch?logo=GitHub)](https://github.com/runfinch/finch/releases)
[![GitHub all releases](https://img.shields.io/github/downloads/runfinch/finch/total?label=all%20time%20downloads)](https://github.com/runfinch/finch/releases/)

Finch is an open source client for container development. Its simple installer provides a minimal native client along with an opinionated distribution of other open source components. Rather than creating even more options to reason about and choose from, Finch aims to help promote other projects by making it easy to install and use them, while offering a simple native client to tie it all together.

Finch provides a simple client which is integrated with [nerdctl](https://github.com/containerd/nerdctl). For the core build/run/push/pull commands, Finch depends upon nerdctl to handle the heavy lifting. It works with [containerd](https://containerd.io) for container management, and with [BuildKit](https://github.com/moby/buildkit) to handle Open Container Initiative (OCI) image builds. These components are all pulled together and run within a virtual machine managed by [Lima](https://github.com/lima-vm/lima).

With Finch, you can leverage these existing projects without chasing down all the details. Just install and start running and building your containers!

## Getting Started with Finch on macOS

Finch's website ([runfinch.com](https://runfinch.com/)) provides full documentation for Finch. To help you get started see the following pages:

* [Installing Finch](https://runfinch.com/docs/managing-finch/macos/installation/)
* [Building your first container image](https://runfinch.com/docs/getting-started/building-images/)
* [Finch CLI Reference](https://runfinch.com/docs/cli-reference/finch_build/)
* [Finch Configuration Reference](https://runfinch.com/docs/configuration-reference/)

### Finch and other tools

The installer will install Finch and its dependencies in its own area of your system, and it can happily coexist with other container development tools. Finch is a new project and not meant to be a direct drop-in replacement for other tools. Therefore, we don't recommend aliasing or linking other command names to `finch`.

## What's next?

We are excited to start this project in the open, and we'd love to hear from you. If you have ideas or find bugs please open an issue. Please feel free to start a discussion if you have something you'd like to propose or brainstorm. Pull requests are welcome, as well! See the [CONTRIBUTING](CONTRIBUTING.md) doc for more info on contributing, and the path to reviewer and maintainer roles for those interested.

As the project gets a bit of momentum, maintainers will start creating milestones and look to establish a regular release cadence. In time, we'll also start to curate a public roadmap from the community ideas and issues that roll in. We already have some ideas, including:

* More minimal guest OS footprint
* Windows client support
* Linux client support
* Formal extensibility
* Continued performance improvement, ongoing
* Stability and usability improvement, ongoing

If you'd like to chat with us, please find us in the `#finch` channel on the [CNCF slack](https://cloud-native.slack.com).
