<template>
    <div>
        <p>
            hi {{customerName}} || we will send to: {{customerAddress}} || 
            <button v-on:click="goOrderInfo">your order</button> || 
            <button v-on:click="goSetting">setting</button> || 
        </p>  
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            customerName:'',
            customerAddress:'',
            url_orderInfo:'',
            url_setting:'',
        };
    },
    methods:{
        goOrderInfo:function(){
            this.$router.push(this.url_orderInfo);
        },
        goSetting:function(){
            this.$router.push(this.url_setting);
        }
    }
}
</script>

<style>
</style>