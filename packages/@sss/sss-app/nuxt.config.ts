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
  modules: ['@nuxtjs/tailwindcss'],

  // css: ['~/assets/css/main.css'],
})
