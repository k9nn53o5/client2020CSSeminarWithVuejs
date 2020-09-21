<template>
	<div>
		<p>{{msg}}</p>
		<button @click="gotoLogin">Login</button>
	</div>
</template>

<script>
export default {
  name: 'Index',
  data: function(){
    return{
      msg:'Main page'
    };
  },
  methods: {
	  gotoLogin (){
		  this.$router.push('/login');
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