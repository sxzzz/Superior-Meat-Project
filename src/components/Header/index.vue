<template>
  <div class="dark:bg-black">
    <div>
        <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 dark:bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div class="absolute left-[max(-7rem,calc(52%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[56rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="absolute left-[max(45rem,calc(48%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[46.0625rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="gap-x-4 gap-y-2">
                <div class="text-sm leading-6 text-white flex flex-col items-start sm:items-center lg:flex-row dark:text-gray-300">
                    <div>
                        <strong class="font-semibold">Vuejs, Tailwind, Pinia and Router</strong>
                    </div>
                    <div class="">
                        <span class="inline-block lg:ms-2 xl:ms-20 inline h-0.5 w-0.5 fill-current text-xs font-semibold" aria-hidden="true">Update: Music player under dev</span>
                    </div>
                   <!-- Dark Mode -->
                    <div class="flex items-center ms-0 mt-2 lg:mt-0 lg:ms-3">
                      <button type="button" @click="toggleButton" :class="{ 'bg-indigo-600': themeStore.isDark, 'bg-gray-200': !themeStore.isDark }"
                              class="bg-gray-200 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full
                              border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none
                              focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" :aria-checked="themeStore.isDark" aria-labelledby="dark-mode-toggle">
                        <span aria-hidden="true" :class="{ 'translate-x-5': themeStore.isDark, 'translate-x-0': !themeStore.isDark }" class="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                      </button>
                      <!--music-->
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ms-2 w-4 h-4">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                      </svg>
                      <i v-if="false" class="bi bi-cassette text-2xl ms-6"  @click="toggleMusic"><i v-if="isPlaying" class="bi bi-play-fill"></i><i v-if="!isPlaying" class="bi bi-stop-fill"></i></i>



                    </div>

                </div>
            </div>
            <div class="flex flex-1 justify-end">
                <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span class="sr-only">Dismiss</span>
<!--                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">-->
<!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />-->
<!--                    </svg>-->
                </button>
            </div>
        </div>
        <img id="logo" class="h-48 w-full object-cover lg:h-64" src="/assets/logo/banner.jpg" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex items-end">
          <img class="h-24 w-24 rounded-full ring-4 ring-fuchsia-300 dark:ring-pink-400 sm:h-40 sm:w-40" src="/assets/logo/lunaLogo1.jpeg" alt="Luna logo" />
          <span class="inline-flex items-center rounded-md bg-pink-400/10 dark:bg-pink-200 px-2 py-1 me-2 font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">Luna</span>
          <span class="inline-flex items-center rounded-md bg-red-50 dark:bg-red-300 px-2 py-1 me-2 font-medium text-red-700 ring-1 ring-inset ring-red-600/10">3 years</span>
          <span class="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-300 px-2 py-1 me-2 font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Madness</span>
          <span class="hidden md:block inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-300 px-2 py-1 me-2 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Prey-Driven</span>
          <span class="hidden md:block inline-flex items-center rounded-md bg-yellow-50 dark:bg-yellow-500 px-2 py-1 me-2 font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Independent</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import { useThemeStore } from '/src/store/themeStore.js';
import bgMusic from "/assets/music/Love On A Real Train.mp3";

export default {

  data() {
    return {
      enabled: false,
      audio: null,
      isPlaying: false,
    }
  },
  mounted() {
    this.audio = new Audio(bgMusic)
    this.audio.loop = true
    // 可选：自动播放可正常工作
    // this.audio.play().then(() => {
    //   this.isPlaying = true
    // }).catch(() => {
    // })
  },
  computed: {
    themeStore() {
      return useThemeStore()
    }
  },
  methods:{
    toggleButton() {
      // this.enabled = !this.enabled;
      // document.documentElement.classList.toggle('dark');
      this.themeStore.toggleDarkMode()
    },
    toggleMusic() {
      if (this.audio.paused) {
        this.audio.play()
        this.isPlaying = true

      } else {
        this.audio.pause()
        this.isPlaying = false
      }
    }
  },
}
</script>

