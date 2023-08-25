"use strict";

var _importLocal = _interopRequireDefault(require("import-local"));
var _utils = require("src/utils");
var _dirnameFilenameEsm = require("dirname-filename-esm");
var _index = _interopRequireDefault(require("src/cli/lib/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _filename = (0, _dirnameFilenameEsm.filename)(import.meta); // import.meta: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta

if ((0, _importLocal["default"])(_filename)) {
  _utils.log.info('cli', '使用本次 fast-start 版本');
} else {
  (0, _index["default"])(process.argv.slice(2));
}