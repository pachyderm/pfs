#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

# --- begin runfiles.bash initialization v3 ---
# Copy-pasted from the Bazel Bash runfiles library v3.
set -uo pipefail; set +e; f=bazel_tools/tools/bash/runfiles/runfiles.bash
# shellcheck source=/dev/null.
source "${RUNFILES_DIR:-/dev/null}/$f" 2>/dev/null || \
source "$(grep -sm1 "^$f " "${RUNFILES_MANIFEST_FILE:-/dev/null}" | cut -f2- -d' ')" 2>/dev/null || \
source "$0.runfiles/$f" 2>/dev/null || \
source "$(grep -sm1 "^$f " "$0.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
source "$(grep -sm1 "^$f " "$0.exe.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
{ echo>&2 "ERROR: cannot find $f; this script must be run with 'bazel run'"; exit 1; }; f=; set -e
# --- end runfiles.bash initialization v3 ---

exec "$(rlocation _main/tools/helm/_helm)" lint "$(rlocation _main/etc/helm/pachyderm)" \
     --set deployTarget=LOCAL \
     --strict \
     2>&1 | grep -v "Contents of linked file included and used"
