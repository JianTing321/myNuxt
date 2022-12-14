<template>
  <div class="bg-white flex h-20 items-center justify-between sticky top-0 shadow-black">
    <nav class="m-5">
      <router-link to="/" class="h-full">
        logo
      </router-link>
    </nav>
    <nav>
      <ul class="flex md:space-x-10">
        <li> Ocean</li>
      </ul>
      <ul class="flex md:space-x-10">
        <li> 首頁</li>
        <li> 眼部保養</li>
        <li> 唇部保養</li>
        <li> 關於我們</li>
        <li> 門市資訊</li>
      </ul>
    </nav>
    <nav>
      <ul class="flex">
        <li>icon</li>
        <li>icon</li>
        <li>icon</li>
      </ul>
    </nav>
  </div>
  <div class="bg-indigo-600">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="
            text-xl
            font-bold
            text-gray-100
            md:text-2xl
            hover:text-indigo-400
          "
        >
          Logo
        </router-link>
        <!-- Mobile menu button -->
        <div class="flex md:hidden" @click="toggleNav">
          <button
            type="button"
            class="
              text-gray-100
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <li class="text-gray-100 hover:text-indigo-400">
          Home
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          About
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          Blogs
        </li>
        <li class="text-gray-100 hover:text-indigo-400">
          Contact Us
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
export default {
  setup () {
    const showMenu = ref(false)
    const toggleNav = () => (showMenu.value = !showMenu.value)
    return { showMenu, toggleNav }
  }
}
</script>
