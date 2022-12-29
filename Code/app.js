// import "./logger.js";
import { data, Logger } from "./logger.js";

// displaying the context of original function
// console.log(data);
// requesting the data and displaying them after getting responeded
data().then((res) => {
  let count = 1;
  res.forEach((element) => {
    if (count <= 5) {
      console.log(element);
    }
    count++;
  });
});

const log = new Logger();
log.on("messageLogged", (arg) => {
  console.log(arg.message);
});
log.log("message");
