<template>
<div>
	<order v-for="o in list" :orderInfo="o" :role="role" :key="o.og_id" :did="deliverymanId"></order>
</div>
</template>

<script>
import order from '../components/order'
export default {
	data:function(){
        return{
			role: 'deliveryman',
			deliverymanId: this.$route.params.id,
		};
    },
	components: { order },
	name: "ListOrdersNeedToDeliver",
	computed: {
		list() {
			return this.$store.state.order.ordersList
		}
	},
	mounted() {
		this.$store.dispatch('order/getOrdersList')
	}
}
</script>

<style>
</style>