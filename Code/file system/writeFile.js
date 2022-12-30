import { writeFile } from "fs";

// get a class
export class CreateFile {
  createFile(fileName, fileContent) {
    let creatingFile = writeFile(fileName, fileContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created");
        return "file Created";
      }
    });
    return creatingFile;
  }
}

// create file using name
const createFile = async (fileName, fileContent) => {
  let creatingFile = await writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
      return "file Created";
    }
  });
  return creatingFile;
};

// creastFile("content.txt", "This is my first created file. Content got updated");
