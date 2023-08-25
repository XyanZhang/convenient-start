import importLocal from 'import-local';
import { log } from 'src/utils';
import { filename } from 'dirname-filename-esm';
import entry from 'src/cli/lib/index.js';

const __filename = filename(import.meta); // import.meta: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import.meta

if (importLocal(__filename)) {
  log.info('cli', '使用本次 fast-start 版本');
} else {
  entry(process.argv.slice(2));
}
