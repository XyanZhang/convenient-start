const path = require('path');
const program = require('commander');
const fse = require('fs-extra');
const semver = require('semver');
const chalk = require('chalk');
const log = require('../utils/index');

const pkgPath = path.resolve(__dirname, '../../package.json');
const pkg = fse.readJsonSync(pkgPath);
console.log(pkg)
const LOWEST_NODE_VERSION = '14.0.0';

function checkNodeVersion() {
  log.verbose('node version', process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(chalk.red(`fstart 需要安装 ${LOWEST_NODE_VERSION} 以上版本的 Node.js`));
  }
}

function preAction() {
  // 检查Node版本
  checkNodeVersion();
}

module.exports = function createCLI() {
  log.info('version', pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage('<command> [options]')
    .version(pkg.version)
    .option('-d, --debug', '是否开启调试模式', false)
    .hook('preAction', preAction);

  program.on('option:debug', function() {
    console.log(program.opts());
    if (program.opts().debug) {
      log.verbose('debug', 'launch debug mode');
    }
  });

  program.on('command:*', function(obj) {
    log.error('未知的命令：' + obj[0]);
  });
  return program;
}