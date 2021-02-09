/* eslint no-console: ["error", { allow: ["log","error"] }] */

const FileLoader = require("./FileLoader.js");
const FileWriter = require("./FileWriter.js");

const LuaJsonConverter = {};

const fetch = (inputFile, prefix, suffix, isVerbose) =>
  new Promise((resolve) => {
    const receiveData = (luaDocument0) => {
      const key1 = prefix;
      const index1 = luaDocument0.indexOf(key1) + key1.length;
      const key2 = suffix;
      const index2 = luaDocument0.lastIndexOf(key2);
      const luaDocument = luaDocument0.substring(index1, index2);

      if (isVerbose && luaDocument) {
        console.log(`1 luaDocument  = ${luaDocument.substring(0, 100)}`);
        console.log(
          `2 luaDocument  = ${luaDocument.substring(luaDocument.length - 100)}`
        );
      }

      const jsonDocument = luaDocument
        .replace(/\[(-*[0-9]+)\]/g, '"$1"')
        .replace(/\[/g, "")
        .replace(/\]/g, "")
        .replace(/=/g, ":")
        .replace(/,\}/g, "}");

      if (isVerbose && jsonDocument) {
        console.log(`1 jsonDocument = ${jsonDocument.substring(0, 100)}`);
        console.log(
          `2 jsonDocument = ${jsonDocument.substring(
            jsonDocument.length - 100
          )}`
        );
        console.log(`jsonDocument.length = ${jsonDocument.length}`);
      }

      try {
        const json = JSON.parse(jsonDocument);
        resolve(JSON.stringify(json, null, 2));
      } catch (error) {
        console.error(error);
        resolve(jsonDocument);
      }
    };

    const options = {};
    FileLoader.loadLocalFile(inputFile, options, 3).then(receiveData);
  });

LuaJsonConverter.convert = (
  inputFile,
  prefix,
  suffix,
  outputFile1,
  outputFile2,
  isVerbose = true
) => {
  const start = Date.now();
  fetch(inputFile, prefix, suffix, isVerbose).then((content1) => {
    FileWriter.writeFile(outputFile1, content1);
    const index1 = outputFile2.lastIndexOf("/");
    const index2 = outputFile2.lastIndexOf(".");
    const variableName = outputFile2.substring(index1 + 1, index2);
    const content2 =
      `const ${variableName} = ${content1}\n\n` +
      `export default ${variableName};\n`;
    FileWriter.writeFile(outputFile2, content2);
    const end = Date.now();
    console.log(`elapsed: ${end - start} ms`);
  });
};

module.exports = LuaJsonConverter;
