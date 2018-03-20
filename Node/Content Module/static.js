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
      } else if(request.url === '/stylesheet/style.css'){ //doesn't support any style
        fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
          response.write(contents);
          response.end();
        });
      }else if(request.url === '/images/2.jpg'){//doesn't support any pic
        fs.readFile('./images/2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }else {
          response.end('File not found!!!');
      }
};