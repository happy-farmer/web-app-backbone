/*
 * @module views/DeleteView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').delete
  var Mt = require('marionette')

  return Mt.ItemView.extend({
    template
  })
})
