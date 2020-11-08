<template>
    <div>
        _________________________________________________________
        <p v-on:click="openDetailFunc">{{orderInfo.id}} -->(click to watch)</p>
        <p v-if="openDetail===true">{{orderInfo}}</p>
        <p v-on:click="openFoodsInAOrder">-->(click to see foods' list)</p>
        <foodsinorder v-if="openGoods===true" :foods="goods"></foodsinorder>
        <button v-if="role==='customer'"  v-on:click="customerGetFoods">I recieve all Foods</button> 
        <button v-if="role==='restaurant' && order.status==='Sending'" v-on:click="restaurantStartCooking">StartCooking</button> <button v-if="role==='restaurant' && order.status==='Cooking'"  v-on:click="restaurantFinishCooking">FinishCooking</button> 
        <button v-if="role==='deliveryman'" v-on:click="deliverymanTakeOrder">TakeOrder</button>
        <br/>
        _________________________________________________________       
        <br/>
    </div>
</template>
<script>
import foodsinorder from "./FoodsInAOrder"
import axios from "axios"
export default {
    data:function(){
        return{
            order:this.orderInfo,
            openDetail:false,
            openGoods:false,
            goods:[],
        };
    },
    props:{
        orderInfo: Object,
        role: String,
        rid:Number,
        did:Number,
        cid:Number,
    },
    methods:{
        openDetailFunc:function(){
            if(this.openDetail === false){this.openDetail = true;}
            else{this.openDetail = false;}
        },
        openFoodsInAOrder:function(){
            if(this.openGoods === false){
                this.openGoods = true;
                let endpoint = '/api/orders/'+this.order.id+'/goods'
                axios.get(endpoint).then((response) => {
                    console.log(response.data);
                    this.goods = response.data;
                }).catch((error)=>{
                    console.log(error.response.status);
                });
            }
            else{
               this.openGoods = false; 
            } 
        },
        
        customerGetFoods:function(){
            let endpoint = '/api/customers/'+this.cid+'/action';
            let myjson = {
                oId:this.order.id,
                action:"GetTheFoods"
            }
            axios.put(endpoint,myjson).then((response)=>{
                console.log(response.status);
            }).catch((error)=>{
                console.log(error.response.status);
            });
            let url = "/customers/"+this.cid+"/list"
            this.$router.push(url);
        },
        restaurantStartCooking:function(){
            let endpoint = '/api/restaurants/'+this.rid+'/action';
            let myjson = {
                oId:this.order.id,
                action:'StartCooking'
            }
            let msg = 200;
            axios.put(endpoint,myjson).then((response)=>{
                console.log(response.status);
                msg = response.status
            }).catch((error)=>{
                console.log(error.response.status);
                msg = error.response.status;
            });
            let url = '/orderChangeResult/'+this.role+'/'+this.rid+'/'+msg;
            this.$router.push(url);
        },
        restaurantFinishCooking:function(){
            let endpoint = '/api/restaurants/'+this.rid+'/action';
            let myjson = {
                oId:this.order.id,
                action:'FinishCooking'
            }
            let msg = 200;
            axios.put(endpoint,myjson).then((response)=>{
                console.log(response.status);
                msg = response.status
            }).catch((error)=>{
                console.log(error.response.status);
                msg = error.response.status;
            });
            let url = '/orderChangeResult/'+this.role+'/'+this.rid+'/'+msg;
            this.$router.push(url);
        },
        deliverymanTakeOrder:function(){
            let endpoint = '/api/deliverymans/'+this.did+'/action';
            let myjson = {
                oId:this.order.id,
                action:'TakeTheOrder'
            }
            let msg = 200;
            axios.put(endpoint,myjson).then((response)=>{
                console.log(response.status);
                msg = response.status
            }).catch((error)=>{
                console.log(error.response.status);
                msg = error.response.status;
            });
            let url = '/orderChangeResult/'+this.role+'/'+this.did+'/'+msg;
            this.$router.push(url);
        }

    },
    components:{
        foodsinorder,
    },
}
</script>
<style>
</style>