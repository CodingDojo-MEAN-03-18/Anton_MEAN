//http server
const http = require('http');
const port = 8000;
//creating a server
const static_contents = require('./static');

server = http.createServer(function (request, response){
    static_contents(request, response);  //this will serve all static files automatically
  });

  server.listen(port);
console.log("Running in localhost at port 8000");