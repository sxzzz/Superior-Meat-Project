<template>
  <div class="bg-white dark:bg-black">
    <div class=" mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text mb-4">Tasklist & Demo Template</h2>
              <!-- music player-->
      <div>
        <div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
              <!--  Album info        -->
          <div class="flex items-center space-x-4">
            <img :src="currentMusic.cover" alt="" width="88" height="88" class="flex-none w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg bg-slate-100 object-contain" loading="lazy" />
            <div class="min-w-0 flex-auto space-y-1 font-semibold">
              <p class="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
                <abbr title="Artist">{{ currentMusic.artist }}</abbr>
              </p>
              <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
                {{ currentMusic.title }}
              </h2>
              <p class="text-slate-900 dark:text-slate-50 text-lg">
                {{ currentMusic.song }}
              </p>
            </div>
          </div>
              <!--进度条和按钮-->
          <div class="space-y-4">
              <!-- 进度条 -->
            <div class="space-y-2">
              <div
                  class="relative cursor-pointer"
                  :class="{ 'opacity-90  ring-1 ring-orange-500': isDragging }"
                  @click="seek"
                  ref="progressBar"
              >
                <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                      class="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 dark:bg-cyan-400 h-2"
                      :style="{ width: `${progressPercentage}%` }"
                      role="progressbar"
                      aria-label="music progress"
                      :aria-valuenow="currentTime"
                      :aria-valuemin="0"
                      :aria-valuemax="duration"
                  ></div>
                </div>
                <div
                    class="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow"
                    :style="{ left: `${progressPercentage}%` }"
                >
                  <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                </div>
              </div>
              <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                <div class="text-cyan-500 dark:text-slate-100">{{ formatTime(currentTime) }}</div>
                <div class="text-slate-500 dark:text-slate-400">{{ formatTime(duration) }}</div>
              </div>
            </div>

              <!--  按钮 -->
            <div class=" h-20  bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
              <!--  左三按钮 -->
              <div class="flex-auto h-full flex items-center justify-evenly">
              <!-- Add to favorites -->
              <div class="relative group">
                <button type="button" aria-label="Add to favorites" class="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-white hidden sm:block">
                  <svg width="24" height="24">
                    <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                dark:bg-violet-700 dark:text-white dark:border-violet-300
                opacity-0 scale-95 translate-y-1
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Add to favorites
                </div>
              </div>
              <!-- Previous -->
              <div class="relative group ">
                <button type="button" class=" w-10 h-10 flex items-center justify-center text-slate-700 dark:text-white sm:block xl:block" aria-label="Previous" @click="previousMusic">
                  <svg width="24" height="24" fill="none">
                    <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <div
                class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                dark:bg-violet-700 dark:text-white dark:border-violet-300
                opacity-0 scale-95 translate-y-1
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                Previous
                </div>
              </div>
              <!-- Rewind 10 seconds -->
              <div class="relative group">
                <button type="button" aria-label="Rewind 10 seconds" @click="skipBackward(10)" class="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-rewind-fill" viewBox="0 0 16 16">
                    <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
                    <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
                  </svg>
                </button>
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Rewind 10 seconds
                </div>
              </div>
            </div>

              <!--  play button  -->
              <div class="relative group">
                <button
                    type="button"
                    class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center mx-auto"
                    @click="togglePlay"
                >
                  <svg v-if="!isPlaying" viewBox="0 0 32 32" class="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"  fill="currentColor">
                    <polygon points="6,4 26,16 6,28" />
                  </svg>
                  <svg v-else viewBox="0 0 32 32" class="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="currentColor">
                    <rect x="6" y="4" width="4" height="24" rx="2" />
                    <rect x="20" y="4" width="4" height="24" rx="2" />
                  </svg>
                </button>

                <div
                    class="tooltip absolute hidden md:block bottom-full left-1/2 -translate-x-1/2 mb-[29px] px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Play
                </div>
            </div>

              <!--  右四按钮 -->
              <div class="flex-auto h-full flex items-center justify-evenly">
              <!--Skip 10 seconds-->
              <div class="relative group">
                <button type="button" aria-label="Skip 10 seconds" @click="skipForward(10)" class="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
                    <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                    <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                  </svg>
                </button>
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Skip 10 seconds
                </div>
              </div>


            <!--next-->
              <div class="relative group">
                <button type="button" class="w-10 h-10 flex items-center justify-center text-slate-700 dark:text-white  sm:block xl:block" aria-label="Next" @click="nextMusic">
                  <svg width="24" height="24" fill="none">
                    <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Next
                </div>
              </div>


              <!--playback speed-->
              <div class="relative group">
                <button
                    type="button"
                    @click="togglePlaybackRate"
                    class="flex items-center justify-center rounded-lg font-semibold ring-2 ring-inset ring-slate-500 dark:ring-0 dark:bg-slate-500 dark:text-white
                           text-xs sm:text-sm md:text-base
                           h-8 sm:h-10 md:h-10
                           px-2 sm:px-3 md:px-3
                           min-w-[1rem]
                           text-slate-700 transition-all duration-500 hidden sm:block"
                >
                  {{ playbackRates[currentRateIndex] }}x
                </button>
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-[32px] px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Playback speed
                </div>
              </div>



              <!-- volume -->
              <div class=" group relative flex items-center justify-center gap-1 sm:gap-2 ">

                  <!-- mute -->
                  <button @click="toggleMute" class=" flex items-center justify-center text-slate-700 dark:text-white hover:text-indigo-600
                   w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hidden md:block ">
                    <svg v-if="isMuted || volume === 0"  xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l-5 4H2v6h2l5 4V5zM18 9l4 4m0-4l-4 4" />
                    </svg>
                    <svg v-else-if="volume < 0.5" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4V5z M15.54 8.46a5 5 0 010 7.07M19.07 4.93a9 9 0 010 12.73" />
                    </svg>
                  </button>


                  <!-- volume -->
                  <input
                      type="range"group
                      min="0"
                      max="1"
                      step="0.01"
                      v-model="volume"
                      @input="updateVolume"
                      class="h-2 w-12 sm:w-16 md:w-20 lg:w-24 hidden md:block "
                  />
                <div
                    class="tooltip hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-8 px-3 py-1 rounded-lg text-base font-medium
                           bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
                           dark:bg-violet-700 dark:text-white dark:border-violet-300
                           opacity-0 scale-95 translate-y-1
                           group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
                           transition duration-300 ease-out transform pointer-events-none whitespace-nowrap"
                >
                  Volume
                </div>



              </div>

              <!-- CSS 节奏动感条 -->
              <div class="sm:flex items-end justify-center space-x-1 h-6 hidden" v-show="isPlaying">
                <div class="w-1 bg-indigo-500 animate-bar" v-for="n in 4" :key="n" :style="{ animationDelay: `${n * 0.1}s` }"></div>
              </div>


            </div>
          </div>
          </div>
            <!-- 音柱视觉区域 -->
          <canvas ref="visualizerCanvas" class="w-full h-24 mt-4"></canvas>

            <!--  tasklist-->
          <nav aria-label="Progress" class="mt-10">
        <ol role="list" class="overflow-hidden">
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Tech tree & game section</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Music</span>
                <span class="text-gray-500 dark:text-emerald-300">Add a music player</span>
                <span class="text-gray-500 dark:text-emerald-300">Drag the progress bar to fast-forward or rewind</span>
                <span class="text-gray-500 dark:text-emerald-300">Automatically reset button status and progress after playing</span>
                <span class="text-gray-500 dark:text-emerald-300">Volume control, loop play</span>
                <span class="text-gray-500 dark:text-emerald-300">AudioVisualizer</span>
                <span class="text-gray-500 dark:text-emerald-300">All buttons are functional</span>
                <span class="text-gray-500 dark:text-emerald-300">Button tooltip</span>
                <span class="text-gray-500 dark:text-emerald-300">Progress bar tooltip</span>
                <span class="text-gray-500 dark:text-emerald-300">Next trigger playlist </span>
              </span>
            </div>
          </li>

          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question-circle mt-2 text-white bg-red-400 rounded-full dark:bg-pink-600" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Message board</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question-circle mt-2 text-white bg-red-400 rounded-full dark:bg-pink-600" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Art Gallery</span>
                <span class="text-gray-500 dark:text-emerald-300">Add more sections on Gallery</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question-circle mt-2 text-white bg-red-400 rounded-full dark:bg-pink-600" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Post</span>
                <span class="text-gray-500 dark:text-emerald-300">Planing to redesign the post with highlight features </span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hourglass-split mt-2 text-white bg-gray-500 rounded-full dark:bg-amber-600" viewBox="0 0 16 16">
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
              </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Friends</span>
                <span class="text-gray-500 dark:text-emerald-300">Triangular wall - not responsive design yet, may need to refactor HTML part  </span>
              </span>
            </div>
           </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Header</span>
                <span class="text-gray-500 dark:text-emerald-300">Add background music</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Hero</span>
                <span class="text-gray-500 dark:text-emerald-300">Redesigned hero section </span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Hero</span>
                <span class="text-gray-500 dark:text-emerald-300">Added new challenge</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div class="absolute left-3 top-6 -ml-px mt-0.5 h-full w-0.5 bg-red-600" aria-hidden="true"></div>
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Hero</span>
                <span class="text-gray-500 dark:text-emerald-300">Added Dogcoder</span>
              </span>
            </div>
          </li>
          <li class="relative pb-10">
            <div href="#" class="group relative flex items-start">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle mt-2 text-white bg-green-400 rounded-full dark:bg-blue-500" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                </svg>
              </span>
              <span class="ml-2 flex min-w-0 flex-col">
                <span class="text-xl font-medium dark:text-white">Dark</span>
                <span class="text-gray-500 dark:text-emerald-300">Dark Mode is activated </span>
              </span>
            </div>
          </li>

        </ol>
      </nav>

            <!-- 隐藏音频标签 -->
          <audio
          ref="audio"
          @timeupdate="updateProgress"
          @loadedmetadata="onLoadedMetadata"
          @ended="resetPlayer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script  setup>
import { ref, onMounted,watch,computed,nextTick,onBeforeUnmount} from 'vue'

// music player
const audio = ref(null)
const progressBar = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
//const progressPercentage = ref(0)

const isDragging = ref(false);
const progressPercentage = computed(() =>
    duration.value ? (currentTime.value / duration.value) * 100 : 0
);

onMounted(() => {
  audio.value.src = currentMusic.value.src

  audio.value.volume = volume.value // 初始化音量
})

// 播放/暂停
function togglePlay() {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  isPlaying.value = !isPlaying.value
}


// 更新时间和进度百分比
function updateProgress() {
  currentTime.value = audio.value.currentTime
  duration.value = audio.value.duration || 0
  //progressPercentage.value = (currentTime.value / duration.value) * 100
}

// 元数据加载完成（总时长）
function onLoadedMetadata() {
  duration.value = audio.value.duration
}



const seek = (event) => {
  if (!audio.value || !progressBar.value) return;
  const rect = progressBar.value.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;
  const ratio = clickX / width;
  const newTime = ratio * duration.value;
  audio.value.currentTime = newTime;
  currentTime.value = newTime;
};

//拖拽进度条
const onMouseMove = (event) => {
  if (!isDragging.value || !audio.value || !progressBar.value) return;
  const rect = progressBar.value.getBoundingClientRect();
  const moveX = event.clientX - rect.left;
  const ratio = Math.max(0, Math.min(1, moveX / rect.width));
  const newTime = ratio * duration.value;
  currentTime.value = newTime;
  audio.value.currentTime = newTime;
};

const onMouseUp = () => {
  isDragging.value = false;
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
};

const onMouseDown = () => {
  isDragging.value = true;
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
};

onMounted(() => {
  if (progressBar.value) {
    progressBar.value.addEventListener('mousedown', onMouseDown);
  }
});

onBeforeUnmount(() => {
  if (progressBar.value) {
    progressBar.value.removeEventListener('mousedown', onMouseDown);
  }
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
});


// 播放完后重置
function resetPlayer() {
  isPlaying.value = false
  currentTime.value = 0
  //progressPercentage.value = 0
  audio.value.currentTime = 0
}

// 时间格式化
function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${min}:${sec}`
}

const volume = ref(0.8)
const previousVolume = ref(0.8) // 用于恢复取消静音前的音量
const isMuted = ref(false)

function updateVolume() {
  if (!audio.value) return
  if (volume.value === 0) {
    isMuted.value = true
  } else {
    isMuted.value = false
    previousVolume.value = volume.value
  }
  audio.value.volume = volume.value
}

function toggleMute() {
  if (!audio.value) return

  if (isMuted.value || volume.value === 0) {
    // 取消静音
    volume.value = previousVolume.value || 0.8
    isMuted.value = false
  } else {
    // 静音
    previousVolume.value = volume.value
    volume.value = 0
    isMuted.value = true
  }
  audio.value.volume = volume.value
}

//音乐节奏条
const visualizerCanvas = ref(null)
let audioContext = null
let analyser = null
let source = null
let animationFrameId = null
//const isDarkMode = document.documentElement.classList.contains('dark')



function setupVisualizer() {
  if (!audio.value || !visualizerCanvas.value) return

  if (!audioContext || audioContext.state === 'closed') {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
  }

  // 如果已经有 source 就不用再创建
  if (!source) {
    source = audioContext.createMediaElementSource(audio.value)
    analyser = audioContext.createAnalyser()
    source.connect(analyser)
    analyser.connect(audioContext.destination)
    analyser.fftSize = 512
  }

  const canvas = visualizerCanvas.value
  const ctx = canvas.getContext('2d')
  canvas.width = canvas.clientWidth
  canvas.height = 150

  drawBarsLoop(ctx, analyser,canvas)
}


function drawBarsLoop(ctx, analyser, canvas) {
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)

    analyser.getByteFrequencyData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const barWidth = (canvas.width / bufferLength) * 1.5
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height

      const r = 100 + dataArray[i]
      const g = 50
      const b = 255 - dataArray[i]

      ctx.fillStyle = `rgb(${r},${g},${b})`
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

      x += barWidth + 1
    }
  }

  draw()
}



function stopVisualizer() {
  cancelAnimationFrame(animationFrameId)
  if (audioContext && audioContext.state === 'running') {
    audioContext.suspend()
  }
}



watch(isPlaying, async (playing) => {
  if (playing) {
    // 等待 DOM 更新后再设置 visualizer
    await nextTick()
    const canvas = visualizerCanvas.value
    const ctx = canvas.getContext('2d')

    if (!audioContext || audioContext.state === 'closed') {
      setupVisualizer()
    } else if (audioContext.state === 'suspended') {
      await audioContext.resume()
      // 👇 resume 后重启绘图
      if (ctx && analyser && canvas) {
        drawBarsLoop(ctx, analyser, canvas)
      }
    }
  } else {
    stopVisualizer()
  }
})


//playback speed
const playbackRates = [0.75,1, 1.25, 1.5]
const currentRateIndex = ref(1)

function togglePlaybackRate() {
  currentRateIndex.value = (currentRateIndex.value + 1) % playbackRates.length
  const rate = playbackRates[currentRateIndex.value]
  if (audio.value) {
    audio.value.playbackRate = rate
  }
}
//skip 10 seconds
function skipForward(seconds) {
  if (audio.value) {
    audio.value.currentTime = Math.min(audio.value.currentTime + seconds, audio.value.duration)
  }
}
//Rewind 10 seconds
function skipBackward(seconds) {
  if (audio.value) {
    audio.value.currentTime = Math.max(audio.value.currentTime - seconds, 0)
  }
}

//playlist

const musicList = ref([
  {
    cover: '/assets/images/music/love%20on%20a%20real%20train.jpg',
    artist: 'Tangerine Dream',
    title: 'Dream Sequence',
    song: 'Love On A Real Train',
    src: '/assets/music/Love On A Real Train.mp3',
  },
  {
    cover: '/assets/images/music/runaway.jpg',
    artist: 'Dream Shore & CJ Burnett',
    title: 'Dream Shore & CJ Burnett',
    song: 'Runaway',
    src: '/assets/music/Runaway.mp3',
  },
  {
    cover: '/assets/images/music/mirror.jpg',
    artist: 'Whitelines',
    title: 'MIRAJ',
    song: 'Mirror',
    src: '/assets/music/mirror.mp3',
  }
])

// 当前播放音乐的索引
const currentIndex = ref(0)

// 计算当前播放的音乐
const currentMusic = computed(() => musicList.value[currentIndex.value])



function nextMusic() {
  // 切换索引
  currentIndex.value = (currentIndex.value + 1) % musicList.value.length
  audio.value.pause()
  isPlaying.value = false // 重置播放状态

  nextTick(() => {
    // 设置新音频源并加载
    audio.value.src = currentMusic.value.src
    audio.value.load()
    audio.value.currentTime = 0
    currentTime.value = 0
    //progressPercentage.value = 0

    // 如果之前正在播放，自动播放新曲目
    // if (isPlaying.value) {
    //   audio.value.play()
    // }

    // ✅ 自动播放
    audio.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.warn('播放失败', err)
    })

    if (audioContext && audioContext.state !== 'closed') {
      stopVisualizer()
      setupVisualizer()
    }
  })
}

function previousMusic() {
  // 向后移动索引，支持循环
  currentIndex.value = (currentIndex.value - 1 + musicList.value.length) % musicList.value.length
  audio.value.pause()
  isPlaying.value = false // 重置播放状态

  nextTick(() => {
    // 设置新音频源并加载
    audio.value.src = currentMusic.value.src
    audio.value.load()
    audio.value.currentTime = 0
    currentTime.value = 0
    //progressPercentage.value = 0

    // 如果之前正在播放，自动播放上一曲目
    // if (isPlaying.value) {
    //   audio.value.play()
    // }

    audio.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.warn('播放失败', err)
    })

    if (audioContext && audioContext.state !== 'closed') {
      stopVisualizer()
      setupVisualizer()
    }
  })
}



</script>

<style>
@keyframes barPulse {
  0%, 100% {
    height: 0.5rem;
  }
  50% {
    height: 1.5rem;
  }
}

.animate-bar {
  animation: barPulse 1s infinite ease-in-out;
}

tooltip {
  @apply absolute bottom-full left-1/2 -translate-x-1/2
  mb-2 sm:mb-3 md:mb-4 px-2 sm:px-3 py-1
  rounded-lg text-xs sm:text-sm md:text-base font-medium
  bg-cyan-300 text-cyan-800 border border-violet-400 shadow-md
  dark:bg-violet-700 dark:text-white dark:border-violet-300
  opacity-0 scale-95 translate-y-1
  group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
  transition duration-300 ease-out transform pointer-events-none
  whitespace-nowrap max-w-[90vw] text-center;
}
</style>