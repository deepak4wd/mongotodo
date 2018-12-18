const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect(("mongodb://localhost:27017"), (err, client) => {

if (err){
    return console.log("error connect to mongo");    
}

console.log("connected sucessfully");

const db = client.db("todo");

db.collection("todomain").findOneAndUpdate({
    _id: new ObjectID("5c18e45bb2867c26342fc6e9")
},{
    $set: {completed: true}
},{
    returnOriginal: false
}).then((obs)=> {
    console.log("printing the object ------->>>>>>>>>>>>>>>>");
    console.log(JSON.stringify(obs));
}).catch((err)=> {

    console.log("printing the error -------###################");
    console.log(JSON.stringify(err));

});   
    

client.close();
});
