/*
 * @module views/FooterView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').footer
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
