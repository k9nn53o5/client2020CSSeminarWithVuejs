
const state = () => ({
	cartList: []
})

const getters = {
}

const actions = {
	updateCartData (context, objInCart) {
		context.commit('setCartList',objInCart);
	},
	emptyCartData (context, status) {
		context.commit('emptyCartList',status);
	},
}

const mutations = {
	setCartList (state, data) {
		state.cartList = data;
	},
	emptyCartList(state, data) {
		if (data === true){
			state.cartList = [];
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}