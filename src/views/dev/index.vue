<template>
  <div class="relative">
    <!-- Feedback 按钮（从下往上垂直排列）-->
    <div v-if="showPopup" class="fixed right-0 bottom-1/4 z-40 hidden sm:block">
      <button
          class="bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-t-xl shadow-md hover:bg-purple-800 transition origin-bottom-right tracking-wider"
          style="transform: rotate(-90deg); transform-origin: bottom right;"
          @click="togglePanel"
      >
        Feedback
      </button>
    </div>
    <!-- 右侧滑出 Panel -->
    <Popup v-if="showPopup" :visible="showPanel" @close="showPanel = false"/>

    <div :class="{ 'blur-sm': showPanel }" class="transition duration-600">
      <div class="bg-white dark:bg-black">
        <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Devnav></Devnav>
          <!-- 二级子路由 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, computed} from 'vue';
import { useRoute } from 'vue-router';


import Popup from '/src/components/Popup/index.vue';
import Devnav from '/src/components/Devnav/index.vue';


const showPanel = ref(false);

const togglePanel = () => {
  showPanel.value = !showPanel.value
}
const route = useRoute()

// 判断当前是否是 /dev/plan 或 /dev/layout
const showPopup = computed(() => {
  return ['/dev/plan', '/dev/layout'].includes(route.path)
})

const cards = [
  {
    title: 'Sweet tart',
    description: 'Sweet tart fruitcake chocolate bar ice cream macaroon shortbread tiramisu pastry.',
    author: 'David',
    gradient: 'bg-gradient-to-br from-[rgba(255,185,164,0.3)] via-[rgba(255,109,66,0.25)] to-[rgba(255,255,255,0.1)]'
  },
  {
    title: 'Cheesecake',
    description: 'Cheesecake shortbread bonbon shortbread ice cream cookie caramels sweet.',
    author: 'Andy',
    gradient: 'bg-gradient-to-br from-[rgba(255,170,130,0.4)] via-[rgba(255,95,95,0.3)] to-[rgba(255,255,255,0.2)]'
  },
  {
    title: 'Croissant',
    description: 'Croissant chocolate cake topping lollipop pie chupa chups danish carrot cake lollipop..',
    author: 'Mary',
    gradient: 'bg-gradient-to-br from-[rgba(200,140,255,0.4)] via-[rgba(255,120,200,0.3)] to-[rgba(255,255,255,0.15)]'
  },
  {
    title: 'Wafer candy',
    description: 'Wafer candy toffee sweet roll pie shortbread. Cake jelly chocolate shortbread macaroon.',
    author: 'Luna',
    gradient: 'bg-gradient-to-br from-[rgba(130,200,255,0.4)] via-[rgba(90,230,220,0.3)] to-[rgba(255,255,255,0.15)]'
  },
  {
    title: 'Lemon candy',
    description: ' Lemon drops cheesecake toffee candy cupcake biscuit.',
    author: 'Glen',
    gradient: 'bg-gradient-to-br from-[rgba(180,255,140,0.35)] via-[rgba(255,230,100,0.3)] to-[rgba(255,255,255,0.2)]'
  },
  {
    title: 'Lollipop',
    description: 'Lollipop carrot cake pastry icing cake bear claw sesame snaps.',
    author: 'Lisa',
    gradient: 'bg-gradient-to-br from-[rgba(255,200,100,0.45)] via-[rgba(255,150,80,0.35)] to-[rgba(255,255,255,0.2)]'
  },
  {
    title: 'Cookie',
    description: 'Cookie cake gummies wafer donut sweet dragée.',
    author: 'Bob',
    gradient: 'bg-gradient-to-br from-[rgba(180,240,255,0.45)] via-[rgba(160,200,255,0.3)] to-[rgba(255,255,255,0.15)]'
  },
]
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
@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee-left {
  display: flex;
  animation: marquee-left 60s linear infinite;
}


@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-marquee-right {
  display: flex;
  animation: marquee-right 60s linear infinite;
}
</style>