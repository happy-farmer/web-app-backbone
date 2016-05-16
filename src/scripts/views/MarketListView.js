/*
 * @module views/MarketListView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').marketList
  var Mt = require('marionette')
  var ItemView = require('views/MarketView')

  return Mt.CompositeView.extend({
    template,
    childViewContainer: '[data-list=market]',
    childView: ItemView
  })
})
