<template>
<div>
	<food v-for="f in list" :Info="f" :key="f.id" v-on:putInCart="updateCart" ></food>
	<cart :Items="foodsGoing2PutCart"></cart>
</div>
</template>
<script>
import cart from '../components/Cart'
import food from '../components/FoodInMenu'
export default {
	components: {
		food,
		cart,
	},
	name: "MenuInRestaurant",
	data:function(){
		return{
			//搞懂這筆data會存哪，存多久
			foodsGoing2PutCart:[],
		};
	},
	computed: {
		list() {
			return this.$store.state.menu.menusList
		}
	},
	methods: {
		updateCart:function(foodGoing2Add){
			this.foodsGoing2PutCart.push(foodGoing2Add);
		}
	},
	mounted() {
		this.$store.dispatch('menu/getMenusList')
	}
}
</script>
<style>

</style>