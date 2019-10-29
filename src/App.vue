<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home />
    <Questions v-bind:questions="questions" v-bind:getTotalPoints="getTotalPoints"/> -->
  </div>
</template>

<script>
  import {Data} from "./Data"
  import Home from "./components/Home"
  import Questions from "./components/Questions"


export default {
  name: 'app',
  components: {
    // Home,
    // Questions,
  },
  data(){
    return{
       questions: Data,
       points: 0,
       house: {}
    }
  },
  methods : {
    getTotalPoints(num){
      this.points = num
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
