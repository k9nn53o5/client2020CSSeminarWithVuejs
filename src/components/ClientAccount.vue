<template>
    <div>
        <p>
            hi {{customerName}} || we will send to: {{customerAddress}} || 
            <button v-on:click="goOrderInfo">your order</button> || 
            <button v-on:click="goSetting">setting</button> || 
            <button v-on:click="goCart">your cart</button> 
        </p>  
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return{
            customerName:'',
            customerAddress:'xxx city,xxx region,xxx road,xx section,number xx ',
            url_orderInfo:'/',
            url_setting:'/',
        };
    },
    props:{
        cid:Number,
    },
    methods:{
        goOrderInfo:function(){
            this.$router.push(this.url_orderInfo);
        },
        goSetting:function(){
            this.$router.push(this.url_setting);
        },
        goCart:function(){
            this.$router.push('/')
        }
    },
    create(){
        let url = '/customers/'+ String(this.cid);
        axios.get(url).then((response) => {
            
        })
    }
}
</script>

<style>
</style>