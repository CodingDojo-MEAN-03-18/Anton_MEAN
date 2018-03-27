var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");



app.use(express.static(path.join(__dirname, "./static")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.render("index");
})

var server = app.listen(5000, function() {
 console.log("listening on port 5000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on( 'posting_form', function (data){
        socket.emit( 'message', {response: data});
        socket.emit( 'message', {number: Math.floor(Math.random() * 1000) + 1});
    })
})