// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/runfinch/finch/pkg/config (interfaces: NerdctlConfigApplier)

// Package mocks is a generated GoMock package.
package mocks

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// NerdctlConfigApplier is a mock of NerdctlConfigApplier interface.
type NerdctlConfigApplier struct {
	ctrl     *gomock.Controller
	recorder *NerdctlConfigApplierMockRecorder
}

// NerdctlConfigApplierMockRecorder is the mock recorder for NerdctlConfigApplier.
type NerdctlConfigApplierMockRecorder struct {
	mock *NerdctlConfigApplier
}

// NewNerdctlConfigApplier creates a new mock instance.
func NewNerdctlConfigApplier(ctrl *gomock.Controller) *NerdctlConfigApplier {
	mock := &NerdctlConfigApplier{ctrl: ctrl}
	mock.recorder = &NerdctlConfigApplierMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *NerdctlConfigApplier) EXPECT() *NerdctlConfigApplierMockRecorder {
	return m.recorder
}

// Apply mocks base method.
func (m *NerdctlConfigApplier) Apply(arg0 string) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Apply", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// Apply indicates an expected call of Apply.
func (mr *NerdctlConfigApplierMockRecorder) Apply(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Apply", reflect.TypeOf((*NerdctlConfigApplier)(nil).Apply), arg0)
}
