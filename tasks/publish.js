'use strict';

const {commands, publish} = require('@ayro/commons');
const path = require('path');

const WORKING_DIR = path.resolve(__dirname, '../');

async function lintProject() {
  commands.log('Linting project...');
  await commands.exec('npm run lint', WORKING_DIR);
}

async function buildProject() {
  // Nothing to do...
}

// Run this if call directly from command line
if (require.main === module) {
  publish.withWorkingDir(WORKING_DIR);
  publish.withLintTask(lintProject);
  publish.withBuildTask(buildProject);
  publish.isDockerProject(true);
  publish.run();
}
