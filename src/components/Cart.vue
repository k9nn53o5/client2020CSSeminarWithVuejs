<template>
<div>
    <br/>
    <br/>
    what is in cart:<br/>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <div>
        <CartItem v-for="item in cartItems" :Info="item" :key="item.id" v-on:rmTheItem="rmItemFromCart"></CartItem>
    </div>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <button v-if="isMyCart===true" v-on:click="sendOrder2Restaurant">send to restaurant</button>
</div>
</template>

<script>
import CartItem from '../components/CartItem'
export default {
    name: "Cart",
    data:function(){
        return{
            cartItems:this.Items, //need id field
            isMyCart:false,
        };
    },
    methods:{
        rmItemFromCart:function(id){
            this.$emit('RMItemFromCart',id);
        },
        sendOrder2Restaurant:function(){
            //send to restaur
            this.$store.dispatch('cart/emptyCartData',true)
        },
    },
    props:{
        Items:Array,
        ismycart:Boolean,
    },
    components: {CartItem},
    created () {
        if(this.ismycart === true){
            this.isMyCart = this.ismycart;
        }
    },

}
</script>

<style>
</style>