# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

GO ?= go
# Files are installed under $(DESTDIR)/$(PREFIX)
PREFIX ?= $(CURDIR)/_output
DEST := $(shell echo "$(DESTDIR)/$(PREFIX)" | sed 's:///*:/:g; s://*$$::')
BINDIR ?= /usr/local/bin
OUTDIR ?= $(CURDIR)/_output
OS_OUTDIR ?= $(OUTDIR)/os

OUTPUT_DIRECTORIES := $(OUTDIR) $(OS_OUTDIR)
$(OUTPUT_DIRECTORIES):
	@mkdir -p $@

PACKAGE := github.com/runfinch/finch
BINARYNAME := finch
LIMA_FILENAME := lima
LIMA_EXTENSION := .tar.gz

# Created by the CLI after installation, only used in uninstall step
LIMA_VDE_SUDOERS_FILE := /etc/sudoers.d/finch-lima
# Final installation prefix for vde created by CLI after installation, only used in uninstall step
VDE_INSTALL ?= /opt/finch
ARCH ?= $(shell uname -m)
SUPPORTED_ARCH = false
LICENSEDIR := $(OUTDIR)/license-files
VERSION ?= $(shell git describe --match 'v[0-9]*' --dirty='.modified' --always --tags)
GITCOMMIT ?= $(shell git rev-parse HEAD)$(shell test -z "$(git status --porcelain)" || echo .m)
LDFLAGS = "-w -X $(PACKAGE)/pkg/version.Version=$(VERSION) -X $(PACKAGE)/pkg/version.GitCommit=$(GITCOMMIT)"
MIN_MACOS_VERSION ?= 11.0

GOOS ?= $(shell $(GO) env GOOS)
ifeq ($(GOOS),windows)
BINARYNAME := $(addsuffix .exe, $(BINARYNAME))
endif

.DEFAULT_GOAL := all

INSTALLED ?= false
REGISTRY ?= ""
ifneq (,$(findstring arm64,$(ARCH)))
	SUPPORTED_ARCH = true
	LIMA_ARCH = aarch64
else ifneq (,$(findstring x86_64,$(ARCH)))
	SUPPORTED_ARCH = true
	LIMA_ARCH = x86_64
endif

.PHONY: arch-test
arch-test:
	@if [ $(SUPPORTED_ARCH) != "true" ]; then echo "Unsupported architecture: $(ARCH)"; exit "1"; fi

# OS will be set on Windows (to Windows_NT), and undefined otherwise unless
# it is explicity specified on the commandline.
# On Unix (or, not-Windows), query OS and set it using uname -s
BUILD_OS ?= $(OS)
ifeq ($(BUILD_OS),)
BUILD_OS = $(shell uname -s)
endif

FINCH_CORE_DIR := $(CURDIR)/deps/finch-core

remote-all: arch-test finch install.finch-core-dependencies finch.yaml networks.yaml config.yaml

ifeq ($(BUILD_OS), Windows_NT)
include Makefile.windows
all: remote-all
else ifeq ($(BUILD_OS), Darwin)
include Makefile.darwin
all: remote-all
else ifeq ($(BUILD_OS), Linux)
# on Linux, we only need to build "finch"
all: finch
endif

.PHONY: install.finch-core-dependencies
install.finch-core-dependencies:
	OUTDIR=$(OUTDIR) ARCH=$(ARCH) "$(MAKE)" -C $(FINCH_CORE_DIR) install.dependencies

.PHONY: finch.yaml
finch.yaml: $(OS_OUTDIR)/finch.yaml

.PHONY: networks.yaml
networks.yaml:
	# networking configuration
	mkdir -p $(OUTDIR)/lima/data/_config/
	cp networks.yaml $(OUTDIR)/lima/data/_config/

.PHONY: config.yaml
config.yaml:
	cp config.yaml $(OUTDIR)/config.yaml

.PHONY: copy
copy:
	mkdir -p $(DEST)
	(cd _output && tar -cf - * | tar -xvf - -C $(DEST) )

.PHONY: install
install: copy
	sudo ln -sf $(DEST)/bin/finch "$(BINDIR)/finch"

uninstall.finch:
	@test -f "$(BINDIR)/$(BINARYNAME)" || echo "finch not found in $(BINDIR) prefix"
	if [ "$$(readlink "$(BINDIR)/$(BINARYNAME)")" = "$(DEST)/bin/$(BINARYNAME)" ]; then sudo rm "$(BINDIR)/$(BINARYNAME)"; fi
	-@rm -rf $(DEST)/bin 2>/dev/null || true
	-@rm -rf $(DEST)/lima 2>/dev/null || true
	-@rm -rf $(DEST)/os 2>/dev/null || true
	-@rm -rf $(DEST)/dependencies 2>/dev/null || true

.PHONY: uninstall.vde
uninstall.vde:
	sudo rm -rf $(VDE_INSTALL)
	sudo rm -rf $(LIMA_VDE_SUDOERS_FILE)

.PHONY: uninstall
uninstall: uninstall.finch

.PHONY: finch
ifeq ($(GOOS),windows)
finch: finch-windows finch-all
else ifeq ($(GOOS),darwin)
finch: finch-macos
else
finch: finch-linux
endif

finch-windows:
	GOBIN=$(GOBIN) go install github.com/tc-hib/go-winres
	$(GO) generate cmd/finch/main_windows.go

finch-macos: export CGO_CFLAGS := -mmacosx-version-min=$(MIN_MACOS_VERSION)
finch-macos: export CGO_LDFLAGS := -mmacosx-version-min=$(MIN_MACOS_VERSION)
finch-macos: finch-unix

finch-unix: finch-all

finch-linux: finch-all

ifneq ($(STATIC),)
finch-all: export CGO_ENABLED=0
endif
finch-all:
	$(GO) build -ldflags $(LDFLAGS) -tags "$(GO_BUILD_TAGS)" -o $(OUTDIR)/bin/$(BINARYNAME) $(PACKAGE)/cmd/finch

.PHONY: release
release: check-licenses all download-licenses

.PHONY: coverage
coverage:
	go test $(shell go list ./... | grep -v e2e | grep -v benchmark | grep -v mocks) -coverprofile=test-coverage.out
	go tool cover -html=test-coverage.out

.PHONY: download-licenses
# Licenses of all the third-party dependencies must be downloaded in this build target
# because we need to include them in our release for legal reasons.
# These dependencies include Go modules in go.mod, Github Actions in .github/workflows, system-level dependencies (e.g., lima), etc.
#
# Dependencies in pkg/tools.go need to be manually added below. For more details, see the comments of `check-licenses`.
# Note that technically we don't need to explicitly download all of them (e.g., mockgen; see the next paragraph re. lima for more details),
# but it's just easier to have one entry here for each entry in `pkg/tools.go` instead of trying to understand which are not needed.
#
# At the time of writing, technically we don't need to explicitly download lima,
# but we still choose to do so because `go-licenses save` takes care of code-level dependencies,
# while lima is more like a system-level dependency, and it just happens to be also a code-level dependency right now,
# but it could be removed from go.mod one day, so it may be better to make it clear here.
download-licenses: GOBIN = $(CURDIR)/tools_bin
download-licenses:
	GOBIN=$(GOBIN) go install github.com/google/go-licenses
	$(GOBIN)/go-licenses save ./... --save_path="$(LICENSEDIR)" --force --include_tests

    ### dependencies in tools.go - start ###

    # for github.com/golang/mock/mockgen
	mkdir -p "$(LICENSEDIR)/github.com/golang/mock"
	curl https://raw.githubusercontent.com/golang/mock/main/LICENSE --output "$(LICENSEDIR)/github.com/golang/mock/LICENSE"
    # for github.com/google/go-licenses
	mkdir -p "$(LICENSEDIR)/github.com/google/go-licenses"
	curl https://raw.githubusercontent.com/google/go-licenses/master/LICENSE --output "$(LICENSEDIR)/github.com/google/go-licenses/LICENSE"
    # for golang.org/x/tools/cmd/stringer
	mkdir -p "$(LICENSEDIR)/golang.org/x/tools"
	curl https://raw.githubusercontent.com/golang/tools/master/LICENSE --output "$(LICENSEDIR)/golang.org/x/tools/LICENSE"

    ### dependencies in tools.go - end ###

    ### dependencies in benchmark.yaml - start ###

	mkdir -p "$(LICENSEDIR)/github.com/benchmark-action/github-action-benchmark"
	curl https://raw.githubusercontent.com/benchmark-action/github-action-benchmark/master/LICENSE.txt --output "$(LICENSEDIR)/github.com/benchmark-action/github-action-benchmark/LICENSE.txt"

    ### dependencies in benchmark.yaml - end ###

    ### dependencies in ci.yaml - start ###

	mkdir -p "$(LICENSEDIR)/github.com/actions/checkout"
	curl https://raw.githubusercontent.com/actions/checkout/main/LICENSE --output "$(LICENSEDIR)/github.com/actions/checkout/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/actions/setup-go"
	curl https://raw.githubusercontent.com/actions/setup-go/main/LICENSE --output "$(LICENSEDIR)/github.com/actions/setup-go/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/golangci/golangci-lint-action"
	curl https://raw.githubusercontent.com/golangci/golangci-lint-action/master/LICENSE --output "$(LICENSEDIR)/github.com/golangci/golangci-lint-action/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/avto-dev/markdown-lint"
	curl https://raw.githubusercontent.com/avto-dev/markdown-lint/master/LICENSE --output "$(LICENSEDIR)/github.com/avto-dev/markdown-lint/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/ludeeus/action-shellcheck"
	curl https://raw.githubusercontent.com/ludeeus/action-shellcheck/blob/2.0.0/LICENSE --output "$(LICENSEDIR)/github.com/ludeeus/action-shellcheck/LICENSE"

    ### dependencies in ci.yaml - end ###

    ### dependencies in lint-pr-title.yaml - start ###

	mkdir -p "$(LICENSEDIR)/github.com/amannn/action-semantic-pull-request"
	curl https://raw.githubusercontent.com/amannn/action-semantic-pull-request/main/LICENSE --output "$(LICENSEDIR)/github.com/amannn/action-semantic-pull-request/LICENSE"

    ### dependencies in lint-pr-title.yaml - end ###

    ### dependencies in release-please.yaml - start ###

	mkdir -p "$(LICENSEDIR)/github.com/googleapis/release-please"
	curl https://raw.githubusercontent.com/googleapis/release-please/main/LICENSE --output "$(LICENSEDIR)/github.com/googleapis/release-please/LICENSE"

    ### dependencies in release-please.yaml - end ###

    ### system-level dependencies - start ###

	mkdir -p "$(LICENSEDIR)/github.com/lima-vm/lima"
	curl https://raw.githubusercontent.com/lima-vm/lima/master/LICENSE --output "$(LICENSEDIR)/github.com/lima-vm/lima/LICENSE"

    ### system-level dependencies - end ###

.PHONY: check-licenses
# Guidelines:
#
# - The dependencies in pkg/tools.go are not included, so one has to manually verify the license when a new tool is added.
#   According to https://github.com/google/go-licenses#build-tags,
#   we could use `GOFLAGS="-tags=tools"` to include the file, but the following error will occur:
#   `import "golang.org/x/tools/cmd/stringer" is a program, not an importable package`.
# - There are many allowed licenses, but to keep things easy to follow, below we only list the ones currently used by our dependencies.
#
# Explanations:
#
# - golang.org/x dependencies are ignored because some of them incur the following warning:
#   `contains non-Go code that can't be inspected for further dependencies`, which can clutter the output.
#   They can be safely ignored because they are still part of the Go Project according to https://pkg.go.dev/golang.org/x,
#   so they should be the same as the standard library license-wise.
# - github.com/runfinch/finch is ignored because we don't have to check our own license.
#   Moreover, if we don't ignore it, the following error will occur:
#   `module github.com/runfinch/finch has empty version, defaults to HEAD. The license URL may be incorrect. Please verify!`.
#   `module  github.com/multiformats/go-base36  has a Apache license and MIT license but not written as LICENSE format`
check-licenses: GOBIN = $(CURDIR)/tools_bin
check-licenses:
	go mod download
	GOBIN=$(GOBIN) go install github.com/google/go-licenses
	$(GOBIN)/go-licenses check --ignore golang.org/x,github.com/runfinch/finch --ignore  github.com/multiformats/go-base36 --allowed_licenses Apache-2.0,BSD-2-Clause,BSD-3-Clause,ISC,MIT --include_tests ./...

.PHONY: test-unit
test-unit:
	go test $(shell go list ./... | grep -v e2e | grep -v benchmark | grep -v mocks) -shuffle on

# test-e2e assumes the VM instance doesn't exist, please make sure to remove it before running.
#
# Container tests and VM tests can be run in any order, but they must be run sequentially.
# For more details, see the package-level comment of the e2e package.
.PHONY: test-e2e
test-e2e: test-e2e-vm-serial test-e2e-container

.PHONY: test-e2e-vm-serial
test-e2e-vm-serial: 
	go test -ldflags $(LDFLAGS) -timeout 2h ./e2e/vm -test.v -ginkgo.v -ginkgo.timeout=2h --installed="$(INSTALLED)"

.PHONY: test-e2e-container
test-e2e-container:
	go test -ldflags $(LDFLAGS) -timeout 2h ./e2e/container -test.v -ginkgo.v -ginkgo.timeout=2h --installed="$(INSTALLED)"

.PHONY: test-e2e-vm
test-e2e-vm:
	go test -ldflags $(LDFLAGS) -timeout 2h ./e2e/vm -test.v -ginkgo.v -ginkgo.timeout=2h --installed="$(INSTALLED)" --registry="$(REGISTRY)"

.PHONY: test-benchmark
test-benchmark:
	cd benchmark/all && go test -ldflags $(LDFLAGS) -bench=. -benchmem --installed="$(INSTALLED)"

.PHONY: test-benchmark-vm
test-benchmark-vm:
	cd benchmark/vm && go test -ldflags $(LDFLAGS) -bench=. -benchmem --installed="$(INSTALLED)"

.PHONY: test-benchmark-container
test-benchmark-container:
	cd benchmark/container && go test -ldflags $(LDFLAGS) -bench=. -benchmem --installed="$(INSTALLED)"

.PHONY: gen-code
# Since different projects may have different versions of tool binaries,
# GOBIN is introduced to maintain a set of tool binaries dedicated to our project use.
#
# To add a new tool binary to the recipe below, please also checkout out `pkg/tools.go`.
gen-code: GOBIN = $(CURDIR)/tools_bin
gen-code:
	GOBIN=$(GOBIN) go install github.com/golang/mock/mockgen
	GOBIN=$(GOBIN) go install golang.org/x/tools/cmd/stringer
	# Make sure that we are using the tool binaries which are just built to generate code.
ifeq ($(GOOS),windows)
	powershell ./scripts/gen-code-windows.ps1
else
	PATH=$(GOBIN):$(PATH) go generate ./...
endif

.PHONY: lint
# To run golangci-lint locally: https://golangci-lint.run/usage/install/#local-installation
lint:
	env GOOS=windows golangci-lint run
	env GOOS=darwin golangci-lint run

.PHONY: mdlint
# Install it locally: https://github.com/igorshubovych/markdownlint-cli#installation
# Or see `mdlint-ctr` below or https://github.com/DavidAnson/markdownlint#related.
mdlint:
	markdownlint --ignore CHANGELOG.md '**/*.md'

.PHONY: mdlint-ctr
# If markdownlint is not installed, you can run markdownlint within a container.
mdlint-ctr:
	$(BINARYNAME) run --rm -v "$(shell pwd):/repo:ro" -w /repo avtodev/markdown-lint:v1 --ignore CHANGELOG.md '**/*.md'

.PHONY: clean
ifeq ($(GOOS),windows)
clean:
	-@rm -rf $(OUTDIR) 2>/dev/null || true
	-@"$(MAKE)" -C $(FINCH_CORE_DIR) clean
	-@rm ./*.tar.gz 2>/dev/null || true
	-@rm ./*.qcow2 2>/dev/null || true
	-@rm ./test-coverage.* 2>/dev/null || true
else
clean:
	-sudo pkill '^socket_vmnet'
	-sudo pkill '^qemu-system-'
	-sudo pkill '^limactl'
	-sudo rm -rf "/opt/finch/"
	-sudo rm -rf "/private/var/run/finch-lima"
	-sudo rm -rf "/private/etc/sudoers.d/finch-lima"
	-@rm -rf $(OUTDIR) 2>/dev/null || true
	-@$(MAKE) -C $(FINCH_CORE_DIR) clean
	-@rm ./*.tar.gz 2>/dev/null || true
	-@rm ./*.qcow2 2>/dev/null || true
	-@rm ./test-coverage.* 2>/dev/null || true
endif
