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
import axios from 'axios'

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
    };
  },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  methods: {
    Login () {
      //do vertify
      let verifyUrl = '/api/'+this.role+'/verify'
      axios.post(verifyUrl,
      {name: String(this.username), password: String(this.password)}
      ).then((response) => {
        console.log(response)
        if(response.data.result === 'Valid'){
          let url_loginToPage = "/"+this.role+"/"+Number(response.data.id)+"/list";
          this.$router.push(url_loginToPage);
        }
        else{
          this.message = String(response.data.result);
        }
      }).catch((error) => {
        console.log(error);
        this.message = String(error.response.data.result);
      })
    },
  },
  mounted() {
      this.$store.dispatch('restaurant/getRestaurantsList')
      this.$store.dispatch('customer/getCustomersList')
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
