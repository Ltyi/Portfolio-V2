<template>
  <section id="skills" class="bg-gray-50 pb-8 lg:pb-0">
    <div class="container mx-auto px-6 font-noto lg:px-0 lg:py-48">
      <div class="flex flex-col items-center">
        <div class="text-4xl font-bold text-center font-poppins">Skills</div>
        <div class="w-16 h-1 my-4 bg-green-400"></div>
        <div class="text-gray-500 text-sm">技能</div>
      </div>

      <div class="mt-8 lg:mt-24">
        <div class="bg-white shadow p-4 font-noto text-gray-700 lg:p-8">
          <p class="text-lg font-poppins font-bold mb-4">Vue.js</p>

          <p>1. Vue 2.x/3.x 開發</p>
          <p>2. Router 路由處理</p>
          <p>3. Vuex 全局狀態管理、持久化管理</p>
          <p>4. 可複用組件模板切割</p>
          <p>5. API 呼叫管理</p>

          <p class="text-lg font-poppins font-bold my-4">
            <span>Vue.js</span>
            <span class="ml-2 font-noto">生態系工具</span>
          </p>

          <p>1. Nuxt.js 處理 SSR 需求</p>
          <p>2. Vuetify UI 框架使用經驗</p>
          <p>3. Element UI 框架使用經驗</p>

          <p class="text-lg font-poppins font-bold my-4">HTML/CSS</p>

          <p>1. SCSS 將樣式模組化複用</p>
          <p>2. Tailwind CSS 工具使用</p>
          <p>3. Flexbox 使用經驗</p>
          <p>4. Pug 模板使用經驗</p>
          <p>5. 手刻 RWD 網頁</p>

          <p class="text-lg font-poppins font-bold my-4">Others</p>

          <p>1. Git 版本控制</p>
          <p>2. Gulp 使用經驗</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills'
}
</script>
