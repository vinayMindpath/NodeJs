import EventEmitter from "events";
// import { EventEmitter } from "stream";

// object or instance of EventEmit class
const emitter = new EventEmitter();
// console.log(emitter);

// settling the "messageLogged" event raised in environment
emitter.on("messageLogged", (arg) => {
  console.log(`messageLogged Event ${arg.message}`);
});

// raising an event
emitter.emit("messageLogged", { id: 2, message: "Got it." });
console.log("emited");
