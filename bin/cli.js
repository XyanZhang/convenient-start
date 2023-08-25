const { log } = require('../src/utils/index');
const entry = require('../src/cli/index')

// 获取自定义环境变量
let envConfig = require('dotenv').config().parsed;
if(!__filename) {
  log.info(envConfig.CLI_NAME, '使用本次 %j 版本', envConfig.CLI_VERSION);
}else {
  entry(process.argv.slice(2));
}