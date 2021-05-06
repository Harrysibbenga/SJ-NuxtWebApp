// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Official Website',
    title: 'Stephen Jelley',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Stephen Jelley is a professional racing driver competing in the British Touring Car Championship in a BMW 330i M Sport with West Surrey Racing. He is a BTCC race winner and has an impressive CV, having previously competed in British F3, GP2 Series, and the Porsche Carrera Cup GB.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://apps.elfsight.com/p/platform.js',
        defer: true,
        body: true,
      },
    ],
  },

  vue: {
    config: {
      performance: true, // you probably should detect dev mode here
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css','hooper/dist/hooper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-easy-lightbox.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/Head/',
        prefix: 'Head',
      },
      {
        path: '~/components/Home/',
        prefix: 'Home',
      },
      {
        path: '~/components/Foot/',
        prefix: 'Foot',
      },
      {
        path: '~/components/Modals/',
        prefix: 'Modal',
      },
      {
        path: '~/components/UI/',
        prefix: 'Ui',
      },
      {
        path: '~/components/Post/',
        prefix: 'Post',
      },
      {
        path: '~/components/Calendar/',
        prefix: 'Calendar',
      },
    ],
  },

  router: {
    middleware: ['auth'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#0A1B53',
          secondary: '#EAFF00',
          accent: '#9c27b0',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['ckeditor', 'hooper'],
  },
}
