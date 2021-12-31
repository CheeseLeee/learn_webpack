
const foo = require('./src/index')
const { file, parse } = require('./src/globals.js')
document.body.appendChild(foo());
parse()