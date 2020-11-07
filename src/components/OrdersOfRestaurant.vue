<template>
<div>
	<order v-for="o in orders" :orderInfo="o" :role="role" :key="o.id" :rid="rid"></order>
</div>
</template>

<script>
import order from '../components/order'
import axios from 'axios'

export default {
	data: function(){
		return{
			role:'restaurant',
			orders:[],
		}
	},
	props:{
		rid:Number,
	},
	components: { order },
	name: "ListRestaurants",
	created() {
		//this.orders = this.$store.state.order.ordersList;

        let endpoint = '/restaurants/'+(this.rid)+'/orders';
        axios.get(endpoint).then((response) => {
			this.orders = response.data;
		}).catch((error)=>{
			console.log(error.response)
		});
    },
}
</script>

<style>
</style>