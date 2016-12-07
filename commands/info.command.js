'use strict'; 

module.exports = class Info extends tzero.base.Command {

  execute() {
    let t = this.exe('ls -al');
    this.log(t._output.toString());
  }

}