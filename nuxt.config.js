module.exports = {
  target: 'static',
  ssr: false,
  router: {
    base: '/cakleimeier.github.io/'
  },

  /*
  Headers of the page
    - Nuxt.js uses vue-meta to update the headers and html attributes of your application.
    - Nuxt.js configures vue-meta with these options:
      {
        keyName: 'head', // the component option name that vue-meta looks for meta info on.
        attribute: 'data-n-head', // the attribute name vue-meta adds to the tags it observes
        ssrAttribute: 'data-n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
        tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
      }
  */
  components: true,
  
  modules: [],
  buildModules: ['@nuxtjs/tailwindcss'],
  head: {
    // Maps to the inner-text value of the <title> element.
    title: '',

    // The value of title will be injected into the %s placeholder in titleTemplate before being rendered.
    // The original title will be available on metaInfo.titleChunk.
    titleTemplate: '%s',

    // Nuxt.js lets you define all default <meta> tags for your application inside nuxt.config.js. Define them using the same head property:
    // Each item in the array maps to a newly-created <meta> element, where object properties map to attributes.
    // Example output: 
      // <meta charset="utf-8">
      // <meta name="viewport" content="width=device-width, initial-scale=1">
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Catherine Kleimeier\'s Personal Website' },
      
      // Since v1.5.0 of vue-meta, you can now set up meta templates that work similar to the titleTemplate:
      // Example output:
        // <meta charset="utf-8">
        // <meta name="og:title" property="og:title" content="Test title - My page">
      {
        'vmid': 'og:title',
        'property': 'og:title',
        'content': 'Test title',
        'template': chunk => `${chunk} - My page` //or as string template: '%s - My page'
      }
    ],

    // Each item in the array maps to a newly-created <link> element, 
    // where object properties map to attributes.
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito|Raleway' }
    ],

    // Each item in the array maps to a newly-created <script> element, 
    // where object properties map to attributes.
    // Example output: <script type="application/ld+json">{ "@context": "http://schema.org" }</script>
    script: [
      { innerHTML: '{ "@context": "http://schema.org" }', type: 'application/ld+json' }
    ],

    // Maps to a newly-created <base> element, where object properties map to attributes.
    // Example output: <base target="_blank" href="/">
    base: {
      target: '_blank',
      href: '/' 
    },

    // Each item in the array maps to a newly-created <noscript> element, 
    // where object properties map to attributes.
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],

    // By default, vue-meta sanitizes HTML entities in every property. You can disable this behaviour on a per-property basis 
    // using __dangerouslyDisableSantizers. Just pass it a list of properties you want sanitization to be disabled on:
    // Example output: 
      // <title>&lt;I will be sanitized&gt;</title>
      // <meta vmid="description" name="description" content="& I will not be <sanitized>">
    __dangerouslyDisableSanitizers: ['meta'],

    // Provides same functionality as __dangerouslyDisableSanitizers but you can specify which property for which tagIDKeyName's sanitization should be disabled. 
    // It expects an object with the vmid's as key and an array with property names value:
    // Example output:
    // <title>&lt;I will be sanitized&gt;</title>
    // <meta vmid="description" name="still-&amp;-sanitized" content="& I will not be <sanitized>">
    __dangerouslyDisableSanitizersByTagID: { 
      description: ['content'] 
    },

    // Will be called when the client metaInfo updates/changes. Receives the following parameters:
      // newInfo | (Object) | The new state of the metaInfo object.
      // addedTags | ([HTMLElement]) | a list of elements that were added.
      // removedTags | ([HTMLElement]) | a list of elements that were removed.
    changed (newInfo, addedTags, removedTags) {
      console.log('Meta info was updated!')
    }
  },
  css: [
    '~/assets/scss/main'
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  }
}