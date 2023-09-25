// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package flog contains logging-related APIs.
package flog

// Logger should be used to write any logs. No concrete implementations should be directly used.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/logger.go -package=mocks -mock_names Logger=Logger . Logger
type Logger interface {
	Debugf(format string, args ...interface{})
	Debugln(args ...interface{})
	Info(args ...interface{})
	Infof(format string, args ...interface{})
	Infoln(args ...interface{})
	Warnln(args ...interface{})
	Warnf(format string, args ...interface{})
	Error(args ...interface{})
	Errorf(format string, args ...interface{})
	Fatal(args ...interface{})
	SetLevel(level Level)
	SetFormatter(formatter Formatter)
}

// Level denotes a log level. Check the constants below for more information.
type Level int

//go:generate stringer -type=Level
const (
	Debug Level = iota
	Panic
)

// Formatter denotes a log formatter. Check the constants below for more information.
type Formatter int

//go:generate stringer -type=Formatter
const (
	Text Formatter = iota
	JSON
)
