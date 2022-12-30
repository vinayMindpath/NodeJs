import fetch from "node-fetch";
const url = `https://jsonplaceholder.typicode.com/todos`;
import EventEmitter from "events";
import { Module } from "module";

export const data = async () => {
  let getting = await fetch(url);
  let getJson = await getting.json();
  return getJson;
};

// creating class for binding both of the object
export class Logger extends EventEmitter {
  log(message) {
    console.log(`${message}, got it`);
    this.emit("messageLogged", { id: 1, message: "Finally" });
  }
}
// Module.exports = Logger;
