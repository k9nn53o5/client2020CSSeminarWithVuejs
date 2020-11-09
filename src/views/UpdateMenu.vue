<template>
  <div class="register">
  <p v-if="action===''">{{message}}</p>
  <button v-on:click="action='new'">new</button>
  <button v-on:click="action='delete'">delete</button>
  <div v-if="action==='new'">
    food name:<input type="text" v-model="foodName"/><br/>
    price:<input type="number" v-model="price"/><br/>
  </div>
  <div v-if="action==='delete'">
    food name:<input type="text" v-model="foodName"/><br/>
  </div>
    <button v-on:click="updateRestaurantMenu()">Submit</button><br/>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'UpdateMenu',
  data: function(){
    return{
      foodName:'',
      price:0,
      password:'',
      phoneNo:0,
      message:'Manage Menu',
      url_back:'/restaurants/'+Number(this.$route.params.id)+'/list',
      action:''
    };
  },
  methods:{
    newFood: function(){
      let endpoint = '/api/restaurants/'+Number(this.$route.params.id)+'/menus';
      let myjson = {
        name: String(this.foodName),
        storeId:Number(this.$route.params.id),
        price:Number(this.price),
      }
      axios.post(endpoint,myjson).then((response)=>{
        console.log(response.data);
        this.message = "add into menu success";
      }).catch((error)=>{
        console.log(error.response.data);
        this.message = "add into menu fail";
      });
    },

    deleteFood: function(){
      let endpoint = '/api/restaurants/'+Number(this.$route.params.id)+'/menus/foodName/'+String(this.foodName);
      axios.delete(endpoint).then((response)=>{
        console.log(response.data);
        this.message = "delete from menu success";
      }).catch((error)=>{
        console.log(error.response.data);
        this.message = "delete from menu fail";
      });
    },

    updateRestaurantMenu: function(){
      if(this.action==='new'){
        this.newFood();
      }
      else if(this.action==='delete'){
        this.deleteFood();
      }
      this.$router.push(this.url_back);
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