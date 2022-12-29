import { readdir, readdirSync } from "fs";
let readAsync = async () => {
  let reading = await readdirSync("../", (err, data) => {
    //   return data;
  });
  console.log(typeof reading);
  return reading;
};
readAsync().then((res) => {
  console.log("data gathered by asynchronous function : ");
  console.log(res);
});

let readSync = readdir("./", (err, data) => {
  console.log(data);
});

// console.log(`data gathered by synchronous function ${readSync}`);
