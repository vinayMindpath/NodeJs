import {} from "http";
import { createConnection } from "net";

const client = createConnection({ port: 8080 });

// to listen message sent by the server
client.on("data", (data) => {
  console.log(`message received from server : ${data}`);
});

// client.connect();
