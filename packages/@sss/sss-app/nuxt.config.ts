// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['my-nuxt-layer'],
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    './modules/my-module.ts',
    './modules/my-module2.ts',
  ],

  // css: ['~/assets/css/main.css'],
})
