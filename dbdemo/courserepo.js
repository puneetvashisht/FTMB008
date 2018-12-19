const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';

function connect(callback){
// Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
    callback(db);
    })
}

function insertCourse(course){
    connect((db)=>{
        var collection = db.collection('course');
        collection.insertOne(course, (err, result)=>{
        if(err) throw err;
        console.log('Insert course successful!!');
        })
    })

}

function findCourses(callback){
    connect((db)=>{
        var collection = db.collection('course');
       collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        // console.log("Found the following records");
        // console.log(docs)
        callback(null, docs);
    });
    })

}

module.exports =  {insertCourse,findCourses}


    



