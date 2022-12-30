import { DeleteFile } from "./deleteFile.js";
import { ReadFile } from "./readContentFile.js";
import { CreateFile } from "./writeFile.js";
import { join } from "path";
import { cwd } from "process";
// varible that stores file name, content of the file.
const fileName = "content2.txt";
const contentOfFile = "This is my second created file. Content got updated";

// creating file first
// createFile(fileName, contentOfFile).then((res) => console.log(res));

// getting the pathe of the file
const filePath = join(cwd(), fileName);
console.log(filePath);

// creating the instance of CreateClass
const instanceOfCreate = new CreateFile();

// instance of readFile
const instanceOfRead = new ReadFile();

// instance of DeleteFile
const instanceOfDelete = new DeleteFile();

// object of all the operation that can be performed on files
const operation = {
  create: instanceOfCreate.createFile(fileName, contentOfFile),
  read: instanceOfRead.content(filePath),
  delete: instanceOfDelete.deleteFile(filePath),
};

// console.log(typeof operation);
