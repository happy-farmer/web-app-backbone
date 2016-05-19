/**
 * @module pages/markets/controllerEdit
 * @description markets route controller for editing
 */

/* global define */
define((require) => {
  var View = require('views/market/MarketDetailSaveView')
  var Model = require('models/MarketModel')

  return (main, options) => {
    var id = options.id
    var save = options.save
    var model = new Model({id})
    var view = new View({
      model,
      save
    })
    model
      .fetch()
      .then(() => {
        main.show(view)
        model.once('sync', options.success)
      })
  }
})
