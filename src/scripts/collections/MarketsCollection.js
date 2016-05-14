/*
 * @module collections/MarketsCollection
 */

 /* global define */

define((require) => {
  'use strict'
  var Bb = require('backbone')
  var config = require('app-config')
  var url = `${config.apiUri}/markets`
  return Bb.Collection.extend({
    url
  })
})
