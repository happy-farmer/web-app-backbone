/**
 * @module mixins/jqueryPlus
 * @description jQuery plus plugins
 *
*/

/* global define */
define((require) => {
  'use strict'
  var $ = require('jquery')
  require('plugins/serializeObject')
  return $
})
