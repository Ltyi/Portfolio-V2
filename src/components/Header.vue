<template>
  <header class="fixed inset-x-0 top-0 h-14 shadow-lg z-10 bg-white">
    <div class="container mx-auto flex justify-center items-center h-full px-2 lg:px-0">
      <div class="text-4xl font-bold text-green-400">RY.</div>

      <div class="flex-grow"></div>

      <div>
        <a
          v-for="link in menu"
          :key="link.title"
          class="mx-2 hover:text-green-400 transition-colors text-sm font-noto lg:mx-4"
          href="#"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Header',

  setup() {
    const menu = reactive([
      { title: '簡介' },
      { title: '經歷' },
      { title: '技能' },
      { title: '作品' }
    ])

    return {
      menu
    }
  }
}
</script>
