export default {
  server: {
    port: 8000 // default: 3000
  },
  head: {
    title: 'goingressos_2022_site',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://sdk.mercadopago.com/js/v2',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.js',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/global.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/socket.js", mode: "client" },
    { src: "~/plugins/vue-toast.js", mode: "client" },
    { src: "~/plugins/vue-pay-card", mode: "client" },
    { src: "~/plugins/vue-the-mask.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'nuxt-socket-io',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ['vue-currency-filter/nuxt', {
      symbol: 'R$', thousandsSeparator: '.', thousandCount: 3,
      fractionCount: 2, fractionSeparator: ',', symbolPosition: 'front', symbolSpacing: true
    }],
  ],
  // io: {
  //   sockets: [{ name: 'home', url: 'http://localhost:5000' }]
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
