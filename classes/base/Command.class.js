'use strict'; 

module.exports = class Command {

  constructor(io) {
    this._io = io;
  }

  io() {
    return this._io;
  }
  
  execute() {

  }

  help() {
  
  } 

  args(arg) {
    return tzero.lm.Main.args(arg);
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