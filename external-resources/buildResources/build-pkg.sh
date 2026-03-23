#!/bin/bash

for arg in "$@"
do
    eval "$arg"
done

if [ -z "$VERSION" ]; then
    echo "Usage: $0 VERSION=x.y.z"
    exit 1
fi

SOURCE_DIR="./"
BUILD_DIR="./dist/pkg"
IGNORE_FILE="./buildResources/.pkgignore"

rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

EXCLUDES=""
while read -r line; do
    EXCLUDES="$EXCLUDES --exclude='$line'"
done < "$IGNORE_FILE"

echo $EXCLUDES

eval rsync -av $EXCLUDES "$SOURCE_DIR/" "$BUILD_DIR/"

pkgbuild --root ./dist/pkg/ \
         --identifier tubitblock.cc.tubitblock-external-resource \
         --version $VERSION \
         --install-location /Library/TUbitBlockExternalResources \
         --ownership recommended \
         --scripts buildResources/mac-scripts \
         ./dist/TUbitBlock-External-Resources-v$VERSION.pkg
