/*
 * @module views/farm/FarmDetailSaveView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').farmDetailSave
  var Mt = require('marionette')
  var $ = require('mixins/jqueryPlus')
  var _ = require('underscore')

  return Mt.ItemView.extend({
    template,
    events: {
      'submit form': 'send'
    },
    initialize: function (options) {
      this.options = _.extend(this._defaults, options)
    },
    send (ev) {
      ev.preventDefault()
      var form = $(ev.currentTarget)
      var data = form.serializeObject()
      this.model.save(data, this.options.save)
    },
    _defaults: {
      save: {}
    }
  })
})
