<template>
<div>
    <br/>
    <br/>
    what is in cart:<br/>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div>
        <CartItem v-for="item in cartItems" :Info="item" :key="item.id"></CartItem>
    </div>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name: "Cart",
    data:function(){
        return{
            cartItems:this.Items //need id field
        };
    },
    props:{
        Items:Array,
    },
    components: {CartItem},
}
</script>

<style>
</style>