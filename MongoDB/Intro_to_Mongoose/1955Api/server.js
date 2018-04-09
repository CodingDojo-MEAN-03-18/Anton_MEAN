const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const app = express();
const Schema = mongoose.Schema;

app.use(bodyParser.json()); 

mongoose.connect('mongodb://localhost/1955api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const myApiSchema = new Schema({
    name: { type: String, required: true }
});

const myApi = mongoose.model('Post', myApiSchema );

app.get('/', (req, res) => {
    myApi.find({})
        .then(data => res.json({ message: data }))
        .catch(err => console.log('error: ', err));
});

app.get('/new/:name/', (req, res) => {
    myApi.create({ name: req.params.name })
        .then( person => {
            console.log('Added: ', person);
            res.redirect('/');
        })
        .catch(err => console.log(err))
})

app.get('/remove/:name/', (req, res) => {
    myApi.remove({ name: req.params.name })
        .then( person => {
            console.log('Removed: ', person);
            res.redirect('/');
        })
        .catch(err => console.log(err))
})

app.get('/:name/', (req, res) => {
    myApi.find({name: req.params.name})
        .then(data => res.json({ message: data }))
        .catch(err => console.log('error: ', err));
})


app.listen(port, () =>  console.log(`listening on ${port}`));