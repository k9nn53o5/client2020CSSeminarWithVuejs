<template>
  <div class="delete">
    <router-link :to="{path: url_back}">back</router-link><br/><br/><br/>
####################################################<br/><br/><br/>
    <button v-on:click="deleteRestaurant">Delete</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Register',
  data: function(){
    return{
      url_back_root:'/',
      url_back:'/restaurants/'+Number(this.$route.params.id)+'/list',
      };
  },
  methods:{
      deleteRestaurant: function(){
          let endpoint = '/api/restaurants/'+Number(this.$route.params.id);
          axios.delete(endpoint).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error.response.data);
          });
          this.$router.push(this.url_back_root);
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