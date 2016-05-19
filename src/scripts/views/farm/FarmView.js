/*
 * @module views/farm/FarmView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').farm
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
