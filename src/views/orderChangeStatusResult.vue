<template>
    <div>
        {{statusCode}}
        <button v-on:click="goback">Back</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data:function(){
        return{
            statusCode:this.$route.params.statusCode,
            role:this.$route.params.role,
            tmpid:this.$route.params.tmpid,
        };
    },
    methods:{
        goback:function(){
            if(this.role === 'restaurant'){
                let url = "/restaurants/"+this.tmpid+"/list"
                this.$router.push(url);
            }
            else if(this.role === 'deliveryman'){
                let url = "/deliverymans/"+this.tmpid+"/list"
                this.$router.push(url);
            }
        },
    },
}
</script>
<style>
</style>