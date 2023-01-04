// imported http module
import { createSecretKey } from "crypto";
import { createServer, get } from "http";

// using get method to get url
get("http://localhost:8000/", (res) => {
  const { statusCode } = res;
  const contentType = res.headers["content-type"];

  let err;

  if (statusCode !== 200) {
    err = new Error("request failed");
  }
  if (err) {
    console.log("new error");
  }
  res.setEncoding("utf-8");
  let rawData = "";
  res.on("data", (chunk) => {
    rawData += chunk;
  });
  res.on("end", () => {
    try {
      const paseData = JSON.parse(rawData);
      console.log(paseData);
    } catch (err) {
      console.log("got error");
    }
  });
}).on("error", (e) => {
  console.log(e);
});

const server = createServer((request, respond) => {
  respond.writeHead(200, { "content-Type": "application/JSON" });
  respond.end(
    JSON.stringify({
      data: "Hello world",
    })
  );
});

server.listen(8080);
