import { error } from "console";
import { Module } from "module";
import path, { parse } from "path";
try {
  let pathobj = path.parse("../pathModule.js");
  console.log(pathobj);
  console.log("add");
} catch (error) {
  console.log("error");
  //   console.log(module)
  //   console.log(Module);
}

// console.log(path);
// let pathobj = path.parse("../pathModule.js");
// console.log(pathobj);
