<template>
  <div class="login">
    {{"Hello "+ role +" "+message}}<br/>
    name:<input type="text" v-model="username">
    password:<input type="password" v-model="password">
    <button v-on:click="Login">Login</button>
    <router-link :to="{path: url_register}">Not register yet?</router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
      message: "please login",
      have_account: true,
      main: false,
      url_register:"/register/"+this.role,
      url_loginToPage:"/"+this.role+"/list",
    };
  },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  methods: {
    Login (){
      this.$router.push(this.url_loginToPage);
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
  color: #00b7ff;
}
</style>
