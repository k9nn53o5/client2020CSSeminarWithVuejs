<template>
<div>
	<h3>your orders right now:</h3>
	<order v-for="o in myOrders" :orderInfo="o" :role="role" :key="o.id" :cid="cId"></order>
	<br/><br/><br/>
	<h3>history orders:</h3>
	<order v-for="o in historyOrders" :orderInfo="o" :role="role" :key="o.id" :cid="cId"	></order>
</div>
</template>

<script>
import order from '../components/order'
import axios from 'axios'
export default {
	data:function(){
        return{
			role: 'customer',
			cId: Number(this.$route.params.id),
			orders:[],
			myOrders:[],
			historyOrders:[],
		};
    },
	components: { order },
	name: "ListOrdersBelong2Customer",
	created() {
		let endpoint = '/api/customers/'+this.$route.params.id+'/orders';
		axios.get(endpoint).then((response)=>{
			console.log(response.data);
			this.orders = response.data;
			this.myOrders = this.orders.filter(order => order.status==='Sending' ||  order.status==='Cooking' || order.status==='FoodWasCooked' || order.status==='Delivering');
			this.historyOrders = this.orders.filter(order => order.status==='FoodArrived')
		}).catch((error)=>{
			console.log(error.response.status);
		});
		},
}
</script>

<style>
</style>