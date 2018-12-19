const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  var collection = db.collection('test');
//   collection.insertOne({name: "Priya", age: 34}, (err, result)=>{
//       if(err) throw err;
//       console.log('Insert successful!!');
//       client.close();
//   })


    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        client.close();
    });
});