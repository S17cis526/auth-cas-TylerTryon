/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3005;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');
var config = require('./config.json');

var app = express();
if(!host) throw new Exception("Host must be supplied");
if(!casHost) throw new Exception("cas host must be supplied");
var server = http.createServer(app);



// Serve files from public folder
app.use(express.static('public'));

var authCAS = require('auth-cas');
var auth = new AuthCAS(config.host, config.casHost);

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
