/**
 * @module pages/farms/controllerEdit
 * @description farms route controller for editing
 */

/* global define */
define((require) => {
  var View = require('views/farm/FarmDetailSaveView')
  var Model = require('models/FarmModel')

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
