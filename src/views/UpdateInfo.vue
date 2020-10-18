<template>
  <div class="register">
    {{message}}<br/>
    restaurant name:<input type="text" v-model="rname"/><br/>
    password:<input type="password" v-model="password"/><br/>
    phone number:<input type="text" v-model="phoneNo"><br/>
    <button v-on:click="updateRestaurantInfo">Submit</button>
    <router-link :to="{path: url_back}">back to restaurant page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function(){
    return{
      rname:'',
      password:'',
      phoneNo:0,
      message:'',
      url_back:'/restaurant/list',
      };
  },
  methods:{
      updateRestaurantInfo: function(){
      }
  },

}
</script>

<style lang="scss">
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}


</style>