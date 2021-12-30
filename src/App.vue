<template>
  <div>
      <h2>{{getFoo(222)}}</h2>
      <Children/>
  </div>
</template>
 
<script >
import Children from './components/Children.vue'
export default {
    data(){
        return {
            name:'hello'
        }
    },
    components:{
        Children,
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
 