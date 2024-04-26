//OS module

const OSvar = require("os");
console.log(OSvar.type());
console.log(OSvar.hostname());
console.log(OSvar.machine());
console.log(`${OSvar.uptime()} seconds`);
console.log(OSvar.totalmem());

//Path Module

const path = require("path");
console.log(path.sep);
console.log(path.basename());
