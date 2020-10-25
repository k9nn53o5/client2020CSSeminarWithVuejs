<template>
    <div>
        <router-link v-if="role === 'restaurant'" :to="{path: url_order_r}">{{order.id}}</router-link>
        <router-link v-else-if="role === 'deliveryman'" :to="{path: url_order_d}">{{order.id}}</router-link>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
			order:this.orderInfo,
            url_order_r:'/restaurants/'+this.rid+'/list/'+this.orderInfo.id+'/food',
            url_order_d:'/deliverymans/'+this.did+'/list/'+this.orderInfo.id+'/order',
        };
    },
    props:{
        orderInfo: Object,
        role: String,
        rid:Number,
        did:Number,
    }
}
</script>
<style>
</style>