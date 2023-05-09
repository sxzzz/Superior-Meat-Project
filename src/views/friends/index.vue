<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">The Story of Friends </h2>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/01.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Cookies</h3>
            <p class="text-base leading-7 text-gray-600">1111</p>
            <p class="mt-6 text-base leading-7 text-gray-600">2222</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/02.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Bamboo</h3>
            <p class="text-base leading-7 text-gray-600">3333 </p>
            <p class="mt-6 text-base leading-7 text-gray-600">4444</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/03.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">55555</h3>
            <p class="text-base leading-7 text-gray-600">666</p>
            <p class="mt-6 text-base leading-7 text-gray-600">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/04.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">77777</h3>
            <p class="text-base leading-7 text-gray-600">88888</p>
            <p class="mt-6 text-base leading-7 text-gray-600">Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.</p>
          </div>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>


</template>

<script>

export default {
  name:'Friends',
  data() {
    return {
    }
  }
}
</script>
