/*
 * @module views/market/MarketDetailEditView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').marketDetailEdit
  var Mt = require('marionette')
  var Bb = require('backbone')
  var $ = require('mixins/jqueryPlus')

  return Mt.ItemView.extend({
    template,
    events: {
      'submit form': 'send'
    },
    send (ev) {
      ev.preventDefault()
      var form = $(ev.currentTarget)
      var data = form.serializeObject()
      this.model.set(data)
      Bb.sync('patch', this.model)
    }
  })
})
