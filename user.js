const mongoose = require("mongoose");
const validator = require("validator");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoDeep");

var user = mongoose.model("user1", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: (value) =>{
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    }
});

var newuser = new user ({email:"deepak@gmail.com"});

newuser.save().then((obs) => {
    console.log("inserted sucessfully");
    console.log(obs);
}).catch( (err) => {console.log(err)});