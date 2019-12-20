import colors from 'vuetify/es5/util/colors'

const baseHref = process.env.BASE_HREF || '/';
const isProd = process.env.NODE_ENV === 'production';

export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'material-design-icons-iconfont/dist/material-design-icons.css',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],
  webfontloader: {
    google: {
      // https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    }
  },
  modules: [
    'nuxt-webfontloader',
  ],
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
      },
    },
    icons: {
      iconfont: 'mdiSvg' // || 'md' || 'fa' || 'fa4' || 'mdi', // default - only for display purposes
    },
  },
  build: {
    // analyze: process.env.NODE_ENV === 'development',
    extend (config, { isClient }) {
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856 / 1.1; // (244 / 1.1) < 244 Kib
      }
    },
  },
  generate: {
    routes: [
      '/',
    ],
  },
  router: {
    base: baseHref,
    mode: 'history',
  },
};
