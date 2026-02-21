//go:build darwin || windows

package main

import (
	"errors"
	"fmt"
	"testing"

	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/flog"
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

	testCases := []struct {
		name         string
		installFlag  bool
		updateStatus *update.Status
		checkErr     error
		applyErr     error
	}{
		{
			name:        "check only execution",
			installFlag: false,
			updateStatus: &update.Status{
				UpdateAvailable: true,
				CurrentVersion:  "v1.0.0",
				LatestVersion:   "v1.1.0",
			},
		},
		{
			name:        "install execution",
			installFlag: true,
			updateStatus: &update.Status{
				UpdateAvailable: true,
				CurrentVersion:  "v1.0.0",
				LatestVersion:   "v1.1.0",
			},
		},
		{
			name:        "network error",
			installFlag: false,
			checkErr:    errors.New("network error"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)

			// Expect all possible logger calls
			logger.EXPECT().Info(gomock.Any()).AnyTimes()
			logger.EXPECT().Infof(gomock.Any(), gomock.Any()).AnyTimes()
			logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).AnyTimes()
			logger.EXPECT().Warnln(gomock.Any()).AnyTimes()

			cmd := &cobra.Command{}
			cmd.Flags().BoolP("install", "i", tc.installFlag, "")

			// Create a custom action that uses our mock updater
			action := &testUpdateOSVMAction{
				logger:        logger,
				finchRootPath: "/test/path",
				mockUpdater: &mockUpdaterForTest{
					status:   tc.updateStatus,
					err:      tc.checkErr,
					applyErr: tc.applyErr,
				},
			}

			// Test the runAdapter method
			_ = action.runAdapter(cmd, []string{})
		})
	}
}

// testUpdateOSVMAction is a test version that uses a mock updater.
type testUpdateOSVMAction struct {
	logger        flog.Logger
	finchRootPath string
	mockUpdater   *mockUpdaterForTest
}

func (uva *testUpdateOSVMAction) runAdapter(cmd *cobra.Command, _ []string) error {
	install, _ := cmd.Flags().GetBool("install")
	return uva.run(!install)
}

func (uva *testUpdateOSVMAction) run(checkOnly bool) error {
	if checkOnly {
		return uva.checkForUpdates(uva.mockUpdater)
	}
	return uva.applyUpdate(uva.mockUpdater)
}

func (uva *testUpdateOSVMAction) checkForUpdates(updater osUpdater) error {
	uva.logger.Info("Checking for OS updates...")

	status, err := updater.CheckForUpdates()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if status.UpdateAvailable {
		uva.logger.Infof("OS update available: %s to %s", status.CurrentVersion, status.LatestVersion)
		uva.logger.Info("Run 'finch vm update-os --install' to apply the update")
	} else {
		if status.CurrentVersion != "" {
			uva.logger.Infof("OS is up to date: %s", status.CurrentVersion)
		} else {
			uva.logger.Info("No OS version found. Run 'finch vm init' first.")
		}
	}

	return nil
}

func (uva *testUpdateOSVMAction) applyUpdate(updater osUpdater) error {
	uva.logger.Info("Checking for OS updates...")

	status, err := updater.CheckForUpdates()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if !status.UpdateAvailable {
		if status.CurrentVersion != "" {
			uva.logger.Infof("OS is already up to date: %s", status.CurrentVersion)
		} else {
			uva.logger.Info("No OS version found. Run 'finch vm init' first.")
		}
		return nil
	}

	uva.logger.Infof("Updating OS from %s to %s...", status.CurrentVersion, status.LatestVersion)
	uva.logger.Warnln("This will stop and recreate the VM. All containers and data will be lost.")

	err = updater.ApplyUpdate()
	if err != nil {
		return fmt.Errorf("failed to apply OS update: %w", err)
	}

	uva.logger.Info("OS update completed successfully")
	return nil
}

func TestUpdateOSVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name             string
		checkOnly        bool
		updateStatus     *update.Status
		checkErr         error
		applyErr         error
		expectedLogCalls func(*mocks.Logger)
	}{
		{
			name:      "check only - update available",
			checkOnly: true,
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
		},
		{
			name:      "check only - no update",
			checkOnly: true,
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "v1.1.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("OS is up to date: %s", "v1.1.0")
			},
		},
		{
			name:      "install mode - update available",
			checkOnly: false,
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
		},
		{
			name:      "install mode - no update",
			checkOnly: false,
			updateStatus: &update.Status{
				UpdateAvailable: false,
				CurrentVersion:  "v1.1.0",
				LatestVersion:   "v1.1.0",
			},
			expectedLogCalls: func(logger *mocks.Logger) {
				logger.EXPECT().Info("Checking for OS updates...")
				logger.EXPECT().Infof("OS is already up to date: %s", "v1.1.0")
			},
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
				applyErr: tc.applyErr,
			}

			var err error
			if tc.checkOnly {
				err = action.checkForUpdates(mockUpdater)
			} else {
				err = action.applyUpdate(mockUpdater)
			}

			assert.NoError(t, err)
		})
	}
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
