/**
 * @module pages/markets/controller
 * @description markets index route controller
 */

/* global define */
define((require) => {
  var ListView = require('views/market/MarketListView')
  var Collection = require('collections/MarketsCollection')

  return (main) => {
    var collection = new Collection()
    var listView = new ListView({
      collection
    })
    collection
      .fetch()
      .then(() => {
        main.show(listView)
      })
  }
})
