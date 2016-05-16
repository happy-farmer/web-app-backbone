/**
 * @module pages/markets/controllerAdd
 * @description markets route controller for editing
 */

/* global define */
define((require) => {
  var MarketView = require('views/MarketDetailSaveView')
  var MarketModel = require('models/MarketModel')

  return (main, options) => {
    var marketModel = new MarketModel()
    var marketView = new MarketView({
      model: marketModel
    })
    main.show(marketView)
    marketModel.once('sync', options.success)
  }
})
