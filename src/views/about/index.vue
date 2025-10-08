<template>
  <div class="bg-white dark:bg-black">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight caption-top bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">产品系列</h2>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 ">
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="/assets/images/01.jpg" alt="" class="object-cover object-center group-hover:opacity-75">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div class="flex items-end p-6">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                    Yakiniklu 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">27/01/2023-28/01/2023</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="/assets/images/01.jpg" alt=""
               class="object-left group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                   Angus 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">简短文字描述</p>
            </div>
          </div>
        </div>
        <div class="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <img src="/assets/images/02.jpg" alt="" class="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full">
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
          <div class="flex items-end p-6 sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white dark:text-gray-300">
                <router-link to="/story">
                  <span class="absolute inset-0"></span>
                  Shabu 系列
                </router-link>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm text-white dark:text-gray-300">16/04/2023-21/04/2023</p>
            </div>
          </div>
        </div>
      </div>


    </div>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-baseline sm:justify-between">
        <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">xxxxx</h2>
      </div>
      <!-- 三角墙     -->

      <div class="bg-white dark:bg-black" >
        <div class="px-6 lg:px-8">
          <div class="mt-4">
            <p class="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">
              这里可以放牛肉的荣誉奖章
            </p>
            <p class="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">
              也可以是合作伙伴的品牌logo
            </p>
          </div>

          <ul id="dogs" role="list" class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-6">
            <li v-for="(dog, index) in dogs" :key="dog.name" class="mx-3 text-center">
              <img class="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mx-auto object-cover" :src="dog.imageUrl" alt="" />
              <h3 class="mt-6 text-xl font-semibold tracking-tight text-rose-400">{{ dog.name }}</h3>
              <p class="text-gray-600 dark:text-white">{{ dog.role }}</p>
            </li>
          </ul>

          <ul id="cats" role="list" class=" mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ">
            <li v-for="(cat,index) in cats" :key="cat.name" class="" >
              <img class="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mx-auto object-cover" :src="cat.imageUrl" alt="" />
              <h3 class="mt-6 text-xl text-center font-semibold tracking-tight text-rose-400">{{ cat.name }}</h3>
              <p class="text-center text-gray-600 dark:text-white">{{ cat.role }}</p>
            </li>
          </ul>
          <ul id="pets" role="list" class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-6">
            <li v-for="(pet,index) in pets" :key="pet.name" class="">
              <img class=" w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mx-auto object-cover" :src="pet.imageUrl" alt="" />
              <h3 class="mt-6 text-xl text-center font-semibold tracking-tight text-rose-400">{{ pet.name }}</h3>
              <p class="text-center text-gray-600 dark:text-white">{{ pet.role }}</p>
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
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero01.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero02.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row  px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero03.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>
        <li class="flex flex-col gap-6 xl:flex-row px-6 sm:px-0">
          <img class="aspect-[4/5] w-60 flex-none rounded-2xl object-cover" src="/assets/images/hero04.jpg" alt="">
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-300">xxxx</h3>
            <p class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p  class="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </li>

        <!-- More people... -->
      </ul>
    </div>
  </div>




</template>

<script setup>
import { ref} from 'vue';

const dogs = ref([
  {
    name: 'Melon',
    role: 'golden retriever',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Melon.jpg',
  },
  {
    name: 'Mojo',
    role: 'Basenji',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Mojo.jpg',
  },
  {
    name: 'Nami',
    role: 'Terrier',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Nami.jpg',
  },
  {
    name: 'Drake',
    role: 'Cavalier King',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Drake.jpg',
  },
  {
    name: 'Brody',
    role: 'Terrier',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Brody.jpg',
  }

])
const cats = ref([
  {
    name: 'Tom',
    role: 'Ragdoll',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Tom.jpg',
  },
  {
    name: 'Guinness',
    role: 'Felis catus',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Guinness.jpg',
  },
  {
    name: 'Barley',
    role: 'American Shorthair',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Barley.jpg',
  },
  {
    name: 'Figaro',
    role: 'Neva Masquerade',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Figaro.jpg',
  },

])
const pets = ref([
  {
    name: 'Muse',
    role: 'hummingbird',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Muse.jpg',
  },
  {
    name: 'Bard',
    role: 'tiger',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Bard.jpg',
  },
  {
    name: 'Velvet',
    role: 'Reptile',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Velvet.jpg',
  },
  {
    name: 'Bambi',
    role: 'Deer',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/deer.jpg',
  },
  {
    name: 'Polly',
    role: 'Parrot',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/images/friends/Parrot.jpeg',
  },

])
</script>

