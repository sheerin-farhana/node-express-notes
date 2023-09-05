// OS MODULE

const os = require('os');

//info about current user

const user = os.userInfo();

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(currentOs);