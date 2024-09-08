// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'radix-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    ["nuxt-plotly", { inject: true }],
  ],
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },
})