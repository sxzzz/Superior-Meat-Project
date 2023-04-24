
<template>
  <div>
    <Header></Header>
    <h1>testing</h1>
  </div>

  <router-view></router-view>

</template>

<script>

import Header from './components/Header/index.vue';
export default {
  components:{
    Header
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
