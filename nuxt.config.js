export default {
  server: {
    port: 8000 // default: 3000
  },
  head: {
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicone.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.4.1/socket.io.js' },
      { src: 'https://sdk.mercadopago.com/js/v2', }
    ]
  },

  css: ["~assets/css/global.css"],
  plugins: [
    { src: "~/plugins/lottie-player.js", mode: "client" },
    { src: "~/plugins/vue-toast.js", mode: "client" },
    { src: "~/plugins/vue-mask.js", mode: "client" },
    { src: "~/plugins/vue-moment.js", mode: "client" },
    { src: "~/plugins/vue-alert.js", mode: "client" },
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
  },
  axios: { baseURL: `https://back.goingressos.com.br/api/site/${process.env.slug}/` },
  // axios: { baseURL: `http://phpstack-666249-2556159.cloudwaysapps.com/api/site/${process.env.slug}/` },
}
