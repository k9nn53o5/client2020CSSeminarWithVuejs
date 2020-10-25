<template>
    <div>
        <p>
            hi {{customerName}} || we will send to: {{customerAddress}} || 
            <button v-on:click="goOrderInfo">your order</button> || 
            <button v-on:click="goSetting">setting</button> || 
            <button v-on:click="openCart">your cart</button> <br/>
            <cart v-if="opencart === true"></cart>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
import cart from '../components/Cart'

export default {
    data:function(){
        return{
            customerInfo: Object,
            customerName:'xxx',
            customerAddress:'xxx city,xxx region,xxx road,xx section,number xx ',
            url_ordersOfCustomer:'/',
            url_setting:'/',
            opencart:false,
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
            this.$router.push(this.url_setting);
        },
        openCart:function(){
           if(this.opencart === false){this.opencart = true;}
           else{this.opencart = false;}
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
    components: { cart },
}
</script>

<style>
</style>