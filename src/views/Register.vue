<template>
  <div class="register">
    <p class="user" :class="{'need register':haveNotRegister}">
      {{message}}<br/>
      name:<input type="text" v-model="username"/><br/>
      password:<input type="password" v-model="password"/><br/>
      phone:<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br/>
      <button v-on:click="doRegister">Submit</button>
    </p>
    <p v-if="haveNotRegister == false">You have already registered before</p>
    <div v-if="main">
      <h1>Main</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function(){
    return{
      name:'',
      password:'',
      phone:0,
      message:'',
      haveNotRegister:true,
      main:false
    };
  },
  computed:{},
  methods:{
      doRegister: function(){

      }
  }
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