var express = require("express");
var session = require('express-session');
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(session({
    secret: "cookie_secret",
    name: "cookie_name",
 //   store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


app.use(express.static(path.join(__dirname, "./static")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    if(!req.session.number){
        req.session.number = Math.floor(Math.random() * 101);
    }
    if(!req.session.result){
        req.session.result = 0;
    }
    res.render("index", {result: req.session.result});
});

app.post('/result', function (req, res){
    var answer  = req.body.num;
    if (answer < req.session.number){
        req.session.result = "Too low!"; //too low!
    }else if (answer > req.session.number){
        req.session.result = "Too high!"; //too high
    }else req.session.result = req.session.number + " was the number!";
    res.redirect('/');
});

app.get('/reset', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});

app.listen(5000, function() {
 console.log("listening on port 5000");
});