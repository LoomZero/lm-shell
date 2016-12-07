'use strict'; 

const IO = tzero.lm.IO;

module.exports = class Main {

  static main(info) {
    this.info = info;

    let io = new IO();
    let commandname = this.args(0);
    if (!commandname) commandname = 'info';
    let Command = null;
    try {
      Command = require(this.root() + '/commands/' + commandname + '.command.js');
    } catch (e) {
      io.error('Command [0] is unknown!', commandname);
      return;
    }
    let help = this.args('h', false);

    let command = new Command(io);

    if (help) {
      command.help();
    } else {
      command.execute();
    }


    // var exe = new tzero.base.Execute(this.info.args._.join(' '));
    // if (exe.execute()) {
    //   log(exe._output.toString());
    // } else {
    //   log(exe._error);
    // }
  }

  static current() {
    return this.info.cd;
  }

  static root() {
    return this.info.root;
  }

  static args(arg, fallback = null) {
    if (arg === undefined) return this.info.args;

    if (Number.isInteger(arg)) {
      return this.info.args._[arg] || fallback;
    }
    return this.info.args[arg] || fallback;
  }

}