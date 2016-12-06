'use strict'; 

const execSync = require('child_process').execSync;

module.exports = class Execute {
  
  constructor(command = null) {
    this._command = command;
  }

  command(command) {
    if (command === undefined) return this._command;
    this._command = command;
    return this;
  }

  execute() {
    try {
      this._output = execSync(this._command, {stdio: [0, null, null]});
      return true;
    } catch (e) {
      this._error = e;
      return false;
    }
  }

}