const express = require("express");
const app = express();
const path = require("path");

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/angular-app/dist'));

const mongooseUniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Task title is required'],
      minlength: [5, 'Task title length must be greater than 5'],
      unique: true
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
  }, {timestamps: true}
);

taskSchema.plugin(mongooseUniqueValidator, { message: '{PATH} must be unique.' });
const Task = mongoose.model('Task', taskSchema);

const taskController = {
    index: (request, response) => {
      Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => console.log(error));
    },
    create: (request, response) => {
      Task.create(request.body)
        .then(task => response.json(task))
        .catch(error => console.log(error));
    }
};

app
  .get('/tasks', taskController.index)
  .post('/tasks', taskController.create)
  .all("*", (request, response, next) => {
        response.sendfile(path.resolve("./public/dist/index.html"));
    });

const port = process.env.PORT || 5000;
app.listen(port , () => {console.log(`listening on port ${port}`)});