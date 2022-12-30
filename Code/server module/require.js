import { Logger } from "./logger.js";
const instanceOfGetLogger = new Logger();

instanceOfGetLogger.on("messageLogged", (res) => {
  console.log(res);
});
instanceOfGetLogger.log("work");
