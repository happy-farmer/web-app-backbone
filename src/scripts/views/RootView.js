/*
 * @module views/RotView
 */

 /* global define */

define((require) => {
  'use strict'
  var template = require('mixins/templates').main
  var Mt = require('marionette')

  return Mt.LayoutView.extend({
    template,
    onRender () {
      // Get rid of that pesky wrapping-div.
      // Assumes 1 child element present in template.
      this.$el = this.$el.children()
      // Unwrap the element to prevent infinitely
      // nesting elements during re-render.
      this.$el.unwrap()
      this.setElement(this.$el)
    },
    regions: {
      header: 'header',
      main: 'main',
      footer: 'footer'
    }
  })
})
