<template>
  <div class="register">
    {{message}}<br/>
    name:<input type="text" v-model="name"/><br/>
    password:<input type="password" v-model="password"/><br/>
    phone:<input type="text" v-model="phone"><br/>
    identity id:<input type="text" v-model="identityId"><br/>
    <button v-on:click="doRegister">Submit</button>
    <router-link :to="{path: url_login}">back to  login</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data: function(){
    return{
      name:'',
      password:'',
      phone:'',
      message:'',
      identityId:'',
      url_login:'/login/'+this.role,
      };
  },
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  methods:{
      doRegister: function(){
        let registerUrl = '/api/'+this.role;
        axios.post(registerUrl,
        {name:this.name,password:this.password,phone:this.phone,identityId:this.identityId}
        ).then((response)=>{
          console.log(response);
          if(response.status === 200){
            this.message = 'success';
            this.$router.push(this.url_login);
          }
          else{
            this.message = "error"
          }
        }).catch((error)=>{
          console.log(error);
          this.message = String(error.response.data.result);
        })
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