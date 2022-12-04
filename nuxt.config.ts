// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: {
		typeCheck: true
	},
	// ssr: true,
	modules: [
		[
			// 設定掛載pinia並且將其中的工廠函數defineStore,defineStore自動載入自個別頁面(包含store的main),無須再引入
			'@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }],
		[
			'@nuxtjs/tailwindcss'
		]
	],
	imports: {
		dirs: ['./stores']
	},
})
