
<template>
  <div>
    <Header></Header>
    <div id="wrapper" class="dark:bg-black">

        <WeatherWidget></WeatherWidget>
        <Topnav v-if="false"></Topnav>
        <div>
          <router-view></router-view>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header/index.vue';
import Topnav from "./components/Topnav/index.vue";
import Footer from "./components/Footer/index.vue";
import CloudBackground from '@/components/cloudBackground/index.vue';
import WeatherWidget from '@/components/weather/index.vue';
import { useThemeStore } from '@/store/themeStore.js';
export default {
  components: {
    Header,
    Topnav,
    Footer,
    WeatherWidget,
    CloudBackground
  },
  data() {
    return {
    }
  },
  mounted() {

    const themeStore = useThemeStore()
    themeStore.autoUpdateByTime()
    this.intervalId = setInterval(() => {
      themeStore.autoUpdateByTime()
    }, 60 * 60 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
</style>
