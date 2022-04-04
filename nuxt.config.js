export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/global.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['vue-currency-filter/nuxt', {
      symbol: 'R$', thousandsSeparator: '.', thousandCount: 3,
      fractionCount: 2, fractionSeparator: ',', symbolPosition: 'front', symbolSpacing: true
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
