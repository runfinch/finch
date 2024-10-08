// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Code generated by MockGen. DO NOT EDIT.
// Source: nerdctl.go

// Package mocks is a generated GoMock package.
package mocks

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
)

// NerdctlCommandSystemDeps is a mock of NerdctlCommandSystemDeps interface.
type NerdctlCommandSystemDeps struct {
	ctrl     *gomock.Controller
	recorder *NerdctlCommandSystemDepsMockRecorder
}

// NerdctlCommandSystemDepsMockRecorder is the mock recorder for NerdctlCommandSystemDeps.
type NerdctlCommandSystemDepsMockRecorder struct {
	mock *NerdctlCommandSystemDeps
}

// NewNerdctlCommandSystemDeps creates a new mock instance.
func NewNerdctlCommandSystemDeps(ctrl *gomock.Controller) *NerdctlCommandSystemDeps {
	mock := &NerdctlCommandSystemDeps{ctrl: ctrl}
	mock.recorder = &NerdctlCommandSystemDepsMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *NerdctlCommandSystemDeps) EXPECT() *NerdctlCommandSystemDepsMockRecorder {
	return m.recorder
}

// Env mocks base method.
func (m *NerdctlCommandSystemDeps) Env(key string) string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Env", key)
	ret0, _ := ret[0].(string)
	return ret0
}

// Env indicates an expected call of Env.
func (mr *NerdctlCommandSystemDepsMockRecorder) Env(key interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Env", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).Env), key)
}

// FilePathAbs mocks base method.
func (m *NerdctlCommandSystemDeps) FilePathAbs(elem string) (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "FilePathAbs", elem)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FilePathAbs indicates an expected call of FilePathAbs.
func (mr *NerdctlCommandSystemDepsMockRecorder) FilePathAbs(elem interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FilePathAbs", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).FilePathAbs), elem)
}

// FilePathJoin mocks base method.
func (m *NerdctlCommandSystemDeps) FilePathJoin(elem ...string) string {
	m.ctrl.T.Helper()
	varargs := []interface{}{}
	for _, a := range elem {
		varargs = append(varargs, a)
	}
	ret := m.ctrl.Call(m, "FilePathJoin", varargs...)
	ret0, _ := ret[0].(string)
	return ret0
}

// FilePathJoin indicates an expected call of FilePathJoin.
func (mr *NerdctlCommandSystemDepsMockRecorder) FilePathJoin(elem ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FilePathJoin", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).FilePathJoin), elem...)
}

// FilePathToSlash mocks base method.
func (m *NerdctlCommandSystemDeps) FilePathToSlash(elem string) string {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "FilePathToSlash", elem)
	ret0, _ := ret[0].(string)
	return ret0
}

// FilePathToSlash indicates an expected call of FilePathToSlash.
func (mr *NerdctlCommandSystemDepsMockRecorder) FilePathToSlash(elem interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FilePathToSlash", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).FilePathToSlash), elem)
}

// GetWd mocks base method.
func (m *NerdctlCommandSystemDeps) GetWd() (string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetWd")
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetWd indicates an expected call of GetWd.
func (mr *NerdctlCommandSystemDepsMockRecorder) GetWd() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetWd", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).GetWd))
}

// LookupEnv mocks base method.
func (m *NerdctlCommandSystemDeps) LookupEnv(key string) (string, bool) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "LookupEnv", key)
	ret0, _ := ret[0].(string)
	ret1, _ := ret[1].(bool)
	return ret0, ret1
}

// LookupEnv indicates an expected call of LookupEnv.
func (mr *NerdctlCommandSystemDepsMockRecorder) LookupEnv(key interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "LookupEnv", reflect.TypeOf((*NerdctlCommandSystemDeps)(nil).LookupEnv), key)
}
