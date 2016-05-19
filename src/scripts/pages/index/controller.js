/**
 * @module pages/index/controller
 * @description index route controller
 */

/* global define */
define((require) => {
  var ListView = require('views/farm/FarmListView')
  var Collection = require('collections/FarmsCollection')

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
