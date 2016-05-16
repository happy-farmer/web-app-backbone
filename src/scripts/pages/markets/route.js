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
        'add': 'create',
        ':id/edit': 'update',
        ':id': 'index'
      },
      index (id) {
        require(['pages/markets/controller'], (controller) => {
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

    return new IndexRoute('markets', {createTrailingSlashRoutes: true})
  }
})
