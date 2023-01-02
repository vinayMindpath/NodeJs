import { createServer, Server } from "http";
// const server = Server();
// check the number of client s
let connectedClients = [];

let server = createServer((req, res) => {
  try {
    if (req.url === "/") {
      server.on("connection", (client) => {
        // console.log("ending the connection..");
        // res.write("ending the connection....");
        connectedClients.push(client);
      });
      res.write("Got the request");
      console.log("Got the request");
      console.log(connectedClients);
      // console.log(connection);
      res.end();
      // server.close();
    }
  } catch (err) {
    res.write("Error Encountered");
    console.log("error");
    // server.close();
  }
});

server.listen(8080);
