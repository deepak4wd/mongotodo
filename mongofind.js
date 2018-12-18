const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect(("mongodb://localhost:27017"), (err, client) => {

if (err){
    return console.log("error connect to mongo");    
}

console.log("connected sucessfully");

const db = client.db("todo");

db.collection("todomain").find({completed: true}).count().then((obs)=> {
    console.log("printing the count ------->>>>>>>>>>>>>>>>");
    console.log(`number of todos are :: ${obs}`);
}).catch((err)=> {

    console.log("printing the error -------###################");
    console.log(JSON.stringify(err));

});
    
    

client.close();
});



