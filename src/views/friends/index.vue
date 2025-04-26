<template>
  <div class="bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Friends (not responsive yet) </h2>
      </div>
      <!-- 三角墙     -->

      <div class="bg-white" >
        <div class="px-6 lg:px-8">
          <div class="mt-4">
            <p class="text-4xl text-center font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">In golden dawn and silver light, Pets roam free, hearts pure and bright.</p>
            <p class="text-4xl text-center font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">Dogs chase winds, and cats stay sly, Birds weave songs into the sky...</p>
          </div>

          <ul  id="dogs" role="list" class="mt-10 flex flex-row justify-center grid-cols-5 ">
            <li v-for="(pet,index) in dogs" :key="pet.name" class="mx-3">
              <img class="size-24 rounded-full" :src="pet.imageUrl" alt="" />
              <h3 class=" mt-6 text-xl text-center font-semibold tracking-tight text-rose-400 ">{{ pet.name }}</h3>
              <p class=" text-center text-gray-600">{{ pet.role }}</p>
            </li>
          </ul>
          <ul  id="cats" role="list" class=" mt-4 flex flex-row justify-center ">
            <li v-for="(pet,index) in cats" :key="pet.name" class="mx-3" >
              <img class="size-24 rounded-full" :src="pet.imageUrl" alt="" />
              <h3 class="mt-6 text-xl text-center font-semibold tracking-tight text-rose-400">{{ pet.name }}</h3>
              <p class="text-center text-gray-600">{{ pet.role }}</p>
            </li>
          </ul>
          <ul   id="pets" role="list" class=" mt-4 flex flex-row justify-center ">
            <li v-for="(pet,index) in pets" :key="pet.name" class="mx-3">
              <img class="size-24 rounded-full" :src="pet.imageUrl" alt="" />
              <h3 class="mt-6 text-xl text-center font-semibold tracking-tight text-rose-400">{{ pet.name }}</h3>
              <p class="text-center text-gray-600">{{ pet.role }}</p>
            </li>
          </ul>

        </div>
      </div>
      <!--  朋友的故事     -->

      <div class="sm:flex sm:items-baseline sm:justify-between mt-4">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Memories</h2>
      </div>
        <ul  role="list" class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/annie02.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">Annie 安妮</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Remembering Annie, a lovely Bichon Frise who was born 2008. She stayed with us for 14 years, always being affectionate and close to human. Last year, she journeyed to the doggy heaven. Thinking back to her presence, our hearts are filled with gratitude and longing. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">怀念可爱的比熊犬安妮，出生在2008年，她陪伴我度过了14年的时光，总是充满了爱和亲密。去年，她踏上了汪星的旅程。回想起她的存在，我的心中充满了感激和思念。 </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/pudding01.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">Pudding 布丁</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Pudding, was full of curiosity and had a strong bond with humans. With an inquisitive nature, She always explored her surroundings.
                She was incredibly affectionate and loved being close to people. Pudding, you will be dearly missed for your friendly and inquisitive spirit.</p>
              <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">布丁,充满了好奇心，与家人建立了深厚的纽带。凭借着好奇的天性，她总是探索着周围的环境。她非常喜欢靠近人。布丁，我们将非常怀念你友好而好奇的灵魂。</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/tuan01.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">Tuan Tuan 团团</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">TuanTuan, was a true gentleman and incredibly responsible. He was always well-behaved and carried himself with grace.
                TuanTuan took his responsibilities seriously and was a reliable presence in our lives. He will be remembered for his gentlemanly demeanor and sense of duty.</p>
              <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">团团，是一位真正的绅士，极其有责任心。他总是表现得很规矩，举止优雅，很有责任心，是我们生活中可靠的伴侣。他将因其绅士风度和责任感而被铭记。</p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/white01.jpeg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">Miss White 小白</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Miss White, had one lifelong obsession: food. Her world revolved around the next meal.
                With an insatiable appetite, she always had her eyes on the prize. Miss White's unwavering focus on food will be remembered, reminding us of her unapologetic love for all things edible.</p>
              <p  class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">小白，一生有着唯一的追求：食物。她的世界总是围绕着下一顿饭展开。 她总是目不转睛地盯着食物。小白对食物的坚定关注将被铭记，让我们想起她对所有可食物毫不掩饰的爱。</p>
          </div>
        </li>

        <!-- More people... -->
      </ul>
    </div>


  </div>




</template>

<script>
import { ref,computed} from 'vue';
import {Autoplay, Navigation, Pagination} from "swiper";

export default {

  setup(){
    const dogs = ref([
      {
        name: 'Melon',
        role: 'golden retriever',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Melon.jpg',
      },
      {
        name: 'Mojo',
        role: 'Basenji',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Mojo.jpg',
      },
      {
        name: 'Nami',
        role: 'Terrier',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Nami.jpg',
      },
      {
        name: 'Drake',
        role: 'Cavalier King',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Drake.jpg',
      },
      {
        name: 'Brody',
        role: 'Terrier',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Brody.jpg',
      }

    ])
    const cats = ref([
      {
        name: 'Tom',
        role: 'Ragdoll',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Tom.jpg',
      },
      {
        name: 'Guinness',
        role: 'Felis catus',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Guinness.jpg',
      },
      {
        name: 'Barley',
        role: 'American Shorthair',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Barley.jpg',
      },
      {
        name: 'Figaro',
        role: 'Neva Masquerade',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Figaro.jpg',
      },

    ])
    const pets = ref([
      {
        name: 'Muse',
        role: 'hummingbird',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Muse.jpg',
      },
      {
        name: 'Bard',
        role: 'tiger',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Bard.jpg',
      },
      {
        name: 'Velvet',
        role: 'Reptile',
        imageUrl:
            'https://lunadogcoderstore.s3.ap-southeast-2.amazonaws.com/images/friends/Velvet.jpg',
      },

    ])

    return {
      dogs,cats,pets
    }
  },
  name:'friends',
}
</script>

<style>
#dogs img, #cats img, #pets img {
  width: 164px;
  height: 164px;
}
</style>