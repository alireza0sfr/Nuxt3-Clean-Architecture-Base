// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Nuxt-Quasar-Base',
      meta: [
        { name: 'description', content: 'Nuxt-Quasar-Base' }
      ],
      link: []
    }
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  devtools: {
    enabled: true
  },
  alias: {
    '@': resolve(__dirname, './'),
    '~': resolve(__dirname, './'),
    assets: '/<rootDir>/assets'
  },
  css: [
    '/styles/main.scss'
  ],
  proxy: {
    "/api": {
      target: process.env.BACKEND_ENDPOINT,
      changeOrigin: true
    }
  },
  i18n: {
    locales: [
      {
        code: 'fa',
        name: 'Persian',
        file: 'fa.json'
      },
    ],
    defaultLocale: 'fa',
    lazy: true,
    langDir: 'locales/',
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    // },
  },
  quasar: {
    sassVariables: '/styles/_config.scss',
    lang: 'fa-IR',
    config: {},
    extras: {
      font: 'roboto-font'
    }
  },
})
