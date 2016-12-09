'use strict';

const Main = tzero.lm.Main;
const Execute = tzero.base.Execute;
const Tool = tzero.lm.Tool;

module.exports = class Command {

  constructor(info) {
    this._info = info;
    this._pipe = [];
  }

  io() {
    return this._info.io;
  }

  alias() {
    return [this.constructor.name.toLowerCase()];
  }
  
  build() {
    this.warn('No build function defined for [0]!', this.constructor.name);
  }

  help() {
    this.warn('No help function defined for [0]!', this.constructor.name);
  }

  pipe(subject) {
    if (Tool.isString(subject)) {
      if (Tool.isFunction(this[subject])) {
        this._pipe.push(this[subject]);
      } else {
        this.error('The string [0] is not a function of class [1]', subject, this.constructor.name);
      }
    } else if (Tool.isFunction(subject)) {
      this._pipe.push(subject);
    } else {
      this.error('The subject of the function pipe must be a string or a function givin [0]', subject);
    }
  }

  execute() {
    this.build();
  }

  args(arg, fallback = null) {
    return Main.args(arg, fallback);
  }

  log() {
    return this.io().log.apply(this.io(), arguments);
  }

  warn() {
    return this.io().warn.apply(this.io(), arguments);
  }

  error() {
    return this.io().error.apply(this.io(), arguments);
  }

}