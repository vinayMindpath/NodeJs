import { readFile } from "fs";

export class ReadFile {
  content(filePath) {
    let fetchingContent = readFile(filePath, (err, data) => {
      if (err) {
        //   console.log(err);
      } else {
        console.log(data.toString());
        return data;
      }
    });
    //   console.log(fetchingContent);
    return fetchingContent;
  }
}
// function to read the content of the file which has been given at the time of creation of the file.
export const content = async (filePath) => {
  let fetchingContent = await readFile(filePath, (err, data) => {
    if (err) {
      //   console.log(err);
    } else {
      console.log(data.toString());
      return data;
    }
  });
  //   console.log(fetchingContent);
  return fetchingContent;
};
