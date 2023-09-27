// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

var aliasMap = map[string]string{}

var argHandlerMap = map[string]map[string]argHandler{}

var commandHandlerMap = map[string]commandHandler{}
