'use strict'; 

const colors = require('colors/safe');

module.exports = class IO {
  
  log() {
    console.log.apply(console, arguments);
  }

  warn(message) {
    let params = this.args(arguments, 1);

    for (let i = 0; i < params.length; i++) {
      message = message.replace('\[' + i + '\]', '\'' + params[i] + '\'');
    }
    console.log(colors.yellow('WARN: ' + message));
  }

  error(message) {
    let params = this.args(arguments, 1);

    for (let i = 0; i < params.length; i++) {
      message = message.replace('\[' + i + '\]', '\'' + params[i] + '\'');
    }
    console.log(colors.red('ERROR: ' + message));
  }

  args(args, offset = 0) {
    let array = [];

    for (let i = offset; i < args.length; i++) {
      array.push(args[i]);
    }
    return array;
  }

}