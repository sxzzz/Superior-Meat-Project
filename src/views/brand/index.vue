<template>

  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-6">
    <!--    暂时不用-->
    <div v-if="false" class="bg-white border border-cyan-400 dark:bg-slate-800 dark:border-slate-500 rounded-xl p-4 pb-6
    sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
      <!--  Album info and  visualizer      -->
      <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-2 w-full">
        <div class="flex items-center space-x-4 col-span-1">
          <img :src="currentMusic.cover" alt="" width="88" height="88"
               class="flex-none w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 lg:w-40 lg:h-40
             rounded-lg bg-slate-100 object-cover" loading="lazy" />
          <div class="min-w-0 flex-auto space-y-1 font-semibold">
            <p class="text-cyan-500 dark:text-cyan-400 text-sm md:text-xs lg:text-base leading-6">
              <abbr title="Artist">{{ currentMusic.band }}</abbr>
            </p>
            <h2 class="text-slate-500 dark:text-slate-400 text-sm md:text-xs lg:text-base leading-6 truncate">
              {{ currentMusic.album }}
            </h2>
            <p class="text-slate-900 dark:text-slate-50 text-sm md:text-xs lg:text-lg">
              {{ currentMusic.song }}
            </p>
          </div>
        </div>
        <!-- 音柱视觉区域 -->
        <canvas ref="visualizerCanvas" class="w-full h-12 sm:h-16 md:h-24 lg:h-40  col-span-2 "></canvas>
      </div>
      <!--progress bar and control buttons-->
      <div class="space-y-4">
        <!-- progress bar -->
        <div class="space-y-2">
          <div
              class="relative cursor-pointer"
              :class="{ 'opacity-90  ring-1 ring-orange-500': isDragging }"
              @click="seek"
              ref="progressBar"
          >
            <div class="bg-slate-300 dark:bg-white rounded-full overflow-hidden">
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

        <!--  control buttons -->
        <div class=" h-20  bg-slate-300 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
          <!--  左三按钮 -->
          <div class="flex-auto h-full flex items-center justify-evenly">
            <!-- toggleVisualizer -->
            <div class="relative group">

              <button @click="toggleVisualizer"
                      class="px-3 py-1 rounded"
                      :class="{
                              'bg-gradient-to-r from-purple-600 to-pink-500 text-white': visualizerType === 'bar',
                              'bg-cyan-500 text-white': visualizerType === 'wave',
                              'bg-gradient-to-r from-pink-500 to-yellow-500 text-white': visualizerType === 'mirrorWave',
                              'bg-gradient-to-r from-orange-500  to-blue-500': visualizerType === 'centeredBars',
                              'bg-gradient-to-r from-cyan-500  to-purple-300': visualizerType === 'dualStream',
                              'bg-gradient-to-r from-red-500  to-purple-600': visualizerType === 'NeonLines',
                              'bg-green-600': visualizerType === 'MatrixDrop',
                              }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-soundwave" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"/>
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
                Visualizer
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
                class="bg-white border-cyan-400 border text-slate-900 dark:bg-slate-100 dark:text-slate-700 w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center mx-auto"
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
            <div class=" group relative flex items-center justify-start gap-0 ">

              <!-- mute -->
              <button @click="toggleMute" class=" flex items-center justify-center text-slate-700 dark:text-white hover:text-indigo-600
             w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 hidden md:block">
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
                  class="h-2 w-12 sm:w-16 md:w-20 lg:w-24 hidden md:block p-0 m-0"
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

      <!-- audio -->
      <audio
          ref="audio"
          @timeupdate="updateProgress"
          @loadedmetadata="onLoadedMetadata"
          @ended="resetPlayer"
          crossorigin="anonymous"
          preload="metadata"
      />
    </div>
   <!--Superior Meat-->
    <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
      <div class="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 class="text-4xl font-bold tracking-tight text-gray-900">Superior Meat</h2>
          <p class="mt-4 text-gray-500">
            Superior Meat is Melbourne’s trusted partner for premium Australian and Japanese Wagyu, bridging the gap between world-class producers and discerning culinary professionals. Specialising in ethically sourced, marbling-rich Wagyu, we serve diverse clients—from multi-hats restaurants to home gourmets—through tailored supply solutions. Regulated by PrimeSafe and HACCP certified by DQS, we ensure traceability, consistency, and unmatched quality. We specialise in premium Wagyu solutions for:
          </p>
        </div>
        <img src="/assets/images/hero04.jpg" alt="" class="aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover" />
      </div>
      <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
        <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
          <div class="sm:shrink-0">
            <img class="size-4" :src="incentive.imageSrc" alt="" />
          </div>
          <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
            <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
          </div>
        </div>
      </div>
    </div>



    <divider class="mt-6"></divider>


<!--尊品-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <!-- Details section -->
      <section aria-labelledby="details-heading">
        <div class="flex flex-col items-center text-center">
          <h2 id="details-heading" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">尊品</h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <img src="/assets/images/yakibb.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-[3/2] w-full rounded-lg object-cover" />
            <p class="mt-8 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/assets/images/yakicer.jpg" alt="Front zipper pouch with included key ring." class="aspect-[3/2] w-full rounded-lg object-cover" />
            <p class="mt-8 text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </div>

    <divider class="mt-6"></divider>
    <!--上品肉源-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="font-medium text-gray-500">上品肉源</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Prime Meat Origin</p>
          </div>

          <dl class="mt-10 space-y-10">
            <div v-for="feature in zunpin" :key="feature.name">
              <dt class="text-sm font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-3 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>

        <div>
          <img src="/assets/images/banner/banner03.png" alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
          <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
            <img src="/assets/images/banner/banner05.png" alt="Detail of temperature setting button on kettle bass with digital degree readout." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
            <img src="/assets/images/banner/banner05.png" alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug." class="aspect-square w-full rounded-lg bg-gray-100 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>
    <!--四季和牛-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NIKUSHIKI</h2>
        <p class="mt-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="mt-16 space-y-16">
        <div v-for="(feature, featureIdx) in primeMeatOrigin" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4']">
            <h3 class="text-lg font-medium text-gray-900">{{ feature.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8']">
            <img :src="feature.imageSrc" :alt="feature.imageAlt" class="aspect-[5/2] w-full rounded-lg bg-gray-100 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>
    <!--USHIMATSU-->
    <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div class="absolute inset-0 overflow-hidden">
          <img src="/assets/images/banner/banner05.png" alt="" class="size-full object-cover" />
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900/50" />
        <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">USHIMATSU</h2>
          <p class="mt-3 text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</p>
          <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
        </div>
      </div>
    </div>

    <divider class="mt-6"></divider>



    <div v-if="false" class="bg-white dark:bg-black">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-4 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article @click="selectAndPlayMusic(index)" v-for="(song, index) in musicList" :key="song.id"
                   class="relative  isolate flex flex-col justify-end overflow-hidden rounded-2xl
                          bg-gray-900 px-8 pb-2 min-h-[15rem] sm:min-h-[25rem] lg:min-h-[20rem] cursor-pointer
                           transition duration-300 transform hover:scale-110 hover:rotate-2">
            <img  :src="song.cover" alt="" class="absolute inset-0 -z-10  object-cover w-full h-full  transition duration-300 ease-out brightness-100 hover:brightness-110 " />

            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div class=" transform translate-y-2 flex items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
              <span class="mr-8 text-base text-white">{{ song.band }}</span>
              <span class="text-white">{{ song.album }}</span>
            </div>
            <h3 class="mt-3 text-lg/6 font-semibold text-white">
                <span class="absolute inset-0" />
                {{ song.song }}
            </h3>
          </article>
        </div>
      </div>
    </div>
  </div>

</template>

<script  setup>
import divider from "/src/components/divider/index.vue";

const incentives = [
  {
    name: 'Feature1',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: 'Feature2',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: 'Feature3',
    imageSrc: '/assets/images/Wagyu Platter.jpg',
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]


const zunpin = [
  {
    name: 'name1',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  { name: 'name2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {
    name: 'name3',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  { name: 'name4', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

const primeMeatOrigin = [
  {
    name: 'nikushiki glen',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: '/assets/images/glenStore.png',
    imageAlt: '123',
  },
  {
    name: 'nikushiki cbd',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: '/assets/images/cbdStore.png',
    imageAlt: '456',
  },
]


</script>

<style>



</style>