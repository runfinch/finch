<!-- markdownlint-disable first-line-h1 no-inline-html -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_White.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_Black.svg">
  <img alt="Finch logo" width=40% height=auto src="https://raw.githubusercontent.com/runfinch/finch/main/contrib/logo/Finch_Horizontal_Black.svg">
</picture>

## Hello, Finch
<!-- markdownlint-restore -->

Finch is an open source client for container development. Its simple installer provides a minimal native client along with an opinionated distribution of other open source components. Rather than creating even more options to reason about and choose from, Finch aims to help promote other projects by making it easy to install and use them, while offering a simple native client to tie it all together.

Finch provides a simple client which is integrated with [nerdctl](https://github.com/containerd/nerdctl). For the core build/run/push/pull commands, Finch depends upon nerdctl to handle the heavy lifting. It works with [containerd](https://containerd.io) for container management, and with [BuildKit](https://github.com/moby/buildkit) to handle Open Container Initiative (OCI) image builds. These components are all pulled together and run within a virtual machine managed by [Lima](https://github.com/lima-vm/lima).

With Finch, you can leverage these existing projects without chasing down all the details. Just install and start running and building your containers!

## Getting Started with Finch on macOS

The project will in the near future have a more full set of documentation and tutorials. For now let's get started here. As mentioned above, `finch` integrates with `nerdctl`. While Finch doesn't implement 100% of the upstream commands, the most common commands are in place and working. The [nerdctl Command Reference](https://github.com/containerd/nerdctl#command-reference) can be relied upon as a starting point for documentation.

### Installing Finch

To get started with Finch on macOS, the prerequisites are:

* macOS catalina (10.15) or higher, newer versions are tested on a best-effort basis
* Intel or Apple Silicon M1 system for macOS
* Recommended minimum configuration is 2 CPU, 4 GB memory

Download a release package for your architecture from the [project's GitHub releases](https://github.com/runfinch/finch/releases) page, and once downloaded double click and follow the directions.

#### Installing Finch via [brew](https://brew.sh/)

```sh
brew install --cask finch
```

Once the installation is complete, `finch vm init` is required once to set up the underlying system. This initial setup usually takes about a minute.

```sh
finch vm init
INFO[0000] Initializing and starting Finch virtual machine...
..
INFO[0067] Finch virtual machine started successfully
```

### Running containers and building images

You can now run a test container. If you're familiar with container development, you can use the `run` command as you'd expect.

```sh
finch run --rm public.ecr.aws/finch/hello-finch
```

If you're new to containers, that is so exciting! Give the command above a try after you've installed and initialized Finch. The `run` command pulls an image locally if it's not already present, and then creates and runs a container for you. Note the handy `--rm` option will delete the container instance once it's done executing.

To build an image, try a quick example from the finch client repository.

```sh
git clone https://github.com/runfinch/finch.git
cd finch/contrib/hello-finch
finch build . -t hello-finch
..
```

Again if you're new to containers, you just built a container image. Nice!

The `build` command will work with the build system (the Moby Project's BuildKit in Finch's case) to create an OCI image from a Dockerfile, which is a special sort of recipe for creating an image. This image can then be used to create containers. You can see your locally pulled and built images with the `finch images` command.

Finch makes it easy to build and run containers across architectures with the `--platform` option. When used with the `run` command, it will create a container using the specified architecture. For example, on an Apple Silicon M1 system, `--platform=amd64` will create a container and run processes within it using an x86-64 architecture.

```sh
uname -ms
Darwin arm64

finch run --rm --platform=amd64 public.ecr.aws/amazonlinux/amazonlinux uname -ms
Linux x86_64
```

You can also use the `--platform` option with builds, making it easy to create multiplatform images.

## Working with Finch

We have plans to create some more documentation and tutorials here geared toward users who are new to containers, as well as some tips and tricks for more advanced users. For now, if you're ready to kick the tires, please do! You'll find most commands and options you're familiar with from other tools to present, and as you'd expect (or, as they are [documented upstream with nerdctl](https://github.com/containerd/nerdctl#command-reference)). Most of the commands we use every day are covered, including volume and network management as well as Compose support. If Finch doesn't do something you want it to, please consider opening an Issue or a Pull Request.

### Finch and other tools

The installer will install Finch and its dependencies in its own area of your system, and it can happily coexist with other container development tools. Finch is a new project and not meant to be a direct drop-in replacement for other tools. Therefore, we don't recommend aliasing or linking other command names to `finch`.

### Configuration

Finch has a simple and extensible configuration. A configuration file at `${HOME}/.finch/finch.yaml` will be generated on first run. Currently, this config file has options for system resource limits for the underlying virtual machine. These default limits are generated dynamically based on the resources available on the host system, but can be changed by manually editing the config file.

For a full list of configuration options, check [the struct here](pkg/config/config.go#L30).

An example `finch.yaml` looks like this:

```yaml
# cpus: the amount of vCPU to dedicate to the virtual machine. (required)
cpus: 4
# memory: the amount of memory to dedicate to the virtual machine. (required)
memory: 4GiB
# creds_helpers: a list of credential helpers that will be installed and configured automatically. 
# Supported Credential Helpers List: 
# - ecr-login https://github.com/awslabs/amazon-ecr-credential-helper
# Once the option has been set the credential helper will be installed on either finch vm init or finch vm start. 
# The binary will be downloaded on the host machine and a config.json will be created and populated inside the ~/.finch/ folder 
# if it doesn't already exist. If it already exists, the value of credsStore will be overwritten. 
# To opt out of using the credential helper, remove the value from the credsStore parameter of config.json 
# and remove the creds_helper value from finch.yaml. 
# To completely remove the credential helper, either remove the binary from ~/.finch/creds-helpers or remove the creds-helpers
# folder entirely. (optional)
creds_helpers: 
  - ecr-login
# additional_directories: the work directories that are not supported by default. In macOS, only home directory is supported by default. 
# For example, if you want to mount a directory into a container, and that directory is not under your home directory, 
# then you'll need to specify this field to add that directory or any ascendant of it as a work directory. (optional)
additional_directories:
  # the path of each additional directory.
  - path: /Volumes
# vmType (Experimental): sets which Hypervisor to use to launch the VM. (optional)
# Only takes effect when a new VM is launched (only on vm init).
# One of: "qemu", "vz".
#   - "qemu" (default): Uses QEMU as the Hypervisor.
#   - "vz": Uses Virtualization.framework as the Hypervisor.
vmType: "qemu"
# rosetta (Experimental): sets whether to enable Rosetta as the binfmt_misc handler inside the VM. (optional)
# Only takes effect when a new VM is launched (only on vm init).
# Only available when using vmType "vz" on Apple Silicon running macOS 13+.
# If true, also sets vmType to "vz".
rosetta: false
```

### FAQ

This section contains frequently-asked questions regarding working with Finch.

#### How to shell into the VM?

```sh
LIMA_HOME=/Applications/Finch/lima/data /Applications/Finch/lima/bin/limactl shell finch
```

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
