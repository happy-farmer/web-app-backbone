/*
 * @module models/FarmsModel
 */

 /* global define */

define((require) => {
  'use strict'
  var Bb = require('backbone')
  var config = require('app-config')
  var urlRoot = `${config.apiUri}/farms`
  return Bb.Model.extend({
    urlRoot
  })
})
