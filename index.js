#!/usr/bin/env node

const execSync = require('child_process').execSync;
try {
  var code = execSync('cp -v shallo.txt test.txt', {stdio: [0, null, null]});
  console.log(code.toString());
} catch (e) {
  console.log(e.stderr.toString());
}

console.log('finish');
