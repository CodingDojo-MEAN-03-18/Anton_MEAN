/*************************************************************** */
//Routing
app.HTTP_VERB('URL', function (req, res){});  // HTTP_VERB is either 'get' or 'post' etc...

// root route
app.get('/', function (req, res){
    res.render('index', {title: "my Express project"});
});
// route to process new user form data:
app.post('/users', function (req, res){
    // code to add user to db goes here!
    // redirect the user back to the root route. 
    // All we do is specify the URL we want to go to:
    res.redirect('/');
})



/*************************************************************** */
//Post data

// require body-parsercopy
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

/**
 * <form action='/users' method='post'>
    Name: <input type='text' name='name'>
    Email: <input type='text' name='email'>
    <input type='submit' value='create user'>
</form>
*/

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});



/*************************************************************** */
//Session data

var session = require('express-session');
// original code:
var app = express();
// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption


app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});