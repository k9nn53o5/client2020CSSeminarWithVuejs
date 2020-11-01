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
import axios from 'axios'
export default {
    name: "Cart",
    data:function(){
        return{
            cartItems:this.Items, //need id field
            isMyCart:false,
            renewKeyTime:0,
            msg:'',
        };
    },
    props:{
        Items:Array,
        ismycart:Boolean,
        renewKey:Number,
        cid:Number,
    },
    methods:{
        rmItemFromCart:function(id){
            this.$emit('RMItemFromCart',id);
        },
        sendOrder2Restaurant:function(){
            //send to restaurant
            let myjson = this.createOrderJson();
            console.log(myjson);
            // let myurl = '/customers/'+String(this.cid)+'/orders';
            // axios.post(myurl, myjson).then((response)=>{
            //     this.msg = 'success'
            // }).catch((error)=>{
            //     this.msg = error.response.status;
            // })

            // //empty the cart in store and renew component
            // this.$store.dispatch('cart/emptyCartData',true);
            // this.$emit('RENEWCart',true);
            // this.cartItems = this.Items;
        },
        createOrderJson:function(){
            let ogs = [];
            let tmpcart = this.cartItems;
            let ogQueue = []
            for (let i=0;i<tmpcart.length;i++){
                let target = tmpcart[i];
                let targetId = tmpcart[i].id;

                //if have bug
                if(ogQueue.find(e => e.id === targetId) === undefined){
                    let targetNo = tmpcart.filter(item => item.id === targetId).length;
                    let tmpOg = {
                        og_dishId : targetId,
                        og_number : targetNo,
                        og_price : target.price,
                        og_status : 'Sending',
                    }
                    ogQueue.push(tmpOg);
                }
            }

            let total=0;
            for(let i=0;i<ogQueue.length;i++){
                total += (ogQueue[i].og_price*ogQueue[i].og_number);
            }
            let outputJson = {
                order_num:ogQueue.length,
                cId:this.cid,
                pay_price:total,
                rId:tmpcart[0].storeId,
                ogs:ogQueue,
            };

            return outputJson;
        },
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