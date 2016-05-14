/**
 * @module plugins/serializeObject
 * @description Serialize object Jquery form extention
 */

/* global define */
define(function (require) {
  var _ = require('underscore')
  var $ = require('jquery')
  var set = require('lodash/set')

  $.fn.serializeObject = function () {
    var sdata = $(this).serializeArray()
    var data = {}

    _.each(sdata, function (el) {
      set(data, el.name, el.value)
    })

    return data
  }
})
