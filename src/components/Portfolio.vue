<template>
  <section id="portfolio" class="bg-gray-50 pb-8 lg:pb-0">
    <div class="container mx-auto px-6 font-noto lg:px-0 lg:py-48">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-center font-poppins">Portfolio</div>
        <div class="w-16 h-1 my-4 bg-green-400"></div>
        <div class="text-gray-500 text-sm">作品</div>
      </div>

      <div class="flex flex-wrap mt-8 lg:mt-24">
        <div class="w-full lg:w-6/12 h-96 bg-portfolio1 bg-cover bg-center shadow"></div>

        <div
          class="
            w-full
            p-4
            bg-white
            shadow
            text-gray-700
            flex flex-col
            justify-center
            lg:p-16
            lg:w-6/12
          "
        >
          <div class="text-2xl font-bold">好室旅店。HOUSE HOTEL</div>

          <div class="mt-8 mb-8 lg:mb-0">
            <p>
              F2E 台灣前端社團活動第六週主題，利用設計師提供的設計稿以及活動方提供的 API
              完成旅店預訂系統，此系統我選擇採用 Nuxt 以及 Tailwind CSS 進行開發。
            </p>
          </div>

          <div class="flex-grow"></div>

          <div>
            <a
              href="https://ltyi.github.io/week6-booking/"
              target="_blank"
              class="rounded-2xl py-1 px-4 bg-green-400 text-white mr-2"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ltyi/week6-booking"
              target="_blank"
              class="rounded-2xl py-1 px-4 bg-green-400 text-white"
            >
              <fa-icon :icon="['fab', 'github']" class="mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>
