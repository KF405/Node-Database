//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /*
   db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID('5c6d2d17f2632d83e6cc9b63')
   }, {
       $set: {
           completed: true
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   })
   */

   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c6c145f056ac53c24e9f583')
}, {
    $set: {
        name: 'Keith'
    },
    $inc: {
        age: 1
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
})

   // client.close();
});