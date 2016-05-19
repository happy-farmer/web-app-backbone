/*
 * @module views/market/MarketView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').market
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
