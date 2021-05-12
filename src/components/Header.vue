<template>
  <header class="fixed inset-x-0 top-0 h-14 shadow-lg z-10 bg-white">
    <div class="container mx-auto flex justify-center items-center h-full px-2 lg:px-0">
      <div class="text-4xl font-bold text-green-400">RY.</div>

      <div class="flex-grow"></div>

      <div>
        <a
          v-for="link in menu"
          :key="link.title"
          class="
            mx-2
            hover:text-green-400
            transition-colors
            text-sm
            font-noto
            cursor-pointer
            lg:mx-4
          "
          @click.prevent="goto(link.href)"
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
      { title: '簡介', href: '#about' },
      { title: '經歷', href: '#exp' },
      { title: '技能', href: '#skills' },
      { title: '作品', href: '#portfolio' }
    ])

    const goto = href => {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }

    return {
      menu,
      goto
    }
  }
}
</script>
