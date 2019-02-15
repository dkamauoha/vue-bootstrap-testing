import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

//Bootstrap
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// components
import FirstChild from './components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';
import Home from './components/Home.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    { path: '/first', component: FirstChild },
    { path:'/second', component: SecondChild },
    { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});


