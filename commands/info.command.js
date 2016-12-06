'use strict'; 

module.exports = class Info extends tzero.base.Command {
  
  help() {
    this.log('test');
  }

  execute() {
    this.log(this.args(0));
  }

}