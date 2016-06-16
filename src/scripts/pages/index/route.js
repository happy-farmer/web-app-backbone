/**
 * @module pages/index/route
 * @description index page router
 */

/* global define */
define((require) => {
  var SubRoute = require('subroute')

  return (region) => {
    var IndexRoute = SubRoute.extend({
      routes: {
        '': 'index',
        'index': 'index'
      },
      index () {
        require(['pages/index/controller'], (controller) => {
          controller(region.main)
        })
      }
    })

    return new IndexRoute('', {createTrailingSlashRoutes: true})
  }
})
