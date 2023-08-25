const Mock = require('mockjs');

module.exports = function templates() {
  return Mock.mock({
    "string|1-10": "😁"
  })
}