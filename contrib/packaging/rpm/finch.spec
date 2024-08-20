%global _trivial .0
%global _buildid .1

%global debug_package %{nil}

# latest release/commit
%global _finch_release 1.2.3
%global _finch_commit b84b424926d5f4e2d2abf0c51507856a73221e9d

%if 0%{?amzn} > 2
%global requires_systemd_macros false
%endif

# build_latst takes precendence because build_local is for debugging
%if %{undefined build_latest} && %{undefined build_local}
%global finch_release %{_finch_release}
%global finch_commit %{_finch_commit}
%endif

%global finch_package github.com/runfinch/finch
%global finch_src finch-%{finch_commit}
%global finch_rpm_version %(r=%finch_release; echo ${r%%%%-*})

# buildkit
%global buildkit_release 0.15.1
%global buildkit_commit 979542e90f2cb38077c808e0867d8d2c16ed10b8
%global buildkit_package github.com/moby/buildkit
%global buildkit_src buildkit-%{buildkit_commit}
%global buildkit_rpm_version %(r=%buildkit_release; echo ${r%%%%-*})

# soci-snapshotter
%global soci_release 0.7.0
%global soci_commit 7c6fae2c3848fe8ad161ce35d3423898cea5fde8
%global soci_package github.com/awslabs/soci-snapshotter
%global soci_src soci-snapshotter-%{soci_commit}
%global soci_rpm_version %(r=%soci_release; echo ${r%%%%-*})

# cosign
%global cosign_release 2.4.0
%global cosign_commit b5e7dc123a272080f4af4554054797296271e902
%global cosign_package github.com/sigstore/cosign
%global cosign_src cosign-%{cosign_commit}
%global cosign_rpm_version %(r=%cosign_release; echo ${r%%%%-*})

Name: runfinch-finch
Version: %{finch_rpm_version}
Release: 1%{?dist}%{?_trivial}%{?_buildid}
# Upstream license specification: Apache-2.0
License: ASL 2.0
Summary: The Finch CLI is an open source client for container development tool

%if %{defined build_latest}
Source0: https://github.com/pendo324/finch/archive/refs/heads/%{latest_branch}.tar.gz
%else
%if %{defined build_local}
Source0: finch-%{finch_release}.tar.gz
%else
Source0: https://%{finch_package}/archive/%{finch_commit}/%{finch_release}.tar.gz
%endif
%endif
Source1: finch.service
Source2: finch.yaml
Source3: nerdctl.toml
Source4: buildkitd.toml
Source5: finch-buildkit.service
Source6: finch-buildkit.socket
Source7: finch-soci.service
Source8: finch-soci.socket
Source9: soci-snapshotter-grpc.toml

# buildkit
Source1000: https://%{buildkit_package}/archive/%{buildkit_commit}/%{buildkit_src}.tar.gz

# soci-snapshotter
Source2000: https://%{soci_package}/archive/%{soci_commit}/%{soci_src}.tar.gz

# cosign
Source3000: https://%{cosign_package}/archive/%{cosign_commit}/%{cosign_src}.tar.gz

# Runtime requirements
Requires: containerd nerdctl cni-plugins

# Compilation requirements
BuildRequires: golang >= 1.22.3, git, make
%if 0%{?amzn} > 2
# this macro package doesn't exist on AL2
BuildRequires: systemd-rpm-macros
%endif

%description
Finch is an open source client for container development. Its simple
installer provides a minimal native client along with an opinionated
distribution of other open source components. Rather than creating
even more options to reason about and choose from, Finch aims to help
promote other projects by making it easy to install and use them,
while offering a simple native client to tie it all together.

%package buildkit
License: ASL 2.0
Version: %{buildkit_rpm_version}
Summary: concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit 

%description buildkit
BuildKit is a toolkit for converting source code to build artifacts
in an efficient, expressive and repeatable manner.

%package soci-snapshotter
License: ASL 2.0
Version: %{soci_rpm_version}
Summary:  A containerd snapshotter plugin which enables standard OCI images to be lazily loaded without requiring a build-time conversion step. 

%description soci-snapshotter
SOCI Snapshotter is a containerd snapshotter plugin. It enables
standard OCI images to be lazily loaded without requiring a
build-time conversion step. "SOCI" is short for "Seekable OCI",
and is pronounced "so-CHEE".

%prep
# %setup -D -T -c -b 0 -n finch-%{finch_commit}
%setup -c
%if %{defined build_latest}
mv "finch-%{latest_branch}" "finch-%{finch_commit}"
%endif

# extract buildkit
%setup -D -T -a 1000
# extract soci
%setup -D -T -a 2000
# extract cosign
%setup -D -T -a 3000

%build

# build finch
pushd "%{finch_src}"
VERSION=%{finch_release} GITCOMMIT=%{finch_commit} make finch
popd

# build buildkit
pushd "%{buildkit_src}"
go build -mod=vendor -buildmode=pie -ldflags '-w -X %{buildkit_package}/version.Version=%{buildkit_rpm_version}' -o _output/buildkitd %{buildkit_package}/cmd/buildkitd
go build -mod=vendor -buildmode=pie -ldflags '-w -X %{buildkit_package}/version.Version=%{buildkit_rpm_version}' -o _output/buildctl %{buildkit_package}/cmd/buildctl
popd

# build soci
pushd "%{soci_src}"
make
popd

# build cosign
pushd "%{cosign_src}"
GIT_VERSION="%{cosign_release}" GIT_HASH="%{cosign_commit}" make cosign
popd

%check
# pushd "%finch_src"
# make test-unit
# popd

%install
# install finch
install -d %{buildroot}%{_bindir}
install -d %{buildroot}%{_unitdir}
install -d %{buildroot}%{_sharedstatedir}/finch/nerdctl
install -p %{finch_src}/_output/bin/finch %{buildroot}%{_bindir}
install -D -p -m 0644 %{S:1} %{buildroot}%{_unitdir}/finch.service
install -D -p -m 0644 %{S:2} %{buildroot}%{_sysconfdir}/finch/finch.yaml
install -D -p -m 0644 %{S:3} %{buildroot}%{_sysconfdir}/finch/nerdctl.toml

# install buildkit
install -d %{buildroot}%{_sharedstatedir}/finch/buildkit
install -D -p %{buildkit_src}/_output/buildkitd %{buildroot}%{_libexecdir}/finch/buildkitd
install -D -p %{buildkit_src}/_output/buildctl %{buildroot}%{_libexecdir}/finch/buildctl
install -D -p -m 0644 %{S:4} %{buildroot}%{_sysconfdir}/finch/buildkit/buildkitd.toml
install -D -p -m 0644 %{S:5} %{buildroot}%{_unitdir}/finch-buildkit.service
install -D -p -m 0644 %{S:6} %{buildroot}%{_unitdir}/finch-buildkit.socket

# install soci
install -d %{buildroot}%{_sharedstatedir}/finch/soci
install -D -p %{soci_src}/out/soci %{buildroot}%{_libexecdir}/finch/soci
install -D -p %{soci_src}/out/soci-snapshotter-grpc %{buildroot}%{_libexecdir}/finch/soci-snapshotter-grpc
install -D -p -m 0644 %{S:7} %{buildroot}%{_unitdir}/finch-soci.service
install -D -p -m 0644 %{S:8} %{buildroot}%{_unitdir}/finch-soci.socket
install -D -p -m 0644 %{S:9} %{buildroot}%{_sysconfdir}/finch/soci/soci-snapshotter-grpc.toml

# install cosign
install -D -p %{cosign_src}/cosign %{buildroot}%{_libexecdir}/finch/cosign

# nerdctl
ln -sf /usr/local/bin/nerdctl %{buildroot}%{_libexecdir}/finch/nerdctl

%if 0%{?amzn} == 2
# On a fresh install of container-selinux, or updating from selinux-policy in
# amzn2-core to one that more closely tracks upstream, we need to relabel critical
# files to pick up changes to file_contexts introduced by those packages.
%define selinux_relabel_paths %{_bindir}/finch \
        %{_sysconfdir}/finch/ \
        %{_sharedstatedir}/finch/ \
        %{_sharedstatedir}/finch/nerdctl \
        %{_libexecdir}/finch/buildctl \
        %{_sysconfdir}/finch/buildkit \
        %{_sharedstatedir}/finch/buildkit \
        %{_libexecdir}/finch/soci \
        %{_libexecdir}/finch/soci-snapshotter-grpc \
        %{_sysconfdir}/finch/soci

%define do_selinux_relabel() /usr/sbin/selinuxenabled && /usr/sbin/restorecon -r %*

%triggerin -- container-selinux
if [ $1 -eq 1 ]; then # new install, not update
  %{do_selinux_relabel} %{selinux_relabel_paths} ||:
fi
%endif

%files
%license finch-%{finch_commit}/LICENSE
%license buildkit-%{buildkit_commit}/LICENSE
%doc finch-%{finch_commit}/README.md
%{_bindir}/finch
%config(noreplace) %{_sysconfdir}/finch/finch.yaml
%config(noreplace) %{_sysconfdir}/finch/nerdctl.toml
%{_unitdir}/finch.service

# buildkit
%config(noreplace) %{_sysconfdir}/finch/buildkit/buildkitd.toml
%{_libexecdir}/finch/buildkitd
%{_libexecdir}/finch/buildctl
%{_unitdir}/finch-buildkit.service
%{_unitdir}/finch-buildkit.socket
%{_sharedstatedir}/finch/nerdctl
%{_sharedstatedir}/finch/buildkit

# soci-snapshotter
%config(noreplace) %{_sysconfdir}/finch/soci/soci-snapshotter-grpc.toml
%{_libexecdir}/finch/soci
%{_libexecdir}/finch/soci-snapshotter-grpc
%{_unitdir}/finch-soci.service
%{_unitdir}/finch-soci.socket
%{_sharedstatedir}/finch/soci

# cosign
%{_libexecdir}/finch/cosign

# nerdctl
%{_libexecdir}/finch/nerdctl

%pre
# Stop the agent before the upgrade
STATUS="$(systemctl is-active --quiet finch.service)"
if [ "${STATUS}" = "active" ]; then
  systemctl stop finch.service
  systemctl daemon-reload
fi

%preun
# Stop the agent after uninstall
STATUS="$(systemctl is-active --quiet finch.service)"
if [ "${STATUS}" = "active" ]; then
  systemctl stop finch.service
  systemctl daemon-reload
fi
ENABLED="$(systemctl is-enabled --quiet finch.service)"
if [ "${ENABLED}" = "enabled" ]; then
  systemctl disable finch.service
fi
systemctl daemon-reload

%posttrans
# Start the agent after initial install or upgrade
systemctl enable finch.service
systemctl start finch.service
systemctl daemon-reload

%changelog
* Fri Jul 26 2024 Justin Alvarez <alvajus@amazon.com> - 
- First pre-release RPM spec
