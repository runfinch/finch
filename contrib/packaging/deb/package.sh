#!/bin/bash

set -eux

VERSION="0.0.0"
ARM64="arm64"
AMD64="amd64"
BUILD_ARCHITECTURES=()

# If no arguments provided, build both architectures
if [ $# -eq 0 ]; then
    BUILD_ARCHITECTURES+=("$ARM64")
    BUILD_ARCHITECTURES+=("$AMD64")
else
    while [ $# -gt 0 ]; do
        case "$1" in
            --arm64)
                BUILD_ARCHITECTURES+=("$ARM64")
                ;;
            --amd64)
                BUILD_ARCHITECTURES+=("$AMD64")
                ;;
            --version)
                shift
                if [ $# -eq 0 ]; then
                    echo "Error: --version requires an argument"
                    exit 1
                fi
                VERSION="$1"
                ;;
            --help)
                echo "Usage: $0 [--arm64] [--amd64] [--version VERSION]"
                echo "  --arm64         Build for ARM64 architecture"
                echo "  --amd64         Build for AMD64 architecture"
                echo "  --version VER   Set package version (default: 0.0.0)"
                echo "  --help          Show this help message"
                echo "If no architecture flags are provided, both architectures will be built."
                exit 0
                ;;
            *)
                echo "Unknown option: $1"
                echo "Use --help for usage information"
                exit 1
                ;;
        esac
        shift
    done
fi

# define directories
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PKG_FILES="$(dirname "$SCRIPT_DIR")"
ROOT_DIR="$(dirname "$(dirname "$PKG_FILES")")"
PKG_CONFIG="$PKG_FILES/config"
TEMP_BUILD_DIR="${SCRIPT_DIR}/TMP/build"

# finch daemon
FINCHD_PACKAGE="github.com/runfinch/finch-daemon"
FINCHD_RELEASE="0.20.0"
FINCHD_COMMIT="ef5d71ddf0a98f39f6ebcf0401b8706543c9f04e"
FINCHD_SRC=finch-daemon-"${FINCHD_COMMIT}"

# nerdctl
NERDCTL_PACKAGE="github.com/containerd/nerdctl"
NERDCTL_MODULE="github.com/containerd/nerdctl/v2"
NERDCTL_RELEASE="2.1.6"
NERDCTL_COMMIT="59253e9931873e79b92fe3400f14e69d6be34025"
NERDCTL_SRC=nerdctl-"${NERDCTL_COMMIT}"
NERDCTL_VERSION="v$(echo "$NERDCTL_RELEASE" | sed 's/-.*//')"

# buildkit
BUILDKIT_PACKAGE="github.com/moby/buildkit"
BUILDKIT_RELEASE="0.24.0"
BUILDKIT_COMMIT="b772c318368090fb2ffc9c0fed92e0a35bf82389"
BUILDKIT_SRC=buildkit-"${BUILDKIT_COMMIT}"
BUILDKIT_VERSION=$(echo "$BUILDKIT_RELEASE" | sed 's/-.*//')

# soci
SOCI_PACKAGE="github.com/awslabs/soci-snapshotter"
SOCI_RELEASE="0.11.1"
SOCI_COMMIT="28781de6731978b2e2f0f43573a345e9fa14dbd1"
SOCI_SRC=soci-snapshotter-"${SOCI_COMMIT}"
SOCI_GO_LDFLAGS="-ldflags '-s -w -X ${SOCI_PACKAGE}/version.Version=v${SOCI_RELEASE} -X ${SOCI_PACKAGE}/version.Revision=${SOCI_COMMIT}'"

# cni
CNI_PACKAGE="github.com/containernetworking/plugins"
CNI_RELEASE="1.8.0"
CNI_COMMIT="0e648479e11c2c6d9109b14fc0c9ac64c677861b"
CNI_SRC=plugins-"${CNI_COMMIT}"

# cosign
COSIGN_PACKAGE="github.com/sigstore/cosign"
COSIGN_RELEASE="2.2.3"
COSIGN_COMMIT="493e6e29e2ac830aaf05ec210b36d0a5a60c3b32"
COSIGN_SRC=cosign-"${COSIGN_COMMIT}"

# prep directories
mkdir -p "${TEMP_BUILD_DIR}"

pull_and_extract_package() {
        pushd "${TEMP_BUILD_DIR}"
        curl -L -o "${3}.tar.gz" "https://$1/archive/$2/$3.tar.gz"
        tar xzf "${3}.tar.gz" -C .
        rm "${3}.tar.gz"
        popd
}

# pull all packages
pull_and_extract_package "${FINCHD_PACKAGE}" "${FINCHD_COMMIT}" "${FINCHD_SRC}"
pull_and_extract_package "${NERDCTL_PACKAGE}" "${NERDCTL_COMMIT}" "${NERDCTL_SRC}"
pull_and_extract_package "${BUILDKIT_PACKAGE}" "${BUILDKIT_COMMIT}" "${BUILDKIT_SRC}"
pull_and_extract_package "${SOCI_PACKAGE}" "${SOCI_COMMIT}" "${SOCI_SRC}"
pull_and_extract_package "${CNI_PACKAGE}" "${CNI_COMMIT}" "${CNI_SRC}"
pull_and_extract_package "${COSIGN_PACKAGE}" "${COSIGN_COMMIT}" "${COSIGN_SRC}"

# build finch daemon
pushd "${TEMP_BUILD_DIR}/${FINCHD_SRC}"
make
popd

# build nerdctl
pushd "$TEMP_BUILD_DIR/$NERDCTL_SRC"
go build -ldflags "-s -w -X ${NERDCTL_MODULE}/pkg/version.Revision=${NERDCTL_COMMIT} -X ${NERDCTL_MODULE}/pkg/version.Version=${NERDCTL_VERSION}" -o _output/nerdctl ./cmd/nerdctl
popd

# build buildkit
pushd "$TEMP_BUILD_DIR/$BUILDKIT_SRC"
go build -mod=vendor -buildmode=pie -ldflags "-w -X ${BUILDKIT_PACKAGE}/version.Version=${BUILDKIT_VERSION} -X ${BUILDKIT_PACKAGE}/version.Revision=${BUILDKIT_COMMIT}" -o _output/buildkitd ${BUILDKIT_PACKAGE}/cmd/buildkitd
go build -mod=vendor -buildmode=pie -ldflags "-w -X ${BUILDKIT_PACKAGE}/version.Version=${BUILDKIT_VERSION} -X ${BUILDKIT_PACKAGE}/version.Revision=${BUILDKIT_COMMIT}" -o _output/buildctl ${BUILDKIT_PACKAGE}/cmd/buildctl
popd

# build soci
pushd "$TEMP_BUILD_DIR/$SOCI_SRC/cmd"
go build -o "./../out/soci-snapshotter-grpc" -ldflags "-s -w -X ${SOCI_PACKAGE}/version.Version=v${SOCI_RELEASE} -X ${SOCI_PACKAGE}/version.Revision=${SOCI_COMMIT}" ./soci-snapshotter-grpc
go build -o "./../out/soci" -ldflags "-s -w -X ${SOCI_PACKAGE}/version.Version=v${SOCI_RELEASE} -X ${SOCI_PACKAGE}/version.Revision=${SOCI_COMMIT}" ./soci
popd

# build cni
pushd "$TEMP_BUILD_DIR/$CNI_SRC"
./build_linux.sh
popd

# build cosign
pushd "$TEMP_BUILD_DIR/$COSIGN_SRC"
GIT_VERSION="$COSIGN_RELEASE" GIT_HASH="$COSIGN_COMMIT" make cosign
popd

# build finch cli
pushd "$ROOT_DIR"
make
popd

# build dependencies and setup folder structure for each architecture
for arch in "${BUILD_ARCHITECTURES[@]}"; do
        ARCH_DIR="${SCRIPT_DIR}/runfinch-finch_${VERSION}_${arch}"
        mkdir -p $ARCH_DIR

        # setup finch directories
        mkdir -p "$ARCH_DIR/bin"
        mkdir -p "$ARCH_DIR/usr/bin"
        mkdir -p "$ARCH_DIR/usr/local/bin"
        mkdir -p "$ARCH_DIR/usr/libexec/finch"
        mkdir -p "$ARCH_DIR/usr/libexec/finch/cni/bin"
        mkdir -p "$ARCH_DIR/var/lib/finch/buildkit"
        mkdir -p "$ARCH_DIR/var/lib/finch/soci"
        mkdir -p "$ARCH_DIR/etc/finch/cni/net.d"
        mkdir -p "$ARCH_DIR/etc/finch/nerdctl"
        mkdir -p "$ARCH_DIR/etc/finch/buildkit"
        mkdir -p "$ARCH_DIR/etc/finch/soci"
        mkdir -p "$ARCH_DIR/etc/containerd"
        mkdir -p "$ARCH_DIR/etc/systemd/system"

        # setup DEBIAN directory, control file, and cleanup scripts
        mkdir -p "${ARCH_DIR}/DEBIAN"
        cp "$SCRIPT_DIR/control" "$ARCH_DIR/DEBIAN/control" && echo "Version: $VERSION" >> "$ARCH_DIR/DEBIAN/control"
        sed "s/\${ARCH}/$arch/g" "$ARCH_DIR/DEBIAN/control" | sudo tee "$ARCH_DIR/DEBIAN/control" > /dev/null
        cp "$SCRIPT_DIR/postrm" "$ARCH_DIR/DEBIAN/"
        cp "$SCRIPT_DIR/prerm" "$ARCH_DIR/DEBIAN/"
        chmod 755 "$ARCH_DIR/DEBIAN/prerm" "$ARCH_DIR/DEBIAN/postrm"

        # install finchd
        sudo install -m 0755 "${TEMP_BUILD_DIR}/${FINCHD_SRC}/bin/finch-daemon" "${ARCH_DIR}/usr/libexec/finch/"
        sudo install -m 0755 "${TEMP_BUILD_DIR}/${FINCHD_SRC}/bin/docker-credential-finch" "${ARCH_DIR}/usr/libexec/finch/"
        sudo install -m 0644 "$PKG_CONFIG/finch.service" "$ARCH_DIR/etc/systemd/system/finch.service"
        sudo install -m 0644 "$PKG_CONFIG/finch.yaml" "$ARCH_DIR/etc/finch"
        sudo install -m 0644 "$PKG_CONFIG/finch.socket" "$ARCH_DIR/etc/systemd/system"

        # install nerdctl
        sudo install -m 0755 -t "$ARCH_DIR/usr/libexec/finch" $TEMP_BUILD_DIR/$NERDCTL_SRC/_output/nerdctl*
        sudo install -m 0644 "$PKG_CONFIG/nerdctl_ubuntu.toml" "$ARCH_DIR/etc/finch/nerdctl/nerdctl.toml"
        sudo install -m 0644 "$PKG_CONFIG/nerdctl_ubuntu.toml" "$ARCH_DIR/etc/finch/finch.toml"

        # install buildkit
        sudo install -m 0755 "$TEMP_BUILD_DIR/$BUILDKIT_SRC/_output/buildkitd" "$ARCH_DIR/usr/libexec/finch"
        sudo install "$TEMP_BUILD_DIR/$BUILDKIT_SRC/_output/buildctl" "$ARCH_DIR/usr/libexec/finch"

        sudo install -m 0644 "$PKG_CONFIG/buildkitd.toml" "$ARCH_DIR/etc/finch/buildkit"
        sudo install -m 0644 "$PKG_CONFIG/finch-buildkit.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/finch-buildkit.socket" "$ARCH_DIR/etc/systemd/system"

        # install soci
        sudo install "$TEMP_BUILD_DIR/$SOCI_SRC/out/soci" "$ARCH_DIR/usr/libexec/finch"
        sudo install "$TEMP_BUILD_DIR/$SOCI_SRC/out/soci-snapshotter-grpc" "$ARCH_DIR/usr/libexec/finch"

        sudo install -m 0644 "$PKG_CONFIG/finch-soci.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/finch-soci.socket" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/soci-snapshotter-grpc.toml" "$ARCH_DIR/etc/finch/soci"

        # install cni
        sudo install -t "$ARCH_DIR/usr/libexec/finch/cni/bin" $TEMP_BUILD_DIR/$CNI_SRC/bin/*

        # install cosign
        sudo install -m 0755 "$TEMP_BUILD_DIR/$COSIGN_SRC/cosign" "$ARCH_DIR/usr/libexec/finch"

        # install finch cli
        sudo install -m 0755 "$ROOT_DIR/_output/bin/finch" "$ARCH_DIR/usr/bin"

        # build deb
        dpkg-deb --build --root-owner-group ${SCRIPT_DIR}/runfinch-finch_${VERSION}_${arch}
done

# clean up
sudo rm -rf $SCRIPT_DIR/TMP
sudo find "$SCRIPT_DIR" -name "runfinch-finch*" ! -name "*.deb" -exec rm -rf {} +

# move .deb to _output dir
pushd "$ROOT_DIR"/_output
mkdir deb
pushd deb
mv $SCRIPT_DIR/runfinch-finch* .
popd && popd

echo "✅ Sucessfully packaged .deb for Finch"
exit
