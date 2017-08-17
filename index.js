// Learn time management in loop activities

const tools = require('./functions/tools');

// ------------------------------------
// Application test
console.log('START ' + tools.LastSync());

//console.log('START ');
//LastSync();
setInterval(tools.Log, 500, tools.LastSync);
setInterval(tools.Log, 1000, "Sync sync");

/*
while(true) {
  setTimeout(Log, 1000, "Timeout " + LastSync());
}
*/
console.log('END ');
