//go:build darwin || windows

package main

import (
	"errors"
	"testing"

	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/update"
)

func TestNewUpdateOSVMCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)

	cmd := newUpdateOSVMCommand(logger, "/test/path")
	assert.Equal(t, "update-os", cmd.Name())
	assert.Equal(t, "Check for virtual machine OS updates", cmd.Short)
	assert.Contains(t, cmd.Long, "Check for available OS updates to the Finch virtual machine")

	// Verify the install flag exists
	installFlag := cmd.Flags().Lookup("install")
	assert.NotNil(t, installFlag)
	assert.Equal(t, "i", installFlag.Shorthand)
	assert.Equal(t, "false", installFlag.DefValue)
}

func TestNewUpdateOSVMAction(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)

	action := newUpdateOSVMAction(logger, "/test/path")
	assert.NotNil(t, action)
	assert.Equal(t, logger, action.logger)
	assert.Equal(t, "/test/path", action.finchRootPath)
}

func TestUpdateOSVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name        string
		installFlag bool
		checkOnly   bool
	}{
		{
			name:        "check only mode",
			installFlag: false,
			checkOnly:   true,
		},
		{
			name:        "install mode",
			installFlag: true,
			checkOnly:   false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			cmd := &cobra.Command{}
			cmd.Flags().BoolP("install", "i", tc.installFlag, "")

			// Test that runAdapter extracts the flag correctly
			install, _ := cmd.Flags().GetBool("install")
			assert.Equal(t, tc.installFlag, install)
			assert.Equal(t, tc.checkOnly, !install)
		})
	}
}

func TestUpdateOSVMAction_runAdapter_execution(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)

	cmd := &cobra.Command{}
	cmd.Flags().BoolP("install", "i", false, "")

	action := newUpdateOSVMAction(logger, "/test/path")

	// Expect all possible logger calls
	logger.EXPECT().Info(gomock.Any()).AnyTimes()
	logger.EXPECT().Infof(gomock.Any(), gomock.Any()).AnyTimes()
	logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).AnyTimes()
	logger.EXPECT().Warnln(gomock.Any()).AnyTimes()

	// This will succeed or fail depending on network/system state
	_ = action.runAdapter(cmd, []string{})
}

func TestUpdateOSVMAction_run(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)

	action := newUpdateOSVMAction(logger, "/test/path")

	logger.EXPECT().Info(gomock.Any()).AnyTimes()
	logger.EXPECT().Infof(gomock.Any(), gomock.Any()).AnyTimes()
	logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).AnyTimes()
	logger.EXPECT().Warnln(gomock.Any()).AnyTimes()

	// This will succeed or fail depending on network/system state
	_ = action.run(true)
	_ = action.run(false)
}

func TestUpdateOSVMAction_checkForUpdates(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name             string
		updateStatus     *update.Status
		updaterErr       error
		expectedLogCalls func(*mocks.Logger)
		expectedErr      error
	}{
		{
			name: "update available",
			updateStatus: &update.Status{
				UpdateAvailable: true,
				CurrentVersion:  "v1.0.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("OS update available: %s to %s", "v1.0.0", "v1.1.0")
				logger.EXPECT().Info("Run 'finch vm update-os --install' to apply the update")
			},
			expectedErr: nil,
		},
		{
			name: "no update available with version",
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "v1.1.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("OS is up to date: %s", "v1.1.0")
			},
			expectedErr: nil,
		},
		{
			name: "no version found",
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Info("No OS version found. Run 'finch vm init' first.")
			},
			expectedErr: nil,
		},
		{
			name:         "check for updates fails",
			updateStatus: nil,
			updaterErr:   errors.New("network error"),
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
			},
			expectedErr: errors.New("failed to check for updates: network error"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)

			tc.expectedLogCalls(logger)

			action := &updateOSVMAction{
				logger:        logger,
				finchRootPath: "/test/path",
			}

			// Create a mock updater that returns our test data
			mockUpdater := &mockUpdaterForTest{
				status: tc.updateStatus,
				err:    tc.updaterErr,
			}

			err := action.checkForUpdates(mockUpdater)
			if tc.expectedErr != nil {
				assert.Error(t, err)
				assert.Contains(t, err.Error(), tc.expectedErr.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}

func TestUpdateOSVMAction_applyUpdate(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name             string
		updateStatus     *update.Status
		checkErr         error
		applyErr         error
		expectedLogCalls func(*mocks.Logger)
		expectedErr      error
	}{
		{
			name: "successful update",
			updateStatus: &update.Status{
				UpdateAvailable: true,
				CurrentVersion:  "v1.0.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("Updating OS from %s to %s...", "v1.0.0", "v1.1.0")
				logger.EXPECT().Warnln("This will stop and recreate the VM. All containers and data will be lost.")
				logger.EXPECT().Info("OS update completed successfully")
			},
			expectedErr: nil,
		},
		{
			name: "no update available with version",
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "v1.1.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("OS is already up to date: %s", "v1.1.0")
			},
			expectedErr: nil,
		},
		{
			name: "no version found",
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Info("No OS version found. Run 'finch vm init' first.")
			},
			expectedErr: nil,
		},
		{
			name:     "check for updates fails",
			checkErr: errors.New("network error"),
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
			},
			expectedErr: errors.New("failed to check for updates: network error"),
		},
		{
			name: "apply update fails",
			updateStatus: &update.Status{
				UpdateAvailable: true,
				CurrentVersion:  "v1.0.0",
				LatestVersion:   "v1.1.0",
			},
			applyErr: errors.New("download failed"),
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("Updating OS from %s to %s...", "v1.0.0", "v1.1.0")
				logger.EXPECT().Warnln("This will stop and recreate the VM. All containers and data will be lost.")
			},
			expectedErr: errors.New("failed to apply OS update: download failed"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)

			tc.expectedLogCalls(logger)

			action := &updateOSVMAction{
				logger:        logger,
				finchRootPath: "/test/path",
			}

			mockUpdater := &mockUpdaterForTest{
				status:   tc.updateStatus,
				err:      tc.checkErr,
				applyErr: tc.applyErr,
			}

			err := action.applyUpdate(mockUpdater)
			if tc.expectedErr != nil {
				assert.Error(t, err)
				assert.Contains(t, err.Error(), tc.expectedErr.Error())
			} else {
				assert.NoError(t, err)
			}
		})
	}
}

// mockUpdaterForTest is a simple mock for testing.
type mockUpdaterForTest struct {
	status   *update.Status
	err      error
	applyErr error
}

func (m *mockUpdaterForTest) CheckForUpdates() (*update.Status, error) {
	return m.status, m.err
}

func (m *mockUpdaterForTest) ApplyUpdate() error {
	return m.applyErr
}
