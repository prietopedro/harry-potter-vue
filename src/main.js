import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import Questions from "./components/Questions"

Vue.use(VueRouter);
const routes = [
  {path: "/", component: Home},
  {path: "/Questions", component: Questions},
];

const router = new VueRouter({
  routes: routes
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
