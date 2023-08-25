// import { getLatestVersion } from './npm.js';
// import request from './request.js';
// import Github from './git/Github.js';
// import Gitee from './git/Gitee.js';
// import { getGitPlatform, clearCache } from './git/GitServer.js';
// import { initGitServer, initGitType, createRemoteRepo } from './git/GitUtils.js';
const log = require('./log.js');
const isDebug = require('./isDebug.js');
const { makeList, makeInput, makePassword } = require('./inquirer.js');
const request = require('./request.js');

function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
}
module.exports = {
  printErrorLog,
  log,
  isDebug,
  makeList,
  makeInput,
  makePassword,
  request,
  // getLatestVersion,
  // Github,
  // Gitee,
  // getGitPlatform,
  // initGitServer,
  // initGitType,
  // clearCache,
  // createRemoteRepo,
};
