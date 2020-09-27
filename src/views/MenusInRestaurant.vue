<template>
<div>
	<food v-for="f in list" :foodInfo="f" :key="f.id"></food>
</div>
</template>
<script>
import food from '../components/food'
export default {
	components: { food },
	name: "MenuInRestaurant",
	computed: {
		list() {
			return this.$store.state.menu.menusList
		}
	},
	mounted() {
		this.$store.dispatch('menu/getMenusList')
	}
}
</script>
<style>

</style>