<template>
  <div id="app">
    <router-view :questions="questions" :getTotalPoints="getTotalPoints" :house="house"></router-view>
     <!-- <Home /> -->
    <!-- <Questions v-bind:questions="questions" v-bind:getTotalPoints="getTotalPoints"/> -->
  </div>
</template>

<script>
  import {Data} from "./Data"
  import {houses} from "./houses"
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
       house: ""
    }
  },
  methods : {
    getTotalPoints(num){
      this.points = num
    },

    getHouse(){
      let currentHouse = ""
    if(this.points >= 6 && this.points <= 10){
      currentHouse = "hufflepuff"
  } else if(this.points >= 11 && this.points <= 15){
      currentHouse = "ravenclaw"
  } else if(this.points >= 16 && this.points <= 20){
      currentHouse = "gryfinndor"
  } else{
      currentHouse = "slytherin"
  }
    this.house = houses.find(x=>{
        return x.name.toUpperCase() === currentHouse.toUpperCase()
      })
    }



  },
  watch: {
        points: function (val, oldVal) {
            if(oldVal !== val){
                this.getHouse()
            }
        }
    },
}

</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
