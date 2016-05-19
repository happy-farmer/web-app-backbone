/**
 * @module main
 * @description App bootstrapper
 */

/* global define */

define((reqire) => {
  var Bb = require('backbone')
  var HeaderView = require('views/HeaderView')
  var FooterView = require('views/FooterView')
  var LoadingView = require('views/LoadingView')

  return (app) => {
    var rootRegion = app.root
    var headerView = new HeaderView()
    var footerView = new FooterView()
    var loadingView = new LoadingView()

    var indexRoute = require('pages/index/route')
    var marketsRoute = require('pages/markets/route')
    var farmsRoute = require('pages/farms/route')

    rootRegion.on('before:show', (region) => {
      region.header.show(headerView)
      region.main.show(loadingView)
      region.footer.show(footerView)

      var Router = Bb.Router.extend({
        initialize: function () {
          this.index = indexRoute(region)
          this.markets = marketsRoute(region)
          this.farms = farmsRoute(region)
        }
      })
      var router = new Router()
    })

    // Actually initialize
    Bb.history.start()
    app.start()
  }
})
