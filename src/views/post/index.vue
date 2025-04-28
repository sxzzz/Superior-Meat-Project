<template>
  <div class="bg-white dark:bg-black">
    <div class=" mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Post</h2>

      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 mt-4 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
          <article class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg ">
            <time :datetime="featuredPost.datetime" class="block text-sm/6 text-gray-600 dark:text-white">{{ featuredPost.date }}</time>
            <h2 id="featured-post" class="mt-4 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-teal-600 to-blue-600 inline-block text-transparent bg-clip-text">{{ featuredPost.title }}</h2>
            <p v-for="(line, index) in descriptionLines" :key="index" class="m-2  text-gray-600 dark:text-white">{{line}}</p>
            <img :src="featuredPost.imageUrl" alt="" class="rounded-2xl bg-gray-50 object-fill group-hover:opacity-75">
            <div class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">

              <div class="flex border-b border-orange-500 mt-2">
                <a :href="featuredPost.author.href" class="flex gap-x-2.5 text-sm/6 font-semibold text-gray-900 mb-6 dark:text-white">
                  <img :src="featuredPost.author.imageUrl" alt="" class="size-6 h-8 w-8 flex-none rounded-full bg-gray-50" />
                  {{ featuredPost.author.name }}
                </a>
              </div>
            </div>
          </article>
          <div class="  mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
            <div class="-my-12 divide-y divide-orange-500">
              <article v-for="post in posts" :key="post.id" class="pt-12 pb-6">
                <div class=" group relative max-w-xl">
                  <time :datetime="post.datetime" class="block text-sm/6 text-gray-600 dark:text-white">{{ post.date }}</time>
                  <h2 class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-purple-500 bg-gradient-to-r from-teal-600 to-blue-600 inline-block text-transparent bg-clip-text ">
                    <a :href="post.href">
                      <span class="absolute inset-0 " />
                      {{ post.title }}
                    </a>
                  </h2>
                  <div class=" mt-2 h-48 w-[18rem] sm:h-60 sm:w-[24rem]  md:h-60 md:w-[24rem] lg:h-[14rem] lg:w-[20rem] shrink-0 group">
                    <img :src="post.imageUrl" alt="" class="h-full w-full rounded-2xl bg-gray-50 object-fill group-hover:opacity-75" />
                  </div>
                  <p class="mt-4 text-sm/8 text-gray-600 dark:text-white "> {{ post.description }}</p>
                </div>

                <div class="mt-4 flex">
                  <a :href="post.author.href" class="relative flex gap-x-2.5 text-sm/6 font-semibold text-gray-900">
                    <img :src="post.author.imageUrl" alt="" class="size-6 h-8 w-8 flex-none rounded-full bg-gray-50" />
                    {{ post.author.name }}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>

    </div>
  </div>

</template>

<script setup>

import { ref,computed,onMounted, onUnmounted} from 'vue';
import { usePostStore } from '/src/store/postStore.js'

// 将 description 拆分成数组
const descriptionLines = computed(() => featuredPost.description.trim().split('\n'));
const featuredPost =
    {
  id: 1,
  title: 'Vue.js The Progressive\n' +
      'JavaScript Framework',
  href: '#',
  description:
      '响应式数据绑定 (Reactive Data Binding)\n' +
      '组件化开发 (Component-Based Architecture)\n' +
      '指令系统 (Directive System)\n' +
      '虚拟 DOM (Virtual DOM)\n' +
      '生命周期钩子 (Lifecycle Hooks)\n' +
      '双向数据绑定 (Two-Way Data Binding)...\n',
  imageUrl:'https://d1nuow4z6t9ani.cloudfront.net/images/hero/b14.jpeg',

  date: 'Apr 01, 2025',
  datetime: '2025-04-01',
  author: {
    name: 'Andy',
    href: '#',
    imageUrl:
        'https://d1nuow4z6t9ani.cloudfront.net/logo/andyAvator.png',
    }
  }


const postStore = usePostStore()
const posts = computed(() => postStore.posts.slice(1))
</script>

<style>

</style>