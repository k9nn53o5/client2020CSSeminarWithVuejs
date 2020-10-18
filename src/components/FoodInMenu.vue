<template>
	<div>
		{{foodInfo.name}}
		{{foodInfo.price}}
		<button v-on:click="add2Cart">add to cart</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return{
			foodInfo: this.Info,
		}
	},
	name: "MenuInRestaurant",
	computed: {
		getFoodInfo() {
			return this.list.find(food => food.id === this.foodid);
		},
	},
	methods: {
		add2Cart(){
			this.$emit('putInCart',this.foodInfo)
		},
	},
	props:{
        Info:Object,
    }
}
</script>

<style>
</style>