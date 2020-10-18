import order_data from '../../mockdata/orderAndOrdergood'

const state = () => ({
	ordersList: []
})

const getters = {
}

const actions = {
	getOrdersList (context) {
		setTimeout(() => {
			context.commit('setOrdersList', order_data);
		}, 500);
	}
}

const mutations = {
	setOrdersList (state, data) {
		state.ordersList = data;
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}