// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // 將新創建的添加./ assets / css / main.css到文件中的
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: true
  },
  // ssr: true,
  modules: [
    [
      // 設定掛載pinia並且將其中的工廠函數defineStore,defineStore自動載入自個別頁面(包含store的main),無須再引入
      '@pinia/nuxt', {
        autoImports: [
        // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore', 'storeToRefs'] // import { defineStore as definePiniaStore } from 'pinia'
        ]
      }],
    [
      '@nuxtjs/tailwindcss'
    ]

  ],
  imports: {
    dirs: ['./stores']
  }

})
