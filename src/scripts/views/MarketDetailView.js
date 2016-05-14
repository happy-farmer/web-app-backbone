/*
 * @module views/MarketDetailView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').marketDetail
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
