// Only put the code necessary to start the service inside of service.js.  
// Send any environment variables, command line parameters, etc into app.js 
// as arguments to the constructor.

// TODO: Setup stuff here

var app = require("./lib/app")(/* send args in here */);

app.start();

// Do whatever you want for stopping. Or leave it out entirely. 
// This is for demonstration:
app.stop();