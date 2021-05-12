<template>
  <section id="exp" class="bg-gray-50 pb-8 lg:pb-0">
    <div class="container mx-auto px-6 font-noto lg:px-0 lg:py-48">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-center font-poppins">Experience</div>
        <div class="w-16 h-1 my-4 bg-green-400"></div>
        <div class="text-gray-500 text-sm">經歷</div>
      </div>

      <div class="mt-8 p-4 bg-white shadow lg:mt-24 lg:p-8">
        <div class="flex flex-col justify-between lg:flex-row">
          <span class="text-lg">信業國際有限公司</span>
          <span
            class="
              flex
              justify-center
              items-center
              rounded-lg
              bg-orange-500
              text-white text-xs
              py-1
              px-2
              w-24
              order-first
              lg:order-last
            "
          >
            2019 ~ 2021
          </span>
        </div>

        <div class="text-gray-500 text-sm">
          <span>前端工程師</span>
          <span class="ml-2 font-poppins">Front-end Developer</span>
        </div>

        <div class="w-16 h-1 my-4 bg-green-400"></div>

        <div class="mt-4 text-gray-700">
          <p class="mb-3 font-bold">主要工作內容</p>
          <p>1. 開發網站前後台</p>
          <p>2. 處理前端路由轉頁</p>
          <p>3. 專案 API 呼叫管理</p>
          <p>4. 與後端工程師協作串接 API 等</p>
        </div>

        <div class="mt-4 text-gray-700">
          <p class="mb-3 font-bold">主要使用技能/框架</p>
          <p>1. Vue 2.x</p>
          <p>2. Vuetify UI</p>
          <p>3. Element UI</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience'
}
</script>
