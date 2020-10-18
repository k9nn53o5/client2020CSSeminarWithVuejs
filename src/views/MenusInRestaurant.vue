<template>
<div>
	<food v-for="f in list" :Info="f" :key="f.id" v-on:putInCart="updateCart" ></food>
	<cart :Items="foodsGoing2PutCart" v-on:RMItemFromCart="rmFromCart"></cart>
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
		},
		rmFromCart:function(id){
			for( var i = 0; i < this.foodsGoing2PutCart.length; i++){
				if ( this.foodsGoing2PutCart[i].id === id){ 
					this.foodsGoing2PutCart.splice(i, 1); 
				}
			}
		}
	},
	mounted() {
		this.$store.dispatch('menu/getMenusList')
	}
}
</script>
<style>

</style>