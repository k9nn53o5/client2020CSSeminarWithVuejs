<template>
<div>
	<clientaccount :cid="Number(customerId)"></clientaccount>
	<restaurant v-for="r in listRestaurants" :restaurantInfo="r" :cid="Number(customerId)" :key="r.id"></restaurant>
</div>
</template>
<script>
import restaurant from '../components/restaurant'
import clientaccount from '../components/ClientAccount'
import axios from 'axios'

export default {
	data: function(){
		return{
			customerId: this.$route.params.cid,
			//listRestaurants: this.$store.state.restaurant.restaurantsList,
			listRestaurants:[],

		};
	},
	components: {
		restaurant,
		clientaccount,
	},
	name: "ListRestaurants",
	mounted() {
		this.$store.dispatch('restaurant/getRestaurantsList')
		this.$store.dispatch('customer/getCustomersList')
	},
	created() {
		let restaurantsUrl = '/restaurants'
		axios.get(restaurantsUrl).then((response) => {
			this.listRestaurants = response.data
		})
	}
}
</script>
<style>

</style>