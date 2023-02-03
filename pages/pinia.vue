<template>
  <div>
    <div>{{ name }}</div>
    <button @click="counter += 2">
      {{ counter }}
    </button>
    <button @click="main.clickCounter()">
      按我
    </button>
    <div>
      {{ doubleCounter }}
    </div>
    <button @click="main.Stop">
      停止監聽
    </button>
    <div>{{ car }}</div>
    <button @click="Post.getPosts()">
      啟用
    </button>
    <br>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @Click="Post.getPosts">
      測試fetchApi
    </button>
    <br>
    <select id="searchRegion" class="form-control">
      <option v-for="(item , option) in posts" :key="option">
        {{ item }}
      </option>
    </select>
    <nuxt-link to="/">
      首頁
    </nuxt-link>
  </div>
</template>

<script lang="ts">
// import { useMainStore } from '../stores/main'
// import { storeToRefs } from 'pinia'
export default defineComponent({
  setup () {
    const main = useMainStore()
    const Post = usePostsStore()
    // const test = useTestStore()
    // extract specific store properties
    const { counter, name, car, doubleCounter, ...clickCounter } = storeToRefs(main)
    // const {...state } = storeToRefs(test)
    const { posts, ...getPosts } = storeToRefs(Post)
    return {
      // gives access to the whole store in the template
      // ...state,
      getPosts,
      posts,
      Post,
      main,
      // gives access only to specific state or getter
      counter,
      doubleCounter,
      name,
      clickCounter,
      car
    }
  }
})
</script>
