Date = require('./extend-date');

let tools = function() {
  'use strict';
  var self = this;

  // function LastSync
  self.LastSync = function() {
    let newDate = new Date();
    return "LastSync: " + newDate.today() + " @ " + newDate.timeNow();
  }

  // function Log(cb)
  self.Log = function(cb) {
    let msg = typeof cb === 'function' ? cb() : cb;
    console.log(msg);
  }

}

module.exports = new tools();
