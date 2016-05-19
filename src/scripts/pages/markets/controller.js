/**
 * @module pages/markets/controller
 * @description markets route controller
 */

/* global define */
define((require) => {
  var MarketView = require('views/market/MarketDetailView')
  var MarketModel = require('models/MarketModel')

  return (main, id) => {
    var marketModel = new MarketModel({id})
    marketModel
      .fetch()
      .then(() => {
        main.show(new MarketView({
          model: marketModel
        }))
      })
  }
})
