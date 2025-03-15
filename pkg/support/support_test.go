// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import (
	"archive/zip"
	"io"
	"os/user"
	"runtime"
	"testing"
	"time"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/mocks"
	fpath "github.com/runfinch/finch/pkg/path"
)

func TestSupport_NewBundleBuilder(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	ecc := mocks.NewCommandCreator(ctrl)
	ncc := mocks.NewNerdctlCmdCreator(ctrl)
	logger := mocks.NewLogger(ctrl)
	fs := afero.NewMemMapFs()
	finch := fpath.Finch("mockfinch")
	lima := mocks.NewMockLimaWrapper(ctrl)
	systemDeps := mocks.NewSupportSystemDeps(ctrl)

	config := NewBundleConfig(finch, "mockhome")
	NewBundleBuilder(logger, fs, config, finch, ecc, ncc, lima, systemDeps)
}

func TestSupportBundleBuilder_GenerateSupportBundle(t *testing.T) {
	t.Parallel()

	mockUser := &user.User{
		Username: "mockuser",
	}

	type testcases []struct {
		name    string
		mockSvc func(
			*mocks.Logger,
			*mocks.BundleConfig,
			*mocks.CommandCreator,
			*mocks.NerdctlCmdCreator,
			*mocks.Command,
			*mocks.MockLimaWrapper,
			*mocks.SupportSystemDeps,
			afero.Fs,
		)
		include []string
		exclude []string
	}

	testCases := testcases{
		{
			name: "Generate support bundle",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
					"log2",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
					"config2",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugf("Copying %s...", "log2")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugf("Copying %s...", "config2")
				logger.EXPECT().Debugln("Copying in additional files...")

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{},
			exclude: []string{},
		},
		{
			name: "Generate support bundle with an extra file included",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")
				logger.EXPECT().Debugf("Copying %s...", "extra1")

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{"extra1"},
			exclude: []string{},
		},
		{
			name: "Generate support bundle with a log file excluded",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Infof("Excluding %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{},
			exclude: []string{"log1"},
		},
		{
			name: "Generate support bundle with a config file excluded",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Infof("Excluding %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{},
			exclude: []string{"config1"},
		},
		{
			name: "Generate support bundle with an included file excluded",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")
				logger.EXPECT().Infof("Excluding %s...", "extra1")

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{"extra1"},
			exclude: []string{"extra1"},
		},
	}

	hasVMTestCases := testcases{
		{
			name: "Generate support bundle with a VM file included",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				ncc *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")
				logger.EXPECT().Debugf("Copying %s...", "vm:extra1")

				var catWriter io.Writer
				waitChan := make(chan int)
				ncc.EXPECT().CreateWithoutStdio("shell", "finch", "sudo", "cat", "extra1").Return(cmd)
				cmd.EXPECT().SetStdout(gomock.Any()).Do(func(writer io.Writer) {
					catWriter = writer
				})
				cmd.EXPECT().SetStderr(gomock.Any())
				cmd.EXPECT().Start().DoAndReturn(func() error {
					go func() {
						_, err := catWriter.Write([]byte("file contents\n"))
						require.NoError(t, err)
						waitChan <- 1
					}()
					return nil
				})
				cmd.EXPECT().Wait().DoAndReturn(func() error {
					<-waitChan
					return nil
				})

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{"vm:extra1"},
		},
	}

	npVMTestCases := testcases{
		{
			name: "Generate support bundle with a VM file included",
			mockSvc: func(
				logger *mocks.Logger,
				config *mocks.BundleConfig,
				ecc *mocks.CommandCreator,
				_ *mocks.NerdctlCmdCreator,
				cmd *mocks.Command,
				lima *mocks.MockLimaWrapper,
				systemDeps *mocks.SupportSystemDeps,
				_ afero.Fs,
			) {
				logger.EXPECT().Debugf("Creating %s...", gomock.Any())
				logger.EXPECT().Debugln("Gathering platform data...")

				switch runtime.GOOS {
				case "windows":
					ecc.EXPECT().Create("cmd", "/c", "ver").Return(cmd)
				case "darwin":
					ecc.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				case "linux":
					ecc.EXPECT().Create("uname", "-r").Return(cmd)
				default:
					cmd = nil
				}

				cmd.EXPECT().Output().Return([]byte("1.2.3\n"), nil).AnyTimes()

				logger.EXPECT().Debugln("Collecting finch version output...")
				systemDeps.EXPECT().Executable().Return("/bin/path", nil)
				ecc.EXPECT().Create("/bin/path", "version").Return(cmd)

				config.EXPECT().LogFiles().Return([]string{
					"log1",
				})

				config.EXPECT().ConfigFiles().Return([]string{
					"config1",
				})

				logger.EXPECT().Debugln("Copying in log files...")
				logger.EXPECT().Debugf("Copying %s...", "log1")
				logger.EXPECT().Debugln("Copying in config files...")
				logger.EXPECT().Debugf("Copying %s...", "config1")
				logger.EXPECT().Debugln("Copying in additional files...")
				logger.EXPECT().Debugf("Copying %s...", "vm:extra1")

				// hard to write a matcher for the second argument
				logger.EXPECT().Warnf("Could not add additional file %s. Error: %s", "vm:extra1", gomock.Any())

				lima.EXPECT().LimaUser(false).Return(mockUser).AnyTimes()
			},
			include: []string{"vm:extra1"},
		},
	}

	if runtime.GOOS == "windows" || runtime.GOOS == "darwin" {
		testCases = append(testCases, hasVMTestCases...)
	} else {
		testCases = append(testCases, npVMTestCases...)
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			fs := afero.NewMemMapFs()
			logger := mocks.NewLogger(ctrl)
			config := mocks.NewBundleConfig(ctrl)
			finch := fpath.Finch("mockfinch")
			ecc := mocks.NewCommandCreator(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			lima := mocks.NewMockLimaWrapper(ctrl)
			cmd := mocks.NewCommand(ctrl)
			systemDeps := mocks.NewSupportSystemDeps(ctrl)

			builder := &bundleBuilder{
				logger:     logger,
				fs:         fs,
				config:     config,
				finch:      finch,
				ecc:        ecc,
				ncc:        ncc,
				lima:       lima,
				systemDeps: systemDeps,
			}

			testFiles := []string{
				"log1", "log2", // "log" files
				"config1", "config2", // "config" files
				"extra1", // "additional" files
			}

			for _, fileName := range testFiles {
				f, err := fs.Create(fileName)
				require.NoError(t, err)

				_, err = f.Write([]byte("file contents\n"))
				require.NoError(t, err)

				err = f.Close()
				require.NoError(t, err)
			}

			tc.mockSvc(logger, config, ecc, ncc, cmd, lima, systemDeps, fs)

			zipFile, err := builder.GenerateSupportBundle(tc.include, tc.exclude)
			assert.NoError(t, err)

			exists, err := afero.Exists(fs, zipFile)
			assert.NoError(t, err)
			assert.True(t, exists)
		})
	}
}

func TestSupport_writePlatformData(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		data    *PlatformData
		wantErr error
	}{
		{
			name: "successfully write platform data",
			data: &PlatformData{
				Os:    "12.5.3",
				Arch:  "x86_64",
				Finch: "0.5.0",
			},
			wantErr: nil,
		},
		{
			name: "incomplete platform data",
			data: &PlatformData{
				Os: "12.5.3",
			},
			wantErr: nil,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()

			file, err := fs.Create("testFile")
			require.NoError(t, err)

			writer := zip.NewWriter(file)

			err = writePlatformData(writer, tc.data, bundlePrefix)
			assert.Equal(t, tc.wantErr, err)

			err = file.Close()
			assert.NoError(t, err)
		})
	}
}

func TestSupport_bundleFileName(t *testing.T) {
	t.Parallel()

	first := bundleFileName()
	time.Sleep(time.Second)
	second := bundleFileName()

	assert.Contains(t, first, bundlePrefix)
	assert.Contains(t, second, bundlePrefix)
	assert.NotEqual(t, first, second)
}

func TestSupport_fileShouldBeExcluded(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		file    string
		exclude []string
		result  bool
	}{
		{
			name:    "full filename should be excluded",
			file:    "/finch/lima/data/serial.log",
			exclude: []string{"/finch/lima/data/serial.log"},
			result:  true,
		},
		{
			name:    "basename should be excluded",
			file:    "/finch/lima/data/serial.log",
			exclude: []string{"serial.log"},
			result:  true,
		},
		{
			name:    "empty exclude list",
			file:    "/finch/lima/data/serial.log",
			exclude: []string{},
			result:  false,
		},
		{
			name:    "file not in exclude list",
			file:    "/finch/lima/data/serial.log",
			exclude: []string{"other.file"},
			result:  false,
		},
		{
			name:    "vm file with its whole path excluded",
			file:    "vm:/path/to/file",
			exclude: []string{"/path/to/file"},
			result:  true,
		},
		{
			name:    "vm file with its base path excluded",
			file:    "vm:/path/to/file",
			exclude: []string{"file"},
			result:  true,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			result := fileShouldBeExcluded(tc.file, tc.exclude)
			assert.Equal(t, tc.result, result)
		})
	}
}

func TestSupport_writeVersionOutput(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name            string
		versionOutput   string
		prefix          string
		expectedPath    string
		expectedContent string
		expectError     bool
	}{
		{
			name:            "Write version output successfully",
			versionOutput:   "1.2.3",
			prefix:          "test_prefix",
			expectedPath:    "test_prefix/version-output.txt",
			expectedContent: "1.2.3",
			expectError:     false,
		},
		{
			name:            "Write version output with empty prefix",
			versionOutput:   "1.2.3",
			prefix:          "",
			expectedPath:    "version-output.txt",
			expectedContent: "1.2.3",
			expectError:     false,
		},
		{
			name:            "Write empty output",
			versionOutput:   "",
			prefix:          "empty_version",
			expectedPath:    "empty_version/version-output.txt",
			expectedContent: "",
			expectError:     false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()

			file, err := fs.Create("testFile")
			require.NoError(t, err)

			writer := zip.NewWriter(file)

			err = writeVersionOutput(writer, tc.versionOutput, tc.prefix)

			// Check if we expected an error
			if tc.expectError {
				assert.Error(t, err)
				return
			}
			assert.NoError(t, err)

			err = writer.Close()
			assert.NoError(t, err)

			err = file.Close()
			assert.NoError(t, err)

			// Open the zip archive for reading
			readFile, err := fs.Open("testFile")
			require.NoError(t, err)
			defer readFile.Close() //nolint:errcheck // closing the file

			fileInfo, err := readFile.Stat()
			require.NoError(t, err)

			reader, err := zip.NewReader(readFile, fileInfo.Size())
			require.NoError(t, err)

			// Check if the file exists in the zip
			var found bool
			for _, f := range reader.File {
				if f.Name == tc.expectedPath {
					found = true
					rc, err := f.Open()
					require.NoError(t, err)
					defer rc.Close() //nolint:errcheck // closing the file

					content, err := io.ReadAll(rc)
					require.NoError(t, err)

					// Check the file content
					assert.Equal(t, tc.expectedContent, string(content))
					break
				}
			}
			assert.True(t, found, "Expected file not found in zip archive")
		})
	}
}
