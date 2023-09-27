# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

# gen-code-windows.ps1

# existing logic for codegen installs codegen tools locally
# to "tools_bin" and prepends $PATH with "tools_bin". This syntax to
# specify a PATH= before command in Windows Make / git-bash is broken;
# this script is a workaround to perform the codegen.

# tools_bin is created in root of finch project.
$GOBIN = Join-Path $PSScriptRoot "../tools_bin"
$env:GOBIN=$GOBIN 

# Install the required Go tools specifying GOBIN
go install github.com/golang/mock/mockgen
go install golang.org/x/tools/cmd/stringer

# Update the PATH environment variable and then run 'go generate'
$env:PATH = "${GOBIN};${env:PATH}"
go generate ./... .
