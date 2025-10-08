<template>
  <div class="dark:bg-black">
    <div>
        <!-- 条幅banner -->
        <div v-if="true" class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 dark:bg-black px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div class="absolute left-[max(-7rem,calc(52%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[56rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="absolute left-[max(45rem,calc(48%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[46.0625rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="gap-x-4 gap-y-2">
                <div class="text-sm leading-6 text-white flex flex-col items-start sm:items-center lg:flex-row dark:text-gray-300">
                    <div>
                        <strong class=" font-lora font-semibold ">Superior Meat — Crafted for True Wagyu Lovers.</strong>
                    </div>
                    <div v-if="false" class="">
                        <span class="inline-block lg:ms-2 xl:ms-20 inline h-0.5 w-0.5 fill-current text-xs font-semibold" aria-hidden="true">Update: Music player under dev</span>
                    </div>
                      <!-- Dark Mode -->
                    <div class="flex items-center ms-0 mt-2 lg:mt-0 lg:ms-3">

                      <button
                          type="button"
                          @click="toggleButton"
                          :class="{
                                    'bg-indigo-700': themeStore.isDark,
                                    'bg-gray-200': !themeStore.isDark
                                  }"
                          class="relative flex items-center justify-between h-8 w-[68px] px-2 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                          role="switch"
                          :aria-checked="themeStore.isDark"
                          aria-labelledby="dark-mode-toggle"
                      >
                        <!-- Toggle Circle -->
                        <span
                            aria-hidden="true"
                            :class="{
                                      'translate-x-8': themeStore.isDark,
                                      'translate-x-0': !themeStore.isDark
                                    }"
                            class="absolute top-0.5 left-0.5 h-6 w-[28px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out z-10"
                        ></span>

                        <!-- Icons Layer -->
                        <div class="relative z-20 flex w-full justify-between items-center">
                          <!-- Sun Icon -->
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="w-4 h-4 flex-shrink-0 transition duration-200 ease-in-out"
                                :class="themeStore.isDark ? 'text-gray-400' : 'text-indigo-900'"
                                viewBox="0 0 16 16"
                          >
                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
                            />

                          </svg>

                          <!-- Moon Icon -->
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              class="w-4 h-4 flex-shrink-0 transition duration-200 ease-in-out"
                              :class="themeStore.isDark ? 'text-indigo-900' : 'text-gray-400'"
                              viewBox="0 0 24 24"
                          >
                            <path
                                fill-rule="evenodd"
                                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>

                    </div>

                </div>
            </div>
            <div class="flex flex-1 justify-end">
                <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span class="sr-only">Dismiss</span>
                </button>
            </div>
        </div>
        <!-- banner 图 -->
        <img id="logo" class="h-52 w-full object-cover object-[center_top_20%] lg:h-[500px]" src="/assets/images/banner/banner01.png" alt="" />
    </div>
    <div v-if="true" class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex items-center space-x-4 relative
            -translate-x-4  sm:-translate-x-8 md:-translate-x-16 lg:-translate-x-32">
          <img class=" h-24 w-24 lg:h-52 lg:w-52 sm rounded-full  sm:h-24 sm:w-24 -mt-12 sm:-mt-16 lg:-mt-18 left-12 lg:-translate-x-6  " src="/assets/images/logo/Logo.jpg" alt="SM logo" />
          <Topnav v-if="true" class="mt-16"></Topnav>
          <span v-if="false" class="inline-flex items-center rounded-md bg-pink-200 dark:bg-pink-300 px-2 py-1 me-2 font-medium text-pink-800 ring-1 ring-inset ring-pink-400/20">Solgan1</span>
          <span v-if="false" class="inline-flex items-center rounded-md bg-red-200 dark:bg-red-300 px-2 py-1 me-2 font-medium text-red-800 ring-1 ring-inset ring-red-600/10">Solgan2</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import { useThemeStore } from '@/store/themeStore.js';
import Topnav from "../Topnav/index.vue";
export default {
  components: {
    Topnav,
  },

  data() {
    return {
      enabled: false,
      audio: null,
      isPlaying: false,
    }
  },
  mounted() {
  },
  computed: {
    themeStore() {
      return useThemeStore()
    }
  },
  methods:{
    toggleButton() {
      this.themeStore.toggleDarkMode()
    },
  },
}
</script>

