
import { LOG_LEVELS } from '../Helper/enum';
import LogTransform from './LogTransform';
import ErrorLog from "../Interfaces/ErrorLog";


describe('Test LogTransform function',()=>{
  it('should return an Object of ErrorLogFormat',()=>{
    const logTransform = new LogTransform(LOG_LEVELS.ERROR);
    const input =['2021-08-09T02:12:51.254Z', '{"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to request user orders list","userId": 10}']
    const result = logTransform.errorLogsFormatter(input);
    expect(result.timestamp).toEqual(moment(input[0]).unix())
    // expect(result).toBeInstanceOf(ErrorLog);
  })
});