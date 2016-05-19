/**
 * @module pages/markets/controller
 * @description markets route controller
 */

/* global define */
define((require) => {
  var View = require('views/market/MarketDetailView')
  var Model = require('models/MarketModel')

  return (main, id) => {
    var model = new Model({id})
    model
      .fetch()
      .then(() => {
        main.show(new View({
          model
        }))
      })
  }
})
