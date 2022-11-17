# Finch CLI

## Local Development

This section describes how one can develop Finch CLI locally on macOS, build it, and then run it to test out the changes. The design ensures that the local development environment is isolated from the homebrew installation (i.e., we should not need to run `make install` to do local development).

### Dependency Installation

This section installs the dependencies need to build and run `finch`. `finch` leverages several other pieces of technology to provide the platform elements which include [lima](https://github.com/lima-vm/lima), [qemu](https://github.com/qemu/qemu) and others. The application wraps numerous pieces of technology to provide one cohesive application.

It only needs to be done when the repository is just cloned.

```sh
make
```

### Build

After you make some code changes, run the following command under the repository root to build an updated binary. It will generate a binary under `./_output/bin/finch`.

```sh
make finch
```

### Run

Spin up the VM if you haven't. Note that if it's your time to run `finch vm init`, it may require you to enter your root password because it needs to configure [socket-vmnet](https://github.com/lima-vm/socket_vmnet), which need to be installed to privileged locations.

```sh
./_output/bin/finch vm init
```

Now you can run whatever command you want to test:

```sh
./_output/bin/finch ...
```

#### Config

A config file at `$USER/.finch/finch.yaml` will be generated on first-run. Currently, this config file has options for system resource limits for the VM that is used to run containers. These default limits are generated dynamically based on the resources available on the host system, but can be changed by manually editing the config file.

Currently, the options are:

- CPUs [int]: the amount of cores to dedicate to the VM (must be greater than 0, warning after exceeding max availbe on host)
- Memory [string]: the amount of RAM to dedicate to the VM (must be greater than 0, warning after exceeding max availbe on host)

For a full list of configuration options, check [the struct here](pkg/config/config.go#L25).

An example `config.yaml` looks like this:

```yaml
cpus: 4
memory: 4GiB
```

### Unit Testing

To run unit test locally, please run `make test-unit`. Please make sure to run the unit tests before pushing the changes.

Ideally each go file should have a test file ending with `_test.go`, and we should have as much test coverage as we can.

To check unit test coverage, run `make coverage` under root finch-cli root directory.

### E2E Testing

Run these steps at the first time of running e2e tests

VM instance is not expected to exist before running e2e tests, please make sure to remove it before going into next step:
```sh
./_output/bin/finch vm stop
./_output/bin/finch vm remove
```
To run e2e test locally, please run `make test-e2e`. Please make sure to run the e2e tests or add new e2e tests before pushing the changes.
