import menus_data from '../../mockdata/menus'

const state = () => ({
	menusList: []
})

const getters = {
}

const actions = {
	getMenusList (context) {
		setTimeout(() => {
			context.commit('setMenusList', menus_data);
		}, 500);
	}
}

const mutations = {
	setMenusList (state, data) {
		state.menusList = data;
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
  }