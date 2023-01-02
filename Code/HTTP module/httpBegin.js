// importing http module of node js
import { createServer } from "http";

// limit of connection
let connection_ = 0;

// creating http server to handle request
const server = createServer((request, respond) => {
  if (request.url === "/" && connection_ <= 10) {
    console.log("new connection..");
    respond.write("Got connected....");
    respond.end();
  }
  if (request.url === "/flower.com" && connection_ <= 10) {
    console.log("new connection..");
    respond.write(JSON.stringify(["rose", "lotus", "lily", "sunflower"]));
    respond.end();
  }
  if (connection_ > 10) {
    console.log("overload");
    respond.write("stop working");
    respond.end();
    server.close();
  }
  console.log(connection_);
  connection_++;
});

// handling the emitted event

// set port where the request are about to get
server.listen(3000);

// for our concern
console.log("Listening on port 3000.......");
