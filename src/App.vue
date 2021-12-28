<template>
  <div>
      <h2>{{foo}}</h2>
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
            foo(){
                return this.name + 'Vue' 
            }
        }
    }
</script>
 
 <style scoped >
</style>
 