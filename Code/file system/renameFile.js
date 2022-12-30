import { rename } from "fs";
import { cwd } from "process";

rename(`./myhContent.txt`, `Content.txt`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file renamed");
  }
});
