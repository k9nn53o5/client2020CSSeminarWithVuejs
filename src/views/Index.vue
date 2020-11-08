<template>
  <div>
    <p>{{msg}}</p>
    <button @click="gotoLogin('customers')">Customer</button>
    <button @click="gotoLogin('restaurants')">Restaurant</button>
    <button @click="gotoLogin('deliverymans')">Deliveryman</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data: function(){
    return{
      msg:'Main page',
      role:"",
    };
  },
  methods: {
    gotoLogin (identity){
    this.role = identity;
    this.$router.push('/login/'+this.role);
    }
  },
  created() {
    axios.get('/api/test/abc').then((response) => {
      console.log(response);
    })
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