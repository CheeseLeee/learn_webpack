var _ = require('lodash');
export function createApp(){
    var div = document.createElement('div')
    div.innerHTML = 'hello div'
    console.log(_.join(['Hello', 'webpack'], ' '))
    return div
   
}