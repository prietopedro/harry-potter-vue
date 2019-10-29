import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import Questions from "./components/Questions"
import House from "./components/House"

Vue.use(VueRouter)


const routes = [
  {path: "/", component: Home},
  {path: "/Questions", component: Questions, props: true},
  {path: "/House", component: House, props: true}
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
})
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
