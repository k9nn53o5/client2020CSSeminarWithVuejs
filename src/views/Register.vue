<template>
  <div class="register">
    {{message}}<br/>
    name:<input type="text" v-model="name"/><br/>
    password:<input type="password" v-model="password"/><br/>
    phone:<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br/>
    <button v-on:click="doRegister">Submit</button>
    <router-link :to="{path: url_login}">back to  login</router-link>
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
      url_login:'/login/'+this.role,
      };
  },
  methods:{
      doRegister: function(){
      }
  },
  props: {
    role: {
      type: String,
      required: true,
    },
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