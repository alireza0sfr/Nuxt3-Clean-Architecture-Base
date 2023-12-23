// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/',
  app: {
    head: {
      title: 'Nuxt3-Clean-Architecture-Base',
      meta: [
        { name: 'description', content: 'Nuxt3-Clean-Architecture-Base' }
      ],
      link: []
    }
  },
  dir: {
    middleware: 'infrastructure/middleware',
    plugins: 'infrastructure/plugins',
    layouts: 'presentation/layouts',
    pages: 'presentation/pages',
    public: 'presentation/public',
    assets: 'presentation/assets'
  },
  imports: {
    dirs: [
      'infrastructure/composables/**/*.ts'
    ]
  },
  components: [
    {
      path: 'presentation/components',
    },
  ],
  devServer: {
    https: false,
    port: 3000,
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
    '@': resolve(__dirname, 'src/'),
    '~': resolve(__dirname, 'src/'),
  },
  css: [
    '/presentation/assets/styles/main.scss'
  ],
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
    langDir: 'application/locales/',
  },
  quasar: {
    sassVariables: '/presentation/assets/styles/_config.scss',
    lang: 'fa-IR',
    config: {},
    extras: {
      font: 'roboto-font'
    }
  },
})
