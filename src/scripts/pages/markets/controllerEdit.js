/**
 * @module pages/markets/controllerEdit
 * @description markets route controller for editing
 */

/* global define */
define((require) => {
  var MarketView = require('views/MarketDetailEditView')
  var MarketModel = require('models/MarketModel')

  return (main, id) => {
    var marketModel = new MarketModel({id})
    var marketView = new MarketView({
      model: marketModel
    })
    marketModel
      .fetch()
      .then(() => {
        main.show(marketView)
      })
  }
})
