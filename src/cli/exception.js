const { log, isDebug } = require('../utils/index');

function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
}

module.exports = function errorCatch () {
  
  process.on('unhandledRejection', (e) => printErrorLog(e, 'promise'));
  process.on('uncaughtException', (e) => printErrorLog(e, 'error'));

}