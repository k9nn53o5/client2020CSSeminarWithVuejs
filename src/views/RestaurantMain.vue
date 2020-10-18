<template>
<div>
    <oor></oor>
    <button v-on:click="goUpdateInfo">update info</button>
    <button v-on:click="goUpdateMenu">update menu</button>
</div>
</template>

<script>
import oor from '../components/OrdersOfRestaurant'

export default {
    data: function () {
        return {
            url_updateInfo:'/restaurant/updateInfo',
            url_updateMenu:'/restaurant/updateMenu',
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
    }
}
</script>

<style>
</style>