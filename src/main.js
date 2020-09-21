import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//Vue.config.productionTip = false

const Routers = [
  {
    path:'/login',
    meta:{
      title:'login'
    },
    component: (resolve) => require(['./views/Login.vue'], resolve)
  },
  {
    path:'/register',
    meta:{
      title:'register'
    },
    component: (resolve) => require(['./views/Register.vue'], resolve)
  },
  {
    path:'/',
    meta:{
      title:'main page'
    },
    component: (resolve) => require(['./views/Index.vue'], resolve)
  },
  {
    path: '*',
    redirect: '/index'
  }
];

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
