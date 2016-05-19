/**
 * @module pages/farms/controllerAdd
 * @description farms route controller for editing
 */

/* global define */
define((require) => {
  var View = require('views/farm/FarmDetailSaveView')
  var Model = require('models/FarmModel')

  return (main, options) => {
    var model = new Model()
    var view = new View({
      model
    })
    main.show(view)
    model.once('sync', options.success)
  }
})
