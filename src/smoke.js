// Without this line the tests will fail in firefox the Object.values() function
// is not supported. That is unfortunate, but getting around it means that there
// will be far less code for the browser to deal with... I think
import "babel-polyfill"

const square = n => n * n
const obj = {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
const keys = Object.keys(obj)
const vals = Object.values(obj)

module.exports.square = square
module.exports.obj = obj
module.exports.keys = keys
module.exports.vals = vals
