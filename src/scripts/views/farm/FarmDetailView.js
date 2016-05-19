/*
 * @module views/farm/FarmDetailView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').farmDetail
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
