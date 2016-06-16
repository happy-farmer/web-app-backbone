/*
 * @module views/HeaderView
 */

 /* global define */

define((require) => {
  'use strict'
  var $ = require('jquery')
  var Mt = require('marionette')
  var template = require('mixins/templates').header
  var appConfig = require('app-config')
  var authUri = appConfig.authUri

  return Mt.ItemView.extend({
    template,
    connectSocial (button) {
      button.click(() => {
        let provider = button.data('provider')
        document.location = `${authUri}/${provider}/connect`
      })
    },
    onRender () {
      this.$el.find('[data-provider]').each((ix, el) => {
        this.connectSocial($(el))
      })
    }
  })
})
