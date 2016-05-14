#!/usr/bin/env node

var fs = require('fs')
var cwd = process.cwd()
var _index = fs.readFileSync(cwd + '/src/_index.hbs').toString()

var requirejs = require('requirejs')
requirejs.config({
  baseUrl: cwd,
  paths: {
    // aliasing full version of handlebars as runtime
    // for templates to pick it up
    'handlebars.runtime': 'node_modules/handlebars/dist/handlebars'
  }
})

requirejs([
  'handlebars.runtime',
  'build/scripts/__templates'
], (Handlebars) => {
  Handlebars.partials = Handlebars.templates
  var index = Handlebars.compile(_index)
  var version = process.env.npm_package_version
  var indexStr = index({
    version
  })
  fs.writeFileSync(cwd + '/build/index.html', indexStr)
})
