/*
 * @module views/HeaderView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').header
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
