/**
 * @module pages/farms/controller
 * @description farms route controller
 */

/* global define */
define((require) => {
  var View = require('views/farm/FarmDetailView')
  var Model = require('models/FarmModel')

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
