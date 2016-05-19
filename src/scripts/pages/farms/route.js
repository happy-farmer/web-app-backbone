/**
 * @module pages/farms/route
 * @description farms page router
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
        require(['pages/farms/controller'], (controller) => {
          controller(region.main)
        })
      },
      item (id) {
        require(['pages/farms/controllerItem'], (controller) => {
          controller(region.main, id)
        })
      },
      update (id) {
        require(['pages/farms/controllerEdit'], (controller) => {
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
        require(['pages/farms/controllerAdd'], (controller) => {
          var success = () => this.navigate('', {trigger: true})
          controller(region.main, {
            success,
            save: {create: true}
          })
        })
      }
    })

    return new Route('farms', {createTrailingSlashRoutes: true})
  }
})
