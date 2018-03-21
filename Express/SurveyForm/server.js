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
app.post('/result', function (req, res){
    res.render("result", { name: req.body.name, location: req.body.location, lang: req.body.lang, comment: req.body.comments })
});

app.listen(5000, function() {
 console.log("listening on port 5000");
});