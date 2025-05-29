#!/bin/bash
 
set -eux

VERSION="1.8.2"
ARM64="arm64"
AMD64="amd64"

# define directories
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PKG_FILES="$(dirname "$SCRIPT_DIR")"
ROOT_DIR="$(dirname "$(dirname "$PKG_FILES")")"
PKG_CONFIG="$PKG_FILES/config"
TEMP_BUILD_DIR="${SCRIPT_DIR}/TMP/build"
 
# finch daemon
FINCHD_PACKAGE="github.com/runfinch/finch-daemon"
FINCHD_RELEASE="0.14.0"
FINCHD_COMMIT="000e7c2dd8f326cb0e4e16225f82ff8b905de450"
FINCHD_SRC=finch-daemon-"${FINCHD_COMMIT}"
 
# containerd
CONTAINERD_PACKAGE="github.com/containerd/containerd"
CONTAINERD_RELEASE="2.0.4"
CONTAINERD_COMMIT="1a43cb6a1035441f9aca8f5666a9b3ef9e70ab20"
CONTAINERD_SRC=containerd-"${CONTAINERD_COMMIT}"
 
# runc
RUNC_PACKAGE="github.com/opencontainers/runc"
RUNC_RELEASE="1.2.6"
RUNC_COMMIT="e89a29929c775025419ab0d218a43588b4c12b9a"
RUNC_SRC=runc-"${RUNC_COMMIT}"
 
# nerdctl
NERDCTL_PACKAGE="github.com/containerd/nerdctl"
NERDCTL_MODULE="github.com/containerd/nerdctl/v2"
NERDCTL_RELEASE="2.0.4"
NERDCTL_COMMIT="39058fbce68e29feecc9cec992ade74b272817d8"
NERDCTL_SRC=nerdctl-"${NERDCTL_COMMIT}"
NERDCTL_VERSION="v$(echo "$NERDCTL_RELEASE" | sed 's/-.*//')"
 
# buildkit
BUILDKIT_PACKAGE="github.com/moby/buildkit"
BUILDKIT_RELEASE="0.20.2"
BUILDKIT_COMMIT="97437fdd7e32f29bb80288d800cd4ffcb34e1c15"
BUILDKIT_SRC=buildkit-"${BUILDKIT_COMMIT}"
BUILDKIT_VERSION=$(echo "$BUILDKIT_RELEASE" | sed 's/-.*//')
 
# soci
SOCI_PACKAGE="github.com/awslabs/soci-snapshotter"
SOCI_RELEASE="0.9.0"
SOCI_COMMIT="737f61a3db40c386f997c1f126344158aa3ad43c"
SOCI_SRC=soci-snapshotter-"${SOCI_COMMIT}"
SOCI_GO_LDFLAGS="-ldflags '-s -w -X ${SOCI_PACKAGE}/version.Version=v${SOCI_RELEASE} -X ${SOCI_PACKAGE}/version.Revision=${SOCI_COMMIT}'"
 
# cni
CNI_PACKAGE="github.com/containernetworking/plugins"
CNI_RELEASE="1.6.2"
CNI_COMMIT="7f756b411efc3d3730c707e2cc1f2baf1a66e28c"
CNI_SRC=plugins-"${CNI_COMMIT}"
 
# cosign
COSIGN_PACKAGE="github.com/sigstore/cosign"
COSIGN_RELEASE="2.5.0"
COSIGN_COMMIT="38bb98697005cdc5c092f031594c0e45d039f4a0"
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
pull_and_extract_package "${CONTAINERD_PACKAGE}" "${CONTAINERD_COMMIT}" "${CONTAINERD_SRC}"  
pull_and_extract_package "${RUNC_PACKAGE}" "${RUNC_COMMIT}" "${RUNC_SRC}"  
pull_and_extract_package "${NERDCTL_PACKAGE}" "${NERDCTL_COMMIT}" "${NERDCTL_SRC}"  
pull_and_extract_package "${BUILDKIT_PACKAGE}" "${BUILDKIT_COMMIT}" "${BUILDKIT_SRC}"  
pull_and_extract_package "${SOCI_PACKAGE}" "${SOCI_COMMIT}" "${SOCI_SRC}"  
pull_and_extract_package "${CNI_PACKAGE}" "${CNI_COMMIT}" "${CNI_SRC}"  
pull_and_extract_package "${COSIGN_PACKAGE}" "${COSIGN_COMMIT}" "${COSIGN_SRC}"
 
# build finch daemon
pushd "${TEMP_BUILD_DIR}/${FINCHD_SRC}"
make
popd
 
# build containerd
pushd "$TEMP_BUILD_DIR/$CONTAINERD_SRC"
make VERSION="$CONTAINERD_RELEASE" REVISION="$CONTAINERD_COMMIT"
sudo rm bin/containerd-stress
popd
 
# build runc
pushd "$TEMP_BUILD_DIR/$RUNC_SRC"
make BUILDTAGS='seccomp apparmor selinux' VERSION="$RUNC_RELEASE" COMMIT="$RUNC_COMMIT"
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
for arch in "$ARM64" "$AMD64"; do
        ARCH_DIR="${SCRIPT_DIR}/run-finch_${VERSION}_${arch}"
        mkdir -p $ARCH_DIR
 
        # setup finch directories
        mkdir -p "$ARCH_DIR/bin"
        mkdir -p "$ARCH_DIR/usr/bin"
        mkdir -p "$ARCH_DIR/usr/local/bin"
        mkdir -p "$ARCH_DIR/usr/libexec/finch"
        mkdir -p "$ARCH_DIR/var/lib/finch/buildkit"
        mkdir -p "$ARCH_DIR/var/lib/finch/soci"
        mkdir -p "$ARCH_DIR/opt/cni/bin"
        mkdir -p "$ARCH_DIR/etc/finch/nerdctl"
        mkdir -p "$ARCH_DIR/etc/finch/buildkit"
        mkdir -p "$ARCH_DIR/etc/finch/soci"
        mkdir -p "$ARCH_DIR/etc/containerd"
        mkdir -p "$ARCH_DIR/etc/systemd/system"
 
        # setup DEBIAN directory and control file
        mkdir -p "${ARCH_DIR}/DEBIAN"
        sed "s/\${ARCH}/$arch/g" "$SCRIPT_DIR/control" | sudo tee "$ARCH_DIR/DEBIAN/control" > /dev/null
 
        # install finchd
        sudo install -m 0755 "${TEMP_BUILD_DIR}/${FINCHD_SRC}/bin/finch-daemon" "${ARCH_DIR}/usr/local/bin"
        sudo install -m 0644 "$PKG_CONFIG/finch.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/finch.yaml" "$ARCH_DIR/etc/finch"
 
        sudo ln -s "$ARCH_DIR/usr/local/bin/finch-daemon" "$ARCH_DIR/usr/libexec/finch/finch-daemon"
        sudo install -m 0644 "$PKG_CONFIG/finch.socket" "$ARCH_DIR/etc/systemd/system"
        sudo cat <<EOF | sudo tee $ARCH_DIR/etc/systemd/system/finch.service
[Unit]
Description=finch daemon
Documentation=https://runfinch.com
After=network.target local-fs.target containerd.service finch.socket
Wants=network.target containerd.service
Requires=finch.socket
 
[Service]
ExecStart=/usr/libexec/finch/finch-daemon --debug --socket-addr fd://
Type=notify
Delegate=yes
Restart=always
RestartSec=5
 
[Install]
WantedBy=multi-user.target
EOF
 
        # install containerd
        sudo install -m 0755 -t "$ARCH_DIR/usr/local/bin" $TEMP_BUILD_DIR/$CONTAINERD_SRC/bin/containerd* "$TEMP_BUILD_DIR/$CONTAINERD_SRC/bin/ctr"
        sudo install -m 0644 "$TEMP_BUILD_DIR/$CONTAINERD_SRC/containerd.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/config.toml" "$ARCH_DIR/etc/containerd"
 
        # install runc
        sudo install "$TEMP_BUILD_DIR/$RUNC_SRC/runc" "$ARCH_DIR/bin"
        sudo chmod a+x "$ARCH_DIR/bin/runc"
 
        # install nerdctl
        sudo install -m 0755 -t "$ARCH_DIR/usr/libexec/finch" $TEMP_BUILD_DIR/$NERDCTL_SRC/_output/nerdctl*
        sudo install -m 0644 "$PKG_CONFIG/nerdctl.toml" "$ARCH_DIR/etc/finch/nerdctl"
        sudo ln -s "$ARCH_DIR/usr/libexec/finch/nerdctl" "$ARCH_DIR/usr/local/bin/nerdctl"
 
        # install buildkit
        sudo install -m 0755 "$TEMP_BUILD_DIR/$BUILDKIT_SRC/_output/buildkitd" "$ARCH_DIR/usr/libexec/finch"
        sudo install "$TEMP_BUILD_DIR/$BUILDKIT_SRC/_output/buildctl" "$ARCH_DIR/usr/libexec/finch"
        sudo ln -s "$ARCH_DIR/usr/libexec/finch/buildkitd" "$ARCH_DIR/usr/local/bin/buildkitd"
 
        sudo install -m 0644 "$PKG_CONFIG/buildkitd.toml" "$ARCH_DIR/etc/finch/buildkit"
        sudo install -m 0644 "$PKG_CONFIG/finch-buildkit.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/finch-buildkit.socket" "$ARCH_DIR/etc/systemd/system"
 
        # install soci
        sudo install "$TEMP_BUILD_DIR/$SOCI_SRC/out/soci" "$ARCH_DIR/usr/libexec/finch"
        sudo install "$TEMP_BUILD_DIR/$SOCI_SRC/out/soci-snapshotter-grpc" "$ARCH_DIR/usr/libexec/finch"
        sudo ln -s "$ARCH_DIR/usr/libexec/finch/soci-snapshotter-grpc" "$ARCH_DIR/usr/local/bin/soci-snapshotter-grpc"
 
        sudo install -m 0644 "$PKG_CONFIG/finch-soci.service" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/finch-soci.socket" "$ARCH_DIR/etc/systemd/system"
        sudo install -m 0644 "$PKG_CONFIG/soci-snapshotter-grpc.toml" "$ARCH_DIR/etc/finch/soci"
 
        # install cni
        sudo install -t "$ARCH_DIR/opt/cni/bin" $TEMP_BUILD_DIR/$CNI_SRC/bin/*
 
        # install cosign
        sudo install -m 0755 "$TEMP_BUILD_DIR/$COSIGN_SRC/cosign" "$ARCH_DIR/usr/libexec/finch"
 
        # install finch cli
        sudo install -m 0755 "$ROOT_DIR/_output/bin/finch" "$ARCH_DIR/usr/bin"
done
 
# build arm64 deb
dpkg-deb --build --root-owner-group ${SCRIPT_DIR}/run-finch_${VERSION}_${ARM64}
 
# build the amd64 deb
dpkg-deb --build --root-owner-group ${SCRIPT_DIR}/run-finch_${VERSION}_${AMD64}
 
# clean up
sudo rm -rf $SCRIPT_DIR/TMP
sudo find "$SCRIPT_DIR" -name "run-finch*" ! -name "*.deb" -exec rm -rf {} +

# move .deb to _output dir
pushd "$ROOT_DIR"/_output
mkdir deb
pushd deb
mv $SCRIPT_DIR/run-finch* .
popd && popd
 
echo "✅ Sucessfully packaged .deb for Finch"
exit
