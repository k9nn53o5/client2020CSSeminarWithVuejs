import Vue from 'vue';
import App from './app.vue';
import Routers from './router.js';
import VueRouter from 'vue-router';
import store from './store';
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(VueRouter);

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig);

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});



new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => {
    return h(App)
  },
  
})
