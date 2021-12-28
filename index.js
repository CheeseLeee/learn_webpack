import {createApp, h}  from 'vue'
import App from './src/App.vue'
import './src/style/index.css'
const HelloVueApp = {
    data() {
      return {
        message: 'Hello Vue!!'
      }
    },
    render(){
        return h('div',{},[
            h('p',{},'hello vue'),
            h(App,{},{})
        ])       
    }
  }
const app  =createApp(HelloVueApp)
app.mount('#app')