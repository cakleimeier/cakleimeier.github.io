// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
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
          'content': 'Catherine Kleimeier',
          'template': chunk => `${chunk}` //or as string template: '%s - My page'
        }
      ],

      // Each item in the array maps to a newly-created <link> element,
      // where object properties map to attributes.
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poiret+One&family=Montserrat:wght@400;700&family=Roboto+Slab:wght@300&display=swap' }
      ],

      // Each item in the array maps to a newly-created <script> element,
      // where object properties map to attributes.
      // Example output: <script type="application/ld+json">{ "@context": "http://schema.org" }</script>
      script: [
        { innerHTML: '{ "@context": "http://schema.org" }', type: 'application/ld+json' }
      ]
    }
  },
  css: [
      '@/assets/css/main.css'
  ],
  theme: {
    dark: false,
    colors: {
      primary: '#19A8AE'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  }
});
