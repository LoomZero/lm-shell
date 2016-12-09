'use strict'; 

const IO = tzero.lm.IO;
const Tool = tzero.lm.Tool;
const glob = require('glob');

module.exports = class Main {

  static main(info) {
    this._info = info;
    this._info.io = new IO();
    this._register = [];

    this.boot();

    let commandname = this.args(0) || 'info';
    let command = this.search(commandname);

    if (command === null) {
      this.info().io.error('No command or alias found with name [0]', commandname);
      return;
    }

    let help = this.args('h', false);

    if (help) {
      command.help();
    } else {
      command.execute();
    }
  }

  static search(commandname) {
    for (let index in this._register) {
      if (this._register[index].alias().indexOf(commandname) >= 0) {
        return this._register[index];
      }
    }
    return null;
  }

  static boot() {
    const files = glob.sync('commands/**/*.command.js', {cwd: this.root(), absolute: true});

    for (let file in files) {
      let c = require(files[file]);

      this._register.push(new c(this.info()));
    }
  }

  static info() {
    return this._info;
  }

  static current() {
    return this._info.cd;
  }

  static root() {
    return this._info.root;
  }

  static args(arg, fallback = null) {
    if (arg === undefined) return this._info.args;

    if (Tool.isInt(arg)) {
      return this._info.args._[arg] || fallback;
    }
    return this._info.args[arg] || fallback;
  }

}