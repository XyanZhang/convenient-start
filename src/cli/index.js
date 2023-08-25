// import createInitCommand from 'src/init';
// import createInstallCommand from 'src/install';
// import createLintCommand from 'src/lint';
// import createCommitCommand from 'src/commit';

const createCLI = require('./createCLI.js');
const errorCatch = require('./exception.js');

module.exports = function cli(args) {
  
  errorCatch();

  const program1 = createCLI();
  // createInitCommand(program);
  // createInstallCommand(program);
  // createLintCommand(program);
  // createCommitCommand(program);
  program.parse(process.argv);
  console.log(process.argv)
};
