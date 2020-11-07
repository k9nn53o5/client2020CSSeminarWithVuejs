<template>
    <div>
		{{foods}}
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            foodsArr:this.foods,
        };
    },
    props:{
        foods: Array,
        role: String,
        rid:Number,
        did:Number,
    },
    methods:{
       
    }
}
</script>
<style>
</style>