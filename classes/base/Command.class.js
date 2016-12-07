'use strict';

const Main = tzero.lm.Main;
const Execute = tzero.base.Execute;

module.exports = class Command {

  constructor(io) {
    this._io = io;
  }

  io() {
    return this._io;
  }
  
  execute() {
    this.warn('No execute function defined for [0]!', this.constructor.name);
  }

  help() {
    this.warn('No execute function defined for [0]!', this.constructor.name);
  }

  exe(command) {
    if (this.args('save', false)) {
      this.log('SAVE: ' + command);
    } else {
      let execute = new Execute(command);
      execute.execute();
      return execute;
    }
  }

  args(arg, fallback = null) {
    return Main.args(arg, fallback);
  }

  log() {
    return this._io.log.apply(this._io, arguments);
  }

  warn() {
    return this._io.warn.apply(this._io, arguments);
  }

  error() {
    return this._io.error.apply(this._io, arguments);
  }

}