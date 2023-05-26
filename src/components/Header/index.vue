<template>
  <div>
    <div>
        <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <div class="absolute left-[max(-7rem,calc(52%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[56rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="absolute left-[max(45rem,calc(48%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
                <div class="aspect-[577/310] w-[46.0625rem] bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 " style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
            </div>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div class="text-sm leading-6 text-white flex flex-col lg:flex-row">
                    <div>
                        <strong class="font-semibold">Welcome to Luna's BLOG!</strong>
                    </div>
                    <div>
                        <span class="lg:ms-20 inline h-0.5 w-0.5 fill-current text-xs" aria-hidden="true">Last updated: 25th May at 09:30pm</span>
                    </div>

                </div>
            </div>
            <div class="flex flex-1 justify-end">
                <button type="button" class="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span class="sr-only">Dismiss</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
      <img id="logo" class="h-48 w-full object-cover lg:h-64" src="/assets/logo/banner.jpg" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex items-end">
          <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-40 sm:w-40" src="/assets/logo/lunaLogo1.jpeg" alt="Luna logo" />
            <span class="inline-flex items-center rounded-md bg-pink-400/10 px-2 py-1 me-2 font-medium text-pink-400 ring-1 ring-inset ring-pink-400/20">Luna</span>
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

  setup() {
    return {
    }
  }
}
</script>

