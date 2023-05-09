
<template>
  <div>
    <Header></Header>
    <div id="wrapper" class="">
      <Topnav class=""></Topnav>
      <div class="">
        <router-view></router-view>
      </div>

    </div>
  </div>


</template>

<script>

import Header from './components/Header/index.vue';
import Topnav from "./components/Topnav/index.vue";
export default {
  components:{
    Header,
    Topnav
  },
  data(){
    return {

    }
  },
  methods:{

  },
}

</script>

<style scoped>
</style>
