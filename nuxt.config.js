import pkg from './package'

export default {
  mode: 'universal',
  buildDir: 'nuxt-dist',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/vue-inject.js',
    '~/plugins/ctx-inject.js',
    '~/plugins/combined-inject.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  router: {
    middleware: 'auth'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

   loaders:[
    {
      test:/\.(png|jpe?g|gif|svg)$/,
      loader:"url-loader",
      query:{
        limit:1,
        name:"img/[name].[hash].[ext]"
      }
    }
  ],
    extend(config, ctx) {

    }
  }
}
