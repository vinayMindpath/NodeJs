// import path = require("path");
import { basename, join, sep } from "path";
import { cwd } from "process";

console.log(sep);
console.log(join(cwd(), "content.js"));
const filePath = join(cwd(), "content.js");
console.log(basename(filePath));
