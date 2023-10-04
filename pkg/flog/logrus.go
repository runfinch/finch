// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package flog

import (
	"github.com/sirupsen/logrus"
)

// Logrus implements the Logger interface.
type Logrus struct{}

var _ Logger = (*Logrus)(nil)

// NewLogrus returns a new logrus logger.
func NewLogrus() *Logrus {
	return &Logrus{}
}

// Debugf logs a message at level Debug.
func (l *Logrus) Debugf(format string, args ...interface{}) {
	logrus.Debugf(format, args...)
}

// Debugln logs a message at level Debug.
func (l *Logrus) Debugln(args ...interface{}) {
	logrus.Debugln(args...)
}

// Info logs a message at level Info.
func (l *Logrus) Info(args ...interface{}) {
	logrus.Info(args...)
}

// Infof logs a message at level Info.
func (l *Logrus) Infof(format string, args ...interface{}) {
	logrus.Infof(format, args...)
}

// Infoln logs a message at level Info.
func (l *Logrus) Infoln(args ...interface{}) {
	logrus.Infoln(args...)
}

// Warnln logs a message at level Warn.
func (l *Logrus) Warnln(args ...interface{}) {
	logrus.Warnln(args...)
}

// Warnf logs a message at level Warn.
func (l *Logrus) Warnf(format string, args ...interface{}) {
	logrus.Warnf(format, args...)
}

// Error logs a message at level Error.
func (l *Logrus) Error(args ...interface{}) {
	logrus.Error(args...)
}

// Errorf logs a message at level Error.
func (l *Logrus) Errorf(format string, args ...interface{}) {
	logrus.Errorf(format, args...)
}

// Fatal logs a message at level Fatal.
func (l *Logrus) Fatal(args ...interface{}) {
	logrus.Fatal(args...)
}

// SetLevel sets the level of the logger.
func (l *Logrus) SetLevel(level Level) {
	switch level {
	case Debug:
		logrus.SetLevel(logrus.DebugLevel)
	case Panic:
		logrus.SetLevel(logrus.PanicLevel)
	}
}

// SetFormatter sets the formatter of the logger.
func (l *Logrus) SetFormatter(formatter Formatter) {
	switch formatter {
	case Text:
		logrus.SetFormatter(&logrus.TextFormatter{})
	case JSON:
		logrus.SetFormatter(&logrus.JSONFormatter{})
	}
}
