// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/stretchr/testify/assert"
)

func TestNewPassInit(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)

	cmd := newPassInit(mockLimaCmdCreator, mockLogger)

	assert.NotNil(t, cmd)
	assert.Equal(t, "pass-init", cmd.Use)
	assert.Equal(t, "Initialize the pass", cmd.Short)
}

func TestPassInitAction_Run(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)
	mockCommand := mocks.NewCommand(ctrl)

	mockLimaCmdCreator.EXPECT().Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--batch", "--passphrase", gomock.Any(), "--quick-gen-key", "$USER").Return(mockCommand)
	mockCommand.EXPECT().Run().Return(nil)

	action := newPassInitAction(mockLimaCmdCreator, mockLogger)
	err := action.run()

	assert.NoError(t, err)
}

func TestPassInitAction_InitKey(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)
	mockCommand := mocks.NewCommand(ctrl)

	mockLimaCmdCreator.EXPECT().Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--batch", "--passphrase", gomock.Any(), "--quick-gen-key", "$USER").Return(mockCommand)
	mockCommand.EXPECT().Run().Return(nil)

	action := newPassInitAction(mockLimaCmdCreator, mockLogger)
	err := action.initKey()

	assert.NoError(t, err)
}
