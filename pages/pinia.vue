<template>
	<div>
		<div>{{ name }}</div>
		<button v-on:click="counter += 2">{{ counter }}</button>
		<div>{{ car }}</div>
		<div><nuxt-link to="/">首頁</nuxt-link></div>
	</div>
</template>

<script lang="ts">
import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'

export default defineComponent({
	setup() {
		const main = useMainStore()
		// extract specific store properties
		const { counter, doubleCounter, name, car } = storeToRefs(main)
		return {
			// gives access to the whole store in the template
			main,
			// gives access only to specific state or getter
			counter,
			doubleCounter,
			name,
			car
		}
	},
})
</script>