import obj, { readFile, readFileSync } from "fs";
import { parse } from "path";
// console.log(parse("../pathModule.js"));
import { freemem, totalmem } from "os";
var result = totalmem();
// console.log(result);
var freeMemory = freemem();
// console.log(freeMemory);
console.log(`total memory : ${result}`);
console.log(`free memory : ${freeMemory}`);

// JSON file read
var task = async () => {
  let userData = await readFileSync(
    "/home/abc/Documents/NodeJs/Code/user.json",
    "utf-8",
    (err, data) => {
      //   console.log(data);
      //   return data;
    }
  );
  //   userData.JSON();
  console.log(typeof userData);
  return userData;
};
// console.log(task);
let add = task()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
// console.log(add);
