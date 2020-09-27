import Vue from 'vue'
import Vuex from 'vuex'
import restaurant from './modules/restaurant'
import menu from './modules/menu'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    restaurant,
    menu,
  }
})