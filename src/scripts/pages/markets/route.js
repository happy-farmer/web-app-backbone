/**
 * @module pages/markets/route
 * @description markets page router
 */

/* global define */
define((require) => {
  var SubRoute = require('subroute')

  return (region) => {
    var IndexRoute = SubRoute.extend({
      routes: {
        ':id': 'index',
        ':id/edit': 'edit'
      },
      index (id) {
        require(['pages/markets/controller'], (controller) => {
          controller(region.main, id)
        })
      },
      edit (id) {
        require(['pages/markets/controllerEdit'], (controller) => {
          controller(region.main, id)
        })
      }
    })

    return new IndexRoute('markets', {createTrailingSlashRoutes: true})
  }
})
