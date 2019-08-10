var os = require('os')
var homDIr = os.homedir()
console.log("Home Directory ==>",homDIr);
var freeMemory = os.freemem()
console.log("free memory ==>",freeMemory);
var hostName = os.hostname()
console.log("host Name ==>",hostName);
var plat = os.platform()
console.log("Platform is ==>",plat);



