var http = require('http');
var fs = require('fs');
var port = 7077;

var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }else if(request.url === '/cars/new'){
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }else if(request.url.endsWith('.css')){
        fs.readFile('.' + request.url, 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
    }else if(request.url.endsWith('.jpg')){
        fs.readFile("."+request.url, function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else {// request didn't match anything:
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

server.listen(port);
console.log("Running in localhost at port " + port);