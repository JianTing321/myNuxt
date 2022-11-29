<template>
  <div>
<button>{{counter}}</button>
  </div>
</template>
<script lang="ts">

import { useMainStore } from '../stores/main'
import { storeToRefs } from 'pinia'
export default defineComponent({
  setup() {
    const main = useMainStore()
    // extract specific store properties
    const { counter, doubleCounter } = storeToRefs(main)
    return {
      // gives access to the whole store in the template
      main,
      // gives access only to specific state or getter
      counter,
      doubleCounter,
    }
  },
})
</script>