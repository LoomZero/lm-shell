'use strict';

var spawn = require('child_process').spawn;
var child = spawn('drush', ['cim'], {
  cwd: '/var/www/html/cdu-d8/web',
});

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

// pass input to child process
process.stdin.on('data', function(chunk) {
  child.stdin.write(chunk + '\n');
});

child.on('exit', function(code) {
  process.exit(code);
});