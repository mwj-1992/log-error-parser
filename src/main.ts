import { createWriteStream, createReadStream } from "fs";
import LogTransform from "./Classes/LogTransform";
import { LOG_LEVELS } from "./Helper/enum";
import path = require("path");

try {
  const inputFolder = path.join(__dirname, "../input/");
  const outputFolder = path.join(__dirname, "../output/");

  const readerStream = createReadStream(`${inputFolder}app.log`, {
    encoding: "utf8",
  });
  const writeStream = createWriteStream(`${outputFolder}errors.json`);

  const logTransform = new LogTransform(LOG_LEVELS.ERROR);
  writeStream.write("["); // Write each object individually, and handle the square brackets and commas manually.
  readerStream
    .pipe(logTransform)
    .pipe(writeStream)
    .on("error", console.error);
   
} catch (error) {
  console.error(error.message);
}
