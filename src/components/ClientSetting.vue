<template>
    <div>
        your information:<br/>
        {{customerInfo}}<br/>
        <button v-if="message===''" v-on:click="deleteAccount">delete account</button><br/>
        <p v-if="message!=''">{{message}}</p><br/>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return{
            message:'',
        };
    },
    props:{
        customerInfo: Object,
        cid:Number,
    },
    methods:{
        deleteAccount:function(){
            let deleteUrl = '/customers/'+Number(this.cid);
            axios.delete(deleteUrl).then((response)=>{
                console.log(response);
                if(response.status === 200){
                    this.message = response.data.result;
                    this.$router.push('/login/customers');
                }
                else{
                    this.message = "error"
                }
            }).catch((error)=>{
                this.message = String(error.response.data.response);
            });
        }
    }
}
</script>

<style>
</style>