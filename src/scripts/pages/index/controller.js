/**
 * @module pages/index/controller
 * @description index route controller
 */

/* global define */
define((require) => {
  var MarketView = require('views/MarketView')
  var Mt = require('marionette')
  var MarketsCollection = require('collections/MarketsCollection')

  return (main) => {
    var marketsCollection = new MarketsCollection()
    var ListView = Mt.CollectionView.extend({
      collection: marketsCollection,
      childView: MarketView
    })
    marketsCollection
      .fetch()
      .then(() => {
        main.show(new ListView())
      })
  }
})
