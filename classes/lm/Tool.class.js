'use strict'; 

module.exports = class Tool {
  
  static isFunction(subject) {
    return typeof subject === 'function';
  }

  static isString(subject) {
    return typeof subject === 'string';
  }

  static isInt(subject) {
    return Number.isInteger(subject);
  }

}