const baseURL = process.env.NUXT_APP_BASE_URL || '/'

const withBaseURL = (path: string) => `${baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d1420' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: withBaseURL('/favicon.svg') }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://13vf.github.io/curly-barnacle',
    },
  },
  typescript: {
    strict: true,
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/en/', '/200.html', '/404.html'],
    },
  },
})
