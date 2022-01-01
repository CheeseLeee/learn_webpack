import { cube } from './src/math.js';
import './src/style.css'
function component() {

 const element = document.createElement('pre');

 // Lodash, now imported by this script

 element.innerHTML = [
   'Hello webpack!',
   '5 cubed is equal to ' + cube(5)
 ].join('\n\n');

  return element;
}

document.body.appendChild(component());
const body = document.body
const div = document.createElement('div')
div.innerHTML = 'hi webpack'
//div.className('red')
div.setAttribute('class','red')
body.appendChild(div)