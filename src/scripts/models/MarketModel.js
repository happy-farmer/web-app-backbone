/*
 * @module models/MarketModel
 */

 /* global define */

define((require) => {
  'use strict'
  var Bb = require('backbone')
  var config = require('app-config')
  var urlRoot = `${config.apiUri}/markets`
  return Bb.Model.extend({
    urlRoot
  })
})
