import { info } from "console";
import { ClientRequest, createServer } from "http";

// creating a server
const server = createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.writeProcessing("processing");
    res.write("<h2>Do  this</h2>");
    console.log("client connected");
    res.end("<h1>hello world</h1>");
  }
  req.on("information", (info) => {
    console.log(`got information of req ${info}`);
  });
});

// setting the listening port to server
server.listen(3000);
