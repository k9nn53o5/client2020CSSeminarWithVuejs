<template>
  <div class="register">
    <registerCR :role="role" v-if="role==='customers'||role==='restaurants'"></registerCR>
    <registerD :role="role" v-if="role==='deliverymans'"></registerD>
  </div>
</template>

<script>
import registerCR from '../components/RegisterForC_R'
import registerD from '../components/RegisterForD'

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
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  components: {
    registerCR,
    registerD,
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