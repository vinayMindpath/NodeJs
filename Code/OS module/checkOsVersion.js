import { version, userInfo, uptime, platform, totalmem, freemem } from "os";
console.log(version());
console.log(userInfo());
// uptime of the system
console.log(`The system uptime is  : ${uptime()} seconds.`);
console.log(`The OS type is : ${platform()}`);
console.log(`Total memory : ${totalmem()}`);
console.log(`available space : ${freemem()}`);
