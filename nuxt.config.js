module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'brooklyn-vue-front',
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
   ** Modules
   */
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', [
      '~/assets/css/utils/_variables.scss',
    ]]
  ],

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
