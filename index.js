#!/usr/bin/env node

const classes = require('tzero-classes');
const args = require('yargs').argv;
 
classes.register('tzero', __dirname + '/classes');

global.log = function globalLog() {
  console.log.apply(console, arguments);
};

const info = {
  args: args,
  root: __dirname,
  cd: process.cwd(),
};

tzero.lm.Main.main(info);

// const execSync = require('child_process').execSync;
// try {
//   var code = execSync('cp -v shallo.txt test.txt', {stdio: [0, null, null]});
//   console.log(code.toString());
// } catch (e) {
//   console.log(e.stderr.toString());
// }

// console.log('finish');
