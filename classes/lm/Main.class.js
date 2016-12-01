'use strict'; 

module.exports = class Main {

  static main(info) {
    this.info = info;

    // log(this.info);

    var exe = new tzero.command.Execute(this.info.args._.join(' '));
    if (exe.execute()) {
      log(exe._output);
    } else {
      log(exe._error);
    }
  }

}