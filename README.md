# Node.js + Mocha.js + Server.js = NMS

This is a shell project designed to get you started building services with Node.js. It also provides a structure and set of conventions that allow you to get up to speed quickly and hopefully write cleaner, more testable code.

## Background
Getting started with Node.js is easy. After you understand that node's execution context is not the same as a browser. And each file has it's own scope. And there's no window object. And it has things like require built in to Node. And on and on.

After you get over that hump you can start writing your service. But doing it this way can lend itself to problems. For instance: given a single small set of requirements, if ten developers each start independently on said requirements to build their own app from scratch chances are you'll wind up with the following:

1. Application startup is inconsistent. Some will use a command line, others a bash script, the command line will not be the same. 
2. There may or may not be tests.
3. If there are tests, there will be multiple different testing frameworks employed. (Mocha, Jasmine, etc.)
4. Tests may only run from the command line or they may also run in the browser.
5. The command line to execute those tests are different.
6. Some tests only run as integration tests, meaning that the server needs to be up in order for the tests to run.
7. Some will have a ./app directory, some will have a ./lib directory
8. Some will have a ./test directory, others may have a ./tests directory, others may have no directory for tests.
9. Some will only support debugging from the command line. Others may allow you to debug with a browser.
10. Etc, etc, etc.

## Features / Tenants

1. To start a new app just clone the skeleton from GitHub. Your directory structure is in place and you can start building.  
2. To start the app just do: ```~$ node server.js```
3. There should be tests.
4. You should be able to debug both the application and the tests either from the command line or a browser.
5. The tests run at the command line should be the same as those run in the browser.
6. Use Mocha. It is designed to do this ^.
7. To run tests you should be able to do: ```~$ mocha```
8. Use Grunt intelligently to lint and run tests: ```~$ grunt```
9. There is not so much prescribed that it gets in the way. 
10. Change whatever you want, it's your app.

## Anti-Features / Untenants

1. More features. This is a _skeleton_ project.
2. More prescription. That should be up to you. This is a _skeleton_ project.

## Getting Started

Getting started is as easy as one, two, three...

1. Clone this repo into a directory of your choosing. Name it whatever you want, this is your project.
2. Run the setup commands:
    
    * ```~$ npm install```
    
    * ```~$ grunt```
    
3. Open the package.json and change the following:
    * Name
    * Description
    * Author

There, all done. Start building your app.

## Using NMS

### Running the App

    ~$ node server.js
    
### Running Tests At The Command Line

To run all tests: 

    ~$ mocha 
    
To run a single spec file:

    ~$ mocha <yourmodule>.spec.js
    
### Running Tests In The Browser

    ~$ open test/index.html


### Debugging Tests At The Command Line

First run the command: 

    ~$ mocha --debug-brk mocha/test.js

And then run node-inspector in a second shell:

    ~$ node-inspector

Bring up the URL that node-inspector spits out in a browser, typically: http://127.0.0.1:8080/debug?port=5858

### Debugging Tests In The Browser

After you ```~$ open test/index.html``` just open your browser developer tools, set a breakpoint and hit refresh.

## How To Get The Most From NMS

1. Don't clutter up the root directory.
2. Put your application code in the ./lib directory.
3. Put your specs in the ./test directory and name them _module_.spec.js.
4. Only put the code necessary to start your service inside of service.js.  Send any environment variables, command line parameters, etc into app.js as arguments to the constructor.
