import http from "http";
import { data } from "./logger.js";

try {
  const server = http.createServer((req, respond) => {
    if (req.url === "/") {
      data().then((res) => {
        let count = 1;
        res.forEach((element) => {
          if (count <= 5) {
            respond.write(element);
            console.log(element);
          }
          count++;
        });
      });
    }
    if (req.url === "/api/courses") {
      console.log("doing JSON thing");
      respond.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
      respond.end();
    }
  });

  server.listen(3000);
  console.log("listening on port 3000");
} catch (error) {
  console.log("already in use");
}
