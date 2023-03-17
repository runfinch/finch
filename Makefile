# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

GO ?= go
# Files are installed under $(DESTDIR)/$(PREFIX)
PREFIX ?= $(CURDIR)/_output
DEST := $(shell echo "$(DESTDIR)/$(PREFIX)" | sed 's:///*:/:g; s://*$$::')
BINDIR ?= /usr/local/bin
OUTDIR ?= $(CURDIR)/_output
PACKAGE := github.com/runfinch/finch
BINARYNAME := finch
LIMA_FILENAME := lima
LIMA_EXTENSION := .tar.gz

LIMA_HOME := $(DEST)/lima/data
# Created by the CLI after installation, only used in uninstall step
LIMA_VDE_SUDOERS_FILE := /etc/sudoers.d/finch-lima
# Final installation prefix for vde created by CLI after installation, only used in uninstall step
VDE_INSTALL ?= /opt/finch
UNAME := $(shell uname -m)
ARCH ?= $(UNAME)
SUPPORTED_ARCH = false
CORE_VDE_PREFIX ?= $(OUTDIR)/dependencies/vde/opt/finch
LICENSEDIR := $(OUTDIR)/license-files
VERSION := $(shell git describe --match 'v[0-9]*' --dirty='.modified' --always --tags)
GITCOMMIT := $(shell git rev-parse HEAD)$(shell if ! git diff --no-ext-diff --quiet --exit-code; then echo .m; fi)
LDFLAGS := "-X $(PACKAGE)/pkg/version.Version=$(VERSION) -X $(PACKAGE)/pkg/version.GitCommit=$(GITCOMMIT)"

.DEFAULT_GOAL := all

INSTALLED ?= false

ifneq (,$(findstring arm64,$(ARCH)))
	SUPPORTED_ARCH = true
	LIMA_ARCH = aarch64
	# From https://dl.fedoraproject.org/pub/fedora/linux/releases/37/Cloud/aarch64/images/
	FINCH_OS_BASENAME ?= Fedora-Cloud-Base-37-1.7.aarch64-20230317205128.qcow2
	LIMA_URL ?= https://deps.runfinch.com/aarch64/lima-and-qemu.macos-aarch64.1678826933.tar.gz
else ifneq (,$(findstring x86_64,$(ARCH)))
	SUPPORTED_ARCH = true
	LIMA_ARCH = x86_64
	# From https://dl.fedoraproject.org/pub/fedora/linux/releases/37/Cloud/x86_64/images/
	FINCH_OS_BASENAME ?= Fedora-Cloud-Base-37-1.7.x86_64-20230317204632.qcow2
	LIMA_URL ?= https://deps.runfinch.com/x86-64/lima-and-qemu.macos-x86_64.1678817277.tar.gz
endif

FINCH_OS_HASH := `shasum -a 256 $(OUTDIR)/os/$(FINCH_OS_BASENAME) | cut -d ' ' -f 1`
FINCH_OS_DIGEST := "sha256:$(FINCH_OS_HASH)"
FINCH_OS_IMAGE_LOCATION_ROOT ?= $(DEST)
FINCH_OS_IMAGE_LOCATION ?= $(FINCH_OS_IMAGE_LOCATION_ROOT)/os/$(FINCH_OS_BASENAME)

.PHONY: arch-test
arch-test:
	@if [ $(SUPPORTED_ARCH) != "true" ]; then echo "Unsupported architecture: $(ARCH)"; exit "1"; fi

.PHONY: all
all: arch-test finch finch-core finch.yaml networks.yaml config.yaml lima-and-qemu

.PHONY: finch-core
finch-core:
	cd deps/finch-core && \
		FINCH_OS_x86_URL="$(FINCH_OS_x86_URL)" \
		FINCH_OS_AARCH64_URL="$(FINCH_OS_AARCH64_URL)" \
		VDE_TEMP_PREFIX=$(CORE_VDE_PREFIX) \
		$(MAKE)

	mkdir -p _output
	cd deps/finch-core/_output && tar c * | tar Cvx  $(OUTDIR)
	rm -rf $(OUTDIR)/lima-template

.PHONY: lima-and-qemu
lima-and-qemu: networks.yaml
	mkdir -p $(OUTDIR)/downloads
	# download artifacts
	curl -L $(LIMA_URL) > $(OUTDIR)/downloads/lima-and-qemu.tar.gz

	# Untar LIMA
	tar -xvf $(OUTDIR)/downloads/lima-and-qemu.tar.gz -C $(OUTDIR)/lima/

	# Delete downloads
	rm -rf $(OUTDIR)/downloads


.PHONY: finch.yaml
finch.yaml: finch-core
	mkdir -p $(OUTDIR)/os
	cp finch.yaml $(OUTDIR)/os
	# using -i.bak is very intentional, it allows the following commands to succeed for both GNU / BSD sed
	# this sed command uses the alternative separator of "|" because the image location uses "/"
	sed -i.bak -e "s|<finch_image_location>|$(FINCH_OS_IMAGE_LOCATION)|g" $(OUTDIR)/os/finch.yaml
	sed -i.bak -e "s/<finch_image_arch>/$(LIMA_ARCH)/g" $(OUTDIR)/os/finch.yaml
	sed -i.bak -e "s/<finch_image_digest>/$(FINCH_OS_DIGEST)/g" $(OUTDIR)/os/finch.yaml
	rm $(OUTDIR)/os/*.yaml.bak

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
	(cd _output && tar c * | tar Cvx  $(DEST) )

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
finch:
	$(GO) build -ldflags $(LDFLAGS) -o $(OUTDIR)/bin/$(BINARYNAME) $(PACKAGE)/cmd/finch

.PHONY: release
release: check-licenses all download-licenses

.PHONY: coverage
coverage:
	go test $(shell go list ./... | grep -v e2e) -coverprofile=test-coverage.out
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

    ### dependencies in ci.yaml - start ###

	mkdir -p "$(LICENSEDIR)/github.com/actions/checkout"
	curl https://raw.githubusercontent.com/actions/checkout/main/LICENSE --output "$(LICENSEDIR)/github.com/actions/checkout/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/actions/setup-go"
	curl https://raw.githubusercontent.com/actions/setup-go/main/LICENSE --output "$(LICENSEDIR)/github.com/actions/setup-go/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/golangci/golangci-lint-action"
	curl https://raw.githubusercontent.com/golangci/golangci-lint-action/master/LICENSE --output "$(LICENSEDIR)/github.com/golangci/golangci-lint-action/LICENSE"
	mkdir -p "$(LICENSEDIR)/github.com/avto-dev/markdown-lint"
	curl https://raw.githubusercontent.com/avto-dev/markdown-lint/master/LICENSE --output "$(LICENSEDIR)/github.com/avto-dev/markdown-lint/LICENSE"

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
check-licenses: GOBIN = $(CURDIR)/tools_bin
check-licenses:
	go mod download
	GOBIN=$(GOBIN) go install github.com/google/go-licenses
	$(GOBIN)/go-licenses check --ignore golang.org/x,github.com/runfinch/finch --allowed_licenses Apache-2.0,BSD-2-Clause,BSD-3-Clause,ISC,MIT --include_tests ./...

.PHONY: test-unit
test-unit:
	go test $(shell go list ./... | grep -v e2e) -shuffle on -race

# test-e2e assumes the VM instance doesn't exist, please make sure to remove it before running.
#
# Container tests and VM tests can be run in any order, but they must be run sequentially.
# For more details, see the package-level comment of the e2e package.
.PHONY: test-e2e
test-e2e: test-e2e-vm-serial

.PHONY: test-e2e-vm-serial
test-e2e-vm-serial: test-e2e-container
	go test -ldflags $(LDFLAGS) -timeout 30m ./e2e/vm -test.v -ginkgo.v --installed="$(INSTALLED)"

.PHONY: test-e2e-container
test-e2e-container:
	go test -ldflags $(LDFLAGS) -timeout 30m ./e2e/container -test.v -ginkgo.v --installed="$(INSTALLED)"

.PHONY: test-e2e-vm
test-e2e-vm:
	go test -ldflags $(LDFLAGS) -timeout 30m ./e2e/vm -test.v -ginkgo.v --installed="$(INSTALLED)"

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
	PATH=$(GOBIN):$(PATH) go generate ./...

.PHONY: lint
# To run golangci-lint locally: https://golangci-lint.run/usage/install/#local-installation
lint:
	golangci-lint run

.PHONY: mdlint
# Install it locally: https://github.com/igorshubovych/markdownlint-cli#installation
# Or see `mdlint-ctr` below or https://github.com/DavidAnson/markdownlint#related.
mdlint:
	markdownlint --ignore CHANGELOG.md '**/*.md'

.PHONY: mdlint-ctr
# If markdownlint is not installed, you can run markdownlint within a container.
mdlint-ctr:
	finch run --rm -v "$(shell pwd):/repo:ro" -w /repo avtodev/markdown-lint:v1 --ignore CHANGELOG.md '**/*.md'

.PHONY: clean
clean:
	-@rm -rf $(OUTDIR) 2>/dev/null || true
	-@rm ./*.tar.gz 2>/dev/null || true
	-@rm ./*.qcow2 2>/dev/null || true
	-@rm ./test-coverage.* 2>/dev/null || true
