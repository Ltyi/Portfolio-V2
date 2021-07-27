<template>
  <section id="about" class="bg-gray-50">
    <div class="container h-full mx-auto flex flex-wrap px-6 py-8 lg:px-0 lg:py-48">
      <div class="w-full flex flex-col justify-center lg:w-5/12">
        <h1 class="text-2xl font-bold lg:text-4xl">
          RYAN
          <span class="font-normal">LIN</span>
        </h1>

        <h2 class="text-gray-500 text-xs lg:text-base">Front-end Developer</h2>

        <div class="w-16 h-1 my-4 bg-green-400"></div>

        <div class="font-noto leading-6 text-gray-700 text-sm lg:text-base">
          <p>您好，我於2019年底進入職場擔任前端工程師一職。</p>
          <br />
          <p>
            工作期間曾負責過前後台專案開發，並與後端工程師協作進行 API
            串接以及功能討論等等，目前 JavaScript 開發框架主力使用為 Vue (2.x/3.x)，CSS
            開發為 SCSS 或是 Tailwind CSS 等工具。
          </p>
          <br />
          <p>目前持續精進 Vue 生態系的技能，希望能找同樣使用 Vue 開發的團隊加入。</p>
        </div>
      </div>

      <div
        class="
          w-full
          flex flex-col
          justify-center
          items-center
          order-first
          my-6
          lg:order-last
          lg:w-7/12
          lg:my-0
        "
      >
        <div
          class="
            rounded-full
            w-24
            h-24
            bg-gray-300 bg-profile bg-right bg-cover
            shadow-xl
            lg:w-52
            lg:h-52
          "
        ></div>

        <div>
          <a href="https://github.com/Ltyi" target="_blank">
            <fa-icon
              :icon="['fab', 'github']"
              class="
                text-2xl text-gray-500
                mt-4
                cursor-pointer
                hover:text-green-400
                transition-colors
              "
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>
