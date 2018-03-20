module.exports = function (request, response){
    const   fs = require('fs'); 
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
          response.write(contents); 
          response.end();
        });
      }else if(request.url === '/dojo.html'){
        fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
          response.write(contents);
          response.end();
        });
      } else if(request.url.endsWith('.css')){ //doesn't support any style
        fs.readFile('.' + request.url, 'utf8', function (errors, contents) {
          response.write(contents);
          response.end();
        });
      }else if(request.url.endsWith('.jpg')){//doesn't support any pic
        fs.readFile("."+request.url, function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else {
          response.end('File not found!!!');
      }
};