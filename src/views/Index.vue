<template>
  <div>
    <p>{{msg}}</p>
    <button @click="gotoLogin('Customer')">Customer</button>
    <button @click="gotoLogin('Restaurant')">Restaurant</button>
    <button @click="gotoLogin('Deliveryman')">Deliveryman</button>
  </div>
</template>

<script>
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