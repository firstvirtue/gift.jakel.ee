module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '하나님의 선물인 영생',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** plugins
  */
  plugins: [
    '~plugins/gsap'
  ],

  /*
  ** CSS
  */
  css: [
    'normalize.css/normalize.css',
    '~/assets/css/base.scss',
    '~/assets/css/common.scss',
  ],

  /*
   ** Modules
   */
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', [
      '~/assets/css/utils/_variables.scss',
      '~/assets/css/utils/_mixins.scss',
      '~/assets/css/layout/_wrapper.scss',
      '~/assets/css/module/_typography.scss',
    ]]
  ],

  /*
  ** Generate configuration
  */
  generate: {
    minify: false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
