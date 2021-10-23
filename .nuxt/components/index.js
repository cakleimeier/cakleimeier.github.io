export { default as About } from '../../components/About.vue'
export { default as Experience } from '../../components/Experience.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as Portfolio } from '../../components/Portfolio.vue'
export { default as PortfolioItem } from '../../components/PortfolioItem.vue'
export { default as Skills } from '../../components/Skills.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
