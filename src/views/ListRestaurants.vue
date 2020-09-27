<template>
<div>
	<restaurant v-for="r in list" :restaurantInfo="r" :key="r.id"></restaurant>
</div>
</template>
<script>
import restaurant from '../components/restaurant'
export default {
	components: { restaurant },
	name: "ListRestaurants",
	computed: {
		list() {
			return this.$store.state.restaurant.restaurantsList
		}
	},
	mounted() {
		this.$store.dispatch('restaurant/getRestaurantsList')
	}
}
</script>
<style>

</style>