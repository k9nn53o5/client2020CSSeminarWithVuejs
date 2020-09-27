import restaurant_data from '../../mockdata/restaurants'

const state = () => ({
	restaurantsList: []
})

const getters = {
}

const actions = {
	getRestaurantsList (context) {
		setTimeout(() => {
			context.commit('setRestaurantsList', restaurant_data);
		}, 500);
	}
}

const mutations = {
	setRestaurantsList (state, data) {
		state.restaurantsList = data;
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
  }