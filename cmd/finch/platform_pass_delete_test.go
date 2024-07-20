// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNewPassDelete(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)

	cmd := newPassDelete(mockLimaCmdCreator, mockLogger)

	assert.NotNil(t, cmd)
	assert.Equal(t, "pass-delete", cmd.Use)
	assert.Equal(t, "Delete the pass key", cmd.Short)
}

func TestPassDeleteAction_Run(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)
	mockCommand := mocks.NewCommand(ctrl)

	mockLimaCmdCreator.EXPECT().Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--yes", "--delete-secret-and-public-key", "$USER").Return(mockCommand)
	mockCommand.EXPECT().Run().Return(nil)

	action := newPassDeleteAction(mockLimaCmdCreator, mockLogger)
	err := action.run()

	assert.NoError(t, err)
}

func TestPassDeleteAction_DeleteKey(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)
	mockCommand := mocks.NewCommand(ctrl)

	mockLimaCmdCreator.EXPECT().Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--yes", "--delete-secret-and-public-key", "$USER").Return(mockCommand)
	mockCommand.EXPECT().Run().Return(nil)

	action := newPassDeleteAction(mockLimaCmdCreator, mockLogger)
	err := action.deleteKey()

	assert.NoError(t, err)
}

func TestPassDeleteAction_RunAdapter(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	defer ctrl.Finish()

	mockLimaCmdCreator := mocks.NewLimaCmdCreator(ctrl)
	mockLogger := mocks.NewLogger(ctrl)
	mockCommand := mocks.NewCommand(ctrl)

	mockLimaCmdCreator.EXPECT().Create("shell", limaInstanceName, "sudo", "-E",
		"gpg2", "--yes", "--delete-secret-and-public-key", "$USER").Return(mockCommand)
	mockCommand.EXPECT().Run().Return(nil)

	action := newPassDeleteAction(mockLimaCmdCreator, mockLogger)

	cmd := &cobra.Command{}
	err := action.runAdapter(cmd, []string{})

	assert.NoError(t, err)
}
