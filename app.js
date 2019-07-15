// -- DEPENDENCIES --

// environment variables
const env = require('./util/environment');

// nodejs dependencies
const path = require('path');

// routes
const looplabRoute = require('./routes/looplab.route');

// express
const express = require('express');
const app = express();

// -- LOGIC --

// check for environment variables not defined
if (env.envUndefined().length > 0) {
  env.envUndefined().forEach(function(errorMessage) {
    throw new Error(errorMessage);
  });
}

// exposed public folder through /static url
app.use('/static', express.static(path.join(__dirname, 'public')));

// routing
app.use('*', looplabRoute);

// running server
app.listen(env.portNumber, () => {
    console.log('Server running at ' + new Date());
    console.log('Express is running on port ' + env.portNumber);
});