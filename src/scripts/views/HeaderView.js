/*
 * @module views/HeaderView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').header
  var Mt = require('marionette')
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
      let facebook = this.$el.find('[data-provider=facebook]')
      let twitter = this.$el.find('[data-provider=twitter]')
      this.connectSocial(facebook)
      this.connectSocial(twitter)
    }
  })
})
