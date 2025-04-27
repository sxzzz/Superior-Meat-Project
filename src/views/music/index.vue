<template>

  <div class="">
    <div class="bg-white border border-cyan-400 dark:bg-slate-800 dark:border-slate-500 rounded-xl p-4 pb-6
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
      />
    </div>

    <divider class="mt-6"></divider>

    <div class="bg-white dark:bg-black">
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
import { ref, onMounted,watch,computed,nextTick,onBeforeUnmount} from 'vue';
import { useMusicStore } from '/src/store/musicStore.js';
import { storeToRefs } from 'pinia';
const musicStore = useMusicStore();
const { musicList, currentIndex, currentMusic} = storeToRefs(musicStore);

// music player
const audio = ref(null);
const progressBar = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);


const isDragging = ref(false);
const progressPercentage = computed(() =>
    duration.value ? (currentTime.value / duration.value) * 100 : 0
);

onMounted(() => {
  audio.value.src = currentMusic.value.src;

  audio.value.volume = volume.value; // 初始化音量
})

// play/stop
function togglePlay() {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
  isPlaying.value = !isPlaying.value;
}


// update time and progress bar %
function updateProgress() {
  if (!audio.value) return; // 避免空引用错误
  currentTime.value = audio.value.currentTime;
  duration.value = audio.value.duration || 0;
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

//drag and drop progress bar
const onTouchStart = (event) => {
  isDragging.value = true;
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', onTouchEnd);
};

const onTouchMove = (event) => {
  if (!isDragging.value || !audio.value || !progressBar.value) return;
  const rect = progressBar.value.getBoundingClientRect();
  const moveX = event.touches[0].clientX - rect.left; // 使用 touch 对象
  const ratio = Math.max(0, Math.min(1, moveX / rect.width));
  const newTime = ratio * duration.value;
  currentTime.value = newTime;
  audio.value.currentTime = newTime;
};

const onTouchEnd = () => {
  isDragging.value = false;
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
};
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
    progressBar.value.addEventListener('touchstart', onTouchStart);
  }
});

onBeforeUnmount(() => {
  if (progressBar.value) {
    progressBar.value.removeEventListener('mousedown', onMouseDown);
    progressBar.value.removeEventListener('touchstart', onTouchStart);
  }
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('touchend', onTouchEnd);
});


// reset
function resetPlayer() {
  isPlaying.value = false
  currentTime.value = 0
  //progressPercentage.value = 0
  audio.value.currentTime = 0
}

// time format
function formatTime(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${min}:${sec}`
}

const volume = ref(0.8)
const previousVolume = ref(0.8)
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
    // cancel mute
    volume.value = previousVolume.value || 0.8
    isMuted.value = false
  } else {
    // mute
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

const visualizerTypes = ['bar', 'wave', 'mirrorWave', 'centeredBars','dualStream','NeonLines','MatrixDrop']
const visualizerType = ref('bar') //

function drawVisualizer(ctx, analyser, canvas) {
  if (!ctx || !analyser || !canvas) return;
  // 取消当前的动画帧
  cancelAnimationFrame(animationFrameId);
  // 根据当前选择的 visualizerType 绘制对应的效果
  if (visualizerType.value === 'bar') {
    drawBarsLoop(ctx, analyser, canvas);
  } else if (visualizerType.value === 'wave') {
    drawWaveLoop(ctx, analyser, canvas);
  } else if (visualizerType.value === 'mirrorWave') {
    drawMirrorWave(ctx, analyser, canvas);
  } else if (visualizerType.value === 'centeredBars') {
    drawCenteredBars(ctx, analyser, canvas);
  } else if (visualizerType.value === 'dualStream') {
    drawDualStream(ctx, analyser, canvas);
  } else if (visualizerType.value === 'NeonLines') {
    drawNeonLines(ctx, analyser, canvas);
  } else if (visualizerType.value === 'MatrixDrop') {
    drawMatrixDrop(ctx, analyser, canvas);
  }
}

function toggleVisualizer() {
  const currentIndex = visualizerTypes.indexOf(visualizerType.value)
  const nextIndex = (currentIndex + 1) % visualizerTypes.length
  visualizerType.value = visualizerTypes[nextIndex]

  // 切换后重绘
  if (isPlaying.value) {
    const canvas = visualizerCanvas.value
    const ctx = canvas.getContext('2d')
    cancelAnimationFrame(animationFrameId)
    // 调用统一的绘制方法，重绘新的 visualizer
    drawVisualizer(ctx, analyser, canvas);
  }
}

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

// 调用统一的绘制方法
  drawVisualizer(ctx, analyser, canvas);
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
      drawVisualizer(ctx, analyser, canvas);
    }
  } else {
    stopVisualizer()
  }
})

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

      // const r = 100 + dataArray[i]
      // const g = 50
      // const b = 255 - dataArray[i]
      const r = 200 + Math.sin(i / 5) * 55;  // 粉红波动
      const g = 50 + (dataArray[i] / 4);     // 紫中带青
      const b = 200 + Math.cos(i / 5) * 55;  // 蓝中带紫


      ctx.fillStyle = `rgb(${r},${g},${b})`
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

      x += barWidth + 1
    }
  }

  draw()
}

function drawWaveLoop(ctx, analyser, canvas) {
  const bufferLength = analyser.fftSize
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteTimeDomainData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()

    const sliceWidth = canvas.width / bufferLength
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0
      const y = (v * canvas.height) / 2

      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      x += sliceWidth
    }

    ctx.strokeStyle = '#22d3ee' // Tailwind cyan-400
    ctx.lineWidth = 2
    ctx.stroke()
  }

  draw()
}

function drawMirrorWave(ctx, analyser, canvas) {
  const bufferLength = analyser.fftSize
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteTimeDomainData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const midY = canvas.height / 2
    const sliceWidth = canvas.width / bufferLength

    // === 背景部分 ===
    // 上半部分背景
    ctx.fillStyle = 'rgba(236, 72, 153, 0.05)' // light blue
    ctx.fillRect(0, 0, canvas.width, midY)

    // 下半部分背景
    ctx.fillStyle = 'rgba(250, 204, 21, 0.05)' // light cyan
    ctx.fillRect(0, midY, canvas.width, midY)

    // === 中心线 ===
    ctx.beginPath()
    ctx.moveTo(0, midY)
    ctx.lineTo(canvas.width, midY)
    ctx.strokeStyle = 'rgba(236, 72, 153, 0.25)' // 中间线（白色微透明）
    ctx.lineWidth = 1
    ctx.stroke()

    // === 上半波形 ===
    ctx.beginPath()
    let x = 0
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0
      const y = (v * canvas.height) / 4
      ctx.lineTo(x, midY - y)
      x += sliceWidth
    }
    ctx.strokeStyle = '#ec4899' // blue-400
    ctx.lineWidth = 2
    ctx.stroke()

    // === 下半镜像波形 ===
    ctx.beginPath()
    x = 0
    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0
      const y = (v * canvas.height) / 4
      ctx.lineTo(x, midY + y)
      x += sliceWidth
    }
    ctx.strokeStyle = '#facc15' // cyan-400
    ctx.lineWidth = 2
    ctx.stroke()
  }

  draw()
}

function drawCenteredBars(ctx, analyser, canvas) {
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteFrequencyData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const gap = 1
    const barWidth = canvas.width / bufferLength * 1.8
    const centerY = canvas.height / 2
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const value = dataArray[i]
      const barHeight = (value / 255) * (canvas.height / 2)

      // 创建渐变（从左到右）
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, '#fb923c')  //
      gradient.addColorStop(0.5, '#065f46')  //
      gradient.addColorStop(1, '#4338ca')  //
      ctx.fillStyle = gradient

      // 上半部分
      ctx.fillRect(x, centerY - barHeight, barWidth - gap, barHeight)
      // 下半部分镜像
      ctx.fillRect(x, centerY, barWidth - gap, barHeight)

      x += barWidth
    }
  }

  draw()
}

function drawDualStream(ctx, analyser, canvas) {
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteFrequencyData(dataArray)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const barWidth = canvas.width / bufferLength * 1.2
    const gap = 1
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const value = dataArray[i]
      const barHeight = (value / 255) * (canvas.height / 2)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#06b6d4') // cyan-500
      gradient.addColorStop(0.5, '#3b82f6') // blue-500
      gradient.addColorStop(1, '#9333ea') // purple-600

      ctx.fillStyle = gradient

      // 上半柱子（从顶部往下）
      ctx.fillRect(x, 0, barWidth - gap, barHeight)

      // 下半柱子（从底部往上）
      ctx.fillRect(x, canvas.height - barHeight, barWidth - gap, barHeight)

      x += barWidth
    }
  }

  draw()
}

function drawNeonLines(ctx, analyser, canvas) {
  const bufferLength = analyser.fftSize
  const dataArray = new Uint8Array(bufferLength)

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteTimeDomainData(dataArray)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const lineHeight = canvas.height / 8
    const sliceWidth = canvas.width / bufferLength

    for (let row = 0; row < 8; row++) {
      ctx.beginPath()
      let x = 0
      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0
        const y = row * lineHeight + (v * lineHeight) / 2

        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        x += sliceWidth
      }

      ctx.strokeStyle = `hsl(${row * 40}, 100%, 60%)`
      ctx.lineWidth = 1.5
      ctx.shadowBlur = 6
      ctx.shadowColor = ctx.strokeStyle
      ctx.stroke()
    }

    ctx.shadowBlur = 0
  }

  draw()
}

function drawMatrixDrop(ctx, analyser, canvas) {
  const bufferLength = analyser.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const columns = Math.floor(canvas.width / 16)
  const drops = new Array(columns).fill(0)

  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'

  function draw() {
    animationFrameId = requestAnimationFrame(draw)
    analyser.getByteFrequencyData(dataArray)

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.font = '16px monospace'

    for (let i = 0; i < columns; i++) {
      const value = dataArray[i % bufferLength]
      const char = charset[Math.floor(Math.random() * charset.length)]
      const x = i * 16
      const y = Math.floor(drops[i]) * 16
      ctx.fillStyle = `hsl(120, 100%, ${30 + Math.random() * 20}%)`
      //ctx.fillStyle = `hsl(${value}, 100%, ${50 + value / 5}%)`
      //ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 100%, ${50 + Math.random() * 30}%)`
      ctx.fillText(char, x, y)

      // 即使频率数据为 0，也加一点微小随机速度，避免冻结 /10等于速度慢10倍
      const speed = (value / 200 + Math.random() * 0.25 + 0.2)/10
      drops[i] += speed

      if (y > canvas.height || Math.random() > 0.975) {
        drops[i] = 0
      }
    }
  }

  draw()
}

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

// function nextMusic() {
//   // 切换索引
//   currentIndex.value = (currentIndex.value + 1) % musicList.value.length
//   audio.value.pause()
//   isPlaying.value = false // 重置播放状态
//
//   nextTick(() => {
//     // 设置新音频源并加载
//     audio.value.src = currentMusic.value.src
//     audio.value.load()
//     audio.value.currentTime = 0
//     currentTime.value = 0
//     //progressPercentage.value = 0
//
//     // ✅ 自动播放
//     audio.value.play().then(() => {
//       isPlaying.value = true
//     }).catch(err => {
//       console.warn('播放失败', err)
//     })
//
//     if (audioContext && audioContext.state !== 'closed') {
//       stopVisualizer()
//       setupVisualizer()
//     }
//   })
// }
//
// function previousMusic() {
//   // 向后移动索引，支持循环
//   currentIndex.value = (currentIndex.value - 1 + musicList.value.length) % musicList.value.length
//   audio.value.pause()
//   isPlaying.value = false // 重置播放状态
//
//   nextTick(() => {
//     // 设置新音频源并加载
//     audio.value.src = currentMusic.value.src
//     audio.value.load()
//     audio.value.currentTime = 0
//     currentTime.value = 0
//     //progressPercentage.value = 0
//
//     audio.value.play().then(() => {
//       isPlaying.value = true
//     }).catch(err => {
//       console.warn('播放失败', err)
//     })
//
//     if (audioContext && audioContext.state !== 'closed') {
//       stopVisualizer()
//       setupVisualizer()
//     }
//   })
// }

function nextMusic() {
  currentIndex.value = (currentIndex.value + 1) % musicList.value.length
  playCurrentMusic()
}

function previousMusic() {
  currentIndex.value = (currentIndex.value - 1 + musicList.value.length) % musicList.value.length
  playCurrentMusic()
}

// 核心：封装一个切换并播放当前 currentIndex 指向的音乐的方法
function playCurrentMusic() {
  if (!audio.value) return
  audio.value.pause()
  isPlaying.value = false

  nextTick(() => {
    audio.value.src = currentMusic.value.src
    audio.value.load()
    audio.value.currentTime = 0
    currentTime.value = 0

    audio.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.warn('播放失败', err)
    })

    // 这里根据需要重启可视化 visualizer
    if (audioContext && audioContext.state !== 'closed') {
      stopVisualizer()
      setupVisualizer()
    }
  })
}

// ✨ 点击任意歌曲播放
function selectAndPlayMusic(index) {
  currentIndex.value = index
  playCurrentMusic()
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