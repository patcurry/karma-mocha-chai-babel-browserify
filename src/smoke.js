import "babel-polyfill"

// yeah
const square = n => n * n
const obj = {1: 'a', 2: 'b', 3: 'c', 4: 'd'}
const keys = Object.keys(obj)
const vals = Object.values(obj)

module.exports.square = square
module.exports.obj = obj
module.exports.keys = keys
module.exports.vals = vals
