import { unlink } from "fs";

// class to delete the file
export class DeleteFile {
  deleteFile(path) {
    unlink(path, (err) => {
      if (err) {
        console.log("invalid path or filename.");
      } else {
        console.log("file deleted.");
      }
    });
  }
}

// function to delete the file
export const deleteFile = (path) => {
  unlink(path, (err) => {
    if (err) {
      console.log("invalid path or filename.");
    } else {
      console.log("file deleted.");
    }
  });
};
