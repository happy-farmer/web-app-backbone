#!/usr/bin/env bash -x

jsdoc -r -c ./config/jsdoc.json -d ./docs/scripts -R README.md ./src/scripts
