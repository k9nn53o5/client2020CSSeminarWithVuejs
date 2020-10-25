import customer_data from '../../mockdata/customers'

const state = () => ({
	customersList: []
})

const getters = {
}

const actions = {
	getCustomersList (context) {
		setTimeout(() => {
			context.commit('setCustomersList', customer_data);
		}, 500);
	}
}

const mutations = {
	setCustomersList (state, data) {
		state.CustomersList = data;
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
  }