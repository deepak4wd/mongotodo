const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(("mongodb://localhost:27017"), (err, client) => {

if (err){
    return console.log("error connect to mongo");
    
}

console.log("connected sucessfully");

const db = client.db("todo");

db.collection("todo1").insertOne(({text: "inserted 2 via program"}), (err, result) => {
    if (err){
        return console.log("error while inserting");        
    }
    
    console.log(JSON.stringify(result.ops));

});


client.close();
});



