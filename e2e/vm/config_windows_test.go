// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//go:build windows

package vm

import "os"

var finchConfigFilePath = os.Getenv("LOCALAPPDATA") + "/.finch/finch.yaml"
