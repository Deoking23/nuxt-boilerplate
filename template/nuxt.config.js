module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Aart Nuxt Boilerplate',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},

      /* TODO SEO Meta */
      {name: 'robots', content: 'index,follow'},
      {name: 'googlebot', content: 'index,follow'},

      {name: 'subject', content: 'Aart Nuxt Boilerplate'},
      {hid: 'description', name: 'description', content: 'Nuxt project boilerplate for quick start'},
      {name: 'keywords', content: 'Aart, Vue, Nuxt, Express'},
      {name: 'copyright', content: '© 2018. Aart, Inc. All Rights Reserved.'},

      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: ''},
      {property: 'og:site_name', content: 'Aart Nuxt Boilerplate'},
      {property: 'og:title', content: 'Aart Nuxt Boilerplate'},
      {property: 'og:description', content: 'Nuxt project boilerplate for quick start'},
      {property: 'og:image', content: 'images/og.jpg'},
      {property: 'og:image:type', content: 'image/jpeg'},
      {property: 'og:image:width', content: '600'},
      {property: 'og:image:height', content: '315'},

      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:url', content: ''},
      {name: 'twitter:site', content: 'Aart Nuxt Boilerplate'},
      {name: 'twitter:title', content: 'Aart Nuxt Boilerplate'},
      {name: 'twitter:description', content: 'Nuxt project boilerplate for quick start'},
      {name: 'twitter:image', content: '/og.jpg'},
      {name: 'twitter:domain', content: ''},

      {name: 'theme-color', content: '#000000'},
      {name: 'msapplication-navbutton-color', content: '#000000'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},

      /* TODO 웹마스터 도구 */
      {name: 'naver-site-verification', content: ''},
      {name: 'google-site-verification', content: ''}
    ],
    link: [
      {rel: 'canonical', href: ''},
      /* TODO 파비콘 */
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png'},
      {rel: 'icon" type="image/png', sizes: '192x192', href: '/android-icon-192x192.png'},
      {rel: 'icon" type="image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'icon" type="image/png', sizes: '96x96', href: '/favicon-96x96.png'},
      {rel: 'icon" type="image/png', sizes: '16x16', href: '/favicon-16x16.png'}
    ],
    script: []
  },
  /*
   ** Global CSS
   */
  css: [
    {src: '~/assets/less/app.less', lang: 'less'},
    {src: 'swiper/dist/css/swiper.css'}
  ],
  /*
   * Global Variables
   * */
  env: {
    API_SERVER_ADDRESS: 'http://192.168.0.19:8111',
    LANGUAGE_COOKIE_NAME: 'brand-language',
    ACCESS_TOKEN_NAME: 'aart_access_token'
  },
  /*
   ** modules(ex. google analytics)
   */
  modules: [
    [ '@nuxtjs/google-analytics' ],
    [ '@nuxtjs/axios' ]
  ],
  // Nuxt용 ga 모듈 github : https://github.com/nuxt-community/analytics-module
  // ga모듈의 Document: https://www.gitbook.com/book/matteogabriele/vue-analytics/details
  'google-analytics': {
    id: 'UA-123251235-1'
  },
  // axios 모듈 https://axios.nuxtjs.org/usage
  axios: {
    baseURL: 'http://localhost:13000/api'
  },
  /*
   ** Add axios globally
   */
  build: {
    vendor: [
      'url-template',
      'vue-awesome-swiper',
      'vue-i18n',
      'vee-validate',
      'vue-authenticate',
      'moment',
      'js-cookie',
    ],
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
   * Plugins
   * */
  plugins: [
    {src: '~/plugins/axios.js'},
    {src: '~/plugins/vee-validate.js'},
    {src: '~/plugins/vue-awesome-swiper.js', ssr: false},
    {src: '~/plugins/vue-authenticate.js', ssr: false},
    {src: '~/plugins/filters.js'},
    {src: '~/plugins/vue-i18n.js'}
  ],
  /*
   * Scroll Top
   * */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {x: 0, y: 0}
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
};
