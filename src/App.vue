<template>
  <div>
      <h2>{{getFoo(222)}}</h2>
  </div>
</template>
 
<script >
    export default {
        data(){
            return {
                name:'hello'
            }
        },
        computed:{
            getFoo(){
                return function(num){
                    return this.name + num
                }
            }
        }
    }
</script>
 
 <style scoped >
</style>
 