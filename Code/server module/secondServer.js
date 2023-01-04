import { createServer } from "http";

let count = 1;
const server = createServer((req, res) => {
  if (req.url === "/flower.com") {
    res.write("<h1>Welcome to our server</h1>");
    res.writeContinue({ flower: ["rose", "lily", "lotus"] });
    res.end("displayed all flowers");
  } else {
    res.write("<h1>Welcome to our server</h1>");
    res.end(`response done ${count}`);
    count += 1;
  }
  // rount += 1;
});

server.listen(4000);
console.log("listening to the port : ");
