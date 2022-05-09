## Getting Started

this project will work on parsing .log file and finding error level logs and saving them in json format with getting the most important information

## input Samples:
input.log file will hold data as the following 

    -2021-08-09T02:12:51.257Z - error - {"transactionId":"93abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"User2 information is gathered","user":"NAME"
    -2021-08-09T02:12:51.257Z - error - {"transactionId":"9rabc55b2-807b-4361-9dbe-aa88b1b2e978","details":"User3 information is gathered","user":"NAME"
    -2021-08-09T02:12:51.257Z - error - {"transactionId":"9ab5c55b2-807b-4361-9dbe-aa88b1b2e978","details":"User4 information is gathered","user":"NAME"


and the output will be like the following :
 - [{"timestamp":1628475171,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"About to request user orders list"}, {"timestamp":1628475171,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Cannot find user orders list"}]

# install dependencies
npm

# start developing
npm dev
```
## Folders
    - output, holds the parsed files.
    - Input, holds app.log file(the file which will be parsed). 

## Scripts
```
to test parsing function.
- node dist/parser.js 


```bash
# compile source code
npm run compile

# run application in development mode
npm run  dev

# lint the application
npm run lint
```

