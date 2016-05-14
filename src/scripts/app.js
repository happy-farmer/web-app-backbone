/**
 * @module app
 *
 */

/* global define */

define((require) => {
  'use strict'
  var Mt = require('marionette')
  var RootView = require('views/RootView')

  var App = Mt.Application.extend({
    regions: {
      root: 'body'
    },
    onStart () {
      var rootView = new RootView()
      this.root.show(rootView)
    }
  })

  return new App()
})
