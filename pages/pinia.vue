<template>
  <div>
    <div>{{ name }}</div>
    <button @click="counter += 2">
      {{ counter }}
    </button>
    <div>{{ car }}</div>
    <div>{{ otherGetter }}</div>
    <button @Click="main.getList">
      測試功能test傳遞到maintest倉庫
    </button>
    <div>
      <nuxt-link to="/">
        首頁
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
// import { useMainStore } from '../stores/main'
// import { storeToRefs } from 'pinia'
export default defineComponent({
  setup () {
    const main = useMainStore()
    // const test = useTestStore()
    // extract specific store properties
    const { counter, doubleCounter, name, car, otherGetter } = storeToRefs(main)
    // const {...state } = storeToRefs(test)

    return {
      // gives access to the whole store in the template
      // ...state,
      otherGetter,
      main,
      // gives access only to specific state or getter
      counter,
      doubleCounter,
      name,
      car
    }
  }
})
</script>
