import createInitCommand from 'src/init';
import createInstallCommand from 'src/install';
import createLintCommand from 'src/lint';
import createCommitCommand from 'src/commit';
import createCLI from './createCLI.js';
import './exception.js';

export default function(args) {
  const program = createCLI();
  console.log(program)
  // createInitCommand(program);
  // createInstallCommand(program);
  // createLintCommand(program);
  // createCommitCommand(program);
  program.parse(process.argv);
};
