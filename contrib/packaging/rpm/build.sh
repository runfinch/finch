#!/usr/bin/env bash

PROGRAM_NAME="$(basename "$0")"

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd -- "${CURRENT_DIR}/../../.." && pwd)"
RPMBUILD_DIR="${CURRENT_DIR}/rpmbuild"
RPM_DIR="${RPMBUILD_DIR}/RPMS/$(uname -m)"
OUTPUT="${PROJECT_ROOT}/_output/packages/"

usage() {
    cat <<EOF
${PROGRAM_NAME} -- a simple build tool for Finch RPMs. When not passed any options, it builds
                   the latest version of Finch specified in the spec file.

Usage: ${PROGRAM_NAME}
       ${PROGRAM_NAME} [--branch=linux]
       ${PROGRAM_NAME} [--local]
       ${PROGRAM_NAME} -h|--help

Options:

  --branch: Specify a different remote branch to use to build an RPM from.
            Useful for building an RPM for a release branch.

  --local: Build an RPM with the latest commit from your local Finch repository.

  -h,--help: Print this usage message.
EOF
}

error() {
    printf "%s\n" "$*" >/dev/stderr
    exit 1
}

while [ -n "${1-}" ]; do
    case "${1}" in
    -b | --branch)
        BRANCH="${2}"
        shift
        shift
        ;;

    --branch=*)
        BRANCH="${i#*=}"
        shift
        ;;

    -l | --local)
        LOCAL=true
        ;;

    -h | --help)
        usage
        exit 0
        ;;

    -*)
        error "Unknown option: '$1'."
        ;;
    esac
    shift
done

# create build tree + tmp dir
mkdir -p ${RPMBUILD_DIR}/{BUILD,BUILDROOT,RPMS,SOURCES,SPECS,SRPMS,tmp}

commit=$(git rev-parse HEAD)
debug_version=$(git describe --match 'v[0-9]*' --dirty='.modified' --always --tags | cut -c2-)

rpmbuild_opts=(
    --undefine="_disable_source_fetch"
    --define="_topdir ${RPMBUILD_DIR}"
    --define="_tmppath ${RPMBUILD_DIR}/tmp"
)

if [ "${LOCAL}" = true ]; then
    pushd $PROJECT_ROOT
    git archive --format="tar.gz" --prefix="finch-${commit}/" HEAD >"finch-${debug_version}.tar.gz"
    mv "finch-${debug_version}.tar.gz" $CURRENT_DIR
    popd
    rpmbuild_opts+=(
        --define='build_local 1'
        --define="finch_release ${debug_version}"
        --define="finch_commit ${commit}"
    )
fi

if [ ! -z "${BRANCH}" ]; then
    rpmbuild_opts+=(
        --define='build_latest 1'
        --define="latest_branch ${BRANCH}"
        --define="finch_release ${debug_version}"
        --define="finch_commit ${commit}"
    )
fi

# copy all non "meta" files which will be needed for the build to SOURCES
find "${CURRENT_DIR}" -maxdepth 1 -type f \
    \( ! -name '*.spec' \
    -and ! -name 'build.sh' \
    -and ! -name 'README.md' \
    \) -exec cp -t "${RPMBUILD_DIR}/SOURCES" {} +

echo ${rpmbuild_opts[@]}

rpmbuild -ba "${rpmbuild_opts[@]}" "${CURRENT_DIR}/finch.spec"

# copy to output dir
mkdir -p "${OUTPUT}"
cp ${RPM_DIR}/* "${OUTPUT}"
