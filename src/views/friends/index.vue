<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">The Story of Friends </h2>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/annie02.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Annie</h3>
            <p class="text-base leading-7 text-gray-600">Bichon Frise</p>
            <p class="mt-6 text-base leading-7 text-gray-600">Remembering our Annie, a lovely Bichon Frise. She stayed with us for 14 years, always being affectionate and close. Last year, she journeyed to the doggy heaven.
                Thinking back to her presence, our hearts are filled with gratitude and longing. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/pudding01.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Pudding</h3>
            <p class="text-base leading-7 text-gray-600">Felis Catus</p>
            <p class="mt-6 text-base leading-7 text-gray-600">Pudding, our domestic cat, was full of curiosity and had a strong bond with humans. With an inquisitive nature, She always explored her surroundings.
                She was incredibly affectionate and loved being close to people. Pudding, you will be dearly missed for your friendly and inquisitive spirit.</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/tuan01.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Tuan Tuan</h3>
            <p class="text-base leading-7 text-gray-600">Felis Catus</p>
            <p class="mt-6 text-base leading-7 text-gray-600">TuanTuan, our domestic cat, was a true gentleman and incredibly responsible. He was always well-behaved and carried himself with grace.
                TuanTuan took his responsibilities seriously and was a reliable presence in our lives. He will be remembered for his gentlemanly demeanor and sense of duty.</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="./images/white01.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">Miss White</h3>
            <p class="text-base leading-7 text-gray-600">Felis Catus</p>
            <p class="mt-6 text-base leading-7 text-gray-600">Miss White, our domestic cat, had one lifelong obsession: food. Her world revolved around the next meal.
                With an insatiable appetite, she always had her eyes on the prize. Miss White's unwavering focus on food will be remembered, reminding us of her unapologetic love for all things edible.</p>
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
