var express = require("express");
var path = require("path");
var session = require('express-session');
var app = express();
app.use(session({
    secret: "cookie_secret",
    name: "cookie_name",
 //   store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    if(!req.session.counter){
        req.session.counter = 0;
    }
    req.session.counter +=1;
    res.render("index.ejs", {counter: req.session.counter});
})
app.get('/plus', function(req, res) {
    req.session.counter +=2;
    res.redirect('/');
})

app.get('/reset', function(req, res) {
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});