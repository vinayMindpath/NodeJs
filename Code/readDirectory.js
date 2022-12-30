import { readdir, readdirSync } from "fs";

let readAsync = async () => {
  let reading = await readdirSync("../", (err, data) => {
    return data;
  });
  console.log(typeof reading);
  return reading;
};
readAsync()
  .then((res) => {
    console.log("data gathered by asynchronous function : ");
    console.log(res);
  })
  .catch((err) => console.log("error encounterred"));

let readSync = async () => {
  let getData = await readdir("../", (err, data) => {
    console.log("data gathered by synchronous function : ");
    console.log(data);
    return data;
  });
  console.log(typeof getData);
  return getData;
};

readSync();
console.log(typeof readSync);
// console.log(`data gathered by synchronous function ${readSync().then()}`);
