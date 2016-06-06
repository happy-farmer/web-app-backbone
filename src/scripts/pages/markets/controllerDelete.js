/**
 * @module pages/markets/controllerDelete
 * @description delete market
 */

/* global define */
define((require) => {
  var View = require('views/DeleteView')

  return (main, options) => {
    var view = new View({
      options
    })
    main.show(view)
  }
})
