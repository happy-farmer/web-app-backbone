/**
 * @module pages/markets/controllerAdd
 * @description markets route controller for editing
 */

/* global define */
define((require) => {
  var View = require('views/market/MarketDetailSaveView')
  var Model = require('models/MarketModel')

  return (main, options) => {
    var model = new Model()
    var view = new View({
      model
    })
    main.show(view)
    model.once('sync', options.success)
  }
})
