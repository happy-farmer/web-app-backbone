/*
 * @module views/farm/FarmListView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').farmList
  var Mt = require('marionette')
  var ItemView = require('views/farm/FarmView')

  return Mt.CompositeView.extend({
    template,
    childViewContainer: '[data-list=farm]',
    childView: ItemView
  })
})
