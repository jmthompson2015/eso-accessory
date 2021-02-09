const fs = require("fs");

const FileLoader = {};

FileLoader.loadLocalFile = (fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports = FileLoader;
