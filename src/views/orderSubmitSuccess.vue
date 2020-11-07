<template>
	<div>
		order submit success<br/>
		<router-link :to="{path: url}">back</router-link><br/>
	</div>
</template>

<script>
export default {
	data: function(){
		return{
			url: '/customers/'+String(this.$route.params.id)+'/list',
		}
	},
	name: "orderSubmitSuccess",
}
</script>

<style>
</style>