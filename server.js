const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoDeep");

var ToDo = mongoose.model("todo1", {
text: {type: String, required: true, minlength: 1, trim: true },
completed: {type: Boolean, default: false},
createdat: {type: Number, default: 18122018}
});

var app = express();
app.use(bodyparser.json());

app.post('/todos', (req, resp) => {
    var newtodo = new ToDo({text: req.body.text});

    newtodo.save().then((obs)=>{
            console.log("inserted sucessfully");
            resp.send(obs);
        }).catch((err)=>{
            console.log("inserted fail");
            resp.status(400).send(err);

        });
});

app.get('/todos', (req,resp)=>{

    ToDo.find().then((todos)=>{
        console.log("read sucessfully");
        resp.send({todos})
    }).catch((err)=>{
        console.log("read failed");
        resp.status(400).send(err)
    });
});

app.listen(3000, ()=>{
    console.log("started on port 3000");
});
