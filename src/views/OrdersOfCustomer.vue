<template>
<div>
	<order v-for="o in orders" :orderInfo="o" :role="role" :key="o.id" :cid="cId"></order>
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
		};
    },
	components: { order },
	name: "ListOrdersBelong2Customer",
	created() {
		let endpoint = '/customers/'+this.$route.params.id+'/orders';
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