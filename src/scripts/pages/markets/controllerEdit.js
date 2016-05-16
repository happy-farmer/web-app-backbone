/**
 * @module pages/markets/controllerEdit
 * @description markets route controller for editing
 */

/* global define */
define((require) => {
  var MarketView = require('views/MarketDetailSaveView')
  var MarketModel = require('models/MarketModel')

  return (main, options) => {
    var id = options.id
    var save = options.save
    var marketModel = new MarketModel({id})
    var marketView = new MarketView({
      model: marketModel,
      save
    })
    marketModel
      .fetch()
      .then(() => {
        main.show(marketView)
        marketModel.once('sync', options.success)
      })
  }
})
