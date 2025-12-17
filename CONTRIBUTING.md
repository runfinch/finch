# Contributing Guide

- [Contributing Guide](#contributing-guide)
  - [Participating in the Project](#participating-in-the-project)
    - [Community Participant](#community-participant)
    - [Contributor](#contributor)
    - [Maintainer](#maintainer)
  - [Ways to Contribute](#ways-to-contribute)
  - [Find an Issue](#find-an-issue)
  - [Ask for Help](#ask-for-help)
  - [Pull Request Lifecycle](#pull-request-lifecycle)
  - [Development Environment Setup](#development-environment-setup)
    - [Linter](#linter)
    - [Build](#build)
    - [Unit Testing](#unit-testing)
    - [E2E Testing](#e2e-testing)
  - [Commits](#commits)
    - [Conventional Commit Messages](#conventional-commit-messages)
    - [Sign Your Commits with DCO](#sign-your-commits-with-dco)
  - [Pull Request Checklist](#pull-request-checklist)
    - [Testing](#testing)
      - [Unit Testing - Parallel by Default](#unit-testing---parallel-by-default)
      - [E2E Testing Guidelines](#e2e-testing-guidelines)
    - [Go File Naming](#go-file-naming)

Welcome! We are glad that you want to contribute to our project! 💖

As you get started, you are in the best position to give us feedback on areas of
our project that we need help with including:

- Problems found during setting up a new developer environment
- Gaps in our Quickstart Guide or documentation
- Bugs in our automation scripts

If anything doesn't make sense, or doesn't work when you run it, please open a
bug report and let us know!

Thanks to the maintainers of the [CNCF Project Template Repository](https://github.com/cncf/project-template) for the great work they have done.

## Participating in the Project

There are a number of ways to participate in this project. As the project evolves and grows, we will define a more formal governance model. For now, this document describes various ways community members might participate.

### Community Participant

A Community Participant engages with the project and its community, contributing their time, thoughts, etc. Community participants are usually users who have stopped being anonymous and started being active in project discussions.

### Contributor

A Contributor contributes directly to the project. Contributions need not be code. People at the Contributor level may be new contributors, or they may only contribute occasionally.

### Maintainer

Maintainers are established contributors who are responsible for the entire project. As such, they have the ability to approve PRs against any area of the project, and are expected to participate in making decisions about the strategy and priorities of the project.

## Ways to Contribute

We welcome many different types of contributions including:

- New features
- Builds, CI/CD
- Bug fixes
- Documentation
- Issue Triage
- Communications / Social Media / Blog Posts
- Release management

## Find an Issue

We have good first issues for new contributors and help wanted issues suitable
for any contributor. [good first issue](TODO) has extra information to
help you make your first contribution. [help wanted](TODO) are issues
suitable for someone who isn't a core maintainer and is good to move onto after
your first pull request.

Sometimes there won’t be any issues with these labels. That’s ok! There is
likely still something for you to work on. If you want to contribute but you
don’t know where to start or have an idea, feel free to open a new issue in Github for brainstorming.

Once you see an issue that you'd like to work on, please post a comment saying
that you want to work on it. Something like "I want to work on this" is fine.

## Ask for Help

The best way to reach us with a question when contributing is to ask on the original github issue.

## Pull Request Lifecycle

Generally a comment should be resolved by the one who leaves the comment.

For PR authors, if a comment is not left by you, please do not resolve it even after applying the changes suggested by it. This is to make sure that the changes do address the concern of the PR reviewer as there could be misunderstanding between PR authors and PR reviewers. However, if the PR reviewer is not responding to the comment for whatever reason, the project maintainers can help resolve the comment to unblock the PR author.

For PR reviewers, after a comment left by you is acted upon, it is encouraged to either reply to it or resolve it in a timely manner to unblock the PR author because all the comments are required to be resolved before a PR can be merged. For project maintainers, please target handling unresolved comments within 2 working days.

We feel spelling these norms out is better than assuming them, and we all acknowledge life happens and these are guidelines, not strict rules.

### After Merge

After a PR is merged, please check if the [corresponding build](https://github.com/runfinch/finch/blob/1da659f228458f69d4adb67b6d1695477b1ae4d4/.github/workflows/ci.yaml#L7) is passing. If not, please create a new PR to revert the problematic PR. We should do that before fixing the root cause so that we can unblock other PRs first. However, if the failure seems unrelated to your PR, please check if there's an existing issue regarding the flakiness ([example](https://github.com/runfinch/finch/issues/31)). If there's not, feel free to create one to report the newly found flakiness.

This is needed because we use `Loose` instead of `Strict` regarding [branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging). In other words, if there is a bug that only exists after multiple PRs are merged, then there's a chance for us to have the bug in `main`: PR1's checks passed → PR2's checks passed → Merge PR2 → Now PR1 becomes outdated, and CI would fail if we update the PR branch and run the checks again, but since we're using `Loose`, we can just merge it → bug in `main`. Given the deficiency mentioned above, we still want to go with `Loose` because it streamlines developer UX tremendously: if we use `Strict`, then after a PR is merged, all the other open PRs will need to merge the latest `main` into the PR branches before they can be merged, which is not scalable.

## Development Environment Setup

This section describes how one can develop Finch CLI locally, build it, and then run it to test out the changes. The design ensures that the local development environment is isolated from the installation (i.e., we should not need to run `make install` to do local development).

### Linter

We use [golangci-lint](https://github.com/golangci/golangci-lint).

To integrate it into your IDE, please check out the [official documentation](https://golangci-lint.run/welcome/integrations/).

For more details, see [`.golangci.yaml`](./.golangci.yaml) and the `lint` target in [`Makefile`](./Makefile).

### Install dependencies

#### macOS

Please note that this section uses [Homebrew](https://brew.sh/) to install dependencies, which has to be installed before continuing to the next steps.

Before building Finch, install dependencies required to build the project binaries using Homebrew:

```sh
brew install go lz4 automake autoconf libtool yq
```

Note that you may need to add the following to the `.profile` file of your shell if `which libtool` does not return the one installed by Homebrew. The one that comes with macOS is too old for use with Finch.

```sh
export PATH="/opt/homebrew/opt/libtool/libexec/gnubin:$PATH"
```

#### Windows

The easiest way to install dependencies on Windows is through the use of `winget`, which comes [pre-installed on modern versions of Windows](https://learn.microsoft.com/en-us/windows/package-manager/winget/#install-winget). Follow the instructions in the link if typing `winget` in your Terminal does not work out of the box.

After ensuring `winget` is working, running the following command will setup all of the pre-requisites needed to build Finch on Windows:

```powershell
winget install -e --id GnuWin32.Make 
winget install -e --id Git.Git
winget install -e --id=GoLang.Go
winget install -e --id MikeFarah.yq
```

In order to actually run Finch on Windows, you will need to also configure WSL 2 ([the runfinch.com website has detailed instructions](https://runfinch.com/docs/managing-finch/windows/installation/)):

```powershell
wsl --update
wsl --install Ubuntu
```

#### Linux

Please note that this section does not have exhaustive instructions for every single Linux distribution and package manager, but it does have a "generic" installation method. More distribution specific contributions are welcome.

##### Amazon Linux 2023

```sh
sudo yum install golang zlib-static containerd nerdctl cni-plugins iptables
```

1. `golang`: used to build go packages
1. `zlib-static`: used to build soci, as part of the included [finch.spec file in ./contrib/packaging/rpm](./contrib/packaging/rpm/finch.spec)
1. `containerd`, `nerdctl`, `cni-plugins`, `iptables`: runtime dependencies

##### Generic

1. Install go [following instructions here](https://go.dev/doc/install)
1. Install the latest [nerdctl-full bundle from GitHub](https://github.com/containerd/nerdctl/releases)
1. If building SOCI, [follow the instructions here](https://github.com/awslabs/soci-snapshotter/blob/main/docs/build.md) to setup the dependencies
1. Create the expected directory structure by inspecting the [finch.spec file](./contrib/packaging/rpm/finch.spec)

### Build

Clone the repo and make sure to include the submodules by adding `--recurse-submodules`. For example:

```shell
git clone --recurse-submodules https://github.com/runfinch/finch.git
```

If the repo is already cloned, but the submodules are not pulled yet, the following command can be run to pull all of the submodules without re-cloning:

```shell
git submodule update --init --recursive
```

If you are building on Windows from a fork of finch, you may need to fetch upstream tags in order to build:

```shell
git fetch <upstream finch remote name> --tags
```

After cloning the repo, run the following command to make subsequent `git pull` to also update submodules to the versions specified in the upstream branch.

```shell
git config submodule.recurse true
```

Then run `make` to build the binary. The binary in `_output` can be directly used. E.g. initializing the vm and display the version

```sh
./_output/bin/finch vm init
./_output/bin/finch version
```

#### macOS/Windows

You can run `make install` to make finch binary globally accessible.

#### Amazon Linux

You can run `./contrib/packaging/rpm/build.sh --local` to install Finch globally.

NOTE: If your build environment experiences issues with downloading dependencies from the Go proxy servers, then you may want to set the environment variable `export GOPROXY=direct`

### Unit Testing

To run unit test locally, please run `make test-unit`. Please make sure to run the unit tests before pushing the changes.

Ideally each go file should have a test file ending with `_test.go`, and we should have as much test coverage as we can.

To check unit test coverage, run `make coverage` under root finch-cli root directory.

### E2E Testing

To run e2e tests locally, please run `make test-e2e`. Make sure to run the e2e tests or add new e2e tests before pushing changes.

#### macOS/Windows

The VM instance is not expected to exist before running e2e tests, please make sure to remove it before going into next step:

```sh
./_output/bin/finch vm stop
./_output/bin/finch vm remove
```

### Setting Up Testing Infrastructure

If you want to set up your own testing infrastructure in your fork (including self-hosted runners and S3 buckets), please refer to the [runfinch/infrastructure repository](https://github.com/runfinch/infrastructure) for detailed setup instructions.

## Commits

### Conventional Commit Messages

The Finch project enforces commits to be written with [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/) in order to be merged. Conventional commits
provide a simple set of types to assign commits based on the intention of the commit. A full list of allowed types can be found
in the [conventional-commit-types repository](https://github.com/commitizen/conventional-commit-types/blob/master/index.json).

For example:

```text
fix: my fix message

This is the body of my fix commit
```

Conventional commits can be given more granularity when written in the format of `<type>(<scope>):<message>`.
When authoring commits that target a specific platform (e.g. macOS vs. Windows), we require that scope to be
the name of the platform, e.g.:

```text
feat(Windows): my Windows feature
```

or

```text
fix(macOS): bug fix specific to macOS
```

Otherwise, the `<scope>` is optional.

### Sign Your Commits with DCO

Licensing is important to open source projects. It provides some assurances that
the software will continue to be available based under the terms that the
author(s) desired. We require that contributors sign off on commits submitted to
our project's repositories. The [Developer Certificate of Origin
(DCO)](https://probot.github.io/apps/dco/) is a way to certify that you wrote and
have the right to contribute the code you are submitting to the project.

You sign-off by adding the following to your commit messages. Your sign-off must
match the git user and email associated with the commit.

```text
This is my commit message

Signed-off-by: Your Name <your.name@example.com>
```

Git has a `-s` command line option to do this automatically:

```sh
git commit -s -m 'This is my commit message'
```

If you forgot to do this and have not yet pushed your changes to the remote
repository, you can amend your commit with the sign-off by running

```sh
git commit --amend -s --no-edit
```

## Pull Request Checklist

When you submit your pull request, or you push new commits to it, our automated systems will run some checks on your new code. We require that your pull request passes these checks, and you can run the checks locally to iterate faster (you may need to [configure the environment](#development-environment-setup) first):

```sh
make test-unit
make test-e2e
make lint
```

We also have more criteria than just that before we can accept and merge it. We recommend that you check the following things locally
before you submit your code:

### Documentation

If your change adds any new commands or parameters (for example, if adding a new `--example` flag to `finch vm stop`), ensure that `./_output/bin/finch gen-docs generate -p ./docs/cmd` is run and the result is added to a commit in the PR branch. [PR #938](https://github.com/runfinch/finch/pull/938) is a good example of when documentation had to be added for a new command parameter. Another case when this may happen is when a nerdctl command or parameter is modified.

### Testing

#### Unit Testing - Parallel by Default

`make test-unit`

For each unit test case (i.e., in both `TestXXX` and the function passed to `t.Run`), `t.Parallel` should be added by default. It should only be skipped under special situations (e.g., `T.Setenv` is used in that test).

Rationale:

- Each unit test case should be independent from each other, so they should be able to be executed in parallel.
- Adding a `t.Parallel` is not much effort as all the underlying details are handled by Go std lib.
- `t.Parallel` helps us ensure that the test cases are truly independent from each other.
- The running time can (theoretically) only go down.

Keeping a good unit test coverage will be part of pull request review. You can run `make coverage` to self-check the coverage.

#### E2E Testing Guidelines

`make test-e2e`

See `test-e2e` section in [`Makefile`](./Makefile) for more reference.

In this repository, there are two suites of E2E tests: `container` tests and `vm` tests.

If the e2e test scenarios you are going to contribute

- are in generic container development workflow
- can be shared by finch-core by replacing test subject from "finch" to "limactl ..."
- E.g.: pull, push, build, run, etc.

they belong with the `container` tests. Implement them in common-tests repo and then import them in [`./e2e/container/container_test.go`](./e2e/container/container_test.go) in finch CLI and `./e2e/e2e_test.go` in finch-core. The detailed flow can be found [here](https://github.com/runfinch/common-tests#sync-between-tests-and-code).

Otherwise, it means that the scenarios are specific to finch CLI (e.g., version, VM lifecycle, etc.), and belong with the `vm` tests. You should implement them under `./e2e/vm/` (e.g., `./e2e/vm/version_test.go`) and import them in `./e2e/vm/vm_test.go`.

If you want to run just one of the two suites, append the suite name to the end of the Makefile target:

```sh
make test-e2e-container
make test-e2e-vm
```

To save time while developing e2e tests, use the [`Focus`](https://onsi.github.io/ginkgo/#focused-specs) decorator while running tests, but be sure to remove it before PR-ing your changes.

### Go File Naming

Keep file names to one word if possible (e.g., avoid stuttering with package name: prefer `thing/factory.go` over `thing/thing_factory.go`). If there have to be more than one words, use underscores as separators. Do not use hyphens or camelCase.

Rationale: It's more readable (i.e., `complicateddistirbutedsystem` vs `complicated_distributed_system`). Furthermore, the practical reason to avoid underscores as separators is that the suffix may later become either an OS or an architecture, but we think that the potential risk is outweighed by the readability gain.

To add more context, there are some [public discussions](https://github.com/golang/go/issues/36060#issue-535213527) on this, but there is no consensus yet.

## Merge dependabot PRs

If you have write access to the repository, and all the checks have passed, feel free to merge the PR.

## Release Process

We use [`release-please`](.github/workflows/release-please.yaml) to automate the release process.

Detailed steps:

1. [Restrict who can push to matching branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#restrict-who-can-push-to-matching-branches) to only you in [the branch protection rule of `main`](https://github.com/runfinch/finch/settings/branch_protection_rules/30961049).
1. Ensure that all the checks are passing for the latest commit on `main`. This is needed because `main` could contain a bug (more info: `Loose` branch protection in [After Merge](#after-merge)), while we want no bugs in an official release.
1. Merge the `release-please` PR ([example](https://github.com/runfinch/finch/pull/17)).
1. Remove the pusher restriction in the first step.
