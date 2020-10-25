import Vue from 'vue'
import Vuex from 'vuex'
import restaurant from './modules/restaurant'
import menu from './modules/menu'
import order from './modules/order'
import customer from './modules/customer'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    restaurant,
    menu,
    order,
    customer,
  }
})