/*
 * @module collections/FarmsCollection
 */

 /* global define */

define((require) => {
  'use strict'
  var Bb = require('backbone')
  var config = require('app-config')
  var url = `${config.apiUri}/farms`
  return Bb.Collection.extend({
    url
  })
})
