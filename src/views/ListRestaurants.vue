<template>
<div>
	<clientaccount :cid="Number(customerId)" ></clientaccount>
	<router-link v-for="r in listRestaurants" :key="r.id" 
		:to="{path: '/customers/'+String(customerId)+'/list/'+r.id+'/menus'}">
		{{r.name}}<br/>
	</router-link>
</div>
</template>
<script>
//import restaurant from '../components/restaurant'
import clientaccount from '../components/ClientAccount'
import axios from 'axios'


export default {
	data: function(){
		return{
			customerId: this.$route.params.id,
			listRestaurants:[],
		};
	},
	
	components: {
		clientaccount,
	},
	name: "ListRestaurants",
	created() {
		let restaurantsUrl = '/restaurants'
		axios.get(restaurantsUrl).then((response) => {
			this.listRestaurants = response.data
		});
	}
}
</script>
<style>

</style>