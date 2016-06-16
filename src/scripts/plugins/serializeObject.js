/**
 * @module plugins/serializeObject
 * @description Serialize object Jquery form extention
 */

/* global define */
define(function (require) {
  var $ = require('jquery')
  var set = require('lodash/set')

  $.fn.serializeObject = function () {
    var sdata = $(this).serializeArray()
    var data = {}

    $.each(sdata, function (ix, el) {
      set(data, el.name, el.value)
    })

    return data
  }
})
