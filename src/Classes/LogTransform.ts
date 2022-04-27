import { Transform } from "stream";
import { LOG_LEVELS } from "../Helper/enum";
import * as moment from "moment";
import ErrorLog from "../Interfaces/ErrorLog";

export default class LogTransform extends Transform {
  private logLevel: string;
  constructor(logLevel: string = "error") {
    super();
    this.logLevel = logLevel;
  }
  _transform(chunck: any, encoding: string, callback: any) {
    const transformedChunk = chunck.toString();
    const logsLines = transformedChunk.split(/(\r\n|\r|\n)/);
    for (let line of logsLines) {
      const splittedArraybyLogLevel = line.split(
        // Regext to split the line by - error -
        /-[ ]{1,}error[ ]{1,}-[ ]{1,}/
      );
      if (splittedArraybyLogLevel.length > 1) {
        const formattedObject = this.errorLogsFormatter(
          splittedArraybyLogLevel
        );
        if (formattedObject != null) {
          this.push(JSON.stringify(formattedObject)+','); // Added comma after the object to keep the format of JSON file is correct
        }
      }
    }
    this.push(']');
    callback();
  }

  errorLogsFormatter(inputErrorLineArray: string[]): ErrorLog {
    try {
      const loggedObject: any = JSON.parse(inputErrorLineArray[1]);
      const inputISODate =  inputErrorLineArray[0].trim();
      const errorLog: ErrorLog = {
        timestamp: moment(inputISODate).unix(),
        loglevel: LOG_LEVELS.ERROR,
        transactionId: loggedObject.transactionId,
        err: loggedObject.details,
      };
      return errorLog;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  _flush(callback: any) {
    console.log("flush executed, the transform process has been completed");
    callback();
  }
}
