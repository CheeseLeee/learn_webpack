import {add} from './src/math'
import './src/style/index'
import './src/assets/font_2805740_3i9dw57ziy7/iconfont.css'
var png = require('./src/assets/imgs/sweep.png')

function createDom(){
    var body = document.body   
    var div = document.createElement('div')
    div.setAttribute('class','color-green')
    div.innerHTML = 'Hello Webpack'
    

    var i1 = document.createElement('i')
    i1.classList.add('iconfont','icon-browse')

    var img1 = new Image()
    img1.src = png
    
    body.appendChild(div)
    div.appendChild(i1)
    div.appendChild(img1)
}
createDom()
add(1,2)