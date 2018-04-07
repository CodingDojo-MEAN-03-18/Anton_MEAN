const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;
const mongoose = require('mongoose');
const { Schema } = mongoose;


app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const QuoteSchema = new Schema({
    name : {
        type: String,
        required: [true, 'the name is required']
        },
        quote: {
            type: 'string',
            required: [true, 'the quote is required']
        }
    }, { timestamps :true })

const Quote = mongoose.model('Quote', QuoteSchema );

app.get('/', (req, res) => res.render("index"));

app.get('/quotes', (req, res) => {
    Quote.find({}, (errors, quotes) => {
        if(errors) console.log("Something going wrong!");
        else res.render("quotes", {data: quotes});
    });
});

app.post('/quotes', (req,res) =>{
    let data = new Quote({name: req.body.name , quote: req.body.quote });
    data.save()
        .then(data =>{
            console.log(data + " - saved!");
            res.redirect('/quotes');    
        })
        .catch(error =>{
            console.log("!error: " + Object.keys(error.errors));
        });
});

app.listen(port, () =>  console.log(`listening on ${port}`));