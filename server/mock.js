const Mock = require('mockjs');
let res = Mock.mock({
  "string|1-10": "😁"
})
console.log(res)

module.exports = function templates() {
  return res
}