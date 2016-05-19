/**
 * @module pages/markets/route
 * @description markets page router
 */

/* global define */
define((require) => {
  var SubRoute = require('subroute')

  return (region) => {
    var Route = SubRoute.extend({
      routes: {
        '': 'index',
        'add': 'create',
        ':id/edit': 'update',
        ':id': 'item'
      },
      index () {
        require(['pages/markets/controller'], (controller) => {
          controller(region.main)
        })
      },
      item (id) {
        require(['pages/markets/controllerItem'], (controller) => {
          controller(region.main, id)
        })
      },
      update (id) {
        require(['pages/markets/controllerEdit'], (controller) => {
          var success = () => this.navigate(id, {trigger: true})
          var options = {
            id,
            success,
            save: {patch: true}
          }
          controller(region.main, options)
        })
      },
      create () {
        require(['pages/markets/controllerAdd'], (controller) => {
          var success = () => this.navigate('', {trigger: true})
          controller(region.main, {
            success,
            save: {create: true}
          })
        })
      }
    })

    return new Route('markets', {createTrailingSlashRoutes: true})
  }
})
