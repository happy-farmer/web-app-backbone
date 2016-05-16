/**
 * @module pages/index/controller
 * @description index route controller
 */

/* global define */
define((require) => {
  var MarketListView = require('views/MarketListView')
  var MarketsCollection = require('collections/MarketsCollection')

  return (main) => {
    var marketsCollection = new MarketsCollection()
    var listView = new MarketListView({
      collection: marketsCollection
    })
    marketsCollection
      .fetch()
      .then(() => {
        main.show(listView)
      })
  }
})
