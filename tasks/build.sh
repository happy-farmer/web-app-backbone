#!/usr/bin/env bash

npm run clear && \
npm run copy-dependencies & \
npm run compile-templates && npm run build-index \
npm run compile-scripts & \
npm run copy-app-config & \
npm run unlink-assets && npm run copy-assets & \
npm run compile-styles &

wait
