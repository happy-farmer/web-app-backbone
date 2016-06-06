/**
 * @module regions/ModalRegion
 * @description making modals
 */

/* global define */
define((require) => {
  var Mt = require('marionette')
  return Mt.Region.extend({
    attachHtml: function (view) {
      this.$el.append(view.el)
    }
  })
})
