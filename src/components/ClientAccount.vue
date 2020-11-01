<template>
    <div>
        <p>
            hi {{customerName}} || we will send to: {{customerAddress}} || 
            <button v-on:click="goOrderInfo">your order</button> || 
            <button v-on:click="goSetting">setting</button> || 
            <button v-on:click="openCart">your cart</button><br/>
            <setting v-if="opensetting===true" :customerInfo="customerInfo" :cid="cid"></setting>
            <cart v-if="opencart===true" :ismycart="true" :Items="Items"></cart>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import cart from '../components/Cart'
import setting from '../components/ClientSetting'

export default {
    data:function(){
        return{
            customerInfo: Object,
            customerName:'xxx',
            customerAddress:'xxx city,xxx region,xxx road,xx section,number xx ',
            url_ordersOfCustomer:'/',
            url_setting:'/',
            opensetting:false,
            opencart:false,
            Items:[],
        };
    },
    props:{
        cid:Number,
    },
    methods:{
        getCInfo:function(){
            this.customerName = this.customerInfo.name;
            this.customerAddress = this.customerInfo.address;
        },
        goOrderInfo:function(){
            this.$router.push(this.url_ordersOfCustomer);
        },
        goSetting:function(){
            if(this.opensetting === false){this.opensetting = true;}
            else{this.opensetting = false;}
        },
        openCart:function(){
           if(this.opencart === false){
               this.opencart = true;
                this.Items =  this.$store.state.cart.cartList;
            }
           else{
               this.opencart = false;
            }
        },
        list:function(){
            return this.$store.state.cart.cartList;
        }
    },
    created() {
        let url = '/customers/'+ String(this.cid);
        axios.get(url).then((response) => {
            console.log(response);
            this.customerInfo = response.data;
            this.getCInfo();
        });

    },
    components: { 
        cart,
        setting,
    },
}
</script>

<style>
</style>