export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'James Lyons',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Barlow:500,600,700,800&display=swap',
      },
    ],
    script: [
      {
        dataDomain: 'jameslyons.design',
        src: 'https://plausible.io/js/plausible.js',
        async: true,
        defer: true,
      },
      {
        innerHTML:
          'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxt/content',
    // '@nuxtjs/feed'
  ],
  content: {
    // Options
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        'postcss-nesting': {},
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
  },
  /*
   ** Storybook configuration
   */
  storybook: {
    // Options
  },
}
