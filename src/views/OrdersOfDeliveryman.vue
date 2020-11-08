<template>
<div>
	<h3 v-if="orders.length === 0">There are no order right now. Please Wait a minute. </h3>
	<order v-for="o in orders" :orderInfo="o" :role="role" :key="o.og_id" :did="deliverymanId"></order>
</div>
</template>

<script>
import order from '../components/order'
import axios from 'axios'
export default {
	data:function(){
        return{
			role: 'deliveryman',
			deliverymanId: Number(this.$route.params.id),
			orders:[],
		};
    },
	components: { order },
	name: "ListOrdersNeedToDeliver",
	created() {
		let endpoint = '/api/orders/ordersNeedToBeSend';
		axios.get(endpoint).then((response)=>{
			console.log(response.data);
			this.orders = response.data;
		}).catch((error)=>{
			console.log(error.response.status);
		});
	},
}
</script>

<style>
</style>