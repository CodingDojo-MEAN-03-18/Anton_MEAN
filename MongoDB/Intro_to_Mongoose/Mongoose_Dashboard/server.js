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

mongoose.connect('mongodb://localhost/animals');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const AnimalsSchema = new Schema({
    group:{
        type: String,
        required: true
    },name: {
        type: String,
        required: [true, 'the name is required']
    },
    lifespan: {
        type: Number,
    },
    description:{
        type: String,
    }}, { timestamps :true })

const Animals = mongoose.model('Animals', AnimalsSchema );

app.get('/', (req, res) => {
    Animals.find({}, (errors, result) => {
        if(errors) console.log("Something going wrong!");
        else res.render("index", {data: result});
    });
});

app.post('/add', (req,res) =>{
    let data = new Animals({group:req.body.group, name: req.body.name, 
                        lifespan:req.body.age,  description: req.body.description});
    data.save()
        .then(data =>{
            console.log(data + " - saved!");
            res.redirect('/');    
        })
        .catch(error =>{
            console.log("!error: " + Object.keys(error.errors));
        });
});

app.get('/delete/:id', (req, res) => {
    Animals.remove({_id:req.params.id}, error =>{
        if(error) console.log("!error: " + error);
        else res.redirect('/');
    });
});

app.get('/info/:id', (req, res) => {
    Animals.find({_id:req.params.id}, (error, result) =>{
        if(error) console.log("!error: " + error);
        else res.render("info", {data: result});
    });
});

app.get('/edit/:id', (req, res) => {
    Animals.find({_id:req.params.id}, (error, result)=>{
        if(error) console.log("!error: " + error);
        else res.render("edit", {data: result});
    });
});

app.listen(port, () =>  console.log(`listening on ${port}`));