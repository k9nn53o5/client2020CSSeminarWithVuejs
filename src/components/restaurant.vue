<template>
    <div>
        <router-link :to="{path: url_menus}">{{restaurantInfo.name}}</router-link>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            url_menus:'/customer/list/'+this.restaurantInfo.id+'/menus'
        };
    },
    props:{
        restaurantInfo: Object
    }
}
</script>
<style>
</style>