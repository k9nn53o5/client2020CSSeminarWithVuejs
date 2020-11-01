<template>
<div>
	{{restaurantInfo.name}} || {{restaurantInfo.address}} || {{restaurantInfo.phoneNum}}<br/>
	<food v-for="f in menusList" :Info="f" :key="f.id" v-on:putInCart="updateFG2PC" ></food>
	<cart :Items="foodsGoing2PutCart" v-on:RMItemFromCart="rmFromFG2PC"></cart>
	<button v-on:click="submitFG2PC">submit</button>
</div>
</template>
<script>
import cart from '../components/Cart'
import food from '../components/FoodInMenu'
import axios from 'axios'

export default {
	components: {
		food,
		cart,
	},
	name: "MenuInRestaurant",
	data:function(){
		return{
			//搞懂這筆data會存哪，存多久
			menusList:[],
			foodsGoing2PutCart:[],
			restaurantInfo:Object,
		};
	},
	
	methods: {
		updateFG2PC:function(foodGoing2Add){
			this.foodsGoing2PutCart.push(foodGoing2Add);
		},
		rmFromFG2PC:function(id){
			for( var i = 0; i < this.foodsGoing2PutCart.length; i++){
				if ( this.foodsGoing2PutCart[i].id === id){ 
					this.foodsGoing2PutCart.splice(i, 1); 
				}
			}
		},
		submitFG2PC:function(){
			this.$store.dispatch('cart/updateCartData',this.foodsGoing2PutCart);
			this.foodsGoing2PutCart.splice(0,this.foodsGoing2PutCart.length);
			let url = '/customers/'+String(this.$route.params.id)+'/list';
			this.$router.push(url)
		}
	},
	created() {

		let endpointRInfo = '/restaurants/'+ String(this.$route.params.rid);
		axios.get(endpointRInfo).then((response) => {
			console.log("-------"+"\n"+response);
			this.restaurantInfo = response.data;
		}).catch((error)=>{
			console.log(error.response)
		});

		let endpoint = '/restaurants/'+ String(this.$route.params.rid) + '/menus';
		axios.get(endpoint).then((response) => {
			console.log(response);
			this.menusList = response.data;
		})
	}
}
</script>
<style>

</style>