<template>
  <div class="login">
    <p v-if="isLogin">
      {{message}}<br/>
      name:<input type="text" v-model="username">
      password:<input type="password" v-model="password">
      <button v-on:click="verify">Login</button>
	  <router-link to="/register">Not register yet?</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      password: "",
      message: "Please login",
      isLogin: true,
      main: false
    };
  },
  computed: {},
  methods: {
    verify: function () {
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
