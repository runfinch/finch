// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin
// +build darwin

package config

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/mocks"
)

var qemuPkgScriptWithHeader = fmt.Sprintf(qemuPkgInstallationScript, userModeEmulationProvisioningScriptHeader)

func TestDiskLimaConfigApplier_Apply(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		config       *Finch
		defaultPath  string
		overridePath string
		isInit       bool
		mockSvc      func(
			fs afero.Fs,
			l *mocks.Logger,
			cmd *mocks.Command,
			creator *mocks.CommandCreator,
			deps *mocks.LimaConfigApplierSystemDeps,
		)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         error
	}{
		{
			name: "happy path",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				_ afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "adds soci script and sets soci as default snapshotter when soci is first in snapshotters array",
			config: &Finch{
				Memory:       pointer.String("2GiB"),
				CPUs:         pointer.Int(4),
				VMType:       pointer.String("qemu"),
				Rosetta:      pointer.Bool(false),
				Snapshotters: []string{"soci"},
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				deps *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				deps.EXPECT().Arch().Return(runtime.GOARCH)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, runtime.GOARCH)
				sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
				sociShaSum := sociAMD64Sha256Sum
				if runtime.GOARCH == "arm64" {
					sociShaSum = sociARM64Sha256Sum
				}
				sociServiceDownloadURL := fmt.Sprintf(sociServiceDownloadURLFormat, sociVersion)
				sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat,
					sociInstallationProvisioningScriptHeader,
					sociFileName,
					sociDownloadURL,
					sociShaSum,
					sociServiceDownloadURL)

				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, "soci", limaCfg.Env["CONTAINERD_SNAPSHOTTER"])
				require.Equal(t, sociInstallationScript, limaCfg.Provision[0].Script)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "doesn't add soci script and doesn't change default snapshotter when snapshotters is not set in config",
			config: &Finch{
				Memory:       pointer.String("2GiB"),
				CPUs:         pointer.Int(4),
				VMType:       pointer.String("qemu"),
				Rosetta:      pointer.Bool(false),
				Snapshotters: []string{},
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				val, ok := limaCfg.Env["CONTAINERD_SNAPSHOTTER"]
				require.Equal(t, "", val)
				require.False(t, ok)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "doesn't add soci script when soci is not in snapshotters array",
			config: &Finch{
				Memory:       pointer.String("2GiB"),
				CPUs:         pointer.Int(4),
				VMType:       pointer.String("qemu"),
				Rosetta:      pointer.Bool(false),
				Snapshotters: []string{"overlayfs"},
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				require.Equal(t, "overlayfs", limaCfg.Env["CONTAINERD_SNAPSHOTTER"])

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "adds soci script but keeps overlayfs as default when soci is present in snapshotters array but not first element",
			config: &Finch{
				Memory:       pointer.String("2GiB"),
				CPUs:         pointer.Int(4),
				VMType:       pointer.String("qemu"),
				Rosetta:      pointer.Bool(false),
				Snapshotters: []string{"overlayfs", "soci"},
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				deps *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				deps.EXPECT().Arch().Return(runtime.GOARCH)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, runtime.GOARCH)
				sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
				sociShaSum := sociAMD64Sha256Sum
				if runtime.GOARCH == "arm64" {
					sociShaSum = sociARM64Sha256Sum
				}
				sociServiceDownloadURL := fmt.Sprintf(sociServiceDownloadURLFormat, sociVersion)
				sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat,
					sociInstallationProvisioningScriptHeader,
					sociFileName,
					sociDownloadURL,
					sociShaSum,
					sociServiceDownloadURL)

				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, "overlayfs", limaCfg.Env["CONTAINERD_SNAPSHOTTER"])
				require.Equal(t, sociInstallationScript, limaCfg.Provision[0].Script)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "doesn't add soci script when snapshotter is not set in config",
			config: &Finch{
				Memory:       pointer.String("2GiB"),
				CPUs:         pointer.Int(4),
				VMType:       pointer.String("qemu"),
				Rosetta:      pointer.Bool(false),
				Snapshotters: []string{"soci", "overlayfs"},
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				deps *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				deps.EXPECT().Arch().Return(runtime.GOARCH)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				sociFileName := fmt.Sprintf(sociFileNameFormat, sociVersion, runtime.GOARCH)
				sociDownloadURL := fmt.Sprintf(sociDownloadURLFormat, sociVersion, sociFileName)
				sociShaSum := sociAMD64Sha256Sum
				if runtime.GOARCH == "arm64" {
					sociShaSum = sociARM64Sha256Sum
				}
				sociServiceDownloadURL := fmt.Sprintf(sociServiceDownloadURLFormat, sociVersion)
				sociInstallationScript := fmt.Sprintf(sociInstallationScriptFormat,
					sociInstallationProvisioningScriptHeader,
					sociFileName,
					sociDownloadURL,
					sociShaSum,
					sociServiceDownloadURL)

				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				require.Equal(t, "soci", limaCfg.Env["CONTAINERD_SNAPSHOTTER"])
				require.Equal(t, sociInstallationScript, limaCfg.Provision[0].Script)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "updates vmType and removes cross-arch provisioning script and network config",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(true),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				deps *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/default.yaml", []byte(`
		vmType: "qemu"
		provision:
		- mode: system
		  script: |
		    # cross-arch tools
		    #!/bin/bash
		    qemu_pkgs=""
		    if [ ! -f /usr/bin/qemu-aarch64-static ]; then
		      qemu_pkgs="$qemu_pkgs qemu-user-static-aarch64"
		    elif [ ! -f /usr/bin/qemu-aarch64-static ]; then
		      qemu_pkgs="$qemu_pkgs qemu-user-static-arm"
		    elif [ ! -f  /usr/bin/qemu-aarch64-static ]; then
		      qemu_pkgs="$qemu_pkgs qemu-user-static-x86"
		    fi

		    if [[ $qemu_pkgs ]]; then
		      dnf install -y --setopt=install_weak_deps=False ${qemu_pkgs}
		    fi
		`), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
				deps.EXPECT().Arch().Return(runtime.GOARCH)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)

				require.Equal(t, "vz", *limaCfg.VMType)
				require.Equal(t, "virtiofs", *limaCfg.MountType)
				require.Equal(t, true, *limaCfg.Rosetta.BinFmt)
				require.Equal(t, true, *limaCfg.Rosetta.Enabled)
				require.Len(t, limaCfg.Provision, 0)
			},
			want: nil,
		},
		{
			name: "updates vmType from vz to qemu and adds cross-arch provisioning script",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/default.yaml", []byte(`
vmType: "vz"
rosetta:
	enabled: true
	binfmt: true
`), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "qemu", *limaCfg.VMType)
				require.Equal(t, false, *limaCfg.Rosetta.Enabled)
				require.Equal(t, false, *limaCfg.Rosetta.BinFmt)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "does not update lima config because isInit == false",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       false,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.Command,
				_ *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/default.yaml", []byte(`vmType: "qemu"
mountType: "reverse-sshfs"`), 0o600)
				require.NoError(t, err)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "qemu", *limaCfg.VMType)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, len(limaCfg.Provision), 0)
			},
			want: nil,
		},
		{
			name: "lima config file does not exist",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "lima config file does not contain valid YAML",
			config: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(4),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/default.yaml", []byte("this isn't YAML"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
		{
			name: "lima config file with additional directories",
			config: &Finch{
				Memory:                pointer.String("2GiB"),
				CPUs:                  pointer.Int(4),
				AdditionalDirectories: []AdditionalDirectory{{pointer.String("/Volumes")}},
				VMType:                pointer.String("qemu"),
				Rosetta:               pointer.Bool(false),
			},
			defaultPath:  "/default.yaml",
			overridePath: "/override.yaml",
			isInit:       true,
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				cmd *mocks.Command,
				creator *mocks.CommandCreator,
				_ *mocks.LimaConfigApplierSystemDeps,
			) {
				err := afero.WriteFile(fs, "/lima.yaml", []byte("memory: 4GiB\ncpus: 8"), 0o600)
				require.NoError(t, err)
				cmd.EXPECT().Output().Return([]byte("13.0.0"), nil)
				creator.EXPECT().Create("sw_vers", "-productVersion").Return(cmd)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "/override.yaml")
				require.NoError(t, err)

				var limaCfg limayaml.LimaYAML
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, 4, *limaCfg.CPUs)
				require.Equal(t, "2GiB", *limaCfg.Memory)
				require.Equal(t, 1, len(limaCfg.Mounts))
				require.Equal(t, "/Volumes", limaCfg.Mounts[0].Location)
				require.Equal(t, true, *limaCfg.Mounts[0].Writable)

				buf, err = afero.ReadFile(fs, "/default.yaml")
				require.NoError(t, err)
				err = yaml.Unmarshal(buf, &limaCfg)
				require.NoError(t, err)
				require.Equal(t, "reverse-sshfs", *limaCfg.MountType)
				require.Equal(t, "system", limaCfg.Provision[0].Mode)
				require.Equal(t, qemuPkgScriptWithHeader, limaCfg.Provision[0].Script)
			},
			want: nil,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmd := mocks.NewCommand(ctrl)
			cmdCreator := mocks.NewCommandCreator(ctrl)
			deps := mocks.NewLimaConfigApplierSystemDeps(ctrl)
			l := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			finchConfigPath := "/finch.yaml"

			tc.mockSvc(fs, l, cmd, cmdCreator, deps)
			var got error
			if tc.isInit {
				got = NewLimaApplier(
					tc.config,
					cmdCreator,
					fs,
					tc.defaultPath,
					tc.overridePath,
					deps,
					finchConfigPath,
				).ConfigureDefaultLimaYaml()
				_ = NewLimaApplier(
					tc.config,
					cmdCreator,
					fs,
					tc.defaultPath,
					tc.overridePath,
					deps,
					finchConfigPath,
				).ConfigureOverrideLimaYaml()
			} else {
				got = NewLimaApplier(
					tc.config,
					cmdCreator,
					fs,
					tc.defaultPath,
					tc.overridePath,
					deps,
					finchConfigPath,
				).ConfigureOverrideLimaYaml()
			}

			require.Equal(t, tc.want, got)
			tc.postRunCheck(t, fs)
		})
	}
}
