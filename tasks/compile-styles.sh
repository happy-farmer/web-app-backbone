#!/usr/bin/env bash

mkdir -p ./build/styles

node-sass ./src/styles/index.scss \
| postcss -c ./config/postcss.json \
> ./build/styles/index.css
