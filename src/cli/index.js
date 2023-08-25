// import createInitCommand from 'src/init';
// import createInstallCommand from 'src/install';
// import createLintCommand from 'src/lint';
// import createCommitCommand from 'src/commit';
// import createCLI from './createCLI.js';
// import './exception.js';
const createCLI = require('./createCLI.js');

module.exports = function cli(args) {
  const program = createCLI();
  console.log(program)
  // createInitCommand(program);
  // createInstallCommand(program);
  // createLintCommand(program);
  // createCommitCommand(program);
  program.parse(process.argv);
};
