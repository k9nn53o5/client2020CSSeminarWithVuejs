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
    <button v-on:click="updateRestaurantMenu(action)">Submit</button><br/>
    <router-link :to="{path: url_back}">back to restaurant page</router-link>
  </div>
</template>

<script>
export default {
  name: 'UpdateMenu',
  data: function(){
    return{
      foodName:'',
      price:0,
      password:'',
      phoneNo:0,
      message:'Manage Menu',
      url_back:'/restaurant/list',
      action:''
    };
  },
  methods:{
    // pickAction: function(a){
    //   this.action = a
    // },
    newFood: function(){
    },
    deleteFood: function(){
    },
    updateRestaurantMenu: function(a){
      if(a==='new'){
        //do new
      }
      else if(a==='delete'){
        //do delete
      }
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