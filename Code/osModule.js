import obj from "fs";
import { parse } from "path";
// console.log(parse("../pathModule.js"));
import { freemem, totalmem } from "os";
var result = totalmem();
console.log(result);
var freeMemory = freemem();
console.log(freeMemory);
console.log(`total memory : ${result}`);
console.log(`free memory : ${freeMemory}`);
