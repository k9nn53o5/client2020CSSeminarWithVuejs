import Vue from 'vue';
import App from './app.vue';
import Routers from './router.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//Vue.config.productionTip = false

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
  render: h => {
    return h(App)
  }
})
