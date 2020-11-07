<template>
<div>
    <oor :rid="Number(restaurantId)"></oor>
    <button v-on:click="goUpdateInfo">update info</button>
    <button v-on:click="goUpdateMenu">update menu</button>
</div>
</template>

<script>
import oor from '../components/OrdersOfRestaurant'

export default {
    data: function () {
        return {
            url_updateInfo:'/restaurants/updateInfo',
            url_updateMenu:'/restaurants/updateMenu',
            restaurantId:this.$route.params.id,
        };
      },
    components:{oor},
    methods: {
        goUpdateInfo(){
            this.$router.push(this.url_updateInfo);
        },
        goUpdateMenu(){
            this.$router.push(this.url_updateMenu);
        }
    },
    
}
</script>

<style>
</style>