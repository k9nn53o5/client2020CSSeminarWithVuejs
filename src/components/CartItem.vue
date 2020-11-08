<template>
<div>
    {{itemInfo.name}}<button v-if="isMyCart===false" v-on:click="removeTheItem">remove</button>
</div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name: "Cart",
    data:function(){
        return{
            itemInfo:this.Info
        };
    },
    props:{
        isMyCart:Boolean,
        Info:Object,
	},
	methods:{
		removeTheItem:function(){
			this.$emit('rmTheItem',this.itemInfo.id)
		},
	}
   
}
</script>

<style>
</style>