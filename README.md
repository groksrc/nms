## Debugging Tests

First run the command: 

    ~$ mocha --debug-brk mocha/test.js

And then run node-inspector in a second shell:

    ~$ node-inspector

Bring up the URL that node-inspector spits out in a browser.

http://127.0.0.1:8080/debug?port=5858