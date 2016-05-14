#!/usr/bin/env bash

mkdir -p ./build/scripts/lodash

cp node_modules/{\
jquery/dist/jquery.js,\
underscore/underscore.js,\
backbone/backbone.js,\
backbone.marionette/lib/backbone.marionette.js,\
backbone.subroute/backbone.subroute.js,\
babel-polyfill/dist/polyfill.js,\
handlebars/dist/handlebars.runtime.js,\
requirejs/require.js} \
./build/scripts

lodash modularize \
exports=amd \
include=get,set \
-d -o ./build/scripts/lodash
