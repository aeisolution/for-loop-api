// Learn time management in loop activities

// For todays date;
Date.prototype.today = function () {
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

// function LastSync
function LastSync() {
  var newDate = new Date();
  return "LastSync: " + newDate.today() + " @ " + newDate.timeNow();
}

// function Log(cb)
function Log(cb) {
  var msg = typeof cb === 'function' ? cb() : cb;
  console.log(msg);
}

// ------------------------------------
// Application test
console.log('START ' + LastSync());

//console.log('START ');
//LastSync();
setInterval(Log, 500, LastSync);
setInterval(Log, 1000, "Sync sync");

while(true) {
  setTimeout(Log, 1000, "Timeout " + LastSync());  
}

console.log('END ');
