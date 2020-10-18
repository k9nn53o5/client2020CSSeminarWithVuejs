<template>
	<div>
		<p v-for="o in getOrderDetail" :key="o.og_id">{{o}}</p>
	</div>
</template>
<script>
export default {
	data: function(){
		return{
			oid: parseInt(this.$route.params.oid),
		}
	},
	name: "OrderDetail",
	computed: {
		list() {
			return this.$store.state.order.ordersList
		},
		getOrderDetail() {
			return this.list.filter	(order => order.id === this.oid);
		}
	},
	mounted() {
		this.$store.dispatch('order/getOrdersList');
	}
}
</script>
<style>

</style>