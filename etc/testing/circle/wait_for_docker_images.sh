#!/bin/bash

set -euxo pipefail

for _ in $(seq 1 240); do
    if docker manifest inspect "pachyderm/pachd:$TEST_IMAGE_SHA"; then
        echo "manifest exists"
        exit 0
    fi
    echo "sleeping..."
    sleep 5
done

echo "images not available after 1,200 seconds; giving up"
exit 1
