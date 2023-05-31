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
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div class="text-sm leading-6 text-white flex flex-col lg:flex-row dark:text-gray-300">
                    <div>
                        <strong class="font-semibold">Welcome to Luna's BLOG! Let's explore, learn, and enjoy the fascinating world of our furry friends!</strong>
                    </div>
                    <div>
                        <span class="lg:ms-20 inline h-0.5 w-0.5 fill-current text-xs" aria-hidden="true">Last updated: 31th May at 10:56pm</span>
                    </div>
                   <!-- Dark Mode -->
                    <div class="flex items-center ms-3">
                      <button type="button" @click="toggleButton" :class="{ 'bg-indigo-600': enabled, 'bg-gray-200': !enabled }" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="annual-billing-label">
                        <span aria-hidden="true" :class="{ 'translate-x-5': enabled, 'translate-x-0': !enabled }" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                      </button>

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="ms-2 w-4 h-4">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                      </svg>



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
          <img class="h-24 w-24 rounded-full ring-4 ring-white dark:ring-gray-500 sm:h-40 sm:w-40" src="/assets/logo/lunaLogo1.jpeg" alt="Luna logo" />
            <span class="inline-flex items-center rounded-md bg-pink-400/10 dark:bg-pink-100 px-2 py-1 me-2 font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">Luna</span>
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 me-2 font-medium text-red-700 ring-1 ring-inset ring-red-600/10">21 Month</span>
            <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 me-2 font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Madness</span>
            <span class="hidden md:block inline-flex items-center rounded-md bg-blue-50 px-2 py-1 me-2 font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Prey-Driven</span>
            <span class="hidden md:block inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 me-2 font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Independent</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {
      enabled: false,
    }
  },
  methods:{
    toggleButton() {
      this.enabled = !this.enabled;
      document.documentElement.classList.toggle('dark');
    },
  }
}
</script>

