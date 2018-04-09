const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/board');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

const PostSchema = new Schema({
    name: { type: String, required: true },
    message:{type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    });

const CommentSchema = new Schema({
    _post: { type: Schema.Types.ObjectId, ref: 'Post'},
    name: { type: String, required: true },
    text:{ type: String, required: true }
});

const Post = mongoose.model('Post', PostSchema );
const Comment = mongoose.model('Comment', CommentSchema );

app.get('/', (req, res) => {
    Post.find({})
        .populate('comments')
        .exec((err, posts) =>{
            if(err) console.log("!Error:" + err);
            else res.render('index', {data: posts})
        });
});

app.post('/add', (req, res) =>{
    let data = new Post({name: req.body.name, message: req.body.message});
    data.save()
        .then(data =>{
        console.log(data + " - saved!");
        res.redirect('/');    
        })
        .catch(error =>{
            console.log("!error: " + Object.keys(error.errors));
            res.render('index', { errors: error });
        });
});

app.post('/comment/:id/', (req, res) =>{
    const message_id = req.params.id;
    Post.findOne({ _id: message_id }, (err, message) =>{
        let new_comment = new Comment({name: req.body.name, text: req.body.comment});
        new_comment._post = message._id;
        Post.update({ _id: message._id }, { $push: { comments: new_comment }}, err => {
            console.log("!error:" + err);
        });
        new_comment.save(err =>{
            if(err){
                console.log(err);
				res.render('index', { errors: new_comment.errors });
            }else {
                console.log("comment added");
				res.redirect("/");
            }
        });
    });

});

app.listen(port, () =>  console.log(`listening on ${port}`));