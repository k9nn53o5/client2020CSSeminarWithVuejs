<template>
<div>
	<order v-for="o in list" :orderInfo="o" :role="role" :key="o.og_id"></order>
</div>
</template>

<script>
import order from '../components/order'
export default {
	data: function(){
		return{
			role:'restaurant',
			oidsArr:[],
		}
	},
	components: { order },
	name: "ListRestaurants",
	computed: {
		list() {
			return this.$store.state.order.ordersList
		},
	},

	mounted() {
		this.$store.dispatch('order/getOrdersList')
	}
}
</script>

<style>
</style>