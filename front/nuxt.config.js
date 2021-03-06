export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Alphachem',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        defaultLocale: 'az',
        locales: [
          {
            code: 'az',
            file: 'az-AZ.js',
            name: 'Azərbaycan',
          },
          {
            code: 'en',
            file: 'en-US.js',
            name: 'English',
          },
          {
            code: 'ru',
            file: 'ru-RU.js',
            name: 'Русский',
          },
        ],
        lazy: true,
        langDir: 'locales/',
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'az',
        },
        vuex: {
          syncLocale: true,
        },
      },
    ],
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'https://alphachem.az/api',
    credentials: false,
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3000/api',
      pathRewrite: { '^/api/': '' },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    port: 5000, // default: 3000
  },
}
