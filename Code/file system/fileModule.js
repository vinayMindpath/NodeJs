import { readdir, readdirSync } from "fs";

let file = readdirSync("./");
// console.log(file);
readdir("./", (err, val) => console.log(val));
