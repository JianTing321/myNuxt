<template>
  <div
    class="main--wrapper align-top justify-start pt-10 bg-gradient-to-br from-white to-indigo-100"
  >
    <div>
      <h1>Chooose You Favorite Commodities :)</h1>
    </div>
    <div class="flex gap-2">
      <CommodityItem
        v-for="(com, i) in COMMIDITY_LIST"
        :key="i"
        :commodity-item-props="com"
      />
    </div>
    <div class="pt-4">
      <h2 class="text-3xl">
        Your WishList:
      </h2>
      <ul>
        <li
          v-for="(com, i) in commidityListData"
          :key="i"
          class="flex gap-2 justify-center items-center py-2"
        >
          {{ `${com.name}--${com.price}` }}
          <button class="remove-btn" @click="handleRemoveCommodityItem(i)">
            x
          </button>
        </li>
      </ul>
      <hr>
      <p class="text-blue-700 text-xl">
        {{ `Total: ${totalPrice}` }}
      </p>
      <hr>
      <button class="basic-btn" @click="handleClearAll">
        Clear All
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { e } from 'unimport/dist/types-488f6d65'3
import useCartStore, { SingleCommodity } from '../stores/useCarStore'
import CommodityItem from '~/components/pinia-components/CommodityItem.vue'

const COMMIDITY_LIST: SingleCommodity[] = [
  {
    name: 'PC',
    price: 2000
  },
  {
    name: 'switch',
    price: 399
  },
  {
    name: 'iPhone16',
    price: 699
  }
]

export default defineComponent({
  name: 'Cart',
  components: { CommodityItem },
  setup () {
    const cartStore = useCartStore()
    const commidityListData = computed(() => cartStore.state.commodityWishList)

    const handleClearAll = () => {
      const confirmed = window.confirm(
        'Are you sure clear all wish list commodities?'
      )
      if (!confirmed) { return }
      cartStore.resetState()
    }
    // const handleRemoveCommodityItem = (i: any) => {
    //   console.log('object' + i, cartStore.removeCommodity)
    // }
    // const handleRemoveCommodityItem = (i: any) => {
    //   console.log('object' + i, cartStore.removeCommodity)
    // }
    // function handleRemoveCommodityItem () {
    //   console.log('object')
    // }
    return {
      COMMIDITY_LIST,
      commidityListData,
      totalPrice: computed(() => cartStore.whishListTotalPrice),
      // handleRemoveCommodityItem: cartStore.handleRemoveCommodityItem,
      // handleRemoveCommodityItem: computed(() => cartStore.removeCommodity),
      handleRemoveCommodityItem: (i: any) => {
        console.log('object' + i, cartStore.removeCommodity)
        console.log(commidityListData)
      },

      handleClearAll
      // handleRemoveCommodityItem
    }
  }
})
</script>

  <style lang="css" scoped>
  /* .remove-btn {
    @apply flex items-center justify-center rounded-full p-2 w-8 h-8 bg-red-200 hover:bg-red-300;
  } */
  </style>
