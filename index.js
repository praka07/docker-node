'use strict';
var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   
res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('i am up and running');
});

server.listen(4040); //3 - listen for any incoming requests

console.log('Node.js web server at port 4040 is running..')
